import React, { Component } from "react";
import Popular from "../layout/Popular";
import Recommended from "../layout/Recommended";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Popular />
        <hr className="mt-6 " />
        <Recommended />
      </div>
    );
  }
}
