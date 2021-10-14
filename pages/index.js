import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.search);

  useEffect(() => {
  }, [])

  return (
    <>
      <Head>
        <title>Newsly</title>
        <meta name="keywords" content="Newsly" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        Hello Newsly
      </div>
    </>
  )
}
