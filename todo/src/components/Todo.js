import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  color: red;
  border: 5px dotted blue;
  font-size: 1rem;
  font-family: Tahoma, Geneva, sans-serif;
  border-radius: 10px;
  margin: 2% 30%;
  padding: 1%;
`;

const Todo = (props) => {
  return (
    <div className="Todo">
      <Paragraph
        className={props.item.completed ? "completed" : ""}
        onClick={(event) => {
          event.preventDefault();
          props.handleCompleted(props.item.id);
        }}
      >
        {props.item.todo}
      </Paragraph>
    </div>
  );
};
export default Todo;
