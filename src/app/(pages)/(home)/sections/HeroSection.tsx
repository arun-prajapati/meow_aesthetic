"use client"; // Add this if using in App Router

import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = ({
  desktopUrl,
  mobileUrl,
}: {
  desktopUrl: string;
  mobileUrl: string;
}) => {
  //
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  //
  useEffect(() => {
    setIsClient(true);

    const checkWidth = () => setIsMobile(window.innerWidth <= 600);
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const isVideo = (url: string) => {
    const videoExtensions = ["mp4", "avi", "mov"];
    const extension = url?.split(".").pop()?.toLowerCase();
    return videoExtensions.includes(extension || "");
  };

  // Prevent rendering on server
  if (!isClient) return null;

  const selectedUrl = isMobile ? mobileUrl : desktopUrl;

  return (
    <section className="w-full h-full min-h-[82vh] relative">
      {isVideo(selectedUrl) ? (
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source
            src={selectedUrl}
            type={`video/${selectedUrl.split(".").pop()}`}
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          quality={100}
          src={selectedUrl || "/assets/keyprocedures.webp"}
          alt="hero-section-image"
          width={1920}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
    </section>
  );
};

export default HeroSection;
