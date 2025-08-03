import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import Products from "./components/Products";
import Services from "./components/Services";
import Team from "./components/Team";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <Services />
      <Products />
      <Team />
      <Footer />
    </main>
  );
}
