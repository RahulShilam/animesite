"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const ref = useRef();
  const handleClick = () => {
    ref.current.click();
  };
  const handleChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <>
      <label htmlFor={name}>Upload an Image</label>
      {pickedImage && (
        <Image
          src={pickedImage}
          alt="user image"
          width={100}
          height={100}
        ></Image>
      )}
      <input
        style={{ display: "none" }}
        type="file"
        id={name}
        accept="image/png image/jpeg"
        name={name}
        required
        ref={ref}
        onChange={handleChange}
      ></input>
      <button style={{ width: "200px" }} type="button" onClick={handleClick}>
        {label}
      </button>
    </>
  );
}
