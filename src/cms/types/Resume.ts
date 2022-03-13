type Resume = {
  experiences: Array<{
    title: string;
    subtitle: string;
    year: string;
    content: Array<{ content: string; extra: string }>;
  }>;
  educations: Array<{
    title: string;
    subtitle: string;
    twoColumn?: boolean;
    hideHeader?: boolean;
    content: Array<{ content: string; extra: string }>;
  }>;
  excerpt: string;
};

export default Resume;
