import { AppProps } from 'next/app';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import 'swiper/css';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consisten layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
