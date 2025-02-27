import React, { useState } from "react";

const Syllabus = () => {
  const [openSubject, setOpenSubject] = useState(null);

  const syllabusData = {
    Mathematics: ["Algebra", "Calculus", "Linear Algebra", "Probability"],
    Physics: ["Kinematics", "Electromagnetism", "Thermodynamics"],
    Chemistry: ["Organic Chemistry", "Physical Chemistry", "Inorganic Chemistry"],
    Biology: ["Genetics", "Cell Biology", "Human Physiology"],
    "Computer Science": ["Data Structures", "Algorithms", "Databases"],
    English: ["Grammar", "Comprehension", "Writing Skills"],
    History: ["Ancient Civilizations", "World Wars", "Modern History"]
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
        📚 Syllabus
      </h2>

      {Object.keys(syllabusData).map((subject, index) => (
        <div key={index} className="bg-zinc-800 rounded-lg shadow-lg mb-4">
          <button
            onClick={() => setOpenSubject(openSubject === subject ? null : subject)}
            className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-orange-400"
          >
            {subject}
            <span className="text-white">
              {openSubject === subject ? "▲" : "▼"}
            </span>
          </button>
          {openSubject === subject && (
            <ul className="p-4 space-y-2">
              {syllabusData[subject].map((topic, i) => (
                <li key={i} className="text-zinc-300">
                  📖 {topic}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
