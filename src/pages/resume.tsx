import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { FaGithub } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import * as datoCmsApi from '@/cms/dato';
import { GetStaticProps } from 'next';
import Resume from '@/cms/types/Resume';
import Markdown from 'markdown-to-jsx';
import clsxm from '@/lib/clsxm';
import { BiChevronLeft } from 'react-icons/bi';
import Link from 'next/link';
import { SiUpwork } from 'react-icons/si';
import Image from 'next/image';

export default function ResumePage({ resume }: { resume: Resume }) {
  return (
    <Layout hideNav>
      <Seo templateTitle='Resume' />
      <main className=' min-h-screen overflow-x-clip  text-gray-200 py-20 print:py-10 print:mt-0 print:text-xs print:text-gray-700'>
        <div className='layout'>
          <Link href={'/'}>
            <a className='text-3xl block print:hidden w-fit hover:bg-rose-500/20 rounded-full p-2 mb-8 text-opacity-50 hover:text-rose-400 duration-300 text-white'>
              {' '}
              <BiChevronLeft />{' '}
            </a>
          </Link>
          <div className='flex flex-col-reverse lg:flex-row items-cente justify-between'>
            <h2 className='text-5xl print:text-3xl flex items-center '>
              <Image
                width={48}
                height={48}
                src='/images/me.jpg'
                className='inline w-12 h-12 print:w-10 print:h-10 rounded-full mr-4 object-cover'
                alt='Ala Chebbi'
              />
              Ala CHEBBI{' '}
              <span className='animate-blink text-rose-600 font-normal print:hidden'>
                |
              </span>
            </h2>
            <button
              onClick={() => {
                window.print();
              }}
              className='print:hidden mb-8 w-full lg:w-fit lg:mb-0 bg-white text-rose-600 font-medium py-2 px-6 rounded-xl hover:bg-opacity-90 hover:shadow-xl hover:shadow-rose-600/40 duration-300 active:scale-95'
            >
              Download PDF
            </button>
          </div>
          <div className='flex gap-2 mt-4 print:mt-2'>
            <span>Frontend Engineer</span>|
            <a href='mailto:alachebbi.bbx@gmail.com' className='underline '>
              ala@zendex.agency
            </a>
            |
            <a href='https://alachebbi.com' className='underline'>
              alachebbi.com
            </a>
          </div>
          <div className='flex gap-2 mt-4 print:mt-2 underline '>
            <a
              href='/git'
              rel='noreferrer noopener'
              className='flex items-center'
            >
              <FaGithub className='mr-1' /> alachebbi.com/git
            </a>
            <a
              href='/in'
              rel='noreferrer noopener'
              className='flex items-center'
            >
              <ImLinkedin className='mr-1' /> alachebbi.com/in
            </a>
            <a
              href='/up'
              rel='noreferrer noopener'
              className='flex items-center'
            >
              <SiUpwork className='mr-1' /> alachebbi.com/up
            </a>
          </div>
          <p className='max-w-3xl mt-4 print:mt-2 opacity-75'>
            Passionate frontend and game developer always in search for
            interesting challenges and skills. <br /> My speciality lies in my
            fast adaptability to new environments and technologies.
          </p>

          <hr className='my-8 opacity-10 print:my-2' />

          <div className='lg:grid grid-cols-3 print:grid gap-4 pt-8 print:pt-4 '>
            <div className='col-span-2'>
              <h3 className='font-semibold mb-8 print:mb-2 text-3xl print:text-xl'>
                # Experience
              </h3>

              {resume.experiences.map(
                ({ title, content, subtitle, year }, i) => (
                  <div
                    className='mb-6 print:mb-3  prose-a:underline prose-rose'
                    key={i}
                  >
                    <h4>{title}</h4>
                    <h5 className='opacity-75 mb-2'>
                      {subtitle}{' '}
                      {year && (
                        <span className='opacity-75'>
                          <span className='mx-2'>|</span> {year}{' '}
                        </span>
                      )}{' '}
                    </h5>
                    <div className='max-w-2xl print:max-w-max'>
                      {content.map((c, ci) => (
                        <Markdown key={ci}>{c.content}</Markdown>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className='w-full grid grid-cols-2 lg:block print:block'>
              <h3 className='font-semibold mb-8 print:mb-2 text-3xl print:text-xl col-span-2'>
                # Education
              </h3>
              {resume.educations.map(
                ({ title, hideHeader, content, subtitle, twoColumn }, i) => (
                  <div key={i}>
                    {!hideHeader && (
                      <h4 className='mb-2 print:mb-0'>{title}</h4>
                    )}
                    {subtitle && (
                      <h5 className='mb-2 print:mb-1 opacity-75'>{subtitle}</h5>
                    )}
                    <div
                      className={clsxm(
                        'mb-4 print:mb-3 text-gray-300 print:text-gray-600',
                        twoColumn && 'lg:columns-2 print:columns-2'
                      )}
                    >
                      {content.map(({ content, extra }, i) => (
                        <p key={i}>
                          {content}{' '}
                          {extra && (
                            <span>
                              <span className='mx-2 opacity-75'>|</span>{' '}
                              <span className='opacity-75'> {extra}</span>
                            </span>
                          )}{' '}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <hr className='my-8 opacity-10 print:hidden' />

          <div className='mt-8 print:mt-4 underline flex gap-2 items-center text-sm print:text-xs'>
            <a href='mailto:ala@zendex.agency' className='underline'>
              ala@zendex.agency
            </a>{' '}
            | <a href='tel:+21650654333'>(+216) 50 654 333</a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resume = await datoCmsApi.getResume();
  return {
    props: {
      resume,
    },
    revalidate: 10,
  };
};
