import React, { useState } from 'react'
import Sidebar from '../Sidebar'

const Contextual = () => {
const [isAdmin, setIsAdmin]= useState(true);

  return (
    <div className='w-full flex'>
        <div className='w-[35%] md:w-[20%]'>
            <Sidebar/>
        </div>

        <div className='w-[70%] md:w-[80%]'>
        <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Contextual Evidence</h1>

        {isAdmin && (
            <button className="text-blue-600 underline mb-4">Add Subtopic</button>
        )}

        <div className="flex flex-col md:flex-row gap-6">
            {/* Video Container */}
            <div className="w-full md:w-1/2">
                <video
                    className="w-full h-64 md:h-full"
                    controls
                    preload="metadata"
                >
                <source src='' type="video/mp4" />
            </video>
            </div>

            {/* Article Container */}
            <div className="w-full md:w-1/2">
                Article container
            </div>
        </div>
        {/* description section */}
        <div className='my-3 text-justify'>
        <h2 className="text-lg font-semibold">Description:</h2>
            <p className="mb-4">
                If the sentences need modifer in order to make sense, the modifier is restrictive and doesn't get surrounded by commas.
            </p>

            <h2 className="text-lg font-semibold">About:</h2>
            <p className="mb-4">
              If the sentences need modifer in order to make sense, the modifier is restrictive and doesn't get surrounded by commas.
            </p>
        </div>
            {/* Admin Controls */}
            {isAdmin && (
                    <div className="flex gap-4 mt-4">
                    <button className="text-blue-600 underline">Edit Content</button>
                    <button className="text-red-600 underline">Delete Content</button>
                    </div>
            )}
        </div>
    </div>
    </div>
  )
}

export default Contextual