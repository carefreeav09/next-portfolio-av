import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren } from "react";

//
type ButtonType = "button" | "submit";
type ButtonSize = "small" | "medium" | "large";
type ButtonVariant =
  | "indigo-800"
  | "secondary"
  | "tertiary"
  | "danger"
  | "link";

interface IButtonProps {
  size?: ButtonSize;
  htmlType?: ButtonType;
  variant?: ButtonVariant;
  //
  disabled?: boolean;
  block?: boolean;
  //
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

/**
 *
 */
export default function Button(props: PropsWithChildren<IButtonProps>) {
  const size = props.size ?? "medium";
  const variant = props.variant ?? "primary";
  const htmlType = props.htmlType ?? "button";

  //
  return (
    <button
      className={classNames(
        "flex flex-shrink-0 items-center justify-center transition duration-300",
        props.block ? "w-full" : "max-w-fit",
        {
          "gap-4 border border-indigo-800 bg-indigo-800 px-5 text-gray-100 hover:border-indigo-800-dark hover:bg-indigo-800-dark":
            variant === "indigo-800",
          "gap-4 border border-gray-700 bg-gray-700 px-5 text-gray-100 hover:border-gray-600 hover:bg-gray-600":
            variant === "secondary",
          "gap-4 border border-red-600 bg-red-600 px-5 text-gray-100 hover:border-red-500 hover:bg-red-500":
            variant === "danger",
          "gap-4 border border-indigo-800 bg-gray-50 px-5 text-indigo-800 hover:bg-white hover:text-indigo-800-dark":
            variant === "tertiary",
          "gap-1 uppercase underline": variant === "link",
          "cursor-not-allowed": props.disabled,
        },
        {
          "h-9": size === "small",
          "h-11": size === "medium",
          "h-14": size === "large",
        },
        props.className
      )}
      disabled={props.disabled}
      onClick={props.onClick}
      type={htmlType}
    >
      {props.children}
    </button>
  );
}
