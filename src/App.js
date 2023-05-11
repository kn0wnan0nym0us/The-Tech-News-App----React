import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <Router>
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <h1>Welcome to our tech news website!</h1>
        </Route>
        <Route exact path="/login">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
