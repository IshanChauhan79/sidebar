import React from "react";
import classes from "./ProfileCard.module.css";

function ProfileCard(props) {
  return <div className={classes.ProfileCard}>{props.children}</div>;
}

export default ProfileCard;
