import React from "react";
import styles from './styles.module.css';
import headerImg from '../../assets/images/dont_quit.png';


function TodoCounter({total, completed}){

    return (
        <React.Fragment>
            <div className={ styles.headerContainer }>
                <div className={ styles.headerImg }>
                    <img alt="dont quit" src={ headerImg }/>
                </div>
            </div>
            <h3 className={ styles.titleCounter }>Has completado {completed}/{total} Tareas</h3>
        </React.Fragment>
    );
}

export { TodoCounter };