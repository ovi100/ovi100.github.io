import { useState } from "react";
import ProjectCard from "./ProjectCard";
import TabNav from "./TabNav";
import { person } from "../data";

const Works = () => {
  const navItems = ["all", "ecommerce", "react js", "react native"];
  const [active, setActive] = useState(navItems[0]);

  const ecommerces = person.projects.filter(
    (project) => project.tag === "ecommerce"
  );
  const react_js = person.projects.filter(
    (project) => project.tag === "react js"
  );
  const react_native = person.projects.filter(
    (project) => project.tag === "react native"
  );

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          portfolio
        </div>
        <div className="line bg-[#333] w-[80px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto mt-10">
        <div className="tab-nav mb-10">
          <TabNav navItems={navItems} active={active} setActive={setActive} />
        </div>
        <div className="tab-content mt-10">
          {active === "all" && (
            <div className="all-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {person.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          {active === "ecommerce" && (
            <div className="ecommerce-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {ecommerces.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          {active === "react js" && (
            <div className="react-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {react_js.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          {active === "react native" && (
            <div className="native-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {react_native.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
