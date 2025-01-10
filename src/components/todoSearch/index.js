import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <div className="w-full p-4 flex justify-center items-center lg:m-auto min-h-[100px]">
      <input
        className="w-full p-4 bg-white/[.05] rounded-full h-10  text-white placeholder:text-white/[.25] "
        placeholder="Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  ];
}

export { TodoSearch };
