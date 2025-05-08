"use client";

import FbIcon from "../../../public/assets/icons/FbIcon";
import InstaIcon from "../../../public/assets/icons/InstaIcon";
import TikTokIcon from "../../../public/assets/icons/TikTokIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

type Service = {
  id: number;
  type: string;
  link: string;
};

const SocialHeader = () => {
  //
  const [socialMedia, setSocialMedia] = useState<Service[]>([]);

  //
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api_social_media_list`
        );
        const data = await response.json();
        setSocialMedia(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="flex items-center gap-3 justify-end w-[95%] mx-auto">
      {socialMedia.map((e, index) => (
        <Link
          key={index + "social-links"}
          href={e?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="size-6"
        >
          {e?.type === "instagram" && <InstaIcon />}
          {e?.type === "tiktok" && <TikTokIcon />}
          {e?.type === "facebook" && <FbIcon />}
        </Link>
      ))}
    </div>
  );
};

export default SocialHeader;
