import {
  elitbazzarImage,
  expressJsImage,
  mongoDbImage,
  writeStreamImage,
  codeSnippetsImage,
  ReactIocn,
  nodeJsIcon,
  PrismaImage,
  postgresImage480,
  neonImage,
  nextJsIconWhite480,
  tailwindcssIconWhite384,
  movieRecommendationImage,
  pythonIcon240,
  streamlitIcon480,
  numpyIcon480,
  pandasIcon480,
} from "../images";

export interface ProjectLinkInterface {
  name: string;
  url: string;
}

export interface ProjectSkillInterface {
  src: string;
  name: string;
}

export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  image: string;
  links: ProjectLinkInterface[];
  skills: ProjectSkillInterface[];
}

export type ProjectData = ProjectInterface[];

export const projectData: ProjectData = [
  {
    id: 1,
    name: "EliteBazzar",
    description: "An E-commerce website where you can buy and sell products.",
    image: elitbazzarImage,
    links: [
      {
        name: "Github",
        url: "https://github.com/Pradipram/EliteBazzar-Ecommerce",
      },
      { name: "Live", url: "https://elitebazzar.onrender.com/" },
    ],
    // skills: ["React", "Node.js", "Express", "MongoDB"],
    skills: [
      { src: ReactIocn, name: "React" },
      { src: nodeJsIcon, name: "Node.js" },
      { src: expressJsImage, name: "expressJs" },
      { src: mongoDbImage, name: "MongoDB" },
    ],
  },
  {
    id: 2,
    name: "Write-Stream",
    description: "A blogging website where you can write and read blogs.",
    image: writeStreamImage,
    links: [
      {
        name: "Github",
        url: "https://github.com/Pradipram/BlogApp-writeStream",
      },
      {
        name: "Live",
        url: "https://write-stream.herokuapp.com/",
      },
    ],
    skills: [
      { src: ReactIocn, name: "React" },
      { src: nodeJsIcon, name: "Node.js" },
      { src: expressJsImage, name: "expressJs" },
      { src: mongoDbImage, name: "MongoDB" },
    ],
  },
  {
    id: 3,
    name: "code-snippets",
    description:
      "A web application that allows users to add, edit, and manage code snippets efficiently.",
    image: codeSnippetsImage,
    links: [
      {
        name: "Github",
        url: "https://github.com/Pradipram/code-snippets",
      },
      {
        name: "Live",
        url: "https://code-snippets-pradiprams-projects.vercel.app/",
      },
    ],
    skills: [
      { src: nextJsIconWhite480, name: "Next.js" },
      { src: ReactIocn, name: "React" },
      { src: PrismaImage, name: "Prisma" },
      { src: postgresImage480, name: "PostgreSQL" },
      { src: neonImage, name: "Neon" },
      { src: tailwindcssIconWhite384, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "movie-recommendation-system",
    description: "This is ml model to give you the best five similar movies.",
    image: movieRecommendationImage,
    links: [
      {
        name: "Github",
        url: "https://github.com/Pradipram/movie-recommendation",
      },
      {
        name: "Live",
        url: "https://pradip-movie-recommendation.streamlit.app/",
      },
    ],
    skills: [
      { src: pythonIcon240, name: "Python" },
      { src: streamlitIcon480, name: "Streamlit" },
      { src: numpyIcon480, name: "NumPy" },
      { src: pandasIcon480, name: "Pandas" },
    ],
  },
];
