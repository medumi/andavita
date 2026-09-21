# Andavita für iOS und Android

Lokaler Entwicklungsstand: native Capacitor-8-Projekte für beide Plattformen angelegt und mit dem bestehenden Mitgliederbereich bestückt. Android-Debug-APK erfolgreich gebaut und mit Debug-Signatur geprüft. Keine Store-Veröffentlichung und noch kein Gerätetest.

## Bereits enthalten

- Gemeinsame Oberfläche aus `../dist/app.html`, `app.js`, `style.css` und Kursbildern; keine Abhängigkeit von der privaten Website beim App-Start.
- Welle 1 verfügbar im Demo-Katalog, Welle 2 als kommend; Favoriten, Verlauf und Profil lokal auf dem Gerät.
- Andavita-Blume als App-Icon und Startbild.
- Android-Zurücktaste schließt zuerst Dialoge, führt dann zur Startseite und minimiert dort die App.
- Beim Verlassen der App wird der Demo-Player geschlossen, sein Fortschritt gespeichert und sein Timer beendet.
- Kein Checkout im mobilen Paket. Die endgültige Mitgliedschafts- und Store-Strategie ist noch offen.

## Entwicklung

Node 22 oder neuer. Im Verzeichnis `mobile`: `npm ci`, danach `npm run sync`.

- iOS: `npm run ios`, dann das Projekt in Xcode mit eigenem Signing-Team bauen.
- Android: `npm run android`, danach Emulator oder Gerät in Android Studio wählen.
- Nach Änderungen am gemeinsamen Mitgliederbereich erneut `npm run sync` ausführen.

Die Plattformprojekte sind erzeugt. `npm run build` und die initiale Synchronisierung für iOS und Android waren erfolgreich. Android-Kompilierung erfolgreich: 123 Build-Schritte, Debug-Signatur geprüft. Android Studio, Android SDK 36, Build-Tools 35/36 und Java 21 sind installiert. Gerätetests stehen aus. Xcode 26.3 ist installiert, Apples Signatur-/Gatekeeper-Prüfung erfolgreich und die Ersteinrichtung abgeschlossen. iOS-Simulator 26.3.1 ist installiert. Der iOS-Simulator-Build wurde am 17.09.2026 erfolgreich mit BUILD SUCCEEDED abgeschlossen.

Aktuelle Anforderungen: https://capacitorjs.com/docs/getting-started/environment-setup

## Vor dem echten Launch

1. Gemeinsames Backend mit Anmeldung, Passwortwiederherstellung, Mitgliedschaftsprüfung und geräteübergreifendem Fortschritt implementieren. Lokale Demo-Daten sind keine Zugangsprüfung.
2. Echte Kursvideos, geschützte Streaming-URLs und Upload-/Redaktionsverwaltung anbinden; der bestehende Player simuliert aktuell Wiedergabe.
3. Zahlungsanbieter und Web-Abos anbinden; Store-Regeln für Login, externe Käufe und Verlinkung anhand des konkreten Angebots prüfen.
4. Push-Mitteilungen mit Einwilligung sowie Kursankündigungen implementieren. Die aktuellen Einstellungen senden keine Push-Mitteilungen.
5. Datenschutz, Account-Löschung, Support und rechtliche Inhalte ergänzen; medizinische Kurstexte fachlich prüfen.
6. `com.andavita.preview` ist eine vorläufige Kennung. Finale Bundle-/Application-ID vor Store-Anlage mit dem Betreiber festlegen. Apple- und Google-Entwicklerkonten, Signierung, Store-Assets und reale Gerätetests sind erforderlich.

Die App-Projekte sind eine Weiterentwicklungsgrundlage, keine produktionsbereite Mitglieder-App.

## Wiederholbare lokale Builds

