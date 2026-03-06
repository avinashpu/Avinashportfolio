import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work and case studies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
