import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Nav from './components/Nav';
import Nav from './Nav';

function Essay() {
    return (
        <>
        <Nav />
        <div className='w-11/12 p4 mx-auto mt-3'>
            <div className='p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-full mx-auto'>
                <p className='text-2xl font-bold text-white'>Essay Writing</p>
            </div>

            <div className='w-full flex flex-col md:flex-row lg:flex-row gap-2 mt-2' >
                <div className='w-full md:w-1/2 lg-1/2'>
                    {/* Video here */}
                    <iframe className='w-full h-[70dvh]' src="https://www.youtube.com/embed/LGdPMf-SgBA?autoplay=0&mute=1" allowFullScreen>
                    </iframe>
                </div>
                <div className='w-full h-[70dvh] md:w-1/2 lg-1/2 overflow-scroll bg-gradient-to-l from-[#006600] to-[#ffffff] p-2'>
                    <label className='text-xl font-semibold'>Essay Title:</label><br />
                    <input type="text" name="title" placeholder="Title" className='p-2 w-full border-1 rounded-lg bg-white' /><br /><br />
                    <label className='text-xl mt-5 font-semibold'>Your essay submission: </label><br />
                    <textarea type="textarea" placeholder="Description" rows="13" className='p-2 w-full border-1 rounded-lg bg-white resize-none '></textarea>
                    <input type="submit" name="submit" value="Submit" className='w-full bg-white p-2 rounded-lg border-1 cursor-pointer hover:bg-blue-300 text-xl font-semibold'/>
                </div>
            </div>
        </div>
        </>

    );

}

export default Essay;
