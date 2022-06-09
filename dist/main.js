(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),i=t.n(r),o=t(645),s=t.n(o)()(i());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Merriweather:ital,wght@1,700&display=swap);"]),s.push([e.id,"html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #dddbf1;\n}\n\nbody {\n  display: flex;\n  margin-top: 100px;\n  justify-content: center;\n  background-color: #755c1b;\n  padding-bottom: 30px;\n}\n\n.todolist {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, auto);\n  background-color: #7a4419;\n  height: max-content;\n  width: 80%;\n  border-radius: 20px 20px;\n  border: 2px solid #383f51;\n  z-index: 1;\n}\n\n.list-header,\n.add-new-task {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #383f51;\n  padding: 0 20px;\n  height: 50px;\n}\n\n#add-new-task,\n#add-new-task::placeholder {\n  color: #ada7ac;\n  font-family: 'Merienda', cursive;\n  letter-spacing: 0.1rem;\n  width: 100%;\n}\n\n.list-header>h1 {\n  letter-spacing: 0.1rem;\n  font-family: 'Merriweather', serif;\n  font-size: 20px;\n}\n\ninput,\nbutton {\n  border: 0;\n  background: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.task {\n  cursor: move;\n  height: 50px;\n  display: grid;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  column-gap: 10px;\n  padding: 0 20px;\n  border-bottom: 2px dotted #383f51;\n}\n\n.fa-solid {\n  font-size: 24px;\n  cursor: pointer;\n}\n\ninput[type=checkbox] {\n  transform: scale(1.2);\n  margin-right: 10px;\n}\n\n.new-task {\n  letter-spacing: 0.07rem;\n  font-family: 'Merienda', cursive;\n  border-radius: 9px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.active {\n  background: #b4b88c;\n  color: #000;\n}\n\n.line {\n  text-decoration: line-through;\n  font-size: 0.9rem;\n  color: #ada7ac;\n}\n\n#clear-btn {\n  font-family: 'Merienda', cursive;\n  cursor: pointer;\n  height: 70px;\n  background-color: #0b2545;\n  border-radius: 0 0 19px 19px;\n}\n\n/* error message */\n.error {\n  color: #0b2545;\n  visibility: hidden;\n  font-size: 19px;\n  padding: 12px;\n  position: absolute;\n  width: max-content;\n  background-color: #c1c7d0;\n  text-align: center;\n  top: 12%;\n  border-radius: 5px;\n}\n\n.error::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #c1c7d0 transparent transparent transparent;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  padding: 30px;\n}\n\n.tribute {\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  font-family: 'Merienda', cursive;\n}\n\n@media screen and (min-width: 600px) {\n  * {\n    font-size: 1.1rem;\n  }\n\n  .list-header>h1 {\n    font-size: 1.4rem;\n  }\n\n  .todolist {\n    width: 75%;\n  }\n\n  input[type=checkbox] {\n    transform: scale(1.5);\n  }\n}",""]);const a=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=i(m,r);r.byIndex=a,n.splice(a,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=t(o[s]);n[a].references--}for(var c=r(e,i),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),o=t(569),s=t.n(o),a=t(565),c=t.n(a),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=e=>{e.previousElementSibling.checked?(e.classList.add("line"),e.classList.remove("active"),e.readOnly=!0):(e.classList.remove("active"),e.readOnly=!0)},g=document.querySelector(".refresh"),v=document.getElementById("clear-btn"),b=new class{constructor(){this.store=JSON.parse(localStorage.getItem("ToDoList"))||[]}newTask(){const e=document.querySelector(".task-container");e.innerHTML="",this.store.forEach((n=>{n.completed?e.innerHTML+=`\n      <div class="task">\n          <input type="checkbox" class="check" checked>\n          <input id="${n.index}" class="new-task line" type="text" value="${n.description}">\n          <span id="${n.index}">\n            <i class="delete fa-solid fa-trash-can"></i>\n          </span>\n      </div>\n      `:e.innerHTML+=`\n      <div class="task">\n          <input type="checkbox" class="check">\n          <input id="${n.index}" class="new-task" type="text" value="${n.description}">\n          <span id="${n.index}">\n            <i class="delete fa-solid fa-trash-can"></i>\n          </span>\n      </div>\n      `})),this.pageEvents(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}resetIndex(){let e=1;this.store.forEach((n=>{n.index=e,e+=1})),localStorage.setItem("ToDoList",JSON.stringify(this.store))}addNewTask(e){const n={index:this.store.length+1,description:e,completed:!1};this.store.push(n),this.newTask(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}deleteTask(e){this.store=this.store.filter((n=>n.index!==e)),this.resetIndex(),this.newTask(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}editTask(e,n){this.store[e].description=n,localStorage.setItem("ToDoList",JSON.stringify(this.store))}markItemAsComplete(e){this.store[e].completed?this.store[e].completed=!1:this.store[e].completed=!0,localStorage.setItem("ToDoList",JSON.stringify(this.store))}clearCompletedTasks(){this.store=this.store.filter((e=>!1===e.completed)),this.resetIndex(),this.newTask()}clearAllTasks(){this.store=[],localStorage.setItem("ToDoList",JSON.stringify(this.store)),this.newTask()}localStorageToWebpage(){null!==localStorage&&(this.store=JSON.parse(localStorage.getItem("ToDoList"))||[],this.newTask())}pageEvents(){document.querySelectorAll(".check").forEach((e=>{e.addEventListener("change",(()=>{e.checked?(e.nextElementSibling.classList.add("line"),this.markItemAsComplete(Number(e.nextElementSibling.id)-1,this.store)):(e.nextElementSibling.classList.remove("line"),this.markItemAsComplete(Number(e.nextElementSibling.id)-1,this.store))}))})),document.querySelectorAll(".new-task").forEach((e=>{e.addEventListener("input",(()=>{this.editTask(Number(e.id)-1,e.value)})),e.addEventListener("click",(()=>{(e=>{e.classList.contains("line")?(e.readOnly=!1,e.classList.remove("line"),e.classList.add("active")):(e.classList.add("active"),e.readOnly=!1)})(e)})),e.addEventListener("blur",(()=>{f(e)})),e.addEventListener("keydown",(n=>{"Enter"===n.code&&f(e)}))})),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",(()=>{this.deleteTask(Number(e.parentElement.id))}))}))}};b.localStorageToWebpage(),v.addEventListener("click",(()=>{b.clearCompletedTasks()})),g.addEventListener("click",(()=>{b.clearAllTasks()})),function(){const e=document.getElementById("add-new-task"),n=document.getElementById("error-msg");document.querySelector(".enter").addEventListener("click",(()=>{""===e.value?(n.style.visibility="visible",setTimeout((()=>{n.style.visibility="hidden"}),2e3)):(b.addNewTask(e.value),e.value="")})),e.addEventListener("keydown",(t=>{"Enter"===t.code&&(""===e.value?(n.style.visibility="visible",setTimeout((()=>{n.style.visibility="hidden"}),2e3)):(b.addNewTask(e.value),e.value=""))})),localStorage.setItem("ToDoList",JSON.stringify(b.store))}()})()})();