import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

function TodoList(props) {
  const { children } = props;
  return (
    <section>
      {children.length > 0 ? (
        <ul>{children}</ul>
      ) : (
        <div className="flex flex-col justify-center items-center"><p className="text-center opacity-70"> No hay tareas, añade una </p><FaceSmileIcon className="w-6 text-white"/></div>

      )}
    </section>
  );
}

export { TodoList };
