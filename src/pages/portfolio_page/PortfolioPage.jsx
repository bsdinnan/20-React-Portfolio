import Project from '../../components/project/Project';
import projectsData from '../../../public/projects';

export default function PortfolioPage() {
    return (
        <div className="d-flex flex-column align-items-center container flex fill">
            <p className="text-center p-3 m-2 text-bg-dark shadow-lg col-sm-12 col-lg-10 rounded">
                Here are some projects I have worked on in my bootcamp, as well as any I've created on my own.
            </p>
            <div className="container d-flex flex-wrap align-items-evenly justify-content-evenly">
                {projectsData.map((project) => (
                    <Project key={project.id} projData={project}/>
                ))}
            </div>
        </div>
    )
};