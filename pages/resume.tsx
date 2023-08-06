import { languages, tools } from '@/data'
import React from 'react'
import Bar from '@/components/Bar'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '@/animation'

export default function resume() {

  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit'
    className='px-6 py-2'>
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='text-xl font-bold'>B.Sc. Computer Science & Mathematics</h5>
            <p className='font-semibold'>Ariel University, 2020-2023</p>
            <p className='my-3 text-sm'><b>Udemy course certification:</b> The Complete Web Developer.</p>
            <p className='my-3 text-sm'><b>Amazon Hackathon on Stop Bullying - </b> 5.2023.</p>
            <p className='my-3 text-sm'><b>Full-Stack Bootcamp of Interbit:</b> 4.2023 – 9.2023.</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='text-xl font-bold'>Full-Stack Developer Intern</h5>
            <p className='font-semibold'>5.2023 - Present | Cyber Security – Startup</p>
            <p className='my-3 text-sm'>• Designing SQL tables and linking them - server side.<br/>
• Working with external APIs, including Cisco, and conducting in-depth analysis of
the data retrieved, along with handling REST API requests on the client side.<br/>
• Building a dashboard with Bootstrap design library and working with Figma.</p>
          </div>
        </motion.div>

      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className='grid gap-3 md:grid-cols-2' style={{width:'80%'}}>
            {
              languages.map(lang => <Bar data={lang} key={lang.name} />)
            }
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Databases</h5>
          <div className='grid gap-3 md:grid-cols-2' style={{width:'85%'}}>
            {
              tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
        </div>
        
      </div>
    </motion.div>
  )
}
