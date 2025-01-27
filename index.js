import{a as L,S as b,i as w}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function m(s,e){try{const o={params:{key:"48282955-b9198e6094f2e0ac61d0770f4",q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}},i=await L.get("https://pixabay.com/api",o);return i.data.total===0?void 0:i}catch(o){throw console.log(o.message),o}}function y(s){return s.map(({webformatURL:e,largeImageURL:o,tags:i,likes:t,views:r,comments:n,downloads:v})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
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
  `).join("")}const u=document.querySelector(".gallery-from-pixabay"),p=document.querySelector(".user-search"),c=document.querySelector(".loader"),a=document.querySelector(".load-more");let h=1,d="";const f=new b(".gallery-link",{captions:!1,captionDelay:250,widthRatio:.8,heightRatio:.8});function S(){const s=u.firstElementChild;if(!s)return;const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const l=s=>{w.error({title:"❌",message:s,position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})},g=async s=>{try{h++,a.classList.add("hidden"),c.classList.remove("hidden");const e=await m(d,h);if(!e){l("We're sorry, but you've reached the end of search results.");return}c.classList.add("hidden");const o=y(e.data.hits);u.insertAdjacentHTML("beforeend",o),f.refresh(),S(),f.elements.length<e.data.totalHits?a.classList.remove("hidden"):(a.removeEventListener("click",g),l("We're sorry, but you've reached the end of search results."))}catch(e){l(e.message)}},q=async s=>{try{if(s.preventDefault(),h=1,a.classList.add("hidden"),d=document.querySelector(".input-user-search").value.trim(),!d)throw p.reset(),new Error("The field must be filled!");u.innerHTML="",c.classList.remove("hidden");const e=await m(d,h);if(!e){l("Sorry, there are no images matching your search query. Please try again!");return}const o=y(e.data.hits);u.innerHTML=o,f.refresh(),c.classList.add("hidden"),p.reset(),e.data.totalHits>15&&(a.classList.remove("hidden"),a.addEventListener("click",g))}catch(e){c.classList.add("hidden"),p.reset(),l(e.message)}},x=document.querySelector(".user-search");x.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
