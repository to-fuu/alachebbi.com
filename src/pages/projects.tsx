import * as datoCmsApi from '@/cms/dato';
import Project from "@/cms/types/Project";
import { AppStoreButton } from '@/components/buttons/AppStoreButton';
import { GithubButton } from '@/components/buttons/GithubButton';
import { LiveSiteButton } from '@/components/buttons/LiveSiteButton';
import { PlayStoreButton } from '@/components/buttons/PlayStoreButton';
import { YoutubeButton } from '@/components/buttons/YoutubeButton';
import FadeIn from "@/components/Fadein";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import Tooltip from '@/components/tooltip';
import { GetStaticProps, NextPage } from "next";
import Image from 'next/image';
import { FaElementor } from 'react-icons/fa';
import { SiAndroidstudio, SiCsharp, SiDatocms, SiDotnet, SiFlutter, SiGraphql, SiJava, SiMysql, SiNextdotjs, SiNodedotjs, SiPaypal, SiReact, SiTailwindcss, SiTypescript, SiUnity, SiWindows, SiWordpress } from "react-icons/si";
interface props {
    projects: Project[]
}

const Projects: NextPage<props> = ({ projects }) => {
    return <Layout >
        <Seo templateTitle="Projects 🏷️" />
        <div className={`bg-black absolute inset-0 h-screen  before:absolute before:inset-0 before:animate-hue-rotate before:bg-[url(/images/mesh-1.webp)] before:bg-cover before:opacity-100 before:mix-blend-screen
        after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black after:absolute after:w-full after:h-screen`}></div>

        <section className='overflow-hidden pt-40 pb-20 relative bg-gradient-to-br  text-gray-200 selection:bg-white selection:text-gray-900  '>
            <div className='relative flex flex-col w-full max-w-screen-xl px-10 text-left layout  xl:px-0'>
                <FadeIn className='w-full' startScale={1} bounce={0.1} type={'spring'} duration={0.75}>
                    <h1 className='group flex flex-col leading-[1.1] justify-center items-center mt-24 '>
                        Projects
                    </h1>
                </FadeIn>

                {/* <div className="grid grid-cols-5 layout max-w-2xl mt-24 text-center gap-8">
                    <button className="rounded-xl bg-white/10 py-2 hover:bg-white/20">All</button>
                    <button className="rounded-xl bg-white/10 py-2 hover:bg-blue-500/20">Web</button>
                    <button className="rounded-xl bg-white/10 py-2">Game</button>
                    <button className="rounded-xl bg-white/10 py-2">Desktop</button>
                    <button className="rounded-xl bg-white/10 py-2">Mobile</button>
                </div> */}
            </div>
        </section>

        <div className="max-w-screen-lg gap-10 mx-auto">
            {projects.map(({ title, description, id, dark, projectLinks, liveSite, icon, image, wip, colorTopLeft, accentColor, techs, subtitle }) => (
                <FadeIn key={`project_${id}`} bounce={0} duration={0.5} distance={20} once={false} startScale={1} className={`mb-10 ${dark && 'dark'}`}>
                    <section className='relative h-full max-w-screen-xl gap-12 px-12 pt-10 mx-auto transition-all duration-300 overflow-hidden md:flex xl:rounded-3xl md:pt-10 before:absolute before:inset-0 before:hue-rotate-0 before:bg-cover before:opacity-100 before:mix-blend-overlay ' id='projects' style={{ backgroundColor: dark ? '#F9FAFB' : colorTopLeft.hex }}>
                        <div className='relative flex-1 max-w-screen-lg mb-12 layout'>
                            {wip && <div className="px-2 mb-2 text-black bg-white dark:bg-black dark:text-white rounded-md w-fit">
                                WORK IN PROGRESS
                            </div>}
                            <div className='mb-2 text-lg text-white opacity-75 dark:text-black'>{subtitle}</div>
                            <h2 className='max-w-xl text-4xl text-gray-200 dark:text-gray-700'>
                                {title}
                            </h2>
                            <p className="max-w-md mt-8 text-lg text-white/80 dark:text-black/80">{description}</p>
                            <div className='flex items-center w-full gap-4 mt-8 text-2xl text-gray-200 dark:text-gray-700'>
                                {mapTechs(techs)}
                            </div>
                            <div className='flex flex-wrap items-center justify-center gap-4 mt-12'>


                                {projectLinks.map(({ __typename, url, comingSoon, private: isPrivate }, i) => {

                                    switch (__typename) {
                                        case 'PlayStoreButtonRecord': return <PlayStoreButton key={i} url={url} comingSoon={comingSoon} accent={dark ? 'white' : 'black'} />
                                        case 'AppStoreButtonRecord': return <AppStoreButton key={i} url={url} comingSoon={comingSoon} accent={dark ? 'white' : 'black'} />
                                        case 'GithubButtonRecord': return <GithubButton key={i} url={url} comingSoon={comingSoon} private={isPrivate} accent={dark ? 'white' : 'black'} />
                                        case 'VisitButtonRecord': return <LiveSiteButton key={i} url={url} comingSoon={comingSoon} icon={icon.url} accent={dark ? 'white' : 'black'} />
                                        case 'YoutubeButtonRecord': return <YoutubeButton key={i} url={url} accent={dark ? 'white' : 'black'} />
                                    }

                                    return <></>
                                }
                                )}


                            </div>
                        </div>
                        <div className='flex-1 h-full max-h-[300px] flex'>
                            <div className="rounded-t-2xl md:absolute shadow-xl object-cover mt-auto overflow-hidden w-full h-full ">
                                <Image src={image.url} alt={image.alt} placeholder={'blur'} blurDataURL={image.blurUpThumb} width={image.width} height={image.height} />
                            </div>

                        </div>
                    </section>
                </FadeIn>
            ))}
        </div>

        <FadeIn bounce={0} duration={0.5} distance={20} once={false} startScale={1} >
            <div className='pb-20 mx-auto mt-32 text-3xl font-bold text-center text-gray-400'>And many more to come!</div>
        </FadeIn>

    </Layout>
}
export default Projects

