import{a as u,S as m,i as n}from"./assets/vendor-Cip_4kvj.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="51014016-712075211dd4ddd9d92f84ca4",f="https://pixabay.com/api/";function h(r){const i={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:i}).then(t=>t.data)}const l=document.querySelector(".gallery"),d=document.getElementById("loader");let g=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(r){const i=r.map(t=>`
    <li class="gallery-item">
        <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" width="360"/>
        </a>
        <div class="info">
            <div class="statistic-info">  
                <p class="statistic-item-name">Likes</p>
                <p class="statistic-item-value">${t.likes}</p>
            </div>
            <div class="statistic-info">
                <p class="statistic-item-name">Views</p>
                <p class="statistic-item-value">${t.views}</p>
            </div>
            <div class="statistic-info">
                <p class="statistic-item-name">Comments</p>
                <p class="statistic-item-value">${t.comments}</p>
            </div>
            <div class="statistic-info">
                <p class="statistic-item-name">Downloads</p>
                <p class="statistic-item-value">${t.downloads}</p>
            </div>
        </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",i),g.refresh()}function v(){l.innerHTML=""}function L(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",r=>{r.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}v(),L(),h(t).then(o=>{if(o.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits)}).catch(o=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
