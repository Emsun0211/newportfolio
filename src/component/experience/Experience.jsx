import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";

const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>
			<div className='container experience__container'>
				{/* FRONTEND */}
				<div className='experience__frontend'>
					<h3>Technology Stack</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>HTML</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>CSS</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Bootstrap</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>TailwindCSS</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>JavaScript</h4>
							</div>
						</article>

						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>React</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>React Native</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>NextJS</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Git & Github</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Figma</h4>
							</div>
						</article>
					</div>
				</div>

				{/* UI DESIGN & GRAPHICS */}
				<div className='experience__ui'>
					<h3>Soft Skills</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Teamwork</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Problem Solving</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Creativity</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Time Management</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Self-Learner</h4>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Flexibility</h4>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Experience;
