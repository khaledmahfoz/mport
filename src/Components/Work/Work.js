import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

import projects from "../../data/projects";

import Project from "../Project/Project";

function Work() {
	return (
		<section className="py-10" id="work">
			<Container>
				<SectionHeader number="02" title="Work">
					<div className="py-10 lg:grid lg:grid-cols-3 lg:gap-x-5">
						{projects.map((project) => (
							<Project key={project.id} {...project} />
						))}
					</div>
				</SectionHeader>
			</Container>
		</section>
	);
}

export default Work;
