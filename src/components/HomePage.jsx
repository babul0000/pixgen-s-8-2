import React from 'react';

const HomePage = async () => {
    const res = await fetch("https://pixgen-b.vercel.app/data.json");
    const data = await res.json();
    console.log(data);

    return (
        <div>
            hello
        </div>
    );
};

export default HomePage;