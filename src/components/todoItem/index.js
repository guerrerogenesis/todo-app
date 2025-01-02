import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.css";
import {
  PencilIcon,
  ArrowRightCircleIcon,
  EllipsisHorizontalCircleIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

function TodoItem(props) {
  const { id, text, completed, completeTodo, deleteTodo, updateTodo } = props;
  const [onUpdate, setOnUpdate] = useState(false);
  const [newText, setNewText] = useState(text);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleUpdateTodo = () => {
    setIsOptionsOpen(false);
    setOnUpdate(!onUpdate);
    if (onUpdate && newText !== text) {
      updateTodo(id, newText); // Llama al método para actualizar en el componente padre
    }
    setOnUpdate(!onUpdate); // Alternar el modo de edición
  };
  const handleDeleteTodo = () => {
    const isConfirmed = window.confirm("¿Estás seguro de eliminar esta tarea?");
    if (isConfirmed) {
      deleteTodo(id);
    }
    setIsOptionsOpen(false);
  };
  const handleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  return (
    <li key={id} className={styles.todoItem} style={{ color: "gray" }}>
      <div className={styles.todoBody}>
        <div className={styles.checkerContainer}>
          <button
            onClick={completeTodo}
            className={classNames(
              "border-2 border-coral rounded-full w-8 h-8 hover:scale-105 transition-all transform",
              completed && "bg-coral"
            )}
          >
            <CheckIcon
              className={classNames(
                "w-auto m-auto text-white transition-transform transform",
                completed ? "scale-100" : "scale-0"
              )}
            />
          </button>
         
        </div>

        <div className={styles.closerContainer}>
          <span onClick={deleteTodo}></span>
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
            <>
              <input
                placeholder="Edit todo"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button
                className={classNames(
                  "bg-greenish opacity-50 hover:opacity-100 rounded-md m-1",
                  isOptionsOpen && onUpdate && "scale-0 hidden"
                )}
                onClick={handleUpdateTodo}
              >
                <ArrowRightCircleIcon className="w-6 text-white " />
              </button>
            </>
          )}
          <div className="flex">
            <button
              className={classNames(
                "transition-transform",
                isOptionsOpen || onUpdate ? "scale-0" : "scale-100"
              )}
              onClick={handleOptions}
            >
              <EllipsisHorizontalCircleIcon className="w-7 text-white opacity-30 hover:opacity-100" />
            </button>

            <div
              className={classNames(
                "flex justify-around w-auto h-10 bg-white bg-opacity-5 rounded-md transition-transform transform",
                onUpdate || !isOptionsOpen ? "scale-0 hidden" : "scale-100"
              )}
            >
              <button
                className="bg-greenish opacity-50 hover:opacity-100 rounded-md m-1"
                onClick={handleUpdateTodo}
              >
                <PencilIcon className="m-1 w-5 text-white " />
              </button>
              <button
                className="bg-redish opacity-50 hover:opacity-100 rounded-md m-1"
                onClick={handleDeleteTodo}
              >
                <TrashIcon className="m-1 w-6 text-white " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export { TodoItem };
