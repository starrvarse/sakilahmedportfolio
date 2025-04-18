import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div id="wrapper">
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
      
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
