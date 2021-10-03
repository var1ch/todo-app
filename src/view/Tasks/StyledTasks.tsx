import styled from "styled-components";

const StyledTasks = styled.div`
  min-width: 50vw;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(191, 191, 191, 0.2);
  border-left: 1px solid rgba(191, 191, 191, 0.2);
  div.add-task {
    font-size: 1.1rem;
    display: flex;
    padding: 0.6rem;
    background-color: #f1f1f1;
    border-radius: 3px;
    box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.2);
    color: rgb(191, 191, 191);
    .text-input {
      font-size: 1.1rem;
      flex: 1;
      background-color: transparent;
      border: none;
      border-right: 1px solid rgba(191, 191, 191, 0.7);
      &:focus {
        outline: none;
      }
    }
    .date,
    .options {
      &:hover {
        cursor: pointer;
      }
    }
    .date {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }
  }
  div.tasks-list {
    margin-top: 0.6rem;
  }
`;

export default StyledTasks;
