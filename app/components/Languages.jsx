import { person } from "../data";
import SkillBox from "./SkillBox";

const Languages = () => {
  const { languages } = person;

  return (
    <div className="mt-20">
      <div className="header relative text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          languages
        </div>
        <div className="line bg-[#333] w-[100px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-2/5 xl:w-[90%] mx-auto mt-10">
        <SkillBox title="" skills={languages} />
      </div>
    </div>
  );
};

export default Languages;
