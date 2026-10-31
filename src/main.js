import './style.css';
import { gsap } from 'gsap';
import {
  slides, outcomes, modelRoles, responsibilities, workflow,
  projectRecord, memberWork, values, feedbackLoop, decisions, leadershipLaws,
} from './content.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const pad = value => String(value).padStart(2, '0');
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const logo = `${import.meta.env.BASE_URL}assets/ieee-zc-white.png`;
const kicker = text => `<p class="kicker" data-in>${text}</p>`;
const intro = (eyebrow, title, lead = '') => `<div class="scene-intro">${kicker(eyebrow)}<h1 data-in>${title}</h1>${lead ? `<p data-in>${lead}</p>` : ''}</div>`;

function sceneContent(n) {
  switch (slides[n].kind) {
    case 'hero': return `<div class="hero__edition" data-in>IEEE ZEWAIL CITY STUDENT BRANCH <span>2026 / 27</span></div>
      <div class="hero__copy"><h1 data-in>BOARD<br><em>MEETING.</em></h1><div class="hero__bottom" data-in><p>How we plan, coordinate<br>and grow together.</p><button class="action-link" type="button" data-go="1">START THE MEETING <span>↗</span></button></div></div>
      <div class="hero__visual" aria-hidden="true"><div class="hero__orbit hero__orbit--one"></div><div class="hero__orbit hero__orbit--two"></div><img src="${logo}" alt="" /></div>`;

    case 'purpose': return `<div class="purpose-scene">${intro('PURPOSE OF TODAY', 'What we need to<br><em>leave aligned on.</em>', 'A shared operating model makes it easier for every committee to deliver.')}<div class="purpose__grid">${outcomes.map((item, i) => `<button class="purpose__item" type="button" data-go="${item.to}" data-in><span>${pad(i + 1)}</span><strong>${esc(item.title)}</strong><p>${esc(item.text)}</p><i aria-hidden="true">↗</i></button>`).join('')}</div></div>`;

    case 'model': return `<div class="model-scene">${intro('01 / OPERATING MODEL', 'One connected<br><em>operating model.</em>', 'Project Management is the coordination link between the overall plan and committee execution.')}<div class="model__diagram"><div class="model__top" data-in><span>CHAIRMAN</span><strong>Direct coordination & overall follow-up</strong></div><div class="model__stem"></div><div class="model__core" data-in><strong>PROJECT MANAGEMENT COMMITTEE</strong><span>Project Managers coordinate delivery across teams</span></div><div class="model__stem"></div><div class="model__roles">${modelRoles.map((role, i) => `<div class="model__role" data-in><span>${pad(i + 1)}</span><h2>${esc(role.title)}</h2><p>${esc(role.text)}</p><small>${esc(role.note)}</small></div>`).join('')}</div></div><p class="model__note" data-in><b>Important:</b> Project Managers coordinate project delivery; Committee Heads remain responsible for leading their committees.</p></div>`;

    case 'ownership': return `<div class="ownership-scene">${intro('02 / CLEAR RESPONSIBILITIES', 'Who owns <em>what?</em>', 'The goal is coordination without confusion or duplicated authority.')}<div class="ownership__rows">${responsibilities.map((item, i) => `<div class="ownership__row" data-in><span>${pad(i + 1)}</span><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p><small>${item.tags.map(esc).join(' <i>•</i> ')}</small></div>`).join('')}</div></div>`;

    case 'workflow': return `<div class="workflow-scene">${intro('03 / PROJECT DELIVERY', 'A simple workflow<br><em>for every project.</em>', 'One clear path from the idea to delivery—and a record of what happened along the way.')}<div class="workflow__rail" role="tablist" aria-label="Project delivery steps">${workflow.map((item, i) => `<button class="workflow__step ${i === 0 ? 'is-active' : ''}" type="button" role="tab" aria-selected="${i === 0}" data-step="${i}" data-in><span>${pad(i + 1)}</span><strong>${esc(item.title)}</strong></button>`).join('')}</div><div class="workflow__focus" role="tabpanel" data-in><div class="workflow__focus-number">01 <span>/ 06</span></div><div><h2 id="workflow-title">DEFINE</h2><p id="workflow-detail">Outcome, scope and success criteria.</p></div><button id="workflow-next" type="button" aria-label="Next workflow step">→</button></div></div>`;

    case 'record': return `<div class="record-scene">${intro('04 / DOCUMENTATION & TRACKING', 'One project.<br><em>One clear record.</em>', 'Every project should have a shared record that makes progress and problems visible.')}<div class="record__body"><div class="record__statement" data-in><strong>IF IT ISN’T DOCUMENTED,<br>IT’S HARD TO TRACK.</strong><p>Updates should be easy to understand, easy to find and useful for follow-up—not paperwork for its own sake.</p></div><div class="record__fields">${projectRecord.map((item, i) => `<div class="record__field" data-in><span>${pad(i + 1)}</span><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p></div>`).join('')}</div></div><div class="record__status" data-in><span>STATUS SHOULD BE CLEAR</span><div role="group" aria-label="Example project status">${['On track', 'At risk', 'Blocked'].map((s, i) => `<button class="status-chip status-chip--${i} ${i === 0 ? 'is-active' : ''}" type="button" data-status="${i}" aria-pressed="${i === 0}">${s.toUpperCase()}</button>`).join('')}</div></div></div>`;

    case 'meetings': return `<div class="meetings-scene">${intro('05 / MEETING RHYTHM', 'Regular meetings need<br><em>room to happen.</em>', 'Committee and project meetings can be online or in person—what matters is that they are planned.')}<div class="meetings__body"><div class="meetings__checkins" data-in><span>01 / REGULAR CHECK-INS</span><h2>Keep the team<br>connected.</h2><p>Keep committee members connected, align priorities and raise issues before they grow.</p></div><div class="meetings__notice" data-in><span>02 / PLANNING AHEAD</span><div class="meetings__number"><b>2</b><strong>WEEKS’<br>NOTICE</strong></div><p>Heads should inform the Board at least two weeks before a planned meeting.</p><h3>PLEASE INCLUDE</h3><ul><li>Proposed date and time</li><li>Online or in-person format</li><li>Agenda and expected attendees</li><li>Room, equipment or other logistical needs</li></ul></div></div></div>`;

    case 'vision': return `<div class="vision-scene">${intro('06 / OUR VISION', 'Members are a core<br><em>pillar of this team.</em>', 'Our committees should not depend on Heads doing everything themselves. Members are central to the work.')}<div class="vision__statement" data-in><span>THE HEAD SETS THE DIRECTION.</span><strong>THE MEMBERS HELP BUILD THE RESULT.</strong></div><div class="vision__cards">${memberWork.map((item, i) => `<div class="vision__card" data-in><span>${pad(i + 1)}</span><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p></div>`).join('')}</div></div>`;

    case 'culture': return `<div class="culture-scene"><div class="culture__intro">${intro('07 / TEAM ENVIRONMENT', 'Build the family<br><em>into the way we work.</em>')}<p data-in>A strong team is not only measured by what it delivers. It is also measured by how people feel while building it.</p></div><div class="culture__values">${values.map((item, i) => `<div class="culture__value" data-in><span>${pad(i + 1)}</span><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p></div>`).join('')}</div></div>`;

    case 'feedback': return `<div class="feedback-scene">${intro('08 / VOICE & FEEDBACK', 'Every voice <em>matters.</em>', 'Feedback is not a formality. It is one of the ways we improve how the team works.')}<div class="feedback__loop">${feedbackLoop.map((item, i) => `<div class="feedback__step" data-in><span>${pad(i + 1)}</span><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p><i aria-hidden="true">${i < 3 ? '→' : '↺'}</i></div>`).join('')}</div></div>`;

    case 'initiatives': return `<div class="initiatives-scene">${intro('09 / COMING UP', 'What we’re<br><em>preparing next.</em>', 'Both initiatives need early coordination so we can deliver them properly.')}<div class="initiatives__grid"><article class="initiative" data-in><div class="initiative__number">01</div><div><span>ALUMNI-LED CONVERSATIONS</span><h2>Major<br>Discovery</h2><p>Invite alumni to share their major, university experience, what they learned, career directions and advice for current students.</p><div class="initiative__foot"><strong>PURPOSE</strong><small>Help students make informed academic choices through real experiences.</small></div></div></article><article class="initiative initiative--yellow" data-in><div class="initiative__number">02</div><div><span>CIRCUITS PROBLEM-SOLVING COMPETITION</span><h2>Circuit<br>Clash</h2><p>A timed circuits challenge inspired by the problem-solving format of Integration Bee—focused on speed, accuracy and strong fundamentals.</p><div class="initiative__foot"><strong>TARGET · WEEK 10</strong><small>Start preparation now. Begin marketing once the required permissions are secured.</small></div></div></article></div><p class="initiatives__note" data-in>Week 10 is a target and should be confirmed against the final calendar and approvals.</p></div>`;

    case 'charter-laws': return `<div class="charter-laws-scene">${intro('10 / EVALUATION', 'Leadership mandate<br><em>& performance charter.</em>', 'Season 2026/2027 · Mandatory leadership operational laws')}<div class="charter-laws__grid">${leadershipLaws.map((item, i) => `<div class="charter-law" data-in><span>${pad(i + 1)}</span><div><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p></div></div>`).join('')}</div></div>`;

    case 'charter-action': return `<div class="charter-action-scene">${intro('10 / EVALUATION · LEADERSHIP ACTION', 'Sign the<br><em>Leadership Charter.</em>')}<div class="charter-action__body"><div class="charter-action__statement" data-in><span>MANDATORY NEXT STEP</span><p>Every Head, Vice Head, and Officer must formally sign the Leadership Agreement Form within <strong>24 hours.</strong></p><div class="charter-action__duration" aria-hidden="true"><b>24</b><strong>HOURS</strong></div></div><div class="charter-action__requirements" data-in><h2>Requirements</h2><ol><li><span>01</span><p>Use your official university email <b>(@zewailcity.edu.eg)</b></p></li><li><span>02</span><p>Acknowledge every leadership and replacement clause individually</p></li><li><span>03</span><p>Type your full name as your binding digital signature</p></li></ol></div></div><div class="charter-action__deadline" data-in><span>DEADLINE</span><strong>Sunday, November 1, 2026</strong><b>11:59 PM · CAIRO TIME</b></div></div>`;

    case 'decisions': return `<div class="decisions-scene">${intro('11 / CLOSE THE LOOP', 'What we need to<br><em>agree on today.</em>')}<div class="decisions__list">${decisions.map((item, i) => `<button class="decisions__item" type="button" data-decision="${i}" aria-pressed="false" data-in><span>${pad(i + 1)}</span><strong>${esc(item)}</strong><i aria-hidden="true">○</i></button>`).join('')}</div></div>`;

    default: return '';
  }
}

