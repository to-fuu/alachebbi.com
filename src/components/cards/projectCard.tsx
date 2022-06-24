
import Project from '@/cms/types/Project';
import Image from 'next/image';
import React from "react";
import { FaApple, FaYoutube } from 'react-icons/fa';
import { HiEye } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';
import { AppStoreButton } from '../buttons/AppStoreButton';
import { PlayStoreButton } from '../buttons/PlayStoreButton';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, liveSite, repo, image, colorTopLeft, description, subtitle, dark, projectLinks } = project
  const ref = React.useRef<HTMLDivElement>(null);

  return (<div
    className={`group w-full h-full relative  sm:aspect-square select-none cursor-pointer duration-300 sm:hover:-translate-y-2 min-h-[400px] ${dark && 'dark'}`} >
    <div
      style={{ backgroundColor: dark ? '#F9FAFB' : colorTopLeft.hex }}
      className="rounded-2xl overflow-hidden absolute inset-0 p-12 [backface-visibility:hidden] text-white dark:text-gray-700 flex flex-col duration-500">
      <Image src={image.url} placeholder='blur' blurDataURL={image.blurUpThumb} alt={image.alt || title} layout={'fill'} className='rotate-12 scale-125 group-hover:scale-[1.4] duration-300 blur-sm group-hover:blur-none w-full absolute opacity-5 rounded-2xl inset-0 h-full object-cover object-top' />
      <div className=' max-w-xs opacity-75 mb-2 relative duration-300'>{subtitle}</div>
      <div className=' max-w-xs  text-2xl xl:text-3xl font-bold relative duration-300'>{title}</div>
      <p className='mt-2 group-hover:opacity-75 sm:opacity-0 duration-300 xl:block sm:hidden'>{description}</p>
      <div className="flex gap-2  mt-auto ml-auto">

        {projectLinks.map(({ __typename, url, comingSoon, private: isPrivate }, i) => {

          switch (__typename) {
            case 'PlayStoreButtonRecord': return <a key={i} style={{ color: dark ? '#fff' : colorTopLeft.hex }} href={url} target='_blank' rel='noreferrer noopener' className="rounded-full w-14 h-14 grid place-items-center sm:opacity-0 text-3xl p-2 dark:bg-gray-800 bg-white relative duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95 aspect-square">
              <Image src={'/images/playstore.svg'} alt='Get it on playstore' width={24} height={24} />
            </a>
            case 'AppStoreButtonRecord': return <a key={i} style={{ color: dark ? '#fff' : colorTopLeft.hex }} href={url} target='_blank' rel='noreferrer noopener' className="rounded-full w-14 h-14 grid place-items-center sm:opacity-0 text-3xl p-2 dark:bg-gray-800 bg-white relative duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95 aspect-square">
              <FaApple />
            </a>
            case 'GithubButtonRecord': return <a key={i} style={{ color: dark ? '#fff' : colorTopLeft.hex }} href={url} target='_blank' rel='noreferrer noopener' className="rounded-full w-14 h-14 grid place-items-center sm:opacity-0 text-3xl p-2 dark:bg-gray-800 bg-white relative duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95 aspect-square">
              <RiGithubFill />
            </a>
            case 'VisitButtonRecord': return <a key={i} style={{ color: dark ? '#fff' : colorTopLeft.hex }} href={url} target='_blank' rel='noreferrer noopener' className="rounded-full w-14 h-14 grid place-items-center sm:opacity-0 text-3xl p-2 dark:bg-gray-800 bg-white relative duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95 aspect-square">
              <HiEye />
            </a>
            case 'YoutubeButtonRecord': return <a key={i} href={url} target='_blank' rel='noreferrer noopener' className="text-red-600 w-14 h-14 grid place-items-center rounded-full sm:opacity-0 text-3xl p-2 dark:bg-gray-800 bg-white relative duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95 aspect-square">

              <FaYoutube />
            </a>
          }

          return <></>
        }
        )}

      </div>
    </div>
  </div>)
}

export default ProjectCard