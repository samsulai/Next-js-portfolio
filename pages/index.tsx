import Image from 'next/image'
import Head from 'next/head'
import NavBar from "../components/NavBar"
import LeftSide from "../components/LeftSide"
import Middle from "../components/Middle"
import RightSide from "../components/RightSide"
import Banner from "../components/Banner"
import About from "../components/About"
import Experience from "../components/Experience"
import {motion} from "framer-motion"
import Projects from "../components/Projects"
import Archive from "../components/Archive"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"
export default function Home() {
  return (
<>
<Head>
        <title>SammyCodes!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
     <NavBar />
     <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between ">
<motion.div 
initial={{opacity : 0}}
animate={{opacity : 1}}
transition={{delay : 1.5}}
className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
<LeftSide/>
</motion.div>
<div className="h-[88vh] w-full mx-auto p-4">
<Banner/>
{/*About*/}
<About />
{/*Experience*/}
<Experience />
{/*Projects*/}
<Projects/>
{/*Archive */}
<Archive />
{/*Contact*/}
<Contacts/>
{/*Footer*/}
<Footer/>
</div>
<motion.div initial={{opacity : 0}}
animate={{opacity : 1}}
transition={{delay : 1.5}}
className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"><RightSide/></motion.div>
     </div>
    </main>
    </>
  )
}
