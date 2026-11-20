/* Project pages: all text lives here (ES/EN) and is rendered into the
   shared structure of the project-*.html pages.
   To add screenshots: copy them into assets/projects and add them to "images". */

const projects = {
  'goblins-life': {
    title: "Goblin's Life",
    category: { es: 'UNITY / DESARROLLO DE VIDEOJUEGOS', en: 'UNITY / GAME DEVELOPMENT' },
    subtitle: { es: 'Los primeros pasos de un goblin recién nacido.', en: 'The first steps of a newborn goblin.' },
    description: {
      es: 'Demo sencilla desarrollada en Unity con estética low-poly, ambientada en un campamento de goblins. Controlas a un goblin recién nacido que empieza su aventura y aprende a combatir y a progresar mediante misiones y enfrentamientos.',
      en: 'A simple demo developed in Unity with a low-poly look, set in a goblin camp. You control a newborn goblin who begins his adventure and learns to fight and progress through missions and battles.'
    },
    note: {
      es: 'Goblin\'s Life es una demo sencilla, no un videojuego completo: reúne las mecánicas básicas que he aprendido a implementar con Unity y C#.',
      en: 'Goblin\'s Life is a simple demo, not a complete game: it brings together the basic mechanics I have learned to build with Unity and C#.'
    },
    meta: [
      { k: { es: 'Motor', en: 'Engine' }, v: 'Unity' },
      { k: { es: 'Estilo', en: 'Style' }, v: 'Low-poly' },
      { k: { es: 'Tipo', en: 'Type' }, v: { es: 'Demo', en: 'Demo' } },
      { k: { es: 'Lenguaje', en: 'Language' }, v: 'C#' }
    ],
    cover: 'goblins-life-cover.webp',
    video: 'rKNYijQHago',
    videoLabel: { es: 'Vídeo de gameplay', en: 'Gameplay video' },
    features: {
      es: [
        'Movimiento del personaje en tiempo real',
        'Sistema de combate con ataque',
        'Enemigos que se acercan y atacan automáticamente',
        'Sistema de experiencia y de niveles',
        'Misiones',
        'Jefe final: un conejo gigante y agresivo',
        'Entorno de campamento y bosque'
      ],
      en: [
        'Real-time character movement',
        'Combat system with attacks',
        'Enemies that approach and attack automatically',
        'Experience and level system',
        'Missions',
        'Final boss: a giant, aggressive rabbit',
        'Camp and forest environment'
      ]
    },
    unity: {
      es: ['Uso de NavMesh', 'Creación del mapa y del entorno', 'Uso de assets low-poly', 'Creación de la interfaz (UI)'],
      en: ['Use of NavMesh', 'Map and environment creation', 'Use of low-poly assets', 'User interface (UI) creation']
    },
    scripts: {
      es: ['Mecánicas de ataque', 'Movimiento del personaje', 'Salto', 'Sistema de experiencia (XP) y niveles', 'Interacción'],
      en: ['Attack mechanics', 'Character movement', 'Jump', 'Experience (XP) and level system', 'Interaction']
    },
    images: [
      { file: 'goblins-life-01.webp', w: 1545, h: 665, caption: { es: 'Entorno del campamento', en: 'Camp environment' } },
      { file: 'goblins-life-02.webp', w: 1545, h: 665, caption: { es: 'Campamento con vallado', en: 'Camp with fence' } }
    ]
  },

  'roll-a-ball': {
    title: 'Roll a Ball',
    category: { es: 'UNITY / EJERCICIO DE APRENDIZAJE', en: 'UNITY / LEARNING EXERCISE' },
    subtitle: { es: 'Un ejercicio de aprendizaje en Unity.', en: 'A Unity learning exercise.' },
    description: {
      es: 'Ejercicio básico realizado mientras aprendía los fundamentos de Unity. El vídeo muestra el proyecto en funcionamiento.',
      en: 'A basic exercise made while learning the fundamentals of Unity. The video shows the project in action.'
    },
    meta: [
      { k: { es: 'Motor', en: 'Engine' }, v: 'Unity' },
      { k: { es: 'Tipo', en: 'Type' }, v: { es: 'Ejercicio de aprendizaje', en: 'Learning exercise' } }
    ],
    cover: 'roll-a-ball-cover.webp',
    video: '3LtwoW9DPsw',
    videoLabel: { es: 'Vídeo del proyecto', en: 'Project video' },
    features: {
      es: ['Una introducción práctica a Unity', 'Control del jugador y jugabilidad básica', 'Un ejercicio centrado en aprender creando'],
      en: ['A practical introduction to Unity', 'Player control and basic gameplay', 'An exercise focused on learning by building']
    },
    unity: {
      es: ['Creación de la escena de juego', 'Uso de las físicas de Unity'],
      en: ['Game scene creation', 'Use of Unity physics']
    },
    scripts: { es: ['Reloj', 'Puntuación'], en: ['Clock', 'Score'] },
    images: [
      { file: 'roll-a-ball-01.webp', w: 1358, h: 830, caption: { es: 'Escena con la bola y las monedas', en: 'Scene with the ball and the coins' } },
      { file: 'roll-a-ball-02.webp', w: 1361, h: 827, caption: { es: 'Detalle de la moneda y la bola', en: 'Close-up of the coin and the ball' } }
    ]
  },

  'mapa': {
    title: { es: 'Proyecto Mapa', en: 'Map Project' },
    category: { es: 'UNITY / EJERCICIO DE APRENDIZAJE', en: 'UNITY / LEARNING EXERCISE' },
    subtitle: { es: 'Creando un entorno en Unity.', en: 'Building an environment in Unity.' },
    description: {
      es: 'Otro ejercicio básico de mi aprendizaje de Unity, centrado en crear y recorrer un mapa. El vídeo permite ver el resultado.',
      en: 'Another basic exercise from my Unity learning, focused on building and exploring a map. The video shows the result.'
    },
    meta: [
      { k: { es: 'Motor', en: 'Engine' }, v: 'Unity' },
      { k: { es: 'Tipo', en: 'Type' }, v: { es: 'Ejercicio de aprendizaje', en: 'Learning exercise' } }
    ],
    cover: 'mapa-02.webp',
    video: 'vVB4JJP6oBU',
    videoLabel: { es: 'Vídeo del proyecto', en: 'Project video' },
    features: {
      es: ['Creación y exploración de un mapa', 'Un ejercicio práctico de escenas en Unity', 'Un paso más en mi proceso de aprendizaje'],
      en: ['Map creation and exploration', 'A practical Unity scene exercise', 'One more step in my learning process']
    },
    unity: {
      es: ['Creación de un mapa o entorno', 'Colocación de assets en la escena'],
      en: ['Map or environment creation', 'Placing assets in the scene']
    },
    scripts: { es: [], en: [] },
    images: [
      { file: 'mapa-01.webp', w: 1545, h: 665, caption: { es: 'Casas y vegetación', en: 'Houses and vegetation' } },
      { file: 'mapa-02.webp', w: 1545, h: 665, caption: { es: 'Vista general del mapa', en: 'Map overview' } }
    ]
  }
};

