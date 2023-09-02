"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import PageWrapper from "@/components/@app/PageWrapper";
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  Input,
  Select,
} from "@/components/@resuable";

//
const crumbs = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
  },
  {
    title: "Create",
    url: "/dashboard/projects/create",
  },
];

const CreateProjects = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  //
  const [selected, setSelected] = useState<string>();
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <PageWrapper>
      <Container>
        <Breadcrumbs crumbs={crumbs} />

        <div className="my-10 py-8">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 items-center">
              <Input
                name={"name"}
                label="Project Name"
                register={methods.register}
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
                // formMethods={methods}
                name="select"
                required
                value={selected}
                onChange={(value) => setSelected(value as string)}
              />

              <Checkbox label="label" labelClasses="text-lg" />
            </div>

            <Button
              htmlType="submit"
              size="medium"
              variant="indigo-800"
              className="my-2"
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default CreateProjects;
