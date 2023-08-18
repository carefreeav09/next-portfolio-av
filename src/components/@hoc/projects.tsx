import React from "react";

const ProjectsWrapper = async ({ children }: { children: any }) => {
  //
  const data = await getProjectsData();

  //
  return React.cloneElement(children, {
    projects: data,
  });
};

export default ProjectsWrapper;

async function getProjectsData() {
  const res = await fetch(process.env.API_URL + "/api/v1/projects", {
    next: {
      revalidate: 1, // in minutes
    },
  });

  const resObject = await res.json();
  return resObject.data;
}

// this is useless for now.
