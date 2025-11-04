import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import ExtraCaricular from "../components/ExtraCaricularLightbox";
import Competitions from "../components/Competitions";
import GoalsSection from "../components/GoalsSection";
import EducationSection from "../components/EducationSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
  

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
  <AboutSection />
  <EducationSection />
  <SkillsSection />
        <ProjectsSection />
        <ExtraCaricular />
        <Competitions />
        <GoalsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
