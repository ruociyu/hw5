import React from 'react';
import './index.css';

const ToDoListItem = ({ item, index, removeItem, handleChange }) => {
    console.log("This is item: ", item);
    return (
        <div>
            <p style={item.isComplete ? { textDecoration: "line-through" } : null}>
            <input type="checkbox" checked={item.isComplete} onChange={() => handleChange(index)} />
            <span>{item.name}</span>
            <button onClick={() => removeItem(index)}>X</button>
            </p>
        </div>
    );
}

export default ToDoListItem;