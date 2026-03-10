"use client";

import { useEffect, useState } from "react";

export default function ResultTable({ student }) {
  const [rows, setRows] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [grade, setGrade] = useState("");
  const [overallResult, setOverallResult] = useState("PASS");

  useEffect(() => {
    const subjects = student.subjects;
    let processed = [];
    let totalMarks = 0;
    let finalResult = "PASS";

    // -------- SCIENCE --------
    const physics = subjects.science.physical.exam;
    const biology = subjects.science.biological.exam;
    const scienceExam = physics + biology;
    const scienceTotal = subjects.science.fa + scienceExam;

    const scienceResult =
      scienceExam >= 28 && scienceTotal >= 35 ? "PASS" : "FAIL";

    if (scienceResult === "FAIL") finalResult = "FAIL";

    // -------- SUBJECT LIST --------
    processed = [
      { name: "1st Language", fa: subjects.languages[0].fa, exam: subjects.languages[0].exam },
      { name: "2nd Language", fa: subjects.languages[1].fa, exam: subjects.languages[1].exam },
      { name: "English", fa: subjects.languages[2].fa, exam: subjects.languages[2].exam },
      { name: "Mathematics", fa: subjects.mathematics.fa, exam: subjects.mathematics.exam },
      { name: "Science", fa: subjects.science.fa, exam: scienceExam, customResult: scienceResult },
      { name: "Social Studies", fa: subjects.social.fa, exam: subjects.social.exam },
    ];

    // -------- RESULT CALCULATION --------
    processed = processed.map(sub => {
      const total = sub.fa + sub.exam;

      let passMark = 35;       // Default total pass
      let examPassMark = 28;   // Minimum exam marks required

      if (sub.name === "2nd Language") {
        passMark = 20;         // 2nd Language total pass
        examPassMark = 0;      // No minimum exam mark
      }

      // Result: check customResult (Science) or exam + total pass rules
      const result =
        sub.customResult ||
        (sub.exam >= examPassMark && total >= passMark ? "PASS" : "FAIL");

      if (result === "FAIL") finalResult = "FAIL";

      totalMarks += total;

      return { ...sub, total, result };
    });

    // -------- PERCENTAGE --------
    const percent = (totalMarks / 600) * 100;

    // -------- GRADE --------
    let gradeValue = "";
    if (percent >= 91) gradeValue = "A1";
    else if (percent >= 81) gradeValue = "A2";
    else if (percent >= 71) gradeValue = "B1";
    else if (percent >= 61) gradeValue = "B2";
    else if (percent >= 51) gradeValue = "C1";
    else if (percent >= 41) gradeValue = "C2";
    else if (percent >= 35) gradeValue = "D";
    else gradeValue = "E";

    setRows(processed);
    setGrandTotal(totalMarks);
    setPercentage(percent.toFixed(2));
    setGrade(gradeValue);
    setOverallResult(finalResult);
  }, [student]);

  const handlePrint = () => window.print();

  return (
    <div className="p-6 mt-6 bg-white rounded-lg shadow-md">

      {/* Header */}
      <h2 className="mb-4 text-xl font-bold text-center">
        SSC Public Examination Result
      </h2>

      {/* Student Info */}
      <div className="mb-4">
        <p><strong>Name:</strong> {student.studentName}</p>
        <p><strong>Hall Ticket:</strong> {student.hallTicket}</p>
        <p><strong>School:</strong> {student.schoolName}</p>
      </div>

      {/* Result Table */}
      <table className="w-full text-center border border-gray-500">
        <thead className="text-white bg-blue-900">
          <tr>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">FA</th>
            <th className="p-2 border">Exam</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Result</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((sub, i) => (
            <tr key={i}>
              <td className="p-2 border">{sub.name}</td>
              <td className="p-2 border">{sub.fa}</td>
              <td className="p-2 border">{sub.exam}</td>
              <td className="p-2 border">{sub.total}</td>
              <td className={`p-2 border font-bold ${sub.result === "PASS" ? "text-green-600" : "text-red-600"}`}>
                {sub.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-lg">
        <p><strong>Grand Total:</strong> {grandTotal} / 600</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
        <p><strong>Grade:</strong> {grade}</p>
        <p>
          <strong>Final Result:</strong>{" "}
          <span className={overallResult === "PASS" ? "text-green-600" : "text-red-600"}>
            {overallResult}
          </span>
        </p>
      </div>

      {/* Print Button */}
      <div className="mt-6 text-center">
        <button onClick={handlePrint} className="px-6 py-2 text-white bg-blue-700 rounded hover:bg-blue-800">
          Print Marks Memo
        </button>
      </div>
    </div>
  );
}
