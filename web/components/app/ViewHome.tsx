"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { HighlightedText } from "@/components/app/HighlightedText";
import { useTranslations } from "next-intl";
import CopyText from "@/components/app/CopyText";
import { LanguageSwitcher } from "@/components/app/LanguageSwitcher";
import Link from 'next/link';
import { buttonsIconsHeader, elementsNavbar } from '@/config/frontend/index';
import { FaDocker, FaJenkins, FaPython, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiAnsible, SiFastapi, SiDeno, SiPreact, SiMermaid, SiVagrant, SiGithub, SiJira } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { PiShippingContainerFill } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedis, SiFresh, SiRabbitmq, SiCanva } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoCapacitor } from "react-icons/io5";
import type { Post } from "@/lib/posts";

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

interface IViewHome {
  posts: Post[];
}

export default function ViewHome({ posts }: IViewHome) {
  const t = useTranslations('HomePage');
  const tContacts = useTranslations('Contacts');
  const tHobbies = useTranslations('Hobbies');
  const nav = useTranslations('Navigation');

  const [activeSection, setActiveSection] = useState<string>("");

  const sectionsRef = useRef<Record<string, HTMLElement | null>>({
    presentation: null,
    about: null,
    projects: null,
    blog: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Define categories with their technologies
  const categories: Category[] = [
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

  const hobbiesSection = [
    { name: "Lectura", description: "Me apasiona leer sobre tecnología, desarrollo personal. Siempre hay algo nuevo que aprender de cada libro." },
    { name: "Calistenia", description: "Mantengo un equilibrio entre el trabajo mental y físico. El ejercicio me ayuda a mantener la claridad mental y la creatividad." },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex relative min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white dark:bg-black sm:items-start snap-y snap-mandatory overflow-y-scroll h-screen">
        
        {/* 🧭 Navbar */}
        <nav className="top-0 left-0 z-50 fixed flex w-full bg-gray-100/70 backdrop-blur-md justify-center gap-4 py-3">
          {elementsNavbar.map((element, index) => (
            <Link href={element.link} key={index} className={`m-1 px-3 py-2 text-sm font-medium transition-colors duration-300 rounded ${
              activeSection === element.href.substring(1)
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}>
              {nav(element.key)}
            </Link>
          ))}
        </nav>

        {/* 🌟 SECCIÓN: Presentación */}
        <section 
          id="presentation"
          ref={(el) => { sectionsRef.current.presentation = el; }}
          className="min-h-screen overflow-scroll w-full snap-start snap-always flex flex-col items-center text-center sm:items-start sm:text-left px-16 pt-32 pb-16"
        >
          <div className="w-full flex flex-row justify-end items-end">
            <LanguageSwitcher/>
          </div>
          
          <div className="flex flex-col justify-center items-end gap-6 border-b-2 md:flex-row w-full">
            <motion.div
              className="border-b-2 md:border-b-0 border-black"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Image
                src="/me.png"
                alt="Illustration"
                width={320}
                height={240}
                loader={imageLoader}
                priority
              />
            </motion.div>

            <motion.h1
              className="max-w-xs pb-3 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              {t('title')} - {t('subtitle')}
            </motion.h1>
          </div>

          <div className="z-20 bg-white dark:bg-black flex flex-row justify-evenly items-center gap-6 md:flex-row w-full py-6">
            <div className="flex-col">
              <motion.p 
                className="flex-3 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t('description')}
              </motion.p>
              <motion.p 
                className="flex-3 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y:0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <HighlightedText delay={0.5}>{t('highlight')}</HighlightedText>
              </motion.p>

            </div>
            
            <div className="flex flex-col justify-center items-center flex-1 gap-4 ml-8">
              {buttonsIconsHeader.map((button, index) => (
                <motion.div
                  key={index}
                  className="border-2 border-black w-full py-3"
                  initial={{
                    opacity: 1,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    rotate: 0,
                  }}
                  whileTap={{
                    opacity: 1,
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    rotate: 5,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={button.link}
                    className="flex justify-center items-center w-full"
                  >
                    {button.icon}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-y-2 mt-6 border-gray-200 text-gray-400 py-4 text-sm flex justify-evenly w-full">
            <CopyText>{tContacts("personalPhone")}</CopyText>
            <CopyText>{tContacts("businessPhone")}</CopyText>
            <CopyText>{tContacts("email")}</CopyText>
          </div>
        </section>

        {/* 📋 SECCIÓN: Sobre Mí */}
        <motion.section
          id="about"
          ref={(el) => { sectionsRef.current.about = el; }}
          className="min-h-screen overflow-scroll w-full snap-start snap-always flex flex-col px-16 pt-24 pb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Título de la sección */}
          <h2 className="text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">
            {nav('about')}
          </h2>
          
          {/* Contenido de Sobre Mí */}
          <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
            <p className="text-lg leading-relaxed">
              {/* Aquí va tu biografía, experiencia, habilidades, etc. */}
              {tHobbies("1rParagraph")}
            </p>
            <p className="text-lg leading-relaxed">
              {/* Aquí va tu biografía, experiencia, habilidades, etc. */}
              {tHobbies("2rParagraph")}
            </p>
            <p className="text-lg leading-relaxed">
              {tHobbies("3rParagraph")} <HighlightedText> {tHobbies("3rParagraphHighlighted")} </HighlightedText>
            </p>
          </div>
        </motion.section>

        {/* 📋 SECCIÓN: habilidades */}
        <motion.section
          id="skills"
          ref={(el) => { sectionsRef.current.skills = el; }}
          className="min-h-screen overflow-y-scroll w-full snap-start snap-always flex flex-col px-16 pt-24 pb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Título de la sección */}
          <h2 className="text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">
            {nav('skills')}
          </h2>
          
          {/* Render each category */}
          {categories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 mt-3">
                {category.techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center border-2 border-gray-300 dark:border-gray-700 rounded-lg group-hover:border-black dark:group-hover:border-white transition-colors">
                      <tech.Icon className="text-3xl text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
                    </div>
                    <span className="text-center text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* 💼 SECCIÓN: Proyectos */}
        <motion.section
          id="projects"
          ref={(el) => { sectionsRef.current.projects = el; }}
          className="min-h-screen overflow-scroll w-full snap-start snap-always flex flex-col px-16 pt-24 pb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Título de la sección */}
          <h2 className="text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">
            {nav('projects')}
          </h2>
          
          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ejemplo de tarjeta de proyecto */}
            <div className="border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Software empresarial de automatización de peluquerias
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Descripción breve del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex gap-2">
                <a href="#" className="text-sm border border-black dark:border-white px-3 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  Demo
                </a>
                <a href="#" className="text-sm border border-black dark:border-white px-3 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  Código
                </a>
              </div>
            </div>

            {/* Puedes duplicar esta tarjeta para más proyectos */}
            <div className="border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Suite empresarial de gestion hostelera
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Descripción de otro proyecto interesante.
              </p>
              <div className="flex gap-2">
                <a href="#" className="text-sm border border-black dark:border-white px-3 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  Demo
                </a>
                <a href="#" className="text-sm border border-black dark:border-white px-3 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  Código
                </a>
              </div>
            </div>

            {/* Ejemplo de tarjeta de proyecto */}
            <div className="border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Librería sobre automatización en fuentes de textos para React.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Descripción breve del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex gap-2">
                <a href="#" className="text-sm border border-black dark:border-white px-3 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  Demo
                </a>
                <a href="#" className="text-sm border border-black dark:border-white px-3 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  Código
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 📝 SECCIÓN: Blog */}
        <motion.section
          id="blog"
          ref={(el) => { sectionsRef.current.blog = el; }}
          className="min-h-screen overflow-scroll w-full snap-start snap-always flex flex-col px-16 pt-24 pb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Título de la sección */}
          <h2 className="text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">
            {nav('blog')}
          </h2>
          
          {/* Lista de artículos */}
          <div className="space-y-6">

            {
              posts.map((post, index) => (
                <article
                key={index}
                className="border-l-4 border-black dark:border-white pl-6 py-2"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                    {new Date(post.date).toLocaleDateString('es-ES')} • {Math.ceil(post.readingTime.minutes)} min lectura
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                    Descripción de otro artículo del blog con información relevante.
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-medium hover:underline text-black dark:text-white">
                    Leer más →
                  </Link>
                </article>
              ))
            }
          </div>
          <p className="py-6 border-gray-100 text-xl font-medium hover:underline text-black dark:text-white">
            ...
          </p>
          <Link href={`/blog`} className=" border-2 py-6 pl-6 border-gray-100 text-sm font-medium hover:underline text-black dark:text-white">
            Visitar blog →
          </Link>
        </motion.section>

        {/* 📝 SECCIÓN: Mis hobbies */}
        <motion.section
          id="hobbies"
          ref={(el) => { sectionsRef.current.hobbies = el; }}
          className="min-h-screen overflow-scroll w-full snap-start snap-always flex flex-col px-16 pt-24 pb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Título de la sección */}
          <h2 className="text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">
            Mis Hobbies
          </h2>

          {/* Grid de hobbies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjetas de hobbies */}
            {
              hobbiesSection.map((hobby, index) => (
                <motion.div 
                  key={index}
                  className="border-2 border-gray-200 dark:border-gray-800 p-8 hover:border-black dark:hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center  mb-4"></div>
                    <div className="text-4xl"></div>
                    <h3 className="text-2xl font-semibold text-black dark:text-white">
                      {hobby.name}
                    </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {hobby.description}
                  </p>
                </motion.div>
              ))
            }

          </div>

          {/* Sección adicional con texto destacado */}
          <div className="mt-12 border-t-2 border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Estos hobbies no solo me entretienen, sino que <HighlightedText delay={0.3}>constantemente inspiran mi trabajo y forma de pensar como desarrollador</HighlightedText>.
            </p>
          </div>
        </motion.section>

      </main>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        main::-webkit-scrollbar {
          display: none;
        }
        
        main {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}