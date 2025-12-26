"use client";
import Slider from "react-slick";
import Section from "./Section";
import Card from "../Card";
import { Project } from "@/app/types";

const Projects = ({ items }: { items: Project[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  return (
    <Section id="projects" title="Projects">
      <Slider {...settings}>
        {items.map((project, index) => (
          //<div key={index} className="px-2 pb-10">
          <Card key={index} item={project} />
          //</div>
        ))}
      </Slider>
    </Section>
  );
};

export default Projects;
