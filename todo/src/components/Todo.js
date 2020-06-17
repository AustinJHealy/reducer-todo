import React from 'react';

const Todo = (props) => {
console.log(props);
        return(
            props.todos.todos.map((item) => {
                return (
                    <p>{item.item}</p>
                )}
            )
        )
    
}
export default Todo;