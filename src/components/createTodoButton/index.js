import { useState, useRef } from "react";
import styles from "./styles.module.css";
import { PlusIcon } from "@heroicons/react/16/solid";
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
      setIsVisible(false);

    } else if (e.type === "click") {
      addTodo(e.target.previousSibling.value);
      inputRef.current.value = "";
      setIsVisible(false);

    }
  };
  return (
    <div className="z-10">
      <div className={styles.createContainer}>
        <button
          className={styles.todoButton}
          onClick={() => {
            onOpenModal();
          }}
        >
          <PlusIcon className={classNames("w-10 m-auto text-white transform transition-transform duration-300",isVisible ? "rotate-45" : "rotate-0" )} />
          
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            className={classNames("w-60 z-10", styles.addTodoContainer)}
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
    </div>
  );
}

export { CreateTodoButton };
