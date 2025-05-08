"use client";

import { useState } from "react";
import axios from "axios";

const DownloadButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/downloadPdf`,
        {
          responseType: "blob",
        }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      window.open(pdfUrl, "_blank");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`${
        loading
          ? "bg-[#A9AAC0] cursor-not-allowed"
          : "hover:bg-[#7B62DF] bg-[#BBBDC8]"
      } text-white px-6 py-3 cursor-pointer rounded`}
    >
      {loading ? "Downloading..." : "Download Pricelist"}
    </button>
  );
};

export default DownloadButton;
