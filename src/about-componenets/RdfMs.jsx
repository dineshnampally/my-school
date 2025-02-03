import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

const RdfMs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isExpanded, setIsExpanded] = useState(false);

  const text = `Matendla was the first RDF school to be built outside the Warangal district. In a decade, it has grown from a small primary school “under the trees” to a building with modern infrastructure and facilities. In 2015, a new block with additional classrooms, science & computer labs and dining hall were added with funding from Kapil Education Trust. Another initiative of Kapil Education Trust has given direction to create a self sustainability plan in a period of three years. Kapil Education Trust solved a problem faced by students who found it difficult to reach school on time due to the absence of proper transport system by donating a school bus. They have also installed a water plant which has solved the drinking water crisis in the school as well as the entire village of Matendla.`;

  const truncatedText = text.substring(0, 500);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 10 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="bg-[#FEFEFE] py-6 rounded-lg shadow-md max-w-[95%] mx-auto p-4 md:p-6 mt-3 overflow-hidden comp"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="container mx-auto py-8 md:py-12">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
          {/* Image container */}
          <motion.div
            className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-md max-h-[250px] md:max-h-[350px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <img
              src="https://rdfblog.wordpress.com/wp-content/uploads/2022/05/img-20220408-wa0012.jpg?w=2500&h="
              alt="Digital Obstacles"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Container */}
          <div className="w-full md:w-1/2 flex flex-col items-start mx-4">
            <motion.header
              className="text-left mb-4"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "sans-serif" }}>
                RDF School, Matendla
              </h1>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base">
                {isExpanded ? text : `${truncatedText}... `}
                <button onClick={() => setIsExpanded(!isExpanded)} className="text-green-600 font-bold ml-2">
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </p>
            </motion.header>

            {/* Second Image */}
            <motion.div
              className="text-gray-700 leading-relaxed mt-4 md:mt-6 w-full rounded-lg overflow-hidden max-h-[200px] md:max-h-[300px]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              
              {/* You can add another image here if needed */}
            </motion.div>

            {/* Button */}
            <motion.div
              className="mt-4 md:mt-6 flex gap-4"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <a
                href="https://rdfindia.org/contact-us/matendla/"
                className="px-5 py-2 md:px-6 md:py-3 bg-green-600 text-white text-sm md:text-base font-medium rounded-lg hover:bg-green-700 transition duration-100"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RdfMs;