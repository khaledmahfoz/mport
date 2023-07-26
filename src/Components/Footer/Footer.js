import { useState } from "react";

import Container from "../Container/Container";

import Menu from "../../assets/images/icons/menu.svg";
import Close from "../../assets/images/icons/close.svg";
import Github from "../../assets/images/icons/social/github.svg";
import Linkedin from "../../assets/images/icons/social/linkedin.svg";
import NavbarItemsList from "../NavbarItemsList/NavbarItemsList";

function Footer() {
	const [isNavOpen, changeIsNavOpen] = useState(false);
	function toggleNav() {
		changeIsNavOpen(!isNavOpen);
	}
	return (
		<>
			<div
				className="fixed w-full left-0 bottom-[40px] bg-gray-300 border border-[#ECECEC] transition-[height] h-[50px] z-40 lg:hidden"
				style={{
					height: isNavOpen ? "250px" : "",
				}}
			>
				<Container>
					{!isNavOpen ? (
						<div className="flex items-center justify-between">
							<div className="flex items-center h-[50px]">
								<a href="https://github.com/mohamed23231">
									<img
										className="mr-7 w-[24px] h-[24px]"
										src={Github}
										alt="github"
									/>
								</a>
								<a href="https://www.linkedin.com/in/mmoamen1998/">
									<img
										className="mr-7 w-[24px] h-[24px]"
										src={Linkedin}
										alt="linkedin"
									/>
								</a>
							</div>
							<button onClick={toggleNav}>
								<img src={Menu} alt="menu" />
							</button>
						</div>
					) : (
						<div className="py-5">
							<button className="ml-auto block" onClick={toggleNav}>
								<img className="w-[22px] h-[22px]" src={Close} alt="close" />
							</button>
							<NavbarItemsList />
						</div>
					)}
				</Container>
			</div>
			<div className="fixed lg:static w-full left-0 bottom-0 bg-blue z-40 py-2.5">
				<div className="text-white text-center">
					Made with &#10084;&#65039; By Mohamed Moamen
				</div>
			</div>
		</>
	);
}

export default Footer;
