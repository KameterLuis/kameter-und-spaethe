import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753007300720-400qbm87ghg.jpeg"
              alt="Kameter & Späthe Logo"
              className="h-16 mb-4 bg-white rounded-lg p-2"
            />

            <h3 className="text-2xl font-bold text-[#2a7bde] mb-2">
              K&S Werkzeug und Umwelttechnik
            </h3>
            <p className="text-gray-300 mb-2">
              Ihr kompetenter Partner für Werkzeuge, Maschinen und Arbeitsschutz
              in Unterhaching seit über 30 Jahren.
            </p>
            <div className="mb-2">
              <Link
                className="text-[#2a7bde] hover:text-[#2a7bde]/80"
                href="/impressum"
              >
                Impressum
              </Link>
            </div>
            <Link
              className="text-[#2a7bde] hover:text-[#2a7bde]/80"
              href="/datenschutz"
            >
              Datenschutzekrlärung
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#2a7bde]">
              Kontakt
            </h4>
            <address className="text-sm not-italic text-gray-300 space-y-2">
              K&S GbR <br className="hidden md:inline" />
              Franz-Schubert-Str. 7<br />
              82008 Unterhaching
              <br />
              <br />
              <a
                href="tel:+498966665670"
                className="text-[#2a7bde] hover:text-[#2a7bde]/80"
              >
                Tel: 089 6666 5670
              </a>
              <br />
              <a
                href="mailto:info@kswu.de"
                className="text-[#2a7bde] hover:text-[#2a7bde]/80"
              >
                E-Mail: info@kswu.de
              </a>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#2a7bde]">
              Öffnungszeiten
            </h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p className="!text-white">Mo-Do: 07:00 - 17:00 Uhr</p>
              <p className="!text-white">Fr: 07:00 - 15:00 Uhr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            <p>© 2025 Kameter & Späthe GbR. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/impressum"
              className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
