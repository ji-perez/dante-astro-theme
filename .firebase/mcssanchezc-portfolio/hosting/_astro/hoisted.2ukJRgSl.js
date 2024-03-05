localStorage.theme==="dark"&&document.documentElement.classList.add("dark");function $(){const e=document.querySelector(".menu"),t=document.querySelector(".menu-toggle");t?.addEventListener("click",()=>{const n=t.getAttribute("aria-expanded")==="true";t.classList.toggle("is-active"),t.setAttribute("aria-expanded",n?"false":"true"),t.setAttribute("aria-label",n?"Open Menu":"Close Menu"),e?.classList.toggle("is-visible")})}$();document.addEventListener("astro:after-swap",$);const Z="astro:before-preparation",ee="astro:after-preparation",te="astro:before-swap",ne="astro:after-swap",oe=e=>document.dispatchEvent(new Event(e));class _ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,l,d,i,m){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=l,this.sourceElement=d,this.info=i,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class re extends _{formData;loader;constructor(t,n,o,r,a,l,d,i,m){super(Z,{cancelable:!0},t,n,o,r,a,l,d),this.formData=i,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ie extends _{direction;viewTransition;swap;constructor(t,n,o){super(te,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function se(e,t,n,o,r,a,l,d){const i=new re(e,t,n,o,r,a,window.document,l,d);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(oe(ee),i.navigationType!=="traverse"&&R({scrollX,scrollY}))),i}async function ae(e,t,n){const o=new ie(e,t,n);return document.dispatchEvent(o),o.swap(),o}const ce=history.pushState.bind(history),v=history.replaceState.bind(history),R=e=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...e},""))},P=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),B=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let S,p,A=!1,U;const V=e=>document.dispatchEvent(new Event(e)),W=()=>V("astro:page-load"),le=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},g="data-astro-transition-persist",X="data-astro-transition",Y="data-astro-transition-fallback";let O,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(v({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");const ue=(e,t)=>{let n=!1,o=!1;return(...r)=>{if(n){o=!0;return}e(...r),n=!0,setTimeout(()=>{o&&(o=!1,e(...r)),n=!1},t)}};async function de(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function fe(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const a=new Promise(l=>{o.onload=o.onerror=l});e=e.then(()=>a)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const K=(e,t,n,o,r)=>{const a=B(t,e),l=document.title;document.title=o;let d=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;v({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else ce({...n.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(S=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),d=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||v(i,"")}else d||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=l};function me(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${g}="${n.getAttribute(g)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function H(e,t,n,o){const r=(s,f)=>{const h=s.getAttribute(g),y=h&&f.head.querySelector(`[${g}="${h}"]`);if(y)return y;if(s.matches("link[rel=stylesheet]")){const b=s.getAttribute("href");return f.head.querySelector(`link[rel=stylesheet][href="${b}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${g}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const f=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:f,end:h}}return{activeElement:s}}else return{activeElement:null}},l=({activeElement:s,start:f,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=f,s.selectionEnd=h))},d=s=>{const f=document.documentElement,h=[...f.attributes].filter(({name:c})=>(f.removeAttribute(c),c.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:c,value:u})=>f.setAttribute(c,u));for(const c of document.scripts)for(const u of s.newDocument.scripts)if(!c.src&&c.textContent===u.textContent||c.src&&c.type===u.type&&c.src===u.src){u.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const u=r(c,s.newDocument);u?u.remove():c.remove()}document.head.append(...s.newDocument.head.children);const y=document.body,b=a();document.body.replaceWith(s.newDocument.body);for(const c of y.querySelectorAll(`[${g}]`)){const u=c.getAttribute(g),D=document.querySelector(`[${g}="${u}"]`);D&&D.replaceWith(c)}l(b)};async function i(s){function f(c){const u=c.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(Y,s);const b=document.getAnimations().filter(c=>!h.includes(c)&&!f(c));return Promise.all(b.map(c=>c.finished))}if(!A)document.documentElement.setAttribute(X,e.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const m=document.title,w=await ae(e,p,d);K(w.to,w.from,t,m,n),V(ne),o==="animate"&&!A&&i("new").then(()=>U())}async function G(e,t,n,o,r){if(!I()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&R({scrollX,scrollY}),B(t,n)&&n.hash){K(n,t,o,document.title,r);return}const l=await se(t,n,e,a,o.sourceElement,o.info,o.formData,d);if(l.defaultPrevented){location.href=n.href;return}async function d(i){const m=i.to.href,w={};if(i.formData){w.method="POST";const h=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");w.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const s=await de(m,w);if(s===null){i.preventDefault();return}if(s.redirected&&(i.to=new URL(s.redirected)),O??=new DOMParser,i.newDocument=O.parseFromString(s.html,s.mediaType),i.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const f=me(i.newDocument);f.length&&await Promise.all(f)}if(A=!1,P)p=document.startViewTransition(async()=>await H(l,o,r));else{const i=(async()=>{await new Promise(m=>setTimeout(m)),await H(l,o,r,j())})();p={updateCallbackDone:i,ready:i,finished:new Promise(m=>U=m),skipTransition:()=>{A=!0}}}p.ready.then(async()=>{await fe(),W(),le()}),p.finished.then(()=>{document.documentElement.removeAttribute(X),document.documentElement.removeAttribute(Y)}),await p.ready}async function N(e,t){await G("forward",S,new URL(e,location.href),t??{})}function he(e){if(!I()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>T?"forward":"back";T=n,G(o,S,new URL(location.href),{},t)}const F=()=>{R({scrollX,scrollY})};{(P||j()!=="none")&&(S=new URL(location.href),addEventListener("popstate",he),addEventListener("load",W),"onscrollend"in window?addEventListener("scrollend",F):addEventListener("scroll",ue(F,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const z=new Set,L=new WeakSet;let x,J,q=!1;function ge(e){q||(q=!0,x??=e?.prefetchAll??!1,J??=e?.defaultStrategy??"hover",we(),pe(),ye(),Te())}function we(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{E(t.target,"tap")&&k(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function pe(){let e;document.body.addEventListener("focusin",o=>{E(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),M(()=>{for(const o of document.getElementsByTagName("a"))L.has(o)||E(o,"hover")&&(L.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{k(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function ye(){let e;M(()=>{for(const t of document.getElementsByTagName("a"))L.has(t)||E(t,"viewport")&&(L.add(t),e??=be(),e.observe(t))})}function be(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),k(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function Te(){M(()=>{for(const e of document.getElementsByTagName("a"))E(e,"load")&&k(e.href,{with:"link"})})}function k(e,t){const n=t?.ignoreSlowConnection??!1;if(!Ee(e,n))return;if(z.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Ee(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!z.has(e)}catch{}return!1}function E(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||x)&&Q()?!0:n==null&&x||n===""?t===J:n===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function M(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function ve(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function C(e){return e.dataset.astroReload!==void 0}(P||ve()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;C(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),N(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||C(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const l=o?.getAttribute("formmethod")??n.method;if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const i=new URLSearchParams(r),m=new URL(a);m.search=i.toString(),a=m.toString()}else d.formData=r;e.preventDefault(),N(a,d)}),ge({prefetchAll:!0}));document.addEventListener("astro:after-swap",()=>{localStorage.theme==="dark"&&document.documentElement.classList.add("dark")});document.addEventListener("astro:page-load",()=>{const e=typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme")||"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),window.localStorage.setItem("theme",e);const t=()=>{const n=document.documentElement;n.classList.toggle("dark");const o=n.classList.contains("dark");localStorage.setItem("theme",o?"dark":"light")};document.getElementById("theme-toggle")?.addEventListener("click",t)});