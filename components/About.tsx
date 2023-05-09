import React from 'react'
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import {AiFillThunderbolt} from "react-icons/ai"
import ProfileImg from "../public/assets/images/ProfileImg.jpg"
const About = () => {
	return (
		<section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
			<SectionTitle title="About Me" titleNo="01"/>
			<div className="flex flex-col lgl:flex-row gap-16">
			<div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
              <p>As a software engineer, I'm passionate about developing web and mobile platforms and creating engaging user experiences.
I'm adept at understanding and delivering on clients' needs and requirements.
I'm experienced in using a range of technologies, including{" "} <span className="text-textGreen">CSS, JavaScript, TypeScript, NodeJS(Express), ReactJS and
NextJS,</span> to build robust and scalable applications. Whether it's working on a small project or a large-scale system, I'm
committed to delivering high-quality code that meets business objectives.</p>
<p>

My approach to software engineering is collaborative and solutions-oriented. I enjoy working with cross-functional teams to
understand{" "} <span className="text-textGreen">complex problems and find innovative solutions that meet business needs.</span> If you're looking for a dedicated and
skilled software engineer to help take your projects to the next level, let's connect!</p>
<p>Here are a few technologies i've been working with recently:</p>
<ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>JavaScript(ES6+)</li>
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>NextJs</li>
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>ReactJS</li>
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>NodeJS</li>
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>TypeScript</li>
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>Express</li>
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>MongoDb</li>
<li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>TailwindCSS
</li>
</ul>
			</div>
			<div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
          <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
<Image className="rounded-lg h-full object-cover" src={ProfileImg} alt="ProfileImg"
 />
<div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
</div> 
</div>
</div>
<div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
          </div>
</div>
</div>
</section>
	)
}

export default About