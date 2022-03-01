import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';

type IProps = {
  children: ReactNode;
  duration?: number;
  type?: string;
  bounce?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  distance?: number;
  startScale?: number;
  opacity?: number;
  style?: React.CSSProperties;
};

const FadeIn = ({
  children,
  duration = 1.25,
  type = 'ease',
  bounce = 0.5,
  delay = 0.0,
  once = true,
  startScale = 0.8,
  className = '',
  distance = 20,
  opacity = 0,
  style,
}: IProps): JSX.Element => {
  return (
    <div className={className} style={style}>
      <InView triggerOnce={once} initialInView={false} rootMargin='-60px'>
        {({ inView, ref }) => (
          <div ref={ref} className='h-full'>
            <motion.div
              className='h-full will-change-[transform,opacity]'
              transition={{ duration, type, bounce, delay: delay }}
              initial={{ y: distance, scale: startScale, opacity: opacity }}
              animate={{
                y: inView ? 0 : distance,
                opacity: inView ? 1 : opacity,
                scale: inView ? 1 : startScale,
              }}
            >
              {children}
            </motion.div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default FadeIn;