const app = $('#app');
const scene = $('#scene');
const viewport = $('.scene-viewport');
const veil = $('#transition');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let current = Math.max(0, Math.min(slides.length - 1, (Number(location.hash.match(/slide-(\d+)/)?.[1]) || 1) - 1));
let transitioning = false;
let queued = null;
let selectedStep = 0;
const agreed = new Set();

$('#overview-list').innerHTML = slides.map((slide, i) => `<button class="overview-item" type="button" data-go="${i}"><span>${pad(i + 1)}</span><small>${esc(slide.chapter)}</small><strong>${esc(slide.title)}</strong><i aria-hidden="true">↗</i></button>`).join('');

function animateEntrance() {
  if (reduceMotion.matches) return;
  gsap.fromTo($$('[data-in]', scene), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: .68, stagger: .065, ease: 'power3.out', clearProps: 'transform,opacity,visibility' });
}

function render(n) {
  current = n;
  const slide = slides[n];
  scene.innerHTML = `<section class="scene__inner scene--${slide.kind}" aria-label="Slide ${n + 1}: ${esc(slide.title)}">${sceneContent(n)}</section>`;
  app.dataset.tone = slide.tone;
  $('#chapter').textContent = slide.chapter.toUpperCase();
  $('#count').textContent = `${pad(n + 1)} / ${pad(slides.length)}`;
  $('#progress-fill').style.width = `${((n + 1) / slides.length) * 100}%`;
  $('#previous').disabled = n === 0;
  $('#next').disabled = n === slides.length - 1;
  $$('.overview-item').forEach((item, i) => item.classList.toggle('is-current', i === n));
  viewport.scrollTop = 0;
  history.replaceState(null, '', `#slide-${n + 1}`);
  if (slide.kind === 'workflow') selectedStep = 0;
  if (slide.kind === 'decisions') $$('.decisions__item', scene).forEach((item, i) => { item.classList.toggle('is-agreed', agreed.has(i)); item.setAttribute('aria-pressed', String(agreed.has(i))); item.querySelector('i').textContent = agreed.has(i) ? '✓' : '○'; });
  animateEntrance();
}

