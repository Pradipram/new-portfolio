import { veoliaLogo } from "../images";

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  companyLogo?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Digital Intern",
    company: "Veolia Water Technology and solutions",
    location: "Bengalore, India",
    duration: "May 2024 - June 2024",
    description: [
      "Developed Python scripts to convert XML design files to JSON format, reducing manual effort and time for data migration.",
      "Created npm packages for website components, ensuring consistent design and speeding up development.",
    ],
    technologies: ["React", "Python", "Json", "XML"],
    companyLogo: veoliaLogo,
  },
];
