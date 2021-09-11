"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[5296],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6268:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),i=["components"],s={id:"non-nested-discriminators",title:"Non-Nested Discriminators"},l=void 0,d={unversionedId:"guides/advanced/non-nested-discriminators",id:"guides/advanced/non-nested-discriminators",isDocsHomePage:!1,title:"Non-Nested Discriminators",description:"Use-Case",source:"@site/../docs/guides/advanced/non-nested-discriminators.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/non-nested-discriminators",permalink:"/typegoose/docs/guides/advanced/non-nested-discriminators",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/non-nested-discriminators.md",tags:[],version:"current",frontMatter:{id:"non-nested-discriminators",title:"Non-Nested Discriminators"},sidebar:"guides",previous:{title:"Using ObjectId Type",permalink:"/typegoose/docs/guides/advanced/using-objectid-type"},next:{title:"Migrate to 8.0.0",permalink:"/typegoose/docs/guides/migrate-8"}},c=[{value:"Use-Case",id:"use-case",children:[]},{value:"First thought",id:"first-thought",children:[]},{value:"Fixing it with Discriminators",id:"fixing-it-with-discriminators",children:[]},{value:"Query with Shared Parent Model",id:"query-with-shared-parent-model",children:[]},{value:"Extras",id:"extras",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"use-case"},"Use-Case"),(0,r.kt)("p",null,"If you dont know an use case for this, consider the following:",(0,r.kt)("br",{parentName:"p"}),"\n","An Veterinarian that wants to store information about the current patients in their care, how would it be done in mongoose / typegoose?"),(0,r.kt)("h2",{id:"first-thought"},"First thought"),(0,r.kt)("p",null,"At first you might think to do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// to have an shared collection\n@modelOptions({ schemaOptions: { collection: "animal" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\nconst DogModel = getModelForClass(Dog);\nconst CatModel = getModelForClass(Cat);\n')),(0,r.kt)("p",null,"and then in some querying code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\nconst found = await ParrotModel.findOne({}).exec();\n\n// this will find should log one of the 2 created above\nconsole.log("found", found);\n')),(0,r.kt)("p",null,"which is obviously not what is wanted, there would be ways to test for what document is what, but there is an easier way: Discriminators."),(0,r.kt)("h2",{id:"fixing-it-with-discriminators"},"Fixing it with Discriminators"),(0,r.kt)("p",null,"The code from ",(0,r.kt)("a",{parentName:"p",href:"#first-thought"},"First thought")," is actually not so far off of what discriminators will need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@modelOptions({ schemaOptions: { collection: "animal" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\n// difference is below here\nconst DogModel = getDiscriminatorModelForClass(AnimalModel, Dog);\nconst CatModel = getDiscriminatorModelForClass(AnimalModel, Cat);\nconst ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot);\n')),(0,r.kt)("p",null,"and then the querying code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\nconst found = await ParrotModel.findOne({}).exec();\n\nconsole.log("found", found);\n')),(0,r.kt)("p",null,"and this time it will log ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", because there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"Parrot")," document inside the collection."),(0,r.kt)("p",null,'You might ask "how does this work?", well, it is easy: mongoose will by default use the hidden property ',(0,r.kt)("inlineCode",{parentName:"p"},"__t")," to differentiate between registered models from the shared parent, and the default value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"__t")," property is the model name. (",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/model-options#customname"},"Look here for more on how typegoose generates an model name"),")"),(0,r.kt)("h2",{id:"query-with-shared-parent-model"},"Query with Shared Parent Model"),(0,r.kt)("p",null,"When using discriminators, it is also possible to use the shared parent to query for documents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\nconst found = await AnimalModel.findOne({}).exec();\n\nconsole.log("found", found);\n')),(0,r.kt)("p",null,"this should find one of the 2 created documents, with full properties of one of those, but inside the code it will still be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This can be solved by using custom type guards:"),(0,r.kt)("p",null,"Classes & Models:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// an enum to make it easier to access the names for the typeguard\nenum Names {\n  DOG = "DOG",\n  CAT = "CAT",\n  PARROT = "PARROT",\n}\n\n@modelOptions({ schemaOptions: { collection: "animal" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\nconst DogModel = getDiscriminatorModelForClass(AnimalModel, Dog, Names.DOG);\nconst CatModel = getDiscriminatorModelForClass(AnimalModel, Cat, Names.CAT);\nconst ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot, Names.PARROT);\n')),(0,r.kt)("p",null,"Query Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'function checkForClass<T extends Animal>(doc: mongoose.Document & KeyStringAny, name: string): doc is DocumentType<T> {\n  return doc?.__t === name;\n}\n\nawait CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\nconst found = await AnimalModel.findOne({ patientNumber: 0 }).orFail().exec();\n\nif (checkForClass<Cat>(found, Names.CAT)) {\n  console.log("runtime Cat", found.nameTag);\n}\nconsole.log("found", found);\n')),(0,r.kt)("p",null,"this code should now log ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime Cat Catty-1")," and the full document and types should also work inside the if-block."),(0,r.kt)("h2",{id:"extras"},"Extras"),(0,r.kt)("p",null,"This property name can be changed with the schemaOption ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/guide.html#discriminatorKey"},(0,r.kt)("inlineCode",{parentName:"a"},"discriminatorKey")),".",(0,r.kt)("br",{parentName:"p"}),"\n","The value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorKey")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"__t"),") can also be changed, by defining the property on the class (/ schema)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@modelOptions({ schemaOptions: { collection: "animal", discriminatorKey: "customKey" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n  // options "enum" & "default" can also be specified, but dont have much effect\n  // the property set in "discriminatorKey" does not actually need to be defined, but its for types like usage in an typeguard\n  @prop({ required: true })\n  public customKey!: string; // its recommended to only use "string" or "number"\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\n// difference is below here\nconst DogModel = getDiscriminatorModelForClass(AnimalModel, Dog, "customDog");\nconst CatModel = getDiscriminatorModelForClass(AnimalModel, Cat, "customCat");\nconst ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot, "customParrot");\n')),(0,r.kt)("p",null,"and so instead of the model name (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat"),"), it will be stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"customCat")," inside property ",(0,r.kt)("inlineCode",{parentName:"p"},"customKey"),"."))}m.isMDXComponent=!0}}]);