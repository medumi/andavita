# Andavita

**Yoga-, Bewegungs- und Entspannungsplattform für Menschen ab der Lebensmitte.**
Website, Browser-Mitgliederbereich, iOS und Android nutzen dieselben Kurse und
Mitgliedschaften.

> **Stand: 24.09.2026** · Designvorschau öffentlich gehostet · noch kein Konto,
> keine Bezahlung, keine echten Kursvideos angebunden

---

## Woran wir gerade arbeiten

**[Workshop-Punkte (Google Doc)](https://docs.google.com/document/d/1U2PW0QLTHiC0lLsNLLH4uwU8K3e33SZFKqSk31oUjwY/edit?tab=t.0)**
— die laufende Arbeitsliste für den Workshop. Wer mitarbeitet, fängt hier an.

## Links

| Was | Wohin |
|---|---|
| **Website** | https://andavita-bewegung-ruhe.medumio-0664.chatgpt.site/ |
| **Mitgliederbereich (Browser)** | https://andavita-bewegung-ruhe.medumio-0664.chatgpt.site/app#home |
| **Animationsstudio und Downloads** | https://andavita-bewegung-ruhe.medumio-0664.chatgpt.site/studio |

Zuletzt bestätigter Deployment-Stand: **Version 6, 21.09.2026**, Commit `617ee18`.

`/app` ist eine **Browseransicht, kein iOS-Installationslink**. Es gibt keinen
App-Store-, Play-Store- oder TestFlight-Link.

---

## Wegweiser

Wer neu dazukommt, liest in dieser Reihenfolge:

| Datei | Inhalt |
|---|---|
| **[docs/skelett/](docs/skelett/)** | **Das Skelett: was wir machen und wie** — Einstieg fuer neue Beteiligte |
| **[docs/kommunikation/](docs/kommunikation/)** | Kommunikationsstrategie: Zielgruppen-Ringe, USP, Kanaele, Skript-Geruest |
| **[docs/produkte/](docs/produkte/)** | Produkt- und Umsetzungsideen: Sortiment, Regulatorik, Rollout, Kooperationen |
| **[CLAUDE-UEBERGABE.md](CLAUDE-UEBERGABE.md)** | Vollständiger technischer Gesamtstand — die belastbarste Quelle |
| **[OFFENE-PUNKTE.md](OFFENE-PUNKTE.md)** | Ausdrücklich vertagte Entscheidungen |
| **[PLATTFORM-KONZEPT.md](PLATTFORM-KONZEPT.md)** | Architektur, Mitgliedschaften, Videoverwaltung, Filter (17.09.) |
| **[docs/marke.md](docs/marke.md)** | Markenstand Andavita, Klassenstrategie, Vorgeschichte |
| **[docs/design.md](docs/design.md)** | Farben, Typografie, Blume |
| **[LAUNCH-INHALTE.json](LAUNCH-INHALTE.json)** | Kurskatalog |
| **[mobile/README.md](mobile/README.md)** | Build-Anleitung und Geräte-Erinnerungen |
| **[redaktion/](redaktion/)** | Textvorlagen, Website-Texte, offene Freigaben |

---

## Was tatsächlich funktioniert

- Responsive Website mit Angebot, Kursreihen, Trainerinnenbereich, Preisen und FAQ
- Demo-Katalog mit Suche, Filtern, Favoriten, Verlauf und Profil
- Startseite priorisiert die zuletzt gestartete unvollständige Einheit
- Wiedergabeposition wird beim Pausieren und Verlassen gespeichert und wieder aufgenommen
- Wochenplan mit Wochentagen, Ortszeit und Erinnerungswunsch
- Browser-Erinnerung bei geöffnetem Mitgliederbereich; nach gezählter Aktivität
  entfällt sie für heute
- Native Geräte-Erinnerungen für Android und iOS gebaut (Capacitor 8)

## Was ausdrücklich noch nicht funktioniert

- **Keine echten Kursaufnahmen.** Der Player zeigt ein Kursbild mit simuliertem Zeitablauf.
- **Kein Login, keine Mitgliedschaftsprüfung.** Profilwerte liegen nur lokal im Browser.
- **Kein Checkout, keine Zahlung, keine Kündigung.**
- **Kein Store-Release.** Android nur Debug-APK, iOS nur Simulator-Build.
- Kein serverseitiger Push, kein Browser-Push.
- Geschütztes Streaming, Videoverwaltung, Rollen, Uploads und Untertitel fehlen.

---

## Inhalte zum Launch

**Welle 1 gilt als fertig** (Auftraggeberentscheidung) — 34 Videos in fünf Serien.
Das heißt **nicht**, dass die Videodateien bereits eingebunden sind.

| Serie | Trainerin | Videos |
|---|---|---:|
| Sanft starten | Nina | 10 |
| Nervensystem-Reset | Simone | 7 |
| Besser schlafen | Simone | 5 |
| 15-Minuten-Morgenroutine | Nina | 7 |
| Starker Rücken 50+ | Simone | 5 |

**Welle 2** wird als „Demnächst" dargestellt: Balance im Wandel, Knochen-stark,
Bewegte Pause, Marma-Yoga, Meditation lernen, Yoga für einen bewussten und
kraftvollen Beckenboden.

Einzeltitel sind teilweise aus Schwerpunkten abgeleitet, Laufzeiten außer der
Morgenroutine teilweise Demo-Werte. **Redaktionell bestätigen lassen.**

---

## Mitgliedschaft

| Laufzeit | Preis | rechnerisch |
|---|---|---|
| 1 Monat | 14,90 € | 14,90 €/Monat |
| 6 Monate | 71,40 € | 11,90 €/Monat |
| 12 Monate | 99 € | 8,25 €/Monat |

Jahrespreis und 12-Monatspreis sind derselbe Tarif. Checkout, Zahlungen, Kündigung
und Freischaltung sind **nicht implementiert**. Digistore24 erst nach Entscheidung
der Eigentümer anbinden; Stripe war eine diskutierte Alternative. Keine Probephase
zusagen — nicht freigegeben.

---

## Technik

Eigenes HTML, CSS und JavaScript. Kein WordPress, kein Astro, kein Root-npm-Build.

| Pfad | Inhalt |
|---|---|
| `dist/` | veröffentlichter Webinhalt und gepflegte Grundlage der Oberfläche |
| `dist/index.html`, `website.css`, `website.js` | Marketingseite |
| `dist/app.html`, `app.js`, `style.css` | Mitgliederbereich und Demo-Player |
| `dist/studio.html`, `dist/media/` | Animationen und Downloads |
| `dist/assets/` | Bilder und Blume |
| `mobile/` | Capacitor 8, native Android- und iOS-Projekte |
| `video-templates/` | Renderer und Konfiguration für Intro, Outro, Bauchbinde |
| `tests/member-rhythm.cjs` | Tests für Wochenplan und Fortsetzen |
| `.openai/hosting.json` | bestehende Sites-Zuordnung — **nicht versehentlich ersetzen** |

**Lokal ansehen:**

```bash
python3 -m http.server 8787 --bind 127.0.0.1 --directory dist
```

Lokal `/app.html#home` und `/studio.html` nutzen — Python aktiviert keine
Apache-Rewrites.

**Tests:**

```bash
node tests/member-rhythm.cjs
```

**Mobile** (Node >= 22, im Ordner `mobile/`): `npm ci`, `npm run sync`, danach
`npm run android:build` oder `npm run ios:build`. Die nativen Skripte verwenden
lokale Mac-Toolchain-Pfade und müssen auf anderen Rechnern angepasst werden.
Webänderungen erreichen gebaute Apps erst nach erneuter Synchronisierung.

---

## Gestaltung

Warme cremefarbene Flächen, Meergrün, goldene Akzente, ruhige Typografie, Blume als
Markenelement. Die Blume erscheint auch in Intro, Outro und Bauchbinden.
Farbwerte und Regeln: **[docs/design.md](docs/design.md)**.

**Kursbilder sind KI-Motive, keine echten Trainerinnenportraits.** Drei redaktionelle
Studiomotive unter `dist/assets/` (`movement.jpg`, `strength.jpg`, `rest.jpg`),
Originale lokal unter `assets/`.

Gestalterische Recherche: [mymenoa.com](https://mymenoa.com/) (warme Flächen,
persönliche Tonalität) · [YogaEasy-App](https://www.yogaeasy.de/artikel/die-neue-yogaeasy-app)
(Favoriten, zuletzt gesehen, Filter) · [BetterMe](https://betterme.world/about).

---

## Mitarbeit

Dieses Repo ist **privat**. Zugriff bekommt, wer eingeladen wird. Daraus folgt:

- Interne Zahlen, Kongresstermine und Namen dürfen hier stehen.
- **Zugangsdaten und Schlüssel trotzdem nie** — die gehören in keinen Git-Verlauf.
- **Nicht blind committen:** Build-Verzeichnisse, `node_modules`, lokale Android-Pfade,
  APK- und Simulator-Builds, große Rohvideos. Exporte und Medien bei Bedarf separat
  ausliefern.
- **`main` ist geschützt.** Jede Änderung geht über Branch → Pull Request → Squash-Merge.

Externe Quellen, die ein Push **nicht** mitbringt: der Drive-Ordner mit den
Rohvideos, die Schnitttabelle und die Kongress-Matrix. Neuere Entscheidungen des
Auftraggebers haben Vorrang vor älteren Dokumentständen.
