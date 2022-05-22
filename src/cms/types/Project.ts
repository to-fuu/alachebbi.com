import { Color, Image } from './common';

type Project = {
  description: string;
  liveSite: string;
  repo: string;
  title: string;
  id: string;
  wip: boolean;
  dark: boolean;
  subtitle: string;
  icon: Image;
  image: Image;
  accentColor: Color;
  colorTopLeft: Color;
  colorBottomRight: Color;
  techs: string[];
  projectLinks: {
    __typename: string;
    id: string;
    url: string;
    comingSoon: boolean;
    private: boolean;
  }[];
};

export default Project;
