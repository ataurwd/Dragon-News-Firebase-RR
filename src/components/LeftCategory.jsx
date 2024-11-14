import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftCategory = () => {
    const [category, setCategory] = useState([]);
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategory(data.data.news_category))
        
    }, [])
    return (
        <div>
            <h2 className='font-bold mt-4 ml-3'>All Caterogy ({category.length})</h2>

            {/* load all category from the API */}
            <div className='flex flex-col justify-start'>
                 {
                    category.map(data => <NavLink to={`/category/${data.category_id}`} className='text-left pl-10  my-2 py-4' key={data.category_id}>{data.category_name}</NavLink>)
                 }
            </div>
        </div>
    );
};

export default LeftCategory;