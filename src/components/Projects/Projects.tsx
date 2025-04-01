import AddUpFast from "./addupfast";
import Project2 from "./project-2";
import Project3 from "./project-3";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-transparent">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AddUpFast />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </section>
  );
};

export default Projects;
