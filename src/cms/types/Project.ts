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
};

export default Project;
