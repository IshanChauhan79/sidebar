import React from "react";
import Card from "../Ui/Card/Card";
import classes from "./Cards.module.css";

function Cards(props) {
  return (
    <div className={classes.CardsContainer}>
      <Card background={props.background} shadow={props.shadow}>
        <div className={classes.Cards}>
          <div className={classes.Class}>
            <div className={classes.Topic}>{props.topic}</div>
            <div className={classes.Type}>{props.type}</div>
            <div className={classes.TopicTime}>{props.topicTime}</div>
          </div>
          <div className={classes.ClassType}>
            <div className={classes.Time}>{props.time1}</div>
            <div className={classes.Min}>min</div>
            <div className={classes.Excercise}>{props.excercise1}</div>
          </div>
          <div className={classes.ClassType}>
            <div className={classes.Time}>{props.time2}</div>
            <div className={classes.Min}>min</div>
            <div className={classes.Excercise}>{props.excercise2}</div>
          </div>
          <div className={classes.Menu}>
            <img
              src="https://img.icons8.com/ios-filled/24/FFFFFF/menu-2.png"
              alt=""
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Cards;
