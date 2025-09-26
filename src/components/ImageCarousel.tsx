import React, { useEffect, useState, useRef, useCallback } from 'react';
interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    link?: string;
  }>;
  title?: string;
}
export const ImageCarousel = ({
  images,
  title
}: ImageCarouselProps) => {
  // Khởi tạo activeIndex với ảnh giữa danh sách (hoặc 0 nếu chưa có ảnh)
  const [activeIndex, setActiveIndex] = useState(() => 
    images.length > 0 ? Math.floor(images.length / 2) : 0
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  // Initialize refs array for each image
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, images.length);
  }, [images.length]);
  // Function to scroll to a specific image index
  const scrollToIndex = useCallback((index: number) => {
    // Normalize index for infinite loop (allow negative and greater than length)
    const normalizedIndex = ((index % images.length) + images.length) % images.length;
    
    const container = containerRef.current;
    const item = itemsRef.current[normalizedIndex];
    if (container && item) {
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      const itemLeft = item.offsetLeft;
      // Calculate scroll position to center the item
      const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setActiveIndex(normalizedIndex);
    }
  }, [images.length]);
  // Handle mouse/touch events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || images.length === 0) return;
    const x = e.clientX;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Dragged left, go to next slide (infinite loop)
        const nextIndex = (activeIndex + 1) % images.length;
        scrollToIndex(nextIndex);
      } else {
        // Dragged right, go to previous slide (infinite loop)
        const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        scrollToIndex(prevIndex);
      }
      setIsDragging(false);
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || images.length === 0) return;
    const x = e.touches[0].clientX;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Dragged left, go to next slide (infinite loop)
        const nextIndex = (activeIndex + 1) % images.length;
        scrollToIndex(nextIndex);
      } else {
        // Dragged right, go to previous slide (infinite loop)
        const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        scrollToIndex(prevIndex);
      }
      setIsDragging(false);
    }
  };
  // Handle next/prev buttons with infinite loop
  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    const nextIndex = (activeIndex + 1) % images.length;
    scrollToIndex(nextIndex);
  }, [activeIndex, scrollToIndex, images.length]);

  const prevSlide = useCallback(() => {
    if (images.length === 0) return;
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  }, [activeIndex, scrollToIndex, images.length]);
  // Initialize carousel only once when images change
  useEffect(() => {
    if (images.length > 0) {
      const initialIndex = images.length === 1 ? 0 : Math.floor(images.length / 2);
      setActiveIndex(initialIndex);
    }
  }, [images.length]);
  
  // Scroll to active index when it changes but avoid infinite loops
  useEffect(() => {
    // Only scroll when not in mounted phase
    if (images.length > 0 && containerRef.current) {
      const timer = setTimeout(() => {
        scrollToIndex(activeIndex);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, scrollToIndex, images.length]);
  
  // Add event listeners for window resize
  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        scrollToIndex(activeIndex);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex, scrollToIndex, images.length]);
  return <div className="w-full py-4">
      {title && <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>}
      <div className="relative">
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-800 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110" aria-label="Previous image">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-800 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110" aria-label="Next image">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Carousel Container */}
        <div ref={containerRef} className="flex overflow-x-hidden py-4 px-2" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
          {/* Center alignment container */}
          <div className="flex mx-auto">
            {images.map((image, index) => <div key={index} ref={el => itemsRef.current[index] = el} className="flex-shrink-0 w-full md:w-80 px-2 transition-all duration-300 ease-in-out" style={{
            transform: `scale(${activeIndex === index ? 1 : 0.85})`,
            opacity: activeIndex === index ? 1 : 0.6
          }}>
                {image.link ? <a href={image.link} className="block">
                    <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" loading="lazy" />
                  </a> : <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-lg shadow-md" loading="lazy" />}
              </div>)}
          </div>
        </div>
      </div>
      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => <button key={index} onClick={() => scrollToIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-amber-700' : 'w-2 bg-amber-300'}`} aria-label={`Go to image ${index + 1}`} />)}
      </div>
    </div>;
};