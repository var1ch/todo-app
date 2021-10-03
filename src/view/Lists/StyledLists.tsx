import styled from "styled-components";

const StyledLists = styled.div`
  min-width: 15vw;
  ul.default {
    padding-top: 0.6rem;
  }
  .lists {
    padding-top: 0;
  }
  ul.lists {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(191, 191, 191, 0.2);
    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
    li:last-child {
      margin-bottom: 1rem;
    }
    li button {
      border-radius: 3px;
      font-size: 1.1rem;
      width: 100%;
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0.6rem;
      text-align: left;
      &:hover {
        cursor: pointer;
        background-color: #f1f1f1;
        box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 0.15);
      }
    }
  }
  div.add-list {
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(191, 191, 191, 0.2);
  }
`;

export default StyledLists;
