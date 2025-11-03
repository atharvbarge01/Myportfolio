import React, { useState, useEffect } from "react";
import ibm from "../assets/ibm.png";
import greatLearning from "../assets/great-learning.png";
import CPP from "../assets/CPP.png";
import datascience from "../assets/3ri certificate.png";
import genai from "../assets/genai.png";

const activities = [
  {
    title: "Certificate on Data Structure and Algorithm in C++",
    description:
      "I successfully completed the Data Structures and Algorithms in C++ course offered by Great Learning. This course strengthened my understanding of core DSA concepts such as arrays, linked lists, stacks, queues, trees, and sorting algorithms.",
    image: greatLearning,
  },
  {
    title: "IBM Skills Build — Introduction to AI",
    description:
      "I completed the Introduction to Artificial Intelligence course from IBM Skills Build, which provided a foundation in AI concepts and practical examples.",
    image: ibm,
  },
  {
    title: "Spoken Tutorial — IIT Bombay (C++)",
    description:
      "Completed the Spoken Tutorial training from IIT Bombay focused on C++ fundamentals and practical exercises.",
    image: CPP,
  },
  {
    title: "Data Science Training — 3RI Technologies",
    description:
      "A 10-day Data Science workshop covering Python for data analysis, EDA, visualization, and introductory ML techniques.",
    image: datascience,
  },
  {
  title: "GenAI Powered Data Analytics Job Simulation",
  description:
    "Completed the GenAI Powered Data Analytics Job Simulation on July 9th, 2025. Gained hands-on experience in exploratory data analysis, risk profiling, AI-based delinquency prediction, data storytelling, and implementing AI-driven collection strategies.",
  image: genai,
}


];

function ExtraCaricularLightbox() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openImage = (img) => {
    setSelected(img);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section id="extracurricular" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col gap-4"
            >
              <h3 className="font-semibold text-lg text-primary">{activity.title}</h3>
              <p className="text-muted-foreground text-base">{activity.description}</p>

              <button
                type="button"
                onClick={() => openImage(activity.image)}
                className="mx-auto mt-2"
                aria-label={`Open ${activity.title} certificate`}
              >
                <img
                  src={activity.image}
                  alt={activity.title + " certificate"}
                  className="w-full max-w-xs mx-auto rounded-md border border-primary/30 shadow cursor-pointer hover:scale-105 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Lightbox modal */}
        {open && selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={close}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-md"
                aria-label="Close image"
              >
                ✕
              </button>

              <img
                src={selected}
                alt="Selected certificate"
                className="max-w-full max-h-[80vh] rounded-md shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExtraCaricularLightbox;
