import React, { useState } from 'react';
import { supabase } from '../supabase.config';
import announce_image from '../assets/ann.png'

const AnnouncePost = () => {
    const [announce, setAnnounce] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // heading
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true before making the request
        try {
            const { data, error } = await supabase.from('announcements').insert([
                {
                    heading: announce,
                    description: description
                }
            ]);

            if (error) throw error;

            setSuccess(true);
            setTimeout(() => {
                setAnnounce('');
                setDescription('');
                setSuccess(false);
            }, 3000); // Clear form and show success for 3 seconds

        } catch (error) {
            console.error("Error uploading announcement:", error);
        } finally {
            setLoading(false); // Set loading to false regardless of success/failure
        }
    }

    return (
        <div className="min-h-screen flex flex-col rounded-lg shadow-md bg-[#10989E] max-w-[95%] md:max-w-[95%] mx-auto items-center justify-center p-6 mt-3 ">
            <div className="min-h-screen flex flex-col flex-wrap md:flex-row rounded-lg shadow-md max-w-[98%] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[67%] 2xl:max-w-[67%] mx-auto items-center justify-center p-6 mt-3 bg-indigo-50 border">
                <div className='md:w-1/2 lg:w-1/3 p-4 flex flex-col'>
                    <h3 className="font-extrabold text-left md:text-xl lg:text-2xl text-gray-800 text-xl ">Make An Announcement..!</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 ">Share important updates..</p>
                    <img src={announce_image} alt="" className='w-145 md:mt-20 ' />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-gray-200 mt-4 md:mb-20">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 md:text-2xl md:mb-6">Make an Announcement</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="announce" className="block text-sm font-medium text-gray-700">Announcement Name</label>
                            <input
                                type="text"
                                id="announce"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                                onChange={e => setAnnounce(e.target.value)}
                                value={announce}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Announcement Description</label>
                            <textarea
                                id="description"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                                name="description"
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-3 mt-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex justify-center items-center">
                                    <div className="w-6 h-6 border-4 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
                                </div>
                            ) : (
                                'Announce'
                            )}
                        </button>

                        {success && (
                            <div className="mt-6 p-4 text-center text-white bg-emerald-500 rounded-lg">
                                <h4 className="font-semibold">Successfully Posted!</h4>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AnnouncePost;