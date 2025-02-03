import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase.config';
import { FaTrashAlt } from 'react-icons/fa';

const ViewEvent = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [editData, setEditData] = useState({ id: null, heading: '', description: '' });

  // Fetch Data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('blog_data').select('*');
      if (data) {
        setFetchedData(data);

        const initialCheckedState = data.reduce((acc, item) => {
          acc[item.id] = item.isFeed || false;
          return acc;
        }, {});
        setCheckedItems(initialCheckedState);
      } else {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Handle Radio Button
  const handleChecked = async (id) => {
    const newCheckedState = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newCheckedState);

    const { error } = await supabase
      .from('blog_data')
      .update({ isFeed: newCheckedState[id] })
      .eq('id', id);

    if (error) {
      console.error('Error updating isFeed:', error);
    }
  };

  // Enable Editing Mode
  const handleEdit = (item) => {
    setEditData({ id: item.id, heading: item.heading, description: item.description });
  };

  // Save Edited Data to Supabase
  const handleUpdate = async () => {
    const { id, heading, description } = editData;
    const { error } = await supabase
      .from('blog_data')
      .update({ heading, description })
      .eq('id', id);

    if (error) {
      console.error('Error updating blog:', error);
    } else {
      console.log('Blog updated successfully!');
      setFetchedData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, heading, description } : item))
      );
      setEditData({ id: null, heading: '', description: '' });
    }
  };

  // Delete Image from Supabase
  const handleDeleteImage = async (id, imageKey) => {
    const { error } = await supabase
      .from('blog_data')
      .update({ [imageKey]: null })
      .eq('id', id);

    if (error) {
      console.error('Error deleting image:', error);
    } else {
      console.log(`Image ${imageKey} deleted successfully!`);
      setFetchedData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, [imageKey]: null } : item))
      );
    }
  };

  return (
    <div className="min-h-screen flex rounded-lg shadow-md bg-[#10989E] max-w-[95%] mx-auto items-center justify-center p-6 mt-3">
      <div className='min-h-screen flex flex-col md:flex-col rounded-lg shadow-md max-w-[98%] md:max-w-[95%] lg:max-w-[67%] xl:max-w-[68%] 2xl:max-w-[67%] mx-auto items-center justify-center p-6 mt-3 bg-indigo-50 border'>
      <div className=' md:w-1/2 lg:w-1/3 p-4 flex flex-col title text-center mt-10'>
            <h3 className="text-lg font-extrabold text-center md:text-xl lg:text-2xl text-gray-800 ">Your Posted Blogs</h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center">Edit Heading , Description, Images and Post to Feed</p>
        </div>
        <div className="flex overflow-x-auto space-x-4 [&::-webkit-scrollbar]:hidden p-2 w-full cards">
          {fetchedData.map((item) => {
            const createdAt = new Date(item.created_at);
            const formattedDate = createdAt.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            });
            const formattedTime = createdAt.toLocaleTimeString();
            const formattedDay = createdAt.toLocaleDateString(undefined, { weekday: 'long' });
  
            return (
              <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 min-w-[250px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[400px] xl:min-w-[500px] mt-4">
                <form>
                  <div className="mb-4">
                    <h6 className="text-sm font-semibold text-green-500">Created On</h6>
                    <p className="text-gray-700">
                      Time {formattedTime} | Date {formattedDate} | Day {formattedDay}
                    </p>
                  </div>
  
                  {/* Heading and Description */}
                  <div className="mb-4">
                    <label htmlFor={`heading-${item.id}`} className="block text-blue-600 font-medium">Heading</label>
                    <input
                      type="text"
                      value={editData.id === item.id ? editData.heading : item.heading}
                      readOnly={editData.id !== item.id}
                      onChange={(e) => setEditData({ ...editData, heading: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-green-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`description-${item.id}`} className="block text-blue-600 font-medium">Description</label>
                    <textarea
                      value={editData.id === item.id ? editData.description : item.description}
                      readOnly={editData.id !== item.id}
                      onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                      className="w-full p-4 h-40 border border-gray-300 rounded focus:outline-none focus:ring focus:border-green-500 resize-none [&::-webkit-scrollbar]:hidden "
                    />
                  </div>
  
                  {/* Edit and Save Buttons */}
                  <div className="mb-4">
                    {editData.id === item.id ? (
                      <button
                        type="button"
                        onClick={handleUpdate}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none"
                      >
                        Edit
                      </button>
                    )}
                  </div>
  
                  {/* Image Gallery with Delete Buttons */}
                  <div className="flex items-center mb-4 space-x-2">
                    {item.image1 && (
                      <div className="relative">
                        <img src={item.image1} alt="Image 1" className="w-24 h-24 rounded object-cover" />
                        <button
                          type="button"
                          onClick={() => handleDeleteImage(item.id, 'image1')}
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none text-xs"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    )}
                    {item.image2 && (
                      <div className="relative">
                        <img src={item.image2} alt="Image 2" className="w-24 h-24 rounded object-cover" />
                        <button
                          type="button"
                          onClick={() => handleDeleteImage(item.id, 'image2')}
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none text-xs"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    )}
                    {item.image3 && (
                      <div className="relative">
                        <img src={item.image3} alt="Image 3" className="w-24 h-24 rounded object-cover" />
                        <button
                          type="button"
                          onClick={() => handleDeleteImage(item.id, 'image3')}
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none text-xs"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    )}
                  </div>
  
                  {/* Radio Button for Feed */}
                  <div className="mb-4">
                    <label htmlFor={`isFeed-${item.id}`} className="text-green-600 font-medium">Pushed to Feed</label>
                    <input
                      type="radio"
                      name={`isFeed-${item.id}`}
                      checked={checkedItems[item.id] || false}
                      onChange={() => handleChecked(item.id)}
                      className="ml-2"
                    />
                  </div>
                </form>
              </div>
            );
          })}
        </div>
        <p className="text-sm font-extralight text-center text-gray-400 mt-3">
        &lt; swipe for more.. &gt;
          </p>
      </div>
      
    </div>
  );
  
};

export default ViewEvent;