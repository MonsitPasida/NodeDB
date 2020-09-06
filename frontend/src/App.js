import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Container } from "reactstrap";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/register" component={Register} />
      <Route path="/users" component={Users} />
      <Footer />
    </div>
  );
}
export default App;
