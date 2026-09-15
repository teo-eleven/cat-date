// Cat Date Interactive Application - Clean Aesthetic Controller

class CatDateApp {
  constructor() {
    this.currentStep = 1;
    this.noAttempts = 0;
    this.yesScale = 1.0;

    // Selections
    this.selectedDate = null;
    const now = new Date();
    this.calMonth = now.getMonth();
    this.calYear = now.getFullYear();
    this.selectedActivities = new Set(['pizza', 'movie']);
    this.customWish = '';

    this.monthsRO = [
      'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
      'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
    ];

    this.activitiesData = [
      { id: 'pizza', icon: '🍕', title: 'Pizza & Movie', desc: 'Mâncăm bunătăți și ne uităm la filme' },
      { id: 'cafe', icon: '☕', title: 'Cat Café & Dulciuri', desc: 'Mângâiem pisici și bem cafea' },
      { id: 'picnic', icon: '🧺', title: 'Picnic Romantic', desc: 'Snack-uri, pătură și apus' },
      { id: 'sushi', icon: '🍣', title: 'Sushi Feast', desc: 'Festin delicios cu somon' },
      { id: 'walk', icon: '🍦', title: 'Plimbare & Înghețată', desc: 'Povestim și ne plimbăm' },
      { id: 'surprise', icon: '🎁', title: 'Surpriză totală', desc: 'Lasă totul pe seama mea!' }
    ];

    this.initDOM();
    this.renderCats();
    this.bindEvents();
    this.initAmbientHearts();
    this.initConfetti();
  }

  initDOM() {
    this.el = {
      heroCat: document.getElementById('hero-cat'),
      calendarCat: document.getElementById('calendar-cat'),
      ticketCoupleCats: document.getElementById('ticket-couple-cats'),

      titleStep1: document.getElementById('title-step1'),
      subStep1: document.getElementById('sub-step1'),
      buttonsArea: document.getElementById('buttons-area'),
      btnYes: document.getElementById('btn-yes'),
      btnNo: document.getElementById('btn-no'),
      funnyFeedback: document.getElementById('funny-feedback'),

      // Steps
      step1: document.getElementById('step-1'),
      step2: document.getElementById('step-2'),
      step3: document.getElementById('step-3'),
      step4: document.getElementById('step-4'),

      // Dots
      dots: [
        document.getElementById('dot-1'),
        document.getElementById('dot-2'),
        document.getElementById('dot-3'),
        document.getElementById('dot-4')
      ],

      // Calendar
      calPrev: document.getElementById('cal-prev'),
      calNext: document.getElementById('cal-next'),
      calMonthTitle: document.getElementById('cal-month-title'),
      calGrid: document.getElementById('cal-grid'),
      selectedDateLabel: document.getElementById('selected-date-label'),
      btnToStep3: document.getElementById('btn-to-step3'),

      // Activities
      activitiesGrid: document.getElementById('activities-grid'),
      customWishInput: document.getElementById('custom-wish-input'),
      btnToStep4: document.getElementById('btn-to-step4'),

      // Final Ticket
      finalDate: document.getElementById('final-date'),
      finalActivities: document.getElementById('final-activities'),
      finalWishContainer: document.getElementById('final-wish-container'),
      finalWish: document.getElementById('final-wish'),
      btnSendWhatsApp: document.getElementById('btn-send-whatsapp'),
      btnSaveImage: document.getElementById('btn-save-image')
    };
  }

  renderCats() {
    if (typeof Cats !== 'undefined') {
      this.el.heroCat.innerHTML = Cats.getMainCat('happy');
      this.el.calendarCat.innerHTML = Cats.getMainCat('happy');
      this.el.ticketCoupleCats.innerHTML = Cats.getCoupleCats();
    }
  }

