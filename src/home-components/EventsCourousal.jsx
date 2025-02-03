import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase.config';
import { Link } from 'react-router-dom';
import { BsNewspaper, BsCalendarEvent, BsBoxArrowInRight } from 'react-icons/bs';

const EventsCarousel = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const { data, error } = await supabase
        .from("announcements")
        .select("heading, created_at")
        .order("created_at", { ascending: false });

      if (data) setAnnouncements(data);
      else console.error(error);
    };

    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('blog_data')
        .select("image1, heading, created_at, isFeed")
        .order("created_at", { ascending: false });

      if (data) {
        setEvents(data);
        // Check if any event has `isFeed: true`
        setIsHome(data.some(event => event.isFeed));
      } else {
        console.error(error);
      }
    };

    fetchAnnouncements();
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[95%] mx-auto bg-[#fff] bg-opacity-80 backdrop-blur-lg py-8 rounded-xl shadow-xl p-6 md:p-8 mt-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#4E5C00] flex items-center justify-center" style={{ fontFamily: "sans-serif" }}>
        <BsNewspaper className="mr-2 text-4xl" /> Notice Board
      </h2>
      <div className="grid md:grid-cols-2 gap-8">

        {/* Announcements Section */}
        <div className="p-6 bg-white shadow-xl rounded-xl border border-gray-200 hover:shadow-2xl transition relative">
          <div className="flex items-center mb-4">
            <BsNewspaper className="mr-2 text-2xl text-[#242424]" />
            <h3 className="text-2xl font-semibold text-[#242424]">
              Announcements <Link to="/announcements" className="ml-2 text-blue-500"><BsBoxArrowInRight className="inline-block" /></Link>
            </h3>
          </div>
          <div className="overflow-y-auto max-h-[40vh] custom-scrollbar pr-2">
            <Link to='/announcements'>
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="p-4 mb-3 bg-white rounded-lg border border-gray-300 hover:bg-gray-200 transition"
                >
                  <h4 className="text-lg font-bold text-[#333333]">{announcement.heading}</h4>
                  <p className="text-sm text-gray-600">{new Date(announcement.created_at).toLocaleDateString('en-GB')}</p>
                </div>
              ))}
            </Link>
          </div>
        </div>

        {/* Events Section */}
        <div className="p-6 bg-white shadow-xl rounded-xl border border-gray-200 hover:shadow-2xl transition relative">
          <div className="flex items-center mb-4">
            <BsCalendarEvent className="mr-2 text-2xl text-[#242424]" />
            <h3 className="text-2xl font-semibold text-[#242424]">
              Events / Blog <Link to="/events" className="ml-2 text-blue-500"><BsBoxArrowInRight className="inline-block" /></Link>
            </h3>
          </div>
          <div className="overflow-y-auto max-h-[40vh] custom-scrollbar pr-2">
            <Link to='/events'>
              {isHome ? (
                events
                  .filter(event => event.isFeed) // Only show events with `isFeed: true`
                  .map((event, index) => (
                    <div key={index} className="p-4 mb-3 bg-white rounded-lg shadow-md border border-gray-300 hover:bg-gray-200 transition text-[#333333]">
                      {event.image1 && (
                        <img
                          src={event.image1}
                          alt={event.heading}
                          className="w-full h-[180px] object-cover rounded-lg mb-3 hover:scale-105 transition-transform"
                        />
                      )}
                      <h4 className="text-lg font-bold text-gray-900">{event.heading}</h4>
                      <p className="text-sm text-gray-600">{new Date(event.created_at).toLocaleDateString('en-GB')}</p>
                    </div>
                  ))
              ) : (
                <p className="text-center text-gray-600">No posts pushed to feed.</p>
              )}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventsCarousel;
