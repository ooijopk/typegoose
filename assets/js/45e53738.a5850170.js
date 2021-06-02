(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[2963],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1458:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i=["components"],s={id:"all-decorators",title:"All Decorators"},l={unversionedId:"guides/all-decorators",id:"guides/all-decorators",isDocsHomePage:!1,title:"All Decorators",description:"This Page shows all the decorators that can be used for / in a class.",source:"@site/../docs/guides/all-decorators.md",sourceDirName:"guides",slug:"/guides/all-decorators",permalink:"/typegoose/docs/guides/all-decorators",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/all-decorators.md",version:"current",frontMatter:{id:"all-decorators",title:"All Decorators"},sidebar:"guides",previous:{title:"Error & Warning Details",permalink:"/typegoose/docs/guides/error-warnings-details"},next:{title:"Motivation",permalink:"/typegoose/docs/guides/motivation"}},p=[],c={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This Page shows all the decorators that can be used for / in a class."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Property decorators:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/prop"},(0,a.kt)("inlineCode",{parentName:"a"},"@prop"))," is the most important decorator, because it defines values(","|","keys) that are then in the model & document."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/array-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"@arrayProp"))," it is the same as ",(0,a.kt)("inlineCode",{parentName:"li"},"@prop"),", just for arrays ",(0,a.kt)("strong",{parentName:"li"},"[Deprecated]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/map-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"@mapProp"))," is for a Map<string, T> ",(0,a.kt)("strong",{parentName:"li"},"[Deprecated]")))),(0,a.kt)("li",{parentName:"ul"},"All Class decorators:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/model-options"},(0,a.kt)("inlineCode",{parentName:"a"},"@modelOptions")),", used for Schema Options, an existing Mongoose and an existing Connection"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/indexes"},(0,a.kt)("inlineCode",{parentName:"a"},"@index"))," is for indexes, that are ",(0,a.kt)("strong",{parentName:"li"},"NOT")," defined in the prop (mainly for compound indexes)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/plugins"},(0,a.kt)("inlineCode",{parentName:"a"},"@plugin"))," is for adding plugins. Please note that plugins cannot modify the types of prop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/query-method"},(0,a.kt)("inlineCode",{parentName:"a"},"@queryMethod"))," is for adding custom query Methods."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/typegoose/docs/api/decorators/hooks"},"Hooks"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@pre")," is for Pre-Hooks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@post")," is for Post-Hooks.")))))))}u.isMDXComponent=!0}}]);