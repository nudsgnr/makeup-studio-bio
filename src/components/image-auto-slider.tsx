import React, { useState, useRef, useEffect } from 'react';

export const Component = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle touch interactions
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Resume animation after a short delay to allow for smooth transition
    setTimeout(() => setIsPaused(false), 100);
  };

  const handleScroll = () => {
    // Pause animation when user is actively scrolling
    setIsPaused(true);
    // Resume after user stops scrolling
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => setIsPaused(false), 1000);
  };
  // Images for the infinite scroll - using local images
  const images = [
    "/images/01.jpg",
    "/images/02.jpg",
    "/images/03.jpg",
    "/images/04.jpg",
    "/images/05.jpg",
    "/images/06.jpg",
    "/images/07.jpg",
    "/images/08.jpg",
    "/images/09.mov"
  ];

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 54s linear infinite;
        }
        
        .infinite-scroll.paused {
          animation-play-state: paused;
        }
        
        .carousel-container {
          touch-action: pan-x;
          -webkit-overflow-scrolling: touch;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center py-2">
          <div 
            ref={containerRef}
            className="scroll-container w-full h-full carousel-container overflow-x-auto overflow-y-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
          >
            <div 
              ref={scrollRef}
              className={`infinite-scroll flex gap-4 w-max h-full ${isPaused ? 'paused' : ''}`}
            >
                {duplicatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="image-item flex-shrink-0 h-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(image);
                    }}
                  >
                  {image.endsWith('.mov') ? (
                    <video
                      src={image}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`Gallery image ${(index % images.length) + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-lg bg-white bg-opacity-20 backdrop-saturate-150 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            {/* Image or Video with Close button */}
            <div 
              className="w-full flex-1 flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.endsWith('.mov') ? (
                <video
                  src={selectedImage}
                  className="max-w-full max-h-full object-contain rounded-lg mb-2"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain rounded-lg mb-2"
                />
              )}
              
              {/* Close button right beneath image */}
              <button
                className="bg-transparent border-2 border-black text-black px-4 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all w-full max-w-sm mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
