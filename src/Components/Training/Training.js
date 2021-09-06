import React from "react";
import Cards from "../Cards/Cards";
import classes from "./Training.module.css";

function Training() {
  return (
    <div className={classes.Training}>
      <div className={classes.Title}>Your trainers</div>
      <div className={classes.TrainingCards}>
        <Cards
          background="#4998ff"
          shadow="#b9d8ff"
          topic="Box"
          type="Box Club"
          topicTime="10:00"
          time1="40"
          excercise1="Warm-up"
          time2="40"
          excercise2="Stretch"
        />
        <Cards
          background="#4998ff"
          shadow="#b9d8ff"
          topic="Crossfit"
          type="Sports Club"
          topicTime="12:00"
          time1="20"
          excercise1="Warm-up"
          time2="20"
          excercise2="Pull ups"
        />
      </div>
    </div>
  );
}

export default Training;
