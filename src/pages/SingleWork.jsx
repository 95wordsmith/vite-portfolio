

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal.jsx";
import workItems from "../data.js";
import "./SingleWork.css";

function SingleWork() {
  const { singleId } = useParams();
  const singleWork = workItems.find((work) => work.id == singleId);
  const { webAddress, stack, title, description, imageSlider, preview } =
    singleWork;

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  function openModalFunc() {
    setOpenModal(true);
  }
  function closeModalFunc() {
    setOpenModal(false);
  }

  useEffect(() => {
    if (imageSlider.length > 0) {
      setSelectedImage(imageSlider[currentIndex]);

      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlider.length);
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, imageSlider]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      {openModal && (
        <Modal onCLoseModal={closeModalFunc}>
          <img className="w-[1000px] rounded-xl" src={preview} />
        </Modal>
      )}
      <div className="singleContainer mb-40">
        <div className="singleChildContainer">
          <h1 className="text-cyan-400 pb-10 text-5xl">
            Title:<span className="text-pink-400"> {title}</span>
          </h1>
          <p className="text-cyan-400 text-2xl pb-10">
            Description: <span className="text-pink-400">{description}</span>
          </p>
          <p className="text-cyan-400 text-2xl pb-10">
            Stack: <span className="text-pink-400">{stack}</span>
          </p>
          <span className="text-cyan-400 text-2xl">Web-Address: </span>
          <a
            className="text-pink-400 text-2xl underline"
            href={webAddress}
            target="_blank"
          >
            {webAddress}
          </a>
          <br />
          <button
            onClick={openModalFunc}
            className="button mt-10 mb-10 text-pink-400"
          >
            Preview Website
          </button>
          <Link to="/portfolio" className="text-2xl underline text-red-700">
            Back to Portfolio
          </Link>
        </div>
        <div className="">
          <div className="w-full">
            {selectedImage && (
              <img
                className="object-contain max-h-[470px] m-auto border-4 border-cyan-400 rounded-md"
                src={selectedImage}
                alt="Selected"
              />
            )}
          </div>
          <div className="SingleImageClick mt-20">
            {imageSlider.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={() => handleImageClick(image)}
                className={`border-dashed border-4 h-[200px]  cursor-pointer singleImagePosition ${
                  selectedImage === image
                    ? "border-cyan-400"
                    : "border-pink-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleWork;
