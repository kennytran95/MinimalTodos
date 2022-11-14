import Header from "./Header";
import ListMap from "./ListMap";
import { useState } from "react";
import ListForm from "./ListForm";
import todoList from "../../To-DoListData";

export default function List() {
  let [todos, setTodos] = useState(todoList);
  let [newPostForm, toggleNewPostForm] = useState(false);
  return (
    <section className="list-section">
      <Header newPostForm={newPostForm} toggleNewPostForm={toggleNewPostForm} />
      {newPostForm && <ListForm todos={todos} setTodos={setTodos} />}
      <ListMap todos={todos} />
    </section>
  );
}
