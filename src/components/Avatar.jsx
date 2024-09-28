import React, { useEffect, useState } from "react";

const Avatar = ({ isHovered, isClicked }) => {
  return (
    <img
      src={isClicked ? "./happy.svg" : isHovered ? "./expect.svg" : "./me.gif"}
      alt="Avatar de Camila"
      className="w-44 h-48 md:min-w-[22rem] md:min-h-96"
    />
  );
};

export default Avatar;
