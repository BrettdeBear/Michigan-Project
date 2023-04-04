import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Authentication from "./Authentication";
import Nav from "./Nav";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/authorized")
    .then(response => {
      if(response.ok) {
        response.json().then(user =>setUser(user))
      } else {
        setUser(null)
      }
    })
  }, [])

  const updateUser = (user) => setUser(user)
  if(!user) return (
    <>
      <Nav/>
      <Authentication updateUser={updateUser}/>
    </>
  )

  return(
    <div className="App">
      <h1>Yahoo!</h1>
      <Nav updateUser={updateUser} user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/authentication">
          <Authentication updateUser={updateUser} />
        </Route>
      </Switch>
    </div>
  

  )
}

export default App;
