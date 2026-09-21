const plans={month:{name:'1 Monat · voller Zugang',billing:'14,90 € je Monat'},half:{name:'6 Monate · voller Zugang',billing:'71,40 € im Voraus für die ersten 6 Monate (rechnerisch 11,90 € pro Monat)'},year:{name:'12 Monate · voller Zugang',billing:'99 € im Voraus für die ersten 12 Monate (rechnerisch 8,25 € pro Monat)'}};
const purchase=document.querySelector('#purchase');document.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('click',()=>{const p=plans[b.dataset.plan];document.querySelector('#chosen-plan').textContent=p.name;document.querySelector('#chosen-billing').textContent=p.billing;purchase.showModal();}));document.querySelector('#close-purchase').onclick=()=>purchase.close();purchase.addEventListener('click',e=>{if(e.target===purchase){const r=purchase.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)purchase.close();}});
// Preserve previously shared app deep links while using the root as the public website.
if(['home','profile','discover','programs','library'].includes(location.hash.slice(1)))location.replace('app.html'+location.hash);

const menuToggle=document.querySelector('.menu-toggle');
const siteNav=document.querySelector('#website-nav');
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');siteNav.classList.remove('is-open');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));siteNav.classList.toggle('is-open',open);});
siteNav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){closeMenu();menuToggle.focus();}});
