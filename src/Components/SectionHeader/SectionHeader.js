function SectionHeader({ number, title }) {
	return (
		<div className="font-bold text-[40px] text-center">
			<div className="text-blue">{number}. </div>
			<div className="font-sans">
				&lt;{title} <span className="md:hidden">&#47;&gt;</span>
			</div>
		</div>
	);
}

export default SectionHeader;
