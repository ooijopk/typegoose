"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[1630],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(o),f=r,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2608:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],c={id:"motivation",title:"Motivation"},s=void 0,p={unversionedId:"guides/motivation",id:"guides/motivation",isDocsHomePage:!1,title:"Motivation",description:"A common problem when using Mongoose with TypeScript is that you have to define both the Mongoose model and the TypeScript interface. If the model changes, you also have to keep the TypeScript interface file in sync or the TypeScript interface would not represent the real data structure of the model.",source:"@site/../docs/guides/motivation.md",sourceDirName:"guides",slug:"/guides/motivation",permalink:"/typegoose/docs/guides/motivation",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/motivation.md",tags:[],version:"current",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"guides",previous:{title:'Use Without "emitDecoratorMetadata"',permalink:"/typegoose/docs/guides/use-without-emitDecoratorMetadata"},next:{title:"Default Classes",permalink:"/typegoose/docs/guides/default-classes"}},u=[],l={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A common problem when using Mongoose with TypeScript is that you have to define both the Mongoose model and the TypeScript interface. If the model changes, you also have to keep the TypeScript interface file in sync or the TypeScript interface would not represent the real data structure of the model."),(0,i.kt)("p",null,"Typegoose aims to solve this problem by only defining ES6 Classes, which need to be enhanced with special Typegoose decorators."),(0,i.kt)("p",null,"Under the hood it uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html#metadata"},"Reflection")," & ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rbuckton/reflect-metadata"},"reflect-metadata")," API to retrieve the types of the properties, so redundancy can be significantly reduced."))}d.isMDXComponent=!0}}]);