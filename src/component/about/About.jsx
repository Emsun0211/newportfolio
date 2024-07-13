import React, { useContext } from "react";
import profileImage from "../../assets/gbenga2.png";
import { FaAward, FaUsers, FaLaptopCode } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

import "./about.css";
import { ThemeManager } from "../../context/ThemeTypes";

const About = () => {
	const { isDarkMode } = useContext(ThemeManager);
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img
							src={profileImage}
							alt="About-me"
						/>
					</div>
				</div>

				<div className="about__content">
					{/* <div className='about__cards-container'>
						<article className='about__card'>
							<FaLaptopCode className='about__icon' />
							<h5>Industry</h5>
							<small>Knowledge</small>
						</article>

						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>2yr+ Working</small>
						</article>

						<article className='about__card'>
							<FaUsers className='about__icon' />
							<h5>Clients</h5>
							<small>20+ Clients</small>
						</article>

						<article className='about__card'>
							<AiFillFolderOpen className='about__icon' />
							<h5>Projects</h5>
							<small>30+ Completed</small>
						</article>
					</div> */}

					<p
						className="_about_text"
						style={{ color: !isDarkMode && "black" }}
					>
						Hi, I am Gbenga Akinnukawe, a Frontend and Mobile app developer. I
						specialize in building responsive and intuitive web and mobile apps
						using JavaScript frameworks like React, NextJS, NodeJS and React Native. 
						<br />
						My skills
						include:
						<br /> 
						Crafting seamless user interfaces
						<br /> 
						 Developing robust
						functionalities 
						<br /> 
						Utilizing tools and technologies like Node.js,
						Next.js, and Tailwind CSS I have experience working at KSolutions
						and Fatherland Holdings as a developer. 
						<br /> 
						Notable projects include an
						ecommerce platform, chat application, landing page, food delivery
						app, and agro ecommerce, giving me a well-rounded understanding of
						various industries and client needs.
					</p>

					<a
						href="#contact"
						className={
							isDarkMode
								? "btn btn-primary"
								: " btn__light btn-primary btn_light"
						}
					>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
