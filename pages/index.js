import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TopHeader from '../components/TopHeader';
import TrendingNews from '../components/TrendingNews';
import { getNews, like } from "../redux/actions/news"


export default function Home() {

  const dispatch = useDispatch();
  const { articles, error } = useSelector((state) => state.news);

  return (
    <>
      <Head>
        <title>Newsly</title>
        <meta name="keywords" content="Newsly | Homepage" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <div className='mx-auto pb-6 pt-3 px-4 w-full md:w-3/5 lg:w-2/5'>
          <TopHeader />
          <TrendingNews />
        </div>
      </div>
    </>
  )
}
