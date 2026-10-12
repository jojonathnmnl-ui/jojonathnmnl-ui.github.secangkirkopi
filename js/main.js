const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const WA_NUMBER='6285741296343';
const WA=item=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Secangkir Kopi 👋\n\nSaya ingin memesan menu berikut.'+(item?'\n\n• '+item:''))}`;

$$('[data-order]').forEach(a=>{a.href=WA();a.target='_blank';a.rel='noopener'});

// Smooth scroll + AOS
if(window.Lenis&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const l=new Lenis({lerp:.1});const raf=t=>{l.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf);window.lenis=l}
window.AOS&&AOS.init({duration:800,once:true,offset:60});
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const h=a.getAttribute('href'),t=h.length>1&&$(h);if(!t)return;e.preventDefault();window.lenis?lenis.scrollTo(t,{offset:-70}):t.scrollIntoView({behavior:'smooth'})}));

// Mobile nav
$('#burger').onclick=()=>$('#links').classList.toggle('max-md:hidden');
$$('#links a').forEach(a=>a.addEventListener('click',()=>$('#links').classList.add('max-md:hidden')));

// Ripple (delegasi, berlaku untuk semua .btn)
document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement('span');s.className='rip';s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.append(s);setTimeout(()=>s.remove(),600)});

// Instagram grid, TikTok cards, Gallery (ganti file di assets/images/)
// Foto: Unsplash (gratis untuk komersial). Ganti ID di sini, atau ganti seluruh ph() dengan path file lokal.
const U='https://images.unsplash.com/photo-',PH={shot:'1777558578066-44266564ee65',barista:'1766250343186-847200b11032',machine:'1511287830614-09802dd6cd79',beans:'1698061700649-4c6425ebdbec',pour:'1504469089401-14f795f6ddee',cup:'1428550443830-190057dc8098',croissant:'1702090888946-d330cd452f5e',iced:'1767471716700-2b3aa77b1ab6',matcha:'1749280447307-31a68eb38673',choco:'1542108899561-eb215cf20d9f',banana:'1558476007-7a34999acb57'};
const ph=(k,w,h)=>`${U}${PH[k]}?auto=format&fit=crop&q=75&w=${w}${h?'&h='+h:''}`;
const FB='onerror="this.onerror=null;this.src=\'assets/images/g1.svg\'"';
const GAL=['iced','barista','matcha','beans','machine','pour','choco','cup','croissant','banana','shot'];
const IMG=(i,w=700,h)=>ph(GAL[(i-1)%GAL.length],w,h);
$('#ig').innerHTML=[1,2,3,4,5,6].map(i=>`<a href="https://www.instagram.com/jonathanmnlla" target="_blank" rel="noopener" class="group relative block aspect-square overflow-hidden rounded-xl" aria-label="Instagram ${i}"><img src="${IMG(i,400,400)}" ${FB} alt="" width="300" height="300" loading="lazy" class="size-full object-cover transition duration-500 group-hover:scale-110"><span class="absolute inset-0 grid place-items-center bg-espresso/60 opacity-0 group-hover:opacity-100 transition text-2xl">♥</span></a>`).join('');
$('#tt').innerHTML=[1,3,7,10].map((g,i)=>`<a href="https://www.tiktok.com/@joonaathanmnuela22" target="_blank" rel="noopener" class="card group relative block aspect-[9/16]" data-video=""><img src="${IMG(g,400,711)}" ${FB} alt="" width="300" height="533" loading="lazy" class="size-full object-cover"><span class="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent"></span><span class="absolute inset-0 grid place-items-center text-4xl opacity-0 group-hover:opacity-100 transition">▶</span><span class="absolute bottom-3 inset-x-3 text-sm">Ritual seduh #${i+1}</span></a>`).join('');
$$('#tt [data-video]').forEach(c=>{c.onmouseenter=()=>{if(!c.dataset.video)return;let v=$('video',c);if(!v){v=Object.assign(document.createElement('video'),{src:c.dataset.video,muted:true,loop:true,playsInline:true});v.className='absolute inset-0 size-full object-cover';c.prepend(v)}v.play()};c.onmouseleave=()=>{const v=$('video',c);v&&v.pause()}});
$('#gal').innerHTML=GAL.map((k,i)=>`<img src="${IMG(i+1)}" ${FB} alt="Suasana Secangkir Kopi ${i+1}" width="700" height="880" loading="lazy" decoding="async">`).join('');

// Lightbox
const lb=$('#lb'),lbi=$('img',lb);
$('#gal').onclick=e=>{if(e.target.tagName!=='IMG')return;lbi.src=e.target.src;lbi.alt=e.target.alt;lb.classList.add('open');window.lenis&&lenis.stop()};
lb.onclick=()=>{lb.classList.remove('open');window.lenis&&lenis.start()};
addEventListener('keydown',e=>e.key==='Escape'&&lb.click());

// Newsletter (UI saja, tanpa backend)
$('#news').onsubmit=e=>{e.preventDefault();$('#nmsg').textContent='Terima kasih! Kami akan mengabari kamu ☕';e.target.reset()};
$('#yr').textContent=new Date().getFullYear();

// Foto hero
$('.hero-bg').insertAdjacentHTML('afterbegin',`<img src="${ph('beans',1600)}" ${FB} alt="" fetchpriority="high" class="absolute inset-0 size-full object-cover opacity-25">`);

// Foto hero (polaroid) + marquee
$$('[data-ph]').forEach(i=>{i.src=ph(i.dataset.ph,+i.dataset.w||600,+i.dataset.h||0);i.onerror=()=>{i.onerror=null;i.src='assets/images/g1.svg'}});
const mq=$('.marq-t');mq.innerHTML+=mq.innerHTML;
