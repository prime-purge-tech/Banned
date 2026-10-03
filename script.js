(function(){var el=document.getElementById("intro");if(!el)return;var h=document.documentElement;
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
function end(){if(el.classList.contains("out"))return;el.classList.add("out");h.classList.remove("introing");setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el)},1000)}
if(reduce){end();return}
var i=0;document.getElementById("mark").innerHTML=[["NO NAME",""],["TECH","t"]].map(function(g){return '<span class="g '+g[1]+'">'+g[0].split("").map(function(c){return c===" "?'<span class="sp"></span>':'<span class="l" style="--i:'+(i++)+'">'+c+'</span>'}).join("")+'</span>'}).join("");
var mk=document.getElementById("mark");
function fit(){if(!mk.parentNode)return;mk.style.fontSize="";var w=mk.offsetWidth,max=window.innerWidth*0.78;if(w>max){mk.style.fontSize=(parseFloat(getComputedStyle(mk).fontSize)*max/w)+"px"}}
fit();addEventListener("resize",fit);if(document.fonts&&document.fonts.ready){document.fonts.ready.then(fit)}
h.classList.add("introing");
var t=setTimeout(end,6800);
el.addEventListener("click",function(){clearTimeout(t);end()});
})();
(function(){
  var words=["Prime Purge","H'es Shop","la tech de demain"],el=document.getElementById("typed"),w=0,c=0,del=false;
  var still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(still){el.textContent=words[0]}else{(function tick(){
    var t=words[w];el.textContent=t.slice(0,c);
    if(!del&&c===t.length){del=true;return setTimeout(tick,1600)}
    if(del&&c===0){del=false;w=(w+1)%words.length}
    c+=del?-1:1;setTimeout(tick,del?40:90)})()}

  var g=document.getElementById("glow");
  addEventListener("pointermove",function(e){g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});

  var B="https://ganga--link--ghhzdp9sv8hk.code.run/i/";
  function px(u){return "https://wsrv.nl/?url="+encodeURIComponent(u)}
  function loadImg(u,ok,n){n=n||0;var t=[u,px(u),u+"?r=2",px(u)+"&r=3"];if(n>=t.length)return;var im=new Image();im.referrerPolicy="no-referrer";im.onload=function(){ok(im.src)};im.onerror=function(){setTimeout(function(){loadImg(u,ok,n+1)},500*(n+1))};im.src=t[n]}
  function robust(img){var orig=img.getAttribute("src")||"",n=0;
    function fail(){if(n>=4){if(img.closest(".pimg")){img.style.display="none";var m=img.nextElementSibling;if(m)m.style.display="grid"}return}
      n++;var u=(n%2===1)?px(orig):orig+"?r="+n;setTimeout(function(){img.src=u},600*n)}
    img.addEventListener("error",fail);
    if(img.complete&&img.naturalWidth===0&&orig)fail()}
  var pg="a0qqxnzi d6g65gr7 7ymd9i0n akd9bd1o an7vgf5w 0ivmtwsk 6vhbxw7o 4a5c9ybg urhn5xyb 04b3tw71 ad2q3cxm vlzh9p6o dygbhuv9".split(" ");
  var lk="pcx09zmx xei0hj95 ff11ebrn ag56s195 cznrr9gs v161jzbc bss760h5 9oghoezc 5vdndv2y t862216b".split(" ");
  var deck=document.getElementById("deck"),order=[];
  pg.forEach(function(n,i){var d=document.createElement("div");d.className="dc";d.innerHTML='<img src="'+B+n+'.jpg" alt="Photo '+(i+1)+'" draggable="false" referrerpolicy="no-referrer" decoding="async"><span class="num">'+(i+1)+'/'+pg.length+'</span>';deck.appendChild(d);order.push(d)});
  function place(){order.forEach(function(c,i){c.style.setProperty("--p",Math.min(i,4));c.style.opacity=i<5?1:0;c.style.pointerEvents=i<5?"auto":"none"})}
  function nextCard(){order.push(order.shift());place()}
  function prevCard(){order.unshift(order.pop());place()}
  place();
  var x0=null,auto;
  function play(){if(!still)auto=setInterval(nextCard,3200)}
  deck.addEventListener("pointerdown",function(e){x0=e.clientX;clearInterval(auto)});
  deck.addEventListener("pointercancel",function(){x0=null;clearInterval(auto);play()});
  deck.addEventListener("pointerup",function(e){if(x0===null)return;var dx=e.clientX-x0;x0=null;dx>40?prevCard():nextCard();clearInterval(auto);play()});
  play();
  var L=[["H'es Shop","fa-solid fa-store","https://hes-shop.vercel.app/"],["Chaîne WhatsApp","fa-brands fa-whatsapp","https://whatsapp.com/channel/0029Vb7Ibg5002T79MWH2r1p"],["YouTube","fa-brands fa-youtube","https://youtube.com/@no-name-officiel"],["Mon Telegram","fa-brands fa-telegram","https://t.me/GOD_NO_NAME"],["Prime Purge","fa-solid fa-tower-broadcast","https://t.me/PRlME_PURGE_TECH"],["No Name Tech","fa-solid fa-code","https://t.me/no_name_teech"],["Gmail Prime Purge","fa-solid fa-envelope","mailto:primepurgetech@gmail.com"],["Gmail H'es","fa-solid fa-envelope-open-text","mailto:hesshoppp@gmail.com"]];
  var st=document.getElementById("strips");
  L.forEach(function(l,i){var a=document.createElement("a");a.className="strip";a.href=l[2];if(l[2].indexOf("http")===0){a.target="_blank";a.rel="noopener"}
    var gr="linear-gradient(90deg,rgba(8,8,24,.72),rgba(8,8,24,.12))";a.style.cssText="--i:"+i+";background-image:"+gr;loadImg(B+lk[i]+".jpg",function(u){a.style.backgroundImage=gr+",url("+u+")"});
    a.innerHTML='<span><i class="'+l[1]+'"></i>'+l[0]+'</span><i class="fa-solid fa-arrow-right go"></i>';st.appendChild(a)});
  var PG=[["Qui est NO NAME",["Passionné de tech","Créateur de Prime Purge","Créateur de H'es Shop","Plusieurs projets en cours"]],
   ["Prime Purge",["Une grande entreprise du méta","Sites, bots et outils","Chaînes Telegram et WhatsApp","Géré avec ma team"]],
   ["H'es Shop",["Le nouveau site qui vient de sortir","Un store comme le Play Store","Des applications au même endroit","Créé par NO NAME"]],
   ["La team",["Mahrez, collab dev","Sasuke jap, Trafalgar D Law","Goat Monarch, Mandela","Limule he's, Lust dev"]]];
  var pi=0,pb=document.getElementById("pbody");
  function showPage(d){var g=PG[pi];document.getElementById("ptitle").textContent=g[0];document.getElementById("pnum").textContent=(pi+1)+"/"+PG.length;
    pb.innerHTML=g[1].map(function(t,k){return '<li class="'+(k===2?"on":"")+'"><span class="ck"><i class="fa-solid fa-check"></i></span><span>'+t+'</span></li>'}).join("");
    pb.classList.remove("l","r");void pb.offsetWidth;pb.classList.add(d<0?"l":"r")}
  pb.addEventListener("click",function(e){var li=e.target.closest("li");if(li)li.classList.toggle("on")});
  document.getElementById("pn").onclick=function(){pi=(pi+1)%PG.length;showPage(1)};
  document.getElementById("pp").onclick=function(){pi=(pi+PG.length-1)%PG.length;showPage(-1)};
  showPage(1);
  [].forEach.call(document.querySelectorAll(".chip"),function(c,i){c.style.setProperty("--i",i)});
  var TM=[["Mahrez","Collab dev",null,"nqexn5pt"],["Sasuke jap","@sinonquoii","sinonquoii","kv7mmw69"],["Trafalgar D Law","@Dev_Trafalgar","Dev_Trafalgar","91j9lkrx"],["Goat Monarch","@Dave_dosantos","Dave_dosantos","0s6mk7hd"],["Mandela","Team",null,"nbsibmg8"],["Limule he's","@Roi12pitaa","Roi12pitaa","lbey72hp"],["Lust dev","@JOSEPHLUST","JOSEPHLUST","s966tm5e"]];
  var rw=document.getElementById("rows");
  for(var r=0;r<3;r++){var arr=TM.slice(r*2).concat(TM.slice(0,r*2));
    var one=arr.map(function(m){var inner='<img src="'+B+m[3]+'.jpg" alt="'+m[0]+'" referrerpolicy="no-referrer" decoding="async"><span><b>'+m[0]+'</b><small>'+m[1]+'</small></span>';
      return m[2]?'<a class="tp" href="https://t.me/'+m[2]+'" target="_blank" rel="noopener">'+inner+'</a>':'<div class="tp">'+inner+'</div>'}).join("");
    var d=document.createElement("div");d.className="trk"+(r===1?" rev":"");d.innerHTML=one+one;rw.appendChild(d)}
  [].forEach.call(document.querySelectorAll("img"),robust);
  var els=document.querySelectorAll(".rv");
  if(!("IntersectionObserver" in window)||still){els.forEach(function(e){e.classList.add("on")});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle("on",e.isIntersecting)})},{threshold:.2});
  els.forEach(function(e){io.observe(e)});
})();
