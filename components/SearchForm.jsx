"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {

  const [hallTicket, setHallTicket] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hallTicket.trim()) {
      setError("Please enter Hall Ticket Number.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      router.push(`/result?hallTicket=${hallTicket}`);
    }, 500);
  };

  const handleClear = () => {
    setHallTicket("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold text-center text-gray-800">
        Search Your Result
      </h2>

      {error && (
        <p className="mb-2 text-sm text-center text-red-600">
          {error}
        </p>
      )}

      <input
        type="text"
        placeholder="Enter Hall Ticket Number"
        value={hallTicket}
        onChange={(e) => setHallTicket(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-between">

        <button
          type="submit"
          className="px-4 py-2 text-white transition bg-blue-700 rounded hover:bg-blue-800"
        >
          {loading ? "Searching..." : "Submit"}
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 transition bg-gray-300 rounded hover:bg-gray-400"
        >
          Clear
        </button>

      </div>
    </form>
  );
}