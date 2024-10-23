import React, { useEffect, useState } from "react";

const Avatar = ({ isHovered, isClicked }) => {
  const [avatarStart, setAvatarStart] = useState("");
  const [images, setImages] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const loadedImages = {};
    avatarStartImages.forEach((img) => {
      const image = new Image(); 
      image.src = img.src; 
      loadedImages[img.src] = image; 
    });
    setImages(loadedImages); 
    setAvatarStart(loadedImages[avatarStartImages[0].src].src); // Imagen inicial
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 4;
        setAvatarStart(images[avatarStartImages[nextIndex].src]?.src || "");
        return nextIndex;
      });
    }, avatarStartImages[currentIndex]?.time);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const avatarStartImages = [
    { src: "./normal.svg", time: 900 },
    { src: "./sideeye1.svg", time: 700 },
    { src: "./sideeye2.svg", time: 700 },
    { src: "./close.svg", time: 200 },
    { src: "./expect.svg", time: 200 },
    { src: "./happy.svg", time: 200 },
  ];

  return (
    <img
      src={isClicked ? images["./happy.svg"]?.src : isHovered ? images["./expect.svg"]?.src : avatarStart}
      alt="Avatar"
      className="w-48 h-48 md:w-96 md:h-96"
    />
  );
};

export default Avatar;
