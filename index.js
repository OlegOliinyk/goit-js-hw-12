import{a as L,S as b,i as w}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function m(s,e){try{const o={params:{key:"48282955-b9198e6094f2e0ac61d0770f4",q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}},i=await L.get("https://pixabay.com/api/",o);return i.data.total===0?void 0:i}catch(o){throw console.log(o.message),o}}function y(s){return s.map(({webformatURL:e,largeImageURL:o,tags:i,likes:t,views:r,comments:c,downloads:v})=>`
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
        <div><p class="details-icon">💬</p><p>${c}</p></div>
        <div><p class="details-icon">⬇️</p><p>${v}</p></div>
      </div>
    </li>
  `).join("")}const h=document.querySelector(".gallery-from-pixabay"),d=document.querySelector(".user-search"),a=document.querySelector(".loader"),n=document.querySelector(".load-more");let p=1,u="";const f=new b(".gallery-link",{captions:!1,captionDelay:250,widthRatio:.8,heightRatio:.8});function S(){const s=h.firstElementChild;if(!s)return;const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const l=s=>{w.error({title:"❌",message:s,position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})},g=async s=>{try{p++,n.classList.add("hidden"),a.classList.remove("hidden");const e=await m(u,p);if(!e){l("We're sorry, but you've reached the end of search results.");return}a.classList.add("hidden");const o=y(e.data.hits);h.insertAdjacentHTML("beforeend",o),f.refresh(),S(),f.elements.length<e.data.totalHits?n.classList.remove("hidden"):(n.removeEventListener("click",g),l("We're sorry, but you've reached the end of search results."))}catch(e){l(e.message)}},q=async s=>{try{if(s.preventDefault(),p=1,n.classList.add("hidden"),u=document.querySelector(".input-user-search").value.trim(),!u)throw d.reset(),new Error("The field must be filled!");h.innerHTML="",a.classList.remove("hidden");const e=await m(u,p);if(!e){a.classList.add("hidden"),d.reset(),l("Sorry, there are no images matching your search query. Please try again!");return}const o=y(e.data.hits);h.innerHTML=o,f.refresh(),a.classList.add("hidden"),d.reset(),e.data.totalHits>15&&(n.classList.remove("hidden"),n.addEventListener("click",g))}catch(e){a.classList.add("hidden"),d.reset(),l(e.message)}},x=document.querySelector(".user-search");x.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
