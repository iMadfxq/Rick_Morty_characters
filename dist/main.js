(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n    <div class="error404">\n      <h2>Error 404</h2>\n      <p>Sorry, we couldn\'t find what you were looking for. <a href="#">You can go to our main page again.</a></p>\n    </div>\n  ',s={"/":async()=>`\n  <div class="characters">\n    ${(await a()).results.map((n=>`\n      <article class="characters__item">\n        <a href="#/${n.id}/">\n          <img src="${n.image}" alt="${n.name}">\n          <h2>${n.name}</h2>\n        </a>\n      </article>\n    `)).join("")}\n  </div>\n  <footer>\n    <section class="footer__info">\n      <a href="https://imadfxq.github.io/myOwnWebPage/" target="_blank">Developed by:<span>iMadfxq</span></a>\n    </section>\n  </footer>\n  `,"/:id":async()=>{const n=e(),t=await a(n);return`\n    <section class="character__info">\n      <div class="character__inner">\n        <article class="character__inner--card">\n          <img src="${t.image}" alt="${t.name}">\n          <h2>${t.name}</h2>\n        </article>\n        <article class="character__inner--text">\n          <h3>Episodes: <span>${t.episode.length}</span></h3>\n          <h3>Status: <span>${t.status}</span></h3>\n          <h3>Specie: <span>${t.species}</span></h3>\n          <h3>Gender: <span>${t.gender}</span></h3>\n          <h3>Origin: <span>${t.origin.name}</span></h3>\n          <h3>Last location: <span>${t.location.name}</span></h3>\n        </article>\n      </div>\n    </section>\n  `},"/contact":"contact"},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n    <div class="header__logo">\n      <a href="#">\n        <h1>Rick & Morty Characters</h1>\n      </a> \n    </div>\n    <div class="header__nav">\n      <a href="#/about/">About</a>\n    </div>\n  ';let c=e(),i=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(c),r=s[i]?s[i]:t;a.innerHTML=await r()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();