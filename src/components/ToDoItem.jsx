import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItem;

// import React, { useState } from "react";

// function ToDoItem(props) {
//   const [isDone, setIstDone] = useState(false);

//   function handleClick() {
//     setIstDone((preValue) => {
//       return !preValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li
//         key={props.number}
//         style={{ textDecoration: isDone ? "line-through" : "none" }}
//       >
//         {props.item}
//       </li>
//     </div>
//   );
// }

// export default ToDoItem;
