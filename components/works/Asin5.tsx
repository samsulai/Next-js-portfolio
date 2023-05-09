import React from 'react'
import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"
const Asin = () => {
	return (
		<motion.div 
		initial={{opacity : 0}}
		animate={{opacity : 1}}
		transition={{delay : 0.1}}
		className="w-full"
		>
		<h3 className="flex gap-1 font-medium text-xl font-titleFont">Software Engineer<span className="text-textGreen tracking-wide">@Asin5 Labs</span></h3>
		<p>2023-Present</p>	
		<ul className="mt-6 flex flex-col gap-3">
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Designed and developed a set of REST API endpoints for an e-commerce system using Node.js,Express & Mongodb
enabling secure and efficient communication between the web application and the backend database.
		</li>
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Integrated the payment gateway Paystack into the e-commerce system, allowing customers to easily and securely make
payments for products and services, resulting in 3% increase in online sales.
		</li>
		<li className="text-base flex gap-2 text-textDark">
		<span className="text-textGreen mt-1"><TiArrowForward/></span>
		Provided ongoing support and maintenance for the REST API endpoints and Paystack integration, including bug fixes,
updates, and security enhancements, resulting in high user satisfaction and retention.
		</li>
		</ul>
		</motion.div>
	)
}

export default Asin