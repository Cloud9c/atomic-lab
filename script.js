(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
var tippy=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var n={passive:!0},r="tippy-iOS",i="tippy-popper",o="tippy-tooltip",a="tippy-content",p="tippy-backdrop",u="tippy-arrow",s="tippy-svg-arrow",c="."+i,l="."+o,f="."+a,d="."+u,v="."+s;function m(t,e){t.innerHTML=e}function h(t){return!(!t||!t._tippy||t._tippy.reference!==t)}function g(t,e){return{}.hasOwnProperty.call(t,e)}function b(t){return A(t)?[t]:function(t){return E(t,"NodeList")}(t)?k(t):Array.isArray(t)?t:k(document.querySelectorAll(t))}function y(t,e,n){if(Array.isArray(t)){var r=t[e];return null==r?Array.isArray(n)?n[e]:n:r}return t}function w(t,e){return t&&t.modifiers&&t.modifiers[e]}function E(t,e){var n={}.toString.call(t);return 0===n.indexOf("[object")&&n.indexOf(e+"]")>-1}function A(t){return E(t,"Element")}function T(t){return E(t,"MouseEvent")}function x(t,e){return"function"==typeof t?t.apply(void 0,e):t}function C(t,e,n,r){t.filter(function(t){return t.name===e})[0][n]=r}function I(){return document.createElement("div")}function O(t,e){t.forEach(function(t){t&&(t.style.transitionDuration=e+"ms")})}function D(t,e){t.forEach(function(t){t&&t.setAttribute("data-state",e)})}function L(t,e){return 0===e?t:function(r){clearTimeout(n),n=setTimeout(function(){t(r)},e)};var n}function M(t,e,n){t&&t!==e&&t.apply(void 0,n)}function k(t){return[].slice.call(t)}function S(t,e){for(;t;){if(e(t))return t;t=t.parentElement}return null}function P(t,e){return t.indexOf(e)>-1}function V(t){return t.split(/\s+/).filter(Boolean)}function B(t,e){return void 0!==t?t:e}function U(t){return[].concat(t)}function H(t){var e=U(t)[0];return e&&e.ownerDocument||document}function N(t,e){-1===t.indexOf(e)&&t.push(e)}function z(t){return"number"==typeof t?t:parseFloat(t)}function R(t,e,n){void 0===e&&(e=5);var r={top:0,right:0,bottom:0,left:0};return Object.keys(r).reduce(function(r,i){return r[i]="number"==typeof e?e:e[i],t===i&&(r[i]="number"==typeof e?e+n:e[t]+n),r},r)}var q={isTouch:!1},F=0;function j(){q.isTouch||(q.isTouch=!0,window.performance&&document.addEventListener("mousemove",_))}function _(){var t=performance.now();t-F<20&&(q.isTouch=!1,document.removeEventListener("mousemove",_)),F=t}function W(){var t=document.activeElement;if(h(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}var X="undefined"!=typeof window&&"undefined"!=typeof document,Y=X?navigator.userAgent:"",J=/MSIE |Trident\//.test(Y),G=/UCBrowser\//.test(Y),K=X&&/iPhone|iPad|iPod/.test(navigator.platform);function Q(t){var e=t&&K&&q.isTouch;document.body.classList[e?"add":"remove"](r)}var Z=e({allowHTML:!0,animation:"fade",appendTo:function(){return document.body},aria:"describedby",arrow:!0,boundary:"scrollParent",content:"",delay:0,distance:10,duration:[300,250],flip:!0,flipBehavior:"flip",flipOnUpdate:!1,hideOnClick:!0,ignoreAttributes:!1,inertia:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,lazy:!0,maxWidth:350,multiple:!1,offset:0,onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},placement:"top",plugins:[],popperOptions:{},role:"tooltip",showOnCreate:!1,theme:"",touch:!0,trigger:"mouseenter focus",triggerTarget:null,updateDuration:0,zIndex:9999},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1}),$=Object.keys(Z),tt=["arrow","boundary","distance","flip","flipBehavior","flipOnUpdate","offset","placement","popperOptions"];function et(t){var n=(t.plugins||[]).reduce(function(e,n){var r=n.name,i=n.defaultValue;return r&&(e[r]=void 0!==t[r]?t[r]:i),e},{});return e({},t,{},n)}function nt(t,n){var r=e({},n,{content:x(n.content,[t])},n.ignoreAttributes?{}:function(t,n){return(n?Object.keys(et(e({},Z,{plugins:n}))):$).reduce(function(e,n){var r=(t.getAttribute("data-tippy-"+n)||"").trim();if(!r)return e;if("content"===n)e[n]=r;else try{e[n]=JSON.parse(r)}catch(t){e[n]=r}return e},{})}(t,n.plugins));return r.interactive&&(r.aria=null),r}function rt(t){return t.split("-")[0]}function it(t){t.setAttribute("data-inertia","")}function ot(t){t.setAttribute("data-interactive","")}function at(t,e){if(A(e.content))m(t,""),t.appendChild(e.content);else if("function"!=typeof e.content){t[e.allowHTML?"innerHTML":"textContent"]=e.content}}function pt(t){return{tooltip:t.querySelector(l),content:t.querySelector(f),arrow:t.querySelector(d)||t.querySelector(v)}}function ut(t){var e=I();return!0===t?e.className=u:(e.className=s,A(t)?e.appendChild(t):m(e,t)),e}function st(t,e){var n=I();n.className=i,n.style.position="absolute",n.style.top="0",n.style.left="0";var r=I();r.className=o,r.id="tippy-"+t,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1"),ft(r,"add",e.theme);var p=I();return p.className=a,p.setAttribute("data-state","hidden"),e.interactive&&ot(r),e.arrow&&(r.setAttribute("data-arrow",""),r.appendChild(ut(e.arrow))),e.inertia&&it(r),at(p,e),r.appendChild(p),n.appendChild(r),ct(n,e,e),n}function ct(t,e,n){var r,i=pt(t),o=i.tooltip,a=i.content,p=i.arrow;t.style.zIndex=""+n.zIndex,o.setAttribute("data-animation",n.animation),o.style.maxWidth="number"==typeof(r=n.maxWidth)?r+"px":r,n.role?o.setAttribute("role",n.role):o.removeAttribute("role"),e.content!==n.content&&at(a,n),!e.arrow&&n.arrow?(o.appendChild(ut(n.arrow)),o.setAttribute("data-arrow","")):e.arrow&&!n.arrow?(o.removeChild(p),o.removeAttribute("data-arrow")):e.arrow!==n.arrow&&(o.removeChild(p),o.appendChild(ut(n.arrow))),!e.interactive&&n.interactive?ot(o):e.interactive&&!n.interactive&&function(t){t.removeAttribute("data-interactive")}(o),!e.inertia&&n.inertia?it(o):e.inertia&&!n.inertia&&function(t){t.removeAttribute("data-inertia")}(o),e.theme!==n.theme&&(ft(o,"remove",e.theme),ft(o,"add",n.theme))}function lt(t,e,n){var r=G&&void 0!==document.body.style.webkitTransition?"webkitTransitionEnd":"transitionend";t[e+"EventListener"](r,n)}function ft(t,e,n){V(n).forEach(function(n){t.classList[e](n+"-theme")})}var dt=1,vt=[],mt=[];function ht(r,i){var o,a,p,u=nt(r,e({},Z,{},et(i)));if(!u.multiple&&r._tippy)return null;var s,l,f,d,v,m=!1,h=!1,b=!1,E=0,A=[],I=L(Dt,u.interactiveDebounce),F=H(u.triggerTarget||r),j=dt++,_=st(j,u),W=pt(_),X=(v=u.plugins).filter(function(t,e){return v.indexOf(t)===e}),Y=W.tooltip,G=W.content,K=[Y,G],$={id:j,reference:r,popper:_,popperChildren:W,popperInstance:null,props:u,state:{currentPlacement:null,isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:X,clearDelayTimeouts:function(){clearTimeout(o),clearTimeout(a),cancelAnimationFrame(p)},setProps:function(t){if($.state.isDestroyed)return;ht("onBeforeUpdate",[$,t]),It();var n=$.props,i=nt(r,e({},$.props,{},t,{ignoreAttributes:!0}));i.ignoreAttributes=B(t.ignoreAttributes,n.ignoreAttributes),$.props=i,Ct(),n.interactiveDebounce!==i.interactiveDebounce&&(yt(),I=L(Dt,i.interactiveDebounce));ct(_,n,i),$.popperChildren=pt(_),n.triggerTarget&&!i.triggerTarget?U(n.triggerTarget).forEach(function(t){t.removeAttribute("aria-expanded")}):i.triggerTarget&&r.removeAttribute("aria-expanded");if(bt(),$.popperInstance)if(tt.some(function(e){return g(t,e)&&t[e]!==n[e]})){var o=$.popperInstance.reference;$.popperInstance.destroy(),St(),$.popperInstance.reference=o,$.state.isVisible&&$.popperInstance.enableEventListeners()}else $.popperInstance.update();ht("onAfterUpdate",[$,t])},setContent:function(t){$.setProps({content:t})},show:function(t){void 0===t&&(t=y($.props.duration,0,Z.duration));var e=$.state.isVisible,n=$.state.isDestroyed,r=!$.state.isEnabled,i=q.isTouch&&!$.props.touch;if(e||n||r||i)return;if(ut().hasAttribute("disabled"))return;$.popperInstance||St();if(ht("onShow",[$],!1),!1===$.props.onShow($))return;Et(),_.style.visibility="visible",$.state.isVisible=!0,$.state.isMounted||O(K.concat(_),0);l=function(){$.state.isVisible&&(O([_],$.props.updateDuration),O(K,t),D(K,"visible"),gt(),bt(),N(mt,$),Q(!0),$.state.isMounted=!0,ht("onMount",[$]),function(t,e){Tt(t,e)}(t,function(){$.state.isShown=!0,ht("onShown",[$])}))},function(){E=0;var t,e=$.props.appendTo,n=ut();t=$.props.interactive&&e===Z.appendTo||"parent"===e?n.parentNode:x(e,[n]);t.contains(_)||t.appendChild(_);C($.popperInstance.modifiers,"flip","enabled",$.props.flip),$.popperInstance.enableEventListeners(),$.popperInstance.update()}()},hide:function(t){void 0===t&&(t=y($.props.duration,1,Z.duration));var e=!$.state.isVisible&&!m,n=$.state.isDestroyed,r=!$.state.isEnabled&&!m;if(e||n||r)return;if(ht("onHide",[$],!1),!1===$.props.onHide($)&&!m)return;At(),_.style.visibility="hidden",$.state.isVisible=!1,$.state.isShown=!1,O(K,t),D(K,"hidden"),gt(),bt(),function(t,e){Tt(t,function(){!$.state.isVisible&&_.parentNode&&_.parentNode.contains(_)&&e()})}(t,function(){$.popperInstance.disableEventListeners(),$.popperInstance.options.placement=$.props.placement,_.parentNode.removeChild(_),0===(mt=mt.filter(function(t){return t!==$})).length&&Q(!1),$.state.isMounted=!1,ht("onHidden",[$])})},enable:function(){$.state.isEnabled=!0},disable:function(){$.hide(),$.state.isEnabled=!1},destroy:function(){if($.state.isDestroyed)return;m=!0,$.clearDelayTimeouts(),$.hide(0),It(),delete r._tippy,$.popperInstance&&$.popperInstance.destroy();m=!1,$.state.isDestroyed=!0,ht("onDestroy",[$])}};r._tippy=$,_._tippy=$;var it=X.map(function(t){return t.fn($)});return Ct(),bt(),u.lazy||St(),ht("onCreate",[$]),u.showOnCreate&&Vt(),_.addEventListener("mouseenter",function(){$.props.interactive&&$.state.isVisible&&$.clearDelayTimeouts()}),_.addEventListener("mouseleave",function(){$.props.interactive&&P($.props.trigger,"mouseenter")&&F.addEventListener("mousemove",I)}),$;function ot(){var t=$.props.touch;return Array.isArray(t)?t:[t,0]}function at(){return"hold"===ot()[0]}function ut(){return d||r}function ft(t){return $.state.isMounted&&!$.state.isVisible||q.isTouch||s&&"focus"===s.type?0:y($.props.delay,t?0:1,Z.delay)}function ht(t,e,n){var r;(void 0===n&&(n=!0),it.forEach(function(n){g(n,t)&&n[t].apply(n,e)}),n)&&(r=$.props)[t].apply(r,e)}function gt(){var t=$.props.aria;if(t){var e="aria-"+t,n=Y.id;U($.props.triggerTarget||r).forEach(function(t){var r=t.getAttribute(e);if($.state.isVisible)t.setAttribute(e,r?r+" "+n:n);else{var i=r&&r.replace(n,"").trim();i?t.setAttribute(e,i):t.removeAttribute(e)}})}}function bt(){U($.props.triggerTarget||r).forEach(function(t){$.props.interactive?t.setAttribute("aria-expanded",$.state.isVisible&&t===ut()?"true":"false"):t.removeAttribute("aria-expanded")})}function yt(){F.body.removeEventListener("mouseleave",Bt),F.removeEventListener("mousemove",I),vt=vt.filter(function(t){return t!==I})}function wt(t){if(!$.props.interactive||!_.contains(t.target)){if(ut().contains(t.target)){if(q.isTouch)return;if($.state.isVisible&&P($.props.trigger,"click"))return}!0===$.props.hideOnClick&&(h=!1,$.clearDelayTimeouts(),$.hide(),b=!0,setTimeout(function(){b=!1}),$.state.isMounted||At())}}function Et(){F.addEventListener("mousedown",wt,!0)}function At(){F.removeEventListener("mousedown",wt,!0)}function Tt(t,e){function n(t){t.target===Y&&"visibility"===t.propertyName&&(lt(Y,"remove",n),e())}if(0===t)return e();lt(Y,"remove",f),lt(Y,"add",n),f=n}function xt(t,e,n){void 0===n&&(n=!1),U($.props.triggerTarget||r).forEach(function(r){r.addEventListener(t,e,n),A.push({node:r,eventType:t,handler:e,options:n})})}function Ct(){at()&&(xt("touchstart",Ot,n),xt("touchend",Lt,n)),V($.props.trigger).forEach(function(t){if("manual"!==t)switch(xt(t,Ot),t){case"mouseenter":xt("mouseleave",Lt);break;case"focus":xt(J?"focusout":"blur",Mt)}})}function It(){A.forEach(function(t){var e=t.node,n=t.eventType,r=t.handler,i=t.options;e.removeEventListener(n,r,i)}),A=[]}function Ot(t){var e=!1;if($.state.isEnabled&&!kt(t)&&!b){if(s=t,d=t.currentTarget,bt(),!$.state.isVisible&&T(t)&&vt.forEach(function(e){return e(t)}),"click"!==t.type||P($.props.trigger,"mouseenter")&&!h||!1===$.props.hideOnClick||!$.state.isVisible){var n=ot(),r=n[0],i=n[1];q.isTouch&&"hold"===r&&i?o=setTimeout(function(){Vt(t)},i):Vt(t)}else e=!0;"click"===t.type&&(h=!e),e&&Bt(t)}}function Dt(t){S(t.target,function(t){return t===r||t===_})||function(t,e){var n=e.clientX,r=e.clientY;return t.every(function(t){var e=t.popperRect,i=t.tooltipRect,o=t.interactiveBorder,a=Math.min(e.top,i.top),p=Math.max(e.right,i.right),u=Math.max(e.bottom,i.bottom),s=Math.min(e.left,i.left);return a-r>o||r-u>o||s-n>o||n-p>o})}(k(_.querySelectorAll(c)).concat(_).map(function(t){var e=t._tippy,n=e.popperChildren.tooltip,r=e.props.interactiveBorder;return{popperRect:t.getBoundingClientRect(),tooltipRect:n.getBoundingClientRect(),interactiveBorder:r}}),t)&&(yt(),Bt(t))}function Lt(t){if(!kt(t))return $.props.interactive?(F.body.addEventListener("mouseleave",Bt),F.addEventListener("mousemove",I),void N(vt,I)):void(P($.props.trigger,"click")&&h||Bt(t))}function Mt(t){t.target===ut()&&($.props.interactive&&t.relatedTarget&&_.contains(t.relatedTarget)||Bt(t))}function kt(t){var e="ontouchstart"in window,n=P(t.type,"touch"),r=at();return e&&q.isTouch&&r&&!n||q.isTouch&&!r&&n}function St(){var n,i=$.props.popperOptions,o=$.popperChildren.arrow,a=w(i,"flip"),p=w(i,"preventOverflow");function u(t){var e=$.state.currentPlacement;$.state.currentPlacement=t.placement,$.props.flip&&!$.props.flipOnUpdate&&(t.flipped&&($.popperInstance.options.placement=t.placement),C($.popperInstance.modifiers,"flip","enabled",!1)),Y.setAttribute("data-placement",t.placement),!1!==t.attributes["x-out-of-boundaries"]?Y.setAttribute("data-out-of-boundaries",""):Y.removeAttribute("data-out-of-boundaries");var r=rt(t.placement),i=P(["top","bottom"],r),o=P(["bottom","right"],r);Y.style.top="0",Y.style.left="0",Y.style[i?"top":"left"]=(o?1:-1)*n+"px",e&&e!==t.placement&&$.popperInstance.update()}var s=e({eventsEnabled:!1,placement:$.props.placement},i,{modifiers:e({},i&&i.modifiers,{tippyDistance:{enabled:!0,order:0,fn:function(t){n=function(t,e){var n="string"==typeof e&&P(e,"rem"),r=t.documentElement;return r&&n?parseFloat(getComputedStyle(r).fontSize||String(16))*z(e):z(e)}(F,$.props.distance);var e=rt(t.placement),r=R(e,p&&p.padding,n),i=R(e,a&&a.padding,n),o=$.popperInstance.modifiers;return C(o,"preventOverflow","padding",r),C(o,"flip","padding",i),t}},preventOverflow:e({boundariesElement:$.props.boundary},p),flip:e({enabled:$.props.flip,behavior:$.props.flipBehavior},a),arrow:e({element:o,enabled:!!o},w(i,"arrow")),offset:e({offset:$.props.offset},w(i,"offset"))}),onCreate:function(t){u(t),M(i&&i.onCreate,s.onCreate,[t]),Pt()},onUpdate:function(t){u(t),M(i&&i.onUpdate,s.onUpdate,[t]),Pt()}});$.popperInstance=new t(r,_,s)}function Pt(){0===E?(E++,$.popperInstance.update()):l&&1===E&&(E++,_.offsetHeight,l())}function Vt(t){$.clearDelayTimeouts(),$.popperInstance||St(),t&&ht("onTrigger",[$,t]),Et();var e=ft(!0);e?o=setTimeout(function(){$.show()},e):$.show()}function Bt(t){if($.clearDelayTimeouts(),ht("onUntrigger",[$,t]),$.state.isVisible){var e=ft(!1);e?a=setTimeout(function(){$.state.isVisible&&$.hide()},e):p=requestAnimationFrame(function(){$.hide()})}else At()}}function gt(t,r,i){void 0===r&&(r={}),void 0===i&&(i=[]),i=Z.plugins.concat(r.plugins||i),document.addEventListener("touchstart",j,e({},n,{capture:!0})),window.addEventListener("blur",W);var o=e({},r,{plugins:i}),a=b(t).reduce(function(t,e){var n=e&&ht(e,o);return n&&t.push(n),t},[]);return A(t)?a[0]:a}gt.version="5.1.3",gt.defaultProps=Z,gt.setDefaultProps=function(t){Object.keys(t).forEach(function(e){Z[e]=t[e]})},gt.currentInput=q;var bt={mouseover:"mouseenter",focusin:"focus",click:"click"};var yt={name:"animateFill",defaultValue:!1,fn:function(t){var e=t.popperChildren,n=e.tooltip,r=e.content,i=t.props.animateFill&&!G?function(){var t=I();return t.className=p,D([t],"hidden"),t}():null;function o(){t.popperChildren.backdrop=i}return{onCreate:function(){i&&(o(),n.insertBefore(i,n.firstElementChild),n.setAttribute("data-animatefill",""),n.style.overflow="hidden",t.setProps({animation:"shift-away",arrow:!1}))},onMount:function(){if(i){var t=n.style.transitionDuration,e=Number(t.replace("ms",""));r.style.transitionDelay=Math.round(e/10)+"ms",i.style.transitionDuration=t,D([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&D([i],"hidden")},onAfterUpdate:function(){o()}}}};var wt={name:"followCursor",defaultValue:!1,fn:function(t){var e,n=t.reference,r=t.popper,i=null,o=H(t.props.triggerTarget||n),a=null,p=!1,u=t.props;function s(){return"manual"===t.props.trigger.trim()}function c(){var e=!!s()||null!==a&&!(0===a.clientX&&0===a.clientY);return t.props.followCursor&&e}function l(){return q.isTouch||"initial"===t.props.followCursor&&t.state.isVisible}function f(){t.popperInstance&&i&&(t.popperInstance.reference=i)}function d(){if(c()||t.props.placement!==u.placement){var e=u.placement,n=e.split("-")[1];p=!0,t.setProps({placement:c()&&n?e.replace(n,"start"===n?"end":"start"):e}),p=!1}}function v(){t.popperInstance&&c()&&(l()||!0!==t.props.followCursor)&&t.popperInstance.disableEventListeners()}function m(){c()?o.addEventListener("mousemove",b):f()}function h(){c()&&b(e)}function g(){o.removeEventListener("mousemove",b)}function b(o){var a=e=o,p=a.clientX,u=a.clientY;if(t.popperInstance&&t.state.currentPlacement){var s=S(o.target,function(t){return t===n}),c=n.getBoundingClientRect(),f=t.props.followCursor,d="horizontal"===f,v="vertical"===f,m=P(["top","bottom"],rt(t.state.currentPlacement)),h=function(t,e){var n=e?t.offsetWidth:t.offsetHeight;return{size:n,x:e?n:0,y:e?0:n}}(r,m),b=h.size,y=h.x,w=h.y;!s&&t.props.interactive||(null===i&&(i=t.popperInstance.reference),t.popperInstance.reference={referenceNode:n,clientWidth:0,clientHeight:0,getBoundingClientRect:function(){return{width:m?b:0,height:m?0:b,top:(d?c.top:u)-w,bottom:(d?c.bottom:u)+w,left:(v?c.left:p)-y,right:(v?c.right:p)+y}}},t.popperInstance.update()),l()&&g()}}return{onAfterUpdate:function(t,e){var n;p||(n=e,Object.keys(n).forEach(function(t){u[t]=B(n[t],u[t])}),e.placement&&d()),e.placement&&v(),requestAnimationFrame(h)},onMount:function(){h(),v()},onShow:function(){s()&&(e=a={clientX:0,clientY:0},d(),m())},onTrigger:function(t,n){a||(T(n)&&(a={clientX:n.clientX,clientY:n.clientY},e=n),d(),m())},onUntrigger:function(){t.state.isVisible||(g(),a=null)},onHidden:function(){g(),f(),a=null}}}};var Et={name:"inlinePositioning",defaultValue:!1,fn:function(t){var e=t.reference;function n(){return!!t.props.inlinePositioning}return{onHidden:function(){n()&&(t.popperInstance.reference=e)},onShow:function(){n()&&(t.popperInstance.reference={referenceNode:e,clientWidth:0,clientHeight:0,getBoundingClientRect:function(){return function(t,e,n){if(n.length<2||null===t)return e;switch(t){case"top":case"bottom":var r=n[0],i=n[n.length-1],o="top"===t,a=r.top,p=i.bottom,u=o?r.left:i.left,s=o?r.right:i.right;return{top:a,bottom:p,left:u,right:s,width:s-u,height:p-a};case"left":case"right":var c=Math.min.apply(Math,n.map(function(t){return t.left})),l=Math.max.apply(Math,n.map(function(t){return t.right})),f=n.filter(function(e){return"left"===t?e.left===c:e.right===l}),d=f[0].top,v=f[f.length-1].bottom;return{top:d,bottom:v,left:c,right:l,width:l-c,height:v-d};default:return e}}(t.state.currentPlacement&&rt(t.state.currentPlacement),e.getBoundingClientRect(),k(e.getClientRects()))}})}}}};var At={name:"sticky",defaultValue:!1,fn:function(t){var e=t.reference,n=t.popper;function r(e){return!0===t.props.sticky||t.props.sticky===e}var i=null,o=null;function a(){var p=r("reference")?(t.popperInstance?t.popperInstance.reference:e).getBoundingClientRect():null,u=r("popper")?n.getBoundingClientRect():null;(p&&Tt(i,p)||u&&Tt(o,u))&&t.popperInstance.update(),i=p,o=u,t.state.isMounted&&requestAnimationFrame(a)}return{onMount:function(){t.props.sticky&&a()}}}};function Tt(t,e){return!t||!e||(t.top!==e.top||t.right!==e.right||t.bottom!==e.bottom||t.left!==e.left)}return X&&function(t){var e=document.createElement("style");e.textContent=t,e.setAttribute("data-tippy-stylesheet","");var n=document.head,r=document.querySelector("head>style,head>link");r?n.insertBefore(e,r):n.appendChild(e)}(".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100vw - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-property:transform}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;background-color:#333;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{position:absolute;border-color:transparent;border-style:solid}.tippy-content{padding:5px 9px}"),gt.setDefaultProps({plugins:[yt,wt,Et,At]}),gt.createSingleton=function(t,n,r){void 0===n&&(n={}),void 0===r&&(r=[]),r=n.plugins||r,t.forEach(function(t){t.disable()});var i,o,a=e({},Z,{},n).aria,p=!1,u=t.map(function(t){return t.reference}),s={fn:function(e){function n(t){if(i){var n="aria-"+i;t&&!e.props.interactive?o.setAttribute(n,e.popperChildren.tooltip.id):o.removeAttribute(n)}}return{onAfterUpdate:function(t,n){var r=n.aria;void 0!==r&&r!==a&&(p?(p=!0,e.setProps({aria:null}),p=!1):a=r)},onDestroy:function(){t.forEach(function(t){t.enable()})},onMount:function(){n(!0)},onUntrigger:function(){n(!1)},onTrigger:function(r,p){var s=p.currentTarget,c=u.indexOf(s);s!==o&&(o=s,i=a,e.state.isVisible&&n(!0),e.popperInstance.reference=s,e.setContent(t[c].props.content))}}}};return gt(I(),e({},n,{plugins:[s].concat(r),aria:null,triggerTarget:u}))},gt.delegate=function(t,n,r){void 0===r&&(r=[]),r=n.plugins||r;var i,o,a=[],p=[],u=n.target,s=(i=["target"],o=e({},n),i.forEach(function(t){delete o[t]}),o),c=e({},s,{plugins:r,trigger:"manual"}),l=e({},s,{plugins:r,showOnCreate:!0}),f=gt(t,c);function d(t){if(t.target){var e=t.target.closest(u);if(e)if(P(e.getAttribute("data-tippy-trigger")||n.trigger||Z.trigger,bt[t.type])){var r=gt(e,l);r&&(p=p.concat(r))}}}function v(t,e,n,r){void 0===r&&(r=!1),t.addEventListener(e,n,r),a.push({node:t,eventType:e,handler:n,options:r})}return U(f).forEach(function(t){var e=t.destroy;t.destroy=function(t){void 0===t&&(t=!0),t&&p.forEach(function(t){t.destroy()}),p=[],a.forEach(function(t){var e=t.node,n=t.eventType,r=t.handler,i=t.options;e.removeEventListener(n,r,i)}),a=[],e()},function(t){var e=t.reference;v(e,"mouseover",d),v(e,"focusin",d),v(e,"click",d)}(t)}),f},gt.hideAll=function(t){var e=void 0===t?{}:t,n=e.exclude,r=e.duration;mt.forEach(function(t){var e=!1;n&&(e=h(n)?t.reference===n:t.popper===n.popper),e||t.hide(r)})},gt.roundArrow='<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>',gt}(Popper);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.dragula=e()}}(function(){return function e(n,t,r){function o(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";function r(e){var n=u[e];return n?n.lastIndex=0:u[e]=n=new RegExp(c+e+a,"g"),n}function o(e,n){var t=e.className;t.length?r(n).test(t)||(e.className+=" "+n):e.className=n}function i(e,n){e.className=e.className.replace(r(n)," ").trim()}var u={},c="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:o,rm:i}},{}],2:[function(e,n,t){(function(t){"use strict";function r(e,n){function t(e){return-1!==le.containers.indexOf(e)||fe.isContainer(e)}function r(e){var n=e?"remove":"add";o(S,n,"mousedown",O),o(S,n,"mouseup",L)}function c(e){var n=e?"remove":"add";o(S,n,"mousemove",N)}function m(e){var n=e?"remove":"add";w[n](S,"selectstart",C),w[n](S,"click",C)}function h(){r(!0),L({})}function C(e){ce&&e.preventDefault()}function O(e){ne=e.clientX,te=e.clientY;var n=1!==i(e)||e.metaKey||e.ctrlKey;if(!n){var t=e.target,r=T(t);r&&(ce=r,c(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function N(e){if(ce){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==ne||void 0===e.clientY||e.clientY!==te){if(fe.ignoreInputTextSelection){var n=y("clientX",e),t=y("clientY",e),r=x.elementFromPoint(n,t);if(p(r))return}var o=ce;c(!0),m(),D(),B(o);var a=u(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,E.add(ie||W,"gu-transit"),K(),U(e)}}}function T(e){if(!(le.dragging&&J||t(e))){for(var n=e;v(e)&&t(v(e))===!1;){if(fe.invalid(e,n))return;if(e=v(e),!e)return}var r=v(e);if(r&&!fe.invalid(e,n)){var o=fe.moves(e,r,n,g(e));if(o)return{item:e,source:r}}}}function X(e){return!!T(e)}function Y(e){var n=T(e);n&&B(n)}function B(e){$(e.item,e.source)&&(ie=e.item.cloneNode(!0),le.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=g(e.item),le.dragging=!0,le.emit("drag",W,Q)}function P(){return!1}function D(){if(le.dragging){var e=ie||W;M(e,v(e))}}function I(){ce=!1,c(!0),m(!0)}function L(e){if(I(),le.dragging){var n=ie||W,t=y("clientX",e),r=y("clientY",e),o=a(J,t,r),i=q(o,t,r);i&&(ie&&fe.copySortSource||!ie||i!==Q)?M(n,i):fe.removeOnSpill?R():A()}}function M(e,n){var t=v(e);ie&&fe.copySortSource&&n===Q&&t.removeChild(W),k(n)?le.emit("cancel",e,Q,Q):le.emit("drop",e,n,Q,oe),j()}function R(){if(le.dragging){var e=ie||W,n=v(e);n&&n.removeChild(e),le.emit(ie?"cancel":"remove",e,n,Q),j()}}function A(e){if(le.dragging){var n=arguments.length>0?e:fe.revertOnSpill,t=ie||W,r=v(t),o=k(r);o===!1&&n&&(ie?r&&r.removeChild(ie):Q.insertBefore(t,re)),o||n?le.emit("cancel",t,Q,Q):le.emit("drop",t,r,Q,oe),j()}}function j(){var e=ie||W;I(),z(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),le.dragging=!1,ae&&le.emit("out",e,ae,Q),le.emit("dragend",e),Q=W=ie=re=oe=ue=ae=null}function k(e,n){var t;return t=void 0!==n?n:J?oe:g(ie||W),e===Q&&t===re}function q(e,n,r){function o(){var o=t(i);if(o===!1)return!1;var u=H(i,e),c=V(i,u,n,r),a=k(i,c);return a?!0:fe.accepts(W,i,Q,c)}for(var i=e;i&&!o();)i=v(i);return i}function U(e){function n(e){le.emit(e,f,ae,Q)}function t(){s&&n("over")}function r(){ae&&n("out")}if(J){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),u=o-Z,c=i-ee;J.style.left=u+"px",J.style.top=c+"px";var f=ie||W,l=a(J,o,i),d=q(l,o,i),s=null!==d&&d!==ae;(s||null===d)&&(r(),ae=d,t());var p=v(f);if(d===Q&&ie&&!fe.copySortSource)return void(p&&p.removeChild(f));var m,h=H(d,l);if(null!==h)m=V(d,h,o,i);else{if(fe.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(f));m=re,d=Q}(null===m&&s||m!==f&&m!==g(f))&&(oe=m,d.insertBefore(f,m),le.emit("shadow",f,d,Q))}}function _(e){E.rm(e,"gu-hide")}function F(e){le.dragging&&E.add(e,"gu-hide")}function K(){if(!J){var e=W.getBoundingClientRect();J=W.cloneNode(!0),J.style.width=d(e)+"px",J.style.height=s(e)+"px",E.rm(J,"gu-transit"),E.add(J,"gu-mirror"),fe.mirrorContainer.appendChild(J),o(S,"add","mousemove",U),E.add(fe.mirrorContainer,"gu-unselectable"),le.emit("cloned",J,W,"mirror")}}function z(){J&&(E.rm(fe.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",U),v(J).removeChild(J),J=null)}function H(e,n){for(var t=n;t!==e&&v(t)!==e;)t=v(t);return t===S?null:t}function V(e,n,t,r){function o(){var n,o,i,u=e.children.length;for(n=0;u>n;n++){if(o=e.children[n],i=o.getBoundingClientRect(),c&&i.left+i.width/2>t)return o;if(!c&&i.top+i.height/2>r)return o}return null}function i(){var e=n.getBoundingClientRect();return u(c?t>e.left+d(e)/2:r>e.top+s(e)/2)}function u(e){return e?g(n):n}var c="horizontal"===fe.direction,a=n!==e?i():o();return a}function $(e,n){return"boolean"==typeof fe.copy?fe.copy:fe.copy(e,n)}var G=arguments.length;1===G&&Array.isArray(e)===!1&&(n=e,e=[]);var J,Q,W,Z,ee,ne,te,re,oe,ie,ue,ce,ae=null,fe=n||{};void 0===fe.moves&&(fe.moves=l),void 0===fe.accepts&&(fe.accepts=l),void 0===fe.invalid&&(fe.invalid=P),void 0===fe.containers&&(fe.containers=e||[]),void 0===fe.isContainer&&(fe.isContainer=f),void 0===fe.copy&&(fe.copy=!1),void 0===fe.copySortSource&&(fe.copySortSource=!1),void 0===fe.revertOnSpill&&(fe.revertOnSpill=!1),void 0===fe.removeOnSpill&&(fe.removeOnSpill=!1),void 0===fe.direction&&(fe.direction="vertical"),void 0===fe.ignoreInputTextSelection&&(fe.ignoreInputTextSelection=!0),void 0===fe.mirrorContainer&&(fe.mirrorContainer=x.body);var le=b({containers:fe.containers,start:Y,end:D,cancel:A,remove:R,destroy:h,canMove:X,dragging:!1});return fe.removeOnSpill===!0&&le.on("over",_).on("out",F),r(),le}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,c[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function u(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:x.body[e]}function a(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=x.elementFromPoint(n,t),o.className=i,r}function f(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===x?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return e?"false"===e.contentEditable?!1:"true"===e.contentEditable?!0:m(v(e)):!1}function g(e){function n(){var n=e;do n=n.nextSibling;while(n&&1!==n.nodeType);return n}return e.nextElementSibling||n()}function h(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,n){var t=h(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}var b=e("contra/emitter"),w=e("crossvent"),E=e("./classes"),x=document,S=x.documentElement;n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var r=e("ticky");n.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var r=e("atoa"),o=e("./debounce");n.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&t["throws"]!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function r(e,n,t,r){return e.addEventListener(n,t,r)}function o(e,n,t){return e.attachEvent("on"+n,f(e,n,t))}function i(e,n,t,r){return e.removeEventListener(n,t,r)}function u(e,n,t){var r=l(e,n,t);return r?e.detachEvent("on"+n,r):void 0}function c(e,n,t){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(n,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new s(n,{detail:t})}var i=-1===v.indexOf(n)?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+n,i)}function a(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function f(e,n,t){var r=l(e,n,t)||a(e,n,t);return h.push({wrapper:r,element:e,type:n,fn:t}),r}function l(e,n,t){var r=d(e,n,t);if(r){var o=h[r].wrapper;return h.splice(r,1),o}}function d(e,n,t){var r,o;for(r=0;r<h.length;r++)if(o=h[r],o.element===e&&o.type===n&&o.fn===t)return r}var s=e("custom-event"),v=e("./eventmap"),p=t.document,m=r,g=i,h=[];t.addEventListener||(m=o,g=u),n.exports={add:m,remove:g,fabricate:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],r="",o=/^on/;for(r in e)o.test(r)&&t.push(r.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){function t(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}var r=e.CustomEvent;n.exports=t()?r:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var r,o="function"==typeof setImmediate;r=o?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=r},{}]},{},[2])(2)});

var hoverElement, animate;

window.addEventListener('load', (event) => {
	var slot = localStorage.getItem("slot").split(";");
	var main = localStorage.getItem("main").split("`");

	for (var i = 0; i < 9; i++)
		document.getElementsByClassName("slot")[i].innerHTML = slot[i];
	for (var i = 0; i < main.length; i++)
		document.getElementById("main").innerHTML += main[i];

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
            if (document.elementFromPoint(rect.left, rect.top) && (document.elementFromPoint(rect.left, rect.top).id === "drag-area" || document.elementFromPoint(rect.right, rect.top).id === "drag-area" || document.elementFromPoint(rect.left, rect.bottom).id === "drag-area" || document.elementFromPoint(rect.right, rect.bottom).id === "drag-area"))
                document.getElementById("main").getElementsByClassName("element")[i].classList.add("selected");
            else
                document.getElementById("main").getElementsByClassName("element")[i].classList.remove("selected");
        }
    }

    function mouseUp() {
        target.style.display = "none";
        target.style.width = "0";
        target.style.height = "0";
        document.removeEventListener("mouseup", mouseUp, false);
        document.removeEventListener("mousemove", mouseMove, false);
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
            target.style.cursor = "";
            for (var i = 0; i < document.getElementsByClassName("selected").length; i++) {
                document.getElementsByClassName("selected")[i].style.boxShadow = "";
                // document.getElementsByClassName("selected")[0].classList.remove("selected");
            }
            document.getElementById("main").removeEventListener("mouseup", mouseUpMultiple, false);
            document.getElementById("main").removeEventListener("mousemove", mouseMoveMultiple, false);
        };

        for (var i = 0; i < document.getElementsByClassName("selected").length; i++)
            document.getElementsByClassName("selected")[i].style.boxShadow = "5px 5px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 2px #000, 0 0 0 1px #000";

        document.getElementById("main").addEventListener("mousemove", mouseMoveMultiple);
        document.getElementById("main").addEventListener("mouseup", mouseUpMultiple);
    } else {
        var mouseMove = function(e) {
            target.style.left = e.pageX - diffX + "px";
            target.style.top = e.pageY - diffY + "px";
        };

        var mouseUp = function() {
            // target.classList.remove("selected");
            target.style.boxShadow = "";
            target.style.cursor = "";
            document.getElementById("main").removeEventListener("mouseup", mouseUp, false);
            document.getElementById("main").removeEventListener("mousemove", mouseMove, false);
        };

        while (document.getElementsByClassName("selected")[0])
            document.getElementsByClassName("selected")[0].classList.remove("selected");

        target.classList.add("selected");
        target.style.boxShadow = "5px 5px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 2px #000, 0 0 0 1px #000";
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

function setPosition(left, top, target) {
    document.getElementById("menu").style.left = left + "px";
    document.getElementById("menu").style.top = top + "px";

    if (target.id === "hotbar") {
        document.getElementById("menu-option").innerHTML = "Clear All Slots";
        document.getElementById("menu-option").onclick = function() {
            for (var i = 0; i < 9; i++)
                document.getElementsByClassName("slot")[i].innerHTML = "";
            toggleMenu("hide", target);
        };
        toggleMenu("show", target);
    } else if (target.parentElement.classList.contains("slot")) {
        document.getElementById("menu-option").innerHTML = "Clear Slot";
        document.getElementById("menu-option").onclick = function() {
            target.parentElement.innerHTML = "";
            toggleMenu("hide", target);
        };
        toggleMenu("show", target);
    } else if (target.id === "main") {
        document.getElementById("menu-option").innerHTML = "Clear Lab";
        document.getElementById("menu-option").onclick = function() {
            while (document.getElementById("main").getElementsByClassName("element")[0])
                document.getElementById("main").removeChild(document.getElementById("main").lastChild);
            toggleMenu("hide", target);
        };
        toggleMenu("show", target);
    } else if (target.parentElement.id === "main" && target.classList.contains("element")) {
        if (document.getElementsByClassName("selected")[1]) {
            document.getElementById("menu-option").innerHTML = "Remove Atoms";
            document.getElementById("menu-option").onclick = function() {
                while (document.getElementsByClassName("selected")[0])
                    document.getElementById("main").removeChild(document.getElementsByClassName("selected")[0]);
                toggleMenu("hide", target);
            };
        } else {
            document.getElementById("menu-option").innerHTML = "Remove Atom";
            document.getElementById("menu-option").onclick = function() {
                document.getElementById("main").removeChild(target);
                toggleMenu("hide", target);
            };
            target.classList.add("selected");
        }

        toggleMenu("show", target);
    }
}

function sliderAdjust(target) {
    function mouseMove(e) {
        var pos = e.pageY - 148;
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
        document.body.removeEventListener("mouseup", mouseUp, false);
        document.body.removeEventListener("mousemove", mouseMove, false);
        document.body.style.cursor = "";
        var changePX = document.getElementById("slider-thumb").offsetTop;
        document.getElementById("slider-thumb").style.top = changePX + "px";
        document.getElementById("slider").style.background = "linear-gradient(#e8e8e8 " + changePX + "%, #3fc1c9 " + changePX + "%)";
    }
    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseup", mouseUp);
}

function overlayToggle() {
    if (document.getElementById("overlay").style.visibility === "visible") {
        document.getElementById("overlay").style.opacity = 0;
        document.getElementById("rack-dialog").style.visibility = "hidden";
        setTimeout(function() {
            document.getElementById("overlay").style.visibility = "hidden";
        }, 500);
        document.body.setAttribute("overlay", "off");
    } else {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("overlay").style.opacity = 1;
        document.getElementById("rack-dialog").style.visibility = "visible";
        document.body.setAttribute("overlay", "on");
    }
}

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
		setTimeout( function(){
			document.getElementById("snackbar").classList = "";
		}, 3000);
	}

    function frame() {
		for (var i = 0; i < document.getElementById("main").getElementsByClassName("element").length; i++) {
			var element = document.getElementById("main").getElementsByClassName("element")[i];
			var x = parseInt(element.style.transform.match(/\d+/g)[0], 10) + 1;
			var y = parseInt(element.style.transform.match(/\d+/g)[1], 10) + 1;

		    element.style.transform = "translate(" + x + "px, " + y + "px)";
		}
        animate = requestAnimationFrame(frame);
    }
});

document.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains("element"))
        hoverElement = event.target;
    else
        hoverElement = undefined;
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
            setPosition(e.pageX, e.pageY, e.target);
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
            e.target.style.cursor = "url(assets/cursor-drag-clicked.png), pointer";
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
        document.body.style.cursor = "url(assets/cursor-drag-clicked.png), pointer";
    } else {
        var pos = e.pageY - 148;
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
        return source !== document.getElementById("main");
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

tippy(".element", {
    delay: [400, 0],
    content(reference) {
        var title = reference.firstElementChild.getAttribute("title");
        reference.removeAttribute("title");
        return title;
    }
});

tippy("#header > div", {
    delay: [400, 0],
    content(reference) {
        var title = reference.getAttribute("title");
        reference.removeAttribute("title");
        return title;
    }
});