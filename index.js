import{a as w,S as v,i}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();async function g(o,t){try{return(await w.get("https://pixabay.com/api/",{params:{key:"53332129-128929aa08dcf95595eb6ffa3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(e){throw console.log("Помилка при запиті:",e),e}}const y=document.querySelector(".gallery"),n=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");let S=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${e.webformatURL}" 
                    alt="${e.tags}" 
                />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${e.likes}</p>
                <p class="info-item"><b>Views</b> ${e.views}</p>
                <p class="info-item"><b>Comments</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
            </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){y.innerHTML=""}function p(){n&&n.classList.remove("is-hidden")}function b(){n&&n.classList.add("is-hidden")}function d(){c&&c.classList.remove("is-hidden")}function f(){c&&c.classList.add("is-hidden")}let a=1,u="";const L=15,P=document.querySelector(".form"),$=document.querySelector(".load-more-btn");f();P.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(t){u=t,a=1,q(),p(),f();try{const e=await g(u,a);e.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),h(e.hits),e.totalHits>L&&d()}catch(e){console.log(e),i.error({message:"Something went wrong!"})}finally{b(),o.target.reset()}}});$.addEventListener("click",async o=>{a+=1,p(),d();try{const t=await g(u,a);h(t.hits),B();const e=Math.ceil(t.totalHits/L);a>=e?(f(),i.info({message:"We're sorry, but you've reached the end of search results."})):d()}catch(t){console.log(t),i.error({message:"Error loading more images"})}finally{b()}});function B(){const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
