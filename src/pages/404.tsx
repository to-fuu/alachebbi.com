import FadeIn from '@/components/Fadein';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Link from 'next/link';
import * as React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';


export default function NotFoundPage() {
  return (
    <Layout headerDark>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-black'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-white'>

            <h1 className='mt-8 text-4xl md:text-6xl text-gray-200'>Nothing here to l⊙﹏⊙k at </h1>


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
                  className='relative inline-flex items-center gap-4 text-xl font-medium transition duration-300 h-14 text-rose-100 hover:shadow-xl hover:shadow-rose-600/20 active:scale-95 group rounded-2xl bg-rose-500 px-7 hover:opacity-80'>
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
