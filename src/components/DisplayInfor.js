import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    // destructuring array/object
    const { name, age } = this.props;
    // props => viết tắt của từ properties
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
