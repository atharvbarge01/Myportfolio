import { Briefcase, Code, User,Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & MERN Stack Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Hi, I’m Atharv Barge, a passionate Software Engineering student at JSPM’s Rajarshi Shahu College of Engineering, Pune. I enjoy building innovative and user-friendly web applications while exploring the latest technologies in software development.
            </p>

            <p className="text-muted-foreground">
              With a strong interest in MERN stack development, problem-solving, and Artificial Intelligence, I aim to create impactful solutions that blend functionality with creativity. I have hands-on experience with projects like portfolio websites, management systems, and clone applications, which have strengthened my skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB.

              Apart from academics, I constantly engage in learning through platforms like LeetCode, GitHub, and LinkedIn, where I enhance my coding and collaboration skills. My goal is to become a skilled full-stack developer and contribute to meaningful projects that solve real-world challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" /> 
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Problem Solving</h4>
                    <p className="text-muted-foreground">
                      Practicing data structures and algorithms by solving coding challenges on LeetCode.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};
