import React from "react";

const UserBadge = (props) => {
  const { type } = props;

  let styleObj = { width: 30, height: 20, textAlign: "center" };

  let text;

  switch (type) {
    case "Supervisor":
      styleObj = {
        ...styleObj,
        ...{
          backgroundColor: "#F2AC57",
          fontWeight: 900,
          color: "#414D77",
        },
      };
      break;
    case "Stakeholder":
      styleObj = {
        ...styleObj,
        ...{
          backgroundColor: "#E17878",
          fontWeight: 900,
          color: "#414D77",
        },
      };
      break;
    case "Guest":
      styleObj = {
        ...styleObj,
        ...{
          backgroundColor: "#CACACA",
          fontWeight: 900,
          color: "#414D77",
        },
      };
      break;
    case "Employee":
      styleObj = {
        ...styleObj,
        ...{
          backgroundColor: "#B9E5E5",
          fontWeight: 900,
          color: "#414D77",
        },
      };
      break;
    default:
      break;
  }

  switch (type) {
    case "Supervisor":
      text = "SV";
      break;
    case "Stakeholder":
      text = "SH";
      break;
    case "Guest":
      text = "GU";
      break;
    case "Employee":
      text = "EM";
      break;
    default:
      text = type;
      break;
  }

  return <div style={styleObj}>{text}</div>;
};

export default UserBadge;
