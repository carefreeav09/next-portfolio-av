import React from "react";
import { Upload } from "..";

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
    <div className="border-dotted w-full min-h-[400px] h-full flex items-center justify-center">
      Upload a file
    </div>
  );
};
