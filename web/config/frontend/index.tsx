import { BsGithub } from 'react-icons/bs';
import { CgNpm } from 'react-icons/cg';

import { FaDocker, FaJenkins, FaPython, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiAnsible, SiFastapi, SiDeno, SiPreact, SiMermaid, SiVagrant, SiGithub, SiJira, SiAmazonrds } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { PiShippingContainerFill } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedis, SiFresh, SiRabbitmq, SiCanva } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoCapacitor } from "react-icons/io5";


// Define types for our technology items
interface TechItem {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
}

// Define the category structure
interface Category {
  id: string;
  title: string;
  techs: TechItem[];
}


export const buttonsIconsHeader = [
  {
    icon: <BsGithub size={25} />,
    link: "https://github.com/HarryEddward"
  },
  {
    icon: <CgNpm size={25} />,
    link: "https://www.npmjs.com/~agaster"
  },
];

export const elementsNavbar = [
  {
    key: "presentation",
    href: "#presentation",
    link: "/"
  },
  {
    key: "about",
    href: "#about",
    link: "/about"
  },
  {
    key: "skills",
    href: "#skills",
    link: "/skills"
  },
  {
    key: "projects",
    href: "#projects",
    link: "/projects"
  },
  {
    key: "blog",
    href: "#blog",
    link: "/blog"
  },
  {
    key: "hobbies",
    href: "#hobbies",
    link: "/"
  },
];


// Define categories with their technologies
export const categoriesSkills: Category[] = [
  {
    id: "frontend",
    title: "Frontend",
    techs: [
      { Icon: FaReact, name: 'React' },
      { Icon: SiTypescript, name: 'TypeScript' },
      { Icon: SiTailwindcss, name: 'Tailwind' },
      { Icon: SiPreact, name: 'Preact' },
      { Icon: TbBrandReactNative, name: 'Expo' },
      { Icon: SiMermaid, name: 'MermaidJS' },
      { Icon: IoLogoCapacitor, name: 'CapacitorJS' },
      { Icon: SiCanva, name: 'Canva' },
    ]
  },
  {
    id: "backend",
    title: "Backend",
    techs: [
      { Icon: FaNodeJs, name: 'Node.js' },
      { Icon: FaPython, name: 'Python' },
      { Icon: SiFastapi, name: 'FastAPI' },
      { Icon: SiDeno, name: 'Deno' },
      { Icon: FaGolang, name: 'Golang' },
      { Icon: SiFresh, name: 'Fresh' },
      { Icon: SiNextdotjs, name: 'Next.js' },
    ]
  },
  {
    id: "databases",
    title: "Databases",
    techs: [
      { Icon: SiMongodb, name: 'MongoDB' },
      { Icon: BiLogoPostgresql, name: 'PostgreSQL' },
      { Icon: SiRedis, name: 'Redis' },
      { Icon: SiAmazonrds, name: 'Autobase'}

    ]
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    techs: [
      { Icon: FaDocker, name: 'Docker' },
      { Icon: FaJenkins, name: 'Jenkins' },
      { Icon: SiAnsible, name: 'Ansible' },
      { Icon: PiShippingContainerFill, name: 'Docker Swarm' },
      { Icon: SiRabbitmq, name: 'RabbitMQ' },
      { Icon: SiVagrant, name: 'Vagrant' },
      { Icon: SiGithub, name: 'GitHub' },
      { Icon: SiJira, name: 'Jira' },
    ]
  }
];

export const hobbiesSection = [
  { name: "Lectura", description: "Me apasiona leer sobre tecnología, desarrollo personal. Siempre hay algo nuevo que aprender de cada libro." },
  { name: "Calistenia", description: "Mantengo un equilibrio entre el trabajo mental y físico. El ejercicio me ayuda a mantener la claridad mental y la creatividad." },
]