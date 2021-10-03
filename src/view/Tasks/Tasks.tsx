import React from "react";
import StyledTasks from "./StyledTasks";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

class Tasks extends React.Component {
  render() {
    return (
      <StyledTasks className="container">
        <h2 className="title">Tasks</h2>
        <AddTask />
        <TasksList />
      </StyledTasks>
    );
  }
}

export default Tasks;
