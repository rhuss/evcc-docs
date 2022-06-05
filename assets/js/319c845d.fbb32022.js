"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[7562],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},34855:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={sidebar_position:9},l="interval",u={unversionedId:"reference/configuration/interval",id:"reference/configuration/interval",title:"interval",description:"Definiert das zeitliche Interval, in welchem neue Werte von allen Messger\xe4ten gelesen werden und die Ladestr\xf6me der Wallboxen neu geregelt wird.",source:"@site/docs/reference/configuration/interval.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/interval",permalink:"/docs/reference/configuration/interval",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/interval.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"network",permalink:"/docs/reference/configuration/uri"},next:{title:"log, levels",permalink:"/docs/reference/configuration/log"}},s={},f=[],p={toc:f};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interval"},(0,i.kt)("inlineCode",{parentName:"h1"},"interval")),(0,i.kt)("p",null,"Definiert das zeitliche Interval, in welchem neue Werte von allen Messger\xe4ten gelesen werden und die Ladestr\xf6me der Wallboxen neu geregelt wird."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Ein Zahlenwert gefolgt von der Zeiteinheit"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"interval: 10s # alle 10 Sekunden\n")))}d.isMDXComponent=!0}}]);