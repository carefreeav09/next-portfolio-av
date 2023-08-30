import classNames from "classnames";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

//
interface IInputProps {
  name: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  type?: string;
  placeholder?: string;
  rules?: any;
  errors?: FieldErrors<FieldValues>;
  register?: UseFormRegister<FieldValues>;
  defaultValue?: string;
  labelClasses?: string;
  inputClasses?: string;
  wrapperClasses?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = (props) => {
  const {
    name,
    required,
    disabled,
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
    onChange,
  } = props;

  return (
    <div className={classNames(wrapperClasses ?? "")}>
      {label && (
        <label
          htmlFor={name}
          className={classNames(
            labelClasses ?? "",
            "text-gray-400 text-lg font-semibold mb-2"
          )}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        defaultValue={defaultValue}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(
          "h-10 w-full text-black px-2",
          "hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-md focus:shadow-md focus:shadow-gray-700",
          inputClasses ?? ""
        )}
        // if register fn exists
        {...(register && {
          ...register?.(name, {
            required: {
              value: required,
              message: `${label} is required`,
            },
            ...rules,
          }),
        })}
        // if register doesn't exist
        {...(onChange && { onChange: onChange })}
      />

      {errors && errors[name] && (
        <div className="text-red-400 font-bold my-2 text-sm tracking-tighter">
          <p>{errors?.[name]?.message as string}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
