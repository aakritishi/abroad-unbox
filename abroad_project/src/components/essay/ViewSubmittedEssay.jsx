import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ViewSubmittedEssay = () => {
    const [submittedEssay, setSubmittedEssay] = useState([]);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const getData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/essay-forms/`);
            if (response) {
                setSubmittedEssay(response.data);
            }
        } catch (error) {
            console.log("Failed to fetch the essay data", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const toggleDescription = (index) => {
        setExpandedDescriptions(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div>
            <Nav />
            <div className='w-full px-6 py-4 mx-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-green-800 text-white border-none font-normal text-nowrap'>
                            <td className='px-4 py-3'>S.No</td>
                            <td className='px-4 py-3'>Student Name</td>
                            <td className='px-4 py-3'>Title</td>
                            <td className='px-4 py-3'>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedEssay.length > 0 ? (
                            submittedEssay.map((essay, index) => (
                                <tr
                                    key={index}
                                    className='odd:bg-gray-50 bg-white hover:bg-gray-100 font-normal text-gray-900 border-t-0 border-l-0 border-r-0 border border-gray-200'
                                >
                                    <td className='px-4 py-4'>{index + 1}</td>
                                    <td className='px-4 py-4 text-nowrap'>{essay.student_first_name} {essay.student_last_name}</td>
                                    <td className='px-4 py-4 text-nowrap'>{essay.title}</td>
                                    <td
                                        className={`px-4 py-6 cursor-pointer transition-all duration-300 ease-in-out text-justify ${expandedDescriptions[index] ? '' : 'line-clamp-1'}`}
                                        onClick={() => toggleDescription(index)}
                                    >
                                        {essay.description}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>
                                    <p>No data available at the moment!!</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewSubmittedEssay;
