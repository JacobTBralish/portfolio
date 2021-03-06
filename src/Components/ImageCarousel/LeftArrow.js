import React from "react";
import "./Slider.scss";

const LeftArrow = props => {
  return (
    <div className="backArrow arrow" onClick={() => props.goToPrevSlide()}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
