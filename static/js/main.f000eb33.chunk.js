(this.webpackJsonpnftmash=this.webpackJsonpnftmash||[]).push([[0],{220:function(e,t,a){e.exports=a.p+"static/media/lamp.b719f166.png"},287:function(e,t,a){e.exports=a(370)},296:function(e,t,a){e.exports=a.p+"static/media/logo.9911d398.png"},297:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},298:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},299:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},300:function(e,t,a){e.exports=a.p+"static/media/girl_poon.c3865cc9.png"},304:function(e,t){},368:function(e,t,a){var n={"./amplify-amazon-button_5.entry.js":[376,16],"./amplify-auth-container.entry.js":[377,17],"./amplify-auth-fields_9.entry.js":[378,18],"./amplify-authenticator.entry.js":[379,5],"./amplify-button_3.entry.js":[380,19],"./amplify-chatbot.entry.js":[381,4],"./amplify-checkbox.entry.js":[382,20],"./amplify-confirm-sign-in_7.entry.js":[383,6],"./amplify-container.entry.js":[384,21],"./amplify-federated-buttons_2.entry.js":[385,22],"./amplify-federated-sign-in.entry.js":[386,23],"./amplify-form-field_4.entry.js":[387,24],"./amplify-greetings.entry.js":[388,25],"./amplify-icon-button.entry.js":[389,26],"./amplify-icon.entry.js":[390,7],"./amplify-link.entry.js":[391,27],"./amplify-nav_2.entry.js":[392,28],"./amplify-photo-picker.entry.js":[393,29],"./amplify-picker.entry.js":[394,30],"./amplify-radio-button_3.entry.js":[395,8],"./amplify-s3-album.entry.js":[396,9],"./amplify-s3-image-picker.entry.js":[397,10],"./amplify-s3-image.entry.js":[398,11],"./amplify-s3-text-picker.entry.js":[399,12],"./amplify-s3-text.entry.js":[400,13],"./amplify-select-mfa-type.entry.js":[401,31],"./amplify-sign-in-button.entry.js":[402,14],"./amplify-tooltip.entry.js":[403,32]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=368,e.exports=r},369:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),s=a.n(i),o=a(29),l=a(41),c=a(15),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,n=Object(c.a)(e,m);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(o.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},u=a(8),p=a(9),v=a.n(p),f=a(164),h=r.a.forwardRef((function(e,t){var a=Object(n.useState)(window.innerHeight),i=Object(u.a)(a,2),s=i[0],o=i[1],l=Object(n.useState)([]),c=Object(u.a)(l,2),m=c[0],d=c[1],p=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},v=function(){if(!p())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),n=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=s-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,n)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(n.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(n.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(p()||(window.addEventListener("scroll",b),window.addEventListener("resize",E)),v())}),[m]);var h=function(){p()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",E))},b=Object(f.throttle)((function(){h(),v()}),30),E=Object(f.throttle)((function(){o(window.innerHeight)}),30);return Object(n.useEffect)((function(){h(),v()}),[s]),r.a.createElement(r.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var b=h,E=a(150),g=a(10),y=a.n(g),N=a(73),O=["className","src","width","height","alt"],w=function(e){var t=e.className,a=e.src,i=e.width,s=e.height,o=e.alt,l=Object(c.a)(e,O),m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=d[0],v=d[1],f=Object(n.useRef)(null);Object(n.useEffect)((function(){h(f.current)}),[]);var h=function(e){var t,a,n=document.createElement("img");p||(e.style.display="none",e.before(n),n.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),n.width=e.getAttribute("width"),n.height=e.getAttribute("height"),n.style.opacity="0",e.className&&n.classList.add(e.className),n.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},l,{ref:f,className:t,src:a,width:i,height:s,alt:o,onLoad:function(){v(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var j=w,k=["className"],D=function(e){var t=e.className,n=Object(c.a)(e,k),i=y()("brand",t);return r.a.createElement("div",Object.assign({},n,{className:i}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(j,{src:a(296),alt:"Open",width:64,height:64}))))},x=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=(e.navPosition,e.hideNav),i=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,l=Object(c.a)(e,x),m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=d[0],v=d[1],f=Object(n.useRef)(null),h=Object(n.useRef)(null);Object(n.useEffect)((function(){return p&&b(),document.addEventListener("keydown",g),document.addEventListener("click",N),function(){document.removeEventListener("keydown",g),document.removeEventListener("click",N),E()}}));var b=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",v(!0)},E=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),v(!1)},g=function(e){p&&27===e.keyCode&&E()},N=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==h.current&&E()},O=y()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},l,{className:O}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:y()("site-header-inner",o&&"has-bottom-divider")},r.a.createElement(D,null),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:p?E:b},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:f,className:y()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},!i&&r.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var A=C,S=["className"],_=function(e){var t=e.className,a=Object(c.a)(e,S),n=y()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:n}),r.a.createElement("ul",{className:"list-reset"}))},R=["className"],T=function(e){var t=e.className,a=Object(c.a)(e,R),n=y()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:n}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/theharvardlampoon/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Facebook"),r.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/harvardlampoon"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/harvardlampoon"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},L=["className","topOuterDivider","topDivider"],F=function(e){var t=e.className,a=e.topOuterDivider,n=e.topDivider,i=Object(c.a)(e,L),s=y()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},i,{className:s}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:y()("site-footer-inner",n&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(D,null),r.a.createElement(T,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(_,null),r.a.createElement("a",{href:"https://harvardlampoon.com/"},"Made by The Lampoon Tech Board. All rights reserved.")))))};F.defaultProps={topOuterDivider:!1,topDivider:!1};var I=F,M=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(I,null))},P=a(24),q={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},H={types:Object(P.a)({},q.types),defaults:Object(P.a)({},q.defaults)},B={types:Object(P.a)(Object(P.a)({},q.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(P.a)(Object(P.a)({},q.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},U={types:Object(P.a)(Object(P.a)({},q.types),{},{pushLeft:v.a.bool}),defaults:Object(P.a)(Object(P.a)({},q.defaults),{},{pushLeft:!1})},W=["className"],z=function(e){var t=e.className,a=Object(c.a)(e,W),n=y()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:n}))},V=["className","tag","color","size","loading","wide","wideMobile","disabled"],G=function(e){var t=e.className,a=e.tag,n=e.color,i=e.size,s=e.loading,o=e.wide,l=e.wideMobile,m=e.disabled,d=Object(c.a)(e,V),u=y()("button",n&&"button-".concat(n),i&&"button-".concat(i),s&&"is-loading",o&&"button-block",l&&"button-wide-mobile",t),p=a;return r.a.createElement(p,Object.assign({},d,{className:u,disabled:m}))};G.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var K=G,Q=["className","children","handleClose","show","closeHidden","video","videoTag"],J=function(e){var t=e.className,a=e.children,i=e.handleClose,s=e.show,o=e.closeHidden,l=e.video,m=e.videoTag,d=Object(c.a)(e,Q);Object(n.useEffect)((function(){return document.addEventListener("keydown",p),document.addEventListener("click",v),function(){document.removeEventListener("keydown",p),document.removeEventListener("click",v)}})),Object(n.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},p=function(e){27===e.keyCode&&i(e)},v=function(e){e.stopPropagation()},f=y()("modal",s&&"is-active",l&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement("div",Object.assign({},d,{className:f,onClick:i}),r.a.createElement("div",{className:"modal-inner",onClick:v},l?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:l,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:l})):r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:i}),r.a.createElement("div",{className:"modal-content"},a)))))};J.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var Y=a(220),$=a.n(Y),X=a(434),Z=a(445),ee=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],te=Object(P.a)({},H.defaults),ae=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,ee),p=Object(n.useState)(!1),v=Object(u.a)(p,2),f=(v[0],v[1],y()("hero section center-content",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",m&&"invert-color",t)),h=y()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},d,{className:f}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:h},r.a.createElement("div",{className:"hero-content"},r.a.createElement(X.a,null,r.a.createElement(Z.a,{src:$.a})),r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"welcomes you to ",r.a.createElement("span",{className:"text-color-secondary"},"NFT Mash")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Help us be funny. Caption our art, upvote top captions, and we'll add them to our content or turn them into NFTs (whichever one makes us more money off of your hard work)."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(z,null,r.a.createElement(K,{tag:"a",color:"primary",wideMobile:!0,href:"/login"},"Get started"),r.a.createElement(K,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/rnori-harv/nftmash"},"View on Github"))))))))};ae.defaultProps=te;var ne=ae,re=["className","data","children","tag"],ie=function(e){var t=e.className,a=e.data,n=e.children,i=e.tag,s=Object(c.a)(e,re),o=y()("section-header",t),l=i;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},s,{className:o}),r.a.createElement("div",{className:"container-xs"},n,a.title&&r.a.createElement(l,{className:y()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};ie.defaultProps={children:null,tag:"h2"};var se=ie,oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],le=Object(P.a)({},U.defaults),ce=function(e){var t=e.className,n=e.topOuterDivider,i=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,oe),p=y()("features-tiles section",n&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",m&&"invert-color",t),v=y()("features-tiles-inner section-inner pt-0",s&&"has-top-divider",o&&"has-bottom-divider"),f=y()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:p}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(se,{data:{title:"How it works",paragraph:""},className:"center-content"}),r.a.createElement("div",{className:f},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(j,{src:a(297),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Upvote and Downvote"),r.a.createElement("p",{className:"m-0 text-sm"},"See a piece of art you think is funny or cool? Upvote it. See a shitty one? Downvote it. Likewise for captions.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(j,{src:a(298),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Caption Images"),r.a.createElement("p",{className:"m-0 text-sm"},"Find a piece of art that is particularly evocative to you? Make a Caption for it!")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(j,{src:a(299),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Mint NFTs"),r.a.createElement("p",{className:"m-0 text-sm"},"Every month, the top image + caption is minted as an NFT. If you have the most popular caption for an image, you get 25% of proceeds when the NFT is sold."))))))))};ce.defaultProps=le;var me=ce,de=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],ue=Object(P.a)({},B.defaults),pe=function(e){var t=e.className,n=e.topOuterDivider,i=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,p=e.alignTop,v=e.imageFill,f=Object(c.a)(e,de),h=y()("features-split section",n&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",m&&"invert-color",t),b=y()("features-split-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider"),E=y()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",p&&"align-top");return r.a.createElement("section",Object.assign({},f,{className:h}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:b},r.a.createElement(se,{data:{title:"Some of our successes",paragraph:"Here are the winning image / caption pairs from previous months."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Sept 2021"),r.a.createElement("h3",{className:"mt-0 mb-12"},"The infamous Lmapoon Chair Prank"),r.a.createElement("p",{className:"m-0"},'In memorial of our most iconic prank, we minted the picture of our board members with then presidential candidate Donald Trump. A comper captioned the photo "The Harvard Crimson with former President Trump after attending a successful workshop on disseminating accurate and authentic information." Now, this image and caption are soon to be selling as t-shirts worldwide; click on the image for the NFT listing.')),r.a.createElement("div",{className:y()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement("a",{href:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/91274881410907398461206421596567980177047993962108176042799425564064146784257/"},r.a.createElement(j,{src:a(300),alt:"Features split 01",width:528,height:396}))))))))};pe.defaultProps=ue;var ve=pe,fe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],he=Object(P.a)({},U.defaults),be=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,i=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,l=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,fe),u=y()("testimonial section",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",l&&"invert-color",t),p=y()("testimonial-inner section-inner",i&&"has-top-divider",s&&"has-bottom-divider"),v=y()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(se,{data:{title:"Board testimonials",paragraph:"The caption contest has helped our board in numerous ways. Check out what some of them had to say:"},className:"center-content"}),r.a.createElement("div",{className:v},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"My sense of humor used to come from solely iFunny memes and TikToks, but the witty knee-slapping captions I've seen on this web app have helped me finally tell jokes that people can laugh at!")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Thomas Kain"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",null,"Writer"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"The proceeds from our NFT sales have helped the Lampoon purchase enough Adderall to get the entire board through finals. Thanks for your hard work, compers.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ishaan Prasad"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",null,"Business Board"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"01001001 00100000 01101000 01100001 01110110 01100101 00100000 00110001 00110010 00100000 01101011 01101001 01100100 01110011 00100000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01100001 01110011 01110100 01101100 01100101 00100000 01100010 01100001 01110011 01100101 01101101 01100101 01101110 01110100 00001010")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"David Hacker"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"https://www.rapidtables.com/convert/number/binary-to-ascii.html"},"Tech Board")))))))))};be.defaultProps=he;var Ee=be,ge=["className","children","labelHidden","id"],ye=function(e){var t=e.className,a=e.children,n=e.labelHidden,i=e.id,s=Object(c.a)(e,ge),o=y()("form-label",n&&"screen-reader",t);return r.a.createElement("label",Object.assign({},s,{className:o,htmlFor:i}),a)};ye.defaultProps={children:null,labelHidden:!1,id:null};var Ne=ye,Oe=["children","className","status"],we=function(e){var t=e.children,a=e.className,n=e.status,i=Object(c.a)(e,Oe),s=y()("form-hint",n&&"text-color-".concat(n),a);return r.a.createElement("div",Object.assign({},i,{className:s}),t)};we.defaultProps={children:null,status:!1};var je=we,ke=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],De=function(e){var t=e.className,a=e.children,n=e.label,i=e.labelHidden,s=e.type,o=e.name,l=e.status,m=e.disabled,d=e.value,u=e.formGroup,p=e.hasIcon,v=e.size,f=e.placeholder,h=e.rows,b=e.hint,E=Object(c.a)(e,ke),g=y()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),p&&""!==p&&"has-icon-"+p),N=y()("form-input",v&&"form-input-".concat(v),l&&"form-".concat(l),t),O="textarea"===s?"textarea":"input";return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(Ne,{labelHidden:i,id:E.id},n),r.a.createElement("div",{className:g},r.a.createElement(O,Object.assign({},E,{type:"textarea"!==s?s:null,className:N,name:o,disabled:m,value:d,placeholder:f,rows:"textarea"===s?h:null})),a),b&&r.a.createElement(je,{status:l},b))};De.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var xe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Ce=Object(P.a)(Object(P.a)({},H.defaults),{},{split:!1}),Ae=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,i=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,l=e.invertColor,m=e.split,d=Object(c.a)(e,xe),u=y()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",l&&"invert-color",t);y()("cta-inner section-inner",i&&"has-top-divider",s&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}))};Ae.defaultProps=Ce;var Se=Ae,_e=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{className:"illustration-section-01"}),r.a.createElement(me,null),r.a.createElement(ve,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(Ee,{topDivider:!0}),r.a.createElement(Se,{split:!0}))},Re=a(84),Te=a(443),Le=a(167),Fe={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://cf3wiklc6bcvhmnwiqnvj743zu.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-hakcy7xrsjf3bkur72m62d6y2u",aws_cognito_identity_pool_id:"us-east-1:9ae19ea8-ffab-4775-b3bc-cd196d83a3e7",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_OVqEBJWqU",aws_user_pools_web_client_id:"3dhnj5r7dpj5n7006rqdljcj9u",oauth:{},aws_cognito_login_mechanisms:[],aws_cognito_signup_attributes:["PREFERRED_USERNAME","EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:["REQUIRES_LOWERCASE","REQUIRES_NUMBERS","REQUIRES_SYMBOLS","REQUIRES_UPPERCASE"]},aws_cognito_verification_mechanisms:["EMAIL"]},Ie=a(215),Me=a(436),Pe=a(444),qe=a(45),He=a.n(qe),Be=a(64),Ue=a(371),We=a(441),ze=Object(Ue.b)({models:{Caption:{name:"Caption",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},body:{name:"body",isArray:!1,type:"String",isRequired:!1,attributes:[]},User:{name:"User",isArray:!1,type:{model:"User"},isRequired:!1,attributes:[],association:{connectionType:"BELONGS_TO",targetName:"captionUserId"}},likes:{name:"likes",isArray:!1,type:"Int",isRequired:!1,attributes:[]},candidateID:{name:"candidateID",isArray:!1,type:"ID",isRequired:!1,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"Captions",attributes:[{type:"model",properties:{}},{type:"key",properties:{name:"byCandidate",fields:["candidateID"]}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]},User:{name:"User",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},username:{name:"username",isArray:!1,type:"String",isRequired:!1,attributes:[]},role:{name:"role",isArray:!1,type:"String",isRequired:!1,attributes:[]},email:{name:"email",isArray:!1,type:"AWSEmail",isRequired:!1,attributes:[]},profile:{name:"profile",isArray:!1,type:"String",isRequired:!1,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"Users",attributes:[{type:"model",properties:{}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]},Candidate:{name:"Candidate",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},likes:{name:"likes",isArray:!1,type:"Int",isRequired:!1,attributes:[]},postTime:{name:"postTime",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[]},Artist:{name:"Artist",isArray:!1,type:{model:"User"},isRequired:!1,attributes:[],association:{connectionType:"BELONGS_TO",targetName:"candidateArtistId"}},source:{name:"source",isArray:!1,type:"String",isRequired:!1,attributes:[]},Captions:{name:"Captions",isArray:!0,type:{model:"Caption"},isRequired:!1,attributes:[],isArrayNullable:!0,association:{connectionType:"HAS_MANY",associatedWith:"candidateID"}},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"Candidates",attributes:[{type:"model",properties:{}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]}},enums:{},nonModels:{},version:"65c8e2bf255e73a689fab5241ff07896"}),Ve=ze.Caption,Ge=ze.User,Ke=ze.Candidate,Qe=a(437),Je=a(442),Ye=a(438),$e=a(439),Xe=a(440),Ze=a(105),et=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(!1),i=Object(u.a)(a,2),s=i[0],o=i[1],l=Object(n.useState)(""),c=Object(u.a)(l,2),m=c[0],d=c[1],p=Object(n.useRef)(46),v=Object(n.useRef)(null),f=function(){s||(p.current=t.current.scrollHeight,o(!0))},h=function(){d(""),p.current=46,o(!1)},b=function(){var t=Object(Be.a)(He.a.mark((function t(a){var n,r,i,s;return He.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ze.a.currentAuthenticatedUser({bypassCache:!1}).then((function(e){return e.username})).catch((function(e){return console.log(e)}));case 2:return n=t.sent,a.preventDefault(),console.log(n),r=e.myPost,t.next=8,Ue.a.query(Ge,(function(e){return e.username("eq",n)})).then((function(e){return e}));case 8:return i=t.sent,s=i,console.log(s),0===i.length&&(s=Ue.a.save(new Ge({username:n})).then((function(e){return e}))),s=s[0].id,t.next=15,Ue.a.save(new Ve({body:m,likes:0,captionUserId:s,candidateID:r}));case 15:h();case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,ref:t,className:y()("comment-box",{expanded:s,collapsed:!s,modified:m.length>0}),style:{minHeight:s?p.current:46,color:"black"}},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"user"})),r.a.createElement("textarea",{ref:v,onClick:f,onFocus:f,onChange:function(e){d(e.target.value)},className:"comment-field",placeholder:"Make a caption",value:m,name:"comment",id:"comment",color:"black"}),r.a.createElement("div",{className:"actions"},r.a.createElement(K,{type:"button",className:"cancel",tag:"a",color:"dark",wideMobile:!0,onClick:h},"Cancel"),r.a.createElement(K,{type:"submit",disabled:m.length<1,tag:"a",color:"primary",onClick:b,wideMobile:!0},"Submit")))};function tt(e){var t=e.children;return r.a.createElement(Me.a,{maxW:"lg",borderWidth:"1px",borderRadius:"md",overflow:"hidden",m:3},t)}tt.Header=function(e){var t=e.Artist;return r.a.createElement(Me.a,{p:2},r.a.createElement(Qe.a,{as:"b",fontSize:"12px",color:"#9430f1",textAlign:"center"},"Artist: ",t.username))},tt.Main=function(e){var t=e.candidate,a=r.a.createElement(Z.a,{src:t.source});return t.likes>99?r.a.createElement(Me.a,null,r.a.createElement("a",{href:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/91274881410907398461206421596567980177047993962108176042799425564064146784257/"},a)):r.a.createElement(Me.a,null,a)};var at=function(e){var t=e.likes,a=Object(n.useState)(t),i=Object(u.a)(a,2),s=i[0],o=i[1],l=Object(n.useState)("start"),c=Object(u.a)(l,2),m=c[0],d=c[1],p=function(e){s!==t&&s!==t+1||(o(s-1),function(e){Ue.a.save(Ke.copyOf(e,(function(e){e.likes=e.likes-1})))}(e))},v=function(e){s!==t&&s!==t-1||(o(s+1),function(e){Ue.a.save(Ke.copyOf(e,(function(e){e.likes=e.likes+1})))}(e))};return r.a.createElement(Me.a,{ml:3},r.a.createElement(Me.a,null,s,r.a.createElement(Je.a,{colorScheme:"green",icon:r.a.createElement(Ye.a,null),variant:"ghost",onClick:function(){return v(e)}}),r.a.createElement(Je.a,{colorScheme:"red",icon:r.a.createElement($e.a,null),variant:"ghost",onClick:function(){p(e)}}),r.a.createElement(Je.a,{icon:r.a.createElement(Xe.a,null),variant:"ghost",onClick:function(){d("comment"===m?"":"comment")}}),"comment"===m&&r.a.createElement(et,{myPost:e.id})))};tt.Footer=function(e){var t=e.post;return at(t)};a(357);function nt(e){var t=e.children,a=Object(n.useState)([]),i=Object(u.a)(a,2),s=i[0],o=i[1];Object(n.useEffect)((function(){(function(){var e=Object(Be.a)(He.a.mark((function e(){var t;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue.a.query(Ke);case 2:(t=e.sent).sort((function(e,t){return e.likes<t.likes?1:-1})),t.length,o(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=Object(n.useState)(0),c=Object(u.a)(l,2);c[0],c[1];return r.a.createElement(We.a,null,s.map((function(e){return t({post:e})})))}a(83);var rt=a(53),it=function(e){var t=Object(rt.useToken)("colors",["white","gray.800"]),a=Object(u.a)(t,2),r=a[0],i=a[1];return n.createElement(rt.chakra.svg,Object.assign({color:Object(rt.useColorModeValue)("blue.500","blue.300"),"aria-hidden":!0,viewBox:"0 0 123 24",fill:"none",h:"6",flexShrink:0},e),n.createElement("path",{d:"Logo.png",fill:"currentColor"}),n.createElement("path",{d:"Logo.png",fill:Object(rt.useColorModeValue)(i,r)}))};function st(e){var t=e.comment,a=t.likes,i=Object(n.useState)(a),s=Object(u.a)(i,2),o=s[0],l=s[1],c=function(e){o!==a&&o!==a+1||(l(o-1),function(e){Ue.a.save(Ve.copyOf(e,(function(e){e.likes=e.likes-1})))}(e))},m=function(e){o!==a&&o!==a-1||(l(o+1),function(e){Ue.a.save(Ve.copyOf(e,(function(e){e.likes=e.likes+1})))}(e))};return r.a.createElement(Me.a,null,o,r.a.createElement(Je.a,{colorScheme:"green",icon:r.a.createElement(Ye.a,null),onClick:function(){return m(t)},variant:"ghost"}),r.a.createElement(Je.a,{colorScheme:"red",icon:r.a.createElement($e.a,null),onClick:function(){return c(t)},variant:"ghost"}),r.a.createElement(Qe.a,{as:"b",color:"#9430f1"},t.User.username)," ",t.body)}function ot(e){var t=e.postId,a=Object(n.useState)(!1),i=Object(u.a)(a,2),s=(i[0],i[1],Object(n.useState)([])),o=Object(u.a)(s,2),l=o[0],c=o[1];Object(n.useEffect)((function(){(function(){var e=Object(Be.a)(He.a.mark((function e(){var a,n,r;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue.a.query(Ve,(function(e){return e.candidateID===t}));case 2:for(a=e.sent,n=[],r=0;r<a.length;r++)a[r].candidateID===t&&n.push(a[r]);n.sort((function(e,t){return e.likes<t.likes?1:-1})),c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=Object(n.useState)([]),d=Object(u.a)(m,2);d[0],d[1];return r.a.createElement(Me.a,{ml:3},l.map((function(e){return r.a.createElement(st,{comment:e})})))}var lt=function(e){return r.a.createElement(Ie.a,null,r.a.createElement(nt,null,(function(e){var t=e.post;return r.a.createElement(tt,{key:t.id},r.a.createElement(tt.Header,{Artist:t.Artist}),r.a.createElement(tt.Main,{candidate:t}),r.a.createElement(tt.Footer,{post:t}),r.a.createElement(ot,{postId:t.id}))})),r.a.createElement(Me.a,{as:"footer",role:"contentinfo",mx:"auto",maxW:"7xl",py:"12",px:{base:"4",md:"8"}},r.a.createElement(Pe.a,null,r.a.createElement(Pe.a,{direction:"row",spacing:"4",align:"center",justify:"space-between"},r.a.createElement(it,null)))))};a(229),a(70),a(230);Re.default.configure(Fe);var ct=function(e,t){switch(t.type){case"authStateChange":return{authStage:t.authStage,user:t.user};default:throw Error("action ".concat(t.type," not found."))}},mt={};var dt=function(e){e.Component,e.pageProps;var t=r.a.useReducer(ct,mt),a=Object(u.a)(t,2),n=a[0],i=a[1];return r.a.useEffect((function(){Object(Le.b)((function(e,t){i({type:"authStateChange",authStage:e,user:t})}))}),[]),console.log(n.authStage),n.authStage===Le.a.SignedIn&&n.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(lt,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,null,r.a.createElement(Te.b,{slot:"sign-up",formFields:[{type:"username"},{type:"preferred_username",label:"We like to confirm usernames instead of passwords",placeholder:"Custom preferred username placeholder",inputProps:{required:!0,autocomplete:"username"}},{type:"email"},{type:"password"}]})))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/rnori-harv/nftmash",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ut=function(){var e=Object(n.useRef)(),t=Object(o.f)();return Object(n.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),r.a.createElement(b,{ref:e,children:function(){return r.a.createElement(o.c,null,r.a.createElement(d,{exact:!0,path:"/",component:_e,layout:M}),r.a.createElement(d,{exact:!0,path:"/login",component:dt,layout:M}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(369);var pt=Object(l.a)();s.a.render(r.a.createElement(o.b,{history:pt},r.a.createElement(ut,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[287,2,3]]]);
//# sourceMappingURL=main.f000eb33.chunk.js.map