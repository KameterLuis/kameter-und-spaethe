import { Check } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-4 pt-8 pb-24 md:pt-12 md:pb-32"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#333333] mb-6 relative inline-block">
          Über uns
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#205da9] rounded-full"></span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="w-full h-full">
          <img
            src="about/about-2.jpg"
            width={500}
            height={350}
            alt="Team Werkstatt Kameter & Späthe"
            className="shadow-xl object-cover rounded-none w-full h-full max-w-full"
          />
        </div>

        <div className="space-y-6">
          <p className="text-lg text-[#666666] leading-relaxed">
            Kameter & Späthe ist Ihr zuverlässiger Partner in Unterhaching für
            Werkzeuge, Maschinen, Arbeitsschutz und Baubedarf - seit Jahrzehnten
            inhabergeführt, persönlich, regional.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: <Check color="#000" />,
                title: "Persönliche Beratung",
                desc: "Kompetente Fachberatung durch langjährige Experten",
              },
              {
                icon: <Check color="#000" />,
                title: "Schnelle Abwicklung",
                desc: "Unbürokratische und effiziente Auftragsbearbeitung",
              },
              {
                icon: <Check color="#000" />,
                title: "Eigene Werkstatt",
                desc: "Professionelle Reparaturen und Serviceleistungen vor Ort",
              },
              {
                icon: <Check color="#000" />,
                title: "Tradition & Moderne",
                desc: "Erfahrung trifft auf Innovation für beste Ergebnisse",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex cursor-default items-start gap-4 p-6 bg-[#F8F8F8] hover:bg-[#d3e7ff] transition-colors duration-300 group !rounded-none"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-[#333333] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#666666] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
