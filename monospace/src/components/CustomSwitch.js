import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    color: theme.palette.common.white,
    "& + $track": {
      opacity: 1,
      backgroundColor: "#D8D8D8",
      borderColor: "#D8D8D8",
    },
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#99D9D9",
        borderColor: "#99D9D9",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default CustomSwitch;
