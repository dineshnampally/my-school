import React, { useEffect, useState } from "react";
import { supabase } from "../supabase.config";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const { data, error } = await supabase
        .from("announcements")
        .select("heading, description, created_at")
        .order("created_at", { ascending: false });

      if (data) {
        setAnnouncements(data);
      } else {
        console.error(error);
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div className="min-h-screen py-6 max-w-[95%] mx-auto p-6 mt-3 bg-[#FBFDFC] text-gray-900">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10" style={{fontFamily:"sans-serif"}}>Announcements</h1>
      <div className="space-y-6">
        {announcements.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <p className="text-sm text-gray-500">
              {new Date(item.created_at).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mt-1">
              {item.heading}
            </h2>
            <p className="text-base text-gray-800 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
