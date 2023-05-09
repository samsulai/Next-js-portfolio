import React from 'react'
import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"
const Codenovation = () => {
	return (
		<motion.div 
		initial={{opacity : 0}}
		animate={{opacity : 1}}
		transition={{delay : 0.1}}
		className="w-full"
		>
		<h3 className="flex gap-1 font-medium text-xl font-titleFont">Co-Facilitator<span className="text-textGreen tracking-wide">Codenovation</span></h3>
		<p>June-2017 - Present</p>	
		<ul className="mt-6 flex flex-col gap-3">
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Worked together with other passionate developer advocates with an innovative approach to solve social challenges, while
closing the technology talent-gap across Africa, with more focus on children and the girl child.
		</li>
		
		
		</ul>
		</motion.div>
	)
}

export default Codenovation