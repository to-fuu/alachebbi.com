import { Image } from './common';

type Testimonial = {
  review: string;
  name: string;
  title: string;
  initials: string;
  thumb?: Image;
};

export default Testimonial;
