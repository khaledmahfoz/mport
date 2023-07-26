import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

import Author from "../../assets/images/about/author.png";

function About() {
	return (
		<section className="py-10">
			<Container>
				<SectionHeader number="01" title="About" />
				<div className="my-10">
					<img className="w-full" src={Author} alt="author" />
				</div>
				<div className="text-[20px] text-dark">
					Innovative Front End Developer with 5 years experience building and
					maintaining responsive websites in the recruiting industry. Proficient
					in HTML, CSS, jQuery, JavaScript and Angualr; plus modern libraries
					and frameworks. Passionate about usability and possess working
					knowledge of Adobe Photoshop & Sketch.
				</div>
			</Container>
		</section>
	);
}

export default About;
