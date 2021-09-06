import React from "react";
import classes from "./Signup.module.css";
import Card from "../Ui/Card/Card";
import profile from "../../assets/images/profile.jpg";

function Signup() {
  return (
    <div className={classes.Signup}>
      <Card background="#FFE191" shadow="#ffe378">
        <div className={classes.SignupContainer}>
          <div>
            <img src={profile} alt="" width="60px" />
          </div>
          <div className={classes.DetailsBox}>
            <div className={classes.Details}>
              Signup for a personal trainer
              <br /> to improve your result
              <br />
            </div>
            <div className={classes.Button}>Sign up</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Signup;
