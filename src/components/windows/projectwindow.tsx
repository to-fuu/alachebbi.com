import React, { ReactNode } from 'react';
import {
  FiArrowUpRight
} from 'react-icons/fi';
import { ImGithub, ImNewTab } from 'react-icons/im';

type HeaderWindowPops = {
  className?: string;
  title: string;
  icon: ReactNode;
  url: string;
  img: string;
  repo?: string;
  hideButtons?: boolean
  onClick?: () => void;
};

export const ProjectWindow = React.forwardRef(
  (
    {
      className,
      title,
      icon,
      url,
      repo,
      img,
      onClick,
      hideButtons,
    }: HeaderWindowPops,
    ref
  ) => {
    return (
      <div
        onClick={onClick}
        className={`layout z-[1] select-none overflow-clip rounded-2xl border-t border-t-white/40 bg-white/50 shadow backdrop-blur-md transition-all duration-300 ${className}`}
      >
        <div className='flex h-10 items-center  pr-4'>
          <div className='flex h-10  items-center justify-center gap-2 px-4 font-medium text-gray-700'>
            {icon}
            {title}
          </div>
          {!hideButtons && <a href={`${url}`} target='_blank' rel='noreferrer noopener' className='mr-2 hover:shadow-md hover:-translate-y-px duration-150 inline-flex shadow-sm items-center gap-2 bg-white px-2 rounded-lg text-sm py-1'>
            Visit
            <FiArrowUpRight />
          </a>}
          {!hideButtons && repo && <a href={repo} target='_blank' rel='noreferrer noopener' className='disabled:bg-white disabled:shadow-sm disabled:translate-y-0 hover:shadow-md hover:-translate-y-px duration-150 disabled:opacity-50 mr-auto inline-flex shadow-sm items-center gap-2 bg-white px-2 rounded-lg text-sm py-1'>
            <ImGithub />
            Code
          </a>}

          <div className='ml-auto mr-2 h-3 w-3 rounded-full border-t border-t-red-800 bg-red-500'></div>
          <div className=' mr-2 h-3 w-3 rounded-full border-t border-t-yellow-800 bg-yellow-500'></div>
          <div className=' mr-2 h-3 w-3 rounded-full border-t border-t-green-800 bg-green-500'></div>

        </div>


        <div className='max-h-[300px] lg:max-h-[560px] overflow-y-scroll '>
          <img
            className={` h-fit w-full transition-none`}
            alt={title}
            src={img}
          />
        </div>
      </div>
    );
  }
);
