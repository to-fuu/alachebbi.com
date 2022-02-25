import * as React from 'react';
import { Footer } from './footer';
import Header from './Header';

export default function Layout({ children, headerDark, hideNav }: { children: React.ReactNode, headerDark?: boolean, hideNav?: boolean }) {
  // Put Header or Footer Here
  return <>
    <Header headerDark={headerDark} hideNav={hideNav} />
    {children}

    <div className="fixed w-full bottom-0 px-10 pb-4 z-[100] selection:!bg-white selection:text-blue-600">
      <div className="w-full  bg-blue-600 py-3 text-white font-medium rounded-lg text-center shadow-lg shadow-blue-800/40">
        Thank you for visiting. Please keep in mind this website is still under development.
      </div>
    </div>
    <Footer />
  </>;
}
