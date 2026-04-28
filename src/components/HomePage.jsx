import React from 'react';
import PhotoCrad from './PhotoCrad';
import AllPhotosPage from '@/app/all-photos/page';

const HomePage = async () => {
    const res = await fetch("https://pixgen-b.vercel.app/data.json");
    const data = await res.json();
    // console.log(data);

    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-15'>
            {
                data.slice(0, 8).map(item => <PhotoCrad key={item.id} item={item}></PhotoCrad>)
            }
        </div>

        {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-15'>
            {
                data.map(item => <AllPhotosPage key={item.id} data={item}></AllPhotosPage>)
            }
        </div> */}
        </div>
    );
};

export default HomePage;