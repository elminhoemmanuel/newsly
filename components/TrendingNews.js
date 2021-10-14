import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from './NewsCard';

const TrendingNews = () => {

    const dispatch = useDispatch();
    const { articles, error, loading } = useSelector((state) => state.news);
    const [all, setAll] = useState(false)

    return (
        <div className="mt-6">
            <h1 className="text-2xl font-bold mb-5">Trending News</h1>

            <div className="">
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
                                            <div>
                                                {
                                                    !all ?

                                                        <div>
                                                            {
                                                                articles.filter(item => item.id <= 3 && item.id > 1).map(item => (
                                                                    <NewsCard key={item.id} details={item} />
                                                                ))
                                                            }
                                                        </div> :
                                                        <div>
                                                            {
                                                                articles.filter(item => item.id > 1).map(item => (
                                                                    <NewsCard key={item.id} details={item} />
                                                                ))
                                                            }
                                                        </div>
                                                }
                                            </div>

                                            <div className="flex items-center justify-center mt-3">
                                                <button onClick={() => { setAll(!all) }} className="focus:outline-none py-3 block w-full rounded-full bg-transparent
                                                text-purplealt border border-purplealt hover:bg-purplealt hover:text-white hover:border-purplealt">
                                                    View <span>{all ? "Less" : "All"}</span>
                                                </button>
                                            </div>

                                        </div>
                                        :

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


        </div>
    )
}

export default TrendingNews
