import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import QABoard from "@/components/QABoard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Profile />
      <TechStack />
      <Projects />
      <QABoard />
      <Contact />
    </main>
  );
}
