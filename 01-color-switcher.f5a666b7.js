const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.backgroundColor=l(),console.log(l())}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.f5a666b7.js.map
