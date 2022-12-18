import React, { Component } from "react";

export default class medium extends Component {
  constructor() {
    super();
    this.state = {
      name: "Elijah",
      phone: "704-996-3461",
      email: "eyoung11@r2hstudent.org",
    };
  }
  render() {
    return (
      <div>
        <h1>Personal Info</h1>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Phone: {this.state.phone}</li>
          <li>Email: {this.state.email}</li>
        </ul>
      </div>
    );
  }
}
