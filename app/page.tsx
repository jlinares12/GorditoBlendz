import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import Preview from "./components/Preview";

export default function Home() {
  return (
      <main className="flex flex-col gap-12">
        <Hero/>
        <Specialties/>
        <Preview/>
      </main>
  );
}
