import useScroll from '@/hooks/useScroll';
import Link from 'next/link';
import * as React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';


const links = [
  { href: '#about', label: 'About me', topScroll: 800, bottomScroll: 1600 },
  { href: '#projects', label: 'Projects', topScroll: 1600, bottomScroll: 2800 },
  // { href: '#blog', label: 'Blog', topScroll: 2800, bottomScroll: 3200 },
];

export default function Header({ headerDark, hideNav }: { headerDark?: boolean, hideNav?: boolean }) {

  const scroll = useScroll()

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 border-t border-transparent ${scroll > 200 ? 'bg-zinc-900 backdrop-blur-md border-t-slate-400' : ''}`}>
      <div className={`layout flex  items-center justify-between transition-all duration-500 ${scroll > 200 ? 'h-20' : 'h-24'}`}>
        <Link href={'/'} passHref>
          <a className={`font-bold ${headerDark ? 'text-zinc-700' : 'text-zinc-300'}  ${scroll > 200 ? '!text-zinc-300 ' : ''} duration-300`}>
            Ala Chebbi
          </a>
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-1'>
            {!hideNav && <>
              {
                links.map(({ href, label, topScroll, bottomScroll }) => (
                  <li key={`${href}${label}`}>
                    <button onClick={() => {
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }} className={`${headerDark ? 'text-zinc-700 hover:text-zinc-800' : 'text-zinc-300 hover:text-zinc-50'}   font-medium py-2 px-4 rounded-lg ${scroll > 200 ? 'hover:bg-zinc-700/50 !text-zinc-300 hover:!text-zinc-50' : `${headerDark ? 'hover:bg-black/20' : 'hover:bg-white/20'} `} duration-300 ${scroll > topScroll && scroll < bottomScroll && 'bg-zinc-700/50'}`}>
                      {label}
                    </button>
                  </li>
                ))
              }</>}
            <li>
              <a href="https://www.linkedin.com/in/ala-chebbi-32266b168/" target={'_blank'} rel='noreferrer' className={`py-3 sm:py-2 ml-4 shadow font-medium group items-center gap-4 px-3 sm:px-5 inline-flex rounded-lg transition-all relative duration-300  
              ${headerDark ? `${scroll >= 200 ? 'bg-slate-50/90 hover:bg-slate-50 text-blue-700' : 'text-slate-50/90 hover:bg-blue-600/90   bg-blue-600'}` : 'bg-slate-50/90 hover:bg-slate-50   text-blue-700'}`}>
                <div className="hidden sm:block">Get in touch</div>
                <ImLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/to-fuu/alachebbi.com" target={'_blank'} rel='noreferrer' className={`py-3 ml-1 shadow font-medium group items-center gap-4 px-3 inline-flex rounded-lg transition-all relative duration-300  
              ${headerDark ? `${scroll >= 200 ? 'bg-slate-50/90 hover:bg-slate-50   text-blue-700' : 'text-slate-50/90 hover:bg-blue-600/90   bg-blue-600'}` : 'bg-slate-50/90 hover:bg-slate-50   text-blue-700'}`}>
                <ImGithub />
              </a>
            </li>
          </ul>

        </nav>
      </div>
    </header>
  );
}
