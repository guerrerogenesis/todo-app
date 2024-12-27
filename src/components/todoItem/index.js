import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.css";
import close from "../../assets/icons/close.png";
import unchecked from "../../assets/icons/circle.png";
import checked from "../../assets/icons/checked.png";
import { PencilIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function TodoItem(props) {
  const { id, text, completed, completeTodo, deleteTodo, updateTodo } = props;
  const [onUpdate, setOnUpdate] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdateTodo = () => {
    if (onUpdate && newText !== text) {
      updateTodo(id, newText); // Llama al método para actualizar en el componente padre
    }
    setOnUpdate(!onUpdate); // Alternar el modo de edición
  };

  return (
    <li key={id} className={styles.todoItem} style={{ color: "gray" }}>
      <div className={styles.todoBody}>
        <div className={styles.closerContainer}>
          <span onClick={deleteTodo}>
            <img alt="close" src={close} />
          </span>
        </div>

        <div
          className={classNames(
            styles.contentContainer,
            !onUpdate && completed && styles.checked
          )}
        >
          {!onUpdate ? (
            <p>{text}</p>
          ) : (
            <input
              placeholder="Edit todo"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          )}
          <div className="flex">
            <button onClick={handleUpdateTodo}>
              {!onUpdate ? (
                <PencilIcon className="w-5 text-white opacity-30 hover:opacity-100" />
              ) : (
                <ArrowRightCircleIcon className="w-6 text-white opacity-30 hover:opacity-100" />
              )}
            </button>
          </div>
        </div>

        <div className={styles.checkerContainer}>
          <span onClick={completeTodo}>
            <img alt="check" src={!completed ? unchecked : checked} />
          </span>
        </div>
      </div>
    </li>
  );
}

export { TodoItem };
