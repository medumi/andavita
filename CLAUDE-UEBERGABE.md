# ANDAVITA – Projektübergabe an Claude

Stand: 24.09.2026. Diese Datei beschreibt den bestätigten Projektstand und die bisherigen Entscheidungen. Sie ersetzt keine neueren Anweisungen des Auftraggebers. Konzeptideen sind nicht automatisch umgesetzte Funktionen.

## 1. Ziel und Marke

Andavita ist eine geplante Yoga-, Bewegungs- und Entspannungsplattform, besonders für Menschen ab der Lebensmitte. Website, Browser-Mitgliederbereich, iOS und Android sollen dieselben Kurse und Mitgliedschaften nutzen. Der Markenname lautet ausschließlich Andavita; Kalana und Menoa sind ältere Arbeitsnamen bzw. Gestaltungsreferenzen.

Look: warme cremefarbene Flächen, Meergrün, goldene Akzente, ruhige Typografie und Blume als Markenelement. Die Blume wird auch in Intro, Outro und Bauchbinden verwendet. Kursbilder im Prototyp sind KI-Motive, keine echten Trainerinnenportraits.

## 2. Online-Links

- Website: https://andavita-bewegung-ruhe.medumio-0664.chatgpt.site/
- Browser-Mitgliederbereich: https://andavita-bewegung-ruhe.medumio-0664.chatgpt.site/app#home
- Animationsstudio und Downloads: https://andavita-bewegung-ruhe.medumio-0664.chatgpt.site/studio

Zuletzt bestätigter Deployment-Stand: Version 6, 21.09.2026, Commit `617ee186a82aeaba8e1685ff640c17be8098c68a`. Links wurden bei dieser Übergabe nicht erneut im Browser geprüft. /app ist eine Browseransicht und kein iOS-Installationslink. Kein App-Store-/Play-Store-/TestFlight-Link vorhanden.

Eine eigene Domain ist laut Auftraggeber gesichert; genauer Hostname, DNS und Serverzugang sind noch nicht dokumentiert. LAMP-Upload wurde vorbereitet, aber nicht durchgeführt oder bestätigt.

## 3. Quellcode und Technik

Lokaler Projektordner: `/Users/micha/ChatGPT/andavita`.

- Website: eigenes HTML, CSS und JavaScript; kein WordPress, kein Astro, kein Root-npm-Build.
- `dist/` ist der veröffentlichte Webinhalt und zugleich die gepflegte Grundlage der Oberfläche.
- `dist/index.html`, `website.css`, `website.js`: Marketingseite.
- `dist/app.html`, `app.js`, `style.css`: Mitgliederbereich und Demo-Player.
- `dist/studio.html`, `dist/media/`: Animationen und Downloads.
- `dist/assets/`: Bilder und Blume.
- `mobile/`: Capacitor 8, native Android-/iOS-Projekte und gemeinsame Weboberfläche.
- `.openai/hosting.json`: bestehende Sites-Zuordnung; nicht versehentlich ersetzen.
- `tests/member-rhythm.cjs`: Tests für Wochenplan und Fortsetzen.

Git ist lokal initialisiert. Beim Check am 24.09.2026 war kein Git-Remote konfiguriert. Letzter Commit: `617ee18`. README ist geändert; OFFENE-PUNKTE.md, exports/, redaktion/ und video-produktion/ sind bislang unversioniert. Diese Übergabe ist ebenfalls neu. GitHub-Anbindung ist angefragt; noch kein GitHub-Repository erstellt oder Push durchgeführt. Zielkonto/Organisation noch klären. Empfehlung: privates Repository `andavita`.

## 4. Was tatsächlich funktioniert

- Responsive Website mit Angebot, Kursreihen, Trainerinnenbereich, Preisen und FAQ.
- Demo-Katalog, Suche/Filter, Favoriten, Verlauf und Profil.
- Startseite priorisiert die zuletzt gestartete unvollständige Einheit.
- Wiedergabeposition wird beim Pausieren/Verlassen gespeichert und wieder aufgenommen.
- Wochenplan mit Wochentagen, Ortszeit und Erinnerungswunsch.
- Browser-Erinnerung bei geöffnetem Mitgliederbereich, passend zum Plan; nach gezählter Aktivität entfällt die Erinnerung für heute.
- Einstellungen und Demo-Fortschritt liegen ausschließlich lokal im Browser/auf dem Gerät.

Der Kursplayer zeigt ein Kursbild mit simuliertem Zeitablauf. Es sind noch keine echten Kursaufnahmen angebunden. Lokale Profilwerte sind kein Login und keine Mitgliedschaftsprüfung.

## 5. Native Apps: genauer Stand

Capacitor 8.5.2 und @capacitor/local-notifications 8.3.1. Vorläufige App-ID: `com.andavita.preview`.

Android: Debug-Build und Signaturprüfung erfolgreich. Test-APK lokal unter `mobile/build/Andavita-Android-Erinnerungen-Test.apk`. Kein Store-Release, keine Produktionssignierung und keine bestätigten Gerätetests.

