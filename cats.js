// Adorable Aesthetic Cat Illustrations & SVG Generator
// Soft, modern pastel style with expressive animations

const Cats = {
  // Main Mochi Kitten with reactive expressions
  getMainCat(state = 'happy') {
    switch (state) {
      case 'crying':
        return `
          <svg class="cat-svg cat-crying" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <g class="cat-body-group">
              <!-- Ears -->
              <path d="M28,45 L15,18 Q28,15 42,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M25,38 L19,23 Q27,21 35,32 Z" fill="#FFB6CE"/>
              <path d="M92,45 L105,18 Q92,15 78,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M95,38 L101,23 Q93,21 85,32 Z" fill="#FFB6CE"/>
              <!-- Head/Body -->
              <ellipse cx="60" cy="62" rx="46" ry="40" fill="#FFF9FC" stroke="#5B374D" stroke-width="3"/>
              <!-- Sad Eyes T_T -->
              <path d="M35,56 Q42,50 49,56" stroke="#5B374D" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <path d="M71,56 Q78,50 85,56" stroke="#5B374D" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <!-- Cheeks -->
              <ellipse cx="32" cy="66" rx="6" ry="4" fill="#FFB6CE" opacity="0.8"/>
              <ellipse cx="88" cy="66" rx="6" ry="4" fill="#FFB6CE" opacity="0.8"/>
              <!-- Sad Mouth -->
              <path d="M57,68 Q60,65 63,68" stroke="#5B374D" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <!-- Animated Big Tears -->
              <g class="anim-tears">
                <ellipse cx="40" cy="68" rx="3.5" ry="6" fill="#64D2FF"/>
                <ellipse cx="80" cy="68" rx="3.5" ry="6" fill="#64D2FF"/>
                <circle cx="39" cy="80" r="3" fill="#64D2FF" opacity="0.7"/>
                <circle cx="81" cy="80" r="3" fill="#64D2FF" opacity="0.7"/>
              </g>
              <!-- Paws on cheeks -->
              <ellipse cx="36" cy="74" rx="8" ry="7" fill="#FFF9FC" stroke="#5B374D" stroke-width="2.5"/>
              <ellipse cx="84" cy="74" rx="8" ry="7" fill="#FFF9FC" stroke="#5B374D" stroke-width="2.5"/>
            </g>
          </svg>`;

      case 'pleading':
        return `
          <svg class="cat-svg cat-pleading" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <g class="cat-body-group">
              <!-- Ears twitching -->
              <path d="M28,45 L15,18 Q28,15 42,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M25,38 L19,23 Q27,21 35,32 Z" fill="#FFB6CE"/>
              <path d="M92,45 L105,18 Q92,15 78,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M95,38 L101,23 Q93,21 85,32 Z" fill="#FFB6CE"/>
              <!-- Head -->
              <ellipse cx="60" cy="62" rx="46" ry="40" fill="#FFF9FC" stroke="#5B374D" stroke-width="3"/>
              <!-- Giant Sparkly Pleading Eyes -->
              <ellipse cx="42" cy="56" rx="9" ry="11" fill="#422538"/>
              <circle cx="39" cy="52" r="4" fill="#FFFFFF"/>
              <circle cx="44" cy="61" r="2" fill="#FFFFFF"/>
              <ellipse cx="78" cy="56" rx="9" ry="11" fill="#422538"/>
              <circle cx="75" cy="52" r="4" fill="#FFFFFF"/>
              <circle cx="80" cy="61" r="2" fill="#FFFFFF"/>
              <!-- Rosy Cheeks -->
              <ellipse cx="30" cy="66" rx="7" ry="5" fill="#FF94B8" opacity="0.85"/>
              <ellipse cx="90" cy="66" rx="7" ry="5" fill="#FF94B8" opacity="0.85"/>
              <!-- Tiny :3 mouth -->
              <path d="M55,67 Q58,70 60,67 Q62,70 65,67" stroke="#5B374D" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <!-- Begging paws together -->
              <ellipse cx="54" cy="78" rx="7" ry="8" fill="#FFF9FC" stroke="#5B374D" stroke-width="2.5"/>
              <ellipse cx="66" cy="78" rx="7" ry="8" fill="#FFF9FC" stroke="#5B374D" stroke-width="2.5"/>
            </g>
          </svg>`;

      case 'smug': // After 5 tries when NO disappears
        return `
          <svg class="cat-svg cat-smug" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <g class="cat-body-group">
              <!-- Ears -->
              <path d="M28,45 L15,18 Q28,15 42,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M25,38 L19,23 Q27,21 35,32 Z" fill="#FFB6CE"/>
              <path d="M92,45 L105,18 Q92,15 78,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M95,38 L101,23 Q93,21 85,32 Z" fill="#FFB6CE"/>
              <!-- Head -->
              <ellipse cx="60" cy="62" rx="46" ry="40" fill="#FFF9FC" stroke="#5B374D" stroke-width="3"/>
              <!-- Wink left, curved right -->
              <path d="M36,56 Q42,52 48,56" stroke="#5B374D" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <ellipse cx="78" cy="56" rx="8" ry="10" fill="#422538"/>
              <circle cx="76" cy="52" r="3.5" fill="#FFFFFF"/>
              <!-- Cheeks -->
              <ellipse cx="32" cy="65" rx="7" ry="4.5" fill="#FF94B8" opacity="0.85"/>
              <ellipse cx="88" cy="65" rx="7" ry="4.5" fill="#FF94B8" opacity="0.85"/>
              <!-- Smug cute grin -->
              <path d="M53,65 Q58,72 67,65" stroke="#5B374D" stroke-width="2.8" fill="none" stroke-linecap="round"/>
              <!-- Paw waving high -->
              <g class="anim-wave-paw">
                <ellipse cx="88" cy="48" rx="8" ry="7" fill="#FFF9FC" stroke="#5B374D" stroke-width="2.5"/>
              </g>
              <!-- Heart floating -->
              <path d="M95,30 Q97,24 102,27 Q107,30 95,40 Q83,30 88,27 Q93,24 95,30 Z" fill="#FF4D8D"/>
            </g>
          </svg>`;

      case 'happy':
      default:
        return `
          <svg class="cat-svg cat-happy" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <g class="cat-body-group">
              <!-- Ears -->
              <path d="M28,45 L15,18 Q28,15 42,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M25,38 L19,23 Q27,21 35,32 Z" fill="#FFB6CE"/>
              <path d="M92,45 L105,18 Q92,15 78,32 Z" fill="#FFF9FC" stroke="#5B374D" stroke-width="3" stroke-linejoin="round"/>
              <path d="M95,38 L101,23 Q93,21 85,32 Z" fill="#FFB6CE"/>
              <!-- Head/Body -->
              <ellipse cx="60" cy="62" rx="46" ry="40" fill="#FFF9FC" stroke="#5B374D" stroke-width="3"/>
              <!-- Cute Happy Closed Eyes (^ ^) -->
              <path d="M35,55 Q42,47 49,55" stroke="#5B374D" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <path d="M71,55 Q78,47 85,55" stroke="#5B374D" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <!-- Soft Pink Cheeks -->
              <ellipse cx="31" cy="64" rx="7" ry="5" fill="#FF9EBB" opacity="0.85"/>
              <ellipse cx="89" cy="64" rx="7" ry="5" fill="#FF9EBB" opacity="0.85"/>
              <!-- Cute Mouth :3 -->
              <path d="M54,64 Q57,68 60,64 Q63,68 66,64" stroke="#5B374D" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <!-- Cute Paws tucked resting -->
              <ellipse cx="44" cy="85" rx="9" ry="7" fill="#FFF9FC" stroke="#5B374D" stroke-width="2.5"/>
              <ellipse cx="76" cy="85" rx="9" ry="7" fill="#FFF9FC" stroke="#5B374D" stroke-width="2.5"/>
            </g>
          </svg>`;
    }
  },

  // Hugging Couple Cats (Bubu & Dudu / Milk & Mocha style) for Ticket & Yay
  getCoupleCats() {
    return `
      <svg class="cat-svg couple-cats-svg" viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
        <!-- Floating hearts above heads -->
        <g class="anim-float-heart">
          <path d="M80,18 Q82,10 89,14 Q96,18 80,32 Q64,18 71,14 Q78,10 80,18 Z" fill="#FF4D8D"/>
          <path d="M58,10 Q60,4 65,7 Q70,10 58,20 Q46,10 51,7 Q56,4 58,10 Z" fill="#FF85A2"/>
          <path d="M102,10 Q104,4 109,7 Q114,10 102,20 Q90,10 95,7 Q100,4 102,10 Z" fill="#FF85A2"/>
        </g>
        
        <!-- Left Cat: White Kitten -->
        <g class="left-cat">
          <path d="M35,42 L25,18 Q35,16 46,30 Z" fill="#FFFFFF" stroke="#5B374D" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M33,36 L28,24 Q34,22 40,30 Z" fill="#FFB6CE"/>
          <ellipse cx="58" cy="62" rx="34" ry="30" fill="#FFFFFF" stroke="#5B374D" stroke-width="2.5"/>
          <!-- Happy closed eye -->
          <path d="M42,58 Q48,51 54,58" stroke="#5B374D" stroke-width="3" fill="none" stroke-linecap="round"/>
          <!-- Blush -->
          <ellipse cx="38" cy="66" rx="6" ry="4" fill="#FF9EBB" opacity="0.8"/>
        </g>

        <!-- Right Cat: Brown Bear / Warm Kitten -->
        <g class="right-cat">
          <path d="M125,42 L135,18 Q125,16 114,30 Z" fill="#C99371" stroke="#5B374D" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M127,36 L132,24 Q126,22 120,30 Z" fill="#AA7554"/>
          <ellipse cx="102" cy="62" rx="34" ry="30" fill="#C99371" stroke="#5B374D" stroke-width="2.5"/>
          <!-- Happy closed eye -->
          <path d="M106,58 Q112,51 118,58" stroke="#5B374D" stroke-width="3" fill="none" stroke-linecap="round"/>
          <!-- Blush -->
          <ellipse cx="122" cy="66" rx="6" ry="4" fill="#FF85A2" opacity="0.8"/>
        </g>

        <!-- Hugging paws overlapping in center -->
        <ellipse cx="78" cy="66" rx="10" ry="7" fill="#FFFFFF" stroke="#5B374D" stroke-width="2.5"/>
        <ellipse cx="84" cy="70" rx="9" ry="6" fill="#C99371" stroke="#5B374D" stroke-width="2.5"/>
      </svg>`;
  }
};
