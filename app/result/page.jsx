"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResultTable from "../../components/ResultTable";

import studentsData from "../../data/students.json";

export default function ResultPage() {

  const searchParams = useSearchParams();
  const hallTicket = searchParams.get("hallTicket");

  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const foundStudent = studentsData.find(
      (s) => s.hallTicket === hallTicket
    );

    if (foundStudent) {
      setStudent(foundStudent);
    } else {
      setError("Student not found.");
    }

    setLoading(false);

  }, [hallTicket]);

  if (loading) {
    return (
      <p className="mt-10 text-center">
        Loading result...
      </p>
    );
  }

  if (error) {
    return (
      <p className="mt-10 text-center text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <main className="max-w-4xl px-4 mx-auto">

        {student && (
          <ResultTable student={student} />
        )}

      </main>

      <Footer />

    </div>
  );
}