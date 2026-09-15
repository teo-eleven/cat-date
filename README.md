# 🐾 Cat Date Web App - "Vrei să ieși cu mine?" 🐱💖

Aplicație web interactivă și romantică, optimizată pentru telefon și desktop, cu pisicuțe drăgălașe, calendar, activități și trimitere automată a răspunsului pe WhatsApp.

---

## 🌐 Linkul Public Live
👉 **https://teo-eleven.github.io/cat-date/**

---

## 📁 Unde este salvat proiectul pe calculatorul tău:

- **Folderul principal (Git & GitHub Pages)**:
  `/Users/teodorfotciuc/dev/cat-date-site`
- **Repo GitHub**:
  `https://github.com/teo-eleven/cat-date`

---

## 🛠️ Cum funcționează fișierele:

1. **`index.html`**:
   - Structura paginii: întrebarea, calendarul, grila de activități și biletul final.
2. **`style.css`**:
   - Designul pastel aesthetic, culorile, fonturile rotunjite (*Fredoka* & *Nunito*), animațiile pentru telefon și desktop.
3. **`app.js`**:
   - Logica interactivă:
     - Butonul „Nu” fuge la hover/touch și dispare complet după 5 încercări.
     - Butonul „DA” declanșează confetti și fanfare, iar după 1.2s avansează automat la calendar.
     - Calendarul interactiv de alegere a zilei.
     - Selectarea activităților dorite.
     - Formatarea mesajului de WhatsApp trimis iubitului.
4. **`cats.js`**:
   - Grafica SVG pentru pisicuțe (pisicuță fericită, rugătoare, plângătoare, șmecheră cu ochiul închis și cuplul de pisici îmbrățișate).
5. **`sound.js`**:
   - Efectele sonore 8-bit sintetizate (mieunat, tors, fanfară, boing).

---

## 🔄 Cum faci modificări și le trimiți online în viitor:

Dacă vrei să schimbi textele, întrebările, activitățile sau culorile:

1. **Deschizi și editezi fișierele** din `/Users/teodorfotciuc/dev/cat-date-site`.
2. **Pentru a vedea modificările local**:
   Fă dublu click pe `index.html` sau deschide-l în browser.
3. **Pentru a trimite modificările pe linkul live**:
   Rulează în terminal:
   ```bash
   /Users/teodorfotciuc/dev/cat-date-site/actualizeaza.sh "Modificare texte"
   ```
   *În ~30 de secunde, modificările apar automat pe https://teo-eleven.github.io/cat-date/ !*
