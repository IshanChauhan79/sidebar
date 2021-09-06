import classes from "./App.module.css";
import Account from "./Components/Account/Account";
import Cards from "./Components/Cards/Cards";
import Signup from "./Components/Signup/Signup";
import Teachers from "./Components/Teachers/Teachers";
import Training from "./Components/Training/Training";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.AppWindow}>
        <div className={classes.Sidebar}>
          <Account />
          
          <Signup />
          <Training />

          <Teachers />
        </div>
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import classes from "./App.module.css";

// function App() {
//   return <div className={classes.App}></div>;
// }

// export default App;

/* <Cards
            background="#4998ff"
            shadow="#92c0fa"
            topic="Box"
            type="Box Club"
            topicTime="10:00"
            time1="40"
            excercise1="Warm-up"
            time2="40"
            excercise2="Stretch"
          /> */