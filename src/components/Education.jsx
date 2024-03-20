import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between"
    >
      <LiIcon refrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        {info && <p className="font-medium w-full">{info}</p>}
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Master of Computer Applications"
            time="2023-2025"
            place="Chitkara University"
            info="MCA Graduates emerge proficient in software engineering, database management, networking, and other crucial areas, positioning them as versatile professionals in the rapidly evolving tech industry."
          />
          <Details
            type="Bachelors of Computer Applications"
            time="2020-2023"
            place="Hindu Institute of Management & Tech."
            info="Seamlessly blending theory with hands-on practical experience, the BCA curriculum encompasses a wide spectrum of subjects including programming languages, web development, database management, and more."
          />
          <Details
            type="12th || CBSE"
            time="2019-2020"
            place="DGV Sr. Sec. Public School, Rohtak"
            info="Passed with A Grade"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
