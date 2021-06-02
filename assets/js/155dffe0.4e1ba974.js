(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[1078],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4365:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),i=["components"],a={id:"assertions",title:"Assertions"},c={unversionedId:"api/functions/assertions",id:"api/functions/assertions",isDocsHomePage:!1,title:"Assertions",description:"assertion",source:"@site/../docs/api/functions/assertions.md",sourceDirName:"api/functions",slug:"/api/functions/assertions",permalink:"/typegoose/docs/api/functions/assertions",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/assertions.md",version:"current",frontMatter:{id:"assertions",title:"Assertions"}},u=[{value:"assertion",id:"assertion",children:[]},{value:"assertionIsClass",id:"assertionisclass",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"assertion"},"assertion"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assertion(cond, error?)")," is a custom assertion function that utilizes ",(0,s.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#assertion-functions"},(0,s.kt)("inlineCode",{parentName:"a"},"asserts")," from typescript 3.7"),(0,s.kt)("br",{parentName:"p"}),"\n","-> this function is mainly build for internal use, but can also be used outside of typegoose"),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'let someMultiValue: string | number | boolean = \'Hello\';\n// "someMultiValue"\'s type is currently "string | number | boolean", even with a string defined\nassertion(typeof someMultiValue === \'string\');\n// now the type of "someMultiValue" is just "string" and an error is thrown if it is not a string\n')),(0,s.kt)("p",null,"Note: the function is named ",(0,s.kt)("inlineCode",{parentName:"p"},"assertion")," and not ",(0,s.kt)("inlineCode",{parentName:"p"},"assert"),", so do not confuse it and the types of testing frameworks and from NodeJS itself."),(0,s.kt)("h2",{id:"assertionisclass"},"assertionIsClass"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assertionIsClass(class)")," is like ",(0,s.kt)("a",{parentName:"p",href:"#assertion"},"assertion"),", but with a condition and error pre-defined.",(0,s.kt)("br",{parentName:"p"}),"\n","-> this function is mainly built for internal use, but can also be used outside of typegoose"))}p.isMDXComponent=!0}}]);