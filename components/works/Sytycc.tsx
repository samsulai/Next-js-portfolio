import React from 'react'
import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"
const Sytycc = () => {
	return (
		<motion.div 
		initial={{opacity : 0}}
		animate={{opacity : 1}}
		transition={{delay : 0.1}}
		className="w-full"
		>
		<h3 className="flex gap-1 font-medium text-xl font-titleFont">Software Engineer<span className="text-textGreen tracking-wide">@Sytycc</span></h3>
		<p>2023-Present</p>	
		<ul className="mt-6 flex flex-col gap-3">
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Write modern, performant, maintainable code for a diverse array of client and internal projects
		</li>
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Collaborated with a team of 12+ developers in a software development project from conception to deployment phase.
Incorporating the Software Development Life Cycle principles: Agile Scrum methodologies and team collaboration
techniques were implemented towards the success of the project.
		</li>
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Developed and launched a responsive, mobile-first web application using ReactJS and TailwindCSS, resulting in a 30%
increase in user engagement and a 20% reduction in page load times.
		</li>
		</ul>
		</motion.div>
	)
}

export default Sytycc