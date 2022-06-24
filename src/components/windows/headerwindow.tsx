import useScroll from '@/hooks/useScroll';
import React, { ReactNode, useRef } from 'react';
import {
  HiOutlineDotsVertical,
  HiOutlineHome,
  HiOutlineRefresh
} from 'react-icons/hi';
import { ImLock } from 'react-icons/im';
import {
  RiArrowLeftLine,
  RiArrowRightLine
} from 'react-icons/ri';

type HeaderWindowPops = {
  className?: string;
  tab1: string;
  tab1Icon: ReactNode;
  tab2: string;
  tab2Icon: ReactNode;
  url: string;
  img: string;
  onClick?: () => void;
};

export const HeaderWindow = React.forwardRef(
  (
    {
      className,
      tab1,
      tab1Icon,
      tab2,
      tab2Icon,
      url,
      img,
      onClick,
    }: HeaderWindowPops,
  ) => {
    const imageRef = useRef<HTMLImageElement>(null);
    return (
      <div
        onClick={onClick}
        className={`layout z-[1] select-none overflow-hidden rounded-2xl border-t border-t-white/40 bg-white/50 shadow backdrop-blur-md transition-all duration-300 ${className}`}
      >
        <div className='flex h-10 items-center  px-4'>
          <div className=' mr-2 h-3 w-3 rounded-full border-t border-t-red-800 bg-red-500'></div>
          <div className=' mr-2 h-3 w-3 rounded-full border-t border-t-yellow-800 bg-yellow-500'></div>
          <div className=' mr-2 h-3 w-3 rounded-full border-t border-t-green-800 bg-green-500'></div>
          <div className='flex h-10 items-center justify-center gap-2 border-l border-r border-r-black/10 border-l-gray-50/10 bg-white/20 px-4 font-medium text-gray-700'>
            {tab1Icon}
            {tab1}
          </div>
          <div className=' flex h-10 items-center justify-center gap-2 px-4 font-medium text-gray-700'>
            {tab2Icon} {tab2}
          </div>
        </div>
        <div className='flex h-10  items-center bg-white/20 px-4 text-gray-700'>
          <div className='flex w-1/4'>
            <RiArrowLeftLine className='mr-4 text-xl' />
            <RiArrowRightLine className='mr-4 text-xl' />
            <HiOutlineHome className='mr-4 text-xl' />
            <HiOutlineRefresh className='mr-4 text-xl' />
          </div>
          <div className='mx-auto my-1 flex h-8 w-full max-w-md items-center justify-center gap-2 rounded-md border-t border-t-black/10 bg-black/10 px-4 text-sm font-medium text-gray-700'>
            <ImLock /> {url}
          </div>
          <div className='w-1/4'>
            <HiOutlineDotsVertical className='ml-auto text-xl' />
          </div>
        </div>

        <div className='max-h-[460px] '>
          <img
            ref={imageRef}
            className={` h-fit w-full transition-none`}

            src={img}
          />
        </div>
      </div>
    );
  }
);
