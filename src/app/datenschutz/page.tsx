import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Datenschutz() {
  return (
    <main className="bg-white">
      <Header />
      <div className="max-w-[800px] mx-auto px-4 pt-8 pb-24 md:pt-12 md:pb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#333333] mb-6 relative inline-block">
            Datenschutzerklärung
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#205da9] rounded-full"></span>
          </h2>
        </div>
        <div className="text-lg text-[#666666] leading-relaxed">
          <h2 className="text-xl mt-4 font-bold">
            Verantwortliche Stelle im Sinne der DSGVO
          </h2>
          <address>
            <strong>
              K&amp;S Werkzeug- und Umwelttechnik Kameter &amp; Späthe&nbsp;GbR
            </strong>
            <br />
            Franz-Schubert-Straße&nbsp;7
            <br />
            82008&nbsp;Unterhaching
            <br />
            <br />
            Telefon:{" "}
            <a href="tel:+498966665670">089&nbsp;66&nbsp;66&nbsp;56&nbsp;70</a>
            <br />
            Telefax: 089&nbsp;66&nbsp;66&nbsp;56&nbsp;71
            <br />
            E-Mail: <a href="mailto:info@kswu.de">info@kswu.de</a>
            <br />
            <br />
            Vertreten durch: Armin&nbsp;Späthe, Bernd&nbsp;Kameter
          </address>

          <p>
            Umsatzsteuer-Identifikationsnummer:{" "}
            <strong>DE&nbsp;812&nbsp;998&nbsp;053</strong>
          </p>
          <p>
            <em>
              Das Impressum wurde mit dem Impressums-Generator der
              activeMind&nbsp;AG erstellt.
            </em>
          </p>

          <h2 className="text-xl mt-4 font-bold">Ihre Betroffenenrechte</h2>
          <p>
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
            können Sie jederzeit folgende Rechte ausüben:
          </p>
          <ul>
            <li>
              Auskunft über Ihre bei uns gespeicherten Daten und deren
              Verarbeitung,
            </li>
            <li>Berichtigung unrichtiger personenbezogener Daten,</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
            <li>
              Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
              aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,
            </li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
            <li>
              Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
              eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.
            </li>
          </ul>
          <p>
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Sie können sich jederzeit mit einer Beschwerde an die für Sie
            zuständige Aufsichtsbehörde wenden. Eine Liste der Aufsichtsbehörden
            (nicht-öffentlicher Bereich) finden Sie unter:
            <a
              href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              target="_blank"
              rel="noopener"
            >
              bfdi.bund.de
            </a>
            .
          </p>

          <h2 className="text-xl mt-4 font-bold">
            Zwecke der Datenverarbeitung durch die verantwortliche Stelle und
            Dritte
          </h2>
          <p>
            Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser
            Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer
            persönlichen Daten an Dritte zu anderen als den genannten Zwecken
            findet nicht statt. Wir geben Ihre persönlichen Daten nur weiter,
            wenn:
          </p>
          <ul>
            <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
            <li>
              die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen
              erforderlich ist,
            </li>
            <li>
              die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung
              erforderlich ist,
            </li>
            <li>
              die Verarbeitung zur Wahrung berechtigter Interessen erforderlich
              ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes
              schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.
            </li>
          </ul>

          <h2 className="text-xl mt-4 font-bold">
            Löschung bzw. Sperrung der Daten
          </h2>
          <p>
            Wir halten uns an die Grundsätze der Datenvermeidung und
            Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher
            nur so lange, wie dies zur Erreichung der genannten Zwecke
            erforderlich ist oder wie es die gesetzlich vorgesehenen
            Speicherfristen vorsehen. Nach Wegfall des jeweiligen Zwecks bzw.
            Ablauf dieser Fristen werden die Daten routinemäßig gesperrt oder
            gelöscht.
          </p>

          <h2 className="text-xl mt-4 font-bold">SSL-Verschlüsselung</h2>
          <p>
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
            verwenden wir dem aktuellen Stand der Technik entsprechende
            Verschlüsselungsverfahren (z.&nbsp;B.&nbsp;SSL) über HTTPS.
          </p>

          <h2 className="text-xl mt-4 font-bold">Kontaktformular</h2>
          <p>
            Wenn Sie per E-Mail oder Kontaktformular mit uns in Kontakt treten,
            erteilen Sie uns zum Zwecke der Kontaktaufnahme Ihre freiwillige
            Einwilligung. Dafür ist die Angabe einer validen E-Mail-Adresse
            erforderlich; weitere Angaben sind optional. Die von Ihnen gemachten
            Angaben werden zur Bearbeitung der Anfrage sowie für mögliche
            Anschlussfragen gespeichert und nach Erledigung automatisch
            gelöscht.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            Verwendung von Google Analytics
          </h2>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der
            Google Inc. „Google“. Google Analytics verwendet „Cookies“. Die
            durch das Cookie erzeugten Informationen über Ihre Benutzung dieser
            Website werden in der Regel an einen Google-Server in den USA
            übertragen und dort gespeichert. Durch Aktivierung der
            IP-Anonymisierung auf dieser Website wird Ihre IP-Adresse jedoch
            zuvor innerhalb der EU oder anderer Vertragsstaaten des EWR gekürzt.
            Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
            Google in den USA übertragen und dort gekürzt.
          </p>

          <p>Sie können:</p>
          <ul>
            <li>
              die Speicherung von Cookies durch eine entsprechende Einstellung
              Ihres Browsers verhindern (möglicherweise sind dann nicht alle
              Funktionen dieser Website vollumfänglich nutzbar);
            </li>
            <li>
              die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung
              der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google
              sowie die Verarbeitung dieser Daten durch Google verhindern, indem
              Sie das{" "}
              <a href="#" rel="nofollow">
                Browser-Add-on
              </a>{" "}
              herunterladen und installieren;
            </li>
            <li>
              alternativ das Tracking durch Google Analytics unterbinden, indem
              Sie{" "}
              <a href="#" rel="nofollow">
                diesen Link
              </a>{" "}
              anklicken (Opt-out-Cookie).
            </li>
          </ul>

          <h2 className="text-xl mt-4 font-bold">Google AdWords</h2>
          <p>
            Unsere Website nutzt Google Conversion-Tracking. Gelangen Sie über
            eine von Google geschaltete Anzeige auf unsere Website, setzt Google
            AdWords ein Cookie auf Ihrem Rechner. Dieses Cookie verliert nach 30
            Tagen seine Gültigkeit und dient nicht der persönlichen
            Identifizierung. Wenn das Cookie noch gültig ist und Sie bestimmte
            Seiten besuchen, können wir und Google erkennen, dass Sie auf die
            Anzeige geklickt haben.
          </p>
          <p>
            Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür
            erforderliche Setzen eines Cookies ablehnen – z.&nbsp;B. über eine
            Browser-Einstellung, welche das automatische Setzen von Cookies
            generell deaktiviert. Bitte löschen Sie Opt-out-Cookies nicht,
            solange Sie keine Aufzeichnung von Messdaten wünschen.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            Änderung unserer Datenschutzbestimmungen
          </h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            Änderungen unserer Leistungen umzusetzen, z.&nbsp;B. bei Einführung
            neuer Services. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            Fragen an den Datenschutzbeauftragten
          </h2>
          <p>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
            E-Mail oder wenden Sie sich direkt an die für den Datenschutz
            verantwortliche Person in unserer Organisation.
          </p>
          <p>
            <em>
              Diese Datenschutzerklärung wurde mit dem
              Datenschutzerklärungs-Generator der activeMind&nbsp;AG erstellt.
            </em>
          </p>

          <h1 className="text-xl mt-2">
            Rechtliche Hinweise &amp; Haftungsausschluss
          </h1>

          <h2 className="text-xl mt-4 font-bold">
            1. Inhalt des Onlineangebotes
          </h2>
          <p>
            Der Autor übernimmt keinerlei Gewähr für die Aktualität,
            Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
            Informationen. Haftungsansprüche gegen den Autor, die sich auf
            Schäden materieller oder ideeller Art beziehen, welche durch die
            Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch
            die Nutzung fehlerhafter und unvollständiger Informationen
            verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens
            des Autors kein vorsätzliches oder grob fahrlässiges Verschulden
            vorliegt.
          </p>

          <h2 className="text-xl mt-4 font-bold">2. Verweise und Links</h2>
          <p>
            Bei direkten oder indirekten Verweisen auf fremde Webseiten
            („Hyperlinks“), die außerhalb des Verantwortungsbereiches des Autors
            liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall
            in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und
            es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
            rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit
            ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen
            Inhalte auf den zu verlinkenden Seiten erkennbar waren.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            3. Urheber- und Kennzeichenrecht
          </h2>
          <p>
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Materialien zu beachten, von ihm selbst erstellte
            Materialien zu nutzen oder auf lizenzfreie Inhalte zurückzugreifen.
          </p>

          <h2 className="text-xl mt-4 font-bold">4. Datenschutz</h2>
          <p>
            Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
            persönlicher oder geschäftlicher Daten besteht, erfolgt die
            Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich
            freiwilliger Basis. Die Nutzung der im Impressum veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderten Informationen („Spam“) ist nicht gestattet.
          </p>

          <h2 className="text-xl mt-4 font-bold">
            5. Rechtswirksamkeit dieses Haftungsausschlusses
          </h2>
          <p>
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
            betrachten, von dem aus auf diese Seite verwiesen wurde. Sollten
            Teile dieses Textes der geltenden Rechtslage nicht, nicht mehr oder
            nicht vollständig entsprechen, bleiben die übrigen Teile des
            Dokuments in ihrem Inhalt und ihrer Gültigkeit unberührt.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
