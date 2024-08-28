// Class component
// Function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Hoi Dan IT", age: 16 },
      { id: 2, name: "Eric", age: 26 },
      { id: 3, name: "HarryPhamDev", age: 49 },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };

  handleDeleteUser = (userId) => {
    // this.setState({
    //   listUser: this.state.listUser.filter((user) => user.id !== userObj.id),
    // });
    let listUsersClone = this.state.listUser;
    listUsersClone = listUsersClone.filter((user) => user.id !== userId);
    this.setState({ listUser: listUsersClone });
  };

  // JSX
  // DRY: don't repeat yourself

  render() {
    return (
      <>
        <br />
        <div className="A">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br /> <br />
          <DisplayInfor
            listUsers={this.state.listUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="B"></div>
      </>
    );
  }
}

export default MyComponent;
