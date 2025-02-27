import React from "react";

const Exams = () => {
  const exams = [
    { subject: "Mathematics", date: "March 1", room: "Room 101" },
    { subject: "Physics", date: "March 3", room: "Room 202" },
    { subject: "Chemistry", date: "March 5", room: "Room 303" },
    { subject: "Biology", date: "March 7", room: "Room 404" },
    { subject: "Computer Science", date: "March 9", room: "Room 505" },
    { subject: "English", date: "March 11", room: "Room 606" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
        🎓 Exam Schedule
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-lg shadow-lg p-6 hover:scale-105 transition transform"
          >
            <h3 className="text-orange-400 font-semibold text-xl mb-2">
              {exam.subject}
            </h3>
            <p className="text-zinc-400">📅 {exam.date}</p>
            <p className="text-zinc-400">🏫 {exam.room}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
