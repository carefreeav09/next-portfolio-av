import React from "react";

//
interface ITimelineBannerProps {
  startDate: string;
  endDate?: string;
  current?: boolean;
}

const TimelineBanner: React.FC<ITimelineBannerProps> = (props) => {
  const { startDate, endDate, current } = props;

  //
  return (
    <div className="relative w-40">
      <svg
        height="30"
        width="30"
        style={{
          transform: "rotate(180deg)",
        }}
        className=" absolute -left-5 text-secondary"
      >
        <polygon points="15,0 0,0 0,15" fill="currentColor" />
        <polygon points="0,15 0,30 15,30" fill="currentColor" />
      </svg>

      <div className="absolute bg-secondary w-40 h-10 left-3 right-5 flex items-center justify-start top-0 text-sm font-bolder pl-4 -mt-1">
        {startDate} {current || endDate ? "-" : ""}{" "}
        {current ? "Current" : endDate ?? ""}
      </div>
    </div>
  );
};

export default TimelineBanner;