const order = ['goblins-life', 'roll-a-ball', 'mapa'];

const dict = {
  es: {
    back: 'VOLVER AL PORTFOLIO', video: 'VÍDEO', features: 'CARACTERÍSTICAS',
    tech: 'COSAS TÉCNICAS', unity: 'UNITY', scripts: 'LÓGICA / SCRIPTS',
    gallery: 'GALERÍA', empty: 'Capturas próximamente', next: 'SIGUIENTE PROYECTO',
    footer: 'HECHO CON CURIOSIDAD.', close: 'Cerrar', langLabel: 'Switch to English',
    play: 'Reproducir vídeo', watch: 'VER EN YOUTUBE',
    localHint: 'Estás viendo la web como archivo local: YouTube no permite reproducir aquí, así que el vídeo se abre en YouTube. Una vez publicada la web (o con Live Server) se reproducirá dentro de la página.'
  },
  en: {
    back: 'BACK TO PORTFOLIO', video: 'VIDEO', features: 'FEATURES',
    tech: 'TECHNICAL DETAILS', unity: 'UNITY', scripts: 'LOGIC / SCRIPTS',
    gallery: 'GALLERY', empty: 'Screenshots coming soon', next: 'NEXT PROJECT',
    footer: 'MADE WITH CURIOSITY.', close: 'Close', langLabel: 'Cambiar a español',
    play: 'Play video', watch: 'WATCH ON YOUTUBE',
    localHint: 'You are viewing the site as a local file: YouTube does not allow playback here, so the video opens on YouTube. Once the site is published (or with Live Server) it will play inside the page.'
  }
};

const key = document.body.dataset.project;
const project = projects[key];
let lang = Lang.get();

const $ = selector => document.querySelector(selector);
const text = (value, language) => (typeof value === 'string' ? value : value[language]);
const setText = (selector, value) => { const el = $(selector); if (el) el.textContent = value; };
const listHtml = items => items.map(item => `<li>${item}</li>`).join('');

