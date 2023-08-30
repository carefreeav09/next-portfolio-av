import React from "react";
import classNames from "classnames";

interface IContainerProps {
  children: React.ReactNode;
  width?: string;
  extraClasses?: string;
  padding?: string;
}

const Container: React.FC<IContainerProps> = (props: IContainerProps) => {
  const { children, width, extraClasses, padding } = props;

  //
  return (
    <div
      className={classNames(
        width && "w-10/12",
        "mx-auto",
        padding ?? "p-12",
        extraClasses
      )}
    >
      {children}
    </div>
  );
};

export default Container;
