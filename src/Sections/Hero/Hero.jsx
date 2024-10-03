import React from "react";
import Avatar from "../../assets/6cd066eeadab12895f25bcf0d14077d6.jpg";
import GithubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin_2.png";
import TwitterIcon from "../../assets/twitter4.png";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#1E201E] h-screen flex items-start justify-center"
    >
      <div className="flex flex-col items-center pt-10">
        {" "}
        <img
          src={Avatar}
          alt="avatar image"
          className="rounded-full w-40 h-40 md:w-60 md:h-60"
        />
        <h1 className="mt-6 text-white font-medium text-3xl md:text-5xl antialiased tracking-wide">
          Dody Marthen
        </h1>
        <h2 className="mt-4 text-white font-medium text-lg md:text-2xl antialiased font-mono">
          Software Developer
        </h2>
        <span className="flex space-x-8 md:space-x-16 mt-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="Github icon"
              className="h-5 w-5 md:h-10 md:w-10"
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn icon"
              className="h-8 w-8 md:h-10 md:w-10"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={TwitterIcon}
              alt="Twitter icon"
              className="h-8 w-8 md:h-10 md:w-10"
            />
          </a>
        </span>
        <p className="text-[#F6F5F2] mt-5 subpixel-antialiased font-medium tracking-wide leading-loose">
          New to development, but committed to crafting impactful solutions and
          continuously self-learning to grow.
        </p>
      </div>
    </section>
  );
}

export default Hero;
