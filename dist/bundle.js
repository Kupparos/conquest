(()=>{"use strict";var n,r,e,t,i,o,a,p,l,c,s,f,d,g,x={902:(n,r,e)=>{e.d(r,{Z:()=>p});var t=e(81),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([n.id,'body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: "Roboto", sans-serif;\r\n  color: rgba(27, 26, 23, 1);\r\n  border-color: rgba(253, 253, 251, 1);\r\n}\r\n\r\n.container {\r\n  margin: 0 7vw;\r\n}\r\n\r\nh1 {\r\n  font-family: "Playfair Display", serif;\r\n  font-size: 32px;\r\n  font-weight: 400;\r\n}\r\n\r\n/*------ HEADER -------*/\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 31px 0;\r\n  color: rgba(85, 82, 72, 1);\r\n}\r\n\r\n.menu nav a {\r\n  text-decoration: none;\r\n  color: rgba(85, 82, 72, 1);\r\n}\r\n\r\n.logo {\r\n  font-family: "Playfair Display", serif;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  font-size: 12px;\r\n}\r\n\r\n.menu nav {\r\n  display: flex;\r\n  gap: 65px;\r\n  font-size: 14px;\r\n}\r\n\r\n.icons {\r\n  display: flex;\r\n  gap: 23px;\r\n  align-items: center;\r\n}\r\n\r\n/*------ MAIN -------*/\r\n\r\n.main {\r\n  display: flex;\r\n  gap: 3.6vw;\r\n  margin-bottom: 74px;\r\n}\r\n\r\n.description {\r\n  margin: auto 6.6vw;\r\n  z-index: 1;\r\n}\r\n\r\n.description h1 {\r\n  font-size: 45px;\r\n  margin: 15px 0;\r\n}\r\n\r\n.description h1::before {\r\n  content: "";\r\n  display: block;\r\n  background-color: rgba(139, 131, 113, 1);\r\n  width: 50px;\r\n  height: 1px;\r\n  position: relative;\r\n  top: 35px;\r\n  left: -60px;\r\n}\r\n\r\n.description h2 {\r\n  font-family: "Playfair Display", serif;\r\n  font-size: 30px;\r\n  font-weight: 400;\r\n  margin: 0;\r\n}\r\n\r\n.description p {\r\n  font-weight: 100;\r\n  font-size: 14px;\r\n  margin: 35px 0;\r\n  line-height: 1.53;\r\n  color: rgba(27, 26, 23, 0.82);\r\n}\r\n\r\n.description button {\r\n  background-color: rgba(68, 66, 64, 1);\r\n  color: rgba(255, 255, 255, 1);\r\n  width: 205px;\r\n  height: 64px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border: none;\r\n}\r\n\r\n.picture {\r\n  position: relative;\r\n  width: 600px;\r\n}\r\n\r\n.figure {\r\n  position: absolute;\r\n  z-index: -5;\r\n  top: 5px;\r\n  left: -170px;\r\n}\r\n\r\n.picture .price {\r\n  position: absolute;\r\n  top: 130px;\r\n  left: -55px;\r\n  font-family: "Prata", serif;\r\n  font-size: 16px;\r\n}\r\n\r\n.size {\r\n  position: absolute;\r\n  top: 680px;\r\n  left: 480px;\r\n  font-family: "Prata", serif;\r\n  font-size: 16px;\r\n}\r\n\r\n.picture .price::after {\r\n  content: "";\r\n  display: block;\r\n  background-color: rgba(139, 131, 113, 1);\r\n  width: 50px;\r\n  height: 1px;\r\n  position: relative;\r\n  top: -13px;\r\n  left: 80px;\r\n}\r\n\r\n.size::before {\r\n  content: "";\r\n  display: block;\r\n  background-color: rgba(139, 131, 113, 1);\r\n  width: 50px;\r\n  height: 1px;\r\n  position: relative;\r\n  top: 10px;\r\n  left: -60px;\r\n}\r\n\r\n/*------ POPULAR -------*/\r\n\r\n.popular {\r\n  margin-bottom: 74px;\r\n}\r\n\r\n.popular h1 {\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.all {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: rgba(68, 66, 64, 1);\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.all p::after {\r\n  content: "";\r\n  display: block;\r\n  background-color: rgba(196, 192, 182, 1);\r\n  width: 104px;\r\n  height: 1px;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n.watches {\r\n  display: grid;\r\n  gap: 2.5vw;\r\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n}\r\n\r\n.watch {\r\n  padding: 1.5vw;\r\n}\r\n\r\n.watch h2 {\r\n  font-family: "Playfair Display", serif;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 1.7;\r\n}\r\n\r\n.watch .price {\r\n  font-family: "Prata", serif;\r\n  font-size: 12px;\r\n}\r\n\r\n.watch .watch_img {\r\n  border: double 1px transparent;\r\n  border-radius: 50%;\r\n  background-image: linear-gradient(white, white),\r\n    radial-gradient(circle at left, transparent, rgba(226, 208, 196, 1));\r\n  background-origin: border-box;\r\n  background-clip: content-box, border-box;\r\n  display: inline-block;\r\n}\r\n\r\n.more {\r\n  padding-left: 60px;\r\n  margin: 0;\r\n}\r\n\r\n.more a {\r\n  text-decoration: none;\r\n  color: rgba(27, 26, 23, 1);\r\n}\r\n\r\n.more::before {\r\n  content: "";\r\n  display: block;\r\n  background-color: rgba(139, 131, 113, 1);\r\n  width: 30px;\r\n  height: 1px;\r\n  position: relative;\r\n  top: 10px;\r\n  left: -45px;\r\n}\r\n\r\n/* ------- BANNER --------*/\r\n\r\n.banner {\r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(247, 245, 239, 1) 35%,\r\n    rgba(253, 253, 251, 1) 35%\r\n  );\r\n  min-height: 519px;\r\n  margin-bottom: 74px;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n\r\n.small_circle {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: calc(100% - 215px);\r\n}\r\n\r\n.big_circle {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: calc(100% - 222px);\r\n}\r\n\r\n.pagination {\r\n  z-index: 1;\r\n}\r\n\r\n.pagination_item_block {\r\n  display: flex;\r\n  gap: 5vw;\r\n}\r\n\r\n.banner_info p {\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  margin: 35px 0;\r\n}\r\n\r\n.banner_info button {\r\n  background-color: rgba(212, 176, 152, 1);\r\n  color: rgba(255, 255, 255, 1);\r\n  width: 205px;\r\n  height: 64px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border: none;\r\n}\r\n\r\n.pagination_item_pagination {\r\n  margin: 20px;\r\n  font-family: "Prata", serif;\r\n  font-size: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n/* ------ NEWS ------- */\r\n\r\n.news {\r\n  margin-bottom: 74px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.news_info {\r\n  padding: 0 10px 20px 0;\r\n}\r\n\r\n.news_info p {\r\n  margin-bottom: 120px;\r\n  line-height: 1.7;\r\n}\r\n\r\n.news_info_icons {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 18px;\r\n}\r\n\r\n.news_photo {\r\n  display: grid;\r\n  grid-template-areas:\r\n    "photo1 photo3"\r\n    "photo2 photo3";\r\n  gap: 10px;\r\n}\r\n\r\n.photo1 {\r\n  grid-area: photo1;\r\n}\r\n.photo2 {\r\n  grid-area: photo2;\r\n}\r\n.photo3 {\r\n  grid-area: photo3;\r\n}\r\n\r\n/* ------ FOOTER ------- */\r\n\r\nfooter {\r\n  background-color: rgba(68, 66, 64, 1);\r\n  min-height: 275px;\r\n  margin: auto 0;\r\n  display: flex;\r\n}\r\n\r\n.footer_container {\r\n  display: grid;\r\n  gap: 8vw;\r\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n  margin: auto;\r\n  width: calc(100% - 97px * 2);\r\n}\r\n\r\n.footer_logo {\r\n  color: rgba(255, 255, 255, 1);\r\n  font-family: "Playfair Display", serif;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.14em;\r\n  margin: 5px 0 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.footer_container h2 {\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  color: rgba(255, 255, 255, 1);\r\n  letter-spacing: 0.07em;\r\n  margin-bottom: 22px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.footer_container a {\r\n  text-decoration: none;\r\n  color: rgba(255, 255, 255, 0.75);\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contacts,\r\n.about,\r\n.for_buyers,\r\n.payment_delivery {\r\n  display: flex;\r\n  flex-direction: column;\r\n  vertical-align: top;\r\n  padding-left: 3vw;\r\n}\r\n\r\n/* ------- MEDIA -------- */\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .picture {\r\n    scale: 0.8;\r\n  }\r\n\r\n  .size {\r\n    top: 680px;\r\n    left: -75px;\r\n  }\r\n\r\n  .size::after {\r\n    content: "";\r\n    display: block;\r\n    background-color: rgba(139, 131, 113, 1);\r\n    width: 50px;\r\n    height: 1px;\r\n    position: relative;\r\n    top: -10px;\r\n    left: 135px;\r\n  }\r\n\r\n  .size::before {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 870px) {\r\n  .menu nav {\r\n    gap: 3vw;\r\n  }\r\n\r\n  .icons {\r\n    gap: 1vw;\r\n  }\r\n\r\n  .main {\r\n    gap: 0;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0;\r\n  }\r\n\r\n  .picture {\r\n    width: 400px;\r\n  }\r\n\r\n  .description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .watch {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .big_circle {\r\n    top: calc(100% - 507px);\r\n  }\r\n\r\n  .pagination_item_block {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 10px 0;\r\n  }\r\n\r\n  .banner_info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .banner_info h1 {\r\n    margin: 0;\r\n  }\r\n\r\n  .pagination_item_block img {\r\n    width: 415px;\r\n  }\r\n\r\n  .news {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .news_info p {\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  .news_photo {\r\n    scale: 0.78;\r\n  }\r\n\r\n  .footer_container {\r\n    gap: 3vw;\r\n    padding: 10px 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  header {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .icons {\r\n    gap: 4vw;\r\n  }\r\n\r\n  .description h1 {\r\n    text-align: center;\r\n  }\r\n\r\n  .description h1::before {\r\n    display: none;\r\n  }\r\n\r\n  .picture {\r\n    scale: 1;\r\n    margin: 20px 0;\r\n    width: 270px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .main_watch,\r\n  .figure {\r\n    width: 200px;\r\n  }\r\n\r\n  .figure {\r\n    top: -4px;\r\n    left: 0px;\r\n  }\r\n\r\n  .picture .price,\r\n  .size {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .picture .price {\r\n    top: 20px;\r\n    left: 0px;\r\n  }\r\n\r\n  .picture .price img {\r\n    height: 10px;\r\n  }\r\n\r\n  .size {\r\n    top: 230px;\r\n    left: 0px;\r\n  }\r\n\r\n  .picture .price::after {\r\n    width: 100px;\r\n    top: 5px;\r\n    left: 0px;\r\n  }\r\n\r\n  .size::after {\r\n    width: 100px;\r\n    top: 5px;\r\n    left: 0px;\r\n  }\r\n\r\n  .watches {\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  }\r\n\r\n  .watch .watch_img {\r\n    scale: 0.6;\r\n  }\r\n\r\n  .pagination_item_block img {\r\n    width: 300px;\r\n  }\r\n\r\n  .banner {\r\n    margin: 0;\r\n  }\r\n\r\n  .banner_info {\r\n    width: 270px;\r\n  }\r\n\r\n  .banner_info p br {\r\n    display: none;\r\n  }\r\n\r\n  .news_photo {\r\n    scale: 1;\r\n    grid-template-areas:\r\n      "photo1"\r\n      "photo2"\r\n      "photo3";\r\n  }\r\n\r\n  .photo1,\r\n  .photo2,\r\n  .photo3 {\r\n    width: 250px;\r\n  }\r\n}\r\n',""]);const p=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var p=0;p<this.length;p++){var l=this[p][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&a[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),r.push(s))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var o={},a=[],p=0;p<n.length;p++){var l=n[p],c=t.base?l[0]+t.base:l[0],s=o[c]||0,f="".concat(c," ").concat(s);o[c]=s+1;var d=e(f),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)r[d].references++,r[d].updater(g);else{var x=i(g,t);t.byIndex=p,r.splice(p,0,{identifier:f,updater:x,references:1})}a.push(f)}return a}function i(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var p=e(o[a]);r[p].references--}for(var l=t(n,i),c=0;c<o.length;c++){var s=e(o[c]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}o=l}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},u={};function m(n){var r=u[n];if(void 0!==r)return r.exports;var e=u[n]={id:n,exports:{}};return x[n](e,e.exports,m),e.exports}m.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return m.d(r,{a:r}),r},m.d=(n,r)=>{for(var e in r)m.o(r,e)&&!m.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},m.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),m.nc=void 0,n=m(379),r=m.n(n),e=m(795),t=m.n(e),i=m(569),o=m.n(i),a=m(565),p=m.n(a),l=m(216),c=m.n(l),s=m(589),f=m.n(s),d=m(902),(g={}).styleTagTransform=f(),g.setAttributes=p(),g.insert=o().bind(null,"head"),g.domAPI=t(),g.insertStyleElement=c(),r()(d.Z,g),d.Z&&d.Z.locals&&d.Z.locals})();