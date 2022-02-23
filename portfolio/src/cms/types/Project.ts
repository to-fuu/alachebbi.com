type Project = {
  description: string;
  liveSite: string;
  repo: string;
  title: string;
  id: string;
  icon: Image;
  image: Image;
  accentColor: Color;
  colorTopLeft: Color;
  colorBottomRight: Color;
  techs: string[];
};

type Color = {
  hex: string;
};

type Image = {
  url: string;
};

export default Project;
