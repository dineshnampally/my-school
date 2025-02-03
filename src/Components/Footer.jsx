import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#fff] py-6 rounded-lg shadow-lg max-w-[95%] mx-auto p-6 mt-3 mb-10 flex flex-col md:flex-row-reverse'>
            <div className="md:w-1/2 relative ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.1968154198144!2d78.7844211!3d18.246797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccf0fb09fa2ae3%3A0x918569be4fcf597c!2sRDF%20School%20Matendla!5e0!3m2!1sen!2sin!4v1738564040110!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RDF Location"
                    className="rounded-lg"
                ></iframe>
                <div className="absolute inset-0 bg-black opacity-10 rounded-lg pointer-events-none"></div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <section className="bg-white">
                    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                            <div className="px-5 py-2">
                                <a href="https://rdfindia.org/about/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    About
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="https://rdfblog.wordpress.com/category/schools/rdf-matendla-school/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Blog
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="https://rdfindia.org/about/members/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Team
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="https://rdfindia.org/join-us/donate/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Donate
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="https://rdfindia.org/contact-us/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Contact
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="https://rdfindia.org/join-us/volunteer/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Volunteer
                                </a>
                            </div>
                        </nav>
                        <div className="flex justify-center mt-8 space-x-6">
                            <a href="https://www.facebook.com/RuralDevelopmentFoundation" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/rdf_india" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                Instagram
                            </a>
                            <a href="https://x.com/RDFIndia" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">X (twitter)</span>
                                X
                            </a>
                            <a href="https://www.youtube.com/rdfindiamedia" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">YouTube</span>
                                YouTube
                            </a>
                        </div>
                        <p className="mt-8 text-base leading-6 text-center text-gray-400">
                            This is a web Project | visit rdf @ <a href="https://rdfindia.org/" className='text-black'>https://rdfindia.org/</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;
