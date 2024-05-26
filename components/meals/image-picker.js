"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState(null);
  const inputRef = useRef();
  const handlePickClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader(); // built in class in javascript for reading file

    // it is occured after fileReader.readAsDataURL runs
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file); // read as data url
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image ? (
            <p>No image picked yet.</p>
          ) : (
            <Image src={image} alt="The selected image" fill />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={inputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
