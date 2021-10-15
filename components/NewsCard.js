import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNews, like } from "../redux/actions/news"
import { MdMoreHoriz, MdFavoriteBorder, MdFavorite } from "react-icons/md"

const NewsCard = ({ details }) => {

    const dispatch = useDispatch();
    const { articles, error, loading } = useSelector((state) => state.news);

    const getHours = (item) => {
        return new Date(item.publishedAt).getHours()
    }

    return (
        <div className=" mb-12">
            <div className="flex justify-between items-center mb-3">
                <div>
                    {
                        <p>
                            <span className='text-header font-bold'>{details.source.name} </span>
                            <span className="text-purplegray">&nbsp;{getHours(details)}h</span>
                            <span> 🔥</span>
                        </p>
                    }
                </div>
                <div className="flex items-center text-purplegray">
                    {
                        details.likes === 0 ?
                            <button className="block mr-2 focus:outline-none" onClick={() => { dispatch(like(details.id)) }} >
                                <MdFavoriteBorder className="h-6 w-6" />
                            </button> :
                            <button className="block mr-2 pointer-events-none focus:outline-none puff-in-center"><MdFavorite className="h-6 w-6 text-red-600" /></button>
                    }
                    <p className="mr-3">{details.likes}</p>
                    <div className="pt-2"><button><MdMoreHoriz className="h-6 w-6" /></button></div>
                </div>
            </div>

            <div className="flex justify-between mb-3 ">
                <div className="pr-4">
                    <p className="text-sm text-header mb-3 font-bold">{details.title} </p>
                    <div className="flex items-center mb-3">
                        <div className="mr-2 py-2 px-4 rounded-full bg-white text-purplegray text-xs">business</div>
                        <div className="py-2 px-4 rounded-full bg-white text-purplegray text-xs">technology</div>
                    </div>
                    <p className="text-sm text-purplegray">
                        <span className=''>PTSK</span>
                        <span className="mr-3">&nbsp;&nbsp;FLTW</span>
                        <span className="pb-1 border-b border-purplegray">2 more</span>
                    </p>
                </div>

                <button className="block rounded-md thumb">
                    {
                        details.urlToImage ?
                            <img className="w-full h-full rounded-md" src={details.urlToImage} alt="News Image" /> :
                            <img className="w-full h-full rounded-md border border-gray-200 bg-gray-200" src="/images/placeholder.svg" alt="News Image placeholder" />
                    }
                </button>
            </div>
        </div>
    )
}

export default NewsCard
