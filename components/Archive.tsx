
import ArchiveCard from "./ArchiveCard"
import {useState} from  'react'
import {motion} from 'framer-motion'
const Archive = () => {
	const [showMore, setShowMore] = useState(false)
	return (
		<div className="max-w-contentContainer mx-auto px-4 py-24">
			<div className="w-full flex flex-col items-center">
			<h2 className="text-3xl font-titleFont font-semibold">Other Noteworthy Projects</h2>
			<p className="text-sm font-titleFont text-textGreen ">View the archive</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
			<ArchiveCard 
             title="Cafe One"
             des="co-working space in Nigeria"
             listItem={["ReactJS", "StyledComponents"]}
             
             link="https://cafeone.ng/"
             
			/>
			
			<ArchiveCard 
             title="GraphQL API"
             link="https://github.com/samsulai/Project-Management-System"
             listItem={["ReactJs", "NodeJS", "GraphQL"]}
             des=" GraphQL Api for a project management system"
			/>
		
			
			
			{
                  showMore && (
<>
<motion.div
initial={{opacity : 0}}
whileInView={{opacity : 1}}
transition={{delay : 0.1}}
>
<ArchiveCard 
             title="UllWeb"
             link="https://ullweb.com/"
             listItem={["NodeJs", "Express", "MongoDB"]}
             des="Freelance market place."
			/>
			</motion.div>
			
			
</>
                  	)

			}
			</div>
			<div className="mt-12 flex items-center justify-center">
			{
				showMore ? <button onClick={() => setShowMore(false)} className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
Show Less
</button> : <button onClick={() => setShowMore(true)} className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
Show More
</button>
			}

			</div>
		</div>
	)
} 

export default Archive