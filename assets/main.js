(()=>{const CA='77xMW4RFPhwLMwfVFjvCZP963AUdtzVChDFYGnCHUaWF';
const btn=document.getElementById('copy');
btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(CA)}catch(e){const t=document.createElement('textarea');t.value=CA;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(_){}t.remove()}btn.textContent='Copied ✓';btn.classList.add('ok');setTimeout(()=>{btn.textContent='Copy';btn.classList.remove('ok')},1600)});
const nav=document.getElementById('nav'),menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
links.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const els=document.querySelectorAll('.reveal');
if(reduce||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'))}else{const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});els.forEach(e=>io.observe(e))}
const hero=document.querySelector('.hero'),layers=hero.querySelectorAll('[data-depth]');let tick=false;
function onScroll(){const y=scrollY;nav.classList.toggle('scrolled',y>20);
 if(!reduce&&y<innerHeight*1.2){const p=Math.min(y/innerHeight,1);hero.style.setProperty('--p',p.toFixed(3));layers.forEach(l=>{l.style.transform='translate3d(0,'+(y*parseFloat(l.dataset.depth))+'px,0)'})}tick=false}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
})();
