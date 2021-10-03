import React from "react";
import StyledTaskDetails from "./StyledTaskDetails";

class TaskDetails extends React.Component {
  render() {
    return (
      <StyledTaskDetails className="container">
        <h2 className="title">Task Details</h2>
      </StyledTaskDetails>
    );
  }
}

export default TaskDetails;
