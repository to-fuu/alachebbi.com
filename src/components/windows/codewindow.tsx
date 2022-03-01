import React, { useRef } from 'react';
import { SiCss3, SiReact, SiTypescript } from 'react-icons/si';
import { VscChevronRight, VscClose, VscDebugAlt, VscExtensions, VscFiles, VscGitMerge, VscSearch, VscSymbolMethod } from 'react-icons/vsc';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/nightOwl'
type HeaderWindowPops = {
  className?: string;
};

const exampleCode = `    {/* Hero Title */} 
    <FadeIn className='w-full' startScale={1} bounce={0.1} type={'spring'} duration={0.75}>
        <h1 className='group mt-4 flex flex-col leading-[1.1] justify-center items-center'>
          <div className='mb-2 font-bold opacity-60 scale-90 transition duration-300 [text-shadow:2px_2px_#00000033]'>
            Howdy, I&apos;m Ala 🙌
          </div>
          <div className='text-center'>
            Building modern websites and fun game experiences 
          </div>
        </h1>
    </FadeIn>
`;


export const CodeWindow = React.forwardRef(
  (
    {
      className,
    }: HeaderWindowPops,
  ) => {
    return (
      <div
        className={`layout z-[1] select-none overflow-clip sm:rounded-2xl border-t border-t-white/10 bg-[#263238]/80 shadow backdrop-blur-md transition-all duration-300 ${className}`}
      >
        <div className='relative flex items-center h-10 px-4'>
          <div className='w-3 h-3 mr-2 bg-white/20 rounded-full  '></div>
          <div className='w-3 h-3 mr-2 bg-white/20 rounded-full  '></div>
          <div className='w-3 h-3 mr-2 bg-white/20 rounded-full  '></div>
          <span className='absolute left-0 w-full text-center text-xs'>index.tsx - alachebbi.com</span>
        </div>
        <div className='max-h-[460px] h-screen flex'>
          <div className="sm:w-16 min-w-[40px] text-center flex-col flex items-center text-xl sm:text-2xl py-4 space-y-8 text-gray-400">
            <VscFiles className='hover:text-gray-200 duration-150' />
            <VscSearch className='hover:text-gray-200 duration-150' />
            <div className="relative">
              <VscGitMerge className='hover:text-gray-200 duration-150' />
              <div className="absolute grid items-center w-5 h-5 text-xs text-black bg-teal-500 rounded-full left-3 top-2">4</div>
            </div>
            <VscDebugAlt className='hover:text-gray-200 duration-150' />
            <VscExtensions className='hover:text-gray-200 duration-150' />
          </div>
          <div className="flex-1">
            <div className='flex '>
              <div className="flex items-center h-10 px-2 border-b-2 border-teal-300 w-fit cursor-pointer">
                <SiReact className='mr-2 text-blue-400' /> index.tsx <div className="w-2 h-2 ml-2 bg-white rounded-full"></div>
              </div>
              <div className="flex items-center h-10 px-2 w-fit group cursor-pointer">
                <SiTypescript className='mr-2 text-blue-500' /> dato.ts
                <VscClose className='ml-4 opacity-0 group-hover:opacity-100 p-0.5 text-xl hover:bg-white/20 rounded' />
              </div>
              <div className="flex items-center h-10 px-2 w-fit italic !font-normal group cursor-pointer">
                <SiCss3 className='mr-2 text-blue-500' /> globals.css
                <VscClose className='ml-4 opacity-0 group-hover:opacity-100 p-0.5 text-xl hover:bg-white/20 rounded' />
              </div>
            </div>
            <div className='flex gap-2 items-center text-gray-400 py-1'>
              <span className='hover:text-white cursor-pointer'>src</span> <VscChevronRight className='text-base mt-1' /> <span className='hover:text-white cursor-pointer'>pages</span> <VscChevronRight className='text-base mt-1' /> <SiReact className='mt-0.5 text-blue-400' />  <span className='hover:text-white cursor-pointer'>index.tsx</span> <VscChevronRight className='text-base mt-1' />  <VscSymbolMethod className='mt-0.5 text-purple-500' /> <span className='hover:text-white cursor-pointer'>HomePage</span>
            </div>
            <>
              <Highlight {...defaultProps} code={exampleCode} theme={theme} language="tsx">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} `} >
                    {tokens.map((line, i) => (
                      <div className={`flex`} key={`line_${i + 1}`}> <span className="inline-block pr-4 border-r border-white/20 ml-2 text-gray-400">{i + 65}</span> <div {...getLineProps({ line, key: i })} className={`w-full  ${i == 2 && 'bg-black/40'}`}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div></div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </>
          </div>
          <div className="w-2 h-16 bg-white/30 backdrop-blur hover:bg-white/50 translate-y-32 rounded-full absolute right-0"></div>
        </div>
      </div>
    );
  }
);
