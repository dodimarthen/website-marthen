import React from "react";

function Card({ title, icon, bgcolor }) {
  return (
    <div
      className="rounded-xl p-4 sm:p-3 lg:p-5 text-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ backgroundColor: bgcolor }}
    >
      <img
        src={icon}
        alt={`${title} logo`}
        className="w-10 h-10 sm:w-8 sm:h-8 lg:w-12 lg:h-12 mx-auto mb-2"
      />
      <h3 className="text-md sm:text-sm lg:text-lg font-semibold text-white">
        {title}
      </h3>
    </div>
  );
}

export default Card;
