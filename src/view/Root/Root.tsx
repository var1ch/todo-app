import React from "react";
import StyledRoot from "./StyledRoot";
import Lists from "../Lists/Lists";
import TaskDetails from "../TaskDetails/TaskDetails";
import Tasks from "../Tasks/Tasks";

class Root extends React.Component {
  render() {
    return (
      <StyledRoot>
        <Lists />
        <Tasks />
        <TaskDetails />
      </StyledRoot>
    );
  }
}

export default Root;
