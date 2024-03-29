import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/images/profile/saiyam.jpg";
import Image from "next/image";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>SAIYAM | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout>
          <div className="mb-8 mt-6">
            {/* Added margin top and bottom */}
            <AnimatedText
              text="Passion Fuels Purpose!"
              style={{ marginTop: "-20px" }}
            />
          </div>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-2xl">
                Hi, I'm <bold>Saiyam Babbar</bold>, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 2 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="my-4 font-medium text-2xl">
                I believe that design is about more than just making things look
                pretty it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-2xl">
                Whether I'm working on a website, I bring my commitment to
                design excellence and user-centered thinking to every project I
                work on. I look forward to the opportunity to bring my skills
                and passion to your next project.
              </p>
            </div>

            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:text-light" />
              <Image
                src={profilePic}
                alt="code"
                priority
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
