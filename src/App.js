import classes from "./App.module.css";
import Account from "./Components/Account/Account";
import Health from "./Components/Health/Health";
import Signup from "./Components/Signup/Signup";
import Teachers from "./Components/Teachers/Teachers";
import Training from "./Components/Training/Training";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.AppWindow}>
        <div className={classes.Sidebar}>
          <Account />
          <Health />
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
