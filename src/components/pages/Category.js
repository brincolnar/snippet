import React, { Component } from "react";

export default class Category extends Component {
  render() {
    return <div>This is the {this.props.match.params.category} page.</div>;
  }
}
