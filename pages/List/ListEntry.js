import { faPen, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ListEntry({
  todo,
  deleteTodo,
  editTodo,
  usingFiltered,
}) {
  let [editText, toggleEditText] = useState(false);
  return (
    <div className="todo-container">
      <div className="content-container">
        {editText ? (
          <form
            onSubmit={() => {
              toggleEditText(false);
            }}
          >
            <input
              type="text"
              className="edit-input"
              onChange={(e) => editTodo(todo, e.target.value)}
              value={todo}
            ></input>
            <button
              className="edit-btn"
              type="submit"
              onClick={() => {
                toggleEditText(false);
              }}
            >
              <FontAwesomeIcon icon={faCheck} className="edit-check" />
            </button>
          </form>
        ) : (
          <span>{todo}</span>
        )}

        {usingFiltered === false ? (
          <div className="icon-container">
            <FontAwesomeIcon
              icon={faPen}
              className="todo-pen"
              onClick={() => {
                toggleEditText(true);
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="todo-trash"
              onClick={() => deleteTodo(todo)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
