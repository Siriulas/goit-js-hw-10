import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i}from"./assets/vendor-77e16229.js";const r=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let d,u;n.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(u=t,n.disabled=!1)}};y(r,b);n.addEventListener("click",()=>{n.disabled=!0,r.disabled=!0,d=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(d),r.disabled=!1,i.success({title:"Success",message:"Countdown finished"});return}const o=a(t);w(o)},1e3)});function w({days:e,hours:t,minutes:o,seconds:c}){p.textContent=s(e),S.textContent=s(t),g.textContent=s(o),D.textContent=s(c)}function s(e){return String(e).padStart(2,"0")}function a(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));
//# sourceMappingURL=commonHelpers.js.map
