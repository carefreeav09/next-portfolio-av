import classNames from "classnames";
import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { MdCheck } from "react-icons/md";

interface ICheckboxProps {
  label: string;
  name: string;
  formMethods?: UseFormReturn<FieldValues, any, undefined>;
  checked?: boolean;
  setChecked?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  size?: number;
  labelClasses?: string;
  wrapperClasses?: string;
  required?: {
    value: boolean;
    message: string;
  };
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
    <>
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
            ...formMethods.register(name as string, {
              required,
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

      {formMethods &&
        formMethods.formState.errors &&
        formMethods.formState.errors?.[name] && (
          <div className="text-red-400 font-bold my-2 text-sm tracking-tighter">
            <p>{formMethods.formState.errors?.[name]?.message as string}</p>
          </div>
        )}
    </>
  );
};

export default Checkbox;
