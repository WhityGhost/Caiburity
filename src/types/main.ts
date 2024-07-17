type service = {
  desc: string;
  name: string;
  lottieImg?: string;
  rowSpan?: number;
  colSpan?: number;
};

type services = {
  shortDesc: string;
  main: service[];
};

type project = {
  name: string;
  image: string;
  techstack: string;
  category: string;
  links: {
    visit: string;
    code: string;
    video: string;
  };
};

type experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  desc: string[];
};

type education = {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
};

type main = {
  title: string;
  bio: string;
  shortDesc: string;
  statistic: statistic[];
};

type about = {
  titles: string[];
  about: string;
  resumeUrl: string;
  callUrl: string;
  features: feature[];
};

type feature = {
  title: string;
  body: string;
};

type social = {
  name: string;
  icon: string;
  link: string;
};

type allData = {
  main: main;
  about: about;
  services: services;
  projects: project[];
  experiences: experience[];
  educations: education[];
  socials: social[];
  callToAction: callToAction;
};

type callToAction = {
  shortDesc: string;
  desc: string;
  statistic: statistic[];
};

type statistic = {
  title: string;
  number: number;
};

export type {
  allData,
  main,
  about,
  service,
  services,
  project,
  callToAction,
  statistic,
  experience,
  education,
  social,
};
