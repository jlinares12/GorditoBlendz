import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Specialties from "./components/Specialties";
import Preview from "./components/Preview";
import GlobalFooter from "./components/GlobalFooter";

export default function Home() {
  return (
      <main className="flex flex-col gap-12">
        <Navbar/>
        <Hero/>
        <Specialties/>
        <Preview/>
        <GlobalFooter/>
      </main>
  );
}
