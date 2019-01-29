import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            Total Items in cart : {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
