// Updated projects list for Sadek Hossain
// Add/replace items as needed. Put your images in assets/ and update thumb paths.

const PROJECTS = [
  {
    title: "Tech Channel Thumbnails",
    desc: "High-CTR YouTube thumbnails with bold text, clean cutouts, and brand colors.",
    thumb: "assets/sadek-sample1.png",
    stack: ["design", "Photoshop"],
    link: "https://www.behance.net/sadekhossain101"
  },
  {
    title: "Reels/Shorts Batch Edit",
    desc: "Short-form edits with beat sync, captions, and export-ready formats (9:16).",
    thumb: "assets/sadek-sample2.png",
    stack: ["video", "Premiere Pro"],
    link: "https://youtube.com/@thesadekproductions"
  },
  {
    title: "Campaign Posters",
    desc: "Template-driven poster set for social media campaigns, easy to localize.",
    thumb: "assets/sadek-sample3.png",
    stack: ["design", "Photoshop"],
    link: "https://www.instagram.com/___sadek___"
  }
];

function renderProjects(list){
  const grid = document.getElementById('projectGrid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const tag = p.stack[0]; // first item as filter tag: 'design' or 'video'
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
