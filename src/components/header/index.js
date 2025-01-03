import React from "react";
import headerImg from "../../assets/images/ppperspective.png";

const Header = () => {
  return (
    <div className="fixed w-full h-auto top-0 left-0 z-0"> 
      <div className="w-full h-auto absolute top-0 left-0 z-10">
        <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-20 backdrop-blur-lg">
          <img className="m-1" alt="LineUp logo" src={headerImg} />
        </div>
      </div>
    </div>
  );
};

export { Header };
