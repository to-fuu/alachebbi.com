import FadeIn from '@/components/Fadein';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Link from 'next/link';
import * as React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { RiAlarmWarningFill } from 'react-icons/ri';


export default function NotFoundPage() {
  return (
    <Layout headerDark>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>

            <h1 className='mt-8 text-4xl md:text-6xl text-slate-800'>Nothing here to l⊙﹏⊙k at </h1>


            <FadeIn
              bounce={0}
              duration={0.5}
              distance={40}
              once={false}
              delay={0.1}
              className="mx-auto mt-16 w-fit"
            >
              <Link href='/'>
                <a
                  className='relative inline-flex items-center h-16 gap-4 text-xl font-medium text-white transition-all duration-300 bg-blue-600 border-t shadow rounded-2xl border-t-blue-400 px-7 opacity-80 hover:opacity-100' >
                  Show me the way
                  <HiArrowNarrowLeft />
                </a>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
    </Layout>
  );
}
