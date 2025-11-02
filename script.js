
document.addEventListener('DOMContentLoaded', ()=>{
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === location.pathname.split('/').pop() || href === location.pathname.split('/').pop() || href === 'index.html' && (location.pathname.endsWith('index.html') || location.pathname.endsWith('/'))){
      a.classList.add('active');
    }
  });
});
