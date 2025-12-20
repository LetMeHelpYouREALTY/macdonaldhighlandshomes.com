"use client";

import { useEffect } from "react";

export default function TestImagesPage() {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-images/page.tsx:5',message:'TestImagesPage mounted',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'F'})}).catch(()=>{});
  }, []);
  // #endregion

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Test 1: Regular img tag (absolute path)</h2>
          <div className="relative w-full h-64 bg-gray-200">
            <img
              src="/photos/community/hero-view-lifestyle.jpg"
              alt="Test image"
              className="w-full h-64 object-cover"
              onLoad={() => {
                // #region agent log
                fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-images/page.tsx:20',message:'Test1 img onLoad',data:{src:'/photos/community/hero-view-lifestyle.jpg'},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'G'})}).catch(()=>{});
                // #endregion
              }}
              onError={(e) => {
                // #region agent log
                fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-images/page.tsx:27',message:'Test1 img onError',data:{src:'/photos/community/hero-view-lifestyle.jpg',error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'H'})}).catch(()=>{});
                // #endregion
              }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Test 2: Direct URL link</h2>
          <p>Click to test direct access: <a href="/photos/community/hero-view-lifestyle.jpg" target="_blank" className="text-blue-600 underline">Open /photos/community/hero-view-lifestyle.jpg</a></p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Test 3: Multiple community images</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="/photos/community/guard-gate.jpg" alt="Guard gate" className="w-full h-48 object-cover" />
            <img src="/photos/community/golf-lifestyle.jpg" alt="Golf" className="w-full h-48 object-cover" />
            <img src="/photos/community/clubhouse.jpg" alt="Clubhouse" className="w-full h-48 object-cover" />
            <img src="/photos/community/pool.jpg" alt="Pool" className="w-full h-48 object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Test 4: Agent photo</h2>
          <img
            src="/photos/agent/dr-jan-duffy-headshot.jpg"
            alt="Dr. Jan Duffy"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
