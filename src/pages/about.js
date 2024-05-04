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
      <TransitionEffect />
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
                Hi, I'm <bold>Saiyam Babbar</bold>, a web developer and UI/UX
                with a knack for creating captivating digital experiences. With
                a blend of creativity and technical expertise, I craft elegant
                solutions that bridge functionality with aesthetics. Proficient
                in HTML, CSS, JavaScript, and various design tools, I thrive on
                turning ideas into polished, user-centric products. Constantly
                pushing boundaries
              </p>
              <p className="my-4 font-medium text-2xl">
                I believe that design is about more than just making things look
                pretty it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-2xl">
                I delve into the latest trends and technologies to enhance user
                engagement and satisfaction. From conceptualization to
                execution, I bring ideas to life with precision and flair. Let's
                collaborate to bring your vision to the digital realm.
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
