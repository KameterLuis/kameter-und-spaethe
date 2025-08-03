import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl relative md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Dienstleistungen
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#205da9] rounded-full"></span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
            Professionelle Services für Ihren Erfolg. Von der Beratung bis zur
            Lieferung - alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceItem
            title="Reparaturservice"
            description="Reperaturdienst für sämtliche Werkzeuge und
                    Maschinen aller Marken mit modernster Technik."
          />
          <ServiceItem
            title="Schärf- und Schleifservice"
            description="Präziser Werkzeugschärf- und Schleifdienst mit maximaler Schnittleistung."
          />
          <ServiceItem
            title="Lieferservice"
            description="Flexible und zuverlässige Lieferoptionen - ab 150 € frei
                    Haus im Großraum München."
          />
        </div>
        <div className="md:flex md:space-x-8 mt-8">
          <ServiceItem
            title="Fachberatung"
            description="Persönliche Beratung durch erfahrene Fachkräfte zu Werkzeug- und Umwelttechnik."
          />
          <div className="mt-8 md:mt-0">
            <ServiceItem
              title="Mietpark"
              description="Flexible Vermietung von Maschinen und Werkzeugen. Täglich,
                    wöchentlich oder monatlich."
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+498966665670"
            className="inline-flex items-center px-8 py-4 bg-[#205da9] text-white font-semibold rounded-lg hover:bg-[#205da9]/80 transition-colors"
          >
            Alle Services anfragen
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
