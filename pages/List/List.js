import Header from "./Header";
import ListMap from "./ListMap";
import { useState, useEffect, useRef } from "react";
import ListForm from "./ListForm";
import todoList from "../../To-DoListData";

export default function List() {
  let [todos, setTodos] = useState(todoList);
  let [newPostForm, toggleNewPostForm] = useState(false);
  let [filteredTodos, setfilteredTodos] = useState([]);

  const initialRender = useRef(true);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    try {
      if (data) {
        setTodos(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function editTodo(todo, newTodo) {
    let newTodos = [...todos];
    newTodos.splice(newTodos.indexOf(todo), 1, newTodo);
    setTodos(newTodos);
  }

  function deleteTodo(todo) {
    let newTodos = [...todos];
    newTodos.splice(newTodos.indexOf(todo), 1);
    setTodos(newTodos);
  }

  function filterTodo(string) {
    let filtered = [];
    todos.forEach((todo) => {
      if (todo.indexOf(string) !== -1) {
        filtered.push(todo);
      }
    });
    setfilteredTodos(filtered);
  }

  return (
    <section className="list-section">
      <Header
        newPostForm={newPostForm}
        toggleNewPostForm={toggleNewPostForm}
        filterTodo={filterTodo}
      />
      {newPostForm && <ListForm todos={todos} setTodos={setTodos} />}
      {filteredTodos.length > 0 ? (
        <ListMap
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ) : (
        <ListMap todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      )}
    </section>
  );
}
