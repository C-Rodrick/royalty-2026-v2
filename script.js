/* ============================================================
   EDIT THIS BLOCK: couple names, date, and RSVP delivery.
   ============================================================ */
const CONFIG = {
  bride: 'Joyce',                       // first name shown big on the front page
  groom: 'Nervis',
  brideFull: 'Asobo Joyce',             // full name shown on the couple cards
  groomFull: 'Nzometiah Nervis',
  date: '2026-12-05T23:59:00+01:00',    // the countdown ends at the end of the reception on Saturday 5 December (Cameroon is UTC+1)
  dateLabel: '3rd to 5th December 2026', // shown under the names and in the footer areas
  rsvpBy: 'November 30th',                           // e.g. 'December 1st'
  whatsapp: '237679999763',                         // couple's number, digits only with country code, e.g. '237674139843'
  mediaBase: 'https://pub-d11b5bf2bc21485baa1db76585b4858d.r2.dev',                        // where the song, HD photos and ZIP are served from, e.g. 'https://media.royalty2026.com' (empty = this site)
  musicSrc: 'audio/god-made-you-for-me.mp3', // background music, starts only when a guest taps the music button (leave empty to hide the button)
  netlifyForms: true,                   // RSVPs are collected by Netlify Forms (set the email notification in the Netlify dashboard)
  formEndpoint: 'https://script.google.com/macros/s/AKfycbzmbXi90ok2CP2RngkNGkavS81rZnWmAvYXgL5tEPrfw_wDG74eKLmVzXGUqtgm_kvb2Q/exec',                     // Google Sheet: the Apps Script web app URL (.../exec); RSVPs are added as a row (see Royalty-2026-RSVP-Sheet.gs)
  maps: {                               // Google Maps links (search links; replace with exact pins if you like)
    civil: 'https://maps.app.goo.gl/LkFFyQPdQ3zPioJg6',
    traditional: 'https://maps.app.goo.gl/w6NHTaJ5eSJp7W6p8',
    church: 'https://maps.app.goo.gl/JcwbXcm4JgwqN9KT6',
    reception: 'https://maps.app.goo.gl/6rcrVjJtYvqTNshCA'
  },
  events: [                             // used by the Add to calendar button
    { name: 'Civil wedding', start: '2026-12-03T09:00:00+01:00', hours: 2, where: 'Buea Council, Buea' },
    { name: 'Traditional wedding', start: '2026-12-03T17:00:00+01:00', hours: 5, where: 'Mini Coquette, Bonduma, Buea' },
    { name: 'Church wedding', start: '2026-12-05T11:00:00+01:00', hours: 4, where: 'LoveWorld Arena, Christ Embassy, Mayor Street, Buea' },
    { name: 'Reception', start: '2026-12-05T17:00:00+01:00', hours: 5, where: 'Auntie Kate Banquet Hall, CARITAS (Diocese of Buea) Building, Pastoral Centre, behind Buea Cathedral, Buea' }
  ]
};

