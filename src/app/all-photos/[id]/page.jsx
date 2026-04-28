import Image from 'next/image';
import React from 'react';

const PhotoDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://pixgen-b.vercel.app/data.json");
    const data = await res.json();

    const item = data.find(value => value.id == id);
    console.log(item);



    console.log(id);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
    <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-800">
        
        {/* Left: Image Container */}
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px] bg-zinc-100">
            <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                priority
            />
        </div>

        {/* Right: Info Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-3 block">
                    {item.category}
                </span>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    {item.title}
                </h1>
                <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border-l-4 border-indigo-500">
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                        "{item.prompt}"
                    </p>
                </div>
            </div>

            {/* Data Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                    { label: 'Model', value: item.model },
                    { label: 'Resolution', value: item.resolution || '1024x1024' },
                    { label: 'Likes', value: `❤️ ${item.likes}` },
                    { label: 'Downloads', value: `⬇️ ${item.downloads}` }
                ].map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800">
                        <p className="text-[10px] text-zinc-400 uppercase font-bold mb-1 tracking-wider">{stat.label}</p>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <button className="flex-[2] bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white py-4 rounded-xl font-bold text-sm transition-all hover:bg-zinc-800 active:scale-95">
                    Download Artwork
                </button>
                <button className="flex-1 border border-zinc-200 dark:border-zinc-700 py-4 rounded-xl font-bold text-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800">
                    Share
                </button>
            </div>
        </div>
    </div>
</div>
    );
};

export default PhotoDetails;