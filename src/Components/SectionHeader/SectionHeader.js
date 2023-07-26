function SectionHeader({ number, title, children }) {
	return (
		<>
			<div className="font-bold text-[40px] text-center lg:flex">
				<div className="text-blue">{number}. </div>
				<div className="font-sans">
					&lt;{title} <span className="lg:hidden">&#47;&gt;</span>
				</div>
			</div>
			{children}
			<div className="hidden font-sans font-bold text-[40px] lg:flex justify-end">
				&#47;&gt;
			</div>
		</>
	);
}

export default SectionHeader;
