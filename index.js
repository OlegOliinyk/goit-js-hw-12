import{a as L,S as b,i as w}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function f(s,e){try{const o={params:{key:"48282955-b9198e6094f2e0ac61d0770f4",q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}},i=await L.get("https://pixabay.com/api/",o);if(console.log(i),i.data.total===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i}catch(o){throw console.log(o.message),o}}function y(s){return s.map(({webformatURL:e,largeImageURL:o,tags:i,likes:t,views:r,comments:n,downloads:v})=>`
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
  `).join("")}const d=document.querySelector(".gallery-from-pixabay"),m=document.querySelector(".user-search"),c=document.querySelector(".loader"),a=document.querySelector(".load-more");let u=1,l="";const h=new b(".gallery-link",{captions:!1,captionDelay:250,widthRatio:.8,heightRatio:.8});function S(){const s=d.firstElementChild;if(!s)return;const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const p=s=>{w.error({title:"❌",message:s,position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})},g=async s=>{try{u++,a.classList.add("hidden"),c.classList.remove("hidden");const{data:e}=await f(l,u);c.classList.add("hidden");const o=y(e.hits);d.insertAdjacentHTML("beforeend",o),h.refresh(),S(),h.elements.length<e.totalHits?a.classList.remove("hidden"):(a.removeEventListener("click",g),p("We're sorry, but you've reached the end of search results."))}catch(e){p(e.message)}},q=async s=>{try{if(s.preventDefault(),u=1,a.classList.add("hidden"),l=document.querySelector(".input-user-search").value.trim(),!l)throw new Error("The field must be filled!");d.innerHTML="",c.classList.remove("hidden");const{data:e}=await f(l,u),o=y(e.hits);d.innerHTML=o,h.refresh(),c.classList.add("hidden"),m.reset(),e.totalHits>15&&(a.classList.remove("hidden"),a.addEventListener("click",g))}catch(e){c.classList.add("hidden"),m.reset(),p(e.message)}},x=document.querySelector(".user-search");x.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
