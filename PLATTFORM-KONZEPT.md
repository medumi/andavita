# Andavita – Website, Mitgliederbereich und Apps
Stand: 17. September 2026. Umsetzungsplan; keine Behauptung, dass das Backend oder native Apps bereits fertig sind.

## Zugang

Die öffentliche Website erklärt das Angebot und verkauft Mitgliedschaften. Ein gut sichtbarer Mitgliederbereich ist vollständig im Browser nutzbar, auch am Computer ohne Smartphone und ohne App-Download. Browser, iOS und Android nutzen später dieselbe Benutzer-ID und dieselbe serverseitig geprüfte Mitgliedschaft. Mitgliedschaft nicht anhand einer lokalen Browservariable oder einer Kauf-Erfolgsseite freischalten.

Vorhanden: klickbarer Browserentwurf, Website mit Preisen, App-Bereich, lokale Demo-Merkliste und Demo-Fortschritt. Noch offen: echtes Login, Synchronisierung, Zahlungen, Kurs-Backend, Video-Streaming und signierte Store-Builds. Die Welle-1-Serien sind inzwischen aus der ersatzweise bereitgestellten PDF eingearbeitet; siehe Aktualisierung unten.

## Preise

- 1 Monat: 14,90 Euro je Monat.
- 6 Monate: 11,90 Euro rechnerisch pro Monat; 71,40 Euro je Sechsmonatszeitraum.
- 12 Monate / 1 Jahr: 8,25 Euro rechnerisch pro Monat; 99 Euro je Jahr. Das ist ein Tarif, keine zwei Produkte.
- Vollzugang zu verfügbaren Kursen; neue Inhalte während der Mitgliedschaft inklusive.
- Verlängerung, Kündigung, rechtliche Pflichtinformationen und steuerliche Preisdarstellung vor Verkaufsstart verbindlich festlegen. Die Vorschau löst keine Bestellung aus.

## Empfohlener Kaufweg

Mitgliedschaft über die Website; die Apps dienen zunächst dem Zugang zu bereits erworbenen Videoinhalten. Google erlaubt Consumption-only-Apps. Für Apple muss geprüft werden, ob der Schwerpunkt auf aufgezeichneten Videos die Reader-App-Voraussetzungen erfüllt. Live-Einzeltraining ist von der Reader-Link-Berechtigung ausgeschlossen. Externe Kauflinks nicht pauschal in native Apps übernehmen; Regeln und Programme unterscheiden sich nach Storefront. Eine normale Browserwebsite unterliegt nicht den In-App-Kaufregeln.

## Zahlungsanbieter: vorläufige Auswahl

Stripe Payments + Billing: Bei Standardkarten aus dem EWR aktuell 1,5 % + 0,25 Euro, zusätzlich Billing Pay-as-you-go 0,7 % des Billing-Volumens. Beispiel: 14,90 Euro -> ca. 0,58 Euro; 71,40 Euro -> ca. 1,82 Euro; 99 Euro -> ca. 2,43 Euro. Keine vollständige Gesamtkostenrechnung: andere Zahlungsmittel/Karten, Stripe Tax, Rückbuchungen, eigene Steuer-/Rechnungsprozesse, Affiliate-Lösung und Betrieb können Zusatzkosten verursachen. In diesem Modell bleibt der Betreiber Verkäufer.

Digistore24 GmbH: aktuell 7,9 % des Bruttopreises + 1 Euro je Transaktion. Beispiele: 14,90 Euro -> ca. 2,18 Euro; 71,40 Euro -> ca. 6,64 Euro; 99 Euro -> ca. 8,82 Euro. Wiederverkäufermodell und Affiliate-Infrastruktur; Affiliate-Provisionen, Erstattungen und Rückbuchungen separat berücksichtigen. Anbieterbedingungen und eventuell bestehende Sonderkonditionen prüfen.

Vorläufig: Stripe bei Schwerpunkt auf niedrigen Transaktionskosten und eigener Abwicklung; Digistore24 bei Schwerpunkt auf bestehendem Kongress-/Affiliate-Vertrieb und Entlastung durch das Wiederverkäufermodell. Erst nach der Anbieterwahl live integrieren, bis dahin keine Bankdaten oder Geheimnisse im Entwurf.

Quellen, geprüft am 17.09.2026:
- https://stripe.com/de/billing/pricing
- https://www.digistore24.com/de/features/
- https://help.digistore24.com/hc/en-us/articles/23694504392721-Costs-at-Digistore24-GmbH-Germany
- https://support.google.com/googleplay/android-developer/answer/10281818?hl=en
- https://developer.apple.com/support/reader-apps/

## Technischer Ablauf für Mitgliedschaften

1. Mitglied meldet sich über den Browser an; auch E-Mail-Link als einfacher Zugang möglich.
2. Backend erstellt den Checkout für einen freigegebenen Tarif. Preis-IDs werden serverseitig bestimmt.
3. Signierte Zahlungsereignisse werden serverseitig verifiziert, dauerhaft und idempotent verarbeitet. Bei Digistore entsprechende IPN-Prüfung nach offizieller Dokumentation.
4. Abostatus, bezahlt-bis-Datum, Erstattungen, Zahlungsausfälle und Kündigungen werden in einer zentralen Datenbank gepflegt.
5. Website und Apps prüfen dieselbe Freischaltung. Ein Kunde zahlt nicht zweimal.
6. Geschützte Videos erhalten zeitlich begrenzte Abspielberechtigungen. Keine ungeschützten MP4-Links als Bezahlzugang.

## Videoverwaltung

Geschützter Verwaltungsbereich mit Rollen für Redaktion und Freigabe. Kursvideo auswählen -> Titel, Thema, Expertin, Level und Beschreibung ergänzen -> Vorschau und Untertitel prüfen -> sofort oder zu einem geplanten Zeitpunkt freischalten. Status: Entwurf / Upload / Verarbeitung / Prüfung / veröffentlicht / archiviert.

