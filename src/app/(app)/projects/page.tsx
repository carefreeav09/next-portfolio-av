import ProjectsComponent from "./component";

const Projects = async () => {
  //
  const data = await getProjectsData();

  //
  return <ProjectsComponent projects={data} />;
};

export default Projects;

async function getProjectsData() {
  const res = await fetch(process.env.API_URL + "/api/v1/projects", {
    next: {
      revalidate: 1, // in minutes
    },
  });

  const resObject = await res.json();

  return resObject.data;
}
