import { AppProps } from 'next/app';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import '@/styles/globals.css';
import 'swiper/css';
import { AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps }: AppProps) {
  return <AnimatePresence exitBeforeEnter initial={false}>
    <Component {...pageProps} />
  </AnimatePresence>;
}

export default MyApp;
