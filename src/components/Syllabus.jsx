import React, { useState } from "react";

const Syllabus = ({ syllabus }) => {
  const [openSubject, setOpenSubject] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
        📚 Syllabus
      </h2>

      {Object.keys(syllabus).map((subject, index) => (
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
              {syllabus[subject].map((unit, i) => (
                <li key={i} className="text-zinc-300">
                  <strong className="text-orange-400">📖 {unit.unit}</strong>: {unit.description}
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
