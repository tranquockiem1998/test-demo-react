// Class component
// Function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "HarryPhamDev",
    address: "Hoi Dan IT",
    age: 26,
  };

  handleClick(event) {
    // console.log(">> Click me my button");

    // merge state chỉ xảy ra với REACT class
    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100) + 1,
    });
  }

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event, event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
