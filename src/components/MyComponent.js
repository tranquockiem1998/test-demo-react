// Class component
// Function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // JSX
  render() {
    const myInfor = ["ab", "c", "c"];
    return (
      <div>
        <UserInfor />
        <br /> <br />
        <DisplayInfor name="Hoi Dan IT" age="30" />
        <hr></hr>
        <DisplayInfor name="Eric" age={26} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
