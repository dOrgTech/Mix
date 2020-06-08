import { createUseStyles } from "react-jss";
import { StyleConstants } from "../../constants/styles";

export const useStyles = createUseStyles({
  layout: {
    background: StyleConstants.backgroundColor,
    height: "100vh"
  },
  contentContainer: {
  },
  leftSider: {
    background: StyleConstants.backgroundColor,
    borderRight: StyleConstants.borderPrimary,
    width: "353px !important",
    flex: "0 0 353px !important",
    maxWidth: "353px !important"
  },
  rightSider: {
    background: StyleConstants.backgroundColor,
    borderLeft: StyleConstants.borderPrimary,
    width: "353px !important",
    flex: "0 0 353px !important",
    maxWidth: "353px !important"
  },
  tabs: {
    position: "absolute",
    width: "165px",
    height: "280px",
    left: "164px",
    top: "32px",
  },
  logo: {
    position: "absolute",
    left: "0%",
    right: "15.76%",
    top: "0%",
    bottom: "85.71%",
  },
  portfolio: {
    position: "absolute",
    left: "0%",
    right: "15.76%",
    top: "21.43%",
    bottom: "64.29%",
  },
  anonymize: {
    position: "absolute",
    left: "0%",
    right: "11.52%",
    top: "42.86%",
    bottom: "42.86%",
  },
  withdraw: {
    position: "absolute",
    left: "0%",
    right: "13.94%",
    top: "64.29%",
    bottom: "21.43%",
  },
  tabButton: {
    borderRadius: 32,
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.4px",
    color: "#FAFAFA",
    paddingTop: "4px"
  },
  tabIcon: {
    position: "absolute",
    left: "11.27%",
    right: "71.83%",
    top: "20%",
    bottom: "20%",
  }
});