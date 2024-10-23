import { LuCopy } from "react-icons/lu";
import { FaCheck, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import React from 'react';

export default function CopyButton({handleMouseEnter,handleMouseLeave, handleClickEnter, handleClickLeave}) {
  const [text, setText] = useState("efcamilaweb@gmail.com");
  const [copied, setCopied] = useState(false);

  const handleClickCopied = () => {
    setCopied(true);
    handleClickEnter();

    navigator.clipboard.writeText(text);

    setTimeout(() => {
      setCopied(false);
      handleClickLeave();
    }, 2000);
  };

  const onChangeText = (e) => setText(e.target.value);

  return (
    <div className="flex w-full gap-3">
      <div className="w-10/12">
        <input
          className="input bg-black/20 text-black border border-black"
          type="text"
          value={text}
          onChange={onChangeText}
          disabled
        />
      </div>
      <div className="flex w-2/12 ">
        <button className="h-full w-full flex justify-center items-center gap-3 button bg-black text-white" onClick={handleClickCopied} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {copied ? <><FaCheck /></> : <><LuCopy /></>}
        </button>
      </div>
    </div>
  );
}