import React from "react";
import classes from "./Icons.module.css";

function Icons(props) {
  return (
    <div className={classes.Icons}>
      {props.children}
      {props.after ? <div>{props.after}</div> : null}
    </div>
  );
}

export default Icons;
