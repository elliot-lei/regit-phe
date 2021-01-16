!function(e,t){var i=function(n,p,o){"use strict";var v,h;if(function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in h=n.lazySizesConfig||n.lazysizesConfig||{},t)e in h||(h[e]=t[e])}(),!p||!p.getElementsByClassName)return{init:function(){},cfg:h,noSupport:!0};var m=p.documentElement,a=n.HTMLPictureElement,r="addEventListener",g="getAttribute",e=n[r].bind(n),u=n.setTimeout,i=n.requestAnimationFrame||u,s=n.requestIdleCallback,f=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],c={},w=Array.prototype.forEach,d=function(e,t){return c[t]||(c[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),c[t].test(e[g]("class")||"")&&c[t]},y=function(e,t){d(e,t)||e.setAttribute("class",(e[g]("class")||"").trim()+" "+t)},z=function(e,t){var i;(i=d(e,t))&&e.setAttribute("class",(e[g]("class")||"").replace(i," "))},C=function(t,i,e){var n=e?r:"removeEventListener";e&&C(t,i),l.forEach(function(e){t[n](e,i)})},$=function(e,t,i,n,a){var o=p.createEvent("Event");return i||(i={}),i.instance=v,o.initEvent(t,!n,!a),o.detail=i,e.dispatchEvent(o),o},b=function(e,t){var i;!a&&(i=n.picturefill||h.pf)?(t&&t.src&&!e[g]("srcset")&&e.setAttribute("srcset",t.src),i({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,i){for(i=i||e.offsetWidth;i<h.minSize&&t&&!e._lazysizesWidth;)i=t.offsetWidth,t=t.parentNode;return i},_=($e=[],be=[],Ae=$e,Ee=function(){var e=Ae;for(Ae=$e.length?be:$e,Ce=!(ze=!0);e.length;)e.shift()();ze=!1},_e=function(e,t){ze&&!t?e.apply(this,arguments):(Ae.push(e),Ce||(Ce=!0,(p.hidden?u:i)(Ee)))},_e._lsFlush=Ee,_e),t=function(i,e){return e?function(){_(i)}:function(){var e=this,t=arguments;_(function(){i.apply(e,t)})}},M=function(e){var t,i,n=function(){t=null,e()},a=function(){var e=o.now()-i;e<99?u(a,99-e):(s||n)(n)};return function(){i=o.now(),t||(t=u(a,99))}},x=(ee=/^img$/i,te=/^iframe$/i,ie="onscroll"in n&&!/(gle|ing)bot/.test(navigator.userAgent),ne=0,ae=0,oe=-1,re=function(e){ae--,(!e||ae<0||!e.target)&&(ae=0)},se=function(e){return null==U&&(U="hidden"==A(p.body,"visibility")),U||!("hidden"==A(e.parentNode,"visibility")&&"hidden"==A(e,"visibility"))},le=function(e,t){var i,n=e,a=se(e);for(P-=t,K+=t,I-=t,j+=t;a&&(n=n.offsetParent)&&n!=p.body&&n!=m;)(a=0<(A(n,"opacity")||1))&&"visible"!=A(n,"overflow")&&(i=n.getBoundingClientRect(),a=j>i.left&&I<i.right&&K>i.top-1&&P<i.bottom+1);return a},ce=function(){var e,t,i,n,a,o,r,s,l,c,d,u,f=v.elements;if((D=h.loadMode)&&ae<8&&(e=f.length)){for(t=0,oe++;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(!ie||v.prematureUnveil&&v.prematureUnveil(f[t]))me(f[t]);else if((s=f[t][g]("data-expand"))&&(o=1*s)||(o=ne),c||(c=!h.expand||h.expand<1?500<m.clientHeight&&500<m.clientWidth?500:370:h.expand,v._defEx=c,d=c*h.expFactor,u=h.hFac,U=null,ne<d&&ae<1&&2<oe&&2<D&&!p.hidden?(ne=d,oe=0):ne=1<D&&1<oe&&ae<6?c:0),l!==o&&(q=innerWidth+o*u,O=innerHeight+o,r=-1*o,l=o),i=f[t].getBoundingClientRect(),(K=i.bottom)>=r&&(P=i.top)<=O&&(j=i.right)>=r*u&&(I=i.left)<=q&&(K||j||I||P)&&(h.loadHidden||se(f[t]))&&(F&&ae<3&&!s&&(D<3||oe<4)||le(f[t],o))){if(me(f[t]),a=!0,9<ae)break}else!a&&F&&!n&&ae<4&&oe<4&&2<D&&(L[0]||h.preloadAfterLoad)&&(L[0]||!s&&(K||j||I||P||"auto"!=f[t][g](h.sizesAttr)))&&(n=L[0]||f[t]);n&&!a&&me(n)}},G=ce,Q=0,V=h.throttleDelay,X=h.ricTimeout,Y=function(){J=!1,Q=o.now(),G()},Z=s&&49<X?function(){s(Y,{timeout:X}),X!==h.ricTimeout&&(X=h.ricTimeout)}:t(function(){u(Y)},!0),de=function(e){var t;(e=!0===e)&&(X=33),J||(J=!0,(t=V-(o.now()-Q))<0&&(t=0),e||t<9?Z():u(Z,t))},ue=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(re(e),y(t,h.loadedClass),z(t,h.loadingClass),C(t,pe),$(t,"lazyloaded"))},fe=t(ue),pe=function(e){fe({target:e.target})},ve=function(e){var t,i=e[g](h.srcsetAttr);(t=h.customMedia[e[g]("data-media")||e[g]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i)},he=t(function(t,e,i,n,a){var o,r,s,l,c,d;(c=$(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(i?y(t,h.autosizesClass):t.setAttribute("sizes",n)),r=t[g](h.srcsetAttr),o=t[g](h.srcAttr),a&&(s=t.parentNode,l=s&&f.test(s.nodeName||"")),d=e.firesLoad||"src"in t&&(r||o||l),c={target:t},y(t,h.loadingClass),d&&(clearTimeout(R),R=u(re,2500),C(t,pe,!0)),l&&w.call(s.getElementsByTagName("source"),ve),r?t.setAttribute("srcset",r):o&&!l&&(te.test(t.nodeName)?function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}}(t,o):t.src=o),a&&(r||l)&&b(t,{src:o})),t._lazyRace&&delete t._lazyRace,z(t,h.lazyClass),_(function(){var e=t.complete&&1<t.naturalWidth;d&&!e||(e&&y(t,"ls-is-cached"),ue(c),t._lazyCache=!0,u(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&ae--},!0)}),me=function(e){if(!e._lazyRace){var t,i=ee.test(e.nodeName),n=i&&(e[g](h.sizesAttr)||e[g]("sizes")),a="auto"==n;(!a&&F||!i||!e[g]("src")&&!e.srcset||e.complete||d(e,h.errorClass)||!d(e,h.lazyClass))&&(t=$(e,"lazyunveilread").detail,a&&N.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ae++,he(e,t,a,n,i))}},ge=M(function(){h.loadMode=3,de()}),we=function(){3==h.loadMode&&(h.loadMode=2),ge()},ye=function(){F||(o.now()-H<999?u(ye,999):(F=!0,h.loadMode=3,de(),e("scroll",we,!0)))},{_:function(){H=o.now(),v.elements=p.getElementsByClassName(h.lazyClass),L=p.getElementsByClassName(h.lazyClass+" "+h.preloadClass),e("scroll",de,!0),e("resize",de,!0),e("pageshow",function(e){if(e.persisted){var t=p.querySelectorAll("."+h.loadingClass);t.length&&t.forEach&&i(function(){t.forEach(function(e){e.complete&&me(e)})})}}),n.MutationObserver?new MutationObserver(de).observe(m,{childList:!0,subtree:!0,attributes:!0}):(m[r]("DOMNodeInserted",de,!0),m[r]("DOMAttrModified",de,!0),setInterval(de,999)),e("hashchange",de,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){p[r](e,de,!0)}),/d$|^c/.test(p.readyState)?ye():(e("load",ye),p[r]("DOMContentLoaded",de),u(ye,2e4)),v.elements.length?(ce(),_._lsFlush()):de()},checkElems:de,unveil:me,_aLSL:we}),N=(S=t(function(e,t,i,n){var a,o,r;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),f.test(t.nodeName||""))for(a=t.getElementsByTagName("source"),o=0,r=a.length;o<r;o++)a[o].setAttribute("sizes",n);i.detail.dataAttr||b(e,i.detail)}),k=function(e,t,i){var n,a=e.parentNode;a&&(i=E(e,a,i),(n=$(e,"lazybeforesizes",{width:i,dataAttr:!!t})).defaultPrevented||(i=n.detail.width)&&i!==e._lazysizesWidth&&S(e,a,n,i))},B=M(function(){var e,t=W.length;if(t)for(e=0;e<t;e++)k(W[e])}),{_:function(){W=p.getElementsByClassName(h.autosizesClass),e("resize",B)},checkElems:B,updateElem:k}),T=function(){!T.i&&p.getElementsByClassName&&(T.i=!0,N._(),x._())};var W,S,k,B;var L,F,R,D,H,q,O,P,I,j,K,U,G,J,Q,V,X,Y,Z,ee,te,ie,ne,ae,oe,re,se,le,ce,de,ue,fe,pe,ve,he,me,ge,we,ye;var ze,Ce,$e,be,Ae,Ee,_e;return u(function(){h.init&&T()}),v={cfg:h,autoSizer:N,loader:x,init:T,uP:b,aC:y,rC:z,hC:d,fire:$,gW:E,rAF:_}}(e,e.document,Date);e.lazySizes=i,"object"==typeof module&&module.exports&&(module.exports=i)}("undefined"!=typeof window?window:{}),$(function(){$(document).on("preview.open",".icon-preview",function(){$(".tooltip").tooltip("hide");for(var e=$(this),t=$(".icon-preview-inline"),i=e.find(".icon-preview-img img"),n=i.data("scale")||2,a={offset:e.offset().left+e.width()/2-t.offset().left,icon:{id:e.data("asset-id"),url:e.find('[data-action="icon-details"]').attr("href")},thumbnail:{src:i.attr("src"),srcset:i.attr("srcset"),width:i.width()*n,height:i.height()*n}},o=templates.render("icons/_inline-preview-loading.html",a),r=Math.floor(t.width()/e.width()),s=$(".icon-preview:visible"),l=s.index(e)+1,c=1;c*r<l;)c++;var d=c*r;d>s.length&&(d=s.length),0<$("#icon-details-preview").length&&$(document).trigger("preview.close"),e.addClass("open"),s.eq(d-1).after(o);var u=$("#icon-details-preview");$.get("/icons/ajax/"+a.icon.id,a.thumbnail,function(e){u.find(".icon-details-placeholder").replaceWith(e),$(document).trigger("preview.update")}),$(document).trigger("preview.update");var f=e.offset().top-$(".navbar").outerHeight();100<Math.abs(f-$(window).scrollTop())&&$("html, body").stop(!0,!0).animate({scrollTop:f},350),window.downloadTarget=e,analytics("send","pageview","icons/preview/"+a.icon.id)}),$(document).on("click",".icon-preview-inline .icon-preview",function(e){$(window).width()<992||e.ctrlKey||e.metaKey||(e.preventDefault(),$(this).hasClass("open")?$(document).trigger("preview.close"):$(this).trigger("preview.open"))}),$(document).on("preview.next preview.prev",function(e){var t=$(".icon-preview.open");if(t){var i=$(".icon-preview:visible"),n=i.index(t),a={prev:n-1,next:n+1};i.eq(a[e.namespace]).trigger("preview.open")}}),$(document).on("preview.close",function(){var e=$("#icon-details-preview");window.downloadTarget=null,$(".icon-preview.open").removeClass("open"),e.find("[data-profile]").popover("dispose"),e.remove()}),$(document).on("preview.update",function(){var e=$("#icon-details-preview");e.find('[data-toggle="tooltip"]').tooltip({html:!0,sanitize:!1}),e.find("[data-hotkey]").hotkey()}),$(document).on("click","[data-preview]",function(){var e=$(this).data("preview");$(document).trigger("preview."+e)}),$(document).on("remote.call.success",'[data-trigger="update"]',function(){$(".icon-preview.open").trigger("preview.open")})});
//# sourceMappingURL=https://www.iconfinder.com/static/js/icon-details-preview.js.map
