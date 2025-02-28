import React, { useState } from "react";

const Timetable = ({ timetable }) => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
        🕒 Timetable
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(timetable).map((day) => (
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
        {timetable[selectedDay]?.map((slot, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 rounded-md hover:bg-zinc-600 transition"
          >
            <span className="text-orange-400 font-medium">{slot.time}</span>
            <span className="text-white font-medium">{slot.subject}</span>
            <span className="text-zinc-400">{slot.room}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
