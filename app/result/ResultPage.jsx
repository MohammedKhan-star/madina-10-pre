"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const roll = searchParams.get("roll");

  return (
    <div>
      <h1>Student Result</h1>
      <p>Roll Number: {roll}</p>
    </div>
  );
}