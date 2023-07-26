import { useState } from "react";

import Container from "../Container/Container";

import Menu from "../../assets/images/icons/menu.svg";
import Close from "../../assets/images/icons/close.svg";
import Twitter from "../../assets/images/icons/social/twitter.svg";
import Github from "../../assets/images/icons/social/github.svg";
import Linkedin from "../../assets/images/icons/social/linkedin.svg";
import NavbarItemsList from "../NavbarItemsList/NavbarItemsList";

function Navbar() {
	const [isNavOpen, changeIsNavOpen] = useState(false);
	function toggleNav() {
		changeIsNavOpen(!isNavOpen);
	}
	return (
		<div
			className="fixed w-full left-0 bottom-0 bg-gray-300 border border-[#ECECEC] transition-[height] h-[50px] z-40"
			style={{
				height: isNavOpen ? "250px" : "",
			}}
		>
			<Container>
				{!isNavOpen ? (
					<div className="flex items-center justify-between">
						<div className="flex items-center h-[50px]">
							<img
								className="mr-7 w-[24px] h-[24px]"
								src={Github}
								alt="github"
							/>
							<img
								className="mr-7 w-[24px] h-[24px]"
								src={Twitter}
								alt="twitter"
							/>
							<img
								className="mr-7 w-[24px] h-[24px]"
								src={Linkedin}
								alt="linkedin"
							/>
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
	);
}

export default Navbar;
