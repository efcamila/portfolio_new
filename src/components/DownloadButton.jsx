import { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import React from 'react';

export default function DownloadButton({ srcFile, handleMouseEnter,handleMouseLeave, handleClickEnter, handleClickLeave}) {
  const [download, setDownload] = useState(false);

  const handleClickDownload = () => {
    setDownload(true);
    handleClickEnter();

    setTimeout(() => {
      setDownload(false);
      handleClickLeave();
    }, 2000);
  };

  return (
    <a href={srcFile} download>
      <button className="flex gap-3 w-fit items-center button bg-black text-white text-nowrap" onClick={handleClickDownload} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Descarga mi CV
        <IoMdDownload />
      </button>
    </a>
  );
}
