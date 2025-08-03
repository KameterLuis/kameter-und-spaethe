import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Impressum() {
  return (
    <main className="bg-white">
      <Header />
      <div className="max-w-[800px] mx-auto px-4 pt-8 pb-24 md:pt-12 md:pb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#333333] mb-6 relative inline-block">
            Impressum
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#205da9] rounded-full"></span>
          </h2>
        </div>
        <p className="text-lg text-[#666666] leading-relaxed text-center">
          <b>Angaben gemäß § 5 TMG:</b>
          <br />
          <br />
          K&S Werkzeug- und Umwelttechnik Kameter & Späthe GbR
          <br />
          <br />
          Postanschrift:
          <br />
          Franz-Schubert-Straße 7<br />
          82008 Unterhaching
          <br />
          <br />
          Kontakt:
          <br />
          <br />
          Telefon: 08966665670
          <br />
          Telefax: 08966665671
          <br />
          E-Mail: info@kswu.de
          <br />
          <br />
          Vertreten durch:
          <br />
          <br />
          Armin Späthe, Bernd Kameter
          <br />
          <br />
          Umsatzsteuer-Identifikationsnummer
          <br />
          <br />
          DE812998053
        </p>
      </div>
      <Footer />
    </main>
  );
}
