// Project data + rendering + filtering
const PROJECTS = [
  {
    title: "Smart Billing Dashboard",
    desc: "Automated invoicing and revenue analytics with Stripe, webhook-driven pipelines, and clean charts.",
    thumb: "assets/thumb1.svg",
    stack: ["web", "Node.js", "Postgres"],
    link: "#"
  },
  {
    title: "Vision Classifier",
    desc: "Lightweight CNN for edge devices, 92% accuracy on custom dataset with ONNX export.",
    thumb: "assets/thumb2.svg",
    stack: ["ml", "PyTorch", "ONNX"],
    link: "#"
  },
  {
    title: "Portfolio Theme",
    desc: "The template you're viewing—performant, accessible, and easy to customize.",
    thumb: "assets/thumb3.svg",
    stack: ["web", "HTML", "CSS", "JS"],
    link: "#"
  },
  {
    title: "CLI Productivity",
    desc: "A friendly CLI with plugins for note-taking, daily planning, and project scaffolding.",
    thumb: "assets/thumb4.svg",
    stack: ["other", "Go"],
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
