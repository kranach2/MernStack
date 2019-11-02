import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Membership from "./Membership";
import Memberlist from "./Memberlist";
import Contact from "./Contact";
import Editmember from "./Editmember";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/membership" component={Membership} />
          <Route path="/memberlist" component={Memberlist} />
          <Route path="/contact" component={Contact} />
          <Route path="/edit/:id" component={Editmember} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  const h2Style = {
    color: "red",
    fontSize: "15px"
  };
  return (
    <header className="App-header">
      <h4 style={{ color: "green", fontSize: "20px" }}>
        Welcome to MERN-STACK APP DEVLOPMENT
      </h4><br/><br/>
      <h2 style={h2Style}>This is Home Page</h2>
      <p>This is simple mern app practice!!!</p>
    </header>
  );
};
export default App;
