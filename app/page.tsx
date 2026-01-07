import Hero from "./components/Hero";
import Navbar from "./components/Navbar"

export default function Home() {
  return (
      <main className="flex flex-col p-4 gap-12">
        <Navbar/>
        <Hero/>
      </main>
  );
}
