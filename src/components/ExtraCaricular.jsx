import React from "react";
import ibm from "../assets/ibm.png"
import greatLearning from "../assets/great-learning.png";
import CPP from "../assets/CPP.png"
import datascience from "../assets/3ri certificate.png"
import leetcode from "../assets/leetcode.png"

const activities = [
  {
    title: ". Certificate on Data Structure and Algorithm in C++:",
    description:
      "I successfully completed the Data Structures and Algorithms in C++ course offered by Great Learning. This course strengthened my understanding of core DSA concepts suchs as arrays, linked lists, stacks, queues, trees, and sorting algorithms. It also helped me improve my logical thinking and coding efficiency, providing a solid foundation for solving complex programming problems in C++.",
    image: greatLearning,
  },
  {
    title: "• IBM Skills Build(Introduction to Artificial Intelligence) ",
    description:
      "I successfully completed the Introduction to Artificial Intelligence course offered by IBM Skills Build. This course provided fundamental insights into AI concepts, machine learning, and real-world applications. It enhanced my understanding of AI technologies and their impact across various industries. ",
    image: ibm,
  },
  {
    title: "Spoken Tutorial Project by IIT Bombay ",
    description:
      "I successfully completed a C++ training program that deepened my grasp of both fundamental and advanced programming concepts, enhancing my coding proficiency and problem-solving abilities.",
    image: CPP,
  },
  {
    title: "Completed Data Science Training from 3RI Technologies ",
    description:
      "I completed a 10-day Data Science workshop conducted by 3RI Technologies, which provided a practical introduction to key concepts in data science. During the workshop, I gained hands-on experience with Python programming for data analysis, including data preprocessing, exploratory data analysis (EDA), and visualization using tools like Pandas, NumPy, Matplotlib, and Seaborn. The sessions also covered basic machine learning techniques such as linear regression, decision trees, and clustering. Through real-world case studies and exercises, I developed a better understanding of how to work with data, build simple predictive models, and draw meaningful insights, laying a strong foundation for further learning in data science.",
    image: datascience,
  },
{  
  title: "Proficiency in Algorithms & Data Structures (150+ LeetCode Problems)",
  description:
    "I have consistently honed my problem-solving abilities by solving over 150 challenges on LeetCode. This self-directed practice has significantly strengthened my understanding of core data structures (such as Arrays, Strings, Hash Maps, Trees, and Graphs) and fundamental algorithms (including Sorting, Searching). Through this process, I've developed a strong ability to analyze problems, design efficient solutions, and optimize for both time and space complexity, building a solid foundation for tackling complex engineering tasks.",
  image:leetcode,
},
  
];

function ExtraCaricular() {
  return (
    <section id="extracurricular" className="py-24 px-4 relative bg-secondary/30">
  <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Extracurricular Activities</span>
        </h2>
  <div className="grid grid-cols-1 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col gap-2"
            >
              <h3 className="font-semibold text-lg text-primary mb-2">{activity.title}</h3>
              <p className="text-muted-foreground text-base mb-2">{activity.description}</p>
              <img
                src={activity.image}
                alt={activity.title + ' certificate'}
                className="w-full max-w-xs mx-auto rounded-md border border-primary/30 shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExtraCaricular;



