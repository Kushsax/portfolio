import Hero from "@/components/Hero"
import NavbarDemo from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-black min-h-242" >
      <NavbarDemo/>
      <Hero/>
      <About/>
    </main>
  );
}
