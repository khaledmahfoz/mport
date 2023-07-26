import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

import projects from "../../data/projects";

import Project from "../Project/Project";

function Work() {
	return (
		<section className="py-10">
			<Container>
				<SectionHeader number="02" title="Work" />
				<div className="py-10">
					{projects.map((project) => (
						<Project key={project.id} {...project} />
					))}
				</div>
			</Container>
		</section>
	);
}

export default Work;
