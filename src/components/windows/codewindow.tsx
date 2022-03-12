import React, { useRef } from 'react';
import { SiCss3, SiReact, SiTypescript } from 'react-icons/si';
import { VscChevronRight, VscClose, VscDebugAlt, VscExtensions, VscFiles, VscGitMerge, VscSearch, VscSymbolMethod } from 'react-icons/vsc';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/nightOwl'
type HeaderWindowPops = {
  className?: string;
};

const exampleCode = `              
      <FadeIn className='w-full' startScale={1} bounce={0.1} type={'spring'} duration={0.75}>
          <h1 className='group mt-4 flex flex-col leading-[1.1] justify-center items-center '>
            <div className='mb-4 text-3xl font-bold text-center transition duration-300 scale-90 opacity-60'>
              Howdy, I&apos;m Ala
            </div>
            <div className='text-center sm:max-w-screen-lg sm:px-20'>
              Building modern websites and fun game experiences
            </div>
          </h1>
          </FadeIn>

          <FadeIn className='mx-auto' startScale={1} bounce={0.1} type={'spring'} duration={0.75} delay={0.25}>
          <div className='flex flex-wrap justify-center gap-4 mt-12'>
            <button
              onClick={() => {
                s1Ref.current!.scrollIntoView({ behavior: 'smooth' });
              }}
              ref={discRef}
              className='relative inline-flex items-center h-16 gap-4 text-xl font-medium text-gray-700 transition duration-300 shadow active:scale-95 cursor-down group rounded-2xl bg-white/90 px-7 hover:opacity-80'
            >
              Discover
              <HiChevronDoubleDown className='transition duration-300 group-hover:translate-y-1' />
            </button>
            <a
              onMouseEnter={() => {
                discRef.current!.classList.add('opacity-50');
              }}
              onMouseLeave={() => {
                discRef.current!.classList.remove('opacity-50');
              }}
              href='/cv-alachebbi.pdf'
              target={'_blank'}
              ref={cvRef}
              className='relative inline-flex items-center h-16 gap-4 text-xl font-medium transition duration-300 bg-white bg-opacity-50 shadow select-none active:scale-95 whitespace-nowrap cursor-newtab rounded-2xl px-7 text-gray-700/70 hover:bg-opacity-100 hover:text-blue-800'
            >
              Get Resume
              <HiOutlineDocumentText />
            </a>
          </div>
          </FadeIn>
          </div>

          <div className='relative flex w-full mt-20 '>
            <FadeIn className='w-full ' startScale={0.9} bounce={0} duration={0.5} delay={0.35}>
              <CodeWindow
                className='w-full '
              />
            </FadeIn>


          </div>
          </section>

          <section
          className='relative flex flex-col max-w-screen-md pt-32 pb-12 layout scroll-mt-20'
          id='about'
          ref={s1Ref}
          >
            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <h2 className='max-w-xl text-5xl text-gray-600 dark:text-gray-200'>
              Passionate Frontend and <br /> Game developer
              </h2>
            </FadeIn>
            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <p className='max-w-2xl mt-20 mb-4 text-xl text-gray-600 dark:text-gray-400'>
              Welcome to my portfolio! I'm Ala, a passionate programmer, gamer, artist and UI aspiring designer. I currently work as a fullstack web and mobile developer at <a href="https://brandbox.tn" target={'_blank'} rel='noreferrer noopener' className='text-yellow-600 underline cursor-newtab'>Brandbox</a>.

              <br /> My favourite and most used frameworks are <em className='font-medium'>Next.js</em> and <em className='font-medium'>TailwindCSS</em> for frontend development and <em className='font-medium'>Unity3D</em> for game development.
              </p>
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
        className={`layout z-[1] max-h-[500px] md:max-h-[720px] sm:aspect-video select-none overflow-clip shadow-xl sm:rounded-2xl border-t border-t-white/10 bg-black/80  backdrop-blur-md transition-all duration-300 ${className} relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></div>
        <div className='relative flex items-center h-10 px-4'>
          <div className='w-3 h-3 mr-2 bg-white/20 rounded-full  '></div>
          <div className='w-3 h-3 mr-2 bg-white/20 rounded-full  '></div>
          <div className='w-3 h-3 mr-2 bg-white/20 rounded-full  '></div>
          <span className='absolute left-0 w-full text-center text-xs'>index.tsx - alachebbi.com</span>
        </div>
        <div className='flex'>
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
                      <div className={`flex`} key={`line_${i + 1}`}> <span className="inline-block pr-4 border-r border-white/20 ml-2 text-gray-400">{i + 65}</span> <div {...getLineProps({ line, key: i })} className={`w-full  ${i == 5 && 'bg-white/10'}`}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                        {i == 5 && <span className='animate-blink'> |</span>}
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
