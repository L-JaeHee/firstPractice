(()=>{"use strict";const e=new Map;class t{constructor(t){this._id=t,e.set(this.id,this)}get id(){return this._id}get element(){return this._element}dispose(){var t;t=this._id,e.delete(t)}append(e){return this._element.append(e.element),this}}const n={getControl:function(t){return e.get(t)}},o=class extends t{constructor(e){super(e.id);const t=document.createElement("button");t.textContent=e.content,t.onclick=e.onclick,this._element=t}},c=class extends t{constructor(e){super(e.id);const t=document.createElement("div");this._element=t}},d=class extends t{constructor(e){super(e.id);const t=document.createElement("span");t.textContent=e.content,this._element=t}},s=class extends t{constructor(e){super(e.id);const t=document.createElement("ul");t.style.listStyle="none",t.style.padding="0",this._element=t,this._columns=e.columns,this.render(e.datas,e.columns)}reload(e){this._element.innerHTML="",this.render(e,this._columns)}render(e,t){e.forEach((e=>{const n=document.createElement("li");t.forEach((t=>{n.append(t.render(e))})),this._element.append(n)}))}},r=class extends t{constructor(e){var t,n;super(e.id);const o=document.createElement("input");o.type=e.inputType,o.checked=null!==(t=e.checked)&&void 0!==t&&t,o.onclick=null!==(n=e.onclick)&&void 0!==n?n:null,this._element=o}getValue(){return this._element.value}clear(){this._element.value=""}focus(){this._element.focus()}},i=[];function l(){const e=n.getControl("inputControl");e.getValue()?(i.push({id:crypto.randomUUID(),content:e.getValue(),checked:!1}),e.clear(),e.focus(),f()):alert("할일을 입력해주세요")}function u(e){return i.filter((t=>t.checked===e))}function a(e){return new r({id:`${e.id}:done`,inputType:"checkbox",checked:e.checked,onclick:t=>{e.checked=t.target.checked,h(),f()}}).element}function p(e){return new d({id:`${e.id}:todo`,content:e.content}).element}function m(e){return new o({id:`${e.id}:delete`,content:"삭제",onclick:t=>{i.splice(i.indexOf(e),1),e.checked?h():f(),["done","todo","delete"].forEach((t=>{var o;null===(o=n.getControl(`${e.id}:${t}`))||void 0===o||o.dispose()}))}}).element}function h(){n.getControl("donelist").reload(u(!0))}function f(){n.getControl("todolist").reload(u(!1))}!function(){const e=new c({id:"root"});document.body.append(e.element),e.append(new r({id:"inputControl",inputType:"text"})).append(new o({id:"inputBtnControl",content:"입력",onclick:l})).append(new s({id:"todolist",datas:u(!1),columns:[{render:a},{render:p},{render:m}]})).append(new s({id:"donelist",datas:u(!0),columns:[{render:a},{render:p},{render:m}]}))}()})();
//# sourceMappingURL=main.js.map