function closeOverview() {
  const panel = $('#overview');
  panel.classList.remove('is-open');
  panel.inert = true;
  panel.setAttribute('aria-hidden', 'true');
}

function goTo(n) {
  n = Math.max(0, Math.min(slides.length - 1, n));
  if (n === current && !transitioning) { closeOverview(); return; }
  if (transitioning) { queued = n; return; }
  closeOverview();
  if (reduceMotion.matches) { render(n); return; }
  transitioning = true;
  const direction = n >= current ? 1 : -1;
  gsap.set(veil, { display: 'flex', xPercent: -104 * direction });
  gsap.set('.transition__mark', { scale: .88, rotate: -5 });
  gsap.set('.transition__piece', { opacity: 0, y: 28, scale: 1.08 });
  const tl = gsap.timeline({ onComplete: () => {
    gsap.set(veil, { display: 'none' });
    transitioning = false;
    if (queued !== null && queued !== current) { const next = queued; queued = null; goTo(next); }
    else queued = null;
  } });
  tl.to(veil, { xPercent: 0, duration: .48, ease: 'power3.inOut' })
    .to('.transition__mark', { scale: 1, rotate: 0, duration: .65, ease: 'power3.out' }, '<')
    .to('.transition__piece', { opacity: 1, y: 0, scale: 1, duration: .45, stagger: .11, ease: 'power3.out' }, '-=.52')
    .add(() => render(n))
    .to('.transition__mark', { scale: 1.025, duration: .25, ease: 'sine.inOut' }, '+=.18')
    .to(veil, { xPercent: 104 * direction, duration: .5, ease: 'power3.inOut' }, '+=.05');
}

