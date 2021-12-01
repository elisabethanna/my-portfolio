import React from 'react'
import carouselImg from '../assets/carousel.png'
import mealPlannerImg from '../assets/meal-planner.png'
import surveyImg from '../assets/survey.png'
import trackingImg from '../assets/tracking.png'
import firebaseImg from '../assets/firebase.png'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:px-14">
      {projects.map((project) => (
        <div
          className="border-white border p-4 h-20 rounded-xl"
          key={project.id}
        >
          {project.link ? (
            <Link passHref href={project.link}>
              <h1 className="font-thin text-xl cursor-pointer">
                {`${project.label} >`}
              </h1>
            </Link>
          ) : (
            <h1 className="font-thin text-xl">{project.label}</h1>
          )}

          {/* <Image
            className="object-cover"
            alt={project.id}
            src={project.image}
            height={300}
            width={300}
            objectFit="cover"
          /> */}
          <p>{project.company}</p>
          <p className="flex justify-end">View more</p>
        </div>
      ))}
    </div>
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
    image: firebaseImg,
  },
]
