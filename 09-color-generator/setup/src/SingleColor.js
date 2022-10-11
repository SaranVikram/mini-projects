import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setalert] = useState(false);
  const bcg = rgb.join(",");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setalert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{`${weight}%`}</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
