"use client";

const ApiError = () => {
  return (
    <div className="w-full min-h-svh flex flex-col items-center justify-center gap-6 p-8 text-center bg-slate-100">
      <div className="animate-bounce text-red-500">
        <svg
          className="w-24 h-24 mx-auto"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={2.5}
          stroke="currentColor"
          fill="none"
        >
          <polyline points="34.48 54.28 11.06 54.28 11.06 18.61 23.02 5.75 48.67 5.75 48.67 39.42" />
          <polyline points="23.04 5.75 23.02 18.61 11.06 18.61" />
          <line x1="16.21" y1="45.68" x2="28.22" y2="45.68" />
          <line x1="16.21" y1="39.15" x2="31.22" y2="39.15" />
          <line x1="16.21" y1="33.05" x2="43.22" y2="33.05" />
          <line x1="16.21" y1="26.95" x2="43.22" y2="26.95" />
          <circle cx="42.92" cy="48.24" r="10.01" strokeLinecap="round" />
          <line
            x1="42.95"
            y1="53.52"
            x2="42.95"
            y2="53.73"
            strokeLinecap="round"
          />
          <line
            x1="42.95"
            y1="43.19"
            x2="42.95"
            y2="49.69"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800">
        Oops! Something went wrong.
      </h2>
      <p className="text-gray-600">
        {`We couldn't load the data. Please try again.`}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-8 py-2 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300 cursor-pointer"
      >
        Retry
      </button>
    </div>
  );
};

export default ApiError;