const FR = {"The Couple": "Le couple", "The Wedding": "Le mariage", "Our Story": "Notre histoire", "Royal Entourage": "Cortège royal", "Guest Info": "Infos invités", "Gifts": "Cadeaux", "The wedding of": "Le mariage de", "Two lives. One union. A legacy beginning.": "Deux vies. Une union. Un héritage qui commence.", "Days": "Jours", "Hours": "Heures", "Minutes": "Minutes", "Seconds": "Secondes", "Until we become one": "Jusqu’à ce que nous ne fassions plus qu’un", "Explore the wedding": "Découvrir le mariage", "The royal celebration has begun": "La célébration royale a commencé", "3rd to 5th December 2026": "Du 3 au 5 décembre 2026", "November 30th": "30 novembre", "Two lives": "Deux vies", "One union": "Une union", "A legacy beginning": "Un héritage qui commence", "Meet the couple": "Rencontrez le couple", "The Royal Couple": "Le couple royal", "The Groom": "Le marié", "The Bride": "La mariée", "Nzometiah Nervis is an innovator and technology entrepreneur with a passion for making frontier technologies & STEM education accessible for children and young people. As CEO of Nervtek, and through regular consultancies for government, national agencies, and international organisations such as GIZ, UNDP, and UNICEF, he turns that passion into reality.": "Nzometiah Nervis est un innovateur et un entrepreneur technologique passionné par l’accès des enfants et des jeunes aux technologies de pointe et à l’éducation STEM. En tant que PDG de Nervtek, et à travers des missions de conseil régulières pour le gouvernement, des agences nationales et des organisations internationales comme la GIZ, le PNUD et l’UNICEF, il transforme cette passion en réalité.", "“Joicy is my treasure, my Joy--ce, a Gem, and a special gift from God. Beyond our relationship, we are actively building the vision of Nervtek together, where she serves as the Education Director.”": "« Joicy est mon trésor, ma joie (Joy--ce), un joyau et un cadeau spécial de Dieu. Au-delà de notre relation, nous construisons ensemble la vision de Nervtek, où elle occupe le poste de directrice de l’éducation. »", "A Computer Engineer, Data Scientist and a STEM Educator at Nervtek. She loves music, children and impacting others through service.": "Ingénieure informatique, data scientist et éducatrice STEM chez Nervtek. Elle aime la musique, les enfants et avoir un impact sur les autres par le service.", "“Nervis is my safe space, my surest padi, my perfect fit, and the one specially made for me.”": "« Nervis est mon refuge, mon plus sûr « padi », ma moitié parfaite, celui qui a été fait spécialement pour moi. »", "How we met": "Notre rencontre", "Nervis was a speaker at the GICS Meetup, and Joyce threw a question at him during the Q/A. The rest is history.": "Nervis était conférencier au GICS Meetup, et Joyce lui a posé une question pendant les échanges. La suite appartient à l’histoire.", "The first date": "Le premier rendez-vous", "We went out to a restaurant to eat and discuss.": "Nous sommes allés au restaurant pour manger et discuter.", "When we knew": "Quand nous avons su", "He officially proposed.": "Il a fait sa demande officielle.", "The proposal": "La demande", "He came to see her pastors and presented her to his own before any further step was taken.": "Il est venu voir ses pasteurs et l’a présentée aux siens avant que toute autre étape ne soit franchie.", "Two stories become one. Join us as we begin our legacy.": "Deux histoires n’en font plus qu’une. Rejoignez-nous au début de notre héritage.", "“Our greatest adventure begins here.”": "« Notre plus belle aventure commence ici. »", "You are invited to": "Vous êtes invités à", "The Royal Celebration": "La célébration royale", "Civil Wedding": "Mariage civil", "Traditional Wedding": "Mariage traditionnel", "Church Wedding": "Mariage religieux", "Reception": "Réception", "Date": "Date", "Time": "Heure", "Venue": "Lieu", "Attire": "Tenue", "Arrival": "Arrivée", "Thursday 3 December 2026": "Jeudi 3 décembre 2026", "Saturday 5 December 2026": "Samedi 5 décembre 2026", "Saturday 5 December 2026 (after the church wedding)": "Samedi 5 décembre 2026 (après le mariage religieux)", "9:00 am, prompt": "9 h 00, à l’heure", "11:00 am, prompt": "11 h 00, à l’heure", "5:00 pm": "17 h 00", "Buea Council, Buea": "Buea Council (mairie), Buea", "Auntie Kate Banquet Hall, CARITAS (Diocese of Buea) Building, Pastoral Centre, behind Buea Cathedral (about 500 m from Checkpoint)": "Auntie Kate Banquet Hall, bâtiment CARITAS (diocèse de Buea), Centre pastoral, derrière la cathédrale de Buea (à environ 500 m de Checkpoint)", "Decent formal fits": "Tenues formelles décentes", "Any traditional attire (Ndop, Toghu, Ankara)": "Toute tenue traditionnelle (Ndop, Toghu, Ankara)", "Ivory, Champagne Gold, Teal or White": "Ivoire, or champagne, bleu sarcelle ou blanc", "Gold, White, Turquoise Blue or Teal": "Or, blanc, bleu turquoise ou bleu sarcelle", "View location": "Voir le lieu", "Get directions": "Obtenir l’itinéraire", "Add to calendar": "Ajouter au calendrier", "The Wedding Days": "Les jours du mariage", "Thursday 3 December": "Jeudi 3 décembre", "Saturday 5 December": "Samedi 5 décembre", "Civil wedding · Buea Council (9 am prompt)": "Mariage civil · Buea Council (9 h, à l’heure)", "Traditional wedding · Mini Coquette, Bonduma (arrival 5 pm)": "Mariage traditionnel · Mini Coquette, Bonduma (arrivée 17 h)", "Church wedding · LoveWorld Arena, Christ Embassy (11 am prompt)": "Mariage religieux · LoveWorld Arena, Christ Embassy (11 h, à l’heure)", "Reception · Auntie Kate Banquet Hall (arrival 5 pm)": "Réception · Auntie Kate Banquet Hall (arrivée 17 h)", "Dress with us": "Habillez-vous avec nous", "The Royal Dress Code": "Le code vestimentaire royal", "Decent formal fits.": "Tenues formelles décentes.", "Any traditional attire: Ndop, Toghu or Ankara.": "Toute tenue traditionnelle : Ndop, Toghu ou Ankara.", "Ivory": "Ivoire", "Champagne Gold": "Or champagne", "Teal": "Bleu sarcelle", "White": "Blanc", "Gold": "Or", "Turquoise Blue": "Bleu turquoise", "One palette for ladies and gentlemen alike.": "Une seule palette pour les dames comme pour les messieurs.", "How we met · 24th of May 2021 at GICS Meetup": "Notre rencontre · 24 mai 2021 au GICS Meetup", "The first date · 2024": "Le premier rendez-vous · 2024", "When we knew · 2024": "Quand nous avons su · 2024", "The proposal · 2024": "La demande · 2024", "Heritage": "Héritage", "Noir": "Noir", "Velvet": "Velours", "Joy": "Joie", "Nervis was a speaker at the GICS Meetup, and during the Q/A session, Joyce threw a question at Nervis, which intrigued him. He followed up about her through her friend, who was the leader of the group, and thereafter the rest is history.": "Nervis était conférencier au GICS Meetup et, pendant la séance de questions-réponses, Joyce lui a posé une question qui l’a intrigué. Il s’est renseigné sur elle auprès de son amie, responsable du groupe, et la suite appartient à l’histoire.", "He had to come and see her pastors and also present her to his pastors before any further step was taken.": "Il a dû venir voir ses pasteurs et la présenter aux siens avant que toute autre étape ne soit franchie.", "The photographs": "Les photographies", "Take them home": "Emportez-les", "Download all photos in HD (ZIP)": "Télécharger toutes les photos en HD (ZIP)", "12 photographs · about 3 MB · HD, up to 2400 px on the long side · or tap the arrow on any photo to save it on its own": "12 photographies · environ 3 Mo · HD, jusqu’à 2 400 px sur le grand côté · ou touchez la flèche sur une photo pour l’enregistrer seule", "Standing with us": "À nos côtés", "The Royal Entourage": "Le cortège royal", "Maid of Honour": "Première demoiselle d’honneur", "Best Man": "Témoin du marié", "Bridesmaids": "Demoiselles d’honneur", "Bridesmaid": "Demoiselle d’honneur", "Spray Girl": "Spray Girl", "Groomsmen": "Garçons d’honneur", "Groomsman": "Garçon d’honneur", "Everything you need": "Tout ce qu’il faut savoir", "Guest Information": "Informations pour les invités", "Travel & accommodation": "Déplacement et hébergement", "Getting there:": "Pour s’y rendre :", "look for these landmarks near each venue.": "repérez ces points de repère près de chaque lieu.", "Civil wedding:": "Mariage civil :", "Mt. Mary hospital entrance": "Entrée de l’hôpital Mt. Mary", "Traditional wedding:": "Mariage traditionnel :", "Church wedding:": "Mariage religieux :", "Reception:": "Réception :", "Checkpoint / Co-Cathedral": "Checkpoint / Co-Cathédrale", "Hotels nearby:": "Hôtels à proximité :", "To be shared soon.": "À communiquer prochainement.", "Transport & parking:": "Transport et stationnement :", "Gifts & registry": "Cadeaux et liste", "Your presence is our greatest gift.": "Votre présence est notre plus beau cadeau.", "Do you want to give the couple a gift of your choice? A guide from the couple is available: please choose from the": "Souhaitez-vous offrir un cadeau au couple ? Un guide du couple est disponible : veuillez choisir dans la", "gift list": "liste de cadeaux", "below, so the same gift is not given twice.": "ci-dessous, afin que le même cadeau ne soit pas offert deux fois.", "Account details for Mobile Money and bank transfer are in the": "Les coordonnées Mobile Money et bancaires se trouvent dans la", "gifts section": "section cadeaux", "just below.": "juste en dessous.", "Questions?": "Des questions ?", "Please call or message": "Appelez ou écrivez au", "or": "ou", "What time should I arrive?": "À quelle heure dois-je arriver ?", "Please arrive 30 minutes before each ceremony so we can begin on time.": "Merci d’arriver 30 minutes avant chaque cérémonie afin que nous puissions commencer à l’heure.", "Can I bring a guest?": "Puis-je venir accompagné(e) ?", "Just one.": "Une seule personne.", "Are children invited?": "Les enfants sont-ils invités ?", "Yes, children are welcome.": "Oui, les enfants sont les bienvenus.", "Is photography allowed?": "La photographie est-elle autorisée ?", "Yes, guests are welcome to take photographs.": "Oui, les invités peuvent prendre des photos.", "Is the invitation transferable?": "L’invitation est-elle transférable ?", "No, the invitation is not transferable.": "Non, l’invitation n’est pas transférable.", "With gratitude": "Avec gratitude", "Your presence is our greatest gift": "Votre présence est notre plus beau cadeau", "For those who wish to bless us further, you can send a gift to any of the accounts below. Thank you for your love and your generosity.": "Pour ceux qui souhaitent nous bénir davantage, vous pouvez envoyer un cadeau sur l’un des comptes ci-dessous. Merci pour votre amour et votre générosité.", "Account name": "Nom du compte", "Number": "Numéro", "To be provided soon": "À communiquer prochainement", "Bank transfer": "Virement bancaire", "Bank": "Banque", "Account number": "Numéro de compte", "IBAN (international guests)": "IBAN (invités internationaux)", "The couple's gift list": "La liste de cadeaux du couple", "Choose one item and tell us, so the same gift is not given twice.": "Choisissez un article et dites-le-nous, afin que le même cadeau ne soit pas offert deux fois.", "I will give this": "Je l’offre", "Washing machine (10 kg)": "Machine à laver (10 kg)", "Deep freezer": "Congélateur coffre", "Juicer": "Centrifugeuse", "An LG, Toshiba or Samsung smart TV (55 to 65 inches)": "Une télévision connectée LG, Toshiba ou Samsung (55 à 65 pouces)", "A multifunctional food processor (e.g. Buchymix multi processor)": "Un robot multifonction (p. ex. Buchymix)", "A microwave oven": "Un four à micro-ondes", "A dining set": "Un ensemble de salle à manger", "Pressure pot": "Une cocotte-minute", "Customised hoodies": "Sweats à capuche personnalisés", "A cookware set": "Une batterie de cuisine", "Air fryer": "Friteuse à air", "A blender": "Un mixeur", "A kitchen spice storage rack (spice storage containers)": "Un range-épices de cuisine (pots à épices)", "A stand mixer": "Un robot pâtissier", "A water dispenser": "Une fontaine à eau", "Vacuum cleaner": "Aspirateur", "Please add your name as the reference so we can thank you personally. Only send gifts to the accounts shown on this page.": "Merci d’indiquer votre nom en référence afin que nous puissions vous remercier personnellement. N’envoyez des cadeaux qu’aux comptes indiqués sur cette page.", "Reply by": "Répondre avant le", "the date on your invitation": "la date indiquée sur votre invitation", "Will you join us?": "Serez-vous des nôtres ?", "Leave this empty": "Laissez ce champ vide", "Full name": "Nom complet", "Phone or email": "Téléphone ou e-mail", "Will you attend?": "Serez-vous présent(e) ?", "Yes, with pleasure": "Oui, avec plaisir", "Regretfully, no": "Malheureusement, non", "A blessing for the couple": "Une bénédiction pour le couple", "Leave a message for the happy couple": "Laissez un message pour les heureux mariés", "Send RSVP": "Envoyer ma réponse", "Please add your name and a phone or email.": "Merci d’indiquer votre nom et un téléphone ou e-mail.", "Thank you for being part of our Royalty. ": "Merci de faire partie de notre Royalty. ", "Something went wrong. Please try again or message us on WhatsApp.": "Une erreur est survenue. Veuillez réessayer ou nous écrire sur WhatsApp.", "Something went wrong. Please try again.": "Une erreur est survenue. Veuillez réessayer.", "Sending your reply…": "Envoi de votre réponse…", "Thank you for being part of Royalty 2026": "Merci de faire partie de Royalty 2026", "Two lives. Two stories.": "Deux vies. Deux histoires.", "One love. One forever.": "Un amour. Un pour toujours.", "RSVP now": "Répondre maintenant", "Royalty 2026 · Brand identity & website by Chimban Rodrick": "Royalty 2026 · Identité de marque et site web par Chimban Rodrick", "Download": "Télécharger", "Royalty 2026 home": "Accueil Royalty 2026", "Main": "Principal", "Download this photo": "Télécharger cette photo", "Download photo": "Télécharger la photo", "Play music": "Lancer la musique", "Stop music": "Arrêter la musique", "Close": "Fermer", "Previous": "Précédent", "Next": "Suivant", "Royalty 2026 emblem": "Emblème Royalty 2026", "24th of May 2021 at GICS Meetup": "24 mai 2021 au GICS Meetup", "Copy": "Copier", "Copied": "Copié", "Copied: ": "Copié : ", "Press Ctrl+C to copy": "Appuyez sur Ctrl+C pour copier", "Downloads work once the site is online. For now, right-click the photo and choose Save image as.": "Les téléchargements fonctionnent une fois le site en ligne. Pour l’instant, faites un clic droit sur la photo et choisissez « Enregistrer l’image sous ».", "Downloading ": "Téléchargement de ", "Hello, I would like to give: ": "Bonjour, je souhaite offrir : ", "The couple, close and smiling": "Le couple, proches et souriants", "The groom seated in white": "Le marié assis, en blanc", "The bride seated in a coral robe": "La mariée assise, en robe corail", "The couple, close portrait": "Le couple, portrait rapproché", "The bride seated on the sofa in peach": "La mariée assise sur le canapé, en pêche", "The couple at an event": "Le couple lors d’un événement", "The couple smiling together": "Le couple souriant ensemble", "The couple with an award": "Le couple avec une récompense", "The couple in peach and white": "Le couple en pêche et blanc", "The couple in peach and white, full length": "Le couple en pêche et blanc, en pied"};
let LANG = 'en';
try { const sv = localStorage.getItem('royalty-lang'); if (sv === 'fr' || sv === 'en') LANG = sv; } catch (e) {}
const tr = s => (LANG === 'fr' && FR[s]) || s;

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const media = p => (CONFIG.mediaBase ? CONFIG.mediaBase.replace(/\/$/, '') + '/' : '') + p;
$$('a[href^="downloads/"]').forEach(a => a.setAttribute('href', media(a.getAttribute('href'))));
const when = new Date(CONFIG.date);
const dateLong = isNaN(when) ? '' : when.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

