import React, { useState } from "react";

function TodoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.delfunc(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}
export default TodoItem;
