import classNames from "classnames";
import React from "react";

//
interface IInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  rules?: any;
  errors?: any;
  register?: any;
  defaultValue?: any;
  labelClasses?: string;
  inputClasses?: string;
  wrapperClasses?: string;
}

const Input: React.FC<IInputProps> = (props) => {
  const {
    name,
    label,
    type,
    placeholder,
    rules,
    errors,
    register,
    defaultValue,
    labelClasses,
    inputClasses,
    wrapperClasses,
  } = props;

  return (
    <div className={classNames(wrapperClasses ?? "")}>
      {label && (
        <label
          htmlFor={name}
          className={classNames(
            labelClasses ?? "",
            "text-white text-lg font-semibold"
          )}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={classNames("h-10 w-full", inputClasses ?? "")}
      />

      {errors && (
        <div className="text-red-400 font-bold my-2 text-sm tracking-tighter">
          {errors}
        </div>
      )}
    </div>
  );
};

export default Input;
