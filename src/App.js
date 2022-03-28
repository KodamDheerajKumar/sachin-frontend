import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
 
  callAPI() {
    fetch("http://localhost:8000/testApi", {
      
    })
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
        <p className="App-intro">{this.state.apiResponse} </p>
      </div>
    );
  }
}

export default App;