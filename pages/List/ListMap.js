import React from "react";
import todoList from "../../To-DoListData";
import ListEntry from "./ListEntry";

export default function ListMap({
  todos,
  deleteTodo,
  editTodo,
  usingFiltered,
}) {
  return (
    <div className="list-container">
      {todos.map((todo, index) => {
        return (
          <ListEntry
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            usingFiltered={usingFiltered}
          />
        );
      })}
    </div>
  );
}
