import classes from "./App.module.css";
import Account from "./Components/Account/Account";
import Teachers from "./Components/Teachers/Teachers";
import Training from "./Components/Training/Training";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.AppWindow}>
        <div className={classes.Sidebar}>
          <Account />
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
