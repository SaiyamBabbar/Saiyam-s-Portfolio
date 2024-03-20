import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import project1 from "../../public/images/projects/2.jpg";
import project2 from "../../public/images/projects/simongame.webp";
import project3 from "../../public/images/projects/chat.jpg";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl  rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:" />
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold  underline cursor-pointer"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>SAIYAM | Projects Page</title>
        <meta name="description" content="any" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Showcasing Innovation: A Collection of My Finest Projects" />
          <div className="grid grid-cols-12 gap-24 pt-6 gap-y-32">
            <div className="col-span-12">
              <FeaturedProjects
                title="WanderLust"
                img={project1}
                summary=" A dynamic MERN application enabling users to book hotels effortlessly, merging MongoDB, Express.js, React, and Node.js for seamless functionality. With intuitive UI/UX, robust backend, and real-time updates, it's a one-stop solution for travel enthusiasts seeking hassle-free accommodations."
                link="https://example.com" // Replace with actual link
                github="https://github.com/SaiyamBabbar/Wanderlust"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Simon Game"
                img={project2}
                link="https://example.com" // Replace with actual link
                github="https://github.com/SaiyamBabbar/Simon_game"
                type="Web Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="ChatterBox Connect"
                img={project3}
                link="https://example.com" // Replace with actual link
                github="https://github.com/SaiyamBabbar/ChatterBox"
                type="Web Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
