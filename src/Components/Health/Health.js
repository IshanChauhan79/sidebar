import React from "react";
import classes from "./Health.module.css";

function Health() {
  return (
    <div className={classes.Health}>
      <div className={classes.Title}>Health</div>
      <div className={classes.HealthStats}>
        <div className={classes.Stats}>
          <div className={classes.Number}>6:25</div>
          <div className={classes.Type}>
            <img src="https://img.icons8.com/ios-filled/50/878386/lullaby.png" />
            <div className={classes.Type1}>Hours</div>

          </div>
          <div className={classes.Bar}>
            <div className={classes.Bar1}></div>
          </div>
        </div>
        <div className={classes.Stats}>
          <div className={classes.Number}>120</div>
          <div className={classes.Type}>
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/878386/external-heart-beat-science-flatart-icons-outline-flatarticons.png" />
            <div className={classes.Type2}>Rpm</div>
          </div>
          <div className={classes.Bar}>
            <div className={classes.Bar2}></div>
          </div>
        </div>
        <div className={classes.Stats}>
          <div className={classes.Number}>1.84</div>
          <div className={classes.Type}>
            <img src="https://img.icons8.com/wired/64/878386/apple.png" />
            <div className={classes.Type3}>Kcal</div>

          </div>
          <div className={classes.Bar}>
            <div className={classes.Bar3}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
