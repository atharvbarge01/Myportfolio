import React from "react";
import { GraduationCap, Book, Award } from "lucide-react";


const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Education</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Academic background — a short flow from school to my ongoing B.Tech.
        </p>

     
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* 10th */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center shadow">
              <Book className="text-primary" size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">10th</h4>
              <p className="text-sm text-muted-foreground">Completed from The Modern English School,Koregaon in Year: [2021] with 96%</p>
            </div>
          </div>

          {/* connector */}
          <div className="hidden md:flex items-center">
            <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="2" fill="var(--muted-foreground, #9CA3AF)" />
            </svg>
            <svg className="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* 12th */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center shadow">
              <Award className="text-primary" size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">12th</h4>
              <p className="text-sm text-muted-foreground">Completed from Malojiraje jr. college, Lonand in Year: [2023] with 79%</p>
            </div>
          </div>

          {/* connector */}
          <div className="hidden md:flex items-center">
            <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="2" fill="var(--muted-foreground, #9CA3AF)" />
            </svg>
            <svg className="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* B.Tech */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center shadow">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">B.Tech (Pursuing)</h4>
              <p className="text-sm text-muted-foreground">Current CGPA: <span className="font-medium">9.75</span> •Rajarshi Shahu College of Engineering  Branch: [Computer Science & Business Systems]</p>
            </div>
          </div>
        </div>

        {/* Mobile: vertical arrows/spacing for small screens */}
        <div className="mt-8 md:hidden flex flex-col items-center gap-6">
          <div className="w-px h-6 bg-muted-foreground/40" />
          <div className="w-px h-6 bg-muted-foreground/40" />
        </div>

      </div>
    </section>
  );
};

export default EducationSection;