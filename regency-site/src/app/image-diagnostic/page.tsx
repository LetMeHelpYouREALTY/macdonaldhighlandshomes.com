"use client";

import { useEffect, useState } from "react";

export default function ImageDiagnosticPage() {
  const [testResults, setTestResults] = useState<Array<{src: string, loaded: boolean, error: string | null}>>([]);
  
  const testImages = [
    "/photos/community/hero-view-lifestyle.jpg",
    "/photos/community/guard-gate.jpg",
    "/photos/community/golf-lifestyle.jpg",
    "/photos/agent/dr-jan-duffy-headshot.jpg",
  ];

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'image-diagnostic/page.tsx:10',message:'ImageDiagnosticPage mounted',data:{testImages:testImages},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'F'})}).catch(()=>{});
    // #endregion

    const results = testImages.map(src => ({ src, loaded: false, error: null as string | null }));
    setTestResults(results);

    testImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        // #region agent log
        fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'image-diagnostic/page.tsx:20',message:'Image loaded via Image() constructor',data:{src:src,index:index},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'G'})}).catch(()=>{});
        // #endregion
        setTestResults(prev => {
          const newResults = [...prev];
          newResults[index] = { ...newResults[index], loaded: true };
          return newResults;
        });
      };
      img.onerror = (e) => {
        // #region agent log
        fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'image-diagnostic/page.tsx:30',message:'Image error via Image() constructor',data:{src:src,index:index,error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'H'})}).catch(()=>{});
        // #endregion
        setTestResults(prev => {
          const newResults = [...prev];
          newResults[index] = { ...newResults[index], error: 'Failed to load' };
          return newResults;
        });
      };
      img.src = src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Image Loading Diagnostic</h1>
      
      <div className="space-y-6">
        {testImages.map((src, index) => {
          const result = testResults[index];
          return (
            <div key={src} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">{src}</code>
                <div className="flex gap-2">
                  {result?.loaded && <span className="text-green-600 font-semibold">✓ Loaded</span>}
                  {result?.error && <span className="text-red-600 font-semibold">✗ Error</span>}
                  {!result?.loaded && !result?.error && <span className="text-gray-500">Loading...</span>}
                </div>
              </div>
              <div className="relative w-full h-48 bg-gray-200 rounded overflow-hidden">
                <img
                  src={src}
                  alt={`Test ${index + 1}`}
                  className="w-full h-full object-cover"
                  onLoad={() => {
                    // #region agent log
                    fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'image-diagnostic/page.tsx:50',message:'img tag onLoad',data:{src:src,index:index},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'G'})}).catch(()=>{});
                    // #endregion
                  }}
                  onError={(e) => {
                    // #region agent log
                    fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'image-diagnostic/page.tsx:57',message:'img tag onError',data:{src:src,index:index,error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'H'})}).catch(()=>{});
                    // #endregion
                  }}
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <a href={src} target="_blank" className="text-blue-600 hover:underline">
                  Open direct URL →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Check if any images show &quot;✓ Loaded&quot; (green)</li>
          <li>Check if any show &quot;✗ Error&quot; (red)</li>
          <li>Click &quot;Open direct URL&quot; links to test direct file access</li>
          <li>Open browser DevTools (F12) → Console tab for errors</li>
          <li>Check Network tab to see HTTP status codes for image requests</li>
        </ol>
      </div>
    </div>
  );
}
