import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/education.json";

const EducationAnimation = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const width = window.screen.width > 600 ? 500 : "100%";
  const height = window.screen.width > 600 ? 500 : "100%";

  return (
    <div className="w-full">
      <Lottie options={options} width={width} height={height} />
    </div>
  );
};

export default EducationAnimation;
