import React from 'react';
import { FaBookOpen, FaUtensils, FaBuilding, FaChalkboardTeacher, FaGraduationCap, FaRunning } from "react-icons/fa";
import meal from '../assets/meal.png';
import { motion } from 'framer-motion';

const Infrastructure = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-auto w-full overflow-hidden bg-[#f5f5f5] py-6 rounded-lg shadow-md max-w-[95%] mx-auto p-4 md:p-6 mt-3 flex flex-col md:flex-row items-center">
      <motion.div
        className="w-full md:w-1/2 h-auto md:h-full mb-6 md:mb-0"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 md:mt-16 text-center uppercase">Education that Transforms</h1>

          <div className="mt-6 md:mt-10 font-light text-gray-500">
            <table className="w-full table-auto text-sm md:text-base">
              <tbody>
                {/* KEY CHANGE: Removed extra whitespace inside the map */}
                {[
                  { title: "Quality & Affordable Education", icon: <FaBookOpen className="text-gray-600 text-2xl md:text-3xl" /> },
                  { title: "Nutritious Midday Meals", icon: <FaUtensils className="text-gray-600 text-2xl md:text-3xl" /> },
                  { title: "Good Infrastructure", icon: <FaBuilding className="text-gray-600 text-2xl md:text-3xl" /> },
                  { title: "Supportive & Inspiring Faculty", icon: <FaChalkboardTeacher className="text-gray-600 text-2xl md:text-3xl" /> },
                  { title: "Beyond the Classroom Learning", icon: <FaGraduationCap className="text-gray-600 text-2xl md:text-3xl" /> },
                  { title: "Sports and Games", icon: <FaRunning className="text-gray-600 text-2xl md:text-3xl" /> },
                ].map((item, index) => (
                  <tr key={index} className="flex items-center gap-2 md:gap-4 py-2">
                    <td className="w-8 md:w-12 text-center">{item.icon}</td>
                    <td className="uppercase">{item.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 h-auto md:h-full mt-6 md:mt-0"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <img
          src="https://www.yudhvirfoundation.com/wp-content/uploads/2024/01/2023-A.jpg"
          className="h-full w-full object-cover"
          alt="Nutritious Meal"
        />
      </motion.div>
    </div>
  );
};

export default Infrastructure;