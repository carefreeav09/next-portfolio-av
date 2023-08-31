import classNames from "classnames";
import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { MdCheck } from "react-icons/md";

interface ICheckboxProps {
  label: string;
  name?: string;
  formMethods?: UseFormReturn<FieldValues, any, undefined>;
  checked?: boolean;
  setChecked?: (value: boolean) => void;
  size?: number;
  labelClasses?: string;
  wrapperClasses?: string;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  //

  const iconClasses = classNames(
    "absolute pointer-events-none stroke-white fill-none peer-checked:!fill-white",
    props.size ? `w-${props.size} h-${props.size}` : `w-6 h-6`,
    "border border-indigo-800 rounded-sm"
  );

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

      <MdCheck className={iconClasses} />

      <label
        htmlFor={`checkbox`}
        className={classNames(
          props.labelClasses ?? "",
          "text-white cursor-pointer"
        )}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
