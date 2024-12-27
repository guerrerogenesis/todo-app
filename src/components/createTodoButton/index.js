import { useState, useRef } from "react";
import styles from "./styles.module.css";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function CreateTodoButton(props) {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);

  const { addTodo } = props;
  const onOpenModal = () => {
    setIsVisible(!isVisible);
  };
  const onCreateTodo = (e) => {
    if (e.type === "keydown" && e.code === "Enter") {
      addTodo(e.target.value);
      inputRef.current.value = "";
    } else if (e.type === "click") {
      addTodo(e.target.previousSibling.value);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className={styles.createContainer}>
        <button
          className={styles.todoButton}
          onClick={() => {
            onOpenModal();
          }}
        >
          {!isVisible ? (
            <PlusIcon className="w-10 m-auto text-white" />
          ) : (
            <XMarkIcon className="w-10 m-auto text-white" />
          )}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            className={classNames("w-60", styles.addTodoContainer)}
            initial={{ opacity: 0, height: 30 }}
            animate={{
              opacity: 1,
              height: "100px",
              transition: { duration: 0.1 },
            }}
            exit={{ opacity: 0, height: 30 }}
          >
            <input
              type="text"
              placeholder="Nueva tarea"
              onKeyDown={(e) => onCreateTodo(e)}
              ref={inputRef}
            />
            <ArrowRightCircleIcon
              className="h-6 text-graylight"
              onClick={(e) => onCreateTodo(e)}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export { CreateTodoButton };
