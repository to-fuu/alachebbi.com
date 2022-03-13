import useScroll from '@/hooks/useScroll';
import Link from 'next/link';
import * as React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import { IoMdCloudyNight, IoMdMoon, IoMdSunny } from 'react-icons/io';



export default function Header({ headerDark, hideNav }: { headerDark?: boolean, hideNav?: boolean }) {


  const scroll = useScroll()

  return (
    <header className={`print:hidden px-4 sm:px-0 fixed w-full top-0 z-50 transition-all duration-300 border-t ${headerDark ? 'bg-gray-900/80' : ''} border-transparent ${scroll > 200 ? 'bg-gray-900/80 dark:bg-gray-900/50 backdrop-blur-md border-t-gray-400' : ''}`}>
      <div className={`layout flex  items-center justify-between transition-all duration-500 ${scroll > 200 ? 'h-20' : 'h-24'}`}>
        <Link href={'/'} passHref>
          <a className={`font-bold text-xl text-gray-300  ${scroll > 200 ? '!text-gray-300 ' : ''} duration-300`}>
            Ala Chebbi
          </a>
        </Link>
        <nav className='flex items-center gap-2'>


          <a href="https://www.linkedin.com/in/ala-chebbi-32266b168/" target={'_blank'} rel='noreferrer noopener' className={`py-3 sm:py-2 ml-4 font-medium group items-center gap-4 px-3 sm:px-5 inline-flex rounded-lg transition-all relative duration-300  
            text-white hover:bg-white/20`}>
            <div className="hidden sm:block">Get in touch</div>
            <ImLinkedin />
          </a>



        </nav>
      </div>

    </header >
  );
}
