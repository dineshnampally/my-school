
import React, { useState, useRef } from 'react'
import { supabase } from '../supabase.config'
import { v4 as uuidv4 } from 'uuid'
import blog_image from '../assets/blog.png'

const EventPost = () => {

  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [isFeed, setIsFeed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  const sb_url = import.meta.env.VITE_SUPABASE_URL;
  const CDN_URL = sb_url + '/storage/v1/object/public/blog_images/'

  const postFiles = async (e) => {
    e.preventDefault();
    const imageUrls = {};

    // Check if the files are .jpg
    if (image1 && !image1.name.endsWith('.jpg')) {
      alert('Only .jpg files are allowed!');
      return;
    }
    if (image2 && !image2.name.endsWith('.jpg')) {
      alert('Only .jpg files are allowed!');
      return;
    }
    if (image3 && !image3.name.endsWith('.jpg')) {
      alert('Only .jpg files are allowed!');
      return;
    }

    setLoading(true);  // Set loading state at the start of the upload process

    try {
      // uploading images to storage
      if (image1) {
        const { data, error } = await supabase.storage.from('blog_images').upload(uuidv4() + '.jpg', image1);
        if (error) throw error;
        imageUrls.image1 = `${CDN_URL}${data.path}`;
      }

      if (image2) {
        const { data, error } = await supabase.storage.from("blog_images").upload(uuidv4() + ".jpg", image2);
        if (error) throw error;
        imageUrls.image2 = `${CDN_URL}${data.path}`;
      }

      if (image3) {
        const { data, error } = await supabase.storage.from("blog_images").upload(uuidv4() + ".jpg", image3);
        if (error) throw error;
        imageUrls.image3 = `${CDN_URL}${data.path}`;
      }

      // Uploading images, heading, content, and isFeed to supabase database
      const { data, error } = await supabase.from('blog_data').insert([{
        image1: imageUrls.image1 || null,
        image2: imageUrls.image2 || null,
        image3: imageUrls.image3 || null,
        heading,
        description,
        isFeed
      }]);

      if (error) throw error;

      setSuccess(true);
      setTimeout(() => {
        // Clear the form content after 3 seconds
        setHeading('');
        setDescription('');
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setIsFeed(false);
        image1Ref.current.value = null;
        image2Ref.current.value = null;
        image3Ref.current.value = null;
        setSuccess(false);
      }, 3000);

    } catch (error) {
      console.log(error, " error uploading files");
    } finally {
      // Reset the loading state in the finally block to ensure it gets reset even if there's an error
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex rounded-lg shadow-md bg-[#10989E] max-w-[95%] md:max-w-[95%] mx-auto items-center justify-center p-6 mt-3">
  
      <div className="min-h-screen flex flex-wrap flex-col md:flex-row rounded-lg shadow-md max-w-[98%] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] mx-auto items-center justify-center p-6 mt-3 bg-indigo-50 border">
        <div className=' md:w-1/2 lg:w-1/3 p-4 flex flex-col'>
          <h3 className="text-lg font-extrabold text-left md:text-xl lg:text-2xl text-gray-800">You can Push this event/blog to Feed</h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">add only .jpg files</p>
          <img src={blog_image} alt="" className='w-[400px] block lg:hidden xl:hidden p-4 mt-10' />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg w-full border border-gray-200 mt-4 md:p-8 md:max-w-[80%]">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 md:text-2xl md:mb-6">Create a Blog</h3>
          <form onSubmit={postFiles}>
            <div className="mb-4">
              <label htmlFor="blog_title" className="block text-sm font-medium text-gray-700">Blog Title</label>
              <input
                type="text"
                name="title"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 md:p-3"
                value={heading}
                onChange={e => setHeading(e.target.value)}
                required
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="blog_content" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="content"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 md:p-3"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>
  
            <div className="mb-4">
              <h5 className="text-lg font-medium text-gray-700">Upload Images </h5>
  
              <div className="mb-2">
                <input
                  ref={image1Ref}
                  type="file"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 md:p-3"
                  onChange={e => setImage1(e.target.files[0])}
                  accept=".jpg"
                />
                {image1 && (
                  <img src={URL.createObjectURL(image1)} alt="Preview" className="w-full mt-2 rounded-lg max-h-60 object-cover" />
                )}
              </div>
  
              <div className="mb-2">
                <input
                  ref={image2Ref}
                  type="file"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 md:p-3"
                  onChange={e => setImage2(e.target.files[0])}
                  accept=".jpg"
                />
                {image2 && (
                  <img src={URL.createObjectURL(image2)} alt="Preview" className="w-full mt-2 rounded-lg max-h-60 object-cover" />
                )}
              </div>
  
              <div className="mb-4">
                <input
                  ref={image3Ref}
                  type="file"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 md:p-3"
                  onChange={e => setImage3(e.target.files[0])}
                  accept=".jpg"
                />
                {image3 && (
                  <img src={URL.createObjectURL(image3)} alt="Preview" className="w-full mt-2 rounded-lg max-h-60 object-cover" />
                )}
              </div>
            </div>
  
            <div className="mb-4 flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value="feed"
                  className="sr-only peer"
                  onChange={e => setIsFeed(e.target.checked)}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-indigo-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition
			                  peer-checked:bg-green-500 dark:peer-checked:bg-green-500"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push to Feed</span>
              </label>
            </div>
  
            <button
              type="submit"
              className="w-full p-2 mt-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition md:p-3"
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="w-6 h-6 border-4 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
                </div>
              ) : (
                'Post'
              )}
            </button>
          </form>
  
          {success && (
            <div className="mt-6 p-4 text-center text-white bg-emerald-500 rounded-lg">
              <h4 className="font-semibold">Successfully Uploaded!</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  )
  
}

export default EventPost
