"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import PageWrapper from "@/components/@app/PageWrapper";
import { Breadcrumbs, Button, Container } from "@/components/@resuable";
import ProjectsForm from "@/components/@forms/projects.form";

import useProjectsApi from "@/api/projects.api";

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
  const methods = useForm({});

  const { createProject } = useProjectsApi();
  const onSubmit = async (data: any) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if ((key === "thumbnail" || key === "images") && value) {
        const fileArray = Array.from<File>(value as FileList);
        fileArray.forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, JSON.stringify(value));
      }
    });

    const response = await createProject(formData);
  };

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
