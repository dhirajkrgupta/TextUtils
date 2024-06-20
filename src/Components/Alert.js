import React from "react";

export default function Alert(props) {
  let str;
  if (props.alert !== null) {
    str = props.alert.type;
    str = str[0].toUpperCase() + str.slice(1);
  }
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert- alert-${props.alert.type} fade show`}
          role="alert"
        >
          <strong>{str}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
