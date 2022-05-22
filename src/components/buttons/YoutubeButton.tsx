import clsxm from '@/lib/clsxm';
import Image from 'next/image';
import { ReactNode } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const YoutubeButton: React.FC<{ url: string, accent?: string }> = ({ url, accent }) => {
  return <a href={url} rel='noreferrer noopener' target={'_blank'} className={clsxm('relative overflow-hidden inline-flex items-center  flex-1 h-16 gap-4 text-xl font-medium transition-all duration-300 shadow group active:scale-95 rounded-2xl dark:bg-gray-900 bg-gray-50/75 px-7 hover:bg-gray-50 dark:hover:bg-gray-900/95 border-t text-red-600',)}>
    <span className='text-5xl'><FaYoutube /></span>
    <div className="flex w-full justify-between items-center">
      <span className="relative text-left flex flex-col">
        <span className="text-xs">See in action on</span>
        <span className="text-lg font-medium">Youtube</span>
      </span>
      <FiArrowUpRight />
    </div>
  </a>

}



export { YoutubeButton };
