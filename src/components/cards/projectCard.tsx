
import Project from '@/cms/types/Project';
import React from "react";
import { HiEye } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, liveSite, repo, image, colorTopLeft, description, subtitle, dark } = project
  const ref = React.useRef<HTMLDivElement>(null);

  return (<div
    className={`group w-full h-full relative  sm:aspect-square select-none cursor-pointer duration-300 sm:hover:-translate-y-2 min-h-[400px] ${dark && 'dark'}`} >
    <div
      style={{ backgroundColor: dark ? '#F9FAFB' : colorTopLeft.hex }}
      className="rounded-2xl overflow-clip absolute inset-0 p-12 [backface-visibility:hidden] text-white dark:text-gray-700 flex flex-col duration-500">
      <img src={image.url} alt="" className='rotate-12 scale-125 group-hover:scale-[1.4] duration-300 blur-sm group-hover:blur-none w-full absolute opacity-5 rounded-2xl inset-0 h-full object-cover object-top' />
      <div className=' max-w-xs opacity-75 mb-2 relative duration-300'>{subtitle}</div>
      <div className=' max-w-xs  text-2xl xl:text-3xl font-bold relative duration-300'>{title}</div>
      <p className='mt-2 group-hover:opacity-75 sm:opacity-0 duration-300 xl:block sm:hidden'>{description}</p>
      <div className="flex gap-2  mt-auto ml-auto">
        {repo && <a style={{ color: dark ? '#fff' : colorTopLeft.hex }} href={liveSite} target='_blank' rel='noreferrer noopener' className="rounded-full sm:opacity-0 text-3xl p-2 dark:bg-gray-800 bg-white relative duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95">
          <RiGithubFill />
        </a>}
        {liveSite && <a style={{ color: dark ? '#fff' : colorTopLeft.hex }} href={liveSite} className="rounded-full sm:opacity-0 text-3xl p-2 bg-white relative duration-300 dark:bg-gray-800 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95">
          <HiEye />
        </a>}
      </div>
    </div>
  </div>)
}

export default ProjectCard