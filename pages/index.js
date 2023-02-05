import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import profile_pic from '../public/profile_pic.png';
import HTML from '../public/HTML.png';
import Data from '../public/Data.png';
import Modem from '../public/Modem.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import{useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Armon Lee Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900">
        <section className="min-h-screen lg:min-h-screen">
          <nav className="pb-10 pt-5 flex justify-between">
            <h1 className="text-xl">My Portfolio</h1>
            <ul className="flex gap-2">
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"  href="#">Resume</a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="curser-pointer text-xl"/>
              </li>
            </ul>
          </nav>
          <div className="text-center p-7">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden md:h-70 md:w-70">
              <Image src={profile_pic} layout="fill" objectFit="cover"/>
            </div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium md=6xl">Armon J. Lee</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Computer Science Major</h3>
            <div className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto">
              <p className="mb-5">
                Computer science has always been a source of inspiration and growth for me, as it offers endless possibilities for creativity and learning. Moreover, I have a deep appreciation for the process of acquiring new skills and continuously improving my knowledge and expertise.
              </p>
              <p>
                What I find particularly rewarding about computer science is the opportunity to work with others to tackle real-world problems and create meaningful solutions. The ability to contribute to the advancement of technology and make a positive impact on society is what drives my passion for this major.
              </p>
            </div>
          </div>
        </section>
        <hr id="experience" className="mx-auto rounded bg-gray-200 border-0 mb-5 h-px md: w-4/5"/>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I'm a Cal State Northridge undergraduate student with a strong background in computer science and a passion for technology, I'm knowledgeable in a range of concepts pertaining to the field. Being well-versed in modern front-end development practices, data sorting and analysis, and skills in IT.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={HTML} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Software Development</h3>
              <p className="py-2">
                I have a strong background in HTML, CSS, JavaScript, and 
                various front-end frameworks and libraries, but overall
                I love making functional user-friendly programs.
              </p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1">Javascript, HTML, CSS</p>
              <p className="text-gray-800 py-1">React, Next.js</p>
              <p className="text-gray-800 py-1">Tailwind</p>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10">
              <div className="mx-auto bg-gray-600 rounded-full w-100px h-100px">
                <Image className="mx-auto pt-2" src={Data} width={80} height={80}/>
              </div>
              
              <h3 className="text-lg font-medium pt-8 pb-2">Databases</h3>
              <p className="py-2">
                I have extensive knowledge in Object-Oriented Programming (OOP) 
                languages and a solid foundation in data structures and algorithms. 
                In addition, I'm familiar with data analysis concepts and have 
                practical experience working with SQL databases.
              </p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1">Python, Java, C++</p>
              <p className="text-gray-800 py-1">SQL</p>
              <p className="text-gray-800 py-1">Git/Github</p>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10">
              <div className="mx-auto rounded-full w-100px h-100px overflow-hidden">
                <Image className="mx-auto" src={Modem} width={120} height={120}/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Information Technology</h3>
              <p className="py-2">
                I like to bring focus to the hardware and network side of 
                computer science. Trying various new projects like to
                server hosting/maintenance, VPNs, creating access points,
                and more!
              </p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1">Linux/Bash</p>
              <p className="text-gray-800 py-1">Networking</p>
              <p className="text-gray-800 py-1">OS</p>
            </div>
          </div>
        </section>
        <hr id="projects" className="mx-auto rounded bg-gray-200 border-0 mb-5 h-px md: w-4/5"/>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              As a dedicated computer science major with a passion for creating 
              innovative and effective work, I have built a diverse portfolio of
              projects that showcase my skills and expertise. From web applications 
              to concepts in IT, my projects demonstrate my ability to work 
              with a wide range of technologies and platforms to bring ideas to life.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 text-center shadow-lg rounded-xl overflow-hidden pb-10">
              <Image src={web1} className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <p className="p-1">Raspberry Pi Project</p>
            </div>
            <div className="basis-1/3 flex-1 text-center shadow-lg rounded-xl overflow-hidden pb-10">
              <Image src={web2} className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <p className="p-1">Sorting Algo Project</p>
            </div>
          </div>
        </section>
        <hr id="my_contact" className="mx-auto rounded bg-gray-200 border-0 mb-5 h-px md: w-4/5"/>
        <section>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub/>
            <AiFillYoutube/>
            <AiFillLinkedin/>
          </div>
          <div className="text-gray-600 text-center text-xl p-3">
            <a href="armonlee99@gmail.com">armonlee99@gmail.com</a>
          </div>
        </section>
      </main>
    </div>
  )
}
