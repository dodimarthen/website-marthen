import React from "react";
import Avatar from "../assets/avatar.jpg";

function Hero() {
  return (
    <section id="hero">
      <div className="bg-[#3C3D37]">
        <img src={Avatar} alt="avatar image" className="rounded-full" />
      </div>
    </section>
  );
}

export default Hero;