function render(language) {
  lang = language;
  Lang.set(language);
  const d = dict[language];
  const title = text(project.title, language);

  document.documentElement.lang = language;
  document.title = `${title} — Guillem`;
  const toggle = $('.lang-toggle');
  toggle.textContent = language === 'es' ? 'EN' : 'ES';
  toggle.setAttribute('aria-label', d.langLabel);

  setText('.back-link', '← ' + d.back);
  setText('.project-category', project.category[language]);
  setText('.project-title', title);
  setText('.project-subtitle', project.subtitle[language]);
  setText('.project-description', project.description[language]);
  setText('.video-label', d.video);
  setText('.video-heading', project.videoLabel[language]);
  setText('.features-label', d.features);
  setText('.tech-label', d.tech);
  setText('.gallery-label', d.gallery);
  setText('.footer-label', d.footer);
  $('.feature-list').innerHTML = listHtml(project.features[language]);

  const note = $('.project-note');
  note.hidden = !project.note;
  if (project.note) note.textContent = project.note[language];

  const cover = $('.project-cover');
  cover.hidden = !project.cover;
  if (project.cover) {
    const img = cover.querySelector('img');
    img.src = 'assets/projects/' + project.cover;
    img.alt = title;
  }

  $('.project-meta').innerHTML = project.meta
    .map(m => `<div><dt>${m.k[language]}</dt><dd>${text(m.v, language)}</dd></div>`).join('');

  const d2 = dict[language];
  const poster = $('.video-poster');
  poster.setAttribute('aria-label', `${d2.play}: ${title}`);
  const posterImg = poster.querySelector('img');
  if (project.cover) { posterImg.src = 'assets/projects/' + project.cover; posterImg.hidden = false; } else { posterImg.hidden = true; }
  const link = $('.video-link');
  link.href = watchUrl();
  link.textContent = d2.watch + ' ↗';
  const hint = $('.video-hint');
  if (!hint.hidden) hint.textContent = d2.localHint;
  const frame = $('.video-frame iframe');
  if (frame) frame.title = `${title} — ${project.videoLabel[language]}`;

  const columns = [
    { label: d.unity, items: project.unity[language] },
    { label: d.scripts, items: project.scripts[language] }
  ].filter(c => c.items.length);
  $('.tech-grid').innerHTML = columns
    .map(c => `<div class="tech-col"><h3>${c.label}</h3><ul>${listHtml(c.items)}</ul></div>`).join('');

  const gallery = $('.project-gallery');
  const empty = $('.gallery-empty');
  gallery.hidden = project.images.length === 0;
  empty.hidden = project.images.length > 0;
  empty.textContent = d.empty;
  gallery.innerHTML = project.images.map((image, i) => {
    const caption = image.caption[language];
    const alt = `${title} — ${caption}`;
    return `<figure><button type="button" data-index="${i}" aria-label="${alt}" style="aspect-ratio:${image.w}/${image.h}">
      <img src="assets/projects/${image.file}" width="${image.w}" height="${image.h}" alt="${alt}" loading="lazy" decoding="async">
      </button><figcaption>0${i + 1} · ${caption}</figcaption></figure>`;
  }).join('');

  const next = projects[order[(order.indexOf(key) + 1) % order.length]];
  const nextLink = $('.next-project');
  nextLink.href = `project-${order[(order.indexOf(key) + 1) % order.length]}.html`;
  nextLink.querySelector('small').textContent = d.next;
  nextLink.querySelector('strong').textContent = text(next.title, language);
  $('.lightbox-close').setAttribute('aria-label', d.close);
}

/* Video: the poster loads the YouTube player on click.
   YouTube refuses to play embedded videos on pages opened as local files
   (file://, error 153), so in that case the video opens on YouTube instead. */
function watchUrl() { return `https://www.youtube.com/watch?v=${project.video}`; }
$('.video-poster').addEventListener('click', () => {
  if (location.protocol === 'file:') {
    window.open(watchUrl(), '_blank', 'noopener');
    const hint = $('.video-hint');
    hint.hidden = false;
    hint.textContent = dict[lang].localHint;
    return;
  }
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${project.video}?autoplay=1&rel=0&hl=${lang}`;
  iframe.title = `${text(project.title, lang)} — ${project.videoLabel[lang]}`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  $('.video-frame').replaceChildren(iframe);
});

/* Lightbox for the screenshot gallery */
const lightbox = $('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeLightbox = () => { lightbox.classList.remove('open'); lightbox.hidden = true; };
$('.project-gallery').addEventListener('click', event => {
  const button = event.target.closest('button[data-index]');
  if (!button) return;
  const img = button.querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.hidden = false;
  lightbox.classList.add('open');
});
lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

$('.lang-toggle').addEventListener('click', () => render(lang === 'es' ? 'en' : 'es'));
render(lang);
