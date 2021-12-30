import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export default function Layout({
  children,
}: {
  children: ReactElement<any, any>
}) {
  return (
    <>
      <Head>
        <title>Anna Eriksson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-10/12 m-auto flex flex-col h-screen">
        <Header />
        <div className="flex-grow overflow-auto">{children}</div>
        <Footer />
      </div>
    </>
  )
}
