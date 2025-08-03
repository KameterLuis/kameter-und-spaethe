const Team = () => {
  return (
    <section id="team" className="max-w-[1200px] mx-auto px-4 py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="relative text-3xl md:text-4xl font-bold text-[#333333] mb-4">
          Unser Team - Ihre Experten
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#205da9] rounded-full"></span>
        </h2>
        <p className="text-lg text-[#666666] max-w-3xl mx-auto mt-8">
          Hinter Kameter & Späthe steht ein engagiertes Team von Fachkräften mit
          jahrelanger Erfahrung im Handwerk und der Baubranche. Persönliche
          Beratung und kompetente Betreuung sind unsere Stärke.
        </p>
      </div>

      <div className="relative md:flex gap-8 space-y-4 md:space-y-0">
        <div className="bg-white group relative rounded-xl hover:border-[#205da9]/30 shadow-lg border border-[#E0E0E0] p-8 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="absolute rounded-xl w-full h-full inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <img
              src="/team/bernd.jpg"
              style={{ objectFit: "cover" }}
              className="w-24 h-24 bg-contain mx-auto mb-4 rounded-full bg-[#F5F5F5] border-4 border-[#205da9] flex items-center justify-center"
            />
            <h3 className="text-xl font-bold text-[#333333] mb-2">
              Bernd Kameter
            </h3>
            <p className="text-[#666666] text-sm leading-relaxed mb-4">
              Über 30 Jahre Erfahrung im Werkzeughandel. Ihr Ansprechpartner für
              Spezialanfertigungen und komplexe technische Lösungen.
            </p>
            <div className="flex justify-center space-x-3">
              <span className="text-xs bg-[#F5F5F5] text-[#666] px-3 py-1 rounded-full">
                Werkzeuge
              </span>
              <span className="text-xs bg-[#F5F5F5] text-[#666] px-3 py-1 rounded-full">
                Technik
              </span>
            </div>
          </div>
        </div>

        <div className="relative hover:border-[#205da9]/30 overflow-hidden group bg-white rounded-xl shadow-lg border border-[#E0E0E0] p-8 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="absolute w-full h-full rounded-xl inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <img
              src="/team/armin.jpg"
              style={{ objectFit: "cover" }}
              className="w-24 h-24 bg-contain mx-auto mb-4 rounded-full bg-[#F5F5F5] border-4 border-[#205da9] flex items-center justify-center"
            />
            <h3 className="text-xl font-bold text-[#333333] mb-2">
              Armin Späthe
            </h3>
            <p className="text-[#666666] text-sm leading-relaxed mb-4">
              Organisationstalent und Kundendienst-Experte. Verantwortlich für
              reibungslose Abläufe und die persönliche Betreuung unserer Kunden.
            </p>
            <div className="flex justify-center space-x-3">
              <span className="text-xs bg-[#F5F5F5] text-[#666] px-3 py-1 rounded-full">
                Service
              </span>
              <span className="text-xs bg-[#F5F5F5] text-[#666] px-3 py-1 rounded-full">
                Beratung
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-[#F5F5F5] rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-[#333333] mb-4">
          Unsere Erfahrung ist Ihr Vorteil
        </h3>
        <p className="text-[#666666] mb-6">
          Unser festes Team von Mitarbeitenden unterstützt Sie mit Fachkompetenz
          und einem umfassenden Wissensvorsprung. Durch regelmäßige Schulungen
          und engen Kontakt zu Herstellern sind wir stets auf dem neuesten Stand
          der Technik.
        </p>
        <div className="flex space-x-4 justify-center">
          <div className="bg-white rounded-lg p-4 w-40">
            <div className="text-2xl font-bold text-[#205da9]">25+</div>
            <div className="text-[#666]">Jahre Erfahrung</div>
          </div>
          <div className="bg-white rounded-lg p-4 w-40">
            <div className="text-2xl font-bold text-[#205da9]">1000+</div>
            <div className="text-[#666]">Kunden</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