export const getStaticProps: GetStaticProps = async (ctx) => {
    const projects = await datoCmsApi.getAllProjects()
    return {
        props: {
            projects
        }, revalidate: 10
    }
}

export const mapTechs = (techs: string[]) => {
    return techs.map((tech, i) => {
        switch (tech) {
            case "next": return <Tooltip key={i} content='Next.js'>
                <SiNextdotjs title='Next.js' />
            </Tooltip>
            case "tailwind": return <Tooltip key={i} content="TailwindCSS">
                <SiTailwindcss />
            </Tooltip>
            case "mysql": return <Tooltip key={i} content="MySQL">
                <SiMysql className='text-4xl' />
            </Tooltip>
            case "paypal": return <Tooltip key={i} content="Paypal">
                <SiPaypal />
            </Tooltip>
            case "dato": return <Tooltip key={i} content="Dato CMS">
                <SiDatocms />
            </Tooltip>
            case "node": return <Tooltip key={i} content="Node.js">
                <SiNodedotjs />
            </Tooltip>
            case "graphql": return <Tooltip key={i} content="GraphQL">
                <SiGraphql />
            </Tooltip>
            case "wordpress": return <Tooltip key={i} content="Wordpress">
                <SiWordpress />
            </Tooltip>
            case "flutter": return <Tooltip key={i} content="Flutter">
                <SiFlutter />
            </Tooltip>
            case "winui": return <Tooltip key={i} content="WinUI">
                <SiWindows />
            </Tooltip>
            case "uwp": return <Tooltip key={i} content="Universal Windows Platform">
                <SiWindows />
            </Tooltip>
            case "winforms": return <Tooltip key={i} content="Windows Forms">
                <SiWindows />
            </Tooltip>
            case "android studio": return <Tooltip key={i} content="Android Studio">
                <SiAndroidstudio />
            </Tooltip>
            case "react native": return <Tooltip key={i} content="React Native">
                <SiReact />
            </Tooltip>
            case "react": return <Tooltip key={i} content="React">
                <SiReact />
            </Tooltip>
            case "typescript": return <Tooltip key={i} content="Typescript">
                <SiTypescript />
            </Tooltip>
            case ".net": return <Tooltip key={i} content=".NET">
                <SiDotnet />
            </Tooltip>
            case "c#": return <Tooltip key={i} content="C#">
                <SiCsharp />
            </Tooltip>
            case "unity": return <Tooltip key={i} content="Unity3D">
                <SiUnity />
            </Tooltip>
            case "elementor": return <Tooltip key={i} content="Elementor">
                <FaElementor />
            </Tooltip>
            case "java": return <Tooltip key={i} content="Java">
                <SiJava />
            </Tooltip>
        }
    })
}

// techs: "next","tailwind","strapi","graphql","mysql","dato","paypal","wordpress","flutter","windows","android studio","rnative","node"