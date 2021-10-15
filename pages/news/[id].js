import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getNews, like } from "../redux/actions/news"


export default function SingleNewsPage() {

  const dispatch = useDispatch();
  const { articles, error, singleArticle } = useSelector((state) => state.news);

  return (
    <>
      <Head>
        <title>Newsly</title>
        <meta name="keywords" content="Newsly | Single News Page" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <div className='mx-auto pb-6 pt-3 px-4 w-full md:w-3/5 lg:w-2/5'>
            Welcome
        </div>
      </div>
    </>
  )
}