Beispiel für Videodienst: Cloudflare Stream. Direkter, bei großen Dateien fortsetzbarer Upload über eine vom Backend erzeugte einmalige URL; kein API-Schlüssel im Browser. Verarbeitung in passende Streaming-Qualitäten, Status per verifiziertem Webhook. Die Redaktion veröffentlicht erst nach erfolgreicher Verarbeitung. Bei Verbindungsabbruch, Encoding-Fehlern oder fehlenden Untertiteln klare Rückmeldung. Bildmotive hier sind KI-Vorschauen, keine Portraits der Kursleiterinnen.

Quelle: https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/
Zugriffsschutz: https://developers.cloudflare.com/stream/viewing-videos/securing-your-stream/

## Apps

Gemeinsame Web-Oberfläche kann mit Capacitor in iOS-/Android-Projekte übernommen werden. Das erzeugt noch keine veröffentlichungsfertige App. Native Video-/Audiozustände, sichere Sitzungsspeicherung, Deep Links, Push-Zustimmung, Barrierefreiheit, App-Icons, Datenschutzangaben und Kontolöschung müssen umgesetzt und auf echten Geräten geprüft werden. Ein brauchbares mobiles Produkt muss mehr als eine unveränderte Website-Hülle sein.

Für Erstellung und Signierung: Xcode und Apple Developer-Team für iOS; Android SDK/JDK, Signierschlüssel und Play Console für Android. Auf diesem Mac wurden nur Xcode Command Line Tools und kein Java Runtime gefunden. Keine IPA oder APK ist erstellt. Store-Freigabe liegt bei Apple/Google und kann nicht garantiert werden.
Quelle: https://capacitorjs.com/docs/getting-started

## Videovorlagen

5 Sekunden Intro, 6 Sekunden Outro, 8 Sekunden Bauchbinde. 1080p/25 fps. Bauchbinde als ProRes 4444 mit Alphakanal sowie MP4-Vorschau. Ohne Ton. Namen und Funktion in video-templates/templates.json austauschbar; Renderprogramm liegt daneben. Keine unbestätigten Qualifikationen als Bauchbinde verwenden.

## Aktualisierung aus Serienmatrix und Auftraggeber

PDF vom 10.09.2026 eingearbeitet. Auftraggeber bestätigt am 17.09.2026 ausdrücklich: Welle 1 wird für den Launch als vollständig fertig/verfügbar behandelt. Diese Aussage ersetzt den älteren Produktionsstand in der PDF. Welle 2 wird als kommend dargestellt.

Welle 1: Sanft starten (Nina, 10), Nervensystem-Reset (Simone, 7), Besser schlafen (Simone, 5), 15-Minuten-Morgenroutine (Nina, 7 × 15 Minuten), Starker Rücken 50+ (Simone, 5). Insgesamt 34 Videos.

Welle 2: Balance im Wandel (Nina plus zwei Gast-Einheiten Simone; 15–18 noch offen), Knochen-stark (Nina, 7), Bewegte Pause (Nina, 5 × 10 Minuten), Marma-Yoga: Finde deine innere und äußere Balance mit den sechs Spannungsbögen (Simone, 6), Meditation lernen (Simone, 7), Yoga für einen bewussten und kraftvollen Beckenboden (Simone, 7). Keine feste Zusage von 47 Videos, solange der Umfang von Balance im Wandel offen ist.

Expertenvideos sind separate Vermarktungsbeiträge, keine Kursvideos. Keine feste Serie-Kongress-Zuordnung; bisherige Zuordnungen nicht übernehmen. Kongressbonus und Launch-Datum offen. EN-Dubbing entfällt. Intro/Outro/Bauchbinden sind erstellte Gestaltungsvorschläge, noch kein in der PDF bestätigter Produktionsstandard. Musik bleibt bei Christian nach Rahmen von Nina/Simone; Vorlagen absichtlich ohne Ton.

## Künftige Kursfilter: zwei unabhängige Achsen

1. Praxisart: z.B. Hatha Yoga, Yin Yoga, Atemübungen, Meditation, Entspannung, Mobilität, Wissen. Mehrfachzuordnung pro Video möglich. Yoga-Stile erst nach fachlicher Bestätigung hinterlegen; die Serienmatrix enthält noch keine belastbare Stilzuordnung.
2. Themen & Anliegen: z.B. Rücken, Schlaf, Erschöpfung, Osteoporose, Entzündung, Wechseljahre, Beckenboden. Nicht alles sind Körperregionen, daher keine pauschale Bezeichnung als Problemzone.
3. Ergänzend Dauer, Expertin, Erfahrung, Intensität, Hilfsmittel und Variante (Matte / Stuhl / Stand).

Filter zwischen den Achsen mit UND kombinieren, innerhalb mehrfach ausgewählter Werte einer Achse mit ODER. Ein Video kann in mehreren Serien/Themen erscheinen, ohne neu hochgeladen zu werden. Gleiche Video-ID = gleicher Fortschritt überall.

Zukünftige Datenfelder: practice_types[], concerns[], body_regions[], equipment[], variants[], contraindications, suitability_notes, clinical_review_status, reviewed_by, reviewed_at. Nur fachlich bestätigte Zuordnungen werden für krankheitsbezogene Filter genutzt. Themenfilter sind keine Diagnose oder persönliche Behandlungsempfehlung. Konkrete Symptomlinderungs-/Heilversprechen werden nicht aus Themenbezeichnungen abgeleitet. Noch ungeprüfte Anliegen bleiben im internen Katalog, bis Nina/Simone sie freigeben.
