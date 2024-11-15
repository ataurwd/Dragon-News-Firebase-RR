import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import RightAside from './RightAside';

const NewsDetails = () => {
    const data = useLoaderData()
    const details = data.data[0];
    return (
        <div>
            <Header/>
            <main className='grid grid-cols-12 w-[90%] mx-auto gap-5 my-5'>
                <div className='col-span-9'>
                    <h1 className='text-xl font-bold'>Dragon News</h1>

                    <div className='space-y-3'>
                        <img src={details.image_url} alt="" />
                        <h1 className='text-2xl font-bold w-4/5'>{details.title}</h1>
                        <p>{details.details}</p>
                        <Link to={`/category/${details.category_id}`} className='px-3 py-1 bg-[#D72050] text-white'>All news in this category</Link>
                    </div>
                </div>
                <div className='col-span-3'>
                <RightAside/>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;