import React from 'react';
import { IoShareSocialSharp } from 'react-icons/io5';
import { MdBookmarks } from 'react-icons/md';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RatingComponent from './Rating';
import { FaRegEye } from 'react-icons/fa';

const News = () => {
    const {id} = useParams()
    const {data}  = useLoaderData()
    
    return (
        <div>
           <h1 className='font-bold text-xl mt-2 mb-5'>Dragon News Home</h1>
            <div>
                {
                  data.length > 0 ?   (data.map(news => <div key={news._id} className='my-8 border rounded-xl'>
                    <div className='py-3 px-3 flex items-center justify-between bg-gray-200 rounded-t-xl'>
                        <div className='flex items-center space-x-5'>
                            <img className='w-14 h-14 rounded-full' src={news.author.img} alt="" />
                            <div className='space-y-1'>
                                <h1 className='font-bold text-xl'>{news.author.name ? news.author.name : 'Not Available'}</h1>
                                <p className='text-gray-400'>{news.author.published_date}</p>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <MdBookmarks size={22}/>
                            <IoShareSocialSharp size={22}/>
                        </div>
                    </div>
                    <div className='p-5'>
                        <h1 className='font-extrabold text-2xl my-8'>{news.title}</h1>
                        <img src={news.image_url} alt="" />
                        <p className='my-3 text-gray-500'>
                            {
                                news.details.length > 100 ? `${news.details.slice(0, 300)} ....` : news.details
                            }
                            </p>
                        <Link to={`/news/${news._id}`} className='font-bold text-[#FF8C47]'>Read More</Link>
                    </div>
                    <div className='border-b-2 w-[90%] mx-auto'></div>
                    <div className='p-5 flex justify-between items-center'>
                       <div className='flex items-center space-x-4'>
                       <RatingComponent ratig={news.rating.number}/>
                       <p className='font-bold'>{news.rating.number}</p>
                       </div>
                        <div className='flex items-center space-x-3'>
                            <FaRegEye size={22}/>
                            <p className='font-bold'>{news.total_view}</p>
                        </div>
                    </div>
                </div>))
                : (
                    <div className='w-full text-center mt-8'>
                        <h1>No News Found</h1>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default News;