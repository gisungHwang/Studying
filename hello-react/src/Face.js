import React from "react";

const Face = () => {
  return (
    <div id="comparison">
      <figure>
        <div id="divisor"></div>
      </figure>
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        id="slider"
        oninput="moveDivisor()"
      />
    </div>
  );
};
export default Face;