iOS: Xcode 26.3 und iOS-Simulator 26.3.1 installiert. Unsignierter Simulator-Build erfolgreich; Bundle unter `mobile/build/ios/Build/Products/Debug-iphonesimulator/App.app`. Nicht auf einem echten iPhone installierbar. Signing-Team, Geräte-/TestFlight-Build und echte Gerätetests fehlen.

Lokale Geräte-Erinnerungen sind implementiert: Berechtigungsabfrage, Wochenplan, Testbenachrichtigung, Ausschalten, Öffnen der unvollständigen Einheit. Maximal 56 Tage vorausgeplant, Aktualisierung beim Öffnen/Planändern; nach acht Wochen ohne Öffnen keine weiteren Termine. Android kann durch Energiesparen verzögern. Logiktests und Plattform-Builds bestanden; tatsächliche Zustellung bei geschlossener App auf echten Geräten noch nicht geprüft. Kein serverseitiger Push und kein Browser-Push.

## 6. Inhalte und Launch

Auftraggeberentscheidung: Welle 1 gilt zum Launch als fertig, unabhängig von älteren Produktionsständen in der Matrix. Das bedeutet nicht, dass Videodateien bereits eingebunden sind. Welle 2 als „Demnächst“ darstellen.

| Welle 1 | Trainerin | Videos |
|---|---|---:|
| Sanft starten | Nina | 10 |
| Nervensystem-Reset | Simone | 7 |
| Besser schlafen | Simone | 5 |
| 15-Minuten-Morgenroutine | Nina | 7 |
| Starker Rücken 50+ | Simone | 5 |

Insgesamt 34 Videos. Welle 2: Balance im Wandel, Knochen-stark, Bewegte Pause, Marma-Yoga, Meditation lernen, Yoga für einen bewussten und kraftvollen Beckenboden. Umfang von Balance im Wandel noch nicht abschließend festgelegt.

Quelle im Projekt: `LAUNCH-INHALTE.json`; konzeptionelle Details in `PLATTFORM-KONZEPT.md`. Einzeleinheitentitel teilweise aus Schwerpunkten abgeleitet, Laufzeiten außer Morgenroutine teilweise Demo-Werte. Redaktionell bestätigen lassen.

Neue Inhalte sollen monatlich erscheinen und in der Mitgliedschaft enthalten sein. Spätere Filter nach Praxisart UND Anliegen (z.B. Schlaf, Rücken, Erschöpfung, Osteoporose, Entzündung). Krankheitsbezogene Zuordnungen benötigen fachliche Freigabe; keine Heilversprechen ableiten.

## 7. Mitgliedschaft und ausdrücklich offene Entscheidungen

- Monat: 14,90 Euro.
- 6 Monate: 71,40 Euro insgesamt, rechnerisch 11,90 Euro/Monat.
- 12 Monate: 99 Euro insgesamt, rechnerisch 8,25 Euro/Monat. Jahrespreis und 12-Monatspreis sind derselbe Tarif.
- Checkout, Zahlungen, Kündigung und Freischaltung noch nicht implementiert.
- Digistore24 erst nach Entscheidung der Eigentümer anbinden. Stripe war eine diskutierte Alternative.
- E-Mail/Passwort und Passwort-zurücksetzen sind gewünscht.
- Konten- und Mailanbieter ausdrücklich zurückgestellt: zuerst vorhandene Unternehmenslösung klären. Supabase/Resend wurden nur vorgeschlagen, nicht beschlossen oder eingerichtet.
- Website und Apps sollen später dieselbe serverseitig geprüfte Mitgliedschaft und denselben Fortschritt verwenden.
- Geschütztes Streaming, Videoverwaltung, Rollen, Uploads, Untertitel und Veröffentlichungsplanung fehlen.
- Probephase und Verlängerungsbedingungen nicht verbindlich freigegeben. Keine Trial-Zusage ergänzen.
- Store-Kaufmodell noch nicht freigegeben; aktuelle Apple-/Google-Regeln vor Umsetzung neu prüfen. Keine garantierte Store-Zulassung behaupten.

## 8. Konzept und Redaktion: Lesereihenfolge

1. Diese Übergabe: aktueller technischer Gesamtstand.
2. `OFFENE-PUNKTE.md`: ausdrücklich vertagte Entscheidungen.
3. `PLATTFORM-KONZEPT.md`: Architektur, Mitgliedschaften, Videoverwaltung, Filter. Dokument vom 17.09.; ältere Aussagen „kein Java/Xcode, keine APK“ sind überholt. E-Mail-Link als Option ist durch den späteren Wunsch E-Mail/Passwort konkretisiert. Anbieterpreise und Store-Regeln bei Bedarf erneut prüfen.
4. `mobile/README.md`: Build-Anleitung und jüngere Ergänzung Geräte-Erinnerungen vom 21.09. Diese konkretisiert ältere Aussagen zu fehlenden Notifications.
5. `LAUNCH-INHALTE.json`: Kurskatalog.
6. `redaktion/vorlagen/01-ALLGEMEINES-UND-ADMINISTRATION.md`: ausgefüllte administrative Angaben.
7. `redaktion/vorlagen/02-TRAINERIN-MODERATION.md`, `03-SERIE.md`, `04-VIDEO.md`: Vorlagen; weitere Antworten folgen schrittweise.
8. `redaktion/WEBSITE-TEXTE-ENTWURF.md` und `redaktion/WEBSITE-FREIGABE.md`: Textentwürfe und offene Freigaben.

