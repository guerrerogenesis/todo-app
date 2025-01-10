import React from "react";
import bgImg from "../../assets/images/sssquiggly.png";
import Linkedin from "../../assets/icons/linkedin.svg";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      class=" w-screen bg-no-repeat bg-cover h-48 lg:h-56 z-1"
      style={{ backgroundImage: `url(${bgImg}` }}
    >
      <div class="flex flex-col items-start justify-end lg:flex-row lg:justify-start lg:items-end h-full p-4 backdrop-blur-sm text-white text-sm">
        <span className="mr-5 hidden lg:block">
          Génesis Guerrero | Desarrolladora Web | © {year}
        </span>

        <a
          className="mb-5 lg:mb-0 mr-5 flex "
          target="_blank"
          rel="noreferrer"
          href="https://genesisguerrero-dev.vercel.app/"
        >
          {" "}
          <BriefcaseIcon className=" w-5 text-white mr-1" /> Portafolio
        </a>
        <a
          className="mb-5 lg:mb-0 mr-5 flex"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/genesisd-guerrero/"
        >
          <img src={Linkedin} alt="linkedin" className="w-5 mr-1" />{" "}
          genesisd-guerrero
        </a>
        <span className="mr-5 block lg:hidden">
          Génesis Guerrero | © {year}
        </span>
      </div>
    </footer>
  );
};

export { Footer };
