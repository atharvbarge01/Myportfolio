import profilephoto from '../assets/photo.jpg';


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left Side: Description */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Atharv Barge
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            Hello! I'm a passionate computer science student specializing in frontend and backend development using React and Node.js. I love solving problems and building modern, responsive web interfaces.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={profilephoto}
            alt="Atharv Barge"
            className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-primary"
          />
        </div>
      </div>
    </section>
  );
};