Ursprungsquellen außerhalb des Repos:
- `/Users/micha/Claude/yoga-app/kalana-projektakte.md`
- `/Users/micha/Downloads/04_Serien-Uebersicht_Kongress-Matrix.md.pdf`
- Google-Doc-Referenz: https://docs.google.com/document/d/1pfuL_PyLXDxkvP2HRJfqG6xFM0nNuVhFyggjvCijwaI/edit

Diese externen Dokumente sind nicht durch einen GitHub-Push automatisch zugänglich. Die PDF ersetzte den zunächst fehlenden Drive-Zugang. Neuere direkte Auftraggeberentscheidungen haben Vorrang vor alten Quellständen.

## 9. Animationen und Videoschnitt

`video-templates/` enthält Renderer und Konfiguration; fertige Medien unter `dist/media/`: Intro 5 s, Outro 6 s, Bauchbinde 8 s mit transparentem ProRes-4444-MOV, Sicherheitstafel 22 s, kombiniertes Intro/Sicherheit 27 s. 1920×1080, 25 fps, ohne Ton. Blume enthalten. Sicherheitstext ist fachlich/rechtlich zu prüfen.

Videoschnitt pausiert wegen großer Quelldateien. Kein fertiger Testschnitt. Originale keinesfalls verändern. Nur markierte Stellen entfernen; keine zusätzlichen Kürzungen. Unklare Zeitcodes anhand des Videos prüfen, nicht raten.
- Drive-Ordner: https://drive.google.com/drive/folders/1XFUg2Px7cAMA31eUjEIdHCJDRktEdKLv
- Schnitttabelle: https://docs.google.com/spreadsheets/d/1mUukebXUFoq2lbpDGrUy7LQCwUnf-rmTMwz1PWzfX60/edit
- Lokaler Plan: `video-produktion/01-sanft-wach-werden/SCHNITTPLAN.md`.

## 10. LAMP und mögliche Umstellung

Vorbereiteter Export: `exports/Andavita-LAMP-Uebergabe-2026-09-22.zip`, Anleitung `exports/ANLEITUNG-LAMP.md`. Enthält public/ einschließlich Apache-.htaccess für /app und /studio. Keine Datenbank und kein PHP nötig für die aktuelle statische Vorschau. Upload auf den Unternehmensserver nicht bestätigt.

Astro oder WordPress wurden besprochen, aber nicht beauftragt oder implementiert. Design kann übernommen werden; eine Migration erfordert strukturellen Umbau. Vorher klären, wer Inhalte pflegt und welches Backend für alle Clients gilt. GitHub ist Quellcodeverwaltung und bewirkt noch keinen Hosting-Umzug.

## 11. Entwicklung und Übergabe

Webvorschau: im Projekt `python3 -m http.server 8787 --bind 127.0.0.1 --directory dist`; lokal /app.html#home und /studio.html nutzen (Python aktiviert keine Apache-Rewrites).

Tests:
- Projekt: `node tests/member-rhythm.cjs`
- mobile/: `TZ=Europe/Berlin node tests/reminder-plan.mjs`

Mobile: Node >=22, in mobile/ `npm ci`, `npm run sync`, danach `npm run android:build` oder `npm run ios:build`. Native Skripte verwenden lokale Mac-Toolchain-Pfade; auf anderen Rechnern anpassen. Webänderungen erreichen gebaute native Apps erst durch erneute Synchronisierung und Build.

Vor GitHub-Push: endgültiges Zielkonto bestätigen, unversionierte Dokumente bewusst auswählen, Geheimnisse und personenbezogene interne Unterlagen prüfen. Build-Verzeichnisse, node_modules, lokale Android-Pfade, APK/Simulator-Builds und große Rohvideos nicht blind committen. Exporte/Medien nach Größe und Bedarf separat ausliefern. Ein privates Repository schützt keine versehentlich veröffentlichten Zugangsdaten.

Sinnvolle nächste Schritte: GitHub-Ziel und Verbindung abschließen; Quellcode und freigegebene Projektunterlagen versionieren; Hostingablauf mit Administrator festlegen; Unternehmensentscheidung zu Konten/E-Mail abwarten; danach Backend, Streaming und Zahlung gemeinsam planen. Keine neuen kostenpflichtigen Dienste oder Store-Veröffentlichungen ohne Auftrag.
