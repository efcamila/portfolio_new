import React from "react";
import {
    FaCss3Alt,
    FaJava,
    FaReact,
  } from "react-icons/fa6";
  import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { DiPhp } from "react-icons/di";

export const projects = [
  {
    title: "Amaite by Vanesa",
    description:
      "Landing page para centro de estética que busca promocionar su local.",
    lenguages: [
      {
        name: "react",
        style: "bg-[#61DAFB] text-stone-700",
        icon: <FaReact />,
      },
      {
        name: "typescript",
        style: "bg-[#007ACC] text-stone-100",
        icon: <BiLogoTypescript />,
      },
      {
        name: "tailwind",
        style: "bg-[#38B2AC] text-stone-100",
        icon: <RiTailwindCssFill />,
      },
    ],
    preview: "https://amaitebyvanesa.com",
  },
    {
      title: "Biblioteca de Componentes",
      description:
        "Aplicación web para enseñar los componentes creados desde 0 para facilitar el desarrollo frontend.",
      lenguages: [
        {
          name: "react",
          style: "bg-[#61DAFB] text-stone-700",
          icon: <FaReact />,
        },
        {
          name: "typescript",
          style: "bg-[#007ACC] text-stone-100",
          icon: <BiLogoTypescript />,
        },
        {
          name: "tailwind",
          style: "bg-[#38B2AC] text-stone-100",
          icon: <RiTailwindCssFill />,
        },
      ],
      url: "https://github.com/efcamila/components_web",
      preview: "https://componentes-wbc.vercel.app/",
    },
    {
      title: "Componentes",
      description:
        "Componentes creados desde 0 para facilitar el desarrollo frontend.",
      lenguages: [
        {
          name: "react",
          style: "bg-[#61DAFB] text-stone-700",
          icon: <FaReact />,
        },
        {
          name: "typescript",
          style: "bg-[#007ACC] text-stone-100",
          icon: <BiLogoTypescript />,
        },
        {
          name: "tailwind",
          style: "bg-[#38B2AC] text-stone-100",
          icon: <RiTailwindCssFill />,
        },
      ],
      url: "https://github.com/efcamila/componentes-react-ts",
    },
    {
      title: "HealthTech - No Country",
      description:
        "Aplicación web diseñada para el centro médico X, que permite a sus pacientes programar consultas médicas desde la comodidad de su hogar.",
      lenguages: [
        {
          name: "react",
          style: "bg-[#61DAFB] text-stone-700",
          icon: <FaReact />,
        },
        { name: "java", style: "bg-[#007396] text-stone-100", icon: <FaJava /> },
        {
          name: "css",
          style: "bg-[#1572B6] text-stone-100",
          icon: <FaCss3Alt />,
        },
      ],
      url: "https://github.com/No-Country-simulation/c19-47-n-java-react",
    },
    {
      title: "Gestor de Tareas",
      description:
        "Aplicación web que permite a los usuarios registrarse, iniciar sesión, crear tareas y compartirlas con otras personas.",
      lenguages: [
        {
          name: "php",
          style: "bg-[#8993BE]",
          icon: <DiPhp className="text-2xl" />,
        },
        { name: "javascript", style: "bg-[#F7DF1E]", icon: <IoLogoJavascript /> },
        {
          name: "css",
          style: "bg-[#1572B6] text-stone-100",
          icon: <FaCss3Alt />,
        },
      ],
      url: "https://github.com/efcamila/gestor-tarea",
    },
    {
      title: "Mi Veterinaria",
      description:
        "Aplicación web que facilita al personal veterinario registrarse, iniciar sesión y llevar un control de los propietarios y sus mascotas.",
      lenguages: [
        {
          name: "php",
          style: "bg-[#8993BE]",
          icon: <DiPhp className="text-2xl" />,
        },
        { name: "javascript", style: "bg-[#F7DF1E]", icon: <IoLogoJavascript /> },
        {
          name: "css",
          style: "bg-[#1572B6] text-stone-100",
          icon: <FaCss3Alt />,
        },
      ],
      url: "https://github.com/efcamila/mi_veterinaria",
    },
  ];