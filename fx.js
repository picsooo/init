/* Moteur d'effets : éclairs, explosions, débris, étincelles, fumée */
function FX(canvas,opt){
 opt=opt||{};const g=canvas.getContext('2d'),dpr=Math.min(devicePixelRatio||1,1.5),mob=innerWidth<700;
 let W=0,H=0,P=[],D=[],S=[],B=[],R=[],E=[],flash=0,run=true,last=performance.now();
 const rs=()=>{W=canvas.clientWidth;H=canvas.clientHeight;canvas.width=W*dpr;canvas.height=H*dpr;g.setTransform(dpr,0,0,dpr,0,0)};rs();addEventListener('resize',rs);
 const rnd=(a,b)=>a+Math.random()*(b-a);
 if(opt.embers)for(let i=0;i<(mob?35:80);i++)E.push({x:rnd(0,W),y:rnd(0,H),r:rnd(.4,1.8),v:rnd(.15,.55),a:rnd(0,7),o:rnd(.2,.8)});
 function boltPath(x1,y1,x2,y2,disp,out){if(disp<3){out.push([x2,y2]);return}const mx=(x1+x2)/2+rnd(-.5,.5)*disp,my=(y1+y2)/2+rnd(-.5,.5)*disp;boltPath(x1,y1,mx,my,disp/2,out);boltPath(mx,my,x2,y2,disp/2,out)}
 function bolt(x1,y1,x2,y2,w){const pts=[[x1,y1]];boltPath(x1,y1,x2,y2,Math.hypot(x2-x1,y2-y1)*.35,pts);const br=[];
  for(let i=0;i<3;i++){const k=Math.floor(rnd(.2,.8)*pts.length),p=pts[k],a=Math.atan2(y2-y1,x2-x1)+rnd(-1,1),l=rnd(40,140),q=[[p[0],p[1]]];boltPath(p[0],p[1],p[0]+Math.cos(a)*l,p[1]+Math.sin(a)*l,l*.4,q);br.push(q)}
  B.push({pts,br,t:0,life:rnd(.22,.4),w:w||2.2});flash=Math.max(flash,.12)}
 function boom(x,y,pw){pw=pw||1;flash=Math.max(flash,.55*pw);R.push({x,y,r:10,t:0,life:1.1,pw},{x,y,r:4,t:-.12,life:1.4,pw:pw*.7});
  S.push({x,y,r:30*pw,t:0,life:.6,fire:true});
  const ns=(mob?60:140)*pw,nd=(mob?12:26)*pw,nm=(mob?8:18)*pw;
  for(let i=0;i<ns;i++){const a=rnd(0,7),v=rnd(2,13)*pw;P.push({x,y,px:x,py:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-2,t:0,life:rnd(.5,1.4),hot:Math.random()<.35})}
  for(let i=0;i<nd;i++){const a=rnd(0,7),v=rnd(2,9)*pw,n=Math.floor(rnd(4,7)),sz=rnd(4,14)*pw,pts=[];for(let k=0;k<n;k++){const aa=k/n*6.28,rr=sz*rnd(.5,1);pts.push([Math.cos(aa)*rr,Math.sin(aa)*rr])}
   D.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-3,rot:rnd(0,7),vr:rnd(-.25,.25),pts,t:0,life:rnd(1.4,2.6)})}
  for(let i=0;i<nm;i++){const a=rnd(0,7),v=rnd(.3,1.6)*pw;S.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-.3,r:rnd(20,50)*pw,t:0,life:rnd(1.6,3)})}
  if(opt.shake){opt.shake.animate([{transform:'translate(0,0)'},{transform:'translate(-8px,5px)'},{transform:'translate(7px,-6px)'},{transform:'translate(-4px,3px)'},{transform:'translate(0,0)'}],{duration:420})}
  for(let i=0;i<3;i++)setTimeout(()=>bolt(x,y,x+rnd(-1,1)*W*.35,y+rnd(-1,1)*H*.35,1.6),i*90)}
 function frame(now){requestAnimationFrame(frame);if(!run){last=now;return}const dt=Math.min((now-last)/1000,.05);last=now;
  g.clearRect(0,0,W,H);g.globalCompositeOperation='lighter';
  // braises
  E.forEach(p=>{p.y-=p.v;p.a+=.01;p.x+=Math.sin(p.a)*.3;if(p.y<-10){p.y=H+10;p.x=rnd(0,W)}const gr=g.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*4);gr.addColorStop(0,'rgba(200,236,255,'+p.o+')');gr.addColorStop(1,'rgba(35,155,210,0)');g.fillStyle=gr;g.beginPath();g.arc(p.x,p.y,p.r*4,0,7);g.fill()});
  // fumée (normal blend)
  g.globalCompositeOperation='source-over';
  S=S.filter(s=>{s.t+=dt;const k=s.t/s.life;if(k>=1)return false;
   if(s.fire){const r=s.r*(1+k*5);const gr=g.createRadialGradient(s.x,s.y,0,s.x,s.y,r);gr.addColorStop(0,'rgba(255,255,255,'+(1-k)+')');gr.addColorStop(.25,'rgba(150,225,255,'+(.9*(1-k))+')');gr.addColorStop(.55,'rgba(35,155,210,'+(.6*(1-k))+')');gr.addColorStop(.8,'rgba(255,150,60,'+(.25*(1-k))+')');gr.addColorStop(1,'rgba(10,20,40,0)');g.globalCompositeOperation='lighter';g.fillStyle=gr;g.beginPath();g.arc(s.x,s.y,r,0,7);g.fill();g.globalCompositeOperation='source-over';return true}
   s.x+=s.vx;s.y+=s.vy;s.vy-=.01;const r=s.r*(1+k*2.5);const gr=g.createRadialGradient(s.x,s.y,0,s.x,s.y,r);gr.addColorStop(0,'rgba(70,90,115,'+(.35*(1-k))+')');gr.addColorStop(1,'rgba(20,30,45,0)');g.fillStyle=gr;g.beginPath();g.arc(s.x,s.y,r,0,7);g.fill();return true});
  // débris
  D=D.filter(d=>{d.t+=dt;if(d.t>d.life)return false;d.vy+=.28;d.vx*=.99;d.x+=d.vx;d.y+=d.vy;d.rot+=d.vr;const a=1-Math.max(0,(d.t-d.life+.5)/.5);
   g.save();g.translate(d.x,d.y);g.rotate(d.rot);g.globalAlpha=a;g.beginPath();d.pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();
   const gr=g.createLinearGradient(-10,-10,10,10);gr.addColorStop(0,'#5d6f82');gr.addColorStop(.5,'#1b2533');gr.addColorStop(1,'#0a0f17');g.fillStyle=gr;g.fill();g.strokeStyle='rgba(140,215,255,.8)';g.lineWidth=1;g.stroke();
   if(d.t<.5){g.strokeStyle='rgba(255,170,90,'+(.8-d.t*1.6)+')';g.stroke()}g.restore();return true});
  g.globalAlpha=1;g.globalCompositeOperation='lighter';
  // étincelles avec traînée
  P=P.filter(p=>{p.t+=dt;if(p.t>p.life)return false;p.px=p.x;p.py=p.y;p.vy+=.18;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;const k=1-p.t/p.life;
   g.strokeStyle=p.hot?'rgba(255,200,140,'+k+')':'rgba(170,230,255,'+k+')';g.lineWidth=p.hot?2:1.6;g.beginPath();g.moveTo(p.px-p.vx*1.5,p.py-p.vy*1.5);g.lineTo(p.x,p.y);g.stroke();return true});
  // ondes de choc
  R=R.filter(r=>{r.t+=dt;if(r.t<0)return true;const k=r.t/r.life;if(k>=1)return false;const rad=r.r+k*Math.max(W,H)*.6*r.pw;g.strokeStyle='rgba(160,225,255,'+(.9*(1-k))+')';g.lineWidth=6*(1-k)+1;g.beginPath();g.arc(r.x,r.y,rad,0,7);g.stroke();
   g.strokeStyle='rgba(35,155,210,'+(.4*(1-k))+')';g.lineWidth=22*(1-k);g.beginPath();g.arc(r.x,r.y,rad*.96,0,7);g.stroke();return true});
  // éclairs
  B=B.filter(b=>{b.t+=dt;if(b.t>b.life)return false;const fl=Math.random()<.7?1:.3,a=(1-b.t/b.life)*fl;
   const draw=(pts,w)=>{g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.lineWidth=w*5;g.strokeStyle='rgba(35,155,210,'+(a*.35)+')';g.stroke();g.lineWidth=w*2;g.strokeStyle='rgba(140,215,255,'+(a*.8)+')';g.stroke();g.lineWidth=w*.8;g.strokeStyle='rgba(255,255,255,'+a+')';g.stroke()};
   draw(b.pts,b.w);b.br.forEach(q=>draw(q,b.w*.5));return true});
  // flash
  if(flash>0){g.globalCompositeOperation='lighter';g.fillStyle='rgba(170,225,255,'+flash+')';g.fillRect(0,0,W,H);flash*=.86;if(flash<.01)flash=0}
  g.globalCompositeOperation='source-over'}
 requestAnimationFrame(frame);
 return{boom,bolt,setRun:v=>run=v,size:()=>[W,H],rnd}}
