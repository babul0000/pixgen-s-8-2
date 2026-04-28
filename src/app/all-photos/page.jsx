
import PhotoCrad from '@/components/PhotoCrad';
import React from 'react';

const AllPhotosPage = async() => {
    const res = await fetch("https://pixgen-b.vercel.app/data.json");
    const data = await res.json();
    console.log(data);
    
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-15'>
            {
                data.map(item => <PhotoCrad key={item.id} item={item}></PhotoCrad>)
            }
        </div>
    );
};

export default AllPhotosPage;