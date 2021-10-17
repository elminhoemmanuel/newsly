import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment"
import Link from "next/link"

var momenttz = require('moment-timezone');

export default function SingleNewsPage() {

  const dispatch = useDispatch();
  const { singleArticle } = useSelector((state) => state.news);

  return (
    <>
      <Head>
        <title>Newsly</title>
        <meta name="keywords" content="Newsly | Single News Page" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <div className='mx-auto pb-6 pt-6 px-4 w-full md:w-3/5 lg:w-2/5'>
          <h1 className="text-2xl font-bold mb-4">{singleArticle.title}</h1>
          <p className="text-sm text-purplegray mb-3">By {singleArticle.author}, {singleArticle.source.name}</p>
          <p className="text-sm text-purplegray mb-7">
            Updated {moment(singleArticle.publishedAt).format("h:mm A ")}
            {momenttz().tz("America/Los_Angeles").format("z")},
            {moment(singleArticle.publishedAt).format("ddd MMMM D, YYYY")}
          </p>

          <div className="mb-4">
            {
              singleArticle.urlToImage ?
                <img className='block w-full h-60 rounded' src={singleArticle.urlToImage} alt="full news Image" /> :
                <img className='block w-full h-60 rounded border border-gray-200 bg-gray-200' src="/images/placeholder.svg" alt="full news Image placeholder" />
            }
          </div>

          <p className="text-sm text-purplegray mb-3">{singleArticle.description}</p>
          <p className="text-sm text-purplegray mb-8">{singleArticle.content}</p>

          <Link href={singleArticle.url}>
            <a className="mb-5 rounded-full bg-transparent text-purplealt border border-purplealt hover:bg-purplealt hover:text-white hover:border-purplealt py-2 px-4"target="_blank" >Read more</a>
          </Link>

        </div>
      </div>
    </>
  )
}
