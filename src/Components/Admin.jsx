// Admin.js
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EventPost from '../admin-components/EventPost';
import AnnouncePost from '../admin-components/AnnouncePost';
import ViewEvent from '../admin-components/ViewEvent';
import ViewAnnounce from '../admin-components/ViewAnnounce';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [isEventPostVisible, setEventPostVisible] = useState(false);
  const [isAnnouncePostVisible, setAnnouncePostVisible] = useState(false);
  const [isViewEventVisible, setViewEventVisible] = useState(false);
  const [isViewAnnounceVisible, setViewAnnounceVisible] = useState(false);

  const refEventPost = useRef(null);
  const refAnnouncePost = useRef(null);
  const refViewEvent = useRef(null);
  const refViewAnnounce = useRef(null);

  const handleScroll = () => {
    const checkVisibility = (ref, setVisible) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    checkVisibility(refEventPost, setEventPostVisible);
    checkVisibility(refAnnouncePost, setAnnouncePostVisible);
    checkVisibility(refViewEvent, setViewEventVisible);
    checkVisibility(refViewAnnounce, setViewAnnounceVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className='min-h-3 flex rounded-lg shadow-md bg-[#ffff] max-w-[95%] mx-auto items-center justify-center p-6 mt-3'>
        <div className=''>
          <section className="">
            <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
              <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-black dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                  Admin Dashboard
                </h1>
                <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-gray-300 text-black">
                  Manage events, announcements, and view posts all in one place. Streamline your administrative tasks efficiently. <br />
                  <strong className='text-black'>Refresh the page for better results</strong>
                </p>
                <div className="flex justify-center">
                  <Link to="/" className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                    Sign Out
                  </Link>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <img className="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Animated Components */}
      <motion.div
        ref={refEventPost}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isEventPostVisible ? 1 : 0, y: isEventPostVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <EventPost />
      </motion.div>

      <motion.div
        ref={refAnnouncePost}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isAnnouncePostVisible ? 1 :  0, y: isAnnouncePostVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <AnnouncePost />
      </motion.div>

      <motion.div
        ref={refViewEvent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isViewEventVisible ? 1 : 0, y: isViewEventVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <ViewEvent />
      </motion.div>

      <motion.div
        ref={refViewAnnounce}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isViewAnnounceVisible ? 1 : 0, y: isViewAnnounceVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <ViewAnnounce />
      </motion.div>
    </>
  );
};

export default Admin;