  bindEvents() {
    // Runaway NO Button logic
    this.setupNoButton();

    // YES Button - Immediate Celebration + Automatic Transition to Step 2!
    const handleYes = (e) => {
      if (e) e.preventDefault();
      this.handleYesClick();
    };
    this.el.btnYes.addEventListener('click', handleYes);
    this.el.btnYes.addEventListener('touchend', handleYes);

    // Step 2 (Calendar) to Step 3
    this.el.btnToStep3.addEventListener('click', () => {
      if (!this.selectedDate) {
        SoundEffects.playMeow('sad');
        this.el.selectedDateLabel.textContent = '⚠️ Te rog alege o zi din calendar!';
        this.el.selectedDateLabel.style.color = '#FF3366';
        return;
      }
      SoundEffects.playClick();
      this.goToStep(3);
      this.renderActivities();
    });

    // Calendar Navigation
    this.el.calPrev.addEventListener('click', () => {
      SoundEffects.playClick();
      this.calMonth--;
      if (this.calMonth < 0) {
        this.calMonth = 11;
        this.calYear--;
      }
      this.renderCalendar();
    });

    this.el.calNext.addEventListener('click', () => {
      SoundEffects.playClick();
      this.calMonth++;
      if (this.calMonth > 11) {
        this.calMonth = 0;
        this.calYear++;
      }
      this.renderCalendar();
    });

    // Step 3 to Step 4
    this.el.btnToStep4.addEventListener('click', () => {
      if (this.selectedActivities.size === 0) {
        SoundEffects.playMeow('sad');
        alert('Alege cel puțin o activitate drăguță! 🐾');
        return;
      }
      SoundEffects.playFanfare();
      this.customWish = this.el.customWishInput.value.trim();
      this.triggerConfetti();
      this.goToStep(4);
      this.renderTicket();
    });

    // Final Actions
    this.el.btnSendWhatsApp.addEventListener('click', () => this.sendWhatsApp());
    this.el.btnSaveImage.addEventListener('click', () => this.downloadTicketImage());
  }

