import React, { useContext, useState } from "react";
import portfolio1 from "../../assets/accomodationapp.png";
import portfolio2 from "../../assets/ibeeplandingpage.png";
import portfolio3 from "../../assets/techtimelandingoage.png";
import portfolio4 from "../../assets/chatapplandingpage.png";
import portfolio5 from "../../assets/ecommerce.png";
import portfolio6 from "../../assets/namesearch.png";
import portfolio7 from "../../assets/deliveryapp.jpg";
import portfolio8 from "../../assets/musicapp.jpg";
import portfolio9 from "../../assets/weatherapp.jpg";

import "./portfolio.css";
import { ThemeManager } from "../../context/ThemeTypes";

const data = [
	{
		id: 1,
		image: portfolio1,
		title: "Jewel Website",
		details:
			"Hotel accomodation booking app. Built with ReactJS, TailwindCSS & AOC Library",
		github: "https://github.com/Emsun0211/accomodation.git",
		demo: "https://accomodation-kohl.vercel.app/",
		category: "web",
	},
	{
		id: 2,
		image: portfolio2,
		title: "ibeep Website",
		details:
			"Landing Page for ibeep training school Web Application built with ReactJS.",
		github: "https://github.com/atere21/ibeep-project.git",
		demo: "http://ibeep-project.vercel.app",
		category: "web",
	},
	{
		id: 3,
		image: portfolio3,
		title: "TechTime Website",
		github: "https://github.com/Emsun0211/talentplus.git",
		details: "Landing Page Web Application built with ReactJS.",
		demo: "https://talentplus.vercel.app/",
		category: "web",
	},
	{
		id: 4,
		image: portfolio4,
		title: "Chat App",
		details: "A chat App  built with ReactJS, Nodejs and socket.io.",
		github: "https://github.com/Emsun0211/textchatclient.git",
		demo: "https://textchat-lilac.vercel.app/",
		category: "web",
	},
	{
		id: 5,
		image: portfolio5,
		title: "Sage Shop",
		details: "An Ecommerce website Landing Page Bank  built with ReactJS.",
		github: "https://github.com/Emsun0211/task-5.git",
		demo: "https://task-5-sage.vercel.app/",
		category: "web",
	},
	{
		id: 6,
		image: portfolio6,
		title: "Name Search",
		details:
			"A search and filter application built with HTML, CSS and JavaScript",
		github: "https://github.com/Emsun0211/TiideLabMiniproject.git",
		demo: "https://emsunminiproject.netlify.app/",
		category: "web",
	},

	{
		id: 7,
		image: portfolio7,
		title: "Food delivery app",
		details: "A food delivery app built with React Native and Sanity.io",
		github: "https://github.com/Emsun0211/delivero-client.git",
		demo: "https://emsunminiproject.netlify.app/",
		category: "mobile",
	},
	{
		id: 8,
		image: portfolio8,
		title: "Music App",
		details: "A music player mobile app built with React Native",
		github: "https://github.com/Emsun0211/musicapp.git",
		demo: "https://emsunminiproject.netlify.app/",
		category: "mobile",
	},
	{
		id: 9,
		image: portfolio9,
		title: "Weather",
		details: "A Weather App built with React Native and open-weather Api",
		github: "https://github.com/Emsun0211/weatherapp.git",
		demo: "https://emsunminiproject.netlify.app/",
		category: "mobile",
	},
];
const web = data.filter((data) => data.category === "web");
const mobile = data.filter((data) => data.category === "mobile");

const Portfolio = () => {
	const [isweb, setisWeb] = useState(true);
	const { isDarkMode } = useContext(ThemeManager);
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='btn-container '>
				<button
					className={isweb ? "active" : ""}
					onClick={() => setisWeb(true)}>
					Web
				</button>
				<button
					className={!isweb ? "active" : ""}
					onClick={() => setisWeb(false)}>
					Mobile
				</button>
			</div>

			{isweb ? (
				<div className='container portfolio__container'>
					{web.map(({ id, image, title, details, github, demo }) => {
						return (
							<article key={id} className='portfolio__item'>
								<div className='portfolio_item-image'>
									<img src={image} alt='first portfolio' />
								</div>
								<h3 className={!isDarkMode && "portfolio__item__light"}>
									{title}
								</h3>
								<h6>{details}</h6>
								<div className='portfolio__item-cta'>
									<a href={github} className='btn' target='blank'>
										Github
									</a>
									<a
										href={demo}
										className='btn btn-primary'
										target='_blank'
										rel='noreferrer'>
										Live Demo
									</a>
								</div>
							</article>
						);
					})}
				</div>
			) : (
				<div className='container portfolio__container'>
					{mobile.map(({ id, image, title, details, github, demo }) => {
						return (
							<article key={id} className='portfolio__item'>
								<div className='portfolio_item-image'>
									<img src={image} alt='first portfolio' />
								</div>
								<h3 style={{}}>{title}</h3>
								<h6>{details}</h6>
								<div className='portfolio__item-cta'>
									<a href={github} className='btn' target='blank'>
										Github
									</a>
									{/* <a
										href={demo}
										className='btn btn-primary'
										target='_blank'
										rel='noreferrer'>
										Live Demo
									</a> */}
								</div>
							</article>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Portfolio;
