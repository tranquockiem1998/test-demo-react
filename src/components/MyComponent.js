// Class component
// Function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Hoi Dan IT", age: 16 },
      { id: 2, name: "Eric", age: 26 },
      { id: 3, name: "HarryPhamDev", age: 49 },
    ],
  };

  // JSX
  // DRY: don't repeat yourself
  render() {
    const myInfor = ["ab", "c", "c"];
    return (
      <div>
        <UserInfor />
        <br /> <br />
        <DisplayInfor
          listUsers={this.state.listUser}
          users={this.state.listUser}
        />
      </div>
    );
  }
}

export default MyComponent;
