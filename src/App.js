import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleRemove = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0
      ? counters[index].value--
      : (counters[index].value = 0);
    this.setState({ counters });
  };

  handleAddElement = () => {
    const counters = [...this.state.counters];
    const lastId = counters.length;
    const newCounter = {
      id: lastId + 1,
      value: 0
    };
    counters.push(newCounter);
    console.log(counters);
    this.setState({ counters });
  };

  getTotalCounters = () => {
    let totalValue = 0;
    let i;
    const counters = [...this.state.counters];
    for (i = 0; i < counters.length; i++) {
      if (counters[i].value > 0) totalValue += counters[i].value;
    }
    return totalValue;
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          // totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalCounters={this.getTotalCounters()}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onRemove={this.handleRemove}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onAddElement={this.handleAddElement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
