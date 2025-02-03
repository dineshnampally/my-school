import React, { useState } from 'react';
import logo from "../assets/rdf.png";
import { motion } from "framer-motion";

const MainRdf = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `The Rural Development Foundation (RDF), a non-profit organization, began as a family initiative. As far back as 1991, members of the Errabelli family discussed the idea of giving something back to their village of Kalleda. They felt a need to repay their debt to the land that had provided their family with wealth over several generations. Members of the Errabelli family recognized that their successes in life were largely due to their access to quality education. Thus in 1996, they established the first RDF school in the estate building that had housed the family. At its inception, RDF was an organization involved in not only educating the children of the village, but also improving overall development of the people and welfare of the village with special reference to public amenities, healthcare and other facilities.`;

  const truncatedText = text.substring(0, 500); // Adjust the number of characters to show initially

  return (
    <div className="min-h-[50vh] bg-[#E7FCF2] py-4 rounded-lg shadow-md max-w-[95%] mx-auto p-4 mt-3">
      <section className="py-4 sm:pb-8 lg:pb-12 xl:pb-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-6 lg:grid-cols-5 gap-x-8">
            <div className="max-w-md mx-auto text-left lg:max-w-none lg:col-span-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-[#212121] uppercase sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                History |
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ae00a] to-[#8BC34A] font-bold" style={{ fontFamily: "Arial, sans-serif" }}>
                  &nbsp; Rural Development Foundation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-base font-normal text-[#666666] sm:text-lg text-left"
              >
                {isExpanded ? text : `${truncatedText}...`}
                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="text-[#4ae00a] font-bold ml-2"
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                </button>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 sm:mt-8"
              >
                <a
                  href="https://rdfindia.org/"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-light text-[#000000] transition-all duration-200 rounded-full border hover:bg-green-400 hover:shadow-lg hover:text-gray-600"
                  role="button"
                >
                  Explore more
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="lg:col-span-2 lg:order-first flex flex-col items-center"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration:  2 }}
                className="w-full max-w-sm mx-auto mt-6 lg:mt-0"
                src={logo}
                alt="RDF Logo"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2 }}
                className="w-full max-w-sm mx-auto mt-6 rounded-lg shadow-lg"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeQq1AlwAUDzpA2kY1pgGzT79-ohZUyktngLBLIEFk6ePDmdoJC9KiloHxTb7-pB_2h_uGUwRXWd3xDTtzVnH4cw2FGs7UeUk5ZkIdiSAj-SVbzKACeeUfJsGSsM42bCMHGUdd7YFICgc/s1600/Capture.PNG"
                alt="Placeholder"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainRdf;