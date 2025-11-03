// Removed opening triple backticks
import React, { useState, useEffect } from "react";
import ibm from "../assets/ibm.png";
import treeplantation from "../assets/treeplantation.jpg";
import techneeti from "../assets/teechneeti.png";
import blooddonation from "../assets/blooddonation.jpg";
import adobe from "../assets/adobe.jpg";
import codewolf from "../assets/codewolf.png";

const competitions = [
  {
    title: "Tree Plantation Drive — NSS Initiative",
    description:
      "Participated in an NSS-organized tree plantation drive to promote environmental awareness and sustainability at Mahalunge Dist.Pune.",
    image: treeplantation,
  },
  {
    title: "Techneeti 24-Hour Hackathon — Coding Club RSCOE",
    description:
      "Participated in the 24-hour Techneeti Hackathon organized by Coding Club RSCOE on 18th and 19th August, collaborating with a team to build innovative tech solutions under time constraints.",
    image: techneeti,
  },
 {
  title: "Blood Donation Camp — NSS Initiative",
  description:
    "Participated in the Blood Donation Camp organized by the National Service Scheme (NSS), contributing to a noble cause and promoting the importance of voluntary blood donation.",
  image: blooddonation,
},

  {
    title: "Participated in Adobe hackathon",
    description:
      "Presented a mini project built during the IBM AI workshop demonstrating a classification model.",
    image: adobe,
  },
  {
  title: "Codewolf 5.0 — Competitive Coding Club, RSCOE",
  description:
    "Received a Certificate of Participation for taking part in Codewolf 5.0, a coding competition organized by the Competitive Coding Club of JSPM’s Rajarshi Shahu College of Engineering (RSCOE) on January 10, 2025.",
  image: codewolf,
}

];

export default function Competitions() {
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
    <section id="competitions" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Participations & <span className="text-primary">Other Activities</span>
        </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {competitions.map((c, i) => (
            <div
              key={i}
              className="bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <button
                type="button"
                onClick={() => openImage(c.image)}
                className="w-full aspect-[3/2] bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity overflow-hidden"
                aria-label={`View ${c.title} image`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-center"
                  style={{ minWidth: '100%', minHeight: '100%' }}
                />
              </button>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm">{c.description}</p>
              </div>
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
                alt="Selected competition"
                className="max-w-full max-h-[80vh] rounded-md shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


 