# 🐾 Retro Cat Date - "Vrei să ieși cu mine?" 🐱💖

O aplicație web romantică și interactivă cu tematică retro 8-bit, animată și plină de **pisicuțe drăgălașe**!

Inspirată din clipul viral, recreată cu elemente vizuale pixel-art personalizate, efecte sonore retro sintetizate (zero dependențe audio externe) și generare de bilet oficial de întâlnire (PNG + WhatsApp).

---

## ✨ Funcționalități & Pisici Incluse

1. **Multe pisicuțe animate în interfață**:
   - 🐱 **Pisicuța Mochi centrală**: își schimbă starea în timp real (fericită, rugătoare cu ochi mari, șocată, plângătoare cu lacrimi 8-bit).
   - 🐱 **Pisici spion de colț (Peeking Cats)**: o pisică albă și o pisică neagră cu ochi galbeni care privesc peste rama ferestrei.
   - 🐾 **Pisica călătoare (Walking Cat)**: se plimbă pe dealurile pixelate de jos, dă din coadă, iar dacă dai click pe ea scoate un mieunat drăguț!
   - 💤 **Pisica portocalie tigrată**: doarme liniștită deasupra calendarului.
   - 😻 **Cuplul de pisicuțe îmbrățișate** (stil Milk & Mocha / Bubu & Dudu) cu inimioare plutitoare la confirmare și pe bilet.
   - 💖 **Widget interactiv „Mângâie-mă!”**: contorizează de câte ori o mângâi, toarce cu vibrație audio și generează inimioare.
   - 🐾 **Urme de lăbuțe la mouse**: lasă steluțe și lăbuțe discrete pe ecran când miști cursorul.

2. **Fluxul interactiv complet**:
   - **Pasul 1: Întrebarea** (*„Vrei să ieși cu mine?”*).
     - Dacă încerci să apeși pe **„Nu”**: butonul fuge/se micșorează, butonul **„DA”** crește uriaș cu lumini pulsatorii, pisica începe să plângă și apar replici amuzante (*„Pisicuța va plânge...”*, *„Uită-te în ochii mei mari!”*, etc.).
   - **Pasul 2: YAAAY!** Confetti exploziv cu lăbuțe și pisici + sunet retro de fanfară.
   - **Pasul 3: Calendarul Pixel-Art** pentru alegerea datei dorite.
   - **Pasul 4: Activitățile de Date** (Pizza & pisici, Movie night, Cat Café, Picnic, Sushi, Surpriză + dorință personalizată).
   - **Pasul 5: Biletul Oficial „Cat Pass”**:
     - Ștampilă „CONFIRMAT CU LĂBUȚĂ 🐾”.
     - Buton **„Trimite pe WhatsApp 📲”** (deschide WhatsApp cu mesajul gata scris!).
     - Buton **„Descarcă Biletul (PNG) 📸”** (salvează automat biletul de întâlnire de înaltă rezoluție în calculator).

3. **Extra opțiuni**:
   - 🔊 Sunete retro generate pur prin Web Audio API (fără fișiere mp3 care s-ar putea pierde).
   - 🎵 Melodie chiptune de fundal (toggle pornire/oprire).
   - 🇷🇴 / 🇬🇧 Suport bilingv cu un singur click (Română / Engleză).

---

## 🚀 Cum o deschizi

Poți deschide direct fișierul `index.html` în orice browser (Safari, Chrome, Firefox, Arc):
- Fie fă dublu click pe `index.html`.
- Fie din terminal:
  ```bash
  open /Users/teodorfotciuc/dev/cat-date-app/index.html
  ```

---

## 🌐 Cum o pui online (pentru a-i trimite linkul iubitei/prietenei)

1. **Vercel / Netlify / GitHub Pages**:
   - Trage direct folderul `cat-date-app` în [app.netlify.com/drop](https://app.netlify.com/drop) sau [vercel.com](https://vercel.com) și vei primi un link instant (ex: `date-pentru-tine.vercel.app`).
2. Nu e nevoie de niciun build step (`npm run build`), funcționează direct!
