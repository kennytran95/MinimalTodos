import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListEntry({ todo }) {
  return (
    <div className="todo-container">
      <div className="content-container">
        <span>{todo}</span>
        <div className="icon-container">
          <FontAwesomeIcon icon={faPen} className="todo-pen" />
          <FontAwesomeIcon icon={faTrash} className="todo-trash" />
        </div>
      </div>
    </div>
  );
}
