import React from "react";

class DisplayInfor extends React.Component {
  render() {
    // destructuring array/object
    const { listUsers } = this.props;
    // props => viết tắt của từ properties
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
              <hr></hr>
            </div>
          );
        })}
        {/* {<div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr></hr>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr></hr>
        <div>My name is {name}</div>
        <div>My age is {age}</div>} */}
      </div>
    );
  }
}

export default DisplayInfor;
