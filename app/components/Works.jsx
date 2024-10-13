import { useState } from "react";
import ProjectCard from "./ProjectCard";
import TabNav from "./TabNav";
import { person } from "../data";
import AppCard from "./AppCard";

const Works = () => {
  const navItems = ["all", "ecommerce", "react js", "react native"];
  const [active, setActive] = useState(navItems[0]);

  const ecommerces = person.projects.filter(
    (project) =>
      project.platform === "web" &&
      project.tag.some((item) => item === "eCommerce")
  );
  const react_js = person.projects.filter(
    (project) =>
      project.platform === "web" &&
      project.tag.some((item) => item === "React Js")
  );
  const react_native = person.projects.filter(
    (project) =>
      project.platform === "android" &&
      project.tag.some((item) => item === "React Native")
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
            <div className="all-project grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
              {person.projects.map((project, index) => (
                <AppCard key={index} item={project} />
              ))}
            </div>
          )}
          {active === "ecommerce" && (
            <div className="ecommerce-project grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
              {ecommerces.map((project, index) => (
                <AppCard key={index} item={project} />
              ))}
            </div>
          )}
          {active === "react js" && (
            <div className="react-project grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
              {react_js.map((project, index) => (
                <AppCard key={index} item={project} />
              ))}
            </div>
          )}
          {active === "react native" && (
            <div className="native-project grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
              {react_native.map((project, index) => (
                <AppCard key={index} item={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
