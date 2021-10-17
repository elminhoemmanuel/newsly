import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNews, like, readMore } from "../redux/actions/news"
import { MdMoreHoriz, MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { useRouter } from "next/router"

const TopHeader = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const { articles, error, loading } = useSelector((state) => state.news);
    // const [loading, setLoading] = useState(true)

    const getHours = () => {
        return new Date(articles[0].publishedAt).getHours()
    }

    const handleReadMore = (newsObj) =>{
        dispatch(readMore(newsObj));
        router.push(`/news/${newsObj.id}`)
    }

    useEffect(() => {
        dispatch(getNews());
    }, [])

    return (
        <div>
            {/* For when data is fetched successfully */}
            <div>
                {
                    loading ?
                        <div className='flex items-center justify-center py-4'>
                            <div className='spinner-page'></div>
                        </div> :

                        <div>
                            {
                                error === "" && articles[0] ?

                                    <div>
                                        <div onClick={()=>{handleReadMore(articles[0])}} className='cursor-pointer block w-full text-left focus:outline-none rounded relative'>
                                            {
                                                articles[0].urlToImage ?
                                                <img className='block w-full h-72 rounded' src={articles[0].urlToImage} alt="first headline Image" /> :
                                                <img className='block w-full h-72 rounded border border-gray-200 bg-gray-200' src="/images/placeholder.svg" alt="first headline Image placeholder" />
                                            }
                                            <div className='img-grad absolute px-4 pt-12 md:pt-16 lg:pt-28 pb-2 top-0 left-0 w-full h-72 rounded-md text-white'>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        {
                                                            <p>
                                                                <span>{articles[0].source.name} </span>
                                                                <span>&nbsp;{getHours()}h</span>
                                                                <span> 🔥</span>
                                                            </p>
                                                        }
                                                    </div>
                                                    <div><button><MdMoreHoriz className="h-6 w-6" /></button></div>
                                                </div>

                                                <div>
                                                    <p className="text-lg">{articles[0].title} </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center">
                                                        <div className="mr-2 py-2 px-4 rounded-full bg-gray-500 text-xs">business</div>
                                                        <div className="py-2 px-4 rounded-full bg-gray-500 text-xs">technology</div>
                                                    </div>

                                                    <div className="flex items-center">
                                                        {
                                                            articles[0].likes === 0 ?
                                                                <button className="block mr-2 focus:outline-none" onClick={() => { dispatch(like(articles[0].id)) }} >
                                                                    <MdFavoriteBorder className="h-6 w-6" />
                                                                </button> :
                                                                <button className="block mr-2 pointer-events-none focus:outline-none puff-in-center"><MdFavorite className="h-6 w-6 text-red-600" /></button>
                                                        }
                                                        <p className="">{articles[0].likes}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div> :

                                    <div>
                                        {error === "" && <p className="">No results found</p>}
                                    </div>
                            }
                        </div>
                }
            </div>

            {/* for when there is an error and data is not fetched */}
            <div>
                {
                    error !== '' && <p>{error}</p>
                }
            </div>
        </div>
    )
}

export default TopHeader
