import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const schools = [
    {
        name: "RDF Kalleda High School",
        image: "https://i0.wp.com/rdfindia.org/wp-content/uploads/2010/12/ks-school-building-1.jpg?fit=448%2C240&ssl=1",
        link: "https://rdfindia.org/educate/our-schools/#Kalleda"
    },
    {
        name: "RDF Matendla School",
        image: "https://i0.wp.com/rdfindia.org/wp-content/uploads/2010/12/ms-school-pic.png?fit=458%2C272&ssl=1",
        link: "https://rdfindia.org/educate/our-schools/#Matendla"
    },
    {
        name: "RDF Redlawada School",
        image: "https://i0.wp.com/rdfindia.org/wp-content/uploads/2010/12/rs-building.jpg?fit=657%2C326&ssl=1",
        link: "https://rdfindia.org/educate/our-schools/#Redlawada"
    },
    {
        name: "RDF Rollakal School",
        image: "https://i0.wp.com/rdfindia.org/wp-content/uploads/2010/12/rollakal-school-building.jpg",
        link: "https://rdfindia.org/educate/our-schools/#Wadlakonda"
    },
    {
        name: "RDF Vanitha Achuta Pai Vidyalaya Junior College",
        image: "https://i0.wp.com/rdfindia.org/wp-content/uploads/2010/12/jc-building.jpg?fit=448%2C139&ssl=1",
        link: "https://rdfindia.org/educate/our-schools/#VAP"
    },
];

const OurSchools = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % schools.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? schools.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction > 0 ? -1000 : 1000,
                opacity: 0
            };
        }
    };

    return (
        <div className='bg-[#f9f9f9] py-10 rounded-lg shadow-md max-w-[95%] mx-auto p-4 md:p-6 mt-3 overflow-hidden'> {/* Added overflow-hidden to the container */}
            <div className="text-center py-8">
                <h1 className="font-extrabold text-4xl text-[#264653] bg-transparent" style={{fontFamily:'sans-serif'}}>Our Schools</h1>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg"> {/* Adjusted heights for responsiveness */}
                <AnimatePresence initial={false} custom={activeIndex}>
                    <motion.div
                        key={activeIndex}
                        custom={activeIndex}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <a href={schools[activeIndex].link} className="block w-full h-full relative">
                            <img
                                src={schools[activeIndex].image}
                                className="block w-full h-full object-cover rounded-lg"
                                alt={schools[activeIndex].name}
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center" style={{ fontFamily: "sans-serif" }}>{schools[activeIndex].name}</h2> {/* Adjusted text size for responsiveness */}
                            </div>
                        </a>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex justify-between items-center">
                    <button onClick={prevSlide} className="p-2 bg-black/50 rounded-full hover:bg-black/70 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onClick={nextSlide} className="p-2 bg-black/50 rounded-full hover:bg-black/70 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurSchools;