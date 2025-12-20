"use client";
import Navbar from "../../common/Navbar";
import { useState, useEffect } from "react";

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
   "/photos/community/hero-view-lifestyle.jpg",
   "/photos/community/view-lifestyle-00024-full.jpg",
   "/photos/community/golf-lifestyle-full.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentImage ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={src}
                alt={`MacDonald Highlands luxury community view ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ position: 'absolute', inset: 0 }}
                onLoad={() => {
                  // #region agent log
                  fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:40',message:'Header regular img onLoad',data:{src:src,index:index},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'D'})}).catch(()=>{});
                  // #endregion
                }}
                onError={(e) => {
                  // #region agent log
                  fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:47',message:'Header regular img onError',data:{src:src,index:index,error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'E'})}).catch(()=>{});
                  // #endregion
                }}
              />
            </div>
          ))}
          <div className="relative z-20 p-4 text-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-white mb-4 leading-relaxed bg-black/50 rounded-md p-2">
              Easiest way to find your dream home
            </h1>

            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Your ZIP code or City"
                className="p-2 md:p-4 px-4 md:w-52 rounded-md flex-grow"
              />
              <button className="bg-indigo-900 ml-2 p-2 md:p-4 px-3 text-white rounded-md max-w-xs">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
