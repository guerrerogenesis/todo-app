import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.css";
import close from "../../assets/icons/close.png";
import unchecked from "../../assets/icons/circle.png";
import checked from "../../assets/icons/checked.png";
import { PencilIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function TodoItem(props) {
  const { key, text, completed, completeTodo, deleteTodo, updateTodo } = props;
  const [onUpdate, setOnUpdate] = useState(false);
  const [newText, setNewText] = useState(text);
  // console.log(props)
  const onUpdateTodo = (modifiedText) => {
    setOnUpdate(!onUpdate);
    console.log(modifiedText);
    // if(onUpdate === true){
    //     setNewText(modifiedText);
    //     updateTodo(key, modifiedText);
        
    // }
    
  };

  const getNewValue = (modifiedText) => {
   
  };
  return (
    <li key={key} className={styles.todoItem} style={{ color: "gray" }}>
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
              placeholder={newText}
              value={newText}
              onChange={(e) => onUpdateTodo(e.target.value)}
            />
          )}
          <div className="flex">
            <button onClick={() => onUpdateTodo()}>
              {!onUpdate ? (
                <PencilIcon className="w-5 text-white opacity-30 hover:opacity-100" />
              ) : (
                <ArrowRightCircleIcon className="w-6 text-white opacity-30 hover:opacity-100" />
              )}
            </button>
            <button></button>
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
