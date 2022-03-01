import * as datoCmsApi from '@/cms/dato';
import Project from '@/cms/types/Project';
import { DetailsGroup } from '@/components/DetailsGroup';
import FadeIn from '@/components/Fadein';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tooltip from '@/components/tooltip';
import { HeaderWindow } from '@/components/windows/headerwindow';
import { ProjectWindow } from '@/components/windows/projectwindow';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import * as React from 'react';
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronDoubleDown,
  HiChevronDoubleRight, HiOutlineDocumentText
} from 'react-icons/hi';
import { RiCopperDiamondFill } from 'react-icons/ri';
import {
  SiAlpinedotjs,
  SiAndroidstudio,
  SiCsharp,
  SiCss3,
  SiDart,
  SiDatocms,
  SiDotnet,
  SiFlutter,
  SiGraphql,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiWordpress
} from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
import Testimonial from '@/cms/types/Testimonial';
import Image from 'next/image';
SwiperCore.use([Navigation])
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
interface props {
  projects: Project[]
  testimonials: Testimonial[]
}
export default function HomePage({ projects, testimonials }: props) {
  const s1Ref = React.useRef<HTMLDivElement>(null);
  const discRef = React.useRef<HTMLButtonElement>(null);
  const cvRef = React.useRef<HTMLAnchorElement>(null);

  const frontend = React.useRef<HTMLDivElement>(null);
  const game = React.useRef<HTMLDivElement>(null);
  const software = React.useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = React.useState(0);
  const [selectedSlide, setSelectedSlide] = React.useState(0);

  const projectsPrev = React.useRef<HTMLButtonElement>(null)
  const projectsNext = React.useRef<HTMLButtonElement>(null)

  return (
    <Layout headerDark={false}>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='bg-white max-w-[100vw] overflow-x-clip '>
        <section className='relative min-h-[90vh] overflow-y-clip bg-gradient-to-br from-blue-600 to-green-400 text-gray-200 selection:bg-white selection:text-gray-900 before:absolute before:inset-0 before:animate-hue-rotate before:bg-[url(/images/mesh-1.webp)] before:bg-cover before:opacity-100 before:mix-blend-overlay '>
          <div className='absolute inset-0 bg-[url(/images/noise.webp)] bg-repeat ' />
          <div className='layout relative  max-w-screen-xl flex w-full flex-col pt-40 text-left px-10 xl:px-0'>
            <FadeIn className='w-full' startScale={1} bounce={0.1} type={'spring'} duration={0.75}>
              <h1 className='group mt-4 flex flex-col leading-[1.1]  '>
                <div className='mb-2 font-bold opacity-60  transition duration-300 [text-shadow:2px_2px_#00000033]'>
                  Howdy 🙌
                </div>
                <div>
                  I'm Ala, </div>
                <div
                  className={`mr-auto !ml-0 flex w-min max-w-screen-xl select-none gap-10 overflow-x-visible !px-0 transition duration-300`}
                  style={{
                    transform: `translateX(${selectedSkill === 0
                      ? 0
                      : selectedSkill === 1
                        ? -(frontend.current!.scrollWidth + 40)
                        : -(
                          frontend.current!.scrollWidth +
                          game.current!.scrollWidth +
                          80
                        )
                      }px)`,
                  }}
                >
                  <div
                    onClick={() => {
                      setSelectedSkill(0);
                    }}
                    ref={frontend}
                    className={`cursor-pointer whitespace-nowrap transition duration-300 ${selectedSkill === 0
                      ? 'opacity-100'
                      : 'opacity-25 hover:opacity-50'
                      }`}
                  >
                    Frontend Developer
                  </div>
                  <div
                    onClick={() => {
                      setSelectedSkill(1);
                    }}
                    ref={game}
                    className={`cursor-pointer whitespace-nowrap transition duration-300 ${selectedSkill === 1
                      ? 'opacity-100'
                      : 'opacity-25 hover:opacity-50'
                      }`}
                  >
                    Game Developer
                  </div>
                  <div
                    onClick={() => {
                      setSelectedSkill(2);
                    }}
                    ref={software}
                    className={`cursor-pointer whitespace-nowrap transition duration-300 ${selectedSkill === 2
                      ? 'opacity-100'
                      : 'opacity-25 hover:opacity-50'
                      }`}
                  >
                    Software Engineer
                  </div>
                </div>
              </h1>
            </FadeIn>

            <FadeIn className='w-full' startScale={1} bounce={0.1} type={'spring'} duration={0.75} delay={0.25}>
              <div className='mt-12 flex gap-4'>
                <button
                  onClick={() => {
                    s1Ref.current!.scrollIntoView({ behavior: 'smooth' });
                  }}
                  ref={discRef}
                  className='cursor-down group relative inline-flex h-16 items-center gap-4 rounded-2xl bg-white/90 px-7 text-xl font-medium  text-slate-700 shadow transition duration-300 hover:opacity-80'
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
                  className='cursor-newtab relative inline-flex  h-16 select-none items-center gap-4 rounded-2xl bg-white bg-opacity-50 px-7 text-xl font-medium text-slate-700/70 shadow transition duration-300 hover:bg-opacity-100 hover:text-blue-800'
                >
                  Get Resume
                  <HiOutlineDocumentText />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className='relative mt-12 flex '>
            <FadeIn className='w-full' startScale={0.9} bounce={0} duration={0.5} delay={0.35}>
              <HeaderWindow
                className='-mb-32'
                tab1='Windows 11 insp...'
                tab1Icon={<img src='https://www.datocms-assets.com/60949/1645555808-fluwind_shadow.svg' className='w-4 h-4' />}
                tab2='Ala Chebbi Po...'
                tab2Icon={<img src='https://www.datocms-assets.com/60949/1645556279-favico.svg' className='w-4 h-4' />}
                url='fluwind.alachebbi.com'
                img='https://www.datocms-assets.com/60949/1645565861-fluent.jpeg'
              />
            </FadeIn>

            <FadeIn className='w-full absolute' startScale={0.9} bounce={0} duration={0.5} delay={0.4}>
              <HeaderWindow
                className='absolute left-0 right-0 -mb-32 mr-52 -translate-x-full scale-75 opacity-50 hidden xl:block'
                tab1='Emira Tlili port...'
                tab1Icon={
                  <img
                    src='https://www.datocms-assets.com/60949/1645552293-etfavicon.svg'
                    className='h-4 w-4'
                    alt=''
                  />
                }
                tab2='Coffee Cup Ind...'
                tab2Icon={<RiCopperDiamondFill />}
                url='emiratlili.com'
                img='https://www.datocms-assets.com/60949/1645552277-etlili.jpeg'
              />
            </FadeIn>

            <FadeIn className='w-full absolute' startScale={0.9} bounce={0} duration={0.5} delay={0.4}>
              <HeaderWindow
                className='absolute left-0 right-0 -mb-32 ml-52 translate-x-full scale-75 opacity-50 hidden xl:block'
                tab1='Postuler at jo..'
                tab1Icon={
                  <img
                    src='https://www.datocms-assets.com/60949/1645555012-heyvast-icon.svg'
                    className='h-4 w-4'
                    alt=''
                  />
                }
                tab2='Cosi.tn'
                tab2Icon={<RiCopperDiamondFill />}
                url='jobs.heyvast.tn'
                img='https://www.datocms-assets.com/60949/1645554989-heyjobs.png'
              />
            </FadeIn>
          </div>
        </section>

        <section
          className='layout relative flex max-w-screen-lg scroll-mt-20 flex-col items-center pt-40 pb-12 text-center'
          id='about'
          ref={s1Ref}
        >
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <h2 className='text-slate-600'>
              Passionate Frontend and <br /> Game developer
            </h2>
          </FadeIn>
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <p className='mt-8 max-w-xl text-xl text-slate-600 mb-4'>
              Welcome to my portfolio! I'm Ala, a passionate programmer, gamer, artist and UI aspiring designer. I currently work as a fullstack web and mobile developer at <a href="https://branbox.tn" target={'_blank'} rel='noreferrer' className='underline cursor-newtab text-yellow-600'>Brandbox</a>.

              <br /> My favorite and most used frameworks are <em className='font-medium'>Next.js</em> and <em className='font-medium'>TailwindCSS</em> for frontend development and <em className='font-medium'>Unity3D</em> for game development.
            </p>
          </FadeIn>

          <FadeIn
            bounce={0}
            duration={0.5}
            distance={40}
            once={false}
            className=' w-full max-w-screen-sm'
          >

            <div className='mt-8 flex w-full justify-center items-center gap-12 text-3xl text-gray-800 flex-wrap'>

              <Tooltip content="Javascript">
                <SiJavascript className='text-yellow-600' />
              </Tooltip>
              <Tooltip content="Typescript">
                <SiTypescript className='text-sky-600' />
              </Tooltip>
              <Tooltip content="C sharp">
                <SiCsharp className='text-purple-600' />
              </Tooltip>
              <Tooltip content="Java">
                <SiJava className='text-red-600' />
              </Tooltip>


              <Tooltip content="HTML5">
                <SiHtml5 className='text-red-700' />
              </Tooltip>

              <Tooltip content="CSS3">
                <SiCss3 className='text-blue-600' />
              </Tooltip>

            </div>

          </FadeIn>

          <FadeIn
            bounce={0}
            duration={0.6}
            distance={40}
            once={false}
            className=' w-full max-w-screen-sm'>
            <div className='mt-12 flex w-full justify-center items-center gap-12 text-3xl text-gray-800 flex-wrap'>
              <Tooltip content='Next.js'>
                <SiNextdotjs />
              </Tooltip>
              <Tooltip content="React">
                <SiReact className='text-sky-600' />
              </Tooltip>
              <Tooltip content="Alpine.js">
                <SiAlpinedotjs className='text-gray-600' />
              </Tooltip>
              <Tooltip content="TailwindCSS">
                <SiTailwindcss className='text-emerald-500' />
              </Tooltip>

              <Tooltip content="MySQL">
                <SiMysql className='text-4xl text-orange-700' />
              </Tooltip>
              <Tooltip content="Grapql">
                <SiGraphql className='text-pink-600' />
              </Tooltip>
              <Tooltip content="Android Studio">
                <SiAndroidstudio
                  className='text-green-600'
                  title='Android Studio'
                />
              </Tooltip>

              <Tooltip content="Strapi">
                <SiStrapi className='text-indigo-600' />
              </Tooltip>
              <Tooltip content="Dato CMS">
                <SiDatocms className='text-orange-600' />
              </Tooltip>
              <Tooltip content="Wordpress">
                <SiWordpress className='text-black' />
              </Tooltip>
              <Tooltip content="Unity3D">
                <SiUnity className='text-gray-700' />
              </Tooltip>

            </div>
          </FadeIn>

          <div className="flex mt-12 gap-4">
            {/* <FadeIn
              bounce={0}
              duration={0.5}
              distance={40}
              once={false}
              delay={0.1}
            >
              <button className='relative  inline-flex h-16 items-center gap-4 rounded-2xl border-t border-t-blue-400 bg-blue-600 px-7 text-xl font-medium text-white opacity-80 shadow transition-all duration-300 hover:gap-6 hover:opacity-100'>
                Learn more
                <HiChevronDoubleRight />
              </button>
            </FadeIn> */}
            <FadeIn
              bounce={0}
              duration={0.5}
              distance={40}
              once={false}
              delay={0.1}
            >
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
                className='relative  inline-flex h-16 items-center gap-4 rounded-2xl border-t border-t-blue-400 bg-blue-600 px-7 text-xl font-medium text-white opacity-80 shadow transition-all duration-300 hover:opacity-100'
              >
                Get Resume
                <HiOutlineDocumentText />
              </a>
            </FadeIn>
          </div>

          <FadeIn
            className='w-full mt-4 hidden'
            bounce={0}
            duration={0.5}
            distance={40}
            once={false}
          >
            <div className='mt-8 w-full space-y-4'>
              <DetailsGroup
                items={[
                  { title: 'Frontend Development', content: 'lorem' },
                  { title: 'Game Development', content: 'lorem' },
                  { title: 'App Development', content: 'lorem' },
                ]}
              />
            </div>
          </FadeIn>
        </section>

        <FadeIn bounce={0} duration={0.75} distance={40} once={false}>
          <section className='pb-20 pt-10 scroll-mt-40' id='projects'>
            <div style={{ backgroundImage: `linear-gradient(to bottom right, ${projects[selectedSlide].colorTopLeft?.hex}, ${projects[selectedSlide].colorBottomRight?.hex})` }} className='transition-all duration-300 relative mx-auto max-w-screen-xl overflow-clip xl:rounded-3xl pt-20 before:absolute before:inset-0 before:animate-hue-rotate before:bg-[url(/images/mesh-1.webp)] before:bg-cover before:opacity-100 before:mix-blend-overlay'>
              <div className='absolute inset-0 bg-[url(/images/noise.webp)] bg-repeat' />
              <div className='layout relative max-w-screen-lg'>
                <h2 className='text-slate-200'>
                  <div className=''>Latest projects</div>
                </h2>
                <div className='mt-12 flex items-center '>
                  <Link href={'/projects'} passHref>
                    <a className='group relative inline-flex h-16 items-center gap-4 rounded-2xl border-t bg-slate-50/75 px-7 text-xl font-medium shadow transition-all duration-300 hover:gap-6 hover:bg-slate-50' style={{ color: projects[selectedSlide].accentColor.hex }}>
                      Browse all
                      <HiChevronDoubleRight />
                    </a>
                  </Link>
                  <button ref={projectsPrev} className='disabled:bg-white/80 disabled:opacity-50 ml-auto mr-4 rounded-full border-t bg-white/80 p-3 text-blue-700 shadow backdrop-blur-sm transition duration-300 hover:bg-white'>
                    <HiArrowLeft />
                  </button>
                  <button ref={projectsNext} className='disabled:bg-white/80 disabled:opacity-50 rounded-full border-t bg-white/80 p-3 text-blue-700 shadow backdrop-blur-sm transition duration-300 hover:bg-white'>
                    <HiArrowRight />
                  </button>
                </div>
              </div>
              <div className='layout max-w-screen-lg'>
                <Swiper

                  navigation={{
                    prevEl: projectsPrev.current,
                    nextEl: projectsNext.current,
                  }}
                  onBeforeInit={(swiper) => {
                    //@ts-expect-error
                    swiper.params.navigation.prevEl = projectsPrev.current;
                    //@ts-expect-error
                    swiper.params.navigation.nextEl = projectsNext.current;
                  }}
                  spaceBetween={40}
                  slidesPerView={'auto'}
                  centeredSlides={true}
                  className='mt-8 w-full !overflow-visible'
                  onSlideChange={(swiper) => setSelectedSlide(swiper.activeIndex)}
                  onSwiper={(swiper) => console.log(swiper)}
                >

                  {projects.map(({ title, id, icon, liveSite, image }, index) => (

                    <SwiperSlide key={`project_${id}`}
                      className={`cursor-grab overflow-visible transition duration-300 w-full `}
                    >
                      <ProjectWindow
                        isPrivate
                        className={`w-full rounded-b-none ${selectedSlide !== index ? 'opacity-75 translate-y-4' : '-translate-y-0'}`}
                        title={title}
                        icon={<img src={icon.url} className='w-4 h-4' />}
                        url={liveSite}
                        img={image.url}
                      />
                    </SwiperSlide>
                  ))}




                </Swiper>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className='bg-gradient-to-b from-blue-50 to-white pt-16 sm:py-32' id='blog'>
          <div className='layout'>
            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <h2 className='text-slate-600 text-center'>
                <div className=''>What my clients said</div>
              </h2>
            </FadeIn>



            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <div className="bg-gradient-to-b from-white to-transparent max-w-screen-xl mx-auto rounded-xl py-20 mt-20 relative">
                <Swiper
                  slidesPerView={'auto'}
                  className=' w-full h-[320px]'
                  onSlideChange={(swiper) => setSelectedSlide(swiper.activeIndex)}
                >

                  {testimonials.map(({ initials, name, review, thumb, title }) => (<SwiperSlide
                    className={`px-8 sm:px-16 lg:px-32 h-full cursor-grab transition duration-300 w-full flex flex-col  font-semibold text-gray-800`}
                  >
                    <p className='text-xl sm:text-3xl leading-snug'>
                      {review}
                    </p>
                    <div className="flex items-center mt-auto">
                      {thumb ? <Image width={48} height={48} src={thumb.url} className=' mr-4 rounded-full' alt="" />
                        :
                        <div className='w-12 h-12 mr-4 rounded-full bg-gray-200 grid place-items-center font-black text-xl text-gray-500' children={'C'} />
                      }
                      <div className="">
                        <div className="text-lg flex flex-col">
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
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const projects = await datoCmsApi.getHomeProjects()
  const testimonials = await datoCmsApi.getAllTestimonials()

  return {
    props: {
      projects, testimonials
    }
  }
}