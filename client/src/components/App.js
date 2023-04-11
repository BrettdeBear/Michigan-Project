import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Authentication from "./Authentication";
import Nav from "./Nav";
import Home from "./Home";
import ParksPage from "./ParksPage";
// import ParkCard from "./ParkCard";
import OnePark from "./OnePark"

import "../index.css"
import TrailCard from "./TrailCard";
import ImageUpload from "./ImageUpload";

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
        <Route path="/parks/:id">
          <OnePark />
        </Route>
        <Route path="/parks" >
          <ParksPage />
        </Route>
        <Route path="/trails/:id">
          <TrailCard user={user}/>
        </Route>
        <Route path="/authentication">
          <Authentication updateUser={updateUser} />
        </Route>
        <Route path="/imageupload">
          <ImageUpload />
        </Route>
      </Switch>
    </div>
  

  )
}

export default App;
