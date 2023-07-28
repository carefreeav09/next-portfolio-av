import Image from "next/image";
import React from "react";

const Icons = ({ name, className }: { name: string; className?: string }) => {
  return (
    <Image
      src={`/images/svg/${name}.svg`}
      height={80}
      width={80}
      alt={`icon-${name}`}
      className={`${className ?? ""}`}
    />
  );
};

export default Icons;
