(() => {
  "use strict";
  var t = {
      222: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.CircleData = void 0),
          (e.CircleData = class {
            constructor(t) {
              this.items = t;
            }
            getAll() {
              return this.items;
            }
            getNext(t) {
              const e = this.items.indexOf(t);
              return this.items[(e + 1) % this.items.length];
            }
          });
      },
      123: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Item = void 0),
          (e.Item = class {
            constructor(t, e) {
              (this.name = t),
                (this.buttonEl = document.createElement("button")),
                (this.buttonEl.onclick = e.bind(this)),
                (this.buttonEl.textContent = this.name);
            }
            render(t) {
              t.append(this.buttonEl);
            }
            disable() {
              this.buttonEl.setAttribute("disabled", "true");
            }
            enable() {
              this.buttonEl.removeAttribute("disabled");
            }
          });
      },
    },
    e = {};
  function n(i) {
    var s = e[i];
    if (void 0 !== s) return s.exports;
    var l = (e[i] = { exports: {} });
    return t[i](l, l.exports, n), l.exports;
  }
  (() => {
    const t = n(222),
      e = n(123),
      i = document.getElementById("item-buttons"),
      s = document.getElementById("start"),
      l = document.getElementById("com");
    let r;
    const o = new t.CircleData([new e.Item("가위", c), new e.Item("바위", c), new e.Item("보", c)]);
    let a = o.getAll()[0];
    function c() {
      const t = o.getNext(this);
      this === a ? alert("비겼습니다.") : t === a ? alert("졌습니다.") : alert("이겼습니다."), clearInterval(r), u(!0);
    }
    function u(t) {
      s instanceof HTMLElement &&
        (t
          ? (s.removeAttribute("disabled"),
            o.getAll().forEach(function (t) {
              t.disable();
            }))
          : (s.setAttribute("disabled", "true"),
            o.getAll().forEach(function (t) {
              t.enable();
            })));
    }
    i &&
      o.getAll().forEach((t) => {
        t.render(i), t.disable();
      }),
      s &&
        (s.onclick = () => {
          u(!1),
            (r = setInterval(() => {
              (a = o.getNext(a)), l instanceof HTMLElement && (l.textContent = a.name);
            }, 100));
        });
  })();
})();
//# sourceMappingURL=main.js.map
