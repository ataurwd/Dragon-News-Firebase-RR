import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex bg-[#F3F3F3]'>
            <button className='bg-[#D72050] text-white px-3 py-1'>Latest</button>
            <Marquee pauseOnHover={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque porro veniam maiores! Officiis, exercitationem dolore culpa aut maiores asperiores magni, iusto odit praesentium id maxime tempora nulla et? Placeat.
            </Marquee>
        </div>
    );
};

export default LatestNews;