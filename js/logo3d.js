(function(){
const els=document.querySelectorAll('[data-logo3d]');if(!els.length||!window.THREE)return;
const D=window.LOGO3D;if(!D)return;els.forEach(el=>build(el,D));
function build(el,D){
 const R=new THREE.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));R.outputEncoding=THREE.sRGBEncoding;
 R.domElement.style.cssText='width:100%;height:100%;display:block;touch-action:pan-y;cursor:grab';el.appendChild(R.domElement);
 const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(32,1,.1,100);C.position.set(0,0,13);
 S.add(new THREE.HemisphereLight(0xffffff,0x0b1d40,.9));const k=new THREE.DirectionalLight(0xffffff,1.1);k.position.set(3,4,6);S.add(k);
 const rim=new THREE.DirectionalLight(0x6cc4ec,1.2);rim.position.set(-5,2,-4);S.add(rim);const fill=new THREE.PointLight(0x28a2d7,.8,30);fill.position.set(-3,-3,5);S.add(fill);
 const G=new THREE.Group(),sc=0.026,cx=134,cy=114;
 const mk=(arr,col,depth,z,metal)=>{const shapes=arr.map(s=>{const sh=new THREE.Shape(s.o.map(p=>new THREE.Vector2((p[0]-cx)*sc,-(p[1]-cy)*sc)));s.h.forEach(h=>sh.holes.push(new THREE.Path(h.map(p=>new THREE.Vector2((p[0]-cx)*sc,-(p[1]-cy)*sc)))));return sh});
  const g=new THREE.ExtrudeGeometry(shapes,{depth,bevelEnabled:true,bevelThickness:.06,bevelSize:.035,bevelSegments:4,curveSegments:8});g.translate(0,0,z);
  const m=new THREE.MeshStandardMaterial({color:col,metalness:metal,roughness:.38});const me=new THREE.Mesh(g,m);G.add(me);return me};
 const blue=mk(D.blue,0x239bd2,.6,-.3,.25),blk=mk(D.black||[],0x0d1424,.7,-.2,.5);
 S.add(G);
 const resize=()=>{const w=el.clientWidth,h=el.clientHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()};resize();addEventListener('resize',resize);
 let drag=false,px=0,py=0,ry=0,rx=0,vy=0,t0=performance.now();
 R.domElement.addEventListener('pointerdown',e=>{drag=true;px=e.clientX;py=e.clientY;R.domElement.style.cursor='grabbing'});
 addEventListener('pointerup',()=>{drag=false;R.domElement.style.cursor='grab'});
 addEventListener('pointermove',e=>{if(!drag)return;vy=(e.clientX-px)*.01;ry+=vy;rx+=(e.clientY-py)*.005;rx=Math.max(-.6,Math.min(.6,rx));px=e.clientX;py=e.clientY});
 const io=new IntersectionObserver(es=>es.forEach(x=>vis=x.isIntersecting));let vis=true;io.observe(el);
 (function loop(t){requestAnimationFrame(loop);if(!vis)return;const s=(t-t0)/1000;
  const intro=Math.min(s/1.8,1),e=1-Math.pow(1-intro,3);
  if(!drag){vy*=.95;ry+=vy;if(Math.abs(vy)<.001)ry+=(0-ry)*.02;rx+=(0-rx)*.03}
  G.rotation.y=ry+Math.sin(s*.7)*.35*e+(1-e)*-2.4;G.rotation.x=rx+Math.sin(s*.5)*.08;G.scale.setScalar(.4+.6*e);G.position.y=Math.sin(s*1.1)*.08;
  blk.position.z=(1-e)*2;R.render(S,C)})(t0);
}})();
