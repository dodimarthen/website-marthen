import React from "react";

function Card({ title, icon, bgcolor }) {
  const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(bgcolor);

  return (
    <div
      style={isHexColor ? { backgroundColor: bgcolor } : {}}
      className={`rounded-xl p-4 text-center shadow-md hover:scale-110 transition-transform duration-300 ease-in-out ${
        !isHexColor ? `bg-${bgcolor}` : ""
      }`}
    >
      <img
        src={icon}
        alt={`${title} logo`}
        className="w-12 h-12 mx-auto mb-2"
      />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  );
}

export default Card;
