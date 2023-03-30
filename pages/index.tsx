import { services } from '@/data'
import React from 'react'
import ServiceCard from '@/components/ServiceCard'
import { motion, stagger } from 'framer-motion'
import { fadeInUp, routeAnimation } from '@/animation'

export default function index() {

  return (
    <motion.div 
    variants={routeAnimation} initial='initial' animate='animate'
    className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>Independent developer with a degree in computer science and mathematics,
        I have a strong technical background and expertise in developing software solutions.
        Proficient in programming languages, web technologies, and databases. My knowledge in
        algorithms and data structures allows me to build efficient and scalable web applications.
        I am a proactive learner and keep up-to-date with emerging technologies to implement innovative
        solutions. With excellent teamwork and communication skills, I can collaborate effectively with
        cross-functional teams to deliver high-quality software products.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <motion.div 
        // variants={stagger}
        initial='initial'
        animate='animate'
        className='grid gap-6 lg:grid-cols-2'>
          {services.map(service => (
            <motion.div variants={fadeInUp} key={service.title}
            className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'>
              <ServiceCard Icon={service.Icon}
                about={service.about}
                title={service.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
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