/* bind names and date */
$$('[data-bind]').forEach(el => {
  const k = el.dataset.bind;
  const v = k === 'dateLong' ? (CONFIG.dateLabel || dateLong) : CONFIG[k];
  if (v) el.textContent = v;
});
document.title = `${CONFIG.bride} & ${CONFIG.groom} · Royalty 2026`;

/* nav */
const nav = $('#nav'), toggle = $('#navToggle'), links = $('#navLinks');
const onScroll = () => nav.classList.toggle('solid', scrollY > 60);
onScroll(); addEventListener('scroll', onScroll, { passive: true });
const setMenu = open => {
  links.classList.toggle('open', open); nav.classList.toggle('menu-open', open); document.body.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : '';
};
toggle.addEventListener('click', e => { e.stopPropagation(); setMenu(!links.classList.contains('open')); });
links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('click', e => { if (links.classList.contains('open') && !e.target.closest('#navLinks, #navToggle')) setMenu(false); });
addEventListener('keydown', e => { if (e.key === 'Escape' && links.classList.contains('open')) setMenu(false); });
addEventListener('resize', () => { if (innerWidth > 760 && links.classList.contains('open')) setMenu(false); });

/* countdown */
const pad = n => String(n).padStart(2, '0');
function tick() {
  const diff = when - Date.now();
  if (isNaN(diff)) return;
  if (diff <= 0) {
    $('#countdown').hidden = true;
    $('#cdNote').textContent = tr('The royal celebration has begun');
    return clearInterval(timer);
  }
  [['#cdD', Math.floor(diff / 864e5)], ['#cdH', Math.floor(diff / 36e5) % 24], ['#cdM', Math.floor(diff / 6e4) % 60], ['#cdS', Math.floor(diff / 1e3) % 60]].forEach(([s, v]) => {
    const el = $(s), t = pad(v);
    if (el.textContent !== t) { el.textContent = t; el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip'); }
  });
}
const timer = setInterval(tick, 1000); tick();

/* scroll reveal, staggered among siblings */
$$('.events,.party,.masonry,.schedule,.dress,.couple').forEach(p => [...p.children].forEach((c, i) => c.style.setProperty('--i', i % 8)));
$$('.masonry .g').forEach(g => g.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.reveal,.head').forEach(el => io.observe(el));
} else $$('.reveal,.head').forEach(el => el.classList.add('in'));

/* gold sparkle (every .sparkle canvas) */
$$('.sparkle').forEach(c => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = c.getContext('2d'); let w, h, ps = [], on = true;
  const spawn = () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2 + .4, v: Math.random() * .45 + .1, a: Math.random() * 6.28, d: (Math.random() - .5) * .3 });
  const size = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; ps = Array.from({ length: Math.round(w / 14) }, spawn); };
  size(); addEventListener('resize', size);
  new IntersectionObserver(e => on = e[0].isIntersecting).observe(c);
  (function loop() {
    if (on) {
      x.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.v; p.x += p.d; p.a += .035; if (p.y < -6) { p.y = h + 6; p.x = Math.random() * w; }
        const o = .2 + .7 * Math.abs(Math.sin(p.a)); x.globalAlpha = o; x.fillStyle = '#e8d6a6';
        x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill();
        if (p.r > 1.7) { x.globalAlpha = o * .6; x.fillRect(p.x - p.r * 2.5, p.y - .4, p.r * 5, .8); x.fillRect(p.x - .4, p.y - p.r * 2.5, .8, p.r * 5); }
      }
    }
    requestAnimationFrame(loop);
  })();
});

