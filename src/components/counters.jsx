import React, { Component } from "react";
import Counter from "./counter";

const Counters = props => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      <button
        onClick={props.onAddElement}
        className="btn btn-primary btn-sm m-2"
      >
        Add new item
      </button>
      {props.counters.map(counter => (
        <Counter
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onRemove={props.onRemove}
          key={counter.id}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
