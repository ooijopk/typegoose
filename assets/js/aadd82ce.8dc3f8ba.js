(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[1630],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(o),d=n,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},320:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var r=o(2122),n=o(9756),i=(o(7294),o(3905)),a=["components"],s={id:"motivation",title:"Motivation"},c={unversionedId:"guides/motivation",id:"guides/motivation",isDocsHomePage:!1,title:"Motivation",description:"A common problem when using Mongoose with TypeScript is that you have to define both the Mongoose model and the TypeScript interface. If the model changes, you also have to keep the TypeScript interface file in sync or the TypeScript interface would not represent the real data structure of the model.",source:"@site/../docs/guides/motivation.md",sourceDirName:"guides",slug:"/guides/motivation",permalink:"/typegoose/docs/guides/motivation",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/motivation.md",version:"current",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"guides",previous:{title:"All Decorators",permalink:"/typegoose/docs/guides/all-decorators"},next:{title:"Default Classes",permalink:"/typegoose/docs/guides/default-classes"}},p=[],u={toc:p};function l(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A common problem when using Mongoose with TypeScript is that you have to define both the Mongoose model and the TypeScript interface. If the model changes, you also have to keep the TypeScript interface file in sync or the TypeScript interface would not represent the real data structure of the model."),(0,i.kt)("p",null,"Typegoose aims to solve this problem by defining only an ES6 Class, which needs to be enhanced with special Typegoose decorators."),(0,i.kt)("p",null,"Under the hood it uses the Reflect & ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rbuckton/reflect-metadata"},"reflect-metadata")," API to retrieve the types of the properties, so redundancy can be significantly reduced."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Official Typescript types exist since ",(0,i.kt)("inlineCode",{parentName:"p"},"mongoose@5.10.19"),", but they are still not supporting everything that the old types have, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/issues/432"},"read more on progress here")))}l.isMDXComponent=!0}}]);