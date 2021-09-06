import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import Profile from "../Ui/Profile/Profile";
import Icons from "../Ui/Icons/Icons";
import classes from "./Teachers.module.css";
import profile from "../../assets/images/pfp.jpg";

function Teachers() {
  return (
    <div className={classes.Teachers}>
      <div className={classes.Title}>Your trainers</div>
      <ProfileCard>
        <Profile
          img={profile}
          name={"John Kavanagh"}
          desc={"MMA coach"}
          online
          // online
        />
        <div className={classes.Utility}>
          <Icons>
            <img
              src="https://img.icons8.com/ios/50/7C7D85/chat-message--v1.png"
              alt=""
            />
          </Icons>
        </div>
      </ProfileCard>
      <ProfileCard>
        <Profile
          img={profile}
          name={"Jacob Jones"}
          desc={"Boxing coach"}
          online

          // online
        />
        <div className={classes.Utility}>
          <Icons>
            <img
              src="https://img.icons8.com/ios/50/7C7D85/chat-message--v1.png"
              alt=""
            />
          </Icons>
        </div>
      </ProfileCard>
    </div>
  );
}

export default Teachers;
