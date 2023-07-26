import React from "react";
import "./TicTac.css";
import O from "../../assets/images/header/o.svg";
import X from "../../assets/images/header/x.svg";
import Block from "../../assets/images/header/block.svg";
function TicTac() {
	return (
		<div className="relative m-10 h-[300px]">
			<div className="span-container">
				<span className="one">
					<img className="w-[100px] h-[100px]" src={Block} />
				</span>
				<span className="two">
					<img className="w-[100px] h-[100px]" src={O} />
				</span>
				<span className="three">
					<img className="w-[100px] h-[100px]" src={Block} />
				</span>
				<span className="four">
					<img className="w-[100px] h-[100px]" src={X} />
				</span>
			</div>
		</div>
	);
}

export default TicTac;
