import React, { useState } from "react";

const TodoForm = (props) => {
  const [formState, setFormState] = useState("");

  const changeHandler = (event) => {
    setFormState(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addTodo(formState);
        setFormState("");
      }}
    >
      <label htmlFor="todo">Input New To-Do</label>
      <br></br>
      <input
        type="text"
        name="todo"
        value={formState}
        onChange={changeHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoForm;
