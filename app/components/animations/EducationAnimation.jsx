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
  return (
    <div className="w-full h-full">
      <Lottie options={options} width={500} height={500} />
    </div>
  );
};

export default EducationAnimation;
