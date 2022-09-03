/*! For license information please see 199.cfc1e654.chunk.js.LICENSE.txt */
(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[199],{1885:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var n=s(885),i=s(2791),r=s(6030),c=s(1694),l=s.n(c),a=s(9295),u=s(5311),o=(s(5013),s(184)),d=function(e){var t=e.filters,s=e.data,c=e.action,d=(0,r.I0)(),p=(0,i.useState)([]),f=(0,n.Z)(p,2),h=f[0],m=f[1],_=(0,i.useState)(!1),v=(0,n.Z)(_,2),x=v[0],j=v[1],A=(0,i.useState)(!1),N=(0,n.Z)(A,2),g=N[0],b=N[1],k=(0,r.v9)((function(e){return e.filters})).filtersVisibility,y=function(){F(),d((0,u.Nh)(null)),d((0,u.vW)(!1)),m([]),b(!0),d(c(s))};(0,i.useEffect)((function(){C(h,s)}),[s]);var C=function(e,t){if(d((0,u.Nh)(h.length)),d((0,u.vW)(!1)),0===e.length)d(c(t));else{var s=t.filter((function(t){for(var s=t.filters,n=[],i=0;i<e.length;i++)s.includes(e[i])?n.push(!0):n.push(!1);return!n.includes(!1)}));d(c(s))}},F=function(){document.querySelector("body").style.overflowY="",document.querySelector("body").style.marginRight=""},S=function(){F(),d((0,u.vW)(!1))};x&&(F(),setTimeout((function(){j(!1)}),5e3)),g&&setTimeout((function(){b(!1)}),5e3),k&&function(){var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e),document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;e.remove(),document.querySelector("body").style.marginRight="".concat(t,"px"),document.querySelector("body").style.overflowY="hidden"}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{in:k,timeout:300,classNames:"fadeBackground",children:(0,o.jsx)("div",{onClick:S,className:"popupFilters__background"})}),(0,o.jsx)(a.Z,{in:g,timeout:500,classNames:"filtersChange",children:(0,o.jsx)("div",{className:"filtersReset",children:(0,o.jsx)("span",{children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u044b"})})}),(0,o.jsx)(a.Z,{in:x,timeout:500,classNames:"filtersChange",children:(0,o.jsx)("div",{className:"filtersApplied",children:(0,o.jsx)("span",{children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b"})})}),t&&0!==t.length?(0,o.jsx)(a.Z,{in:k,timeout:500,classNames:"visibility",children:(0,o.jsx)("div",{className:"popupFilters",children:(0,o.jsxs)("div",{className:"popupFilters__wrapper",children:[(0,o.jsx)("h5",{className:"popupFilters__title",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"}),(0,o.jsx)("div",{onClick:S,className:"popupFilters__close"}),t.map((function(e){var t=e.title,s=e.filters;return(0,o.jsxs)("div",{className:"popupFilters__block",children:[(0,o.jsx)("h4",{className:"popupFilters__subTitle",children:t}),(0,o.jsx)("div",{className:"popupFilters__filters",children:s.map((function(e){var t=l()("popupFilters__buttons",{popupFilters__active:h.includes(e)});return(0,o.jsx)("button",{onClick:function(){return function(e){h.includes(e)?m((function(t){return t.filter((function(t){return t!==e}))})):m((function(t){return t.concat(e)}))}(e)},className:t,children:e},e)}))})]},t)})),(0,o.jsxs)("div",{className:"popupFilters__activation",children:[(0,o.jsx)("button",{disabled:!h.length,onClick:y,className:"popupFilters__reset",children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),(0,o.jsx)("button",{disabled:!h.length,onClick:function(){j(!0),C(h,s)},className:"popupFilters__apply",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})})}):(0,o.jsx)(a.Z,{in:k,timeout:500,classNames:"visibility",children:(0,o.jsx)("div",{className:"popupFilters",children:(0,o.jsx)("h4",{className:"popupFilters__subTitle popupFilters__noFilters",children:"\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u0435\u0449\u0435 \u043d\u0435\u0442"})})})]})}},3430:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var n=s(6030),i=s(2791),r=s(9295),c=s(5660),l=s(1413),a=s(885),u=s(1694),o=s.n(u),d=s(2103),p=(s(5013),s(184)),f=function(e){var t=e.img,s=e.title,r=e.liters,c=e.price,u=e.product,f=(0,i.useState)("0.5 \u043b"),h=(0,a.Z)(f,2),m=h[0],_=h[1],v=(0,n.I0)(),x=(0,i.useState)(0),j=(0,a.Z)(x,2),A=j[0],N=j[1],g=(0,i.useState)(r[0].price),b=(0,a.Z)(g,2),k=b[0],y=b[1],C=(0,i.useState)(r[0].liter),F=(0,a.Z)(C,2),S=F[0],Z=F[1],w=(0,n.v9)((function(e){return e.popupBasket})).products;return(0,p.jsx)(p.Fragment,{children:function(){switch(Array.isArray(r)){case!0:return(0,p.jsxs)("div",{className:"drinks__item",children:[(0,p.jsx)("div",{className:"drinks__img",children:(0,p.jsx)("img",{src:t,alt:s})}),(0,p.jsxs)("div",{className:"drinks__info",children:[(0,p.jsx)("h5",{className:"title__products",children:s}),(0,p.jsxs)("div",{className:"drinks__liters",children:[(0,p.jsx)("div",{className:"drinks__active",style:{left:"".concat(A,"px")}}),r.map((function(e){var t=e.liter,s=e.price,n=o()("drinks__liters-item",{"drinks__liters-active":m===t});return(0,p.jsx)("div",{onClick:function(e){Z(t),y(s),_(t),N(e.target.offsetLeft)},className:n,children:t},t)}))]}),(0,p.jsxs)("div",{className:"drinks__bottom",children:[w.find((function(e){return e.id===s}))?(0,p.jsx)("button",{onClick:function(){return v((0,d.gR)(!0))},className:"button button__products button__addedBasket",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"}):(0,p.jsx)("button",{onClick:function(){return v((0,d.gK)([(0,l.Z)((0,l.Z)({},u),{},{liters:S,quantity:1,price:k})]))},className:"button button__products",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),(0,p.jsxs)("span",{className:"drinks__price",children:[k," \u20bd"]},Math.random())]})]})]});case!1:return(0,p.jsxs)("div",{className:"drinks__item",children:[(0,p.jsx)("div",{className:"drinks__img",children:(0,p.jsx)("img",{src:t,alt:s})}),(0,p.jsxs)("div",{className:"drinks__info",children:[(0,p.jsx)("h5",{className:"title__products",children:s}),(0,p.jsx)("div",{className:"drinks__liters drinks__liters-noChange",children:r}),(0,p.jsxs)("div",{className:"drinks__bottom",children:[w.find((function(e){return e.id===s}))?(0,p.jsx)("button",{onClick:function(){return v((0,d.gR)(!0))},className:"button button__products button__addedBasket",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"}):(0,p.jsx)("button",{onClick:function(){return v((0,d.gK)([(0,l.Z)((0,l.Z)({},u),{},{quantity:1})]))},className:"button button__products",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),(0,p.jsxs)("span",{className:"drinks__price",children:[c," \u20bd"]})]})]})]})}}()})},h=s(9650),m=s(1885),_=s(5912),v=s(5311),x=s(4452),j=s(6805),A=(0,i.memo)((function(){var e=(0,n.v9)((function(e){return e.drinks})).drinks,t=(0,n.v9)((function(e){return e.search})).resultDrinks,s=(0,n.v9)((function(e){return e.filters})),l=s.filters,a=s.resultFilteringDrinks,u=(0,n.I0)();(0,i.useEffect)((function(){u((0,x.q)(j.cH)),o(d)}),[]);var o=function(e){window.scrollBy(0,e.current.getBoundingClientRect().top-20)},d=(0,i.useRef)(),A=(0,i.useMemo)((function(){return 0===(e=a).length?(0,p.jsx)(r.Z,{timeout:300,classNames:"fade",children:(0,p.jsx)("h5",{className:"notFound",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0442\u043e\u0432\u0430\u0440 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})},"notFound"):e.map((function(e,t,s){var n=e.id,i=e.img,c=e.title,l=e.liters,a=e.price;return(0,p.jsx)(r.Z,{timeout:300,classNames:"fade",children:(0,p.jsx)(f,{img:i,title:c,liters:l,price:a,product:s[t]},n)},n)}));var e}),[a]);return(0,p.jsxs)("div",{ref:d,className:"drinks container",children:[(0,p.jsx)(m.Z,{filters:function(){var e=l.filter((function(e){return Object.keys(e).includes("drinks")}));return e.map((function(e){return e.drinks}))[0]}(),data:t,action:v.Mq}),(0,p.jsx)(h.Z,{data:e,search:_.ki,filters:!0}),(0,p.jsx)("div",{className:"drinks__wrapper",children:(0,p.jsx)(c.Z,{component:null,children:A})})]})})),N=A},9650:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(885),i=s(2791),r=s(6030),c=s(5311),l=(s(1148),s(8381)),a=s(184),u=function(e){var t=e.data,s=e.search,u=e.filters,o=(0,i.useState)(),d=(0,n.Z)(o,2),p=d[0],f=d[1],h=(0,r.I0)(),m=(0,r.v9)((function(e){return e.filters})).countFilters;(0,i.useEffect)((function(){_(p)}),[t]);var _=function(e){if(e){h(s(t.filter((function(t){return new RegExp("".concat(e),"i").test(t.title)}))))}else h(s(t))};return(0,a.jsx)("div",{className:"search",children:(0,a.jsxs)("div",{className:"search__wrapper",children:[(0,a.jsxs)("div",{className:"search__input-wrapper",children:[(0,a.jsx)("input",{name:"search",onChange:function(e){f(e.target.value),_(e.target.value)},value:null!==p&&void 0!==p?p:"",type:"text",className:"search__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),p?(0,a.jsx)("div",{onClick:function(){f(""),_("")},className:"search__reset"}):null]}),u?(0,a.jsxs)("button",{className:"button__filters",onClick:function(){h((0,c.vW)(!0))},children:[(0,a.jsx)("div",{className:"button__filters-img",children:(0,a.jsx)("img",{src:l,alt:"filters"})}),(0,a.jsx)("span",{children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"}),m?(0,a.jsx)("div",{className:"button__filters-count",children:m}):null]}):null]})})}},1694:function(e,t){var s;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var c=i.apply(null,s);c&&e.push(c)}}else if("object"===r)if(s.toString===Object.prototype.toString)for(var l in s)n.call(s,l)&&s[l]&&e.push(l);else e.push(s.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(t,[]))||(e.exports=s)}()},8381:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgB1ZJdDcMwDISdagAMoRDGYGOwDcIQpEWwDUHDoBAGYRuDQiiEMOjOUipFrvqTvNXSyYrj+1LVNkPFHyLqKS9KAqClzBBvgcyUHyyADqQnJQY8lXjHwyMFIr3imRChZoPZDTXb8WzU5RXpAtXGea/u5F+1cDjT+N/SC6WMVrKqvaGj7i90AS/3SHfIRmUbvqpbBUSQeLwcarQJkBI7AITxza77YcUs63qCXjmAM5bmi6W5LfTQH9OpRJSqLQ8UAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=199.cfc1e654.chunk.js.map