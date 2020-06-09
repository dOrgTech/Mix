import { createUseStyles } from "react-jss";
import { StyleConstants } from "../../constants/styles";

export const useStyles = createUseStyles({
  layout: {
    background: StyleConstants.backgroundColor,
    height: "100vh"
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
  buttonText: {
    letterSpacing: "0.4px",
    color: "#FAFAFA",
    border: 'unset',
    height: 40,
    "&:hover": {
      background: "rgba(132, 255, 255, 0.05)",
      color: "#FAFAFA",
    },
  },
  selectedButtonText: {
    letterSpacing: "0.4px",
    color: "#79E8EA !important",
    border: 'unset',
    borderRadius: "32px !important",
    background: "rgba(132, 255, 255, 0.05) !important",
    height: 40,
  },
  mixLogo: {
    fontSize: 24,
    left: "11.51%",
    right: "71.22%",
    position: "absolute"
  },
  logoSize: {
    fontSize: 24
  },
  connection: {
    position: "absolute",
    width: "169px",
    height: "36px",
    left: "20px",
    top: "32px",
    border: "1px solid #325661",
    boxSizing: "border-box",
    borderRadius: "32px",
  },
  addressAvatar: {
    position: "absolute",
    left: "7.69%",
    right: "80.47%",
    top: "22.22%",
    bottom: "22.22%",
    fontSize: 20
  },
  address: {
    position: "absolute",
    left: "26.63%",
    right: "30.18%",
    top: "27.78%",
    bottom: "27.78%",
    fontSize: "14px",
    lineHeight: "16px",
    alignItems: "center",
    color: "#E3E4E5",
  },
  arrow: {
    position: "absolute",
    left: "78.11%",
    right: "7.69%",
    top: "27.67%",
    bottom: "16.67%"
  }
});