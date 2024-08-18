"use client";
import React from "react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={iconStyles} onClick={() => swiper.slidePrev()}></PiCaretLeftBold>
      </button>
      <button className={btnStyles} >
        <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()}></PiCaretRightBold>
      </button>
    </div>
  );
};

export default WorkSliderBtns;
