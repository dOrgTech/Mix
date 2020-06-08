import { createUseStyles } from "react-jss";
import { StyleConstants } from "../../constants/styles";

export const useStyles = createUseStyles({
  backgroundContainer: {
    background: StyleConstants.backgroundColor,
    height: "100vh",
    paddingTop: 160,
    width: "100%",
  },
  mainContainer: {
    width: 502,
    height: 429,
    border: StyleConstants.borderPrimary,
    boxSizing: "border-box",
    borderRadius: 4,
  },
  text: {
    color: StyleConstants.textColor,
    paddingTop: 48,
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.6,
    margin: 0,
  },
  logo: {
    fontSize: 24,
  },
  logoText: {
    color: StyleConstants.textColor,
    textAlign: "center",
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: 0.6,
    margin: 0,
  },
  logoContainer: {
    paddingBottom: 40,
  },
  secondText: {
    color: StyleConstants.textColor,
    paddingTop: 30,
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.6,
    margin: 0,
  },
  walletButtons: {
    paddingTop: 32,
  },
  iconButton: {
    height: 38,
    color: StyleConstants.textColor,
    border: StyleConstants.borderButton,
    boxSizing: "border-box",
    letterSpacing: 0.4,
    minWidth: 174,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 32,
    "&:hover": {
      background: StyleConstants.backgroundButtonHover,
      border: StyleConstants.borderButtonHover,
      boxSizing: "border-box",
      borderRadius: 32,
      color: StyleConstants.textColor,
    },
  },
  separator: {
    display: "block",
    height: 1,
    background: "#2C3340",
    padding: 0,
    width: 162,
  },
  grayText: {
    color: StyleConstants.gray,
    margin: 0,
  },
  orRow: {
    paddingTop: 32,
  },
  inputRow: {
    paddingTop: 32,
  },
  inputContainer: {
    width: 370,
  },
  watchButton: {
    border: StyleConstants.borderPrimary,
    boxSizing: "border-box",
    borderRadius: 32,
    color: StyleConstants.gray,
    textAlign: "center",
    letterSpacing: 0.8,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 14,
    "&:hover": {
      background: StyleConstants.backgroundButtonHover,
      border: StyleConstants.borderButtonHover,
      boxSizing: "border-box",
      borderRadius: 32,
      color: StyleConstants.gray,
    },
  },
  watchButtonContainer: {
    paddingTop: 32,
  },
  madeByText: {
    color: StyleConstants.gray,
  },
  madeByContainer: {
    paddingTop: 32,
  },
  madeByIcon: {
    fontSize: 14.4,
  },
  madeByIconContainer: {
    background:
      "radial-gradient(50% 50% at 50% 50%, #304FFE 0%, #3D5AFE 100%);",
    width: 20,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
  },
  metamaskIcon: {
    fontSize: 25,
  },
});
