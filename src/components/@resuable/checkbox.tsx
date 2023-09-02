import classNames from "classnames";
import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { MdCheck } from "react-icons/md";

interface ICheckboxProps {
  label: string;
  name?: string;
  formMethods?: UseFormReturn<FieldValues, any, undefined>;
  checked?: boolean;
  setChecked?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  size?: number;
  labelClasses?: string;
  wrapperClasses?: string;
  required?: boolean;
  rules?: any;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { formMethods, name, required, label, rules, setChecked } = props;
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
        checked={props.checked}
        className={classNames(
          "peer relative appearance-none shrink-0",
          props.size ? `w-${props.size} h-${props.size}` : `w-6 h-6`
        )}
        id="checkbox"
        {...(formMethods && {
          ...formMethods.register?.(name as string, {
            required: {
              value: required,
              message: `${label} is required`,
            },
            ...rules,
          }),
        })}
        // // if register doesn't exist
        {...(setChecked && { onChange: setChecked })}
      />

      <MdCheck className={iconClasses} />
      <label
        htmlFor={`checkbox`}
        className={classNames(
          props.labelClasses ?? "",
          "text-gray-400 text-lg font-semibold cursor-pointer"
        )}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
