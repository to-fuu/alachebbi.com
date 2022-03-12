import * as datoCmsApi from '@/cms/dato';
import Project from "@/cms/types/Project";
import FadeIn from "@/components/Fadein";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import Tooltip from '@/components/tooltip';
import { ProjectWindow } from "@/components/windows/projectwindow";
import { GetStaticProps } from "next";
import { HiChevronDoubleRight } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import { SiAndroidstudio, SiDatocms, SiFlutter, SiGraphql, SiMysql, SiNextdotjs, SiNodedotjs, SiPaypal, SiReact, SiTailwindcss, SiTypescript, SiWindows, SiWordpress } from "react-icons/si";

interface props {
    projects: Project[]
}

export default function Projects({ projects }: props) {
    return <Layout hideNav headerDark>
        <Seo templateTitle="Projects 🏷️" />

        <section
            className='layout relative mb-20 flex max-w-screen-lg scroll-mt-20 flex-col items-center pt-40 pb-12 text-center dark:bg-black'
        >
            <FadeIn bounce={0} duration={0.5} distance={40} >
                <h1 className='text-gray-600 dark:text-gray-200'>
                    Projects
                </h1>
            </FadeIn>

        </section>

        {projects.map(({ title, description, id, icon, liveSite, repo, image, wip, colorTopLeft, accentColor, techs }) => (
            <FadeIn key={`project_${id}`} bounce={0} duration={0.5} distance={20} once={false} startScale={1} className="mb-10">
                <section className='transition-all duration-300 px-4 md:px-0 overflow-clip max-w-screen-xl mx-auto relative xl:rounded-3xl pt-10 md:pt-20 before:absolute before:inset-0 before:hue-rotate-0 before:bg-cover before:opacity-100 before:mix-blend-overlay' id='projects' style={{ backgroundImage: `linear-gradient(to bottom right, ${colorTopLeft?.hex}, ${colorTopLeft?.hex})` }}>
                    {/* <div className='absolute inset-0 bg-[url(/images/noise.webp)] bg-repeat' /> */}
                    <div className='layout relative max-w-screen-lg'>
                        {wip && <div className="bg-white text-black w-fit px-2 rounded-md mb-2">
                            WORK IN PROGRESS
                        </div>}
                        <h2 className='text-gray-200'>
                            <div className=''>{title}</div>
                        </h2>
                        <p className="text-xl mt-8 max-w-md text-white/80">{description}</p>
                        <div className='mt-8 flex w-full items-center gap-4 text-3xl text-gray-200'>
                            {mapTechs(techs)}
                        </div>
                        <div className='mt-12 flex items-center '>
                            {liveSite ?
                                <a href={liveSite} target={'_blank'} rel='noreferrer noopener' className='group  active:scale-95 mr-4 relative inline-flex h-16 items-center gap-4 rounded-2xl border-t bg-gray-50/75 px-7 text-xl font-medium shadow transition-all duration-300 hover:gap-6 hover:bg-gray-50' style={{ color: accentColor?.hex }}>
                                    Live Website
                                    <HiChevronDoubleRight />
                                </a>
                                :
                                <button disabled className='h-16 items-center rounded-2xl  bg-gray-50/50  px-7 text-xl font-' style={{ color: accentColor?.hex }}>
                                    Coming Soon
                                </button>
                            }

                            {repo && <a href={repo} className='group relative inline-flex h-16 items-center gap-4 rounded-2xl border-t bg-gray-50/75 px-7 text-xl font-medium shadow transition-all duration-300 hover:gap-6 hover:bg-gray-50' style={{ color: accentColor?.hex }}>
                                View Code
                                <ImGithub />
                            </a>}
                        </div>
                    </div>
                    <div className='layout max-w-screen-lg mt-12'>
                        <ProjectWindow
                            hideButtons
                            className={`w-full rounded-b-none`}
                            title={title}
                            icon={<img src={icon?.url} alt={title + '_icon'} className="w-5 h-5" />}
                            url='coffeecupindustries.com'
                            img={image?.url}
                        />
                    </div>
                </section>
            </FadeIn>
        ))}

        <FadeIn bounce={0} duration={0.5} distance={20} once={false} startScale={1} >
            <div className='text-center mx-auto text-3xl font-bold mt-32 text-gray-700 dark:text-gray-500 pb-20'>And more coming soon...</div>
        </FadeIn>

    </Layout>
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    const projects = await datoCmsApi.getAllProjects()
    return {
        props: {
            projects
        },
        revalidate: 10, // In seconds
    }
}

const mapTechs = (techs: string[]) => {
    return techs.map((tech) => {
        switch (tech) {
            case "next": return <Tooltip content='Next.js'>
                <SiNextdotjs title='Next.js' />
            </Tooltip>
            case "tailwind": return <Tooltip content="TailwindCSS">
                <SiTailwindcss />
            </Tooltip>
            case "mysql": return <Tooltip content="MySQL">
                <SiMysql className='text-4xl' />
            </Tooltip>
            case "paypal": return <Tooltip content="Paypal">
                <SiPaypal />
            </Tooltip>
            case "dato": return <Tooltip content="Dato CMS">
                <SiDatocms />
            </Tooltip>
            case "node": return <Tooltip content="Node.js">
                <SiNodedotjs />
            </Tooltip>
            case "graphql": return <Tooltip content="GraphQL">
                <SiGraphql />
            </Tooltip>
            case "wordpress": return <Tooltip content="Wordpress">
                <SiWordpress />
            </Tooltip>
            case "flutter": return <Tooltip content="Flutter">
                <SiFlutter />
            </Tooltip>
            case "winui": return <Tooltip content="WinUI">
                <SiWindows />
            </Tooltip>
            case "uwp": return <Tooltip content="Universal Windows Platform">
                <SiWindows />
            </Tooltip>
            case "winforms": return <Tooltip content="Windows Forms">
                <SiWindows />
            </Tooltip>
            case "android studio": return <Tooltip content="Android Studio">
                <SiAndroidstudio />
            </Tooltip>
            case "react native": return <Tooltip content="React Native">
                <SiReact />
            </Tooltip>
            case "react": return <Tooltip content="React">
                <SiReact />
            </Tooltip>
            case "typescript": return <Tooltip content="Typescript">
                <SiTypescript />
            </Tooltip>
        }
    })
}

// techs: "next","tailwind","strapi","graphql","mysql","dato","paypal","wordpress","flutter","windows","android studio","rnative","node"