import classNames from "classnames";
import React, { useRef, useState } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";

//
import { ImUpload } from "react-icons/im";
import { TiDeleteOutline } from "react-icons/ti";

interface IUploadProps {
  name: string;
  label: string;
  formMethods?: UseFormReturn<FieldValues, any, undefined>;
  required?: {
    value: boolean;
    message: string;
  };
  multiple?: boolean;
  wrapperClasses?: string;
  labelClasses?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const UploadWrapper: React.FC<IUploadProps> = (props) => {
  const { label, wrapperClasses, labelClasses, name } = props;
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
      <UploadComponent {...props} />
    </div>
  );
};

export default UploadWrapper;

const UploadComponent: React.FC<IUploadProps> = (props) => {
  const { label, name, formMethods, required, onChange } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | File[] | null>(null);

  //
  const handleRemoveIndividualItem = (index: number) => {
    if (file instanceof Array) {
      setFile(file.filter((f, fIndex) => fIndex !== index));
    }
  };

  return (
    <React.Fragment>
      <div className="border-dotted border-gray-400 border w-full min-h-[100px] h-full flex items-center justify-center gap-4 relative">
        <ImUpload className="text-3xl text-gray-400" />

        <p className="text-gray-400 text-lg">Drag and drop your files here</p>

        <input
          type="file"
          ref={inputRef}
          className="absolute h-[inherit] w-full opacity-0"
          onChange={(e) => {
            if (e.target.files) {
              const files = e.target.files;
              const fileArray = Array.from(files);
              setFile(fileArray);
            }
          }}
          multiple={props.multiple}
          {...(formMethods &&
            formMethods.register && {
              ...formMethods.register?.(props.name, {
                required,
              }),
            })}
          // if register doesn't exist
          {...(onChange && { onChange: onChange })}
        />
      </div>

      {formMethods &&
        formMethods.formState.errors &&
        formMethods.formState.errors?.[name] && (
          <div className="text-red-400 font-bold my-2 text-sm tracking-tighter">
            <p>{formMethods.formState.errors?.[name]?.message as string}</p>
          </div>
        )}

      {file &&
        file instanceof Array &&
        file.map((f, fIndex) => (
          <FilePreview
            file={f}
            onClear={() => handleRemoveIndividualItem(fIndex)}
            key={fIndex}
            index={fIndex}
          />
        ))}
    </React.Fragment>
  );
};

const FilePreview: React.FC<{
  file: File;
  onClear: (index: number) => void;
  index: number;
}> = ({ file, onClear, index }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <p className="text-gray-400">{file instanceof File && file.name}</p>
      <button className="text-red-400 text-2xl" onClick={() => onClear(index)}>
        <TiDeleteOutline />
      </button>
    </div>
  );
};
