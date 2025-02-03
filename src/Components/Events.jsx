import React, { useEffect, useState } from "react";
import { supabase } from "../supabase.config";
import { motion } from "framer-motion";

const Events = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("blog_data")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) {
        setFetchedData(data);
      } else {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const renderFirstLetterHighlighted = (text) => {
    if (!text) return null;
    return (
      <p className="text-lg text-gray-800 leading-relaxed text-justify">
        <span className="text-5xl font-extrabold text-indigo-500 mr-1 inline-block">
          {text.charAt(0)}
        </span>
        {text.slice(1)}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-[#fff] py-6 flex rounded-lg md:max-w-[95%] max-w-[95%] mx-auto items-center justify-center p-6 mt-3" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-black text-center mb-8 text-[#4E5C00]"
          style={{ fontFamily: 'serif' }}
        >
          The School Bulletin
        </motion.h1>

        <div className="space-y-6 sm:space-y-12">
          {fetchedData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full mb-8"
            >
              <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-300">
                {/* Date */}
                <div className="mb-4 flex justify-end text-left">
                  <span className="text-sm text-gray-600 font-semibold bg-indigo-200 px-3 py-1 rounded-full w-max">
                    {new Date(item.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Image Section (Centered) */}
                {(item.image1 || item.image2 || item.image3) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 justify-center font-light">
                    {item.image1 && (
                      <img
                        src={item.image1}
                        alt={item.heading}
                        className="max-w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                      />
                    )}
                    {item.image2 && (
                      <img
                        src={item.image2}
                        alt={item.heading}
                        className="max-w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                      />
                    )}
                    {item.image3 && (
                      <img
                        src={item.image3}
                        alt={item.heading}
                        className="max-w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                      />
                    )}
                  </div>
                )}

                {/* Content Section */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#242424] mb-4 text-left" >
                  {item.heading}
                </h2>
                {renderFirstLetterHighlighted(item.description)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
