import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutPreview } from "./components/AboutPreview";
import { ProgramsSnapshot } from "./components/ProgramsSnapshot";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutPreview />
      <ProgramsSnapshot />
      <WhyChooseUs />
      <CTABanner />
      <Footer />
    </div>
  );
}