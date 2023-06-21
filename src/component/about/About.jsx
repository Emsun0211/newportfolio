import React from "react";
import profileImage from "../../assets/gbenga2.png";
import { FaAward, FaUsers, FaLaptopCode } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

import "./about.css";

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={profileImage} alt='About-me' />
					</div>
				</div>

				<div className='about__content'>
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

					<p className='_about_text'>
						Hi, I am Gbenga Akinnukawe a Frontend and Mobile app developer. I
						specialize in building responsive and intuitive web and mobile apps
						that leave a lasting impression on users.
						<br />
						My expertise lies in leveraging the power of JavaScript and its
						frameworks, including React and React Native, to deliver
						cutting-edge applications. Whether it's crafting a seamless user
						interface or developing robust functionalities, I bring a wealth of
						knowledge and creativity to the table.
						<br />
						Utilizing the latest tools and technologies such as Node.js,
						Next.js, and Tailwind CSS, I ensure that your applications are not
						only visually appealing but also perform flawlessly across different
						devices and platforms.
						<br />
						One of my notable achievements includes successfully delivering
						diverse projects, including an ecommerce platform, chat application,
						landing page, food delivery app, and agro ecommerce. This diverse
						experience has equipped me with a deep understanding of various
						industries and client requirements, allowing me to adapt and deliver
						tailored solutions.
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
