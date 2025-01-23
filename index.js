import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(o){const i=new URLSearchParams({key:"48282955-b9198e6094f2e0ac61d0770f4",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i.toString()}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(o){return o.map(({webformatURL:i,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
        width = "360px"
        // height = "240px"
          class="gallery-image"
          src="${i}"
          alt="${s}"
        />
      </a>
      <div class="details">
        <div><p class="details-icon">❤️</p><p>${e}</p></div>
        <div><p class="details-icon">👁️</p><p>${t}</p></div>
        <div><p class="details-icon">💬</p><p>${a}</p></div>
        <div><p class="details-icon">⬇️</p><p>${p}</p></div>
      </div>
    </li>
  `).join("")}const c=document.querySelector(".gallery-from-pixabay"),u=document.querySelector(".user-search");let n=document.querySelector(".loader");const y=new d(".gallery-link",{captions:!1,captionDelay:250,widthRatio:.8,heightRatio:.8}),h=o=>{o.preventDefault();const i=document.querySelector(".input-user-search").value.trim();if(!i){l.error({title:"❌",message:"The field must be filled!",position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3}),u.reset();return}c.innerHTML="",n.style.display="block",f(i).then(r=>{n.style.display="none",r.total===0&&l.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3});const s=m(r.hits);c.innerHTML=s,y.refresh()}).catch(r=>{n.style.display="none",l.error({title:"❌",message:r.toString(),position:"topRight",progressBar:!0,close:!1,icon:!1,timeout:3e3})}),u.reset()},g=document.querySelector(".user-search");g.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
