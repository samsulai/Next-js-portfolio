import React from 'react'
import SectionTitle from "./SectionTitle"
import Image from "next/image"
import Morph from "../public/assets/images/morph.png"
import Apple from "../public/assets/images/Apple.png"
import Dashboard from "../public/assets/images/Dashboard.png"
import ECOMM from "../public/assets/images/Dashboard.png"

import Gym from "../public/assets/images/gym.png"
import {RxOpenInNewWindow} from "react-icons/rx"
import {TbBrandGithub} from "react-icons/tb"


const Projects = () => {
	return (
		<section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
		<SectionTitle title="Some Things I have Built" titleNo="03"/>

			{/*Project one*/}
			<div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
			<div className="flex flex-col xl:flex-row gap-6">
<a href="#" className="w-full xl:w-1/2 h-auto relative group">
<div>
<Image src={Morph} alt="project1" className="h-full w-full object-contain"/>
</div>
</a>
<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
<p className="font-titleFont text-textGreen text-sm trackin-wide">Featured Project</p>

<h3 className="text-2xl font-bold">MorphDb 1.0</h3>
<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">A Database Migration Application built with ReactJs, Tailwindcss.Consuming a Java endpoint.</p>
			<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
			<li>ReactJs</li>
			<li>TypeScript</li>
			<li>Tailwindcss</li>
			<li>Java</li>
			</ul>
			<div className="text-2xl flex gap-4">
			<a className="hover:text-textGreen duration-300" target="_blank">
			<TbBrandGithub/>
			</a>
			<a className="hover:text-textGreen duration-300" target="_blank"><RxOpenInNewWindow/></a>
			</div>
			</div>
			</div>
			{/*Project two*/}
<div className="flex flex-col xl:flex-row-reverse gap-6">
<a href="#" className="w-full xl:w-1/2 h-auto relative group">
<div>
<Image src={Apple} alt="project1" className="h-full w-full object-contain"/>
</div>
</a>
<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
<p className="font-titleFont text-textGreen text-sm trackin-wide">Featured Project</p>

<h3 className="text-2xl font-bold">Apple Redesign</h3>
<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
An E-commerce application for selling Apple Products.
</p>
			<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
			<li>NextJs</li>
			<li>TypeScript</li>
			<li>Tailwindcss</li>
			<li>Stripe</li>
			</ul>
			<div className="text-2xl flex gap-4">
			<a href="https://github.com/samsulai/Apple-Redesign" className="hover:text-textGreen duration-300" target="_blank">
			<TbBrandGithub/>
			</a>
			<a href="http://apple-redesign-mu.vercel.app/" className="hover:text-textGreen duration-300" target="_blank"><RxOpenInNewWindow/></a>
			</div>
			</div>
			</div>
			<div className="flex flex-col xl:flex-row gap-6">
<a href="#" className="w-full xl:w-1/2 h-auto relative group">
<div>
<Image src={Gym} alt="project1" className="h-full w-full object-contain"/>
</div>
</a>
<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
<p className="font-titleFont text-textGreen text-sm trackin-wide">Featured Project</p>

<h3 className="text-2xl font-bold">Evogym</h3>
<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ">
Responsive Modern website with adaptable UI components For a Gym company. Responsive in all Devices.
</p>
			<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
			<li>NextJs</li>
			<li>TypeScript</li>
			<li>Tailwindcss</li>
			<li>Stripe</li>
			</ul>
			<div className="text-2xl flex gap-4">
			<a href="https://github.com/samsulai/React-Tailwind-LandingPage" className="hover:text-textGreen duration-300" target="_blank">
			<TbBrandGithub/>
			</a>
			<a href="https://vite-tailwind-landing-page.vercel.app/" className="hover:text-textGreen duration-300" target="_blank"><RxOpenInNewWindow/></a>
			</div>
			</div>
			</div>

			<div className="flex flex-col xl:flex-row gap-6">
<a href="#" className="w-full xl:w-1/2 h-auto relative group">
<div>
<Image src={ECOMM} alt="project1" className="h-full w-full object-contain"/>
</div>
</a>
<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
<p className="font-titleFont text-textGreen text-sm trackin-wide">Featured Project</p>

<h3 className="text-2xl font-bold">Ecomm Vision</h3>
<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">Dashboard built with ReactJs, MUI, Nivio Charts consuming an Express.js Backend</p>
			<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
			<li>ReactJs</li>
			<li>Express</li>
			<li>Node.js</li>
			<li>MongoDB</li>
			</ul>
			<div className="text-2xl flex gap-4">
			<a className="hover:text-textGreen duration-300" target="_blank">
			<TbBrandGithub/>
			</a>
			<a className="hover:text-textGreen duration-300" target="_blank"><RxOpenInNewWindow/></a>
			</div>
			</div>
			</div>
			</div>
			
			
			
			
			

			
		</section>
	)
}

export default Projects