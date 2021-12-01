import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className="border-white border-2 rounded-full flex justify-evenly items-center my-8 py-1 sm:py-2 bg-beigeLight flex-shrink-0 w-full">
      {headerItems.map((item) => (
        <Link key={item.id} href={item.link}>
          <a className="sm:text-3xl font-light">{item.label}</a>
        </Link>
      ))}
    </div>
  )
}

const headerItems = [
  {
    id: 'project',
    label: 'Projects',
    link: '/',
  },
  {
    id: 'about',
    label: 'About',
    link: '/about',
  },
  {
    id: 'github',
    label: 'Github',
    link: 'https://github.com/elisabethanna',
  },
]
