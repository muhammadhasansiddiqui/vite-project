import { useState } from "react";

export default function Work() {
  const [check, setCheck] = useState(false);

  const handleToggle = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen bg-yellow-200">
      <h1 className="text-2xl font-bold font-serif text-slate-800   ">
        Are You Human
      </h1>
      <div
        onClick={handleToggle}
        className={`border-2-black shadow-md   w-12 h-12 rounded-lg cursor-pointer  ${
          check ? "bg-green-500" : "bg-white"
        }`}
      >
        {check && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-full h-full p-1"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
