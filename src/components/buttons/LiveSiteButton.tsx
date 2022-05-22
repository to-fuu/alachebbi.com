import clsxm from '@/lib/clsxm';
import Image from 'next/image';
import { ReactNode } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const LiveSiteButton: React.FC<{ url: string, icon?: string; comingSoon?: boolean, accent?: string }> = ({ url, icon, comingSoon, accent }) => {
  return <a href={comingSoon ? '' : url} style={{ color: accent || 'black' }} rel='noreferrer noopener' target={'_blank'} className={clsxm('relative overflow-hidden inline-flex items-center  flex-1 h-16 gap-4 text-xl font-medium transition-all duration-300 shadow group active:scale-95 rounded-2xl dark:bg-gray-900 bg-gray-50/75 px-7 hover:bg-gray-50 dark:hover:bg-gray-900/95 ', comingSoon ? 'pointer-events-none select-none' : 'border-t')}>
    <span className='w-8 h-8 grid place-items-center'>{icon && <Image src={icon} width={24} height={24} />}</span>
    <span className="text-lg font-medium flex gap-1 items-center justify-between w-full ">Live Site <FiArrowUpRight /> </span>
  </a>

}



export { LiveSiteButton };
