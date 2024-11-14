import React from 'react';
import Header from './../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftCategory from '../components/LeftCategory';
import RightAside from '../components/RightAside';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <Header/>

           <section className='w-[90%] mx-auto mt-5'>
            <LatestNews/>
            <NavBar/>
           </section>

           <main className='w-[90%] mx-auto mt-5 grid grid-cols-4 gap-5'>
            <aside className=''>
                <LeftCategory/>
            </aside>
            <section className='col-span-2'>
                <Outlet></Outlet>
            </section>
            <RightAside/>
           </main>
        </div>
    );
};

export default Home;