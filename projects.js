// Project data tailored to Sadek's domains
const PROJECTS = [
  {
    title: "YouTube Thumbnail Pack",
    desc: "High-CTR thumbnail set for a tech channel. Bold typography, clean subject cutouts, and consistent brand colors.",
    thumb: "assets/thumb1.svg",
    stack: ["design", "Photoshop", "Canva"],
    link: "#"
  },
  {
    title: "Reels/Shorts Batch Edit",
    desc: "15 short-form edits with auto-captions, beat sync, and fast cuts. Optimized for 9:16 and 1080x1920 export.",
    thumb: "assets/thumb2.svg",
    stack: ["video", "Premiere Pro"],
    link: "#"
  },
  {
    title: "Campaign Posters",
    desc: "A series of social posters for a local brand. Template-driven, easy to localize and reuse.",
    thumb: "assets/thumb3.svg",
    stack: ["design", "Photoshop"],
    link: "#"
  }
];

function renderProjects(list){
  const grid = document.getElementById('projectGrid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const tag = p.stack[0];
    const el = document.createElement('article');
    el.className = 'card';
    el.setAttribute('data-tag', tag);
    el.innerHTML = `
      <div class="thumb"><img src="${p.thumb}" alt=""></div>
      <div class="content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <ul class="tags">
          ${p.stack.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <a class="btn btn-inline" href="${p.link}" target="_blank" rel="noopener">View →</a>
      </div>`;
    grid.appendChild(el);
  });
}

function setupFilters(){
  const chips = document.querySelectorAll('.chip');
  const grid = document.getElementById('projectGrid');
  if(!chips.length || !grid) return;
  chips.forEach(chip => {
    chip.addEventListener('click', ()=>{
      chips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const type = chip.dataset.filter;
      const cards = Array.from(grid.children);
      cards.forEach(card => {
        const tag = card.getAttribute('data-tag');
        const show = (type === 'all' || type === tag);
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderProjects(PROJECTS);
  setupFilters();
});