`npm run android:build` synchronisiert die Oberfläche und erstellt eine Debug-APK. `npm run ios:build` erstellt einen unsignierten Simulator-Build. Die Skripte verwenden Homebrews Java 21 und Xcode direkt, ohne die globale Shell-Konfiguration oder den systemweiten Xcode-Pfad zu verändern. Installationsstand und Ergebnis des ersten echten Builds werden nach der Einrichtung aktualisiert.

Android-Testdatei: `build/Andavita-Android-Test.apk`. App-ID `com.andavita.preview`, Version 1.0. Die APK enthält den interaktiven Prototyp und keine echten Kursvideos oder Anmeldung.

## iOS-Testbuild abgeschlossen · 17.09.2026

Xcode 26.3 und iOS-Simulator 26.3.1 sind eingerichtet. `npm run ios:build` war erfolgreich. Das App-Bundle liegt unter `build/ios/Build/Products/Debug-iphonesimulator/App.app`; Bundle-ID und eingebettete Oberfläche wurden geprüft. Dieser Build ist für den Simulator, nicht für die Installation auf einem echten iPhone. Kein Simulator-Laufzeittest und keine Store-Veröffentlichung durchgeführt. Für echte iPhones bzw. TestFlight fehlen noch passende Signierung und Betreiberkonto. Die automatisierte Einrichtungsnachverfolgung wird nach diesem erfolgreichen Build pausiert.

## Geräte-Erinnerungen (21.09.2026)

Offizielles `@capacitor/local-notifications` 8.3.1 eingebunden. Lokale Betriebssystem-Benachrichtigungen funktionieren unabhängig von laufendem JavaScript; kein Push-Server nötig. Profil speichert Tage/Uhrzeit, fordert Berechtigung nur beim Speichern bzw. Test an und zeigt tatsächlichen Planungsstatus. Ablehnung wird nicht als erfolgreiche Aktivierung dargestellt. Ausschalten entfernt nur Andavita-Erinnerungen. Antippen führt zur Startseite bzw. zur unvollständigen Einheit.

Es werden maximal 56 einzelne Tagesereignisse vorausgeplant (unter dem iOS-Limit). Beim Öffnen, Ändern des Plans und nach gezählter lokaler Übung werden Termine neu berechnet; heute entfällt nach Aktivität. Ortszeit/Sommerzeit werden je Termin berücksichtigt, Zeitzonenänderungen beim nächsten Öffnen. Android nutzt ungenaue Alarme ohne Sonderrecht für exakte Alarme; Energiesparmodi können die Zustellung verschieben. Nach acht Wochen ohne Öffnen gibt es keine weiteren vorausgeplanten Termine.

Prüfung: `TZ=Europe/Berlin node tests/reminder-plan.mjs` erfolgreich; Android-Debug-Build und APK-Signaturprüfung erfolgreich, iOS-Simulator-Build erfolgreich. Die tatsächliche Zustellung im Hintergrund auf einem iPhone/Android-Gerät ist noch zu prüfen. iOS ist weiterhin ein unsignierter Simulator-Build, keine installierbare iPhone-/TestFlight-Version.

Android: `build/Andavita-Android-Erinnerungen-Test.apk`. Testablauf: Profil öffnen, Tage/Uhrzeit wählen, Erinnerungen einschalten, speichern und Systemfreigabe erteilen. „Handy-Erinnerung testen“ drücken und App schließen; Test wird für 15 Sekunden später geplant (Android kann verzögern). Danach geplante Erinnerung, Tages-Unterdrückung, Ausschalten und App-Neustart prüfen.

Benutzerkonten, Passwort-E-Mails, geräteübergreifende Synchronisierung und Browser-Push sind noch nicht angebunden. Geplanter Login: E-Mail + Passwort mit Passwort-zurücksetzen. Empfehlung zur Entscheidung: Supabase + eigener SMTP-Dienst wie Resend; es wurden keine Anbieter-Konten erstellt und keine kostenpflichtigen Pläne abgeschlossen.
