import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import profile_pic from '../public/profile_pic.png';
import HTML from '../public/HTML.png';
import Data from '../public/Data.png';
import Modem from '../public/Modem.png';
import AlgoVisualizer from "../public/AlgoVisualizer.png";
import{useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Armon Lee Portfolio</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" font-serif px-10 md:px-20 lg:px-20 dark:bg-gray-900 dark:text-gray-400">
        <section className="min-h-screen lg:min-h-screen">
          <nav className="pb-10 pt-5 flex justify-between">
            <h1 className="text-xl md:text-2xl">My Portfolio</h1>
            <ul className="flex gap-2 my-auto md:text-l">
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a class="resume" href="https://drive.google.com/file/d/1U_Uift6x-dm-ExtmQosyWCX7cyoFH2xg/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="curser-pointer text-xl"/>
              </li>
            </ul>
          </nav>
          <div className="text-center p-7">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden md:h-70 md:w-70">
              <Image src={profile_pic} alt="profile_pic" layout="fill" objectFit="cover"/>
            </div>
            <h2 className="text-5xl py-2 font-medium md=6xl">Armon J. Lee</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Computer Science Major</h3>
            <div className="text-md py-5 leading-8  md:text-xl max-w-4xl mx-auto">
              <p className="mb-5">
                Computer science has always been a source of inspiration and growth for me, as it offers endless possibilities for creativity and learning. Moreover, I have a deep appreciation for the process of acquiring new skills and continuously improving my knowledge and expertise.
              </p>
              <p>
                What I find particularly rewarding about computer science is the opportunity to work with others to tackle real-world problems and create meaningful solutions. The ability to contribute to the advancement of technology and make a positive impact on society is what drives my passion for this major.
              </p>
            </div>
          </div>
        </section>
        <hr id="experience" className="mx-auto rounded bg-gray-200 border-0 mb-5 h-2px dark:bg-gray-700 md: w-4/5"/>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Experience</h3>
            <p className="text-md py-2 leading-8 ">
              I&apos;m a Cal State Northridge undergraduate student with a strong background in computer science and a passion for technology, I&apos;m knowledgeable in a range of concepts pertaining to the field. Being well-versed in modern front-end development practices, data sorting and analysis, and skills in IT.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
              <Image className="mx-auto" src={HTML} alt="web_dev" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Software Development</h3>
              <p className="py-2">
                I have a strong background in HTML, CSS, JavaScript, and 
                various front-end frameworks and libraries, but overall
                I love making functional user-friendly programs.
              </p>
              <h4 className="py-4 ">Skills</h4>
              <p className=" py-1">Javascript, HTML, CSS</p>
              <p className=" py-1">React, Next.js</p>
              <p className=" py-1">Tailwind</p>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
              <div className="mx-auto bg-gray-600 rounded-full w-100px h-100px">
                <Image className="mx-auto pt-2" src={Data} alt="data_block" width={80} height={80}/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Databases</h3>
              <p className="py-2">
                I have extensive knowledge in Object-Oriented Programming (OOP) 
                languages and a solid foundation in data structures and algorithms. 
                In addition, I&apos;m familiar with data analysis concepts and have 
                practical experience working with SQL databases.
              </p>
              <h4 className="py-4 ">Skills</h4>
              <p className=" py-1">Python, Java, C++</p>
              <p className=" py-1">SQL</p>
              <p className=" py-1">Git/Github</p>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
              <div className="mx-auto rounded-full w-100px h-100px overflow-hidden">
                <Image className="mx-auto" src={Modem} alt="modem" width={120} height={120}/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Information Technology</h3>
              <p className="py-2">
                I like to bring focus to the hardware and network side of 
                computer science. Trying various new projects like to
                server hosting/maintenance, VPNs, creating access points,
                and more!
              </p>
              <h4 className="py-4 ">Skills</h4>
              <p className=" py-1">Linux/Bash</p>
              <p className=" py-1">Networking</p>
              <p className=" py-1">OS</p>
            </div>
          </div>
        </section>
        <hr id="projects" className="mx-auto rounded bg-gray-200 border-0 mb-5 h-2px dark:bg-gray-700 md: w-4/5"/>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 ">
              As a dedicated computer science major with a passion for creating 
              innovative and effective work, I have built a diverse portfolio of
              projects that showcase my skills and expertise. From web applications 
              to concepts in IT, my projects demonstrate my ability to work 
              with a wide range of technologies and platforms to bring ideas to life.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row flex-wrap">
            <a href="https://github.com/Icon-1999/Sorting-Algo-Project/tree/main" target="_blank" rel="noreferrer" className="basis-1/3 flex-1 text-center overflow-hidden hover:underline lg:basis-0">
              <Image src={AlgoVisualizer} alt="AlgoVisualizer" className="object-cover rounded-xl shadow-lg border-2 border-gray-400" width={'100%'} height={'100%'}/>
              <h5 className="m-auto p-1 text-xl">Sorting Algo Project</h5>
            </a>     
            <div className="basis-1/3 flex-1 lg:basis-0">
              <p></p>
            </div>
            <div className="basis-1/3 flex-1 lg:basis-0">
              <p></p>
            </div>
          </div>
        </section>
        <hr id="my_contact" className="mx-auto rounded bg-gray-200 border-0 mb-5 h-2px dark:bg-gray-700 md: w-4/5"/>
        <section>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/Icon-1999" target="_blank" rel="noreferrer"><AiFillGithub/></a>
            <a href="https://www.youtube.com/channel/UCdUOoi3YPi8j92yXMAloBUg" target="_blank" rel="noreferrer"><AiFillYoutube/></a>
            <a href="https://www.linkedin.com/in/armon-lee-972952256/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
          </div>
          <div className="text-gray-600 text-center text-xl p-3 dark:text-gray-400">
            <address>
              <a href="mailto:armonjlee99@gmail.com">armonjlee99@gmail.com</a>
            </address>
          </div>
        </section>
      </main>
    </div>
  )
}