/* gallery filter + lightbox */
const tiles = $$('.g');
$$('.filters button').forEach(b => b.addEventListener('click', () => {
  $$('.filters button').forEach(x => x.classList.toggle('on', x === b));
  tiles.forEach(t => t.parentElement.classList.toggle('hide', b.dataset.f !== 'all' && t.dataset.c !== b.dataset.f));
}));
const lb = $('#lb'), lbImg = $('#lbImg'); let cur = 0;
const visible = () => tiles.filter(t => !t.parentElement.classList.contains('hide'));
function show(i) {
  const v = visible(); cur = (i + v.length) % v.length;
  lbImg.src = `img/${v[cur].dataset.i}-1800.webp`; lbImg.alt = $('img', v[cur]).alt;
  const dl = $('#lbDl'), id = v[cur].dataset.i; dl.href = media(`downloads/Royalty-2026-${id}.jpg`); dl.setAttribute('download', `Royalty-2026-${id}.jpg`);
}
tiles.forEach(t => t.addEventListener('click', () => { lb.hidden = false; show(visible().indexOf(t)); document.body.style.overflow = 'hidden'; }));
const close = () => { lb.hidden = true; document.body.style.overflow = ''; };
$('.lb__x').onclick = close; $('.lb__p').onclick = () => show(cur - 1); $('.lb__n').onclick = () => show(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) close(); });
addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1);
});

