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
            <h5 className='my-2 text-xl font-bold'>Computer Science</h5>
            <p className='font-semibold'>Bla bla</p>
            <p className='my-3'>bla blaaaa</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Computer Science</h5>
            <p className='font-semibold'>Bla bla</p>
            <p className='my-3'>bla blaaaa</p>
          </div>
        </motion.div>

      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className='my-2'>
            {
              languages.map(lang => <Bar data={lang} key={lang.name} />)
            }
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {
              tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}
