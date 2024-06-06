import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [noteList, setNoteList] = useState([]);

  function handleChange(e) {
    const newInput = e.target.value;
    setInputText(newInput);
  }

  function addNote() {
    setNoteList((preList) => {
      return [...preList, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setNoteList((preList) => {
      return preList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button type="submit" onClick={addNote}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {noteList.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
// 22: var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
