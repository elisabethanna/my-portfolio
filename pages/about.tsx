import React from 'react'
import Image from 'next/image'
import profileImg from '../assets/anna.jpg'

const About = () => {
  return (
    <div className="flex flex-col h-full md:justify-center md:w-10/12 m-auto">
      <div className="flex lg:flex-row flex-col ">
        <div
          className="flex lg:hidden justify-center h-full my-2 mb-6 mx-auto"
          style={{
            maxHeight: '150px',
            maxWidth: '150px',
          }}
        >
          <Image className="rounded-full" alt="anna" src={profileImg} />
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row pb-8">
            <span className="text-xl md:text-4xl font-bold">{`Hello, I'm`}</span>
            <span className="text-xl md:text-4xl font-thin pl-2 ">
              {' Anna Eriksson 👋'}
            </span>
          </div>

          <p className="text-md md:text-3xl font-thin pb-2 font-regular">
            {'Front End Developer and Product Manager'}
          </p>
          <p className="text-sm md:text-md font-thin pb-8 font-regular">
            Stockholm, Sweden
          </p>
        </div>
        <div
          className="hidden lg:flex ml-20 justify-between"
          style={{
            maxHeight: '150px',
            maxWidth: '150px',
          }}
        >
          <Image className="rounded-full" alt="anna" src={profileImg} />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="uppercase text-md md:text-2xl font-bold mb-2">
          Passion for
        </p>
        <ul className="font-normal text-sm md:text-xl">
          <li>🎨 responsive design</li>
          <li>💡 innovation</li>
          <li>💻 new technology</li>
          <li>🥘 food </li>
        </ul>
      </div>
    </div>
  )
}

export default About
