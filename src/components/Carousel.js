import { useEffect, useState } from "react";
import classes from "./Carousel.module.css";
export default function Carousel({ name, images, setShowCarousel }) {
  useEffect(() => {
    document.body.style.position = "relative";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const sortedImages = Object.keys(images).sort();
  const listLength = sortedImages.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(
    sortedImages.indexOf(name)
  );
  return (
    <div className={classes.container} style={{ top: window.scrollY }}>
      <button
        onClick={() =>
          setCurrentImageIndex((index) => (index - 1 + listLength) % listLength)
        }
      >
        {"<"}
      </button>
      <img
        src={images[sortedImages[currentImageIndex]]}
        className={classes.image}

      ></img>
      <button
        onClick={() =>
          setCurrentImageIndex((index) => (index + 1) % listLength)
        }
      >
        {">"}
      </button>
      <button onClick={() => setShowCarousel("")}>{"x"}</button>
    </div>
  );
}