/* venue map links */
$$('[data-map]').forEach(a => {
  const u = CONFIG.maps[a.dataset.map];
  if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; }
  else a.addEventListener('click', e => e.preventDefault()), a.setAttribute('aria-disabled', 'true'), a.style.opacity = .5;
});

/* add to calendar (.ics): one entry for each event */
$('#addCal').addEventListener('click', () => {
  const f = d => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
  const body = CONFIG.events.map(e => {
    const s = new Date(e.start);
    return ['BEGIN:VEVENT', `UID:royalty2026-${+s}@royalty`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(s)}`, `DTEND:${f(new Date(+s + e.hours * 36e5))}`,
      `SUMMARY:${e.name}: ${CONFIG.bride} & ${CONFIG.groom} (Royalty 2026)`, `LOCATION:${e.where.replace(/,/g, '\\,')}`, 'DESCRIPTION:Join us for the royal celebration.', 'END:VEVENT'].join('\r\n');
  });
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Royalty 2026//EN', ...body, 'END:VCALENDAR'].join('\r\n');
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })), download: 'royalty-2026.ics' });
  a.click(); URL.revokeObjectURL(a.href);
});

/* RSVP: the emblem turns while the reply is saved (so nobody sends twice), then a pop-up thanks the guest */
(function () {
  const f = $('#rsvpForm'), pop = $('#thanks'), msg = $('#thanksMsg'), closeBtn = $('#thanksClose'), st = $('#rsvpStatus');
  const btn = f.querySelector('button[type=submit]');
  let busy = false, canClose = false, lastFocus = null;
  const show = (text, done) => {
    msg.textContent = tr(text);
    pop.classList.toggle('done', !!done);
    closeBtn.hidden = !done; canClose = !!done;
    if (done) closeBtn.focus();
  };
  const hide = () => { if (!canClose) return; pop.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); };
  closeBtn.addEventListener('click', hide);
  pop.addEventListener('click', e => { if (e.target === pop) hide(); });
  addEventListener('keydown', e => { if (!pop.hidden && e.key === 'Escape') hide(); });

  f.addEventListener('submit', e => {
    e.preventDefault();
    st.className = 'form__status';
    if (busy) return;
    if (!f.elements.name.value.trim() || !f.elements.contact.value.trim()) { st.textContent = tr('Please add your name and a phone or email.'); st.classList.add('err'); return; }
    const d = Object.fromEntries(new FormData(f));
    const payload = JSON.stringify({ ...d, lang: LANG });
    const encoded = new URLSearchParams(new FormData(f)).toString();
    const sends = [];
    if (CONFIG.formEndpoint) sends.push(fetch(CONFIG.formEndpoint, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: payload })
      .then(r => r.ok ? r.json().then(x => x.ok !== false, () => true) : false));
    if (CONFIG.netlifyForms && location.protocol !== 'file:') sends.push(fetch('/', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encoded }).then(r => r.ok));
    if (!sends.length) { st.textContent = tr('Something went wrong. Please try again.'); st.classList.add('err'); return; }
    busy = true; if (btn) btn.disabled = true; st.textContent = '';
    lastFocus = document.activeElement;
    pop.hidden = false; document.body.style.overflow = 'hidden';
    show('Sending your reply…', false);
    const minWait = new Promise(r => setTimeout(r, 1600));       /* long enough to see the emblem turn */
    Promise.all([Promise.all(sends.map(p => p.catch(() => false))), minWait]).then(([res]) => {
      busy = false; if (btn) btn.disabled = false;
      if (res.some(Boolean)) { f.reset(); show('Thank you for being part of Royalty 2026', true); }
      else show('Something went wrong. Please try again.', true);   /* the form keeps what they typed */
    });
  });
})();


/* parallax, progress bar, timeline draw, gallery tilt */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bar = $('#progress'), seal = $('.hero__seal'), photo = $('.hero__photo'), band = $('.band'), tl = $('.timeline');
  let ticking = false;
  const frame = () => {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    $$('.reveal:not(.in),.head:not(.in)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight * .92) el.classList.add('in'); });
    if (y < innerHeight * 1.2) {
      if (photo) photo.style.marginTop = `${y * .08}px`;
      if (seal) seal.style.marginTop = `${y * .15}px`;
    }
    if (band) { const r = band.getBoundingClientRect(); band.style.setProperty('--py', `${(r.top - innerHeight / 2) * -.12}px`); }
    if (tl) { const r = tl.getBoundingClientRect(); tl.style.setProperty('--tl', Math.min(1, Math.max(0, (innerHeight * .7 - r.top) / r.height))); }
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  frame();
  if (matchMedia('(hover:hover)').matches) tiles.forEach(t => {
    t.addEventListener('mousemove', e => { const r = t.getBoundingClientRect(); t.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - .5) * 8}deg`); t.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - .5) * -8}deg`); });
    t.addEventListener('mouseleave', () => { t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg'); });
  });
})();

/* photo downloads: force a real file download instead of opening the image */
(function () {
  const toast = msg => {
    let t = $('#toast');
    if (!t) { t = Object.assign(document.createElement('div'), { id: 'toast', role: 'status' }); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 3600);
  };
  document.addEventListener('click', async e => {
    const a = e.target.closest('a.dl, #lbDl');
    if (!a) return;
    if (location.protocol === 'file:') { toast(tr('Downloads work once the site is online. For now, right-click the photo and choose Save image as.')); e.preventDefault(); return; }
    e.preventDefault();
    const name = a.getAttribute('download') || a.getAttribute('href').split('/').pop();
    toast(tr('Downloading ') + name + '…');
    try {
      const r = await fetch(a.href); if (!r.ok) throw 0;
      const url = URL.createObjectURL(await r.blob());
      const l = Object.assign(document.createElement('a'), { href: url, download: name });
      document.body.appendChild(l); l.click(); l.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
    } catch { location.href = a.href; }
  });
})();


/* lazy backgrounds + fade-in for photos (keeps first load light) */
(function () {
  document.documentElement.classList.add('js');
  $$('.g img').forEach(i => { const done = () => i.classList.add('ld'); (i.complete && i.naturalWidth) ? done() : (i.addEventListener('load', done, { once: true }), i.addEventListener('error', done, { once: true })); });
  const bgs = $$('[data-bg]');
  const load = el => { const u = el.dataset.bg; const im = new Image(); im.onload = () => { el.style.setProperty('--img', `url(${u})`); el.style.backgroundImage = `url(${u})`; el.classList.add('bg-in'); }; im.src = u; };
  if ('IntersectionObserver' in window) { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { load(e.target); io.unobserve(e.target); } }), { rootMargin: '700px 0px' }); bgs.forEach(b => io.observe(b)); }
  else bgs.forEach(load);
  /* warm the lightbox neighbours */
  const warm = i => { const v = visible(); [1, -1].forEach(d => { const t = v[(i + d + v.length) % v.length]; if (t) new Image().src = `img/${t.dataset.i}-1800.webp`; }); };
  const _show = show; show = function (i) { _show(i); warm(cur); };
})();


/* copy buttons for account numbers */
(function () {
  const say = msg => {
    let t = $('#toast');
    if (!t) { t = Object.assign(document.createElement('div'), { id: 'toast', role: 'status' }); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2400);
  };
  $$('[data-copy]').forEach(dd => {
    const b = Object.assign(document.createElement('button'), { type: 'button', className: 'copy', textContent: tr('Copy') });
    b.setAttribute('aria-label', 'Copy ' + dd.closest('div').querySelector('dt').textContent);
    dd.appendChild(b);
    b.addEventListener('click', async () => {
      const text = dd.firstChild.textContent.trim();
      try { await navigator.clipboard.writeText(text); }
      catch { const r = document.createRange(); r.selectNodeContents(dd); getSelection().removeAllRanges(); getSelection().addRange(r); say(tr('Press Ctrl+C to copy')); return; }
      b.textContent = tr('Copied'); b.classList.add('done'); say(tr('Copied: ') + text);
      setTimeout(() => { b.textContent = tr('Copy'); b.classList.remove('done'); }, 1800);
    });
  });
})();


/* gift list: "I will give this" opens WhatsApp with the chosen item */
(function () {
  $$('[data-gift]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    if (!CONFIG.whatsapp) return;
    const key = a.dataset.gift;
    const item = (LANG === 'fr' && FR[key]) || key;
    open('https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(tr('Hello, I would like to give: ') + item), '_blank', 'noopener');
  }));
})();


/* background music: starts only when a guest taps the note */
(function () {
  const b = $('#musicBtn'), au = $('#bgm');
  if (!b || !au) return;
  if (!CONFIG.musicSrc) { b.hidden = true; return; }
  const sync = () => { const on = !au.paused; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); b.setAttribute('aria-label', tr(on ? 'Stop music' : 'Play music')); };
  let stopped = false;                         // the guest switched it off: never restart it
  const start = () => { au.volume = .6; const p = au.play(); return p && p.then ? p.then(() => true, () => false) : Promise.resolve(!au.paused); };
  b.addEventListener('click', e => {
    e.stopPropagation();
    if (au.paused) { stopped = false; start(); } else { stopped = true; au.pause(); }
    sync();
  });
  au.addEventListener('play', sync); au.addEventListener('pause', sync);
  au.src = media(CONFIG.musicSrc);
  b._sync = sync; sync();
  /* autoplay: browsers only allow sound after the guest's first tap, click or key press,
     so try straight away and, if blocked, start on that first interaction */
  start().then(ok => {
    if (ok) return;
    const evs = ['pointerdown', 'touchend', 'click', 'keydown'];
    const go = e => {
      if (stopped || e.target.closest('#musicBtn')) return;
      start().then(done => { if (done) evs.forEach(n => removeEventListener(n, go, true)); });
    };
    evs.forEach(n => addEventListener(n, go, true));
  });
})();


/* EN / FR switch: swaps every known string on the page, remembers the choice */
(function () {
  const orig = new WeakMap();
  const ATTR = ['alt', 'aria-label', 'placeholder', 'title'];
  const skip = n => n.parentElement && n.parentElement.closest('script,style,svg,title,#langBtn');
  function apply() {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (skip(n)) continue;
      if (!orig.has(n)) orig.set(n, n.nodeValue);
      const o = orig.get(n), key = o.replace(/\s+/g, ' ').trim();
      if (!key) continue;
      const lead = o.match(/^\s*/)[0], trail = o.match(/\s*$/)[0];
      n.nodeValue = LANG === 'fr' && FR[key] ? lead + FR[key] + trail : o;
    }
    $$('[alt],[aria-label],[placeholder],[title]').forEach(el => ATTR.forEach(a => {
      if (!el.hasAttribute(a) || el.closest('#langBtn')) return;
      const k = 'data-o-' + a;
      if (!el.hasAttribute(k)) el.setAttribute(k, el.getAttribute(a));
      const o = el.getAttribute(k);
      el.setAttribute(a, LANG === 'fr' && FR[o] ? FR[o] : o);
    }));
    document.documentElement.lang = LANG;
    document.title = LANG === 'fr' ? `${CONFIG.bride} & ${CONFIG.groom} \u00b7 Royalty 2026` : `${CONFIG.bride} & ${CONFIG.groom} \u00b7 Royalty 2026`;
    const lb = $('#langBtn');
    if (lb) { lb.classList.toggle('fr', LANG === 'fr'); lb.setAttribute('aria-pressed', LANG === 'fr'); }
    const m = $('#musicBtn'); if (m && m._sync) m._sync();
  }
  window.__applyLang = apply;
  const lb = $('#langBtn');
  if (lb) lb.addEventListener('click', () => {
    LANG = LANG === 'fr' ? 'en' : 'fr';
    try { localStorage.setItem('royalty-lang', LANG); } catch (e) {}
    apply();
  });
  if (LANG === 'fr') apply();
})();
