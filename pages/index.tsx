import React, { useState } from 'react'
import carouselImg from '../assets/carousel.png'
import mealPlannerImg from '../assets/meal-planner.png'
import surveyImg from '../assets/survey.png'
import trackingImg from '../assets/tracking.png'
import firebaseImg from '../assets/firebase.png'
import portfolioImg from '../assets/portfolio.png'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('')

  const handleClick = (id: string) => {
    setSelectedProject(id)
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full sm:px-14">
        {projects.map((project) => (
          <div className="border-white border rounded-xl" key={project.id}>
            <div className="grid grid-cols-2 h-full">
              <div className="p-4 pb-0 flex flex-col justify-between">
                <div>
                  <h1
                    onClick={() => handleClick(project.id)}
                    className="font-regular text-xl cursor-pointer"
                  >
                    {project.label}
                  </h1>
                  {project.company ? (
                    <p className="font-thin">{project.company}</p>
                  ) : (
                    <p className="invisible">placeholder</p>
                  )}
                </div>
                {project.link ? (
                  <Link passHref href={project.link}>
                    <p className="mb-4">Check it out</p>
                  </Link>
                ) : (
                  <p className="invisible">View more</p>
                )}
              </div>
              <Image
                alt={project.id}
                src={project.image}
                className={'rounded-r-xl'}
                height="100%"
                objectFit="cover"
                onClick={() => handleClick(project.id)}
              />
            </div>

            {/* popup */}
            {selectedProject === project.id && (
              <div
                style={{ zIndex: 9 }}
                className={` fixed inset-0 flex items-center justify-center h-screen `}
              >
                <div
                  onClick={() => handleClick('')}
                  className="fixed inset-0 bg-black bg-opacity-60 z-9999"
                />

                <div className=" flex justify-center md:w-3/12 w-8/12">
                  <Image alt={project.id} src={project.image} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects

const projects = [
  {
    id: 'meal-planner',
    label: 'Meal Planner Tool',
    link: 'https://www.dietdoctor.com/meal-plan/gskc-2021-week-1',
    company: 'DietDoctor',
    image: mealPlannerImg,
  },
  {
    id: 'pmp',
    label: 'Survey',
    link: 'https://www.dietdoctor.com/low-carb/meal-plans/personalization/gender',
    company: 'DietDoctor',
    image: surveyImg,
  },
  {
    id: 'tracking',
    label: 'Weight Tracker',
    link: '',
    company: 'DietDoctor',
    image: trackingImg,
  },
  {
    id: 'carousel',
    label: 'Carousel',
    link: '',
    company: 'DietDoctor',
    image: carouselImg,
  },
  {
    id: 'firebase-auth',
    label: 'Firebase Auth',
    link: 'https://auth.annaerikssons.com/',
    image: firebaseImg,
  },
  {
    id: 'portfoloio',
    label: 'Portfolio',
    link: '',
    image: portfolioImg,
  },
]
