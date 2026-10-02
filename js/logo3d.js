(function(){
const els=document.querySelectorAll('[data-logo3d]');if(!els.length||!window.THREE)return;
const D=window.LOGO3D;if(!D)return;els.forEach(el=>build(el,D));
function canvasTex(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);return t}
function build(el,D){
 const small=el.clientWidth<300;
 const R=new THREE.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));R.outputEncoding=THREE.sRGBEncoding;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=.92;
 R.domElement.style.cssText='width:100%;height:100%;display:block;touch-action:pan-y;cursor:grab';el.appendChild(R.domElement);
 const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(32,1,.1,200);C.position.set(0,0,13);
 // environnement métallique (reflets studio)
 const env=canvasTex(1024,512,(g,w,h)=>{const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#0b1d40');gr.addColorStop(.45,'#1d5a8a');gr.addColorStop(.5,'#ffffff');gr.addColorStop(.55,'#2a7fb8');gr.addColorStop(1,'#020814');g.fillStyle=gr;g.fillRect(0,0,w,h);
  g.fillStyle='rgba(255,255,255,.9)';[[.15,.3],[.55,.22],[.8,.35]].forEach(([x,y])=>{g.fillRect(x*w,y*h,w*.08,h*.05)});g.fillStyle='rgba(108,196,236,.8)';g.fillRect(.35*w,.7*h,w*.2,h*.03)});
 env.mapping=THREE.EquirectangularReflectionMapping;env.encoding=THREE.sRGBEncoding;
 const pm=new THREE.PMREMGenerator(R);const envMap=pm.fromEquirectangular(env).texture;S.environment=envMap;
 S.add(new THREE.HemisphereLight(0xffffff,0x0b1d40,.5));const key=new THREE.DirectionalLight(0xffffff,1.2);key.position.set(3,4,6);S.add(key);
 const rim=new THREE.DirectionalLight(0x6cc4ec,1.6);rim.position.set(-5,2,-4);S.add(rim);
 const sweep=new THREE.PointLight(0xffffff,0,12);S.add(sweep);
 const G=new THREE.Group(),sc=0.026,cx=134,cy=114;
 const mk=(arr,col,depth,z,metal,rough)=>{const shapes=arr.map(s=>{const sh=new THREE.Shape(s.o.map(p=>new THREE.Vector2((p[0]-cx)*sc,-(p[1]-cy)*sc)));s.h.forEach(h=>sh.holes.push(new THREE.Path(h.map(p=>new THREE.Vector2((p[0]-cx)*sc,-(p[1]-cy)*sc)))));return sh});
  const g=new THREE.ExtrudeGeometry(shapes,{depth,bevelEnabled:true,bevelThickness:.08,bevelSize:.045,bevelSegments:5,curveSegments:10});g.translate(0,0,z);
  const m=new THREE.MeshStandardMaterial({color:col,metalness:metal,roughness:rough,envMapIntensity:1.3,emissive:0x1f9fe0,emissiveIntensity:0});const me=new THREE.Mesh(g,m);G.add(me);return me};
 const blue=mk(D.blue,0x1a8cc6,.6,-.3,.7,.24),blk=mk(D.black||[],0x0d1424,.75,-.22,.8,.3);
 S.add(G);
 // halo lumineux derrière
 const glowTex=canvasTex(256,256,(g,w)=>{const r=g.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2);r.addColorStop(0,'rgba(140,215,255,1)');r.addColorStop(.25,'rgba(35,155,210,.55)');r.addColorStop(1,'rgba(35,155,210,0)');g.fillStyle=r;g.fillRect(0,0,w,w)});
 const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,opacity:.0}));glow.scale.set(14,14,1);glow.position.z=-2;S.add(glow);
 // rayons de lumière
 const rayTex=canvasTex(512,512,(g,w)=>{g.translate(w/2,w/2);for(let i=0;i<18;i++){g.rotate(Math.PI*2/18);const gr=g.createLinearGradient(0,0,w/2,0);gr.addColorStop(0,'rgba(170,225,255,.5)');gr.addColorStop(1,'rgba(170,225,255,0)');g.fillStyle=gr;g.beginPath();g.moveTo(0,0);g.lineTo(w/2,-10-Math.random()*14);g.lineTo(w/2,10+Math.random()*14);g.fill()}});
 const rays=new THREE.Sprite(new THREE.SpriteMaterial({map:rayTex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,opacity:0}));rays.scale.set(18,18,1);rays.position.z=-3;S.add(rays);
 // onde de choc
 const ring=new THREE.Mesh(new THREE.RingGeometry(.96,1,96),new THREE.MeshBasicMaterial({color:0x8fd8ff,transparent:true,opacity:0,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,depthWrite:false}));S.add(ring);
 const ring2=ring.clone();ring2.material=ring.material.clone();S.add(ring2);
 // particules d'énergie
 const N=small?250:700,pos=new Float32Array(N*3),start=new Float32Array(N*3),seed=new Float32Array(N);
 for(let i=0;i<N;i++){const a=Math.random()*Math.PI*2,r=6+Math.random()*10,z=-4-Math.random()*16;start[i*3]=Math.cos(a)*r;start[i*3+1]=Math.sin(a)*r;start[i*3+2]=z;seed[i]=Math.random()}
 const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
 const dotTex=canvasTex(64,64,(g,w)=>{const r=g.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.4,'rgba(140,215,255,.8)');r.addColorStop(1,'rgba(35,155,210,0)');g.fillStyle=r;g.fillRect(0,0,w,w)});
 const pts=new THREE.Points(pg,new THREE.PointsMaterial({size:small?.16:.22,map:dotTex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,opacity:.9}));S.add(pts);
 const resize=()=>{const w=el.clientWidth,h=el.clientHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()};resize();addEventListener('resize',resize);
 let drag=false,px=0,py=0,ry=0,rx=0,vy=0,t0=performance.now(),vis=true;
 R.domElement.addEventListener('pointerdown',e=>{drag=true;px=e.clientX;py=e.clientY;R.domElement.style.cursor='grabbing'});
 addEventListener('pointerup',()=>{drag=false;R.domElement.style.cursor='grab'});
 addEventListener('pointermove',e=>{if(!drag)return;vy=(e.clientX-px)*.01;ry+=vy;rx+=(e.clientY-py)*.005;rx=Math.max(-.6,Math.min(.6,rx));px=e.clientX;py=e.clientY});
 R.domElement.addEventListener('dblclick',()=>{t0=performance.now()});
 new IntersectionObserver(es=>es.forEach(x=>vis=x.isIntersecting)).observe(el);
 const ease=x=>1-Math.pow(1-Math.min(Math.max(x,0),1),3),IMP=1.7;
 (function loop(t){requestAnimationFrame(loop);if(!vis)return;const s=(t-t0)/1000,e=ease(s/IMP);
  // arrivée : le logo jaillit de la profondeur en tournoyant
  if(!drag){vy*=.95;ry+=vy;if(Math.abs(vy)<.001)ry+=(0-ry)*.02;rx+=(0-rx)*.03}
  G.position.z=-22*(1-e);G.rotation.y=ry+Math.sin(s*.7)*.3*e+(1-e)*Math.PI*4;G.rotation.x=rx+Math.sin(s*.5)*.08;G.position.y=Math.sin(s*1.1)*.08*e;
  blk.position.z=(1-ease((s-IMP)/.5))*1.6;
  // particules : convergent vers le logo puis tournent autour
  const P=pg.attributes.position.array;for(let i=0;i<N;i++){const k=ease((s-seed[i]*.6)/1.4),a=s*.35+seed[i]*20,orb=3.2+seed[i]*2.6;
   const ox=Math.cos(a)*orb,oy=Math.sin(a*1.3)*orb*.6,oz=Math.sin(a)*1.2-1;P[i*3]=start[i*3]*(1-k)+ox*k;P[i*3+1]=start[i*3+1]*(1-k)+oy*k;P[i*3+2]=start[i*3+2]*(1-k)+oz*k}
  pg.attributes.position.needsUpdate=true;pts.material.opacity=.35+.55*(1-ease((s-IMP)/2.5));
  // impact : flash, onde de choc, rayons
  const d=s-IMP;if(d>0){const f=Math.exp(-d*2.4);glow.material.opacity=.25+f*.9;rays.material.opacity=f*.85+.08;rays.material.rotation=s*.05;
   const k1=ease(d/1.1),k2=ease((d-.18)/1.3);ring.scale.setScalar(.5+k1*9);ring.material.opacity=(1-k1)*.9;ring2.scale.setScalar(.5+k2*12);ring2.material.opacity=(1-k2)*.6;
   blue.material.emissiveIntensity=f*2.2;C.position.x=(Math.random()-.5)*.12*f;C.position.y=(Math.random()-.5)*.12*f}
  else{glow.material.opacity=e*.3;rays.material.opacity=0;ring.material.opacity=0;ring2.material.opacity=0}
  // balayage de lumière régulier
  const sw=((s-IMP-.6)%6+6)%6;sweep.intensity=sw<1.4&&s>IMP?6*Math.sin(Math.PI*sw/1.4):0;sweep.position.set(-6+sw*8.5,2,3);
  R.render(S,C)})(t0);
}})();
