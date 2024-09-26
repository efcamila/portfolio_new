import React, { useEffect, useState } from "react";

const Avatar = ({ isHovered, isClicked }) => {
  const [avatarStart, setAvatarStart] = useState("");
  const avatarStartImages = [
    { image: "./normal.svg", time: 900 },
    { image: "./sideeye1.svg", time: 700 },
    { image: "./sideeye2.svg", time: 700 },
    { image: "./close.svg", time: 200 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setAvatarStart(avatarStartImages[currentIndex].image);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % avatarStartImages.length;
        setAvatarStart(avatarStartImages[nextIndex].image);
        return nextIndex;
      });
    }, avatarStartImages[currentIndex].time);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <img
      src={isClicked ? "./happy.svg" : isHovered ? "./expect.svg" : avatarStart}
      alt="Avatar de Camila"
      className="w-48 h-48 md:w-96 md:h-96"
    />
  );
};

export default Avatar;
