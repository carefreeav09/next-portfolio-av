import classNames from "classnames";
import React from "react";
import { MdCheck } from "react-icons/md";

interface ICheckboxProps {
  size?: number;
  customIcons?: SVGElement;
  labelClasses?: string;
  wrapperClasses?: string;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-start gap-2",
        props.wrapperClasses ?? ""
      )}
    >
      <input
        type="checkbox"
        className={classNames(
          "peer relative appearance-none shrink-0",
          props.size ? `w-${props.size} h-${props.size}` : `w-6 h-6`
        )}
        id="checkbox"
      />

      <MdCheck
        className={classNames(
          "absolute pointer-events-none stroke-white fill-none peer-checked:!fill-white",
          props.size ? `w-${props.size} h-${props.size}` : `w-6 h-6`,
          "border border-indigo-800 rounded-sm"
        )}
      />
      <label htmlFor={`checkbox`} className="cursor-pointer">
        Label
      </label>
    </div>
  );
};

export default Checkbox;
