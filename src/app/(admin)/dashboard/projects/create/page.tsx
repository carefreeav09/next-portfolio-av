"use client";

import PageWrapper from "@/components/@app/PageWrapper";
import { Breadcrumbs, Container } from "@/components/@resuable";
import Input from "@/components/@resuable/input";
import React from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <PageWrapper>
      <Container>
        <Breadcrumbs crumbs={crumbs} />

        <div className="my-10 py-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-8">
              <Input
                name={"name"}
                label="Project Name"
                register={register}
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
                errors={errors}
              />

              <Input
                name={"name"}
                label="Project Name"
                register={register}
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
                errors={errors}
              />

              <input type="submit" />
            </div>
          </form>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default CreateProjects;
