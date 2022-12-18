import React from "react";
import cl from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={cl.load}>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
    </div>
  );
};

export default Preloader;
