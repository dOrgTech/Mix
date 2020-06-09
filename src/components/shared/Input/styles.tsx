import { createUseStyles } from "react-jss";
import { StyleConstants } from "../../../constants/styles";

export const useStyles = createUseStyles({
  input: {
    border: StyleConstants.borderButton,
    boxSizing: "border-box",
    borderRadius: 32,
    background: "transparent",
    fontSize: 14,
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.2,
    height: 37,
    paddingLeft: 21,
    paddingRight: 21,
    color: StyleConstants.textColor,
    width: "100%",
    "&::placeholder": {
      color: StyleConstants.gray,
    },
  },
});
