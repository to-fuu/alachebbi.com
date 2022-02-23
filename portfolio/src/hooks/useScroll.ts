import { useEffect, useState } from 'react';

export default () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  const scrollHandler = () => {
    setScroll(window.scrollY);
  };
  return scroll;
};
