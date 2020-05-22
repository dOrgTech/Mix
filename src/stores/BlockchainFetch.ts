import { action, observable } from 'mobx';
import RootStore from 'stores/Root';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { isChainIdSupported } from '../provider/connectors';
import { ContractType } from './Provider';

export default class BlockchainFetchStore {
    @observable activeFetchLoop: any;
    @observable initialLoadComplete: boolean;
    rootStore: RootStore;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action setFetchLoop(
        web3React: Web3ReactContextInterface,
        accountSwitched?: boolean
    ) {
        if (web3React.active && isChainIdSupported(web3React.chainId)) {
            const { library, account, chainId } = web3React;
            const {
                providerStore,
                configStore,
                multicallService,
                blockchainStore,
                transactionStore,
            } = this.rootStore;

            library.eth
                .getBlockNumber()
                .then((blockNumber) => {
                    const lastCheckedBlock = providerStore.getCurrentBlockNumber();

                    // console.debug('[Fetch Loop] Staleness Evaluation', {
                    //     blockNumber,
                    //     lastCheckedBlock,
                    //     forceFetch,
                    //     account: web3React.account,
                    //     doFetch: blockNumber !== lastCheckedBlock || forceFetch,
                    // });

                    const doFetch =
                        blockNumber !== lastCheckedBlock || accountSwitched;

                    if (doFetch) {
                        console.debug('[Fetch Loop] Fetch Blockchain Data', {
                            blockNumber,
                            account,
                            chainId,
                        });

                        // Set block number
                        providerStore.setCurrentBlockNumber(blockNumber);

                        // Get user-specific blockchain data
                        if (account) {
                            transactionStore.checkPendingTransactions(
                                web3React,
                                account
                            );

                            multicallService.addCall({
                                contractType: ContractType.Multicall,
                                address: configStore.getMulticallAddress(),
                                method: 'getEthBalance',
                                params: [account],
                            });

                            // TODO: Get balance of each asset + approval for currently selected protocol
                            // multicallService.addCall({
                            //     contractType: ContractType.ERC20,
                            //     address: activeDATAddress,
                            //     method: 'balanceOf',
                            //     params: [account],
                            // });

                            // multicallService.addCall({
                            //     contractType: ContractType.ERC20,
                            //     address: activeDATAddress,
                            //     method: 'allowance',
                            //     params: [account, activeDATAddress],
                            // });
                        }

                        const calls = multicallService.activeCalls;
                        const rawCalls = multicallService.activeCallsRaw;

                        multicallService
                            .executeCalls(calls, rawCalls)
                            .then(async (response) => {
                                const {
                                    calls,
                                    results,
                                    blockNumber,
                                } = response;
                                const updates = blockchainStore.reduceMulticall(
                                    calls,
                                    results,
                                    blockNumber
                                );
                                blockchainStore.updateStore(
                                    updates,
                                    blockNumber
                                );
                            })
                            .catch((e) => {
                                // TODO: Retry on failure, unless stale.
                                console.error(e);
                            });

                        if (!this.initialLoadComplete) {
                            this.initialLoadComplete = true;
                        }
                        multicallService.resetActiveCalls();
                    }
                })
                .catch((error) => {
                    console.error('[Fetch Loop Failure]', {
                        web3React,
                        providerStore,
                        forceFetch: accountSwitched,
                        chainId,
                        account,
                        library,
                        error,
                    });
                    providerStore.setCurrentBlockNumber(undefined);
                });
        }
    }
}
