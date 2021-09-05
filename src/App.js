import classes from "./App.module.css";
import Account from "./Components/Account/Account";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.AppWindow}>
        <div className={classes.Sidebar}>
          <Account />
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
