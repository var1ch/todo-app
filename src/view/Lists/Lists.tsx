import React from "react";
import StyledLists from "./StyledLists";
import AddList from "./components/AddList";

class Lists extends React.Component {
  render() {
    return (
      <StyledLists className="container">
        <ul className="lists default">
          <li>
            <button>Inbox</button>
          </li>
          <li>
            <button>Today</button>
          </li>
          <li>
            <button>Next Week</button>
          </li>
        </ul>
        <h2 className="title lists">Lists</h2>
        <AddList />
        <ul className="lists">
          <li>
            <button>Completed</button>
          </li>
          <li>
            <button>Trash</button>
          </li>
        </ul>
      </StyledLists>
    );
  }
}

export default Lists;
