/* ============================================================
   EDIT THIS BLOCK: couple names, date, and RSVP delivery.
   ============================================================ */
const CONFIG = {
  bride: 'Joyce',                       // first name shown big on the front page
  groom: 'Nervis',
  brideFull: 'Asobo Joyce',             // full name shown on the couple cards
  groomFull: 'Nzometiah Nervis',
  date: '2026-12-03T10:00:00+01:00',    // the countdown ends when the civil wedding starts (Cameroon is UTC+1)
  dateLabel: '3rd to 5th December 2026', // shown under the names and in the footer areas
  rsvpBy: '',                           // e.g. 'December 1st'
  whatsapp: '',                         // couple's number, digits only with country code, e.g. '237674139843'
  formEndpoint: '',                     // optional: a Formspree URL, e.g. 'https://formspree.io/f/xxxxxxx'
  maps: {                               // Google Maps links (search links; replace with exact pins if you like)
    civil: 'https://www.google.com/maps/search/?api=1&query=Buea+Council+Buea+Cameroon',
    traditional: 'https://www.google.com/maps/search/?api=1&query=Mini+Koket+Bonduma+Buea+Cameroon',
    church: 'https://www.google.com/maps/search/?api=1&query=LoveWorld+Arena+Christ+Embassy+Mayor+Street+Buea+Cameroon',
    reception: 'https://www.google.com/maps/search/?api=1&query=Auntie+Kate+Banquet+Hall+Pastoral+Center+Buea+Cathedral+Buea+Cameroon'
  },
  events: [                             // used by the Add to calendar button
    { name: 'Civil wedding', start: '2026-12-03T10:00:00+01:00', hours: 2, where: 'Buea Council, Buea' },
    { name: 'Traditional wedding', start: '2026-12-03T17:00:00+01:00', hours: 5, where: 'Mini Koket, Bonduma, Buea' },
    { name: 'Church wedding', start: '2026-12-05T11:00:00+01:00', hours: 4, where: 'LoveWorld Arena, Christ Embassy, Mayor Street, Buea' },
    { name: 'Reception', start: '2026-12-05T17:00:00+01:00', hours: 5, where: 'Auntie Kate Banquet Hall, Pastorial Center, behind Buea Cathedral, Buea' }
  ]
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
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
    $('#cdNote').textContent = 'The royal celebration has begun';
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
  const dl = $('#lbDl'), id = v[cur].dataset.i; dl.href = `downloads/Royalty-2026-${id}.jpg`; dl.setAttribute('download', `Royalty-2026-${id}.jpg`);
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

/* RSVP */
$('#rsvpForm').addEventListener('submit', async e => {
  e.preventDefault();
  const f = e.target, st = $('#rsvpStatus'); st.className = 'form__status';
  if (!f.elements.name.value.trim() || !f.elements.contact.value.trim()) { st.textContent = 'Please add your name and a phone or email.'; st.classList.add('err'); return; }
  const d = Object.fromEntries(new FormData(f));
  const text = `Royalty 2026 RSVP\nName: ${d.name}\nContact: ${d.contact}\nAttending: ${d.attending}\nGuests: ${d.guests}\nMeal: ${d.meal}\nMessage: ${d.message || '-'}`;
  const thanks = 'Thank you for being part of our Royalty. ';
  const done = () => { st.textContent = thanks; st.insertAdjacentHTML('beforeend', '<svg class="inl-crown" viewBox="0 0 208 123" aria-hidden="true"><use href="#crown"/></svg>'); };
  if (CONFIG.formEndpoint) {
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      if (!r.ok) throw 0; done(); f.reset(); return;
    } catch { st.textContent = 'Something went wrong. Please try again or message us on WhatsApp.'; st.classList.add('err'); }
  }
  if (CONFIG.whatsapp) { open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener'); done(); }
  else if (!CONFIG.formEndpoint) { st.textContent = 'RSVP delivery is not set up yet. Add a WhatsApp number or form link in script.js.'; st.classList.add('err'); }
});


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
    if (location.protocol === 'file:') { toast('Downloads work once the site is online. For now, right-click the photo and choose Save image as.'); e.preventDefault(); return; }
    e.preventDefault();
    const name = a.getAttribute('download') || a.getAttribute('href').split('/').pop();
    toast('Downloading ' + name + '…');
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
    const b = Object.assign(document.createElement('button'), { type: 'button', className: 'copy', textContent: 'Copy' });
    b.setAttribute('aria-label', 'Copy ' + dd.closest('div').querySelector('dt').textContent);
    dd.appendChild(b);
    b.addEventListener('click', async () => {
      const text = dd.firstChild.textContent.trim();
      try { await navigator.clipboard.writeText(text); }
      catch { const r = document.createRange(); r.selectNodeContents(dd); getSelection().removeAllRanges(); getSelection().addRange(r); say('Press Ctrl+C to copy'); return; }
      b.textContent = 'Copied'; b.classList.add('done'); say('Copied: ' + text);
      setTimeout(() => { b.textContent = 'Copy'; b.classList.remove('done'); }, 1800);
    });
  });
})();
