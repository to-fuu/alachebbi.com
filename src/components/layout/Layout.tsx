import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { Footer } from './footer';
import Header from './Header';

export default function Layout({ children, headerDark, hideNav }: { children: React.ReactNode, headerDark?: boolean, hideNav?: boolean }) {

  return <>
    {!hideNav && <Header headerDark={headerDark} />}
    <div className="bg-black relative">
      <AnimatePresence exitBeforeEnter>
        <motion.div exit={{ y: 80, opacity: 0 }} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ bounce: 0, duration: 0.5 }} >{children}</motion.div>
      </AnimatePresence>
    </div>

    {/* <div className="fixed w-full bottom-0 px-10 pb-4 z-[100] selection:!bg-white selection:text-blue-600 print:hidden">
      <div className="w-full  bg-rose-600 py-3 text-white font-medium rounded-lg text-center shadow-lg shadow-rose-800/40 px-4">
        Thank you for visiting. Please keep in mind this website is still under development.
      </div>
    </div> */}

    <Footer />
  </>;
}
