(()=>{"use strict";function t(t,n){this.name=t,this.time=n}function n(t){this.time=t,this.status=!0}function e(){this.status=!0}function i(t){this.items=[],this.id=t}n.prototype.isAvailable=function(){return this.status},n.prototype.serveAsync=function(t){var n=this;return this.status=!1,new Promise((function(e){setTimeout((function(){n.status=!0,e(t)}),n.time)}))},e.prototype.isAvailable=function(){return this.status},e.prototype.cookAsync=function(t){var n=this;return this.status=!1,new Promise((function(e){setTimeout((function(){n.status=!0,e()}),t.time)}))},i.prototype.getList=function(){return items},i.prototype.add=function(t){this.items.push(t),this.render(this.id)},i.prototype.remove=function(t){this.items.splice(this.items.indexOf(t),1),this.render(this.id)},i.prototype.render=function(t){var n=document.getElementById(t);n.innerHTML="",this.items.forEach((function(t){var e=document.createElement("li");e.textContent=t.name,n.append(e)}))};var o=new i("orders"),s=new i("cookings"),r=new i("servings"),u=[new e,new e],c=[new n(1e3),new n(2e3)];function a(t){o.add(t),new Promise((function(t){var n,e=setInterval((function(){(n=u.find((function(t){return t.isAvailable()})))&&(clearInterval(e),t(n))}),100)})).then((function(n){return o.remove(t),s.add(t),n.cookAsync(t)})).then((function(){return new Promise((function(t){var n,e=setInterval((function(){(n=c.find((function(t){return t.isAvailable()})))&&(clearInterval(e),t(n))}),100)}))})).then((function(n){return s.remove(t),r.add(t),n.serveAsync(t)})).then((function(t){r.remove(t)}))}document.getElementById("soon").onclick=function(){a(new t("순댓국",1e3))},document.getElementById("hae").onclick=function(){a(new t("해장국",2e3))}})();