import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-danger btn-sm m-3"
        >
          -
        </button>
        <button
          onClick={() => this.props.onRemove(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Remove
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let badgeClass = "badge m-3 badge-";
    badgeClass += this.props.counter.value === 0 ? "warning" : "primary";

    return badgeClass;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
