import React from "react";

class AddTask extends React.Component {
  render() {
    return (
      <div className="add-task">
        <input
          className="text-input"
          type="text"
          placeholder="What are you going to do?"
        />
        <div className="date">Date</div>
        <div className="options">Options</div>
      </div>
    );
  }
}

export default AddTask;
