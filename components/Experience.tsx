import React, {useState} from 'react'
import SectionTitle from "./SectionTitle"
import Sytycc from "./works/Sytycc"
import Bitnine from "./works/Bitnine"
import Codenovation from "./works/codenovation"
import Asin5 from "./works/Asin5"
const Experience = () => {
	const [sytycc, setSytycc] = useState(true)
	const [bitnine, setBitnine] = useState(false)
	const [codenovation, setCodenovation] = useState(false)
	const [asin5, setAsin5] = useState(false)
	const handleSytycc = () => {
		setSytycc(true)
		setBitnine(false)
		setCodenovation(false)
		setAsin5(false)
}
const handleBitnine = () => {
	setSytycc(false)
		setBitnine(true)
		setCodenovation(false)
		setAsin5(false)
}
const handleCodenovation = () => {
	setSytycc(false)
		setBitnine(false)
		setCodenovation(true)
		setAsin5(false)
}
const handleAsin5 = () => {
	setSytycc(false)
		setBitnine(false)
		setCodenovation(false)
		setAsin5(true)
}
	return (
		<section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
			<SectionTitle title="Where i have Worked" titleNo="02"/>
			<div className="w-full mt-10 flex flex-col md:flex-row gap-16">
             <ul className="md:w-32 flex flex-col">
             <li onClick={handleSytycc} 
             className={`${sytycc ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}>
             Sytycc
             </li>
             <li onClick={handleBitnine} className={`${bitnine ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Bitnine</li>
             
             <li onClick={handleCodenovation} className={`${codenovation ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Codenovation</li>
             <li onClick={handleAsin5} className={`${asin5 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Asin5 Labs</li>
             </ul>
             {sytycc && <Sytycc />}
             {bitnine && <Bitnine />}
             {codenovation && <Codenovation />}
             {asin5 && <Asin5 />}
			</div>
		</section>
	)
}

export default Experience