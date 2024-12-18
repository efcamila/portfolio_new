import { useState } from "react";
import React from 'react';
import Avatar from "./components/Avatar";
import CopyButton from "./components/CopyButton";
import DownloadButton from "./components/DownloadButton";
import { FaCode, FaGithub, FaLink, FaLinkedin } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { IoBookOutline, IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { projects } from "./data/data";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickEvents = (isClicked) => setIsClicked(isClicked);
  const handleMouseEvents = (isHovered) => setIsHovered(isHovered);

  const navLinks = [
    { href: "#about_me", label: "Sobre mí" },
    { href: "#ability", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-10">
      <nav className="px-2 md:px-6 py-4 col-span-10 sticky top-0 bg-white/20 backdrop-blur-lg">
        <ul className="flex justify-center gap-4 md:gap-10 title text-sm text-stone-900 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grid col-span-4 md:grid-cols-10 md:col-span-10 lg:col-start-3 lg:col-end-9 mt-1 justify-self-center place-items-center place-self-center w-full px-8 md:px-10">
        <div className="col-span-4 md:col-span-5 order-2 md:order-1">
          <Avatar isHovered={isHovered} isClicked={isClicked} />
        </div>

        <div
          className="col-span-4 md:col-span-5 order-1 md:mt-14 md:pt-16"
          id="about_me"
        >
          <h1 className="text-3xl md:text-5xl text-stone-950 fredoka mt-10 md:mt-0">
            Hola, me llamo <span className="font-semibold fredoka">Camila</span>
            .
          </h1>
          <div className="flex flex-col gap-1 mt-1 text-base md:text-xl text-stone-800 h-full">
            <div className="mb-2">
            <p className="font-medium">Técnica Universitaria Web | Full Stack</p>
            <p className="font-light">Desarrollo aplicaciones web responsivas, atractivas y funcionales.</p>
            </div>
            <p className="flex items-center gap-1 font-medium text-sm"><IoLocationOutline />SAN LUIS, ARGENTINA</p>
            <div className="flex h-full gap-3 mt-4" id="contact">
              <DownloadButton
                srcFile="/CamilaEfler_CV.pdf"
                handleMouseEnter={() => handleMouseEvents(true)}
                handleMouseLeave={() => handleMouseEvents(false)}
                handleClickEnter={() => handleClickEvents(true)}
                handleClickLeave={() => handleClickEvents(false)}
              />
              <a href="https://www.linkedin.com/in/efcamilaweb" target="_blank">
                <button className="button w-fit flex h-full bg-blue-600 text-white items-center justify-center gap-2 text-base md:text-lg">
                  <FaLinkedin />
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-10 lg:col-start-2 w-full order-3 mt-14">
          <div className="flex gap-3 h-full">
            <CopyButton
              handleMouseEnter={() => handleMouseEvents(true)}
              handleMouseLeave={() => handleMouseEvents(false)}
              handleClickEnter={() => handleClickEvents(true)}
              handleClickLeave={() => handleClickEvents(false)}
            />
          </div>
        </div>

        <div
          className="col-span-4 md:col-span-10 lg:col-start-2 mt-14 w-full order-3 pt-16"
          id="ability"
        >
          <h1 className="text-2xl text-stone-900 flex items-center gap-3 font-semibold mb-4">
            <MdComputer />
            Habilidades
          </h1>

         <div className="mb-4">
          <h2 className="text-stone-900 text-sm font-semibold mb-1">FRONTEND</h2>
         <ul className="list-disc px-4 flex flex-col gap-1 text-stone-700 text-base">
            <li>HTML, CSS y Javascript</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
          </ul>
         </div>
         <div className="mb-4">
          <h2 className="text-stone-900 text-sm font-semibold mb-1">BACKEND</h2>
         <ul className="list-disc px-4 flex flex-col gap-1 text-stone-700 text-base">
            <li>PHP</li>
            <li>Java</li>
            <li>Node.js</li>
            <li>MySQL, MongoDB</li>
          </ul>
         </div>
         <div className="mb-4">
          <h2 className="text-stone-900 text-sm font-semibold mb-1">HERRAMIENTAS</h2>
         <ul className="list-disc px-4 flex flex-col gap-1 text-stone-700 text-base">
            <li>Git</li>
            <li>Github</li>
            <li>Figma</li>
            <li>Insomnia</li>
            <li>Selenium</li>
            <li>Inglés básico oral | intermedio lectura</li>
          </ul>
         </div>
        </div>

        <div className="col-span-4 md:col-span-10 lg:col-start-2 mt-10 w-full order-3">
          <h2 className="text-2xl text-stone-900 flex items-center gap-3 font-semibold mb-4 ">
            <IoBookOutline />
            Estudios
          </h2>
          <p className="text-stone-700 text-base">
            Técnicatura Universitaria en Web, Universidad Nacional de San Luis, 2023.
          </p>

          <a
            href="./NoCountry_EflerCamila.jpg"
            target="_blank"
            className="flex items-center gap-3 underline underline-offset-2 text-blue-900"
          >
            <FaLink className="text-blue-900" /> Simulación Laboral No Country,
            2024.
          </a>
        </div>

        <div
          className="col-span-4 md:col-span-10 lg:col-start-2 mt-14 pt-16 order-3"
          id="projects"
        >
          <h2 className="text-2xl text-stone-900 flex items-center gap-3 font-semibold">
            <FaCode />
            Proyectos
          </h2>
          <div className="col-span-4 md:col-span-8 flex flex-col gap-10 py-6">
            {projects.map((project, index) => (
              <div
                className="w-full text-stone-800 flex flex-col gap-5"
                key={index}
              >
                <h2 className="text-stone-900 font-semibold text-xl">
                  {project.title}
                  <div className="flex flex-wrap gap-3 mt-1">
                    {project.lenguages.map((language, index) => (
                      <p
                        key={index}
                        className={`flex items-center gap-2 px-3 rounded-xl text-sm ${language.style}`}
                      >
                        {language.icon}
                        {language.name}
                      </p>
                    ))}
                  </div>
                </h2>
                <p className="text-stone-600">{project.description}</p>
                <div className="flex gap-2">
                  {project.preview && (
                    <a href={project.preview} className="w-fit" key={index}>
                      <button className="bg-gray-500 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                        <FaLink />
                        Preview
                      </button>
                    </a>
                  )}
                  {project.url && (
                  <a href={project.url} className="w-fit">
                    <button className="bg-black px-3 py-2 rounded-lg text-white flex items-center gap-2">
                      <FaGithub />
                      Code
                    </button>
                  </a>
                  )}
                </div>
                <hr className="border border-transparent border-b-stone-900/20 h-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
