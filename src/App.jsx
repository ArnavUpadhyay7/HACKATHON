import { useState } from "react";
import "./index.css";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import Timetable from "./components/Timetable";
import Syllabus from "./components/Syllabus";
import Exams from "./components/Exams";

function App() {
  const [id, setId] = useState("");
  const [isUser, setIsUser] = useState(false);
  console.log(id);

  const handleSearch = async () => {
    if (!id.trim()) {
      toast.error("Please enter a valid Registration ID.");
      return;
    }

    // TESTING
    toast.success("Search Successful!");
    setIsUser(true);

    // TRY WITH REAL API

    // try {
    //   const response = await fetch(`https://API/search?id=${id}`);
    //   const data = await response.json();

    //   console.log("Search Result:", data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  const ads = [
    {
      image:
        "https://www.lpu.in/lpu-assets/images/home-page/highlights/ugc.webp",
      title: "Top-Ranked Academics",
      description:
        "LPU stands out with its world-class education, cutting-edge research, and UGC-recognized excellence.",
    },
    {
      image:
        "https://www.lpu.in/lpu-assets/images/home-page/highlights/maka.webp",
      title: "Global Achievements",
      description:
        "From sports to academics, LPU students shine on the international stage, making us proud worldwide.",
    },
    {
      image:
        "https://www.lpu.in/lpu-assets/images/home-page/highlights/modi.webp",
      title: "Esteemed Visitors & Recognition",
      description:
        "Renowned leaders and dignitaries, including Hon. PM Narendra Modi, have graced LPU with their presence.",
    },
  ];

  return (
    <div className="bg-zinc-900 text-white font-sans">
      <Toaster position="top-center" richColors="true" />

      {/* Hero Section */}
      <motion.section
        className="w-full flex flex-col items-center text-center md:py-8 py-6 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex justify-between items-center">
          <img
            className="h-14 rounded-xl"
            src="https://seekvectors.com/files/download/Lovely%20Professional%20University-04.jpg"
            alt="Logo"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="md:text-5xl text-3xl font-bold mt-6">
            The only web-app you need
          </h1>
          <p className="text-orange-400 mt-2 md:mt-6 font-light md:text-xl text-lg">
            Explore everything LPU has to offer in one place.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="w-full max-w-3xl mt-6 flex gap-2 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <label className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 text-white rounded-lg p-4 w-full shadow-lg">
            <input
              type="text"
              className="bg-transparent border-none focus:outline-none w-full text-lg"
              placeholder="Enter Registration ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white text-xl md:px-12 px-6 rounded-lg shadow-md font-semibold hover:bg-orange-600"
          >
            Search
          </button>
        </motion.div>
      </motion.section>

      {/* Key Features */}
      {!isUser ? (
        <motion.section
          className="w-full px-6 md:px-20 md:py-12 bg-zinc-900 rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            What we offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["calendar", "book", "exam"].map((icon, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800 rounded-lg p-6 text-center shadow-lg border border-zinc-700 transition-all hover:bg-zinc-700 hover:scale-105"
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={`https://img.icons8.com/ios/100/ffffff/${icon}.png`}
                  alt="Icon"
                  className="h-16 w-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white">
                  {icon === "calendar"
                    ? "Timetable"
                    : icon === "book"
                    ? "Syllabus"
                    : "Exams"}
                </h3>
                <p className="text-zinc-300 mt-2">
                  Stay up-to-date with the latest{" "}
                  {icon === "calendar"
                    ? "schedule"
                    : icon === "book"
                    ? "syllabus"
                    : "exam updates"}
                  .
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ) : (
        <motion.div
          className="w-full px-6 md:px-20 bg-zinc-900 min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center text-orange-400 text-3xl font-bold">
            LPU Centralized Portal
          </h1>
          <Timetable />
          <Syllabus />
          <Exams />
        </motion.div>
      )}

      {/* Explore More Options */}
      <motion.section
        className="py-10 mx-4 md:mx-28 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Explore More Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ads.map((ad, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{ad.title}</h3>
                <p className="text-sm text-zinc-400 mt-3">{ad.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* DOWNLOAD BUTTON */}

      <div className="mx-6 md:mx-16 lg:mx-28 rounded-xl px-6 md:px-12 lg:px-20 py-8 bg-zinc-800 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Content (Title + Description + Button) */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold pb-4">
              Explore Our App
            </h3>
            <p className="text-zinc-300 pb-6">
              Download the app and experience seamless access to all our
              features.
            </p>
            <button className="bg-orange-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-orange-600 transition cursor-pointer">
              Download Now
            </button>
          </div>

          {/* Right Content (Features List) */}
          <div className="flex flex-col gap-4 text-zinc-300">
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 text-white rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-sm md:text-base">Fast & Secure Access</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 text-white rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-sm md:text-base">Exclusive Features</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 text-white rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-sm md:text-base">Available on iOS & Android</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings & Accreditations Section */}
      <section className="py-10 mx-4 md:mx-28">
        <motion.h2
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Rankings & Accreditations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              rank: "4th",
              title: "WURI",
              description:
                "Amongst all government and private universities in India.",
            },
            {
              rank: "9th",
              title: "World University Rankings 2025",
              description: "Among top universities of India.",
            },
            {
              rank: "27th",
              title: "NIRF",
              description:
                "Amongst all government and private universities in India.",
            },
            {
              rank: "2nd",
              title: "Impact Rankings 2024",
              description:
                "Amongst all government and private universities in India.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg p-6 text-center transition-all hover:scale-105"
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold">{item.rank}</h3>
              <p className="text-lg text-orange-400 mt-2">{item.title}</p>
              <p className="text-sm text-zinc-400 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-zinc-900 text-zinc-500 text-center py-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p>© 2025 Lovely Professional University. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-3">
          <a href="#" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-orange-500 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-orange-500 hover:underline">
            Contact Us
          </a>
        </div>
        <p className="mt-3">
          For inquiries:{" "}
          <a href="mailto:support@lpu.in" className="text-orange-500">
            support@lpu.in
          </a>
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
