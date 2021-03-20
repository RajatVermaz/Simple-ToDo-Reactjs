import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props); //super() is used to call the parent constructor.

    //super(props) would pass props to the parent constructor.
    this.state = {
      newItem: "",
      list: [],
    };
  }
  addItem() {
    //Create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    // copy the current item to list
    const list = [...this.state.list];
    list.push(newItem);
    //update state with new list and reset newitem input
    this.setState({ list, newItem: "" });
  }

  updateInput(key, value) {
    //update react state
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo's</h1>
        <input
          type="text"
          placeholder="Add todo"
          onChange={(event) => this.updateInput("newItem", event.target.value)}
        />
        <button onClick={() => this.addItem()}>Add</button>
        <ul>
          {this.state.list.map((item) => {
            return <li key={item.id}>{item.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default App;
