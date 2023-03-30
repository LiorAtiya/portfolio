import React, { useState } from 'react'
import { projects as projectsData } from '@/data'
import ProjectCard from '@/components/ProjectCard'
import ProjectsNavbar from '@/components/ProjectsNavbar'
import { Category } from '@/type'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '@/animation'

export default function Projects() {

  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('all')

  const [showDetail,setShowDetail] = useState<number|null>(null);
  
  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) => project.category.includes(category));
    setProjects(newArray)
    setActive(category)
  }


  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit'
    className='px-5 py-2 overflow-y-scroll' style={{ height: '65vh' }}>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
      <motion.div
        initial='initial'
        animate='animate'
        className='relative grid grid-cols-12 gap-4 my-3'>
        {
          projects.map(project => (
            <motion.div
              variants={fadeInUp}
              key={project.name}
              className='col-span-12 p-2 bg-gray-200 rounded-lg lg:col-span-4 sm:col-span-6 dark:bg-dark-200'>
              <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}