function selectStep(index) {
  selectedStep = (index + workflow.length) % workflow.length;
  $$('.workflow__step', scene).forEach((tab, i) => { tab.classList.toggle('is-active', i === selectedStep); tab.setAttribute('aria-selected', String(i === selectedStep)); });
  $('.workflow__focus-number', scene).innerHTML = `${pad(selectedStep + 1)} <span>/ 06</span>`;
  $('#workflow-title').textContent = workflow[selectedStep].title.toUpperCase();
  $('#workflow-detail').textContent = workflow[selectedStep].text;
  if (!reduceMotion.matches) gsap.fromTo('.workflow__focus > div', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: .4, stagger: .06, ease: 'power2.out', clearProps: 'transform,opacity,visibility' });
}

document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.go !== undefined) { goTo(Number(button.dataset.go)); return; }
  if (button.id === 'home') { goTo(0); return; }
  if (button.id === 'previous') { goTo(current - 1); return; }
  if (button.id === 'next') { goTo(current + 1); return; }
  if (button.id === 'overview-open') { const panel = $('#overview'); panel.inert = false; panel.setAttribute('aria-hidden', 'false'); panel.classList.add('is-open'); $('#overview-close').focus(); return; }
  if (button.id === 'overview-close') { closeOverview(); $('#overview-open').focus(); return; }
  if (button.id === 'fullscreen') { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); return; }
  if (button.dataset.step !== undefined) { selectStep(Number(button.dataset.step)); return; }
  if (button.id === 'workflow-next') { selectStep(selectedStep + 1); return; }
  if (button.dataset.status !== undefined) { $$('.status-chip', scene).forEach(chip => { const active = chip === button; chip.classList.toggle('is-active', active); chip.setAttribute('aria-pressed', String(active)); }); return; }
  if (button.dataset.decision !== undefined) { const i = Number(button.dataset.decision); if (agreed.has(i)) agreed.delete(i); else agreed.add(i); button.classList.toggle('is-agreed', agreed.has(i)); button.setAttribute('aria-pressed', String(agreed.has(i))); button.querySelector('i').textContent = agreed.has(i) ? '✓' : '○'; }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeOverview(); return; }
  if ($('#overview').classList.contains('is-open')) return;
  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); goTo(current + 1); }
  else if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); goTo(current - 1); }
  else if (event.key === 'Home') goTo(0);
  else if (event.key === 'End') goTo(slides.length - 1);
});

window.addEventListener('wheel', event => {
  if (window.innerWidth < 900 || Math.abs(event.deltaY) < 22 || transitioning || $('#overview').classList.contains('is-open')) return;
  event.preventDefault();
  goTo(current + Math.sign(event.deltaY));
}, { passive: false });

let touchStart = null;
window.addEventListener('touchstart', event => { const t = event.touches[0]; touchStart = t ? [t.clientX, t.clientY] : null; }, { passive: true });
window.addEventListener('touchend', event => {
  if (!touchStart || transitioning || $('#overview').classList.contains('is-open')) return;
  const t = event.changedTouches[0];
  const dx = t.clientX - touchStart[0], dy = t.clientY - touchStart[1];
  if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.4) goTo(current + (dx < 0 ? 1 : -1));
  touchStart = null;
}, { passive: true });

window.addEventListener('hashchange', () => { const target = Number(location.hash.match(/slide-(\d+)/)?.[1]); if (target && target - 1 !== current) goTo(target - 1); });
document.addEventListener('fullscreenchange', () => $('#fullscreen').setAttribute('aria-label', document.fullscreenElement ? 'Exit full screen' : 'Enter full screen'));

render(current);
