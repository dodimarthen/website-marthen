import React from "react";
import Avatar from "../../assets/6cd066eeadab12895f25bcf0d14077d6.jpg";
import GithubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin_2.png";
import TwitterIcon from "../../assets/twitter4.png";
import UpworkIcon from "../../assets/upwork.png";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#1E201E] h-screen flex items-start justify-center"
    >
      <div className="flex flex-col items-center pt-10">
        <img
          src={Avatar}
          alt="avatar image"
          className="rounded-full w-40 h-40 md:w-60 md:h-60"
        />
        <h1 className="mt-6 text-white font-medium text-3xl md:text-5xl antialiased tracking-wide">
          Dody Marthen
        </h1>
        <h2 className="mt-4 text-white font-medium text-lg md:text-2xl antialiased font-mono">
          Software Engineer
        </h2>
        <span className="flex space-x-8 md:space-x-16 mt-5 hover:scale-110 transition-transform duration-300 ease-in-out">
          <a
            href={import.meta.env.VITE_GITHUB} // Using import.meta.env in Vite
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="Github icon"
              className="h-5 w-5 md:h-10 md:w-10 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </a>
          <a
            href={import.meta.env.VITE_LINKEDIN} // Using import.meta.env for LinkedIn
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </a>
          <a
            href={import.meta.env.VITE_TWITTER} // Using import.meta.env for Twitter
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={TwitterIcon}
              alt="Twitter icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </a>
          <a
            href={import.meta.env.VITE_UPWORK} // Using import.meta.env for Upwork
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={UpworkIcon}
              alt="Upwork icon"
              className="h-8 w-8 md:h-11 md:w-11 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </a>
        </span>
        <p className="text-[#F6F5F2] mt-5 text-center subpixel-antialiased font-medium tracking-wide leading-loose text-lg sm:text-base md:text-sm">
          New to development, but committed to crafting impactful solutions and
          continuously self-learning to grow.
        </p>
      </div>
    </section>
  );
}

export default Hero;
