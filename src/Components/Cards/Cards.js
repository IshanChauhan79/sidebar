import React from "react";
import classes from "./Cards.module.css";

function Cards() {
  return (
    <div className={classes.CardsContainer}>
      <div className={classes.Cards}>
        <div className={classes.Class}>
          <div className={classes.Topic}>Box</div>
          <div className={classes.Type}>Box Club</div>
          <div className={classes.TopicTime}>10:00</div>
        </div>
        <div className={classes.ClassType}>
          <div className={classes.Time}>40</div>
          <div className={classes.Min}>min</div>
          <div className={classes.Excercise}>Warm-up</div>
        </div>
        <div className={classes.ClassType}>
          <div className={classes.Time}>20</div>
          <div className={classes.Min}>min</div>
          <div className={classes.Excercise}>Stretch</div>
        </div>
        <div className={classes.Menu}>
          <img
            src="https://img.icons8.com/ios-filled/24/FFFFFF/menu-2.png"
            alt=""
          />
        </div>
      </div>

      <div className={classes.Shadow}></div>
    </div>
  );
}

export default Cards;
