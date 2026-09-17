# Andavita Videovorlagen

Intro 5 s, Outro 6 s, Bauchbinde 8 s. 1920×1080, 25 fps. Ohne Audiospur.

Die transparent.mov-Datei ist ProRes 4444 mit Alphakanal. Sie wird in der Schnittsoftware über die Kursaufnahme gelegt. Das MP4 mit grünem Hintergrund dient nur der Vorschau.

Namen und Funktion in templates.json austauschen. Renderer: python3 render.py --config templates.json --output exports

Voraussetzungen: Python 3, Pillow und ffmpeg mit libx264 und prores_ks. Die Fontpfade verwenden die auf macOS mitgelieferten Arial- und Georgia-Schriften. Auf anderen Systemen die Fontpfade in render.py auf vorhandene, lizenzierte Schriften umstellen.

Die Web-Vorschau kann eine passende Konfigurationsdatei speichern. Ihre Bearbeitung verändert nicht rückwirkend die heruntergeladenen Videos; für neue Videos den Renderer erneut ausführen. Rolle von Nina ist eine Beispielbeschreibung, keine zertifizierte Qualifikation.
