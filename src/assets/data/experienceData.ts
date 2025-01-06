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
    duration: "May 2024 - June -2024",
    description: [
      "Developed Python scripts to convert XML design files from the desktop application to JSON format for the cloud application, significantly reducing the manual effort and time required for data migration. ",
      "Created npm packages for website components, including headers, footers, and icons, ensuring consistent design and functionality across the application and speeding up the development process.",
    ],
    technologies: ["React", "Python", "Json", "XML"],
    companyLogo: veoliaLogo,
  },
];
