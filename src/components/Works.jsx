import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
const ProjectCard=({index,name,description,tags,image,video,source_code_link,live_demo_link})=>{
  const videoRef = React.useRef(null);
  const handleEnter = () => { if (videoRef.current) videoRef.current.play(); };
  const handleLeave = () => { if (videoRef.current) videoRef.current.pause(); };
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
        <Tilt
        options={{
          max:8,
          scale:1.02,
          speed:450
        }}
        className="sm:w-[380px] w-full group/card"
        >
        <div className='relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent transition-all duration-300 group-hover/card:from-[#915eff]/70 group-hover/card:via-[#915eff]/20 group-hover/card:shadow-[0_20px_60px_-15px_rgba(145,94,255,0.45)]'>
        <div className='bg-tertiary rounded-2xl overflow-hidden'>

          <div className='relative w-full h-[215px] group' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          {video ? (
            <>
            <video ref={videoRef} poster={image} muted loop playsInline preload="metadata"
            className='w-full h-full object-cover object-top'>
              <source src={video} type='video/webm' />
            </video>
            <img src={image} alt={name}
            className='absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-0'/>
            </>
          ) : (
            <img src={image} alt={name}
            className='w-full h-full object-cover object-top transition-[object-position] duration-[8000ms] ease-linear group-hover:object-bottom'/>
          )}

          {/* top action buttons */}
          <div className='absolute top-3 right-3 flex gap-2 z-10'>
            {live_demo_link && (
              <button onClick={()=>window.open(live_demo_link,"_blank")} title="Open live site"
              className='flex items-center gap-1.5 px-3 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[12px] font-medium cursor-pointer transition-all duration-200 hover:bg-[#915eff] hover:border-[#915eff]'>
                <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'/>
                Live
              </button>
            )}
            {source_code_link && (
              <button onClick={()=>window.open(source_code_link,"_blank")} title="View source code"
              className='flex items-center justify-center w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 cursor-pointer transition-all duration-200 hover:bg-[#915eff] hover:border-[#915eff]'>
                <img src={github} alt="github" className='w-4 h-4 object-contain' />
              </button>
            )}
          </div>

          {/* video badge */}
          {video && (
            <div className='absolute bottom-0 left-0 right-0 px-4 py-2.5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'/>
              <span className='text-white text-[11px] font-medium tracking-[0.12em] uppercase'>Playing demo</span>
            </div>
          )}
          </div>

          <div className='p-5'>
            <p className='text-white font-bold text-[21px] leading-snug'>{name}</p>
            <p className='mt-2.5 text-secondary text-[13.5px] leading-[22px]'>{description}</p>

            <div className='mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2'>
            {
              tags.map((tag)=>(
                <span key={tag.name}
                className={`text-[12px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}>
                  #{tag.name}
                </span>
              ))
            }
            </div>
          </div>

        </div>
        </div>
        </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>
        My work
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects.
      </h2>
    </motion.div>
    <div className='w-full flex'>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
    </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
    {
      projects.map((project,index)=>(
        <ProjectCard key={`project-${index}`}
        {...project}
        index={index}
        />
      ))

    }
    </div>
    </>
  )
}

export default SectionWrapper(Works,"")