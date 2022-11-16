import Header from "./Header";
import ListMap from "./ListMap";
import { useState, useEffect, useRef } from "react";
import ListForm from "./ListForm";
import todoList from "../../To-DoListData";

export default function List({ toggleLoggedIn, profileData }) {
  let [todos, setTodos] = useState(todoList);
  let [newPostForm, toggleNewPostForm] = useState(false);
  let [filteredTodos, setfilteredTodos] = useState([]);
  let [noMatchesFound, toggleNoMatchesFound] = useState(false);
  let [usingFiltered, toggleUsingFiltered] = useState(false);

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
    if (filtered.length === 0) {
      toggleNoMatchesFound(true);
    } else {
      toggleNoMatchesFound(false);
    }
    setfilteredTodos(filtered);
  }

  return (
    <>
      <div className="nav-container">
        <img src={profileData.profilePicture} className="profile-pic"></img>
        <h3 className="profile-username">{profileData.username}</h3>
        <button className="sign-out-btn" onClick={() => toggleLoggedIn(false)}>
          Sign out
        </button>
      </div>
      <h1 className="list-title">My To-Do List</h1>

      <section className="list-section">
        <Header
          newPostForm={newPostForm}
          toggleNewPostForm={toggleNewPostForm}
          filterTodo={filterTodo}
          toggleUsingFiltered={toggleUsingFiltered}
        />
        {newPostForm && (
          <ListForm
            todos={todos}
            setTodos={setTodos}
            toggleNewPostForm={toggleNewPostForm}
          />
        )}
        {noMatchesFound && <p>No Matches Found!</p>}
        {filteredTodos.length > 0 ? (
          <ListMap
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            usingFiltered={usingFiltered}
          />
        ) : (
          <ListMap
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            usingFiltered={usingFiltered}
          />
        )}
      </section>
    </>
  );
}
