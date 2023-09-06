import React from "react";
import { useFormContext } from "react-hook-form";

//
import { Input, Select, Checkbox, Button } from "../@resuable";
import UploadWrapper from "../@resuable/upload/upload";

const ProjectsForm = () => {
  const methods = useFormContext();
  return (
    <>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 items-center">
        <Input
          name={"name"}
          label="Project Name"
          register={methods.register}
          placeholder="Project Name"
          rules={{
            maxLength: {
              value: 20,
              message: "Max length is 20",
            },
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
          }}
          required
          errors={methods.formState.errors}
        />

        <Select
          label={"Select"}
          placeholder={"Select"}
          options={[
            {
              label: "True",
              value: true,
            },
            {
              label: "False",
              value: false,
            },
          ]}
          formMethods={methods}
          name="select"
          required={{
            value: true,
            message: "Field is required",
          }}
        />

        <Checkbox
          label="label"
          name="checkbox"
          labelClasses="text-lg"
          formMethods={methods}
          required={{
            value: true,
            message: "Field is required",
          }}
        />

        <UploadWrapper
          multiple
          label="Uplaod"
          name="thumbnail"
          formMethods={methods}
          required={{
            value: true,
            message: "Field is required",
          }}
        />
      </div>
    </>
  );
};

export default ProjectsForm;
