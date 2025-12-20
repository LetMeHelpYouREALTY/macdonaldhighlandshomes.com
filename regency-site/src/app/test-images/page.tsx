import Image from "next/image";

export default function TestImagesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Test 1: Next.js Image Component</h2>
          <div className="relative w-full h-64 bg-gray-200">
            <Image
              src="/photos/community/hero-view-lifestyle.jpg"
              alt="Test image"
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Test 2: Regular img tag</h2>
          <img
            src="/photos/community/hero-view-lifestyle.jpg"
            alt="Test image regular"
            className="w-full h-64 object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Test 3: Direct URL test</h2>
          <p>Try accessing: <a href="/photos/community/hero-view-lifestyle.jpg" target="_blank" className="text-blue-600 underline">/photos/community/hero-view-lifestyle.jpg</a></p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Test 4: Image with width/height</h2>
          <Image
            src="/photos/community/hero-view-lifestyle.jpg"
            alt="Test image with dimensions"
            width={800}
            height={400}
            className="object-cover"
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}
