import React, { useReducer } from "react";
import "./App.css";
import { initialState, todoReducer } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
  const addTodoHandler = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Date.now(),
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  const handleCompleted = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODO" });
  };
  return (
    <div className="App" key={Date.now()}>
      <TodoList state={state} handleCompleted={handleCompleted} />
      <TodoForm addTodo={addTodoHandler} />
      <button
        className="clear"
        onClick={(event) => {
          event.preventDefault();
          clearCompleted();
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
