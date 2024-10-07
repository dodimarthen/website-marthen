import React from "react";
import Card from "../../Components/Card";
import js from "../../assets/js.png";
import mysql from "../../assets/mysql.png";
import python from "../../assets/python.png";
import puppeteer from "../../assets/pptr.png";
import react from "../../assets/react.svg";

const cardsData = [
  { title: "JavaScript", icon: js, bgcolor: "#213555" },
  { title: "Python", icon: python, bgcolor: "#26577C" },
  { title: "MySQL", icon: mysql, bgcolor: "#27374D" },
  { title: "Puppeteer", icon: puppeteer, bgcolor: "#1630205" },
  { title: "React", icon: react, bgcolor: "#FC6736" },
  { title: "React", icon: js, bgcolor: "#525CEB" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#1E201E] h-screen flex items-start justify-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            bgcolor={card.bgcolor}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
