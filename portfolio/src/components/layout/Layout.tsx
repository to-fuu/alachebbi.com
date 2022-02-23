import * as React from 'react';
import { Footer } from './footer';
import Header from './Header';

export default function Layout({ children, headerDark, hideNav }: { children: React.ReactNode, headerDark?: boolean, hideNav?: boolean }) {
  // Put Header or Footer Here
  return <>
    <Header headerDark={headerDark} hideNav={hideNav} />
    {children}

    <Footer />
  </>;
}
