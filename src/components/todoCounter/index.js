import React from "react";


function TodoCounter({total, completed}){

    return (
        <div className="h-1/5">
            <div className="w-5/6 flex justify-center m-auto mt-40">
            </div>
            <h3 className="mt-10 text-2xl md:text-2xl lg:text-3xl text-center text-white font-quicksand">Has completado {completed}/{total} Tareas</h3>
        </div>
    );
}

export { TodoCounter };