import{a as L,S as w,i as m}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function f(o,e){try{const s={params:{key:"48282955-b9198e6094f2e0ac61d0770f4",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}},i=await L.get("https://pixabay.com/api",s);if(i.data.total===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i}catch(s){throw s}}function y(o){return o.map(({webformatURL:e,largeImageURL:s,tags:i,likes:t,views:r,comments:n,downloads:v})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
        width = "360px"
        // height = "240px"
          class="gallery-image"
          src="${e}"
          alt="${i}"
        />
      </a>
      <div class="details">
        <div><p class="details-icon">❤️</p><p>${t}</p></div>
        <div><p class="details-icon">👁️</p><p>${r}</p></div>
        <div><p class="details-icon">💬</p><p>${n}</p></div>
        <div><p class="details-icon">⬇️</p><p>${v}</p></div>
      </div>
    </li>
  `).join("")}const d=document.querySelector(".gallery-from-pixabay"),p=document.querySelector(".user-search"),l=document.querySelector(".loader"),a=document.querySelector(".load-more");let u=1,c="";const h=new w(".gallery-link",{captions:!1,captionDelay:250,widthRatio:.8,heightRatio:.8});function b(){const o=d.firstElementChild;if(!o)return;const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const g=async o=>{try{u++,a.classList.add("hidden"),l.classList.remove("hidden");const{data:e}=await f(c,u);l.classList.add("hidden");const s=y(e.hits);if(d.insertAdjacentHTML("beforeend",s),h.refresh(),b(),h.elements.length<e.totalHits)a.classList.remove("hidden");else throw a.removeEventListener("click",g),new Error("We're sorry, but you've reached the end of search results.")}catch(e){m.error({title:"❌",message:e.message,position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})}},S=async o=>{try{if(o.preventDefault(),u=1,a.classList.add("hidden"),c=document.querySelector(".input-user-search").value.trim(),!c)throw p.reset(),new Error("The field must be filled!");d.innerHTML="",l.classList.remove("hidden");const{data:e}=await f(c,u),s=y(e.hits);d.innerHTML=s,h.refresh(),l.classList.add("hidden"),p.reset(),e.totalHits>15&&(a.classList.remove("hidden"),a.addEventListener("click",g))}catch(e){l.classList.add("hidden"),p.reset(),m.error({title:"❌",message:e.message,position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})}},q=document.querySelector(".user-search");q.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
