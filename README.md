# Andavita – interaktiver Entwurf

Responsive browserbasierte Designvorschau für Bewegung und Ruhe in der Lebensmitte, auf Grundlage der bereitgestellten Projektakte und mit mymenoa.com als gestalterischer Referenz. Der vom Auftraggeber korrigierte Markenname ist Andavita.

## Umfang

Startansicht, stimmungsbezogene Empfehlungen, Mediathek mit Suche und kombinierbaren Filtern, Programme, Merkliste, Wiedergabeverlauf, Player-Demo mit Start/Pause/Kapiteln/Fortschritt/Vollbild, Benachrichtigungsansicht sowie lokal gespeicherte Profileinstellungen.

Neue Inhalte: Startseite, Mediathek und Benachrichtigungen erklären ausdrücklich, dass regelmäßig neue Kurse und Programme erscheinen. Kein unbestätigter Veröffentlichungstakt wird genannt.

## Inhaltlicher Stand

Nina und Simone sowie sieben Themenwelten stammen aus der Projektakte. Die konkreten Kurstitel, Dauern, Programmzusammenstellungen und Wochenaktivitäten sind Beispielinhalte und keine bestätigte Launch-Kursliste. Diese Liste wurde beim Auftraggeber angefragt und muss für den Launch ersetzt werden. Reale Kursaufnahmen, Benutzerkonten, Bezahlung, Synchronisierung und Push-Zustellung sind nicht Teil der Designvorschau. Der Player zeigt die Bedienung mit Kursbild und Demo-Zeitablauf; dies ist im Player gekennzeichnet. Einstellungen, Merkliste und Fortschritt werden nur im jeweiligen Browser gespeichert.

## Gestalterische Recherche

- https://mymenoa.com/ — warme Flächen, prägnante Typografie, persönliche Tonalität.
- https://www.yogaeasy.de/artikel/die-neue-yogaeasy-app — Favoriten, zuletzt gesehene Videos, Filter und regelmäßige Ergänzungen.
- https://betterme.world/about — persönlich abgestimmte Bewegung und Wohlbefinden.

## Bildmotive

Drei KI-generierte redaktionelle Studiomotive, erstellt mit dem eingebauten ImageGen-Werkzeug, keine Fotos von Nina oder Simone. Webdateien: `dist/assets/movement.jpg`, `dist/assets/strength.jpg`, `dist/assets/rest.jpg`. Originaldateien liegen lokal unter `assets/`.

Verwendete Briefings: 1. Frau um 50 in sanfter sitzender Seitdehnung, grüne Sportkleidung, warmes mediterranes Studio mit Olivenbaum. 2. Mann um 55 bei einer Balanceübung neben einem Holzstuhl, meergrünes Shirt, sonniges Studio. 3. Frau um 50 in ruhiger Meditation mit cremefarbenem Oberteil, warmes Studio. Alle Motive: redaktionelle Fotografie, natürliche Hautstruktur, ohne Schrift oder Logos.

## Lokal ansehen

`python3 -m http.server 8787 --bind 127.0.0.1 --directory dist`

Kein Build-Schritt erforderlich. Statische Website in `dist/`; Navigation über Hash-Routen. Schriften kommen von Google Fonts mit System-Fallback.
