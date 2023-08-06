import React from "react";

const Ribbon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="mb-4">
      <div className="relative w-52">
        <svg
          height="40"
          width="40"
          style={{
            transform: "rotate(180deg)",
          }}
          className=" absolute -left-6 top-1 text-indigo-800"
        >
          <polygon points="20,0 0,0 0,20" fill="currentColor" />
          <polygon points="0,20 0,40 20,40" fill="currentColor" />
        </svg>

        <div className="absolute bg-indigo-800 w-30 h-10 left-5 right-5 flex items-center justify-center top-0 shadow-sm shadow-indigo-800 text-base font-bold">
          {title}
        </div>

        <svg
          height="40"
          width="40"
          className="absolute -right-6 top-1 text-indigo-800"
        >
          <polygon points="20,0 0,0 0,20" fill="currentColor" />
          <polygon points="0,20 0,40 20,40" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default Ribbon;
