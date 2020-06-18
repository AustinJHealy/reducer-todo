import React from "react";

const Todo = (props) => {
  console.log(props);

  return (
    <div className="Todo">
      <p
        className={props.item.completed ? "completed" : ""}
        onClick={(event) => {
          event.preventDefault();
          props.handleCompleted(props.item.id);
        }}
      >
        {props.item.todo}
      </p>
    </div>
  );
};
export default Todo;
