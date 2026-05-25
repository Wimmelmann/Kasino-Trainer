# Kasino Hjælper v10 — Aalborg Design

Nyheder:
- Aalborg/AaB-inspireret standardtema
  - mørk navy
  - dyb mørkere rød accent
  - off-white/cream kort og paneler
- Designpanel inde i appen
  - vælg tema: Aalborg, Classic Casino, Nordic Dark, Retro Print
  - vælg font: Zector, Trebuchet, Verdana, Georgia, Courier
  - valg gemmes på telefonen
- Drag-and-drop er med
  - træk et kort fra hånden op på bordet for at lægge det
- Nyt app-ikon i Aalborg-stil
- v9.2-regler er bevaret:
  - direkte stik
  - bygninger
  - dobbeltbygninger
  - Swipper
  - 5♠ swipper hele bordet
  - hurtigere computer-AI

## Zector-font
Jeg har IKKE inkluderet fontfilen, fordi fontfiler ikke bør videredistribueres her.

Hvis du vil bruge Zector:
1. Download Zector-fonten selv fra DaFont.
2. Find .ttf-filen.
3. Læg den i denne mappe i GitHub-repoet:
   /fonts/Zector.ttf
4. Commit ændringen.

Appen virker også uden fontfilen — så bruger den fallback-font.

## Upload til GitHub
Upload/erstat disse filer i roden af dit GitHub repo:

- index.html
- manifest.webmanifest
- service-worker.js
- icon-192.png
- icon-512.png
- fonts/PUT_ZECTOR_FONT_HERE.txt

Hvis du tilføjer fonten:
- fonts/Zector.ttf

Hvis telefonen viser gammel version:
- luk appen helt og åbn igen
- eller fjern appen fra hjemmeskærmen og tilføj den igen for at opdatere ikon/cache
