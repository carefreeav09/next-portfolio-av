"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import PageWrapper from "@/components/@app/PageWrapper";
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  Input,
  Select,
} from "@/components/@resuable";
import UploadWrapper from "@/components/@resuable/upload/upload";
import ProjectsForm from "@/components/@forms/projects.form";

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
  const methods = useForm({
    defaultValues: {
      technologies: ["asdsad"],
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <PageWrapper>
      <Container>
        <Breadcrumbs crumbs={crumbs} />

        <div className="my-10 py-8">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <ProjectsForm />

              <Button
                htmlType="submit"
                size="medium"
                variant="primary"
                className="my-2"
              >
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default CreateProjects;
