const menuBtn=document.querySelector('#menuBtn');
const nav=document.querySelector('#siteNav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.menu-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(card=>{card.hidden=f!=='all'&&card.dataset.category!==f;});}));
const form=document.querySelector('#contactForm');
form?.addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#name').value.trim();const msg=document.querySelector('#formMessage');msg.textContent=name?`Спасибо, ${name}! Заявка принята в учебном режиме.`:'Заполни имя.';if(name)form.reset();});
const lightbox=document.querySelector('#lightbox');const lightboxImg=document.querySelector('#lightboxImg');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{const img=item.querySelector('img');lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
function closeLightbox(){lightbox?.classList.remove('open');lightbox?.setAttribute('aria-hidden','true');}
document.querySelector('#closeLightbox')?.addEventListener('click',closeLightbox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
