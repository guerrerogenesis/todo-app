import React from "react";
import styles from './styles.module.css';
import classNames from "classnames";


function TodoCounter({total, completed}){

    return (
        <div className="h-1/5">
            <div className={ classNames(styles.headerContainer, "mt-28") }>
            </div>
            <h3 className={classNames( styles.titleCounter, "") }>Has completado {completed}/{total} Tareas</h3>
        </div>
    );
}

export { TodoCounter };