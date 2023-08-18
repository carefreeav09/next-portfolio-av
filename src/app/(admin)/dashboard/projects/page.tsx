import React from "react";
import ProjectsListComponent from "./component";

const page = async () => {
  const data = await getProjectsData();

  return <ProjectsListComponent projects={data} />;
};

export default page;

async function getProjectsData() {
  const res = await fetch(process.env.API_URL + "/api/v1/projects", {
    next: {
      revalidate: 1, // in minutes
    },
  });

  const resObject = await res.json();
  return resObject.data;
}

// this component is redundant to the one at the app/ directory. fix it .
