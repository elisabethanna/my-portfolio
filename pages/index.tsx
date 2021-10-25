import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Head>
        <title>My portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}

export default Home
