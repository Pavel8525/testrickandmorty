import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
