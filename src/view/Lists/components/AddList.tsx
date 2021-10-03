import React from "react";

class AddList extends React.Component {
  render() {
    return (
      <div className="add-list">
        <input className="text-input" type="text" placeholder="Add your list" />
        <ul className="lists">
          <li>
            <button>Completed</button>
          </li>
          <li>
            <button>Trash</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default AddList;
