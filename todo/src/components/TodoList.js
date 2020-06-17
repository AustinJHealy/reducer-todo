import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Todo from "./Todo";



const TodoList = () => {
const [state, dispatch] = useReducer(todoReducer, initialState);
    
    console.log(state)
    
    return(
        <Todo todos={state} />
    )
}
export default TodoList;