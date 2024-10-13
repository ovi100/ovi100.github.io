import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import certificate from "../../public/assets/images/certificate.png";
import {
  pdImage1,
  pdImage10,
  pdImage11,
  pdImage12,
  pdImage13,
  pdImage14,
  pdImage2,
  pdImage3,
  pdImage4,
  pdImage5,
  pdImage6,
  pdImage7,
  pdImage8,
  pdImage9,
} from "@/public/assets/images";

const person = {
  educations: [
    {
      year: "2011 - 2015",
      institute: "american international university-bangladesh",
      title: "BSc. Computer Science",
    },
    {
      year: "2009 - 2011",
      institute: "govt. adamjeenagar m w college",
      title: "HSC (Science)",
    },
    {
      year: "2007 - 2009",
      institute: "m w high school",
      title: "SSC (Science)",
    },
  ],
  experiences: [
    {
      year: "Jan 2023 - Present",
      institute: "ACI Logistics Ltd.",
      title: "Software Engineer (Full Stack)",
    },
    {
      year: "Dec 2017 - Dec 2022",
      institute: "Storrea Ltd.",
      title: "Software Engineer (Frontend)",
    },
    {
      year: "Feb 2017 - Oct 2017",
      institute: "Ennvisio Digital Private Ltd.",
      title: "Software Engineer (Web Developer)",
    },
    {
      year: "Mar 2015 - Dec 2015",
      institute: "american international university-bangladesh",
      title: "Lab Assistant",
    },
  ],
  skills: {
    languages: [
      { name: "Javascript", label: "90%", width: "w-[90%]" },
      { name: "TypeScript", label: "80%", width: "w-[80%]" },
      { name: "ES6+", label: "90%", width: "w-[90%]" },
      { name: "Python(Basic)", label: "50%", width: "w-[50%]" },
    ],
    js_frameworks: [
      { name: "React Js", label: "85%", width: "w-[85%]" },
      { name: "React Native", label: "70%", width: "w-[70%]" },
      { name: "Next Js", label: "65%", width: "w-[65%]" },
      { name: "Knockout Js", label: "90%", width: "w-[90%]" },
    ],
    css_libraries: [
      { name: "Tailwind CSS", percentage: "90%", width: "w-[90%]" },
      { name: "Bootstrap", percentage: "95%", width: "w-[95%]" },
      { name: "Material UI", percentage: "80%", width: "w-[80%]" },
      { name: "Next UI", percentage: "85%", width: "w-[85%]" },
    ],
    backend: [
      { name: "Node Js", percentage: "75%", width: "w-[75%]" },
      { name: "Express Js", percentage: "75%", width: "w-[75%]" },
      { name: "Mongoose", percentage: "80%", width: "w-[80%]" },
      { name: "Firebase", percentage: "85%", width: "w-[85%]" },
    ],
    platforms: [
      { name: "Vercel", percentage: "95%", width: "w-[95%]" },
      { name: "Netlify", percentage: "95%", width: "w-[95%]" },
      { name: "Render", percentage: "90%", width: "w-[90%]" },
      { name: "App Center", percentage: "90%", width: "w-[90%]" },
    ],
    tools: [
      { name: "VS Code", percentage: "95%", width: "w-[95%]" },
      { name: "Git", percentage: "95%", width: "w-[95%]" },
      { name: "Github", percentage: "95%", width: "w-[95%]" },
      { name: "Postman", percentage: "75%", width: "w-[75%]" },
      { name: "Figma", percentage: "65%", width: "w-[65%]" },
      { name: "Photoshop", percentage: "50%", width: "w-[50%]" },
      { name: "Zoho Sprint", percentage: "90%", width: "w-[90%]" },
      { name: "Notion", percentage: "90%", width: "w-[90%]" },
      { name: "Chat GPT", percentage: "70%", width: "w-[70%]" },
    ],
    others: [
      { name: "HTML5", percentage: "95%", width: "w-[95%]" },
      { name: "CSS3", percentage: "95%", width: "w-[95%]" },
      { name: "RESTful APIs", percentage: "95%", width: "w-[95%]" },
      { name: "Maps API", percentage: "90%", width: "w-[90%]" },
      { name: "JSON", percentage: "90%", width: "w-[90%]" },
      { name: "Chart Js", percentage: "90%", width: "w-[90%]" },
      { name: "JWT", percentage: "90%", width: "w-[90%]" },
      { name: "JQuery", percentage: "90%", width: "w-[90%]" },
      { name: "AJAX", percentage: "90%", width: "w-[90%]" },
      { name: "Axios", percentage: "90%", width: "w-[90%]" },
    ],
  },
  certificates: [
    {
      image: certificate,
      date: "June 24, 2022",
      institute: "freecodecamp.org",
      title: "Responsive Web Design",
      link: "https://www.freecodecamp.org/certification/abu-sayed/responsive-web-design",
    },
    {
      image: certificate,
      date: "July 29, 2022",
      institute: "freecodecamp.org",
      title: "Front End Development",
      link: "https://www.freecodecamp.org/certification/abu-sayed/front-end-development-libraries",
    },
    {
      image: certificate,
      date: "July 17, 2022",
      institute: "freecodecamp.org",
      title: "JavaScript Algorithms and Data Structures",
      link: "https://www.freecodecamp.org/certification/abu-sayed/javascript-algorithms-and-data-structures",
    },
  ],
  projects: [
    {
      image: pdImage3,
      name: "B2B Admin",
      url: "https://b2badmin2023.netlify.app/",
      tag: "react js",
      technology: "react js",
    },
    {
      image: pdImage1,
      name: "Attendance System",
      url: "https://attendx.netlify.app/",
      tag: "react js",
      technology: "react js",
    },
    {
      image: pdImage2,
      name: "B2B SR",
      url: "/android-app1",
      tag: "react native",
      technology: "react native",
    },
    {
      image: pdImage1,
      name: "AttendX",
      url: "https://attendx.netlify.app/",
      tag: "react native",
      technology: "react native",
    },
    {
      image: pdImage13,
      name: "Delivery App",
      url: "/android-app3",
      tag: "react native",
      technology: "react native",
    },
    {
      image: pdImage14,
      name: "B2B SR Order",
      url: "https://b2b-web.netlify.app/",
      tag: "react js",
      technology: "react js",
    },
    {
      image: pdImage4,
      name: "Oikko BD",
      url: "https://www.oikko.com.bd/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage5,
      name: "One step uk",
      url: "https://www.nextdoorcollection.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage6,
      name: "Vape Cafe",
      url: "https://thevapecafe.com.bd/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage7,
      name: "Electronics Store",
      url: "https://www.intimacy.com.bd/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage8,
      name: "Gadgets Store",
      url: "https://special.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage9,
      name: "Grocery Store",
      url: "https://grocery.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage10,
      name: "Heal and Care",
      url: "https://healncare.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage11,
      name: "Vape Circle BD",
      url: "https://vapecirclebd.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage12,
      name: "Kraos Bangladesh",
      url: "https://www.kraosbangladesh.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
  ],
  languages: [
    { name: "English", label: "B2", percentage: "70%", width: "w-[70%]" },
    { name: "German", label: "A1", percentage: "17%", width: "w-[17%]" },
    { name: "Hindi", label: "A2", percentage: "34%", width: "w-[34%]" },
  ],
  social_media: [
    {
      icon: <FaFacebookSquare className="w-6 h-6" />,
      name: "facebook",
      link: "https://www.facebook.com/sayeed2011",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "linkedin",
      link: "https://www.linkedin.com/in/sayed2017",
    },
    {
      icon: <FaGithubSquare className="w-6 h-6" />,
      name: "github",
      link: "https://github.com/ovi100",
    },
  ],
  contact: [
    {
      icon: <SlScreenSmartphone className="w-10 h-10 text-blue-400" />,
      name: "phone",
      text: "(+880) 1675600270",
    },
    {
      icon: <FiMapPin className="w-10 h-10 text-blue-400" />,
      name: "address",
      text: "Dhaka, Bangladesh",
    },
    {
      icon: <HiOutlineMail className="w-10 h-10 text-blue-400" />,
      name: "email",
      text: "sayeed.abu02@gmail.com",
    },
  ],
};

person.skills.all = [
  ...person.skills.languages,
  ...person.skills.js_frameworks,
  ...person.skills.css_libraries,
  ...person.skills.backend,
  ...person.skills.platforms,
  ...person.skills.others,
  ...person.skills.tools,
];

export { person };
