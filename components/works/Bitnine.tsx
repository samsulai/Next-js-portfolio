import React from 'react'
import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"
const Bitnine = () => {
	return (
		<motion.div 
		initial={{opacity : 0}}
		animate={{opacity : 1}}
		transition={{delay : 0.1}}
		className="w-full"
		>
		<h3 className="flex gap-1 font-medium text-xl font-titleFont">Open Source Contributor<span className="text-textGreen tracking-wide">Bitnine</span></h3>
		<p>Aug-2022 - Dec-2022</p>	
		<ul className="mt-6 flex flex-col gap-3">
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Technical research on graph visualization of data.
		</li>
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Studied the mathematical concept of Graph theory, G(V,E) for proper understanding of the project.
		</li>
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Researched and made contribution to the Apache age-viewer project(Apache AGE Viewer is graph visualization tool, for
Apache), a sub-project of the Apache AGE project.
		</li>
		</ul>
		</motion.div>
	)
}

export default Bitnine