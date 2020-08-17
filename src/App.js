import React, { Component } from "react";
import api from "../src/Services/Services";

export default class App extends Component {
  getApi = () => {
    api.searchByTitle("wars").then((data) => {
      console.log(data);
    });
  };

  render() {
    return <div>{this.getApi()}</div>;
  }
}
