import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.CardContainer}>
      <div className={classes.Card} style={{backgroundColor:props.background}}></div>
      <div className={classes.Shadow} style={{backgroundColor:props.shadow}}></div>
      {props.children}
    </div>
  );
}

export default Card;
