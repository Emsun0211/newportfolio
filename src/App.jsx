import React, { useContext } from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
// import Services from './component/services/Services'
import Portfolio from "./component/portfolio/Portfolio";
import Testimonial from "./component/testimonial/Testimonial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import { ThemeState } from "./context/ThemeState";

import { ThemeManager } from "./context/ThemeTypes";
import Theme from "./component/theme/Theme";
import Layout from "./component/layout/Layout";

const App = () => {
	return (
		<ThemeState>
			<Layout>
				<Theme />
				<Header />
				<Nav />
				<About />
				<Experience />
				<Portfolio />
				{/* <Testimonial /> */}
				<Contact />
				<Footer />
			</Layout>
		</ThemeState>
	);
};

export default App;
