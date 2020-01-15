!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.dragula=e()}}(function(){return function e(n,t,r){function o(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";function r(e){var n=u[e];return n?n.lastIndex=0:u[e]=n=new RegExp(c+e+a,"g"),n}function o(e,n){var t=e.className;t.length?r(n).test(t)||(e.className+=" "+n):e.className=n}function i(e,n){e.className=e.className.replace(r(n)," ").trim()}var u={},c="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:o,rm:i}},{}],2:[function(e,n,t){(function(t){"use strict";function r(e,n){function t(e){return-1!==le.containers.indexOf(e)||fe.isContainer(e)}function r(e){var n=e?"remove":"add";o(S,n,"mousedown",O),o(S,n,"mouseup",L)}function c(e){var n=e?"remove":"add";o(S,n,"mousemove",N)}function m(e){var n=e?"remove":"add";w[n](S,"selectstart",C),w[n](S,"click",C)}function h(){r(!0),L({})}function C(e){ce&&e.preventDefault()}function O(e){ne=e.clientX,te=e.clientY;var n=1!==i(e)||e.metaKey||e.ctrlKey;if(!n){var t=e.target,r=T(t);r&&(ce=r,c(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function N(e){if(ce){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==ne||void 0===e.clientY||e.clientY!==te){if(fe.ignoreInputTextSelection){var n=y("clientX",e),t=y("clientY",e),r=x.elementFromPoint(n,t);if(p(r))return}var o=ce;c(!0),m(),D(),B(o);var a=u(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,E.add(ie||W,"gu-transit"),K(),U(e)}}}function T(e){if(!(le.dragging&&J||t(e))){for(var n=e;v(e)&&t(v(e))===!1;){if(fe.invalid(e,n))return;if(e=v(e),!e)return}var r=v(e);if(r&&!fe.invalid(e,n)){var o=fe.moves(e,r,n,g(e));if(o)return{item:e,source:r}}}}function X(e){return!!T(e)}function Y(e){var n=T(e);n&&B(n)}function B(e){$(e.item,e.source)&&(ie=e.item.cloneNode(!0),le.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=g(e.item),le.dragging=!0,le.emit("drag",W,Q)}function P(){return!1}function D(){if(le.dragging){var e=ie||W;M(e,v(e))}}function I(){ce=!1,c(!0),m(!0)}function L(e){if(I(),le.dragging){var n=ie||W,t=y("clientX",e),r=y("clientY",e),o=a(J,t,r),i=q(o,t,r);i&&(ie&&fe.copySortSource||!ie||i!==Q)?M(n,i):fe.removeOnSpill?R():A()}}function M(e,n){var t=v(e);ie&&fe.copySortSource&&n===Q&&t.removeChild(W),k(n)?le.emit("cancel",e,Q,Q):le.emit("drop",e,n,Q,oe),j()}function R(){if(le.dragging){var e=ie||W,n=v(e);n&&n.removeChild(e),le.emit(ie?"cancel":"remove",e,n,Q),j()}}function A(e){if(le.dragging){var n=arguments.length>0?e:fe.revertOnSpill,t=ie||W,r=v(t),o=k(r);o===!1&&n&&(ie?r&&r.removeChild(ie):Q.insertBefore(t,re)),o||n?le.emit("cancel",t,Q,Q):le.emit("drop",t,r,Q,oe),j()}}function j(){var e=ie||W;I(),z(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),le.dragging=!1,ae&&le.emit("out",e,ae,Q),le.emit("dragend",e),Q=W=ie=re=oe=ue=ae=null}function k(e,n){var t;return t=void 0!==n?n:J?oe:g(ie||W),e===Q&&t===re}function q(e,n,r){function o(){var o=t(i);if(o===!1)return!1;var u=H(i,e),c=V(i,u,n,r),a=k(i,c);return a?!0:fe.accepts(W,i,Q,c)}for(var i=e;i&&!o();)i=v(i);return i}function U(e){function n(e){le.emit(e,f,ae,Q)}function t(){s&&n("over")}function r(){ae&&n("out")}if(J){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),u=o-Z,c=i-ee;J.style.left=u+"px",J.style.top=c+"px";var f=ie||W,l=a(J,o,i),d=q(l,o,i),s=null!==d&&d!==ae;(s||null===d)&&(r(),ae=d,t());var p=v(f);if(d===Q&&ie&&!fe.copySortSource)return void(p&&p.removeChild(f));var m,h=H(d,l);if(null!==h)m=V(d,h,o,i);else{if(fe.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(f));m=re,d=Q}(null===m&&s||m!==f&&m!==g(f))&&(oe=m,d.insertBefore(f,m),le.emit("shadow",f,d,Q))}}function _(e){E.rm(e,"gu-hide")}function F(e){le.dragging&&E.add(e,"gu-hide")}function K(){if(!J){var e=W.getBoundingClientRect();J=W.cloneNode(!0),J.style.width=d(e)+"px",J.style.height=s(e)+"px",E.rm(J,"gu-transit"),E.add(J,"gu-mirror"),fe.mirrorContainer.appendChild(J),o(S,"add","mousemove",U),E.add(fe.mirrorContainer,"gu-unselectable"),le.emit("cloned",J,W,"mirror")}}function z(){J&&(E.rm(fe.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",U),v(J).removeChild(J),J=null)}function H(e,n){for(var t=n;t!==e&&v(t)!==e;)t=v(t);return t===S?null:t}function V(e,n,t,r){function o(){var n,o,i,u=e.children.length;for(n=0;u>n;n++){if(o=e.children[n],i=o.getBoundingClientRect(),c&&i.left+i.width/2>t)return o;if(!c&&i.top+i.height/2>r)return o}return null}function i(){var e=n.getBoundingClientRect();return u(c?t>e.left+d(e)/2:r>e.top+s(e)/2)}function u(e){return e?g(n):n}var c="horizontal"===fe.direction,a=n!==e?i():o();return a}function $(e,n){return"boolean"==typeof fe.copy?fe.copy:fe.copy(e,n)}var G=arguments.length;1===G&&Array.isArray(e)===!1&&(n=e,e=[]);var J,Q,W,Z,ee,ne,te,re,oe,ie,ue,ce,ae=null,fe=n||{};void 0===fe.moves&&(fe.moves=l),void 0===fe.accepts&&(fe.accepts=l),void 0===fe.invalid&&(fe.invalid=P),void 0===fe.containers&&(fe.containers=e||[]),void 0===fe.isContainer&&(fe.isContainer=f),void 0===fe.copy&&(fe.copy=!1),void 0===fe.copySortSource&&(fe.copySortSource=!1),void 0===fe.revertOnSpill&&(fe.revertOnSpill=!1),void 0===fe.removeOnSpill&&(fe.removeOnSpill=!1),void 0===fe.direction&&(fe.direction="vertical"),void 0===fe.ignoreInputTextSelection&&(fe.ignoreInputTextSelection=!0),void 0===fe.mirrorContainer&&(fe.mirrorContainer=x.body);var le=b({containers:fe.containers,start:Y,end:D,cancel:A,remove:R,destroy:h,canMove:X,dragging:!1});return fe.removeOnSpill===!0&&le.on("over",_).on("out",F),r(),le}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,c[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function u(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:x.body[e]}function a(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=x.elementFromPoint(n,t),o.className=i,r}function f(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===x?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return e?"false"===e.contentEditable?!1:"true"===e.contentEditable?!0:m(v(e)):!1}function g(e){function n(){var n=e;do n=n.nextSibling;while(n&&1!==n.nodeType);return n}return e.nextElementSibling||n()}function h(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,n){var t=h(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}var b=e("contra/emitter"),w=e("crossvent"),E=e("./classes"),x=document,S=x.documentElement;n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var r=e("ticky");n.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var r=e("atoa"),o=e("./debounce");n.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&t["throws"]!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function r(e,n,t,r){return e.addEventListener(n,t,r)}function o(e,n,t){return e.attachEvent("on"+n,f(e,n,t))}function i(e,n,t,r){return e.removeEventListener(n,t,r)}function u(e,n,t){var r=l(e,n,t);return r?e.detachEvent("on"+n,r):void 0}function c(e,n,t){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(n,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new s(n,{detail:t})}var i=-1===v.indexOf(n)?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+n,i)}function a(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function f(e,n,t){var r=l(e,n,t)||a(e,n,t);return h.push({wrapper:r,element:e,type:n,fn:t}),r}function l(e,n,t){var r=d(e,n,t);if(r){var o=h[r].wrapper;return h.splice(r,1),o}}function d(e,n,t){var r,o;for(r=0;r<h.length;r++)if(o=h[r],o.element===e&&o.type===n&&o.fn===t)return r}var s=e("custom-event"),v=e("./eventmap"),p=t.document,m=r,g=i,h=[];t.addEventListener||(m=o,g=u),n.exports={add:m,remove:g,fabricate:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],r="",o=/^on/;for(r in e)o.test(r)&&t.push(r.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){function t(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}var r=e.CustomEvent;n.exports=t()?r:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var r,o="function"==typeof setImmediate;r=o?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=r},{}]},{},[2])(2)});

(function(){function h(c){c=c.target;var a=c.childNodes.length;if("button"!==c.localName||!a)return c.classList.contains("rippleJS")?c:null;for(var b=0;b<a;++b){var g=c.childNodes[b],e=g.classList;if(e&&e.contains("rippleJS"))return g}return null}
function n(c,a){var b=h(a);if(b){var g=b.classList,e=b.getAttribute("data-event");if(!e||e===c){b.setAttribute("data-event",c);var d=b.getBoundingClientRect();e=a.offsetX;void 0!==e?a=a.offsetY:(e=a.clientX-d.left,a=a.clientY-d.top);var f=document.createElement("div");d=d.width===d.height?1.412*d.width:Math.sqrt(d.width*d.width+d.height*d.height);var k=2*d+"px";f.style.width=k;f.style.height=k;f.style.marginLeft=-d+e+"px";f.style.marginTop=-d+a+"px";f.className="ripple";b.appendChild(f);window.setTimeout(function(){f.classList.add("held")},
0);var l="mousedown"===c?"mouseup":"touchend",m=function(){document.removeEventListener(l,m);f.classList.add("done");window.setTimeout(function(){b.removeChild(f);b.children.length||(g.remove("active"),b.removeAttribute("data-event"))},650)};document.addEventListener(l,m)}}}
function p(){var c=c||document;c.addEventListener("mousedown",function(a){0===a.button&&n(a.type,a)},{passive:!0});c.addEventListener("touchstart",function(a){for(var b=0;b<a.changedTouches.length;++b)n(a.type,a.changedTouches[b])},{passive:!0})};(function(){function c(){var a=document.createElement("div");a.className="rippleJS";document.body.appendChild(a);var b="absolute"===window.getComputedStyle(a).position;document.body.removeChild(a);b||(a=document.createElement("style"),a.textContent='/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
document.head.insertBefore(a,document.head.firstChild));p()}"complete"===document.readyState?c():window.addEventListener("load",c)})();}())

var hoverElement, animate;

window.addEventListener('load', function (e) {
	if (localStorage.getItem("slot") !== null){
		var slot = localStorage.getItem("slot").split(";");
		var main = localStorage.getItem("main").split("`");

		for (var i = 0; i < 9; i++)
			document.getElementsByClassName("slot")[i].innerHTML = slot[i];
		for (var i = 0; i < main.length; i++)
			document.getElementById("main").innerHTML += main[i];
	}
});

function mouseDrag(x, y) {
    var target = document.getElementById("drag-area");
    target.style.left = x + "px";
    target.style.top = y + "px";
    target.style.display = "initial";

    function mouseMove(e) {
        target.style.width = Math.abs(e.pageX - x) + "px";
        target.style.height = Math.abs(e.pageY - y) + "px";

        if (e.pageX < x)
            target.style.left = e.pageX + "px";
        if (e.pageY < y)
            target.style.top = e.pageY + "px";

        for (var i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
            var rect = document.getElementById("main").getElementsByClassName("element")[i].getBoundingClientRect();
            if (document.elementFromPoint(rect.left, rect.top) !== null && (document.elementFromPoint(rect.left, rect.top).id === "drag-area" || document.elementFromPoint(rect.right, rect.top).id === "drag-area" || document.elementFromPoint(rect.left, rect.bottom).id === "drag-area" || document.elementFromPoint(rect.right, rect.bottom).id === "drag-area"))
                document.getElementById("main").getElementsByClassName("element")[i].classList.add("selected");
            else
                document.getElementById("main").getElementsByClassName("element")[i].classList.remove("selected");
        }
    }

    function mouseUp() {
        target.style.display = "none";
        target.style.width = "0";
        target.style.height = "0";
        document.removeEventListener("mouseup", mouseUp);
        document.removeEventListener("mousemove", mouseMove);
    }

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function followCursor(target, diffX, diffY) {
    if (document.getElementsByClassName("selected")[1] && target.classList.contains("selected")) {
        var mouseMoveMultiple = function(e) {
            var oldLeft = target.offsetLeft;
            var oldTop = target.offsetTop;

            target.style.left = e.pageX - diffX + "px";
            target.style.top = e.pageY - diffY + "px";

            var leftDir = target.offsetLeft - oldLeft;
            var topDir = target.offsetTop - oldTop;

            for (var i = 0; i < document.getElementsByClassName("selected").length - 1; i++) {
                document.getElementsByClassName("selected")[i].style.left = document.getElementsByClassName("selected")[i].offsetLeft + leftDir + "px";
                document.getElementsByClassName("selected")[i].style.top = document.getElementsByClassName("selected")[i].offsetTop + topDir + "px";
            }
        };

        var mouseUpMultiple = function() {
            for (var i = 0; i < document.getElementsByClassName("selected").length; i++) {
                document.getElementsByClassName("selected")[i].style.boxShadow = "";
            }
            document.getElementById("main").removeEventListener("mouseup", mouseUpMultiple);
            document.getElementById("main").removeEventListener("mousemove", mouseMoveMultiple);
        };

        for (var i = 0; i < document.getElementsByClassName("selected").length; i++)
            document.getElementsByClassName("selected")[i].style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)";

        document.getElementById("main").addEventListener("mousemove", mouseMoveMultiple);
        document.getElementById("main").addEventListener("mouseup", mouseUpMultiple);
    } else {
        var mouseMove = function(e) {
            target.style.left = e.pageX - diffX + "px";
            target.style.top = e.pageY - diffY + "px";
        };

        var mouseUp = function() {
            target.style.boxShadow = "";
            document.getElementById("main").removeEventListener("mouseup", mouseUp);
            document.getElementById("main").removeEventListener("mousemove", mouseMove);
        };

        while (document.getElementsByClassName("selected")[0])
            document.getElementsByClassName("selected")[0].classList.remove("selected");

        target.classList.add("selected");
        target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)";
        document.getElementById("main").addEventListener("mousemove", mouseMove);
        document.getElementById("main").addEventListener("mouseup", mouseUp);
    }
}

function toggleMenu(command, e) {
    if (!e.classList.contains("element"))
        while (document.getElementsByClassName("selected")[0])
            document.getElementsByClassName("selected")[0].classList.remove("selected");

    document.getElementById("menu").style.display = command === "show" ? "block" : "none";
}

function sliderAdjust(target) {
    function mouseMove(e) {
        var pos = e.pageY - 141;
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

    function mouseUp(e) {
        document.body.removeEventListener("mouseup", mouseUp);
        document.body.removeEventListener("mousemove", mouseMove);
        var changePX = document.getElementById("slider-thumb").offsetTop;
        document.getElementById("slider-thumb").style.top = changePX + "px";
        document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + changePX + "%, #3fc1c9 " + changePX + "%)";
    }
    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseup", mouseUp);
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

document.getElementById("rack").addEventListener("click", overlayToggle);

document.getElementById("overlay").addEventListener("click", overlayToggle);

document.getElementById("close").addEventListener("click", overlayToggle);

document.getElementById("react").addEventListener("click", function() {
	if (animate){
		cancelAnimationFrame(animate);
		animate = undefined;

		for (var i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
		    document.getElementById("main").getElementsByClassName("element")[i].style.transform = "translate(0, 0)";
		    document.getElementById("main").getElementsByClassName("element")[i].style.transition = "transform 0.5s";
		}

		setTimeout( function(){
			for (var i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
			    document.getElementById("main").getElementsByClassName("element")[i].style.transition = "";
			}
		}, 500);

	} else if (document.getElementById("main").getElementsByClassName("element").length > 1) {
		animate = requestAnimationFrame(frame);
	} else {
		document.getElementById("snackbar").className = "show";
		document.getElementById("snackbar").style.transition = "all 0.5s"

		var autoClose = setTimeout(function(){
			document.getElementById("snackbar").classList = "";
		}, 3000);

        function closeSnackBar() {
            clearTimeout(autoClose);
            document.getElementById("snackbar").classList = "";
            document.getElementById("snackbar-close").removeEventListener("click", closeSnackBar);
        }

        var closeNow = document.getElementById("snackbar-close").addEventListener("click", closeSnackBar);
	}

    function frame() {
		for (var i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
			var element = document.getElementById("main").getElementsByClassName("element")[i];
			var x = Number(element.style.transform.match(/\d+/g)[0]) + 1;
			var y = Number(element.style.transform.match(/\d+/g)[1]) + 1;

		    element.style.transform = "translate(" + x + "px, " + y + "px)";
		}
        animate = requestAnimationFrame(frame);
    }
});

document.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains("element")){
        hoverElement = event.target;
        if (event.target.parentElement.id === "periodic-table") {
        	document.getElementById("atomic-number").innerHTML = [].indexOf.call(document.getElementById("periodic-table").getElementsByClassName("element"), event.target) + 1;
        	document.getElementById("atomic-symbol").innerHTML = event.target.children[0].innerHTML;
        	document.getElementById("atomic-name").innerHTML = event.target.children[0].getAttribute("title");
        	document.getElementById("atomic-mass").innerHTML = event.target.getAttribute("amass");
        	if (event.target.getAttribute("amass") % 1 === 0)
        		document.getElementById("atomic-mass").innerHTML = "(" + document.getElementById("atomic-mass").innerHTML + ")";
        	document.getElementById("closeup").style.background = getComputedStyle(event.target).background;
        } else {
        	document.getElementById("atomic-number").innerHTML = "Atomic No.";
        	document.getElementById("atomic-symbol").innerHTML = "Symbol";
        	document.getElementById("atomic-name").innerHTML = "Name";
        	document.getElementById("atomic-mass").innerHTML = "Atomic Mass";
        	document.getElementById("closeup").style.background = "";
        }
    }
    else {
		hoverElement = undefined;
    	document.getElementById("atomic-number").innerHTML = "Atomic No.";
    	document.getElementById("atomic-symbol").innerHTML = "Symbol";
    	document.getElementById("atomic-name").innerHTML = "Name";
    	document.getElementById("atomic-mass").innerHTML = "Atomic Mass";
    	document.getElementById("closeup").style.background = "";      	
    }
});

document.addEventListener("keydown", function(e) {
    if (/^[1-9]$/i.test(event.key) && typeof hoverElement !== "undefined") {
        var clone = hoverElement.cloneNode(true);
        clone.removeAttribute("style");
        clone.classList.remove("gu-mirror");

        document.getElementsByClassName("slot")[event.key - 1].innerHTML = "";
        document.getElementsByClassName("slot")[event.key - 1].appendChild(clone);
        document.getElementsByClassName("slot")[event.key - 1].classList.add("pulse");
        setTimeout(function(e) {
            document.getElementsByClassName("slot")[e].classList.remove("pulse");
        }, 500, event.key - 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        var pos = document.getElementById("slider-thumb").offsetTop;
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

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    if (e.target !== document.getElementById("menu")) {
        if (e.target.id === "hotbar" || e.target.classList.contains("slot") || e.target.id === "main" || (e.target.classList.contains("element") && (e.target.parentElement.classList.contains("slot") || e.target.parentElement.id === "main"))) {
            document.getElementById("menu-option").innerHTML = "";

            if (e.pageX + 175 > document.body.clientWidth)
            	document.getElementById("menu").style.left = document.body.clientWidth - 175 + "px";
            else
            	document.getElementById("menu").style.left = e.pageX + "px";

            if (e.pageY + 47 > document.body.clientHeight)
            	document.body.clientHeight - 47 + "px";
           	else
				document.getElementById("menu").style.top = e.pageY + "px";

			if (e.target.id === "hotbar") {
			    document.getElementById("menu-option").innerHTML = "Clear All Slots";
			    document.getElementById("menu-option").onclick = function() {
			        for (var i = 0; i < 9; i++)
			            document.getElementsByClassName("slot")[i].innerHTML = "";
			        toggleMenu("hide", e.target);
			    };
			    toggleMenu("show", e.target);
			} else if (e.target.parentElement.classList.contains("slot")) {
			    document.getElementById("menu-option").innerHTML = "Clear Slot";
			    document.getElementById("menu-option").onclick = function() {
			        e.target.parentElement.innerHTML = "";
			        toggleMenu("hide", e.target);
			    };
			    toggleMenu("show", e.target);
			} else if (e.target.id === "main") {
			    document.getElementById("menu-option").innerHTML = "Clear Lab";
			    document.getElementById("menu-option").onclick = function() {
			        while (document.getElementById("main").getElementsByClassName("element")[0])
			            document.getElementById("main").removeChild(document.getElementById("main").lastChild);
			        toggleMenu("hide", e.target);
			    };
			    toggleMenu("show", e.target);
			} else if (e.target.parentElement.id === "main" && e.target.classList.contains("element")) {
			    if (document.getElementsByClassName("selected")[1]) {
			        document.getElementById("menu-option").innerHTML = "Remove Atoms";
			        document.getElementById("menu-option").onclick = function() {
			            while (document.getElementsByClassName("selected")[0])
			                document.getElementById("main").removeChild(document.getElementsByClassName("selected")[0]);
			            toggleMenu("hide", e.target);
			        };
			    } else {
			        document.getElementById("menu-option").innerHTML = "Remove Atom";
			        document.getElementById("menu-option").onclick = function() {
			            document.getElementById("main").removeChild(e.target);
			            toggleMenu("hide", e.target);
			        };
			        e.target.classList.add("selected");
			    }

			    toggleMenu("show", e.target);
			}
        }
    }
});

document.getElementById("main").addEventListener("mousedown", function(e) {
    if (e.button === 0) {
        if (e.target.classList.contains("element")) {
            var diffX = e.pageX - e.target.offsetLeft;
            var diffY = e.pageY - e.target.offsetTop;

            document.getElementById("main").appendChild(e.target);

            followCursor(e.target, diffX, diffY);
        } else
            mouseDrag(e.pageX, e.pageY);
    }
});

document.addEventListener("mousedown", function(e) {
    if (e.target.id !== "menu-option") {
        toggleMenu("hide", e.target);

        if (document.getElementsByClassName("selected")[0] && document.getElementsByClassName("selected")[0].boxShadow === "")
            while (document.getElementsByClassName("selected")[0])
                document.getElementsByClassName("selected")[0].classList.remove("selected");
    }
});

document.getElementById("slider").addEventListener("mousedown", function(e) {
    if (e.target.id === "slider-thumb") {
        sliderAdjust(e.target);
    } else {
        var pos = e.pageY - 148;
        if (pos < -7)
            pos = -7;
        else if (pos > 93)
            pos = 93;
        document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + pos + "%, #3fc1c9 " + pos + "%)";
        document.getElementById("slider-thumb").style.top = pos + "px";
    }
});

dragula([document.getElementById("periodic-table"), document.getElementById("main"), document.getElementsByClassName("slot")[0], document.getElementsByClassName("slot")[1], document.getElementsByClassName("slot")[2], document.getElementsByClassName("slot")[3], document.getElementsByClassName("slot")[4], document.getElementsByClassName("slot")[5], document.getElementsByClassName("slot")[6], document.getElementsByClassName("slot")[7], document.getElementsByClassName("slot")[8]], {
    copy: function(el, source) {
        return source !== document.getElementById("main");
    },
    accepts: function(el, target) {
        if (target.classList.contains("slot") && target.children[1])
            target.removeChild(target.children[1]);
        return target !== document.getElementById("periodic-table");
    },
    moves: function(el, source, handle, sibling) {
        return source !== document.getElementById("main") && el.id !== "closeup";
    }}).on("drop", function(el, target, source, sibling) {
    if (target != null && target.classList.contains("slot")) {
        target.classList.add("pulse");
        setTimeout(function() {
            target.classList.remove("pulse");
        }, 500);
    }

    if (target === document.getElementById("main")) {
        el.style.left = document.getElementsByClassName("gu-mirror")[0].style.left;
        el.style.top = document.getElementsByClassName("gu-mirror")[0].style.top;
        el.style.transform = "translate(0, 0)";
    }
});

onbeforeunload = function (e) {
	var slot = "";
	var main = "";

	for (var i = 0; i < 9; i++)
		slot += document.getElementsByClassName("slot")[i].innerHTML + ";";

	for (var i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++)
	    main += document.getElementById("main").getElementsByClassName("element")[i].outerHTML + "`";

	localStorage.setItem("slot", slot);
	localStorage.setItem("main", main);
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
