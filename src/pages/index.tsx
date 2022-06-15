import * as datoCmsApi from '@/cms/dato';
import Project from '@/cms/types/Project';
import Testimonial from '@/cms/types/Testimonial';
import ProjectCard from '@/components/cards/projectCard';
import FadeIn from '@/components/Fadein';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { CodeWindow } from '@/components/windows/codewindow';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { BiChevronRight, BiDevices } from 'react-icons/bi';
import {
  HiChevronDoubleDown, HiOutlineDocumentText
} from 'react-icons/hi';
import { IoLogoGameControllerA } from 'react-icons/io';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation])

interface props {
  projects: Project[]
  testimonials: Testimonial[]
  remaining: number
}
export default function HomePage({ projects, testimonials, remaining }: props) {
  const s1Ref = React.useRef<HTMLDivElement>(null);
  const discRef = React.useRef<HTMLButtonElement>(null);
  const cvRef = React.useRef<HTMLAnchorElement>(null);

  const { scrollY } = useViewportScroll();
  const codeY = useTransform(scrollY, [300, 1000], [0, 150]);
  const codeOpacity = useTransform(scrollY, [500, 900], [1, 0]);

  return (
    <Layout headerDark={false}>
      <Seo />
      <main className='max-w-[100vw] overflow-x-hidden '>
        <section className='overflow-hidden relative bg-gradient-to-br text-gray-200 selection:bg-white selection:text-gray-900 before:absolute before:inset-0 before:animate-hue-rotate before:bg-[url(/images/mesh-1.webp)] before:bg-cover before:opacity-100 before:mix-blend-screen bg-black '>
          <div className='absolute inset-0 bg-[url(/images/noise.webp)] bg-repeat' />
          <div className='absolute inset-x-0 bottom-0 bg-repeat top-1/2 bg-gradient-to-b from-transparent to-black' />
          <div className='relative flex flex-col w-full max-w-screen-xl px-10 pt-24 text-left layout sm:pt-40 xl:px-0'>
            <FadeIn className='w-full' startScale={1} bounce={0.1} type={'spring'} duration={0.75}>
              <h1 className='group mt-4 flex flex-col leading-[1.1] justify-center items-center '>
                <div className='mb-4 text-3xl font-bold text-center transition duration-300 scale-90 text-opacity-60'>
                  <img src="/images/me.jpg" className='inline w-12 h-12 mr-4 rounded-full' alt="" />
                  Howdy 👋 I&apos;m Ala,
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
                  className='relative inline-flex items-center gap-4 text-xl font-medium transition duration-300 h-14 text-rose-100 hover:shadow-xl hover:shadow-rose-600/20 active:scale-95 group rounded-2xl bg-rose-500 px-7 hover:opacity-80'
                >
                  Discover
                  <HiChevronDoubleDown className='transition duration-300 group-hover:translate-y-1' />
                </button>
                <Link href='/resume'>
                  <a
                    onMouseEnter={() => {
                      discRef.current!.classList.add('opacity-50');
                    }}
                    onMouseLeave={() => {
                      discRef.current!.classList.remove('opacity-50');
                    }}

                    ref={cvRef}
                    className='relative inline-flex items-center gap-4 text-xl font-medium transition duration-300 bg-white select-none h-14 bg-opacity-80 active:scale-95 whitespace-nowrap rounded-2xl px-7 hover:bg-opacity-100 hover:text-rose-600/80 text-rose-600/70 hover:shadow-xl hover:shadow-rose-600/20'
                  >
                    See Resume
                    <HiOutlineDocumentText />
                  </a>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className='relative flex w-full mt-20 '>
            <motion.div style={{ y: codeY, opacity: codeOpacity }} className="mx-auto max-h-[720px] overflow-hidden">
              <FadeIn className='relative w-full ' startScale={0.9} bounce={0} duration={0.5} delay={0.35}>
                <CodeWindow
                  className='w-full '
                />
              </FadeIn>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black"></div>
            </motion.div>
          </div>
        </section>

        <section
          className='relative flex flex-col max-w-screen-md pt-16 pb-12 layout scroll-mt-20'
          id='about'
          ref={s1Ref}
        >
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <h2 className='max-w-xl mt-12 text-5xl text-gray-200 '>
              Passionate Frontend and <br /> Game developer
            </h2>
          </FadeIn>
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <p className='max-w-2xl mt-20 mb-4 text-xl text-gray-400'>
              Welcome to my portfolio! I&apos;m Ala, a passionate programmer, gamer, artist and UI aspiring designer. I currently work as a fullstack web and mobile developer at <a href="https://brandbox.tn" target={'_blank'} rel='noreferrer noopener' className='text-yellow-600 underline cursor-newtab'>Brandbox</a>.

              <br /> My favourite and most used frameworks are <em className='font-medium'>Next.js</em> and <em className='font-medium'>TailwindCSS</em> for frontend development and <em className='font-medium'>Unity3D</em> for game development.
            </p>
          </FadeIn>


          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <div className="flex p-4 mt-20 text-white duration-300 hover:bg-blue-500/20 rounded-xl">
              <div className="p-1.5 bg-blue-500 mb-auto rounded-xl bg-opacity-40 text-blue-200 mr-8">
                <BiDevices className='text-3xl' />
              </div>
              <div className="">
                <h5 className='text-2xl'>Website development</h5>
                <p className='mt-4 text-gray-400'>Made with React, plain HTML and CSS or Wordpress; Landing page or E-Commerce, the choice is yours. Performance and SEO are guaranteed!</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <div className="flex p-4 mt-8 text-white duration-300 hover:bg-pink-500/20 rounded-xl">
              <div className="p-1.5 bg-pink-500 mb-auto rounded-xl bg-opacity-40 text-pink-200 mr-8">
                <IoLogoGameControllerA className='text-3xl' />
              </div>
              <div className="">
                <h5 className='text-2xl'>Game development</h5>
                <p className='mt-4 text-gray-400'>I will help you turn your game idea into reality or help you implementing a game mechanic in Unity</p>
              </div>
            </div>
          </FadeIn>

        </section>

        <div className="mt-12 layout">
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <h2 className='max-w-xl text-5xl text-gray-200'>
              Featured Projects
            </h2>
          </FadeIn>
        </div>
        <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
          <div className="grid gap-4 mt-12 mb-20 sm:grid-cols-2 lg:grid-cols-3 layout">


            {projects.map((p, i) => (
              <ProjectCard project={p} key={p.title} />
            ))}
            <Link href='/projects'>
              <a className="relative flex flex-col items-start justify-start w-full h-full p-12 text-gray-200 duration-300 active:scale-95 active:opacity-75 hover:shadow-xl hover:shadow-red-600/20 overflow-hidden group hover:-translate-y-2 rounded-2xl hover:text-gray-200">
                <div className="absolute scale-1 rounded-full w-12 bottom-12 right-12 h-12  scale-0  bg-rose-600 group-hover:scale-[25] opacity-0 duration-300  group-hover:opacity-100"></div>
                <span className='relative max-w-xs text-3xl font-bold transition-all duration-300 group-hover:text-base group-hover:font-normal group-hover:opacity-75'>See {remaining} more...</span>
                <span className='relative max-w-xs text-3xl font-bold transition-all duration-300 opacity-0 group-hover:opacity-100'>Browse All <br /> Projects</span>
                <div className="rounded-full opacity-0 text-3xl p-2 bg-white relative duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100 hover:!scale-105 active:!scale-95 mt-auto ml-auto text-rose-600 group-hover:-rotate-45">
                  <BiChevronRight />
                </div>
              </a>
            </Link>


          </div>
        </FadeIn>

        <section className='pt-16 bg-gray-900/50 sm:pt-32 sm:pb-16'>
          <div className="layout">
            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <h2 className='text-gray-200'>
                <div className=''>My Career so far</div>
              </h2>
            </FadeIn>

            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <div className="grid gap-12 mx-auto mt-16 sm:grid-cols-2">
                <div className="">
                  <h3 className='text-3xl font-black text-gray-200'>Education</h3>
                  <ul className='mt-8 space-y-4 font-semibold'>
                    <li className='flex flex-col space-y-1'>
                      <span className='text-2xl font-semibold text-gray-200'>Software Engineering</span>
                      <span className='text-lg font-medium text-gray-400'>Higher Institute of Applied Sciences and Technology of Sousse</span>
                      <p className='text-transparent'>_</p>
                    </li>
                    <li className='flex flex-col space-y-1'>
                      <span className='text-2xl font-semibold text-gray-200'>Integrated Preparatory Course</span>
                      <span className='text-lg font-medium text-gray-400'>Higher Institute of Applied Sciences and Technology of Sousse</span>
                      <p className='text-transparent'>_</p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h3 className='text-3xl font-black text-gray-200'>Work</h3>
                  <ul className='mt-8 space-y-4'>
                    <li className='flex flex-col space-y-1'>
                      <span className='text-2xl font-semibold text-gray-200'>Fullstack developer and UI designer</span>
                      <span className='text-lg font-medium text-gray-400'>Brandbox  <span className='text-white bg-amber-500 rounded-md px-2 text-xs py-0.5 ml-1 -translate-y-px inline-block'>CURRENT</span> </span>
                      <p className='text-gray-500'>Lead web developer and UI designer at a creative agency.</p>
                    </li>
                    <li className='flex flex-col space-y-1'>
                      <span className='text-2xl font-semibold text-gray-200'>Freelancer</span>
                      <span className='text-lg font-medium text-gray-400'>Fiverr / Upwork</span>
                      <p className='text-gray-500'>Game dev and Fullstack Web freelancer</p>
                    </li>
                    <li className='flex flex-col space-y-1'>
                      <span className='text-2xl font-semibold text-gray-200'>Game development Instructor</span>
                      <span className='text-lg font-medium text-gray-400'>Gomycode</span>
                      <p className='text-gray-500'>Game development instructor at a training center</p>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              bounce={0}
              duration={0.5}
              distance={40}
              once={false}
              delay={0.1}
              className="mx-auto mt-16 w-fit"
            >
              <Link href={'/resume'}>
                <a
                  className='relative inline-flex items-center gap-4 text-xl font-medium text-white transition-all duration-300 h-14 bg-rose-600 hover:shadow-xl hover:text-opacity-75 active:scale-95 active:shadow-none active:text-opacity-50 hover:shadow-rose-600/30 rounded-2xl px-7 hover:bg-rose-500'
                >
                  See Full Resume
                  <HiOutlineDocumentText />
                </a>
              </Link>
            </FadeIn>
          </div>
        </section>

        <section className='relative pt-16 bg-gradient-to-b from-gray-900/50 to-black sm:py-32' id='blog'>
          <div className='layout '>
            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <h2 className='text-center text-gray-200'>
                <div className=''>My clients said...</div>
              </h2>
            </FadeIn>

            <FadeIn bounce={0} duration={0.5} distance={40} once={false} className='relative'>

              <div className="relative max-w-screen-xl py-20 mx-auto mt-12 sm:mt-20 bg-gradient-to-b from-gray-900/50 to-transparent rounded-3xl">
                <Swiper
                  slidesPerView={'auto'}
                  className=' w-full h-[320px]'
                >

                  {testimonials.map(({ initials, name, review, thumb, title }) => (<SwiperSlide
                    className={`px-8 sm:px-16 lg:px-32 h-full cursor-grab transition duration-300 w-full flex flex-col  font-semibold text-gray-200`}
                  >
                    <p className='text-xl leading-snug sm:text-3xl'>
                      {review}
                    </p>
                    <div className="flex items-center mt-auto">
                      {thumb ? <Image width={48} height={48} src={thumb.url} placeholder='blur' blurDataURL={thumb.blurUpThumb} className='mr-4 rounded-full ' objectFit={'cover'} alt={name} />
                        :
                        <div className='grid w-12 h-12 mr-4 text-xl font-black text-gray-500 bg-gray-200 rounded-full place-items-center' children={initials} />
                      }
                      <div className="ml-8">
                        <div className="flex flex-col text-lg">
                          {name}
                        </div>
                        <div className="text-sm">
                          {title}
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>))}

                </Swiper>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </Layout >
  );
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const projects = await datoCmsApi.getHomeProjects()
  const allprojects = await datoCmsApi.getAllProjects()
  const testimonials = await datoCmsApi.getAllTestimonials()
  const remaining = allprojects.length - 4;
  return {
    props: {
      projects, testimonials, remaining
    }
  }
}
