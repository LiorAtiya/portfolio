import { services } from "@/data";
import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { motion, stagger } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animation";

export default function index() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h5 className="my-3 font-medium">
        Freelance Software developer with a degree in computer science and
        mathematics, equipping me with a strong foundation in algorithms and
        data structures for developing intricate and optimized code. I honed my
        skills during an enriching internship in a Full-Stack role at a startup
        company. Beyond that, I contributed to open source project, ensuring
        that I stay up-to-date with the latest technologies in the field.
        Alongside technical prowess, I boast excellent teamwork and
        communication skills, allowing me to collaborate effectively in any
        project.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I am doing
        </h6>
        <motion.div
          // variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
            >
              <ServiceCard
                Icon={service.Icon}
                about={service.about}
                title={service.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch(`http://localhost:3001/api/services`)
//   const data = await res.json()

//   console.log('SERVER',services)

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }
