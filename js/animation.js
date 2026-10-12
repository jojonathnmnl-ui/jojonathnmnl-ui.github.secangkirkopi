(()=>{
if(!window.gsap||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
// Text reveal headline
const h=$('#headline');
h.innerHTML=h.textContent.split(' ').map(w=>`<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block">${w}</span></span>`).join(' ');
gsap.timeline({defaults:{ease:'power4.out'}})
 .from('.glow',{opacity:0,scale:.6,duration:1.8})
 .from('#headline span span',{yPercent:110,duration:1.1,stagger:.08},.2)
 .from('.hero-in',{y:30,opacity:0,duration:.9,stagger:.12},'-=.7')
 .from('.pol',{y:70,opacity:0,stagger:.15,duration:1,ease:'back.out(1.4)'},'-=.6');
// Floating beans (+ wrapper untuk parallax)
const B=$('#beans');
for(let i=0;i<10;i++){const w=document.createElement('span'),s=18+Math.random()*30;w.className='absolute';w.dataset.depth=10+Math.random()*40;w.style.cssText=`left:${Math.random()*95}%;top:${Math.random()*90}%`;w.innerHTML=`<i class="bean" style="--s:${s}px;--d:${4+Math.random()*5}s;--r:${Math.random()*360}deg"></i>`;B.append(w)}
// Mouse parallax
if(matchMedia('(pointer:fine)').matches){
 const it=$$('[data-depth]').map(el=>({x:gsap.quickTo(el,'x',{duration:1,ease:'power3'}),y:gsap.quickTo(el,'y',{duration:1,ease:'power3'}),d:+el.dataset.depth}));
 $('#home').addEventListener('mousemove',e=>{const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;it.forEach(o=>{o.x(-nx*o.d*2);o.y(-ny*o.d*2)})});
 // Magnetic buttons
 $$('.magnetic').forEach(b=>{const x=gsap.quickTo(b,'x',{duration:.4,ease:'power3'}),y=gsap.quickTo(b,'y',{duration:.4,ease:'power3'});b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.3);y((e.clientY-r.top-r.height/2)*.3)});b.addEventListener('mouseleave',()=>{x(0);y(0)})});
}
// Animated counter
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,o={v:0},d=+(el.dataset.dec||0);gsap.to(o,{v:+el.dataset.count,duration:2,ease:'power2.out',onUpdate:()=>el.textContent=o.v.toFixed(d)})}),{threshold:.6});
$$('[data-count]').forEach(el=>io.observe(el));
})();
