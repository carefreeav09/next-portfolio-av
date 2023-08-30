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
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Only alphabets are allowed",
                  },
                }}
                required
                errors={errors}
              />

              <div>
                <input
                  {...register("exampleRequired", { required: true })}
                  className="h-10 w-full"
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>

              <input type="submit" />
            </div>
          </form>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default CreateProjects;
