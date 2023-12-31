import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import { Controller, FieldValues, UseFormReturn } from "react-hook-form";

import { BsChevronBarUp, BsCheck } from "react-icons/bs";

interface IOptions {
  label: string;
  value: string | number | boolean;
}

interface ISelectComponentProps {
  options: IOptions[];
  name: string;
  value?: string | number | boolean | string[];
  onChange?: (value: string | number | boolean | string[]) => void;
  label?: string;
  placeholder?: string;
  multiple?: boolean;
}

interface ISelectWrapperProps extends ISelectComponentProps {
  name: string;
  formMethods?: UseFormReturn<FieldValues, any, undefined>;
  required?: {
    value: boolean;
    message: string;
  };
  labelClasses?: string;
  wrapperClasses?: string;
  rules?: any;
}

const Select: React.FC<ISelectWrapperProps> = (props) => {
  const {
    options,
    formMethods,
    name,
    labelClasses,
    wrapperClasses,
    label,
    required,
    rules,
    value,
    onChange,
    placeholder,
    multiple,
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

      {formMethods ? (
        <>
          <Controller
            control={formMethods.control}
            name={name}
            rules={{
              required,
              ...rules,
            }}
            render={({ field: { value, onChange } }) => (
              <SelectComponent
                {...{ value, onChange, options, name, multiple }}
                placeholder={placeholder ? placeholder : label ?? ""}
              />
            )}
          />
          {formMethods.formState.errors &&
            formMethods.formState.errors?.[name] && (
              <div className="text-red-400 font-bold my-2 text-sm tracking-tighter">
                <p>{formMethods.formState.errors?.[name]?.message as string}</p>
              </div>
            )}
        </>
      ) : (
        <>
          <SelectComponent
            value={value}
            onChange={onChange}
            options={options}
            name={name}
            multiple={multiple}
            placeholder={placeholder ? placeholder : label ?? ""}
          />
        </>
      )}
    </div>
  );
};

export default Select;

//
const SelectComponent: React.FC<ISelectComponentProps> = (props) => {
  const { value, onChange, options, placeholder, label, multiple } = props;

  return (
    <Listbox value={value} onChange={onChange} multiple={multiple}>
      <div className="relative">
        <Listbox.Button className="min-h-[40px] relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <div className="flex truncate text-black flex-wrap items-start">
            {typeof value === "boolean" ? (
              value ? (
                "True"
              ) : (
                "False "
              )
            ) : value ? (
              multiple ? (
                value && (
                  <div className="flex items-center justify-start gap-2">
                    {Object.values(value).map((val: string, index: number) => (
                      <span
                        key={index}
                        className="flex justify-start gap-4 px-2 py-1 bg-primary rounded-full text-white capitalize"
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                )
              ) : (
                <span className="capitalize">{value}</span>
              )
            ) : (
              placeholder ?? label ?? ""
            )}
          </div>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <BsChevronBarUp
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <BsCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
