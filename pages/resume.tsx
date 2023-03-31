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
            <p className='my-3'>Udemy course certification: The Complete Web Developer.</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='text-xl font-bold'>IT technician</h5>
            <p className='font-semibold'>2018-2019</p>
            <p className='my-3'>Technical support for customers, diagnosis, and solution of computer faults, hardware repair, work with external suppliers, implementation of systems.</p>
            <p>Worked with SCCM, MDT servers and systems: Switches of Cisco, Portnox, Putty, ERP, Citrix.</p>
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
