// Edit menu di sini. k: kunci foto di PH (js/main.js); tanpa k = placeholder m{i}.svg. c: espresso | manual | non | pastry ; b: bestseller ; i: nomor gambar assets/images/m{i}.svg
const MENU=[
{n:'Espresso Doppio',p:22,c:'espresso',t:'Dark chocolate · karamel',i:1,b:1,k:'shot'},
{n:'Espresso Solo',p:20,c:'espresso',t:'Pekat · manis · crema tebal',i:2,k:'cup'},
{n:'V60 Single Origin',p:32,c:'manual',t:'Floral · jeruk · madu',i:3,b:1,k:'pour'},
{n:'Cold Brew Cream',p:30,c:'manual',t:'Segar · creamy · smooth',i:4,b:1,k:'iced'},
{n:'Matcha Latte',p:30,c:'non',t:'Earthy · manis lembut',i:5,b:1,k:'matcha'},
{n:'Coklat Hangat',p:26,c:'non',t:'Pekat · hangat',i:6,b:1,k:'choco'},
{n:'Butter Croissant',p:24,c:'pastry',t:'Renyah · gurih',i:7,k:'croissant'},
{n:'Banana Bread',p:22,c:'pastry',t:'Lembut · karamel',i:8,k:'banana'}];
const grid=document.getElementById('menu-grid');
function renderMenu(cat='all'){
 grid.innerHTML=MENU.filter(m=>cat==='all'||m.c===cat).map(m=>`<article class="card glass group">
 <div class="relative overflow-hidden"><img src="${m.k?ph(m.k,600,750):`assets/images/m${m.i}.svg`}" onerror="this.onerror=null;this.src='assets/images/m${m.i}.svg'" alt="${m.n}" width="400" height="500" loading="lazy" class="w-full aspect-[4/5] object-cover">${m.b?'<span class="absolute top-3 left-3 bg-gold text-espresso text-xs font-semibold px-3 py-1 rounded-full">★ Bestseller</span>':''}</div>
 <div class="p-5"><h3 class="font-serif text-xl">${m.n}</h3><p class="text-sm text-cream/60 mt-1">${m.t}</p>
 <div class="flex items-center justify-between mt-4"><span class="text-gold font-semibold">Rp ${m.p}.000</span><a class="btn btn-gold !py-2 !px-4 text-sm" target="_blank" rel="noopener" href="${WA(m.n)}">Pesan</a></div></div></article>`).join('');
 window.gsap&&gsap.from('#menu-grid .card',{y:30,opacity:0,stagger:.08,duration:.6,ease:'power3.out',clearProps:'all'});
}
$$('.chip').forEach(b=>b.onclick=()=>{$$('.chip').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});renderMenu(b.dataset.cat)});
renderMenu();
