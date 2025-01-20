import React, { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSearchengin } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiFlutter } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const sliderRef = useRef(null);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "SEO", icon: <FaSearchengin /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Flutter", icon: <SiFlutter /> },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Skills</h2>
        <Slider {...settings} ref={sliderRef}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center p-4 border rounded-md shadow-sm bg-white"
            >
              <div className="text-6xl mb-4 text-indigo-600">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Skills;
