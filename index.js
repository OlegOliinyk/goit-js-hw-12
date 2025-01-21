import{i as n,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(o){return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
        width = "360px"
        // height = "240px"
          class="gallery-image"
          src="${r}"
          alt="${i}"
        />
      </a>
      <div class="details">
        <div><p class="details-icon">❤️</p><p>${e}</p></div>
        <div><p class="details-icon">👁️</p><p>${t}</p></div>
        <div><p class="details-icon">💬</p><p>${l}</p></div>
        <div><p class="details-icon">⬇️</p><p>${u}</p></div>
      </div>
    </li>
  `).join("")}let a="";const y="48282955-b9198e6094f2e0ac61d0770f4",c=document.querySelector(".gallery-from-pixabay"),m=o=>{if(o.preventDefault(),a=document.querySelector(".input-user-search"),!a.value.trim()){n.error({title:"❌",message:"The field must be filled!",position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3});return}const r=`https://pixabay.com/api/?key=${y}&q=${a.value}&image_type=photo&orientation=horizontal&safesearch=true`;let s=document.querySelector(".loader");c.innerHTML="",s.style.display="block",d(r).then(i=>{s.style.display="none",i.total===0&&n.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3});const e=f(i.hits);c.innerHTML=e,new p(".gallery-link",{captions:!1,captionDelay:250,widthRatio:.8,heightRatio:.8})}).catch(i=>console.log(i)),a.value=""},h=document.querySelector(".button-user-search");h.addEventListener("click",m);
//# sourceMappingURL=index.js.map
