import {
  elitbazzarImage,
  expressJsImage,
  mongoDbImage,
  writeStreamImage,
  codeSnippetsImage,
  ReactIocn, nodeJsIcon, 
  PrismaImage,
  postgresImage480,
  neonImage,
  nextJsIconWhite480,
  tailwindcssIconWhite384
} from "../images";

export const projectData = [
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
    description: "A web application that allows users to add, edit, and manage code snippets efficiently.",
    image: codeSnippetsImage,
    links: [
      {
        name: "Github",
        url: "https://github.com/Pradipram/code-snippets"
      },
      {
        name: "Live",
        url: "https://code-snippets-pradiprams-projects.vercel.app/"
      }
    ],
    skills: [
      {src: nextJsIconWhite480, name: "Next.js"},
      {src: ReactIocn, name: "React"},
      {src: PrismaImage, name: "Prisma"},
      { src: postgresImage480, name: "PostgreSQL" },
      { src: neonImage, name: "Neon" },
      {
        src: tailwindcssIconWhite384,
        name: "Tailwind CSS"
      }
    ]
  }
];
