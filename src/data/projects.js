/**
 * PROJE KATALOĞU
 *
 * Her proje için:
 *   id        — benzersiz slug (URL'de kullanılmaz, React key olarak kullanılır)
 *   title     — gösterilecek başlık
 *   category  — ana kategori: 'CSS' | 'JavaScript'
 *   sub       — alt kategori (filtre için)
 *   path      — public/projects/ altındaki HTML dosyasının yolu
 *   tech      — kullanılan teknolojiler
 *   mine      — true = benim versiyonum, false = FreeCodeCamp/ChatGPT versiyonu
 *   description — kısa açıklama
 *   cover     — { gradient, accent, pattern }
 *
 * Yeni proje eklemek için bu diziye bir eleman ekle.
 * Dosyayı public/projects/ altındaki ilgili klasöre koy.
 */

export const PROJECTS = [
  // ───────────────────── CSS / ANIMATIONS ─────────────────────
  {
    id: 'css-animation-mecit',
    title: 'CSS Animation',
    category: 'CSS',
    sub: 'Animations',
    path: '/projects/CSS/Animations/Animation.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Keyframe animasyonları ve CSS efektleri.',
    cover: { gradient: 'linear-gradient(135deg,#1a0020 0%,#30003d 100%)', accent: '#e879f9', pattern: 'circles' },
  },
  {
    id: 'personal-port-mecit',
    title: 'Personal Portfolio (CSS)',
    category: 'CSS',
    sub: 'Animations',
    path: '/projects/CSS/Animations/PersonalPortMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS animasyonları ile kişisel portfolyo sayfası.',
    cover: { gradient: 'linear-gradient(135deg,#001a33 0%,#003366 100%)', accent: '#60a5fa', pattern: 'diagonal' },
  },
  {
    id: 'moon-orbit-mecit',
    title: 'Moon Orbit',
    category: 'CSS',
    sub: 'Animations',
    path: '/projects/CSS/Animations/MoonOrbitMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS ile yapılmış ay yörüngesi animasyonu.',
    cover: { gradient: 'linear-gradient(135deg,#080820 0%,#12123a 100%)', accent: '#a5b4fc', pattern: 'rings' },
  },
  {
    id: 'moon-orbit-freec',
    title: 'Moon Orbit (FCC)',
    category: 'CSS',
    sub: 'Animations',
    path: '/projects/CSS/Animations/MoonOrbitFreeC.html',
    tech: ['HTML', 'CSS'],
    mine: false,
    description: 'FreeCodeCamp versiyonu — ay yörüngesi.',
    cover: { gradient: 'linear-gradient(135deg,#080820 0%,#12123a 100%)', accent: '#818cf8', pattern: 'rings' },
  },
  {
    id: 'wheel-mecit',
    title: 'Spinning Wheel',
    category: 'CSS',
    sub: 'Animations',
    path: '/projects/CSS/Animations/WheelMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS transform ile dönen çark animasyonu.',
    cover: { gradient: 'linear-gradient(135deg,#1a1000 0%,#332200 100%)', accent: '#fbbf24', pattern: 'circles' },
  },
  {
    id: 'flappy-penguin',
    title: 'Flappy Penguin (FCC)',
    category: 'CSS',
    sub: 'Animations',
    path: '/projects/CSS/Animations/FlappyPenguinFreeC.html',
    tech: ['HTML', 'CSS'],
    mine: false,
    description: 'FreeCodeCamp — CSS ile uçan penguen animasyonu.',
    cover: { gradient: 'linear-gradient(135deg,#001a2e 0%,#003366 100%)', accent: '#38bdf8', pattern: 'waves' },
  },

  // ───────────────────── CSS / GRID ─────────────────────
  {
    id: 'newspaper-mecit',
    title: 'Newspaper Layout',
    category: 'CSS',
    sub: 'Grid',
    path: '/projects/CSS/Grid/NewspaperMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS Grid ile oluşturulmuş gazete düzeni.',
    cover: { gradient: 'linear-gradient(135deg,#0f0f0f 0%,#1a1a1a 100%)', accent: '#f0ece4', pattern: 'grid' },
  },
  {
    id: 'product-landing-mecit',
    title: 'Product Landing Page',
    category: 'CSS',
    sub: 'Grid',
    path: '/projects/CSS/Grid/ProductLandingMec.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Grid tabanlı ürün tanıtım sayfası.',
    cover: { gradient: 'linear-gradient(135deg,#001a10 0%,#003322 100%)', accent: '#4ade80', pattern: 'hex' },
  },
  {
    id: 'magazine-freec',
    title: 'Magazine Layout (FCC)',
    category: 'CSS',
    sub: 'Grid',
    path: '/projects/CSS/Grid/Magazine.html',
    tech: ['HTML', 'CSS'],
    mine: false,
    description: 'FreeCodeCamp — CSS Grid dergi düzeni.',
    cover: { gradient: 'linear-gradient(135deg,#1a0a00 0%,#331500 100%)', accent: '#fb923c', pattern: 'diagonal' },
  },

  // ───────────────────── CSS / FLEXBOX ─────────────────────
  {
    id: 'photo-gallery-mecit',
    title: 'Photo Gallery',
    category: 'CSS',
    sub: 'Flexbox',
    path: '/projects/CSS/Flexbox/PhotoMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Flexbox ile duyarlı fotoğraf galerisi.',
    cover: { gradient: 'linear-gradient(135deg,#0f1a0f 0%,#1a2e1a 100%)', accent: '#86efac', pattern: 'dots' },
  },
  {
    id: 'card-mecit',
    title: 'Card Component',
    category: 'CSS',
    sub: 'Flexbox',
    path: '/projects/CSS/Flexbox/CardMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Flexbox ile kart bileşeni tasarımı.',
    cover: { gradient: 'linear-gradient(135deg,#0a0a1a 0%,#151530 100%)', accent: '#818cf8', pattern: 'circles' },
  },

  // ───────────────────── CSS / TYPOGRAPHY ─────────────────────
  {
    id: 'newspaper-typography-mecit',
    title: 'Newspaper (Typography)',
    category: 'CSS',
    sub: 'Typography',
    path: '/projects/CSS/Typography/MecitNewsPaper.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS tipografi ile gazete tasarımı.',
    cover: { gradient: 'linear-gradient(135deg,#0f0f0f 0%,#1c1c1c 100%)', accent: '#d4d4d4', pattern: 'diagonal' },
  },
  {
    id: 'nutritional-label',
    title: 'Nutritional Label',
    category: 'CSS',
    sub: 'Typography',
    path: '/projects/CSS/Typography/NutiritionalLabel.html',
    tech: ['HTML', 'CSS'],
    mine: false,
    description: 'CSS ile besin değerleri etiketi.',
    cover: { gradient: 'linear-gradient(135deg,#f5f5f5 0%,#e8e8e8 100%)', accent: '#000000', pattern: 'grid' },
  },

  // ───────────────────── CSS / RESPONSIVE DESIGN ─────────────────────
  {
    id: 'js-documentation',
    title: 'JS Documentation Page',
    category: 'CSS',
    sub: 'Responsive Design',
    path: '/projects/CSS/Responsive Design/JSDocumentation.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Duyarlı JavaScript dokümantasyon sayfası.',
    cover: { gradient: 'linear-gradient(135deg,#1a1500 0%,#332b00 100%)', accent: '#facc15', pattern: 'grid' },
  },
  {
    id: 'piano-freec',
    title: 'Piano (FCC)',
    category: 'CSS',
    sub: 'Responsive Design',
    path: '/projects/CSS/Responsive Design/freeCPiano.html',
    tech: ['HTML', 'CSS'],
    mine: false,
    description: 'FreeCodeCamp — CSS ile piyano klavyesi.',
    cover: { gradient: 'linear-gradient(135deg,#0f0f0f 0%,#1a1a1a 100%)', accent: '#f0ece4', pattern: 'grid' },
  },

  // ───────────────────── CSS / ACCESSIBILITY ─────────────────────
  {
    id: 'quiz-app-css-mecit',
    title: 'Quiz App (CSS)',
    category: 'CSS',
    sub: 'Accessibility',
    path: '/projects/CSS/Accessibility/QuizAppMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Erişilebilirlik odaklı CSS quiz sayfası.',
    cover: { gradient: 'linear-gradient(135deg,#001a10 0%,#002e1a 100%)', accent: '#34d399', pattern: 'hex' },
  },
  {
    id: 'tribute-page',
    title: 'Tribute Page',
    category: 'CSS',
    sub: 'Accessibility',
    path: '/projects/CSS/Accessibility/TributePage.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Anma / tribute sayfası.',
    cover: { gradient: 'linear-gradient(135deg,#1a0a0a 0%,#2e1515 100%)', accent: '#f87171', pattern: 'circles' },
  },

  // ───────────────────── CSS / STYLING FORMS ─────────────────────
  {
    id: 'registration-form',
    title: 'Registration Form',
    category: 'CSS',
    sub: 'Styling Forms',
    path: '/projects/CSS/Styling Forms/RegistrationForm.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Stil verilmiş kayıt formu.',
    cover: { gradient: 'linear-gradient(135deg,#0a001a 0%,#15003a 100%)', accent: '#c084fc', pattern: 'dots' },
  },
  {
    id: 'contact-form-mecit',
    title: 'Contact Form',
    category: 'CSS',
    sub: 'Styling Forms',
    path: '/projects/CSS/Styling Forms/BenimYaptigimContactForm.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Kişisel iletişim formu tasarımı.',
    cover: { gradient: 'linear-gradient(135deg,#001a2e 0%,#003355 100%)', accent: '#38bdf8', pattern: 'waves' },
  },

  // ───────────────────── CSS / BOX MODEL ─────────────────────
  {
    id: 'conf-email-mecit',
    title: 'Confidential Email',
    category: 'CSS',
    sub: 'Box Model',
    path: '/projects/CSS/The Box Model/ConfidentialEmailBenimYaptigim.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Box model kullanarak e-posta şablonu.',
    cover: { gradient: 'linear-gradient(135deg,#0a1a0a 0%,#152e15 100%)', accent: '#4ade80', pattern: 'grid' },
  },

  // ───────────────────── CSS / POSITIONING ─────────────────────
  {
    id: 'cat-mecit',
    title: 'CSS Cat',
    category: 'CSS',
    sub: 'Positioning',
    path: '/projects/CSS/Positioning/CatMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS positioning ile kedi çizimi.',
    cover: { gradient: 'linear-gradient(135deg,#1a1000 0%,#2e1c00 100%)', accent: '#fbbf24', pattern: 'circles' },
  },
  {
    id: 'house-paint-mecit',
    title: 'House Paint',
    category: 'CSS',
    sub: 'Positioning',
    path: '/projects/CSS/Positioning/HousePaintMec.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS ile ev boyama tasarımı.',
    cover: { gradient: 'linear-gradient(135deg,#1a0a00 0%,#3d1500 100%)', accent: '#fb923c', pattern: 'diagonal' },
  },

  // ───────────────────── CSS / COLORS ─────────────────────
  {
    id: 'gradients',
    title: 'CSS Gradients',
    category: 'CSS',
    sub: 'Colors',
    path: '/projects/CSS/Colors/Gradients.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS gradient renk geçişleri.',
    cover: { gradient: 'linear-gradient(135deg,#4f0f9e 0%,#0f4b9e 50%,#0f9e6b 100%)', accent: '#f0ece4', pattern: 'spectrum' },
  },
  {
    id: 'colored-boxes',
    title: 'Colored Boxes',
    category: 'CSS',
    sub: 'Colors',
    path: '/projects/CSS/Colors/ColoredBoxes.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS renk kutuları ve palet gösterimi.',
    cover: { gradient: 'linear-gradient(135deg,#0f0f1a 0%,#1a1a2e 100%)', accent: '#f472b6', pattern: 'spectrum' },
  },

  // ───────────────────── CSS / VARIABLES ─────────────────────
  {
    id: 'city-mecit',
    title: 'City Skyline',
    category: 'CSS',
    sub: 'Variables',
    path: '/projects/CSS/Variables/CityMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS değişkenleri ile şehir silüeti.',
    cover: { gradient: 'linear-gradient(180deg,#0a0a20 0%,#1a1a3a 60%,#0a0010 100%)', accent: '#818cf8', pattern: 'circles' },
  },
  {
    id: 'availability-table-mecit',
    title: 'Availability Table',
    category: 'CSS',
    sub: 'Variables',
    path: '/projects/CSS/Variables/AvailabilityMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'CSS değişkenleri ile müsaitlik tablosu.',
    cover: { gradient: 'linear-gradient(135deg,#001a10 0%,#003322 100%)', accent: '#34d399', pattern: 'grid' },
  },

  // ───────────────────── CSS / ATTRIBUTE SELECTORS ─────────────────────
  {
    id: 'balance-sheet-mecit',
    title: 'Balance Sheet',
    category: 'CSS',
    sub: 'Attribute Selectors',
    path: '/projects/CSS/Attribute Selectors/BalanceSheetMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Attribute seçiciler ile bilanço tablosu.',
    cover: { gradient: 'linear-gradient(135deg,#001520 0%,#002535 100%)', accent: '#38bdf8', pattern: 'grid' },
  },
  {
    id: 'book-inventory-mecit',
    title: 'Book Inventory',
    category: 'CSS',
    sub: 'Attribute Selectors',
    path: '/projects/CSS/Attribute Selectors/BookInventMecit.html',
    tech: ['HTML', 'CSS'],
    mine: true,
    description: 'Attribute seçiciler ile kitap envanteri.',
    cover: { gradient: 'linear-gradient(135deg,#1a1000 0%,#2e1c00 100%)', accent: '#fbbf24', pattern: 'diagonal' },
  },

  // ───────────────────── JS / DOM MANIPULATION ─────────────────────
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    category: 'JavaScript',
    sub: 'DOM & Events',
    path: '/projects/JS/DomManipulationAndEvents/rockPaperScissors/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Taş-kağıt-makas oyunu.',
    cover: { gradient: 'linear-gradient(135deg,#001a10 0%,#003322 100%)', accent: '#4ade80', pattern: 'hex' },
  },
  {
    id: 'football-team-cards',
    title: 'Football Team Cards',
    category: 'JavaScript',
    sub: 'DOM & Events',
    path: '/projects/JS/DomManipulationAndEvents/footballTeamCards/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'DOM manipülasyonu ile futbol kartları.',
    cover: { gradient: 'linear-gradient(135deg,#001500 0%,#003300 100%)', accent: '#86efac', pattern: 'hex' },
  },
  {
    id: 'lightbox-viewer',
    title: 'Lightbox Viewer',
    category: 'JavaScript',
    sub: 'DOM & Events',
    path: '/projects/JS/DomManipulationAndEvents/lightboxViewer/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'JavaScript ile lightbox fotoğraf görüntüleyici.',
    cover: { gradient: 'linear-gradient(135deg,#0a001a 0%,#15003a 100%)', accent: '#c084fc', pattern: 'circles' },
  },
  {
    id: 'emoji-reactor',
    title: 'Emoji Reactor',
    category: 'JavaScript',
    sub: 'DOM & Events',
    path: '/projects/JS/DomManipulationAndEvents/emojiReactor/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Emoji tepki etkileşim uygulaması.',
    cover: { gradient: 'linear-gradient(135deg,#1a1000 0%,#332200 100%)', accent: '#fbbf24', pattern: 'dots' },
  },
  {
    id: 'story-telling-app',
    title: 'Story Telling App',
    category: 'JavaScript',
    sub: 'DOM & Events',
    path: '/projects/JS/DomManipulationAndEvents/storyTellingApp/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'İnteraktif hikaye anlatım uygulaması.',
    cover: { gradient: 'linear-gradient(135deg,#1a0a00 0%,#2e1500 100%)', accent: '#fb923c', pattern: 'waves' },
  },
  {
    id: 'real-time-counter',
    title: 'Real-Time Counter',
    category: 'JavaScript',
    sub: 'DOM & Events',
    path: '/projects/JS/DomManipulationAndEvents/BenimrealTimeCharacterCounter/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Gerçek zamanlı karakter sayacı.',
    cover: { gradient: 'linear-gradient(135deg,#001a2e 0%,#002e50 100%)', accent: '#38bdf8', pattern: 'grid' },
  },
  {
    id: 'music-instrument-filter',
    title: 'Music Instrument Filter',
    category: 'JavaScript',
    sub: 'DOM & Events',
    path: '/projects/JS/DomManipulationAndEvents/musicInstrumentFilter/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Müzik enstrümanı filtreleme uygulaması.',
    cover: { gradient: 'linear-gradient(135deg,#0f001a 0%,#1a0030 100%)', accent: '#e879f9', pattern: 'waves' },
  },

  // ───────────────────── JS / FORM VALIDATION ─────────────────────
  {
    id: 'calorie-counter-mecit',
    title: 'Calorie Counter',
    category: 'JavaScript',
    sub: 'Form Validation',
    path: '/projects/JS/FormValidation/BenimCalorieCounter/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Kalori takip ve form doğrulama uygulaması.',
    cover: { gradient: 'linear-gradient(135deg,#001a10 0%,#003322 100%)', accent: '#4ade80', pattern: 'dots' },
  },
  {
    id: 'complaint-form',
    title: 'Customer Complaint Form',
    category: 'JavaScript',
    sub: 'Form Validation',
    path: '/projects/JS/FormValidation/CustomerComplaintForm/Benim/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Müşteri şikayet formu doğrulaması.',
    cover: { gradient: 'linear-gradient(135deg,#1a0000 0%,#2e0000 100%)', accent: '#f87171', pattern: 'grid' },
  },

  // ───────────────────── JS / REGEX ─────────────────────
  {
    id: 'spam-filter',
    title: 'Spam Filter',
    category: 'JavaScript',
    sub: 'Regex',
    path: '/projects/JS/BasicRegex/SpamFilter/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Regex ile spam filtreleme aracı.',
    cover: { gradient: 'linear-gradient(135deg,#1a0000 0%,#330000 100%)', accent: '#ef4444', pattern: 'diagonal' },
  },
  {
    id: 'palindrome-checker',
    title: 'Palindrome Checker',
    category: 'JavaScript',
    sub: 'Regex',
    path: '/projects/JS/BasicRegex/PalindromeChecker/Benim/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Palindrom kontrol uygulaması.',
    cover: { gradient: 'linear-gradient(135deg,#001520 0%,#002535 100%)', accent: '#22d3ee', pattern: 'circles' },
  },
  {
    id: 'markdown-converter',
    title: 'Markdown to HTML',
    category: 'JavaScript',
    sub: 'Regex',
    path: '/projects/JS/BasicRegex/MardownToHTMLConveter/Benim/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Markdown\'ı HTML\'e dönüştüren araç.',
    cover: { gradient: 'linear-gradient(135deg,#0a1a0a 0%,#152e15 100%)', accent: '#86efac', pattern: 'grid' },
  },
  {
    id: 'regex-sandbox',
    title: 'Regex Sandbox',
    category: 'JavaScript',
    sub: 'Regex',
    path: '/projects/JS/BasicRegex/RegexSandbox/Benim/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Regex test ve öğrenme aracı.',
    cover: { gradient: 'linear-gradient(135deg,#0f0f1a 0%,#1a1a2e 100%)', accent: '#818cf8', pattern: 'hex' },
  },

  // ───────────────────── JS / AUDIO & VIDEO ─────────────────────
  {
    id: 'drum-machine-mecit',
    title: 'Drum Machine',
    category: 'JavaScript',
    sub: 'Audio & Video',
    path: '/projects/JS/AudioAndVideo/DrumMachine/BenimDrumMachine/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Sesli davul makinesi uygulaması.',
    cover: { gradient: 'linear-gradient(135deg,#1a0000 0%,#2e0000 100%)', accent: '#f87171', pattern: 'circles' },
  },
  {
    id: 'music-player-mecit',
    title: 'Music Player',
    category: 'JavaScript',
    sub: 'Audio & Video',
    path: '/projects/JS/AudioAndVideo/MusicPlayer/BenimMusicPlayer/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'JavaScript ile müzik çalar.',
    cover: { gradient: 'linear-gradient(135deg,#0f001a 0%,#1a0030 100%)', accent: '#e879f9', pattern: 'waves' },
  },

  // ───────────────────── JS / ACCESSIBILITY ─────────────────────
  {
    id: 'note-taking-app',
    title: 'Note Taking App',
    category: 'JavaScript',
    sub: 'Accessibility',
    path: '/projects/JS/javascriptAndAccessibility/noteTakingApp/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Erişilebilir not alma uygulaması.',
    cover: { gradient: 'linear-gradient(135deg,#1a1000 0%,#2e1c00 100%)', accent: '#fbbf24', pattern: 'dots' },
  },
  {
    id: 'theme-switcher',
    title: 'Theme Switcher',
    category: 'JavaScript',
    sub: 'Accessibility',
    path: '/projects/JS/javascriptAndAccessibility/themeSwitcher/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Karanlık / aydınlık tema değiştirici.',
    cover: { gradient: 'linear-gradient(135deg,#0f0f0f 0%,#1c1c1c 100%)', accent: '#d4d4d4', pattern: 'grid' },
  },
  {
    id: 'planets-tablist',
    title: 'Planets Tablist',
    category: 'JavaScript',
    sub: 'Accessibility',
    path: '/projects/JS/javascriptAndAccessibility/planetsTablist/index.html',
    tech: ['HTML', 'CSS', 'JavaScript'],
    mine: true,
    description: 'Erişilebilir tab paneli — gezegenler.',
    cover: { gradient: 'linear-gradient(135deg,#080820 0%,#12123a 100%)', accent: '#a5b4fc', pattern: 'rings' },
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export const CATEGORIES = ['Tümü', 'CSS', 'JavaScript'];

export const CSS_SUBS = [
  'Tümü', 'Animations', 'Grid', 'Flexbox', 'Typography',
  'Responsive Design', 'Accessibility', 'Styling Forms',
  'Box Model', 'Positioning', 'Colors', 'Variables', 'Attribute Selectors',
];

export const JS_SUBS = [
  'Tümü', 'DOM & Events', 'Form Validation', 'Regex', 'Audio & Video', 'Accessibility',
];

export const getProjectsByCategory = (cat, sub = 'Tümü') => {
  let list = cat === 'Tümü' ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
  if (sub && sub !== 'Tümü') list = list.filter((p) => p.sub === sub);
  return list;
};

export const searchProjects = (query, cat = 'Tümü', sub = 'Tümü') => {
  const base = getProjectsByCategory(cat, sub);
  if (!query) return base;
  const q = query.toLowerCase();
  return base.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q)),
  );
};
