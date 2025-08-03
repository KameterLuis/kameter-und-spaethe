"use client";

import { useState } from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="products" className="py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl relative md:text-4xl font-bold text-[#333333] mb-4">
            Produkte & Sortiment
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#205da9] rounded-full"></span>
          </h2>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-8 mt-8">
            Hochwertige Markenprodukte für Profis - von der Baustelle bis zur
            privaten Werkstatt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductItem
            title="Arbeitsschutz"
            description="Sicherheitsschuhe, Arbeitshosen, Handschuhe, Gehörschutz und
              professionelle Schutzkleidung."
            img="/produkte/arbeitsschutz.jpg"
          />

          <ProductItem
            title="Elektroartikel"
            description="Kabeltrommeln, Bauleuchten, CEE-Stecker, Verlängerungskabel, Leuchten"
            img="/produkte/elektronik.jpg"
          />

          <ProductItem
            title="Befestigungstechnik"
            description="Schrauben, Dübel, Winkelverbinder und Spezialbefestigungen in
              Premium-Qualität."
            img="/produkte/schrauben.jpg"
          />

          <ProductItem
            title="Diamantwerkzeuge, Bohrer"
            description="Hochwertige Bohr- und Sägetechnik für präzise Bohrungen und
              präzise Schnitte."
            img="/produkte/bohrer.jpg"
          />

          <ProductItem
            title="Drucklufttechnik"
            description="Kompressoren, Druckluftwerkzeuge und Zubehör für professionelle
              Anwendungen."
            img="/produkte/druckluft.jpg"
          />

          <ProductItem
            title="Betriebshygiene"
            description="Professionelle Hygieneartikel für Betriebe und öffentliche
              Einrichtungen."
            img="/produkte/betriebshygiene.jpg"
          />
        </div>

        <div
          className={`${
            showMore ? "" : "hidden"
          } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6`}
        >
          <ProductItem
            title="Bauchemie"
            description="Silikon, Acryl, Montagekleber, Montageschaum, Schmieröle, Fette"
            img=""
          />

          <ProductItem
            title="Elektrowerkzeuge"
            description="Akkuschrauber, Bohr- und Stemmhämmer, Winkelschleifer"
            img=""
          />

          <ProductItem
            title="Fliesen- und Maurerwerkzeuge"
            description="Kellen, Reibebretter, Meissel, Schnüre, Fliesenschneider, Spachteln"
            img=""
          />

          <ProductItem
            title="Gartenbauwerkzeuge"
            description="Rechen, Spaten, Gartenscheren, Laubrechen, Wasserschläuche"
            img=""
          />

          <ProductItem
            title="Kanalprüftechnik"
            description="Absperr- und Prüfblasen, Hausanschlussprüfeinheiten nach EN1610"
            img=""
          />

          <ProductItem
            title="Klebebänder, Folien, Abdeckvlies"
            description="PVC- und Gewebeklebebänder, Baufolien, Abdeckvlies mit einseitiger Folie"
            img=""
          />

          <ProductItem
            title="Leitern & Gerüste"
            description="Anlegeleitern, Vielzweckleitern, Fahrgerüste"
            img=""
          />

          <ProductItem
            title="Maschinen"
            description="Notstromaggregate, Kernbohrgeräte, Hochdruckreiniger, Tischsägen"
            img=""
          />

          <ProductItem
            title="Messwerkzeuge"
            description="Bandmaße, Wasserwaagen, Entfernungsmesser, Baulaser, Nivelliergeräte"
            img=""
          />

          <ProductItem
            title="Seil- und Hebetechnik"
            description="Hebeschlingen, Zurrgurte, Kettengehänge, Karabiner, Seile"
            img=""
          />

          <ProductItem
            title="Straßen- und Pflasterbauwerkzeuge"
            description="Pflasterhämmer, Pflasterergummi, Schaufeln, Pickel, Besen, Eimer, Brechstangen"
            img=""
          />

          <ProductItem
            title="Werkzeuge und Werkstattbedarf"
            description="Hämmer, Zangen, Steckschlüsselsätze, Werkstattwagen, Bits, Kanister"
            img=""
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-[#666666] mb-4">
            Und viele weitere hochwertige Marken und Produkte...{" "}
          </p>
          <a
            href="#kontakt"
            onClick={() => setShowMore(!showMore)}
            className="bg-[#205da9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#205da9]/80 transition-colors"
          >
            {showMore ? "Weniger anzeigen" : "Mehr anzeigen"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
