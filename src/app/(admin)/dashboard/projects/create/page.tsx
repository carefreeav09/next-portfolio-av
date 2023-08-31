"use client";

import PageWrapper from "@/components/@app/PageWrapper";
import { Breadcrumbs, Button, Container } from "@/components/@resuable";
import Input from "@/components/@resuable/input";
import Select from "@/components/@resuable/select";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import { BsChevronBarUp, BsCheck } from "react-icons/bs";

//
const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

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

  //
  const [selected, setSelected] = useState(people[0]);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <PageWrapper>
      <Container>
        <Breadcrumbs crumbs={crumbs} />

        <div className="my-10 py-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-8 items-center">
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

              {/* <Select
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
                register={register}
                name="select"
              /> */}
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
