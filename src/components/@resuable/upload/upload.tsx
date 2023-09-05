import React from "react";
import { Upload } from "..";
import { ImUpload } from "react-icons/im";

interface IUploadProps {
  multiple?: boolean;
}
const UploadWrapper: React.FC<IUploadProps> = (props) => {
  const { multiple } = props;
  return (
    <div>
      <UploadComponent />
    </div>
  );
};

export default UploadWrapper;

const UploadComponent = () => {
  return (
    <div className="border-dotted border-gray-400 border w-full min-h-[100px] h-full flex items-center justify-center gap-4">
      <ImUpload className="text-3xl text-gray-400" />

      <p className="text-gray-400 text-lg">Drag and drop your files here</p>
    </div>
  );
};
