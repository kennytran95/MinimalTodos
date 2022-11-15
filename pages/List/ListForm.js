import { useState } from "react";

export default function ListForm({ todos, setTodos }) {
  let [listFormFocus, toggleListFormFocus] = useState(false);
  let [newTodo, setNewTodo] = useState("");

  function changeNewTodo(text) {
    setNewTodo(text);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
    setNewTodo("");
  }

  return (
    <form className="list-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add a to-do!"
        className={listFormFocus ? "new-todo-focus" : "new-todo-input"}
        onChange={(e) => {
          changeNewTodo(e.target.value);
        }}
        value={newTodo}
        onFocus={() => {
          toggleListFormFocus(true);
        }}
        onBlur={() => {
          toggleListFormFocus(false);
        }}
      ></input>
      <button type="submit" className="save-btn">
        Save
      </button>
    </form>
  );
}
