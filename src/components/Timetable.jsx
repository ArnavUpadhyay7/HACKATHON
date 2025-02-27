import React, { useState } from "react";

const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const schedule = {
    Monday: [
      { time: "9:00 AM - 10:00 AM", subject: "Mathematics" },
      { time: "10:00 AM - 11:00 AM", subject: "Physics" },
      { time: "11:00 AM - 12:00 PM", subject: "Computer Science" },
      { time: "12:00 PM - 1:00 PM", subject: "Break" },
      { time: "1:00 PM - 2:00 PM", subject: "English" },
      { time: "2:00 PM - 3:00 PM", subject: "Chemistry" },
      { time: "3:00 PM - 4:00 PM", subject: "Biology" },
      { time: "4:00 PM - 5:00 PM", subject: "History" }
    ],
    Tuesday: [
      { time: "9:00 AM - 10:00 AM", subject: "Physics" },
      { time: "10:00 AM - 11:00 AM", subject: "Mathematics" },
      { time: "11:00 AM - 12:00 PM", subject: "Computer Science" },
      { time: "12:00 PM - 1:00 PM", subject: "Break" },
      { time: "1:00 PM - 2:00 PM", subject: "History" },
      { time: "2:00 PM - 3:00 PM", subject: "Chemistry" },
      { time: "3:00 PM - 4:00 PM", subject: "English" },
      { time: "4:00 PM - 5:00 PM", subject: "Biology" }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
        🕒 Timetable
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              selectedDay === day
                ? "bg-orange-500 text-white"
                : "bg-zinc-800 text-white hover:bg-orange-400"
            }`}
          >
            {day}
          </button>
        ))} 
      </div>

      <div className="bg-zinc-800 rounded-lg shadow-lg p-6 space-y-4">
        {schedule[selectedDay].map((slot, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 rounded-md hover:bg-zinc-600 transition"
          >
            <span className="text-orange-400 font-medium">{slot.time}</span>
            <span className="text-white font-medium">{slot.subject}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
