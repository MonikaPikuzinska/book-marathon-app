(this["webpackJsonpbook-marathon-app"]=this["webpackJsonpbook-marathon-app"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(10)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),n=a(2),r=a.n(n),l=(a(8),function(e){var t=1,a=function(e){var t=document.querySelectorAll(".create-list__form__new-book"),a=e.target.classList[0];t.forEach((function(e){e.classList[0]===a&&e.remove()}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"create-list__form__add-category-btn",onClick:function(){var e=document.querySelector(".create-list__form"),o=document.createElement("label");o.innerHTML="Book category: ",o.setAttribute("class","create-list__form__input".concat(t," create-list__form__new-book create-list__form__category-description"));var c=document.createElement("input");c.type="text",c.setAttribute("class","create-list__form__input".concat(t," create-list__form__new-book create-list__form__category-input")),e.appendChild(o),e.appendChild(c);var n=document.createElement("label");n.innerHTML="Picked book: ",n.setAttribute("class","create-list__form__input".concat(t," create-list__form__new-book create-list__form__book-description"));var r=document.createElement("input");r.type="text",r.setAttribute("class","create-list__form__input".concat(t," create-list__form__new-book create-list__form__book-input")),e.appendChild(n),e.appendChild(r);var l=document.createElement("button");l.innerHTML="Delete",l.onclick=a,l.type="button",l.setAttribute("class","create-list__form__input".concat(t," create-list__form__new-book create-list__form__delete-btn")),e.appendChild(l);var i=document.createElement("br");i.setAttribute("class","create-list__form__input".concat(t," create-list__form__new-book")),e.appendChild(i),t++}},"Add new category"))}),i=function(){function e(e,t,a,o,c){this.id=e,this.name=t,this.categories=a,this.books=o,this.read=c}var t=[],a=function(e){var t=e.target.classList[1],a=e.target.classList[2];localStorage.setItem("".concat(a),null),document.querySelector(".".concat(t)).remove()},n=function(e){document.querySelectorAll("label").forEach((function(t){e.target.classList[1]===t.classList[1]&&t.classList.toggle("marathon__list__book--read")}))},r=0,l=function(){if(localStorage){for(var e=0;e<localStorage.length;e++){var o=localStorage.key(e);if("list"===o.substring(0,4)){var c=localStorage.getItem(o),l=JSON.parse(c);t.push(l)}}!function(){for(var e=0;e<localStorage.length;e++){var t=JSON.parse(localStorage.getItem("list".concat(e)));if(null!==t){var o=document.createElement("div");o.setAttribute("class","marathon__list marathon__list".concat(t.id)),document.querySelector(".marathon").appendChild(o);var c=document.querySelector(".marathon__list".concat(t.id)),l=document.createElement("div");l.onclick=a,l.setAttribute("class","marathon__list__delete-list-btn marathon__list".concat(t.id," list").concat(t.id)),c.appendChild(l);var i=document.createElement("h2");i.innerHTML="".concat(t.name),i.setAttribute("class","marathon__list__title"),c.appendChild(i),document.querySelector(".create-list__form__name-input").value="";for(var s=0;s<t.categories.length;s++){var _=document.createElement("input");_.setAttribute("type","checkbox"),_.setAttribute("id","book".concat(r+s)),_.setAttribute("class","marathon__list__checkbox checked".concat(r+s)),_.onclick=n,c.appendChild(_);var m=document.createElement("label");m.setAttribute("for","book".concat(r+s)),m.setAttribute("class","marathon__list__book checked".concat(r+s)),m.innerHTML="".concat(t.categories[s],"- ").concat(t.books[s]),c.appendChild(m),c.appendChild(document.createElement("br")),r++}}else console.log("No list")}}()}else console.log("Error: you don't have localStorage!")};Object(o.useEffect)((function(){l()}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){var o=[];document.querySelectorAll(".create-list__form__category-input").forEach((function(e){o.push(e.value),e.value=""}));var c=[];document.querySelectorAll(".create-list__form__book-input").forEach((function(e){c.push(e.value),e.value=""}));var l=document.querySelector(".create-list__form__name-input").value,i=new e(t.length,l,o,c,!1);t.push(i),function(e){if(localStorage){var t="list"+e.id,a=JSON.stringify(e);localStorage.setItem(t,a)}else console.log("Error: you don't have localStorage!")}(i),function(){var e=JSON.parse(localStorage.getItem("list".concat(localStorage.length-1))),t=document.createElement("div");t.setAttribute("class","marathon__list marathon__list".concat(e.id)),document.querySelector(".marathon").appendChild(t);var o=document.querySelector(".marathon__list".concat(e.id)),c=document.createElement("div");c.onclick=a,c.setAttribute("class","marathon__list__delete-list-btn marathon__list".concat(e.id," list").concat(e.id)),o.appendChild(c);var l=document.createElement("h2");l.innerHTML="".concat(e.name),l.setAttribute("class","marathon__list__title"),o.appendChild(l),document.querySelector(".create-list__form__name-input").value="";for(var i=0;i<e.categories.length;i++){var s=document.createElement("input");s.setAttribute("type","checkbox"),s.setAttribute("id","book".concat(r+i)),s.setAttribute("class","marathon__list__checkbox checked".concat(r+i)),s.onclick=n,o.appendChild(s);var _=document.createElement("label");_.setAttribute("for","book".concat(r+i)),_.setAttribute("class","marathon__list__book checked".concat(r+i)),_.innerHTML="".concat(e.categories[i],"- ").concat(e.books[i]),o.appendChild(_),o.appendChild(document.createElement("br")),r++}}()},className:"create-list__form__submit-btn"},"Submit"),c.a.createElement("div",{className:"marathon"}))},s=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"header"},"Make your own book list for a reading marathon!"),c.a.createElement("div",{className:"create-list"},c.a.createElement("form",{className:"create-list__form"},c.a.createElement("label",{className:"create-list__form__name-description"},"Marathons name: "),c.a.createElement("input",{type:"text",className:"create-list__form__name-input"}),c.a.createElement("br",null),c.a.createElement("label",{className:"create-list__form__category-description"},"Book category: "),c.a.createElement("input",{type:"text",className:"create-list__form__category-input"}),c.a.createElement("label",{className:"create-list__form__book-description"},"Picked book: "),c.a.createElement("input",{type:"text",className:"create-list__form__book-input"}),c.a.createElement("br",null)),c.a.createElement(l,null),c.a.createElement(i,null)))};a(9);var _=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.4fc2c3a2.chunk.js.map