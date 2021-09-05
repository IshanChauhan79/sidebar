import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import Profile from "../Ui/Profile/Profile";
import Icons from "../Ui/Icons/Icons";
import classes from "./Account.module.css";
import chicken from "../../assets/images/chicken.jpg";

function Account() {
  return (
    <div className={classes.Account}>
      <ProfileCard>
        <Profile
          img={chicken}
          name={"Floyed Miles"}
          desc={"Free account"}
          // online
        />
        <div className={classes.Utility}>
          <Icons after="3">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png"
              alt=""
            />
          </Icons>
          <Icons>
            <img
              src="https://img.icons8.com/ios/50/000000/settings--v1.png"
              alt=""
            />
          </Icons>
        </div>
      </ProfileCard>
    </div>
  );
}

export default Account;
