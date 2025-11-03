import { useState } from "react";
import { cn } from "@/lib/utils";
import leetcode from "../assets/leetcode.png"

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Canva", category: "tools" },
  { name: "VS Code", category: "tools" },
];
const activities = [
  {  
    title: "Competitive Coding - 150+ LeetCode Problems",
    description:
      "I have consistently honed my problem-solving abilities by solving over 150 challenges on LeetCode. This self-directed practice has significantly strengthened my understanding of core data structures (such as Arrays, Strings, Hash Maps, Trees, and Graphs) and fundamental algorithms (including Sorting, Searching). Through this process, I've developed a strong ability to analyze problems, design efficient solutions, and optimize for both time and space complexity, building a solid foundation for tackling complex engineering tasks.",
    image:leetcode,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              {/* <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div> */}
{/* 
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}
            </div>
          ))}
        </div>
          <div className="grid grid-cols-1 gap-6 mt-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col gap-2"
            >
              <h3 className="font-semibold text-lg  mb-2">{activity.title}</h3>
              <p className="text-muted-foreground text-base mb-2">{activity.description}</p>
              {/* <img
                src={activity.image}
                alt={activity.title + ' certificate'}
                className="w-full max-w-xs mx-auto rounded-md border border-primary/30 shadow"
              /> */}
              <div>
          <img
                src={activity.image}
                alt={activity.title + ' certificate'}
                className="w-full max-w-xs mx-auto rounded-md border border-primary/30 shadow"
              />

        </div>
            </div>
            
          ))}
        </div>
        
      </div>
    </section>
  );
};