  setupNoButton() {
    const feedbackQuotes = [
      'Ești sigură? Uită-te la mutrița mea! 🥺',
      'Te rog frumos! Pisicuța o să plângă... 😿',
      'Nu ai cum să zici nu la așa un date! 💕',
      'Ultima șansă să apeși pe DA! 😼',
      'Ups... a fugit butonul de Nu! N-ai de ales! 😻🐾'
    ];

    const onNoAttempt = (e) => {
      if (e) e.preventDefault();
      this.noAttempts++;

      SoundEffects.playDodge();

      // After 5 attempts, make the NO button disappear completely!
      if (this.noAttempts >= 5) {
        SoundEffects.playMeow('cute');
        this.el.btnNo.classList.add('disappearing');
        setTimeout(() => {
          this.el.btnNo.style.display = 'none';
        }, 380);

        this.el.heroCat.innerHTML = Cats.getMainCat('smug');
        this.el.funnyFeedback.textContent = feedbackQuotes[4];
        this.yesScale = 1.25;
        this.el.btnYes.style.transform = `scale(${this.yesScale})`;
        return;
      }

      // Between 1 and 4 attempts:
      // 1. Cat expression
      if (this.noAttempts === 1) {
        this.el.heroCat.innerHTML = Cats.getMainCat('pleading');
      } else if (this.noAttempts === 2 || this.noAttempts === 3) {
        this.el.heroCat.innerHTML = Cats.getMainCat('crying');
      } else {
        this.el.heroCat.innerHTML = Cats.getMainCat('pleading');
      }

      // 2. Feedback message
      this.el.funnyFeedback.textContent = feedbackQuotes[this.noAttempts - 1];

      // 3. Scale YES button up gently
      this.yesScale += 0.12;
      this.el.btnYes.style.transform = `scale(${this.yesScale})`;

      // 4. Move NO button within container
      const area = this.el.buttonsArea.getBoundingClientRect();
      const maxX = Math.max(30, (area.width / 2) - 60);
      const randomX = (Math.random() - 0.5) * maxX * 1.6;
      const randomY = (Math.random() - 0.5) * 35;

      this.el.btnNo.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.9)`;
    };

    this.el.btnNo.addEventListener('mouseenter', onNoAttempt);
    this.el.btnNo.addEventListener('touchstart', onNoAttempt, { passive: false });
    this.el.btnNo.addEventListener('click', onNoAttempt);
  }

  handleYesClick() {
    SoundEffects.playFanfare();
    this.triggerConfetti();

    // Visual celebration on step 1
    this.el.heroCat.innerHTML = Cats.getMainCat('happy');
    this.el.titleStep1.textContent = 'YAAAY! ȘTIAM EU! 😻🎉';
    this.el.subStep1.textContent = 'Pregătește-te pentru cel mai frumos date! 💕';
    this.el.buttonsArea.style.display = 'none';
    this.el.funnyFeedback.textContent = '✨ Te redirecționez automat către calendar...';

    // Automatically transition to Step 2 (Calendar) after 1.2 seconds without requiring an extra button!
    setTimeout(() => {
      this.goToStep(2);
      this.renderCalendar();
    }, 1200);
  }

  goToStep(step) {
    this.currentStep = step;

    // Update progress dots
    this.el.dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx + 1 === step);
    });

    // Switch step views
    [this.el.step1, this.el.step2, this.el.step3, this.el.step4].forEach((s, idx) => {
      if (idx + 1 === step) {
        s.style.display = 'flex';
        s.style.flexDirection = 'column';
        s.style.alignItems = 'center';
      } else {
        s.style.display = 'none';
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // CALENDAR
  renderCalendar() {
    this.el.calMonthTitle.textContent = `${this.monthsRO[this.calMonth].toUpperCase()} ${this.calYear}`;
    this.el.calGrid.innerHTML = '';

    const firstDayIndex = (new Date(this.calYear, this.calMonth, 1).getDay() + 6) % 7; // Monday = 0
    const totalDays = new Date(this.calYear, this.calMonth + 1, 0).getDate();

    // Empty previous days
    for (let i = 0; i < firstDayIndex; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day-cell disabled';
      this.el.calGrid.appendChild(empty);
    }

    const today = new Date();
    const isCurrentMonth = (today.getFullYear() === this.calYear && today.getMonth() === this.calMonth);

    for (let d = 1; d <= totalDays; d++) {
      const cell = document.createElement('div');
      cell.className = 'cal-day-cell';
      cell.textContent = d;

      const cellDate = new Date(this.calYear, this.calMonth, d);

      if (isCurrentMonth && d === today.getDate()) {
        cell.classList.add('is-today');
      }

      if (this.selectedDate &&
          this.selectedDate.getFullYear() === this.calYear &&
          this.selectedDate.getMonth() === this.calMonth &&
          this.selectedDate.getDate() === d) {
        cell.classList.add('selected');
      }

      cell.addEventListener('click', () => {
        SoundEffects.playClick();
        this.selectedDate = cellDate;
        this.renderCalendar();
        this.updateDateLabel();
      });

      this.el.calGrid.appendChild(cell);
    }

    this.updateDateLabel();
  }

  updateDateLabel() {
    if (!this.selectedDate) {
      this.el.selectedDateLabel.textContent = 'Alege o zi din calendar 🐾';
      return;
    }

    const dayName = this.selectedDate.toLocaleDateString('ro-RO', { weekday: 'long' });
    const capitalized = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    const text = `🐾 ${capitalized}, ${this.selectedDate.getDate()} ${this.monthsRO[this.selectedDate.getMonth()]} ${this.selectedDate.getFullYear()}`;
    this.el.selectedDateLabel.textContent = text;
    this.el.selectedDateLabel.style.color = '#FF4D82';
  }

  // ACTIVITIES
  renderActivities() {
    this.el.activitiesGrid.innerHTML = '';

    this.activitiesData.forEach(act => {
      const isSelected = this.selectedActivities.has(act.id);
      const card = document.createElement('div');
      card.className = `activity-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <span class="activity-icon">${act.icon}</span>
        <span class="activity-title">${act.title}</span>
        <span class="activity-desc">${act.desc}</span>
      `;

      card.addEventListener('click', () => {
        SoundEffects.playClick();
        if (this.selectedActivities.has(act.id)) {
          this.selectedActivities.delete(act.id);
        } else {
          this.selectedActivities.add(act.id);
        }
        card.classList.toggle('selected', this.selectedActivities.has(act.id));
      });

      this.el.activitiesGrid.appendChild(card);
    });
  }

  // TICKET
  renderTicket() {
    const dayName = this.selectedDate.toLocaleDateString('ro-RO', { weekday: 'long' });
    const capitalized = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    const dateFormatted = `${capitalized}, ${this.selectedDate.getDate()} ${this.monthsRO[this.selectedDate.getMonth()]} ${this.selectedDate.getFullYear()}`;
    this.el.finalDate.textContent = `📅 ${dateFormatted}`;

    const chosen = this.activitiesData
      .filter(a => this.selectedActivities.has(a.id))
      .map(a => `${a.icon} ${a.title}`)
      .join(', ');

    this.el.finalActivities.textContent = chosen || 'Surpriză!';

    if (this.customWish) {
      this.el.finalWishContainer.style.display = 'flex';
      this.el.finalWish.textContent = `🍨 "${this.customWish}"`;
    } else {
      this.el.finalWishContainer.style.display = 'none';
    }
  }

  sendWhatsApp() {
    SoundEffects.playClick();
    const dayName = this.selectedDate.toLocaleDateString('ro-RO', { weekday: 'long' });
    const capitalized = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    const dateFormatted = `${capitalized}, ${this.selectedDate.getDate()} ${this.monthsRO[this.selectedDate.getMonth()]} ${this.selectedDate.getFullYear()}`;

    const chosen = this.activitiesData
      .filter(a => this.selectedActivities.has(a.id))
      .map(a => `${a.icon} ${a.title}`)
      .join(', ');

    const wishText = this.customWish ? `\n🍨 Dorință specială: ${this.customWish}` : '';

    const text = `Iubitule! 🐱💖 Am acceptat invitația la date!\n\n📅 Când ne vedem: ${dateFormatted}\n✨ Ce facem: ${chosen}${wishText}\n\nAbia aștept! 💕🐾`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  downloadTicketImage() {
    SoundEffects.playClick();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 760;

    // Soft gradient background
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#FFF5F8');
    grad.addColorStop(1, '#FFEBF2');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Rounded card frame
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#FFD4E2';
    ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);

    // Header Title
    ctx.fillStyle = '#FF4D82';
    ctx.font = 'bold 26px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🐾 BILET OFICIAL DE ÎNTÂLNIRE 🐾', canvas.width / 2, 85);

    // Subtitle
    ctx.fillStyle = '#8E6078';
    ctx.font = '600 16px sans-serif';
    ctx.fillText('Confirmat cu iubire și lăbuțe', canvas.width / 2, 118);

    // Date
    const dayName = this.selectedDate.toLocaleDateString('ro-RO', { weekday: 'long' });
    const capitalized = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    const dateFormatted = `${capitalized}, ${this.selectedDate.getDate()} ${this.monthsRO[this.selectedDate.getMonth()]} ${this.selectedDate.getFullYear()}`;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#FF4D82';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('DATA:', 60, 180);

    ctx.fillStyle = '#4A283B';
    ctx.font = '700 20px sans-serif';
    ctx.fillText(`📅 ${dateFormatted}`, 60, 215);

    // Activities
    ctx.fillStyle = '#FF4D82';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('ACTIVITĂȚI SELECTATE:', 60, 275);

    const chosen = this.activitiesData.filter(a => this.selectedActivities.has(a.id));
    let y = 310;
    chosen.forEach(a => {
      ctx.fillStyle = '#4A283B';
      ctx.font = '600 18px sans-serif';
      ctx.fillText(`• ${a.icon} ${a.title} (${a.desc})`, 60, y);
      y += 34;
    });

    // Wish
    if (this.customWish) {
      y += 10;
      ctx.fillStyle = '#FF4D82';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('DORINȚĂ SPECIALĂ:', 60, y);
      y += 35;
      ctx.fillStyle = '#4A283B';
      ctx.font = 'italic 600 18px sans-serif';
      ctx.fillText(`🍨 "${this.customWish}"`, 60, y);
      y += 20;
    }

    // Couple cats emoji
    ctx.textAlign = 'center';
    ctx.font = '40px sans-serif';
    ctx.fillText('🐱 ❤️ 🐱', canvas.width / 2, canvas.height - 110);

    ctx.fillStyle = '#8E6078';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('VALABIL PENTRU ÎMBRĂȚIȘĂRI NELIMITATE 💕', canvas.width / 2, canvas.height - 65);

    const link = document.createElement('a');
    link.download = 'bilet-intalnire-noi-doi.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  initAmbientHearts() {
    const container = document.getElementById('ambient-hearts');
    const hearts = ['💖', '🐾', '✨', '🌸', '💕'];
    setInterval(() => {
      if (document.hidden) return;
      const span = document.createElement('div');
      span.className = 'floating-heart';
      span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      span.style.left = `${Math.random() * 95}vw`;
      span.style.animationDuration = `${8 + Math.random() * 8}s`;
      span.style.fontSize = `${14 + Math.random() * 12}px`;
      container.appendChild(span);
      setTimeout(() => span.remove(), 16000);
    }, 2200);
  }

  initConfetti() {
    this.confettiCanvas = document.getElementById('confetti-canvas');
    this.confettiCtx = this.confettiCanvas.getContext('2d');
    this.confettiParticles = [];
    this.confettiActive = false;

    const resize = () => {
      this.confettiCanvas.width = window.innerWidth;
      this.confettiCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  triggerConfetti() {
    this.confettiParticles = [];
    const colors = ['#FF4D82', '#FF85A2', '#FFD1E1', '#FFB300', '#64D2FF', '#FFFFFF'];
    const emojis = ['🐾', '💖', '✨', '💕', '🐱'];

    for (let i = 0; i < 80; i++) {
      this.confettiParticles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - 40,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        size: 8 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        emoji: Math.random() > 0.4 ? emojis[Math.floor(Math.random() * emojis.length)] : null,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 8,
        alpha: 1,
        decay: 0.009 + Math.random() * 0.012
      });
    }

    if (!this.confettiActive) {
      this.confettiActive = true;
      this.animateConfetti();
    }
  }

  animateConfetti() {
    if (!this.confettiActive) return;
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.vr;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.confettiParticles.splice(i, 1);
        continue;
      }

      this.confettiCtx.save();
      this.confettiCtx.globalAlpha = p.alpha;
      this.confettiCtx.translate(p.x, p.y);
      this.confettiCtx.rotate((p.rotation * Math.PI) / 180);

      if (p.emoji) {
        this.confettiCtx.font = `${p.size * 1.5}px sans-serif`;
        this.confettiCtx.fillText(p.emoji, -p.size / 2, p.size / 2);
      } else {
        this.confettiCtx.fillStyle = p.color;
        this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }

      this.confettiCtx.restore();
    }

    if (this.confettiParticles.length > 0) {
      requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.confettiActive = false;
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
    }
  }
}

// Start application seamlessly
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.catDateApp = new CatDateApp();
  });
} else {
  window.catDateApp = new CatDateApp();
}
