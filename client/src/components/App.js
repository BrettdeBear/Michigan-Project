import React from "react";
import { Switch, Route } from "react-router-dom";

import Authentication from "./Authentication";
import Nav from "./Nav";

function App() {
  return(
    <div className="App">
      <h1>Yahoo!</h1>
      <Nav />
      <Switch>
        <Route path="/authentication">
          <Authentication />
        </Route>
      </Switch>
    </div>
  

  )
}

export default App;
