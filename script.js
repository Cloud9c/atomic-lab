!function(e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var n; n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.dragula = e() } }(function() { return function e(n, t, r) { function o(u, c) { if (!t[u]) { if (!n[u]) { var a = "function" == typeof require && require; if (!c && a) return a(u, !0); if (i) return i(u, !0); var f = new Error("Cannot find module '" + u + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = t[u] = { exports: {} }; n[u][0].call(l.exports, function(e) { var t = n[u][1][e]; return o(t ? t : e) }, l, l.exports, e, n, t, r) } return t[u].exports } for (var i = "function" == typeof require && require, u = 0; u < r.length; u++)o(r[u]); return o }({ 1: [function (e, n, t) { "use strict"; function r(e) { var n = u[e]; return n ? n.lastIndex = 0 : u[e] = n = new RegExp(c + e + a, "g"), n } function o(e, n) { var t = e.className; t.length ? r(n).test(t) || (e.className += " " + n) : e.className = n } function i(e, n) { e.className = e.className.replace(r(n), " ").trim() } var u = {}, c = "(?:^|\\s)", a = "(?:\\s|$)"; n.exports = { add: o, rm: i } }, {}], 2: [function (e, n, t) { (function (t) { "use strict"; function r(e, n) { function t(e) { return -1 !== le.containers.indexOf(e) || fe.isContainer(e) } function r(e) { var n = e ? "remove" : "add"; o(S, n, "mousedown", O), o(S, n, "mouseup", L) } function c(e) { var n = e ? "remove" : "add"; o(S, n, "mousemove", N) } function m(e) { var n = e ? "remove" : "add"; w[n](S, "selectstart", C), w[n](S, "click", C) } function h() { r(!0), L({}) } function C(e) { ce && e.preventDefault() } function O(e) { ne = e.clientX, te = e.clientY; var n = 1 !== i(e) || e.metaKey || e.ctrlKey; if (!n) { var t = e.target, r = T(t); r && (ce = r, c(), "mousedown" === e.type && (p(t) ? t.focus() : e.preventDefault())) } } function N(e) { if (ce) { if (0 === i(e)) return void L({}); if (void 0 === e.clientX || e.clientX !== ne || void 0 === e.clientY || e.clientY !== te) { if (fe.ignoreInputTextSelection) { var n = y("clientX", e), t = y("clientY", e), r = x.elementFromPoint(n, t); if (p(r)) return } var o = ce; c(!0), m(), D(), B(o); var a = u(W); Z = y("pageX", e) - a.left, ee = y("pageY", e) - a.top, E.add(ie || W, "gu-transit"), K(), U(e) } } } function T(e) { if (!(le.dragging && J || t(e))) { for (var n = e; v(e) && t(v(e)) === !1;) { if (fe.invalid(e, n)) return; if (e = v(e), !e) return } var r = v(e); if (r && !fe.invalid(e, n)) { var o = fe.moves(e, r, n, g(e)); if (o) return { item: e, source: r } } } } function X(e) { return !!T(e) } function Y(e) { var n = T(e); n && B(n) } function B(e) { $(e.item, e.source) && (ie = e.item.cloneNode(!0), le.emit("cloned", ie, e.item, "copy")), Q = e.source, W = e.item, re = oe = g(e.item), le.dragging = !0, le.emit("drag", W, Q) } function P() { return !1 } function D() { if (le.dragging) { var e = ie || W; M(e, v(e)) } } function I() { ce = !1, c(!0), m(!0) } function L(e) { if (I(), le.dragging) { var n = ie || W, t = y("clientX", e), r = y("clientY", e), o = a(J, t, r), i = q(o, t, r); i && (ie && fe.copySortSource || !ie || i !== Q) ? M(n, i) : fe.removeOnSpill ? R() : A() } } function M(e, n) { var t = v(e); ie && fe.copySortSource && n === Q && t.removeChild(W), k(n) ? le.emit("cancel", e, Q, Q) : le.emit("drop", e, n, Q, oe), j() } function R() { if (le.dragging) { var e = ie || W, n = v(e); n && n.removeChild(e), le.emit(ie ? "cancel" : "remove", e, n, Q), j() } } function A(e) { if (le.dragging) { var n = arguments.length > 0 ? e : fe.revertOnSpill, t = ie || W, r = v(t), o = k(r); o === !1 && n && (ie ? r && r.removeChild(ie) : Q.insertBefore(t, re)), o || n ? le.emit("cancel", t, Q, Q) : le.emit("drop", t, r, Q, oe), j() } } function j() { var e = ie || W; I(), z(), e && E.rm(e, "gu-transit"), ue && clearTimeout(ue), le.dragging = !1, ae && le.emit("out", e, ae, Q), le.emit("dragend", e), Q = W = ie = re = oe = ue = ae = null } function k(e, n) { var t; return t = void 0 !== n ? n : J ? oe : g(ie || W), e === Q && t === re } function q(e, n, r) { function o() { var o = t(i); if (o === !1) return !1; var u = H(i, e), c = V(i, u, n, r), a = k(i, c); return a ? !0 : fe.accepts(W, i, Q, c) } for (var i = e; i && !o();)i = v(i); return i } function U(e) { function n(e) { le.emit(e, f, ae, Q) } function t() { s && n("over") } function r() { ae && n("out") } if (J) { e.preventDefault(); var o = y("clientX", e), i = y("clientY", e), u = o - Z, c = i - ee; J.style.left = u + "px", J.style.top = c + "px"; var f = ie || W, l = a(J, o, i), d = q(l, o, i), s = null !== d && d !== ae; (s || null === d) && (r(), ae = d, t()); var p = v(f); if (d === Q && ie && !fe.copySortSource) return void (p && p.removeChild(f)); var m, h = H(d, l); if (null !== h) m = V(d, h, o, i); else { if (fe.revertOnSpill !== !0 || ie) return void (ie && p && p.removeChild(f)); m = re, d = Q } (null === m && s || m !== f && m !== g(f)) && (oe = m, d.insertBefore(f, m), le.emit("shadow", f, d, Q)) } } function _(e) { E.rm(e, "gu-hide") } function F(e) { le.dragging && E.add(e, "gu-hide") } function K() { if (!J) { var e = W.getBoundingClientRect(); J = W.cloneNode(!0), J.style.width = d(e) + "px", J.style.height = s(e) + "px", E.rm(J, "gu-transit"), E.add(J, "gu-mirror"), fe.mirrorContainer.appendChild(J), o(S, "add", "mousemove", U), E.add(fe.mirrorContainer, "gu-unselectable"), le.emit("cloned", J, W, "mirror") } } function z() { J && (E.rm(fe.mirrorContainer, "gu-unselectable"), o(S, "remove", "mousemove", U), v(J).removeChild(J), J = null) } function H(e, n) { for (var t = n; t !== e && v(t) !== e;)t = v(t); return t === S ? null : t } function V(e, n, t, r) { function o() { var n, o, i, u = e.children.length; for (n = 0; u > n; n++) { if (o = e.children[n], i = o.getBoundingClientRect(), c && i.left + i.width / 2 > t) return o; if (!c && i.top + i.height / 2 > r) return o } return null } function i() { var e = n.getBoundingClientRect(); return u(c ? t > e.left + d(e) / 2 : r > e.top + s(e) / 2) } function u(e) { return e ? g(n) : n } var c = "horizontal" === fe.direction, a = n !== e ? i() : o(); return a } function $(e, n) { return "boolean" == typeof fe.copy ? fe.copy : fe.copy(e, n) } var G = arguments.length; 1 === G && Array.isArray(e) === !1 && (n = e, e = []); var J, Q, W, Z, ee, ne, te, re, oe, ie, ue, ce, ae = null, fe = n || {}; void 0 === fe.moves && (fe.moves = l), void 0 === fe.accepts && (fe.accepts = l), void 0 === fe.invalid && (fe.invalid = P), void 0 === fe.containers && (fe.containers = e || []), void 0 === fe.isContainer && (fe.isContainer = f), void 0 === fe.copy && (fe.copy = !1), void 0 === fe.copySortSource && (fe.copySortSource = !1), void 0 === fe.revertOnSpill && (fe.revertOnSpill = !1), void 0 === fe.removeOnSpill && (fe.removeOnSpill = !1), void 0 === fe.direction && (fe.direction = "vertical"), void 0 === fe.ignoreInputTextSelection && (fe.ignoreInputTextSelection = !0), void 0 === fe.mirrorContainer && (fe.mirrorContainer = x.body); var le = b({ containers: fe.containers, start: Y, end: D, cancel: A, remove: R, destroy: h, canMove: X, dragging: !1 }); return fe.removeOnSpill === !0 && le.on("over", _).on("out", F), r(), le } function o(e, n, r, o) { var i = { mouseup: "touchend", mousedown: "touchstart", mousemove: "touchmove" }, u = { mouseup: "pointerup", mousedown: "pointerdown", mousemove: "pointermove" }, c = { mouseup: "MSPointerUp", mousedown: "MSPointerDown", mousemove: "MSPointerMove" }; t.navigator.pointerEnabled ? w[n](e, u[r], o) : t.navigator.msPointerEnabled ? w[n](e, c[r], o) : (w[n](e, i[r], o), w[n](e, r, o)) } function i(e) { if (void 0 !== e.touches) return e.touches.length; if (void 0 !== e.which && 0 !== e.which) return e.which; if (void 0 !== e.buttons) return e.buttons; var n = e.button; return void 0 !== n ? 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0 : void 0 } function u(e) { var n = e.getBoundingClientRect(); return { left: n.left + c("scrollLeft", "pageXOffset"), top: n.top + c("scrollTop", "pageYOffset") } } function c(e, n) { return "undefined" != typeof t[n] ? t[n] : S.clientHeight ? S[e] : x.body[e] } function a(e, n, t) { var r, o = e || {}, i = o.className; return o.className += " gu-hide", r = x.elementFromPoint(n, t), o.className = i, r } function f() { return !1 } function l() { return !0 } function d(e) { return e.width || e.right - e.left } function s(e) { return e.height || e.bottom - e.top } function v(e) { return e.parentNode === x ? null : e.parentNode } function p(e) { return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName || m(e) } function m(e) { return e ? "false" === e.contentEditable ? !1 : "true" === e.contentEditable ? !0 : m(v(e)) : !1 } function g(e) { function n() { var n = e; do n = n.nextSibling; while (n && 1 !== n.nodeType); return n } return e.nextElementSibling || n() } function h(e) { return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e } function y(e, n) { var t = h(n), r = { pageX: "clientX", pageY: "clientY" }; return e in r && !(e in t) && r[e] in t && (e = r[e]), t[e] } var b = e("contra/emitter"), w = e("crossvent"), E = e("./classes"), x = document, S = x.documentElement; n.exports = r }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "./classes": 1, "contra/emitter": 5, crossvent: 6 }], 3: [function (e, n, t) { n.exports = function (e, n) { return Array.prototype.slice.call(e, n) } }, {}], 4: [function (e, n, t) { "use strict"; var r = e("ticky"); n.exports = function (e, n, t) { e && r(function() { e.apply(t || null, n || []) }) } }, { ticky: 9 }], 5: [function (e, n, t) { "use strict"; var r = e("atoa"), o = e("./debounce"); n.exports = function (e, n) { var t = n || {}, i = {}; return void 0 === e && (e = {}), e.on = function (n, t) { return i[n] ? i[n].push(t) : i[n] = [t], e }, e.once = function (n, t) { return t._once = !0, e.on(n, t), e }, e.off = function (n, t) { var r = arguments.length; if (1 === r) delete i[n]; else if (0 === r) i = {}; else { var o = i[n]; if (!o) return e; o.splice(o.indexOf(t), 1) } return e }, e.emit = function() { var n = r(arguments); return e.emitterSnapshot(n.shift()).apply(this, n) }, e.emitterSnapshot = function (n) { var u = (i[n] || []).slice(0); return function() { var i = r(arguments), c = this || e; if ("error" === n && t["throws"] !== !1 && !u.length) throw 1 === i.length ? i[0] : i; return u.forEach(function (r) { t.async ? o(r, i, c) : r.apply(c, i), r._once && e.off(n, r) }), e } }, e } }, { "./debounce": 4, atoa: 3 }], 6: [function (e, n, t) { (function (t) { "use strict"; function r(e, n, t, r) { return e.addEventListener(n, t, r) } function o(e, n, t) { return e.attachEvent("on" + n, f(e, n, t)) } function i(e, n, t, r) { return e.removeEventListener(n, t, r) } function u(e, n, t) { var r = l(e, n, t); return r ? e.detachEvent("on" + n, r) : void 0 } function c(e, n, t) { function r() { var e; return p.createEvent ? (e = p.createEvent("Event"), e.initEvent(n, !0, !0)) : p.createEventObject && (e = p.createEventObject()), e } function o() { return new s(n, { detail: t }) } var i = -1 === v.indexOf(n) ? o() : r(); e.dispatchEvent ? e.dispatchEvent(i) : e.fireEvent("on" + n, i) } function a(e, n, r) { return function (n) { var o = n || t.event; o.target = o.target || o.srcElement, o.preventDefault = o.preventDefault || function() { o.returnValue = !1 }, o.stopPropagation = o.stopPropagation || function() { o.cancelBubble = !0 }, o.which = o.which || o.keyCode, r.call(e, o) } } function f(e, n, t) { var r = l(e, n, t) || a(e, n, t); return h.push({ wrapper: r, element: e, type: n, fn: t }), r } function l(e, n, t) { var r = d(e, n, t); if (r) { var o = h[r].wrapper; return h.splice(r, 1), o } } function d(e, n, t) { var r, o; for (r = 0; r < h.length; r++)if (o = h[r], o.element === e && o.type === n && o.fn === t) return r } var s = e("custom-event"), v = e("./eventmap"), p = t.document, m = r, g = i, h = []; t.addEventListener || (m = o, g = u), n.exports = { add: m, remove: g, fabricate: c } }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "./eventmap": 7, "custom-event": 8 }], 7: [function (e, n, t) { (function(e) { "use strict"; var t = [], r = "", o = /^on/; for (r in e) o.test(r) && t.push(r.slice(2)); n.exports = t }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 8: [function (e, n, t) { (function(e) { function t() { try { var e = new r("cat", { detail: { foo: "bar" } }); return "cat" === e.type && "bar" === e.detail.foo } catch (n) { } return !1 } var r = e.CustomEvent; n.exports = t() ? r : "function" == typeof document.createEvent ? function (e, n) { var t = document.createEvent("CustomEvent"); return n ? t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail) : t.initCustomEvent(e, !1, !1, void 0), t } : function (e, n) { var t = document.createEventObject(); return t.type = e, n ? (t.bubbles = Boolean(n.bubbles), t.cancelable = Boolean(n.cancelable), t.detail = n.detail) : (t.bubbles = !1, t.cancelable = !1, t.detail = void 0), t } }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 9: [function (e, n, t) { var r, o = "function" == typeof setImmediate; r = o ? function(e) { setImmediate(e) } : function(e) { setTimeout(e, 0) }, n.exports = r }, {}] }, {}, [2])(2) });

(function() {
  function h(c) { c = c.target; var a = c.childNodes.length; if ("button" !== c.localName || !a) return c.classList.contains("rippleJS") ? c : null; for (var b = 0; b < a; ++b) { var g = c.childNodes[b], e = g.classList; if (e && e.contains("rippleJS")) return g } return null }
  function n(c, a) {
    var b = h(a); if (b) {
      var g = b.classList, e = b.getAttribute("data-event"); if (!e || e === c) {
        b.setAttribute("data-event", c); var d = b.getBoundingClientRect(); e = a.offsetX; void 0 !== e ? a = a.offsetY : (e = a.clientX - d.left, a = a.clientY - d.top); var f = document.createElement("div"); d = d.width === d.height ? 1.412 * d.width : Math.sqrt(d.width * d.width + d.height * d.height); var k = 2 * d + "px"; f.style.width = k; f.style.height = k; f.style.marginLeft = -d + e + "px"; f.style.marginTop = -d + a + "px"; f.className = "ripple"; b.appendChild(f); window.setTimeout(function() { f.classList.add("held") },
          0); var l = "mousedown" === c ? "mouseup" : "touchend", m = function() { document.removeEventListener(l, m); f.classList.add("done"); window.setTimeout(function() { b.removeChild(f); b.children.length || (g.remove("active"), b.removeAttribute("data-event")) }, 650) }; document.addEventListener(l, m)
      }
    }
  }
  function p() { var c = c || document; c.addEventListener("mousedown", function (a) { 0 === a.button && n(a.type, a) }, { passive: !0 }); c.addEventListener("touchstart", function (a) { for (var b = 0; b < a.changedTouches.length; ++b)n(a.type, a.changedTouches[b]) }, { passive: !0 }) }; (function() {
    function c() {
      var a = document.createElement("div"); a.className = "rippleJS"; document.body.appendChild(a); var b = "absolute" === window.getComputedStyle(a).position; document.body.removeChild(a); b || (a = document.createElement("style"), a.textContent = '/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
        document.head.insertBefore(a, document.head.firstChild)); p()
    } "complete" === document.readyState ? c() : window.addEventListener("load", c)
  })();
}())

let animate;

window.addEventListener("load", function(e) {
  if (localStorage.getItem("slot") !== null) {
    const slot = localStorage.getItem("slot").split(";");
    const main = localStorage.getItem("main");

    for (let i = 0; i < 9; i++)
      document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML = slot[i];

    document.getElementById("main").innerHTML = main;
  } else {
    localStorage.setItem("lineCounter", "0");
    localStorage.setItem("elementCounter", "0");
  }
});

function mouseDrag(x, y) {
  const target = document.getElementById("drag-area");
  target.style.left = x + "px";
  target.style.top = y + "px";
  target.style.display = "initial";

  function mouseMove(e) {
    target.style.width = Math.abs(e.pageX - x) + "px";
    target.style.height = Math.abs(e.pageY - y) + "px";

    window.requestAnimationFrame(function() {
      if (e.pageX < x)
        target.style.left = e.pageX + "px";
      if (e.pageY < y)
        target.style.top = e.pageY + "px";
    });

    const rect2 = target.getBoundingClientRect();
    const elements = document.getElementById("main").getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++) {
      const rect1 = elements[i].getBoundingClientRect();
      if (rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top)
        elements[i].classList.add("selected");
      else
        elements[i].classList.remove("selected");
    }
  }

  function mouseUp() {
    target.style.display = "none";
    target.style.width = "0";
    target.style.height = "0";
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function followCursor(target, diffX, diffY) {
  const elements = document.querySelectorAll("#main > .element.selected");
  const molecules = document.getElementById("main").getElementsByClassName("molecule");

  function mouseMove(e) {
    const x = e.movementX;
    const y = e.movementY;
    window.requestAnimationFrame(function() {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.transform = "translate(" + (+element.style.transform.match(/-?\d+\.?\d*/g)[0] + x) + "px," + (+element.style.transform.match(/-?\d+\.?\d*/g)[1] + y) + "px)";
      }
      for (i = 0; i < selectedMolecules.length; i++) {
        const sm = selectedMolecules[i].getAttribute("data-line").split(";");
        for (let j = 0; j < sm.length; j++) {
          const line = document.getElementById(sm[j]);
          line.setAttribute("x1", parseInt(line.getAttribute("x1")) + x);
          line.setAttribute("x2", parseInt(line.getAttribute("x2")) + x);
          line.setAttribute("y1", parseInt(line.getAttribute("y1")) + y);
          line.setAttribute("y2", parseInt(line.getAttribute("y2")) + y);
        }
        const moleculeElements = selectedMolecules[i].children;
        for (j = 0; j < moleculeElements.length; j++) {
          const element = moleculeElements[j];
          element.style.transform = "translate(" + (+element.style.transform.match(/-?\d+\.?\d*/g)[0] + x) + "px," + (+element.style.transform.match(/-?\d+\.?\d*/g)[1] + y) + "px)";
        }
      }
    });
  };

  function mouseUp() {
    for (let i = 0; i < elements.length; i++)
      elements[i].style.boxShadow = "";

    const shadows = document.getElementById("main").getElementsByClassName("m-shadow");
    while (shadows.length !== 0)
      shadows[0].classList.remove("m-shadow");

    target.style.cursor = "";
    document.getElementById("main").removeEventListener("mousemove", mouseMove);
    document.getElementById("main").removeEventListener("mouseup", mouseUp);
  };

  for (let i = 0; i < molecules.length; i++) {
    const lines = molecules[i].getAttribute("data-line").split(";");
    for (let j = 0; j < molecules[i].children.length; j++) {
      if (molecules[i].children[j].classList.contains("selected")) {
        molecules[i].classList.add("selected");
        molecules[i].classList.add("m-shadow");
        for (let k= 0; k < lines.length; k++) {
          document.getElementById(lines[k]).classList.add("selected");
        }
        break;
      }
    }
  }

  const selectedMolecules = document.getElementById("main").querySelectorAll(".molecule.selected");

  document.getElementById("main").addEventListener("mousemove", mouseMove);
  document.getElementById("main").addEventListener("mouseup", mouseUp);

  for (let i = 0; i < elements.length; i++){
    elements[i].style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23), inset 0 0 0 1px #FC5185";
  }
  target.style.cursor = "grabbing"
}

function toggleMenu(command, e) {
  if (!e.target.classList.contains("element"))
    while (document.getElementById("main").getElementsByClassName("selected")[0])
      document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");

  const rect = document.getElementById("menu");

  rect.style.display = command;

  if (command === "block") {
    if (e.pageY + rect.offsetHeight >= window.innerHeight) {
      rect.style.top = window.innerHeight - rect.offsetHeight + "px";
    }
    else
      rect.style.top = e.pageY + "px";

    if (e.pageX + rect.offsetWidth >= window.innerWidth)
      rect.style.left = window.innerWidth - 200 + "px";
    else
      rect.style.left = e.pageX + "px";
  }
}

function openMenu(e) {
  e.preventDefault();
  if (!e.target.classList.contains("option")) {
    document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = "";
    document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = "";
    document.getElementById("menu-options").getElementsByClassName("option")[2].innerHTML = "";

    if (e.target.id === "hotbar") {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear All Slots</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
        for (let i = 0; i < 9; i++)
          document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.parentElement.classList.contains("slot")) {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear Slot</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
        e.target.parentElement.innerHTML = "";
        toggleMenu("none", e);
      };
    } else if (e.target.id === "main") {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Clear Lab</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
        document.getElementById("svg").innerHTML = "";
        document.getElementById("main").innerHTML = document.getElementById("svg").outerHTML;
        toggleMenu("none", e);
      };
    } else if ((e.target.parentElement.id === "main" || e.target.parentElement.classList.contains("molecule")) && e.target.classList.contains("element")) {
      document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg><span>Duplicate</span>';
      document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg><span>Remove</span>';
      if (!e.target.classList.contains("selected"))
        while (document.getElementById("main").getElementsByClassName("selected")[0])
          document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");

      if (document.getElementById("main").getElementsByClassName("selected")[1]) {
        let placement = 1;
        document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
          let switcheroo = [];
          for (let i = 0; i < document.getElementById("main").getElementsByClassName("selected").length; i++) {
            const clone = document.getElementById("main").getElementsByClassName("selected")[i].cloneNode(true);
            clone.classList.remove("selected");
            document.getElementById("main").appendChild(clone);
            clone.style.transform = "translate(" + (+clone.style.transform.match(/-?\d+\.?\d*/g)[0] + 16) + "px," + (+clone.style.transform.match(/-?\d+\.?\d*/g)[1] + 16) + "px)";
            switcheroo.push(clone, document.getElementById("main").getElementsByClassName("selected")[i]);
          }
          for (i = 0; i < switcheroo.length; i++) {
            if (switcheroo[i].classList.contains("selected"))
              switcheroo[i].classList.remove("selected");
            else
              switcheroo[i].classList.add("selected");
          }
          toggleMenu("none", e);
        };
        if (document.getElementById("main").getElementsByClassName("selected").length === 2) {
          const ele1 = document.getElementById("main").getElementsByClassName("selected")[0];
          const ele2 = document.getElementById("main").getElementsByClassName("selected")[1];
          if (ele1.getAttribute("data-line") === null || ele1.getAttribute("data-line") !== ele2.getAttribute("data-line")) {
            document.getElementById("menu-options").getElementsByClassName("option")[2].innerHTML = document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML;
            document.getElementById("menu-options").getElementsByClassName("option")[1].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#656565" d="M18,19C16.89,19 16,18.1 16,17C16,15.89 16.89,15 18,15A2,2 0 0,1 20,17A2,2 0 0,1 18,19M18,13A4,4 0 0,0 14,17A4,4 0 0,0 18,21A4,4 0 0,0 22,17A4,4 0 0,0 18,13M12,11.1A1.9,1.9 0 0,0 10.1,13A1.9,1.9 0 0,0 12,14.9A1.9,1.9 0 0,0 13.9,13A1.9,1.9 0 0,0 12,11.1M6,19C4.89,19 4,18.1 4,17C4,15.89 4.89,15 6,15A2,2 0 0,1 8,17A2,2 0 0,1 6,19M6,13A4,4 0 0,0 2,17A4,4 0 0,0 6,21A4,4 0 0,0 10,17A4,4 0 0,0 6,13M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M12,10A4,4 0 0,0 16,6A4,4 0 0,0 12,2A4,4 0 0,0 8,6A4,4 0 0,0 12,10Z"/></svg><span>Create bond</span>'
            document.getElementById("menu-options").getElementsByClassName("option")[1].onclick = function() {
              const lineCounter = parseInt(localStorage.getItem("lineCounter"), 10) + 1;
              localStorage.setItem("lineCounter", lineCounter);
              if (ele1.getAttribute("data-line") !== null)
                ele1.setAttribute("data-line", ele1.getAttribute("data-line") + ";#" +  lineCounter);
              else
                ele1.setAttribute("data-line", "#" + lineCounter);
              if (ele2.getAttribute("data-line") !== null)
                ele2.setAttribute("data-line", ele2.getAttribute("data-line") + ";#" + lineCounter);
              else
                ele2.setAttribute("data-line", "#" + lineCounter);
              const m1 = ele1.parentElement;
              const m2 = ele2.parentElement;
              let molecule;
              if (m1.classList.contains("molecule")) {
                molecule = m1;
                if (m2.classList.contains("molecule") && m1 !== m2) {
                  while(m2.children.length != 0) 
                    molecule.appendChild(m2.children[0]);
                  molecule.setAttribute("data-line", molecule.getAttribute("data-line") + ";" + m2.getAttribute("data-line"))
                  m2.remove();
                } else {
                  molecule.appendChild(ele2);
                }
              } else if (m2.classList.contains("molecule")) {
                molecule = m2;
                molecule.appendChild(ele1);
              } else {
                molecule = document.createElement("div");
                molecule.classList.add("molecule");
                molecule.appendChild(ele1);
                molecule.appendChild(ele2);
                document.getElementById("main").appendChild(molecule);
              }
              if (molecule.getAttribute("data-line") !== null)
                molecule.setAttribute("data-line", molecule.getAttribute("data-line") + ";#" + lineCounter)
              else
                molecule.setAttribute("data-line", "#" + lineCounter);
              const svg = document.getElementById("svg");
              const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.id = "#" + lineCounter;
              svg.appendChild(line);
              let placement1 = ele1.style.transform.match(/-?\d+\.?\d*/g);
              let placement2 = ele2.style.transform.match(/-?\d+\.?\d*/g);

              const diffX = +placement1[0] - +placement2[0];
              const diffY = +placement1[1] - +placement2[1];

              console.log(Math.atan(diffX, diffY) * 180 / Math.PI)

              // ele2.style.transform = "translate(" + (+ele2.style.transform.match(/-?\d+\.?\d*/g)[0] + diffX) + "px," + (+ele2.style.transform.match(/-?\d+\.?\d*/g)[1] + diffY) + "px)";

              placement2 = ele2.style.transform.match(/-?\d+\.?\d*/g);
              line.setAttribute("x1", +placement1[0] + ele1.offsetWidth/2);
              line.setAttribute("y1", +placement1[1] + ele1.offsetHeight/2);
              line.setAttribute("x2", +placement2[0] + ele1.offsetWidth/2);
              line.setAttribute("y2", +placement2[1] + ele1.offsetHeight/2);
              line.setAttribute("ele1", ele1.id);
              line.setAttribute("ele2", ele2.id);
            }
            placement++;
          }
        }
        document.getElementById("menu-options").getElementsByClassName("option")[placement].onclick = function() {
          while (document.getElementById("main").getElementsByClassName("selected")[0]) {
            const selected = document.getElementById("main").getElementsByClassName("selected")[0];
            let lines = selected.getAttribute("data-line");
            let removeParent = false;
            if (lines !== null && selected.classList.contains("element")) {
              lines = lines.split(";");
              const parent = selected.parentElement;
              let parentLines = parent.getAttribute("data-line");
              if (parentLines !== null)
                parentLines = parentLines.split(";");

              for (let i = 0; i < lines.length; i++) {
                let lines1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1")).getAttribute("data-line").split(";");
                lines1.splice(lines1.indexOf(lines[i]), 1);
                const ele1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1"));
                ele1.setAttribute("data-line", lines1.join(";"));
                if (lines1.length === 0)
                  document.getElementById("main").appendChild(ele1);

                
                let lines2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2")).getAttribute("data-line").split(";");
                lines2.splice(lines2.indexOf(lines[i]), 1);
                const ele2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2"))
                ele2.setAttribute("data-line", lines1.join(";"));
                if (lines2.length === 0)
                  document.getElementById("main").appendChild(ele2);

                document.getElementById(lines[i]).remove();
                if (parentLines !== null)
                  parentLines.splice(parentLines.indexOf(lines[i]), 1);
              }
              parent.setAttribute("data-line", parentLines.join(";"))
              if (parentLines.length === 0)
                removeParent = true;
            }
            selected.remove();
            if (removeParent)
              parent.outerHTML = parent.innerHTML;
          }
          toggleMenu("none", e);
        };
      } else {
        document.getElementById("menu-options").getElementsByClassName("option")[0].onclick = function() {
          const clone = e.target.cloneNode(true);
          document.getElementById("main").appendChild(clone);
          clone.style.transform = "translate(" + (+clone.style.transform.match(/-?\d+\.?\d*/g)[0] + 16) + "px," + (+clone.style.transform.match(/-?\d+\.?\d*/g)[1] + 16) + "px)";
          e.target.classList.remove("selected");
          toggleMenu("none", e);
        };
        document.getElementById("menu-options").getElementsByClassName("option")[1].onclick = function() {
          let lines = e.target.getAttribute("data-line");
          let removeParent = false;
          if (lines !== null) {
            lines = lines.split(";");
            parent = e.target.parentElement;
            let parentLines = parent.getAttribute("data-line");
            if (parentLines !== null)
              parentLines = parentLines.split(";");
            for (let i = 0; i < lines.length; i++) {
              let lines1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1")).getAttribute("data-line").split(";");
              lines1.splice(lines1.indexOf(lines[i]), 1);
              const ele1 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele1"));
              ele1.setAttribute("data-line", lines1.join(";"));
              if (lines1.length === 0)
                document.getElementById("main").appendChild(ele1);

              
              let lines2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2")).getAttribute("data-line").split(";");
              lines2.splice(lines2.indexOf(lines[i]), 1);
              const ele2 = document.getElementById(document.getElementById(lines[i]).getAttribute("ele2"))
              ele2.setAttribute("data-line", lines1.join(";"));
              if (lines2.length === 0)
                document.getElementById("main").appendChild(ele2);

              document.getElementById(lines[i]).remove();
              if (parentLines !== null)
                parentLines.splice(parentLines.indexOf(lines[i]), 1);
            }
            parent.setAttribute("data-line", parentLines.join(";"))
            if (parentLines.length === 0)
              removeParent = true;
          }
          e.target.remove();
          if (removeParent)
            parent.outerHTML = parent.innerHTML;
          toggleMenu("none", e);
        };
        e.target.classList.add("selected");
      }
    }

    if (document.getElementById("menu-options").getElementsByClassName("option")[0].innerHTML.length > 0)
      toggleMenu("block", e);
  }
}

function overlayToggle() {
  if (document.getElementById("overlay").style.display === "none" || document.getElementById("overlay").style.display === "") {
    document.getElementById("overlay").style.display = "initial";
    document.getElementById("rack-dialog").style.display = "flex";
    document.getElementById("overlay").style.animation = "opacity 0.25s forwards";
    document.getElementById("rack-dialog").children[0].style.animation = "opacity 0.25s forwards";
  } else {
    document.getElementById("overlay").style.animation = "opacityInverse 0.25s forwards";
    document.getElementById("rack-dialog").children[0].style.animation = "opacityInverse 0.25s forwards";
    setTimeout(function() {
      document.getElementById("rack-dialog").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }, 500)
  }
}

function sliderAdjust(e) {
  if (e.target.id === "slider-thumb") {
    const target = e.target;
    const mouseMove = function mouseMove(e) {

      let pos = e.pageY - 141;

      if (pos < -7)
        pos = -7;
      else if (pos > 93)
        pos = 93;
      else if (pos < 53 && pos > 33)
        pos = 43;
      target.style.top = pos + "px";

      if (pos < 0)
        pos = 0;

      document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
    }

    const mouseUp = function mouseUp(e) {
      document.body.removeEventListener("mouseup", mouseUp);
      document.body.removeEventListener("mousemove", mouseMove);
      const changePX = document.getElementById("slider-thumb").offsetTop;
      document.getElementById("slider-thumb").style.top = changePX + "px";
      document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + changePX + "%, #3fc1c9 " + changePX + "%)";
    }

    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseup", mouseUp);
  } else {
    let pos = e.pageY - 148;
    if (pos < -7)
      pos = -7;
    else if (pos > 93)
      pos = 93;
    document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
    document.getElementById("slider-thumb").style.top = pos + "px";
  }
}

document.getElementById("rack").addEventListener("click", overlayToggle);

document.getElementById("overlay").addEventListener("click", overlayToggle);

document.getElementById("close").addEventListener("click", overlayToggle);

document.getElementById("clear-progress").addEventListener("click", function() {
  window.removeEventListener("beforeunload", saveProgress);
  localStorage.clear();
  location.reload();
})

document.getElementById("react").addEventListener("click", function() {
  if (animate) {
    cancelAnimationFrame(animate);
    animate = undefined;

    for (let i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
      document.getElementById("main").getElementsByClassName("element")[i].style.transform = "translate(0, 0)";
      document.getElementById("main").getElementsByClassName("element")[i].style.transition = "transform 0.5s";
    }

    setTimeout(function() {
      for (let i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
        document.getElementById("main").getElementsByClassName("element")[i].style.transition = "";
      }
    }, 500);

  } else if (document.getElementById("main").getElementsByClassName("element").length > 1) {
    animate = requestAnimationFrame(frame);
  } else {
    document.getElementById("snackbar").className = "show";
    document.getElementById("snackbar").style.transition = "all 0.5s"

    const autoClose = setTimeout(function() {
      document.getElementById("snackbar").classList = "";
    }, 3000);

    const closeSnackBar = function closeSnackBar() {
      clearTimeout(autoClose);
      document.getElementById("snackbar").classList = "";
      document.getElementById("snackbar-close").removeEventListener("click", closeSnackBar);
    }

    document.getElementById("snackbar-close").addEventListener("click", closeSnackBar);
  }

  function frame() {
    for (let i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
      const element = document.getElementById("main").getElementsByClassName("element")[i];

      element.style.transform = "translate(" + (+element.style.transform.match(/-?\d+\.?\d*/g)[0] + 1) + "px," + (+element.style.transform.match(/-?\d+\.?\d*/g)[1] + 1) + "px)";
    }
    animate = requestAnimationFrame(frame);
  }
});

document.getElementById("periodic-table").addEventListener("mouseover", function(e) {
  if (event.target.classList.contains("element")) {
    if (event.target.parentElement.id === "periodic-table") {
      document.getElementById("atomic-number").textContent = [].indexOf.call(document.getElementById("periodic-table").getElementsByClassName("element"), event.target) + 1;
      document.getElementById("atomic-symbol").textContent = event.target.children[0].textContent;
      document.getElementById("atomic-name").textContent = event.target.children[0].getAttribute("title");
      document.getElementById("atomic-mass").textContent = event.target.getAttribute("data-amass");
      if (event.target.getAttribute("data-amass") % 1 === 0)
        document.getElementById("atomic-mass").textContent = "(" + document.getElementById("atomic-mass").textContent + ")";
      document.getElementById("closeup").style.background = getComputedStyle(event.target).background;
    } else {
      document.getElementById("atomic-number").textContent = "Atomic No.";
      document.getElementById("atomic-symbol").textContent = "Symbol";
      document.getElementById("atomic-name").textContent = "Name";
      document.getElementById("atomic-mass").textContent = "Atomic Mass";
      document.getElementById("closeup").style.background = "";
    }
  }
  else {
    document.getElementById("atomic-number").textContent = "Atomic No.";
    document.getElementById("atomic-symbol").textContent = "Symbol";
    document.getElementById("atomic-name").textContent = "Name";
    document.getElementById("atomic-mass").textContent = "Atomic Mass";
    document.getElementById("closeup").style.background = "";
  }
});

document.addEventListener("keydown", function(e) {
  const hoverElement = document.querySelectorAll(":hover")[document.querySelectorAll(":hover").length - 1]
  if (/^[1-9]$/i.test(event.key) && hoverElement.classList.contains("element")) {
    const target = document.getElementById("hotbar").getElementsByClassName("slot")[event.key - 1];
    const clone = hoverElement.cloneNode(true);
    clone.removeAttribute("style");
    clone.classList.remove("gu-mirror");

    target.textContent = "";

    target.appendChild(clone);
    target.classList.add("pulse");
    setTimeout(function(e) {
      document.getElementById("hotbar").getElementsByClassName("slot")[e].classList.remove("pulse");
    }, 500, event.key - 1);
  } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    let pos = document.getElementById("slider-thumb").offsetTop;
    if (event.key === "ArrowUp")
      pos -= 2;
    else
      pos += 2;

    if (pos < -7)
      pos = -7;
    else if (pos > 93)
      pos = 93;
    document.getElementById("slider-thumb").style.top = pos + "px";
    document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
  }
});

document.getElementById("slider").addEventListener("mousedown", sliderAdjust);

document.addEventListener("mousedown", function(e) {
  if (!e.path.includes(document.getElementById("menu"))) {
    toggleMenu("none", e);
  }
  if (e.path.includes(document.getElementById("main")) && e.button === 0) {
    if (e.target.classList.contains("element")) {
      if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
      const diffX = e.pageX - e.target.offsetLeft;
      const diffY = e.pageY - e.target.offsetTop;

      if (document.getElementById("main").getElementsByClassName("selected").length < 2 || !e.target.classList.contains("selected"))
        while (document.getElementById("main").getElementsByClassName("selected")[0])
          document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");

      e.target.classList.add("selected");

      const mouseMove = function() {
        followCursor(e.target, diffX, diffY);
        document.getElementById("main").removeEventListener("mouseup", mouseUp);
        document.getElementById("main").removeEventListener("mousemove", mouseMove);
      }

      const mouseUp = function() {
        document.getElementById("main").removeEventListener("mouseup", mouseUp);
        document.getElementById("main").removeEventListener("mousemove", mouseMove);
      }

      document.getElementById("main").addEventListener("mouseup", mouseUp);
      document.getElementById("main").addEventListener("mousemove", mouseMove);
      } else {
        if (e.target.classList.contains("selected"))
          e.target.classList.remove("selected")
        else
          e.target.classList.add("selected")
      }

    } else if (e.ctrlKey || e.altKey || e.shiftKey) {
      openMenu(e);
    } else {
      while (document.getElementById("main").getElementsByClassName("selected")[0])
        document.getElementById("main").getElementsByClassName("selected")[0].classList.remove("selected");
      mouseDrag(e.pageX, e.pageY);
    }
  }
});

document.addEventListener("contextmenu", openMenu);

dragula([document.getElementById("periodic-table"), document.getElementById("main"), document.getElementById("hotbar").getElementsByClassName("slot")[0], document.getElementById("hotbar").getElementsByClassName("slot")[1], document.getElementById("hotbar").getElementsByClassName("slot")[2], document.getElementById("hotbar").getElementsByClassName("slot")[3], document.getElementById("hotbar").getElementsByClassName("slot")[4], document.getElementById("hotbar").getElementsByClassName("slot")[5], document.getElementById("hotbar").getElementsByClassName("slot")[6], document.getElementById("hotbar").getElementsByClassName("slot")[7], document.getElementById("hotbar").getElementsByClassName("slot")[8]], {
  copy: function (el, source) {
    return source !== document.getElementById("main");
  },
  accepts: function (el, target) {
    if (target.classList.contains("slot") && target.children[1])
      target.removeChild(target.children[1]);
    return target !== document.getElementById("periodic-table");
  },
  moves: function (el, source, handle, sibling) {
    return source !== document.getElementById("main") && el.id !== "closeup";
  }}).on("drop", function (el, target, source, sibling) {
  if (target != null && target.classList.contains("slot")) {
    target.classList.add("pulse");
    setTimeout(function() {
      target.classList.remove("pulse");
    }, 500);
  }

  if (target === document.getElementById("main")) {
    el.style.transform = "translate(" + document.getElementsByClassName("gu-mirror")[0].style.left + "," + document.getElementsByClassName("gu-mirror")[0].style.top + ")";
    const elementCounter = parseInt(localStorage.getItem("elementCounter")) + 1;
    localStorage.setItem("elementCounter", elementCounter);
    el.id = elementCounter;
  }
});

function saveProgress() {
  let slot = "";
  for (let i = 0; i < 9; i++)
    slot += document.getElementById("hotbar").getElementsByClassName("slot")[i].innerHTML + ";";

  localStorage.setItem("slot", slot);
  localStorage.setItem("main", document.getElementById("main").innerHTML.replace(/\r?\n|\r/g, ""));
}

window.addEventListener("beforeunload", saveProgress);

window.addEventListener("beforeinstallprompt", function(e) {
    document.getElementById("install").style.display = "block";
    const installApp = e;
    document.getElementById("install").addEventListener("click", function(e) {
      installApp.prompt();
      installApp.userChoice.then(function(choiceResult){
        if (choiceResult.outcome === "accepted") {
          document.getElementById("install").style.display = "none";
        }
      });
    });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
