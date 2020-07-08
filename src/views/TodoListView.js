import React from "react";

const TodoListView = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoListView;
