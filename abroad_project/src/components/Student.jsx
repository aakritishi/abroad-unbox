import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Student() {
    const [students, setStudents] = useState([]);

    // Fetch students when component mounts
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/students/`);
                setStudents(response.data); // Store data in state
            } catch (error) {
                console.error('Error fetching students:', error);
                setStudents([]); // Set to empty if error occurs
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className='bg-gray-300 px-10 py-4 mt-3 w-11/12 mx-auto'>
            <h1 className='text-xl font-bold mb-4'>Student Details</h1>
            <div className='bg-white shadow-md rounded-lg p-4'>
                {students.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 px-4 py-2">ID</th>
                                <th className="border border-gray-400 px-4 py-2">First Name</th>
                                <th className="border border-gray-400 px-4 py-2">Last Name</th>
                                <th className="border border-gray-400 px-4 py-2">Username</th>
                                <th className="border border-gray-400 px-4 py-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="text-center">
                                    <td className="border border-gray-400 px-4 py-2">{student.id}</td>
                                    <td className="border border-gray-400 px-4 py-2">{student.first_name}</td>
                                    <td className="border border-gray-400 px-4 py-2">{student.last_name}</td>
                                    <td className="border border-gray-400 px-4 py-2">{student.username}</td>
                                    <td className="border border-gray-400 px-4 py-2">{student.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading students...</p>
                )}
            </div>
        </div>
    );
}

export default Student;
