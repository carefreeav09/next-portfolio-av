import React from "react";

const Ribbon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="mb-4">
      <div className="relative w-52">
        <svg
          height="30"
          width="30"
          style={{
            transform: "rotate(180deg)",
          }}
          className=" absolute -left-5 top-3.5 text-indigo-800"
        >
          <polygon points="15,0 0,0 0,15" fill="currentColor" />
          <polygon points="0,15 0,30 15,30" fill="currentColor" />
        </svg>

        <div className="absolute bg-indigo-800 w-30 h-12 left-5 right-5 flex items-center justify-center top-0 shadow-sm shadow-indigo-800 text-xl font-bold">
          {title}
        </div>

        <svg
          height="30"
          width="30"
          className="absolute -right-5 top-3.5 text-indigo-800"
        >
          <polygon points="15,0 0,0 0,15" fill="currentColor" />
          <polygon points="0,15 0,30 15,30" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default Ribbon;
