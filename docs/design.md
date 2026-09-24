# Design-System

> Stand: 24.09.2026 · Die Farbwerte unten sind aus dem **ausgelieferten Code**
> (`dist/website.css`, `dist/style.css`) gelesen und damit verbindlich. Ältere
> Farbtabellen aus der Kalana-Projektakte sind überholt.

---

## Farben

| Token | Wert | Verwendung |
|---|---|---|
| `--bg` | `#fbfaf7` | Seitengrund, warmes Creme |
| `--white` | `#fff` | Karten, Flächen |
| `--soft` | `#f5eedf` | warme Füllfläche, Abschnitte |
| `--ink` | `#243c37` | Text, grünstichiges Dunkel |
| `--muted` | `#67716c` | Text, zurückgenommen |
| `--teal` | `#275d56` | Meergrün — Akzent, Navigation, CTA |
| `--deep` | `#214e49` | Meergrün dunkel — Hover, Tiefe |
| `--yellow` | `#f7c873` | goldener Akzent — Buttons, Hervorhebung |
| `--line` | `#e5e7df` | Linien, Rahmen |

Die Gestaltungsabsicht: **warme cremefarbene Flächen, Meergrün, goldene Akzente,
ruhige Typografie.** Keine Superlative, kein Leistungsdruck.

## Typografie

Schriften kommen von **Google Fonts mit System-Fallback**. Die konkreten Stapel stehen
in `dist/website.css` und `dist/style.css` — dort nachsehen, nicht raten.

Grundsatz aus dem Konzept: **großzügige Grundschriftgröße**, weil die Zielgruppe ab der
Lebensmitte liest. Schaltflächen großzügig dimensionieren; Treffsicherheit geht vor
Eleganz.

---

## Die Blume

Die Blume ist das Markenelement. Sie erscheint auf der Website, im Mitgliederbereich und
in den Videovorlagen — **Intro, Outro und Bauchbinden**.

**Kanonische Datei: [`dist/assets/flower.svg`](../dist/assets/flower.svg).**
Diese Datei ist die Quelle. Wer die Blume woanders braucht, nimmt sie von dort und baut
sie nicht nach.

### Drei Konstruktionsregeln, jede davon teuer gelernt

Diese Regeln stammen aus dem Entwurf der Blüte und gelten weiterhin, falls jemand die
Form anfasst oder in einem neuen Medium einsetzt:

1. **Blätter müssen asymmetrisch sein und überlappen.** Fünf gleiche, symmetrische
   Blätter ergeben ein Gänseblümchen. Jedes Blatt hat eine lange schwingende und eine
   kurze Kante, die sich unterschiebt; es spannt rund 100° bei 72°-Teilung — daher
   die Überlappung.

2. **Der Farbverlauf läuft pro Blatt entlang dessen Achse, nicht radial um die Mitte.**
   Ein `linearGradient` mit `gradientUnits="userSpaceOnUse"` rotiert mit dem Blatt mit
   und erzeugt die Flamme nach außen. *Falle:* Mit `objectBoundingBox` bekäme jedes
   Blatt seinen eigenen Verlauf — fünf einzeln glühende Blätter statt eines Schlunds.

3. **Konturbreite gegen die Anzeigegröße rechnen, nicht gegen die viewBox.**
   `stroke-width: 1.1` im 100er-System sind bei 38 px Anzeige **0,4 Pixel** — unsichtbar,
   die Blätter verschmelzen zu einem Fleck. Minimum ist **2.2**.

### Einsatzregeln

- Geprüft bei 150, 120, 56, 38 und 24 Pixeln sowie auf Weiß, auf Meergrün und auf Dunkel.
- Die Farben der Blüte sind **fest**, nicht theme-abhängig — eine Marke soll stabil aussehen.
- Helle Blätter brauchen auf hellem Grund zwingend die Kontur, sonst verschwindet die Blüte.
- **Als Dekor-Wasserzeichen** dieselbe Form mit `fill="currentColor"` und zusätzlicher
  Konturgruppe verwenden — eine weiße Blüte wäre auf weißer Karte unsichtbar.
- Dekor gehört **in** das Element hinein (`overflow: hidden` auf dem Container), nicht
  darüber hinaus; sonst wirkt es wie ein Aufkleber und wird vom Bildrand abgeschnitten.

---

## Bildmotive

**Die Kursbilder sind KI-Motive, keine Fotos von Nina oder Simone.**
Drei redaktionelle Studiomotive: `dist/assets/movement.jpg`, `strength.jpg`, `rest.jpg`;
Originale lokal unter `assets/`.

Verwendete Briefings: Frau um 50 in sanfter sitzender Seitdehnung, grüne Sportkleidung,
warmes mediterranes Studio mit Olivenbaum · Mann um 55 bei einer Balanceübung neben einem
Holzstuhl, meergrünes Shirt, sonniges Studio · Frau um 50 in ruhiger Meditation,
cremefarbenes Oberteil. Alle Motive: redaktionelle Fotografie, natürliche Hautstruktur,
ohne Schrift oder Logos.

**Sobald echte Trainerinnenportraits vorliegen, ersetzen sie diese Motive.**

---

## Videovorlagen

Fertige Medien unter `dist/media/`, Renderer und Konfiguration unter `video-templates/`.

| Element | Länge | Besonderheit |
|---|---|---|
| Intro | 5 s | |
| Outro | 6 s | |
| Bauchbinde | 8 s | transparentes ProRes-4444-MOV |
| Sicherheitstafel | 22 s | **Text ist fachlich und rechtlich zu prüfen** |
| Intro + Sicherheit kombiniert | 27 s | |

Alle 1920 × 1080, 25 fps, ohne Ton, Blume enthalten.

---

## Sprache und Tonalität

- **Kein Gendern** (Hausregel).
- **Keine Altersangaben als Verkaufsargument** — „ab der Lebensmitte" statt „50+".
- **Nie nur Frauen ansprechen.** Themen wie Wechseljahre dürfen vorkommen, aber nicht
  die Ansprache bestimmen. Die Zielgruppe ist ausdrücklich gemischt.
- Kategorie ist **Bewegung**, nicht Yoga allein.
- Ruhig, ohne Leistungsdruck, ohne Superlative.
- **Keine Heilversprechen.** Krankheitsbezogene Zuordnungen brauchen fachliche Freigabe.
