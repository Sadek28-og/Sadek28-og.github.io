// Theme toggle + year + small utils
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const isLight = localStorage.getItem('theme') === 'light';
  if(isLight){ root.classList.add('light'); }
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });
  }
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
})();
