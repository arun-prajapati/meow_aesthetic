"use client";

import { useEffect, useRef, useState } from "react";

const LocationHeader = () => {
  //
  const headerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`text-center flex flex-col gap-2 transition-all duration-1000 delay-200 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
    >
      <i className="text-xl">Bringing Beauty to Every Corner</i>

      <h2 className="font-semibold text-4xl lg:text-6xl font-[--font-playfair]">
        Location
      </h2>
    </div>
  );
};

export default LocationHeader;
