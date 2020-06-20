import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="list">
      {props.state.map((item) => {
        return (
          <Todo
            item={item}
            key={item.id}
            handleCompleted={props.handleCompleted}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
