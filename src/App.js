import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Skills from "./Components/Skills/Skills";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";

function App() {
	return (
		<div className="pb-5">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
