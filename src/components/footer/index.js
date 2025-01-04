import React from "react";
import bgImg from "../../assets/images/sssquiggly.png";
import Linkedin from "../../assets/icons/linkedin.svg";
import { BriefcaseIcon } from "@heroicons/react/24/outline";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      class="absolute left-0 w-full bg-no-repeat bg-cover h-64 z-1"
      style={{ backgroundImage: `url(${bgImg}` }}
    >
      <div class="flex justify-start items-end h-full p-4 backdrop-blur-sm text-white text-sm">
        <span className="mr-5">Génesis Guerrero | Desarrolladora Web | © {year}</span>
        
        <a className="mr-5 flex " href="https://genesisguerrero-dev.vercel.app/"> <BriefcaseIcon className="w-5 text-white mr-1"/> Portafolio</a>
        <a className="mr-5 flex" href="https://www.linkedin.com/in/genesisd-guerrero/">
            <img src={Linkedin} alt="linkedin" className="w-5 mr-1" /> genesisd-guerrero
        </a>
        
      </div>
    </footer>
  );
};

export { Footer };
