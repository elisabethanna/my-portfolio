import React from 'react'
import Image from 'next/image'
import profileImg from '../assets/anna.jpg'

const About = () => {
  return (
    <div className="flex flex-col h-full justify-center w-10/12 m-auto">
      <div className="flex flex-row">
        <div className="flex flex-col ">
          <div className="flex flex-row pb-8">
            <p className="text-6xl font-bold">{`Hello, I'm `}</p>
            <p className="text-6xl font-thin pl-4">{' Anna Eriksson 👋'}</p>
          </div>

          <p className="text-3xl font-thin pb-2 font-regular">
            {'Front End Developer and Product Manager'}
          </p>
          <p className="text-md font-thin pb-8 font-regular">
            Stockholm, Sweden
          </p>
        </div>
        <div
          style={{
            maxHeight: '200px',
            maxWidth: '200px',
            marginLeft: '50px',
          }}
        >
          <Image className="rounded-full" alt="anna" src={profileImg} />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="uppercase text-2xl font-bold mb-2">Passion for</p>
        <ul className="font-normal text-xl">
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
