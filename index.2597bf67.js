document.addEventListener("DOMContentLoaded",function(){var t=Array.from(document.querySelectorAll(".population")).map(function(t){return parseInt(t.textContent.replace(/,/g,""),10)}),e=t.reduce(function(t,e){return t+e},0),n=Math.round(e/t.length);document.querySelector(".total-population").textContent=e.toLocaleString("en-US"),document.querySelector(".average-population").textContent=n.toLocaleString("en-US")});
//# sourceMappingURL=index.2597bf67.js.map
