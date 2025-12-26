import React from 'react';
import Slider from "react-slick";
import { Project } from '../types';
import Card from './Card';

const ProjectSlider = ({ items }: { items: Project[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((project, index) => (
          <Card key={index} item={project} />
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;