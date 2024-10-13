import { useState } from "react";
import { person } from "../data";
import TabNav from "./TabNav";

const Skills = () => {
  const navItems = [
    "all",
    "programming",
    "frontend",
    "backend",
    "platforms",
    "tools",
    "others",
  ];
  const [active, setActive] = useState(navItems[0]);
  const {
    all,
    languages,
    js_frameworks,
    css_libraries,
    backend,
    platforms,
    tools,
    others,
  } = person.skills;

  const frontend = js_frameworks.concat(css_libraries);

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          skills
        </div>
        <div className="line bg-[#333] w-[60px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto mt-10">
        <div className="tab-nav mb-10">
          <TabNav navItems={navItems} active={active} setActive={setActive} />
        </div>
        <div className="tab-content mt-10">
          {active === "all" && (
            <div className="flex items-center flex-wrap gap-5">
              {all.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {active === "programming" && (
            <div className="flex items-center flex-wrap gap-5">
              {languages.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {active === "frontend" && (
            <div className="flex items-center flex-wrap gap-5">
              {frontend.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {active === "backend" && (
            <div className="flex items-center flex-wrap gap-5">
              {backend.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {active === "platforms" && (
            <div className="flex items-center flex-wrap gap-5">
              {platforms.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {active === "tools" && (
            <div className="flex items-center flex-wrap gap-5">
              {tools.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {active === "others" && (
            <div className="flex items-center flex-wrap gap-5">
              {others.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {active === "languages" && (
            <div className="flex items-center flex-wrap gap-5">
              {communication_languages.map((item, index) => (
                <div
                  className="border border-blue-500 text-white text-center text-sm rounded-3xl px-3 py-1.5"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
