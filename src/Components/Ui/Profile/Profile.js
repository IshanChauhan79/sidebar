import React from "react";
import classes from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={classes.Profile}>
      <div className={classes.Icon}>
        <img src={props.img} alt="" />
        {props.online ? <div className={classes.Online}></div> : null}
      </div>
      <div className={classes.Name}>
        <div className={classes.NameTitle}>{props.name}</div>
        <div className={classes.NameDesc}>{props.desc}</div>
      </div>
    </div>
  );
}

export default Profile;
