import React, { useRef, useState } from "react";
import { ImUpload } from "react-icons/im";
import { TiDeleteOutline } from "react-icons/ti";

interface IUploadProps {
  multiple?: boolean;
}
const UploadWrapper: React.FC<IUploadProps> = (props) => {
  return (
    <div>
      <UploadComponent {...props} />
    </div>
  );
};

export default UploadWrapper;

const UploadComponent: React.FC<IUploadProps> = (props) => {
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
        />
      </div>

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
