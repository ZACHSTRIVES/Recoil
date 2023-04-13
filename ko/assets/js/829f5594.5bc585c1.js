"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4709],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9376:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"atomFamily(options)",sidebar_label:"atomFamily()"},m=void 0,p={unversionedId:"api-reference/utils/atomFamily",id:"api-reference/utils/atomFamily",title:"atomFamily(options)",description:"\uc791\uc131 \uac00\ub2a5\ud55c RecoilState atom\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/atomFamily.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/atomFamily",permalink:"/ko/docs/api-reference/utils/atomFamily",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/atomFamily.md",tags:[],version:"current",frontMatter:{title:"atomFamily(options)",sidebar_label:"atomFamily()"},sidebar:"docs",previous:{title:"isRecoilValue()",permalink:"/ko/docs/api-reference/core/isRecoilValue"},next:{title:"selectorFamily()",permalink:"/ko/docs/api-reference/utils/selectorFamily"}},c=[{value:"Example",id:"example",children:[],level:2},{value:"\uad6c\ub3c5",id:"\uad6c\ub3c5",children:[],level:2},{value:"\uc9c0\uc18d\uc131(Persistence)",id:"\uc9c0\uc18d\uc131persistence",children:[],level:2}],u={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc791\uc131 \uac00\ub2a5\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"RecoilState")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},"atom"),"\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function atomFamily<T, P: Parameter>({\n  key: string,\n\n  default?:\n    | T\n    | Promise<T>\n    | Loadable<T>\n    | WrappedValue<T>\n    | RecoilValue<T>\n    | (P => T | Promise<T> | Loadable<T> | WrappedValue<T> | RecoilValue<T>),\n\n  effects?:\n    | $ReadOnlyArray<AtomEffect<T>>\n    | (P => $ReadOnlyArray<AtomEffect<T>>),\n\n  dangerouslyAllowMutability?: boolean,\n}): P => RecoilState<T>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - \ub0b4\ubd80\uc801\uc73c\ub85c atom\uc744 \uc2dd\ubcc4\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \uace0\uc720\ud55c \ubb38\uc790\uc5f4. \uc774 \ubb38\uc790\uc5f4\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc804\uccb4\uc5d0\uc11c \ub2e4\ub978 atom\uacfc selector\uc5d0 \ub300\ud574 \uace0\uc720\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default")," - atom\uc758 \ucd08\uae30\uac12. atom\uacfc \uac19\uc774, \uc9c1\uc811\uc801\uc778 \uac12\uc774\uac70\ub098 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Loadable"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"WrappedValue")," \ub610\ub294 \uae30\ubcf8\uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \ub610 \ub2e4\ub978 atom/selector\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, ",(0,o.kt)("inlineCode",{parentName:"li"},"atomFamily"),"\ub294 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc804\ub2ec\ubc1b\uc544 \ud574\ub2f9 \ud328\ubc00\ub9ac \uba64\ubc84\uc5d0 \ub300\ud55c \uae30\ubcf8\uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc81c\uacf5\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0, atom\uc740 \ub300\uae30 \uc0c1\ud0dc\uac00 \ub418\uace0, ",(0,o.kt)("inlineCode",{parentName:"li"},"Suspense"),"\uac00 \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"effects")," - ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Atom Effects"),"\uc758 family \ub9e4\uac1c\ubcc0\uc218\ub97c \uae30\ubc18\uc73c\ub85c \ubc30\uc5f4\uc744 \uac00\uc838\uc624\ub294 \uc120\ud0dd\uc801 \ubc30\uc5f4 \ub610\ub294 \ucf5c\ubc31\uc785\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - Recoil\uc740 atom \uc0c1\ud0dc \ubcc0\uacbd\uc5d0 \ub530\ub77c \ub9ac\ub80c\ub354\ub9c1\uc5d0 atom\uc744 \uc774\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc5b8\uc81c \uc54c\ub9b4\uc9c0\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d atom\uc758 \uac12\uc774 \ubcc0\uacbd\ub41c \uacbd\uc6b0, \uc6d0\uc790\uc758 \uac12\uc740 \uad6c\ub3c5\ud558\uace0 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uac8c \uc81c\ub300\ub85c \uc54c\ub9ac\uc9c0 \uc54a\uace0 \uc6b0\ud68c\ud558\uc5ec \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \ubaa8\ub4e0 \uc800\uc7a5\ub41c \uac12\uc740 \ub3d9\uacb0\ub429\ub2c8\ub2e4. \uacbd\uc6b0\uc5d0 \ub530\ub77c \uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud574 \uc7ac\uc815\uc758\ud558\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"atom"),"\uc740 ",(0,o.kt)("em",{parentName:"p"},"Recoil")," \uc758 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc571\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>"),"\ubcc4\ub85c atom\uc744 \ub9cc\ub4e4\uace0 \ub4f1\ub85d\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc0c1\ud0dc\uac00 \uc804\uc5ed\uc774 \uc544\ub2c8\ub77c\uba74 \uc5b4\ub5a8\uae4c\uc694? \uc0c1\ud0dc\uac00 control\uc758 \uc778\uc2a4\ud134\uc2a4 \ub610\ub294 \ud2b9\uc815 \uc694\uc18c\uc640 \uc5f0\uad00\ub41c \uacbd\uc6b0 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694? \uc608\ub97c \ub4e4\uc5b4, \uc0ac\uc6a9\uc790\uac00 \uc694\uc18c\ub97c \ub3d9\uc801\uc73c\ub85c \ucd94\uac00\ud558\uace0 \uac01 \uc694\uc18c\uac00 \uc704\uce58\ub97c \uac16\ub294 UI \ud504\ub85c\ud1a0\ud0c0\uc774\ud551 \ub3c4\uad6c\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc0c1\uc801\uc73c\ub85c, \uac01\uac01\uc758 \uc694\uc18c\ub4e4\uc740 \uac01\uac01\uc758 \uc0c1\ud0dc ",(0,o.kt)("inlineCode",{parentName:"p"},"atom"),"\uc744 \uac00\uc9c8 \uac83 \uc785\ub2c8\ub2e4. \ub2f9\uc2e0\uc740 \uba54\ubaa8\uc774\uc81c\uc774\uc158 \ud328\ud134\uc73c\ub85c \uc774\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 ",(0,o.kt)("em",{parentName:"p"},"Recoil")," \uc740 \uc774 \ud328\ud134\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily")," \uc720\ud2f8\ub9ac\ud2f0\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. Atom Family\ub294 atom \ubaa8\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),"\ub97c \ud638\ucd9c\ud558\uba74 \uc804\ub2ec\ud55c \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub530\ub77c ",(0,o.kt)("inlineCode",{parentName:"p"},"RecoilState"),"\ub97c \uc81c\uacf5\ud558\ub294 \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),"\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ub9e4\uac1c\ubcc0\uc218\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"atom"),"\uc73c\ub85c\uc758 \ub9f5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),"\uc5d0 \ub2e8\uc77c \ud0a4\ub9cc\uc744 \uc81c\uacf5\ud558\uba74, \uac01 \uae30\ubcf8 atom\uc5d0 \ub300\ud574 \uace0\uc720\ud55c \ud0a4\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774 atom \ud0a4\ub294 \uc9c0\uc18d\uc131\uc744 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc2e4\ud589 \uc804\ubc18\uc5d0 \uac78\uccd0 \uc548\uc815\uc801\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4. \ub9e4\uac1c \ubcc0\uc218\ub294 \ub2e4\ub978 \ud638\ucd9c \uc9c0\uc810\uc5d0\uc11c\ub3c4 \uc0dd\uc131\ub420 \uc218 \uc788\uc73c\uba70 \ub3d9\uc77c\ud55c \ub9e4\uac1c\ubcc0\uc218\uac00 \ub3d9\uc77c\ud55c \uae30\ubcf8 atom\uc744 \uac16\uae30\ub97c \uc6d0\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c, ",(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),"\uc5d0\uc11c\ub294 \ucc38\uc870 \ub3d9\ub4f1\uc131 \ub300\uc2e0 \uac12 \ub3d9\ub4f1\uc131\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub294 \ub9e4\uac1c \ubcc0\uc218\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc744 \uc81c\ud55c\ud558\uac8c \ub429\ub2c8\ub2e4.  ",(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),"\ub294 \uc6d0\uc2dc \ud0c0\uc785, \ubc30\uc5f4, \ub610\ub294 \ubc30\uc5f4, \uc6d0\uc2dc \ud0c0\uc785\uc744 \uac16\ub294 \uac1d\uccb4\ub97c \ud5c8\uc6a9\ud569\ub2c8\ub2e4. "),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const elementPositionStateFamily = atomFamily({\n  key: 'ElementPosition',\n  default: [0, 0],\n});\n\nfunction ElementListItem({elementID}) {\n  const position = useRecoilValue(elementPositionStateFamily(elementID));\n  return (\n    <div>\n      Element: {elementID}\n      Position: {position}\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily()"),"\ub294 \uac04\ub2e8\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atom()")),"\uc73c\ub85c\uc368 \uac70\uc758 \ub3d9\uc77c\ud55c \uc635\uc158\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uae30\ubcf8\uac12\uc744 \ub9e4\uac1c\ubcc0\uc218\ud654 \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ub9e4\uac1c \ubcc0\uc218\uac12\uc744 \ubc1b\uc544 \uc2e4\uc81c \uae30\ubcf8\uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: param => defaultBasedOnParam(param),\n});\n")),(0,o.kt)("p",null,"\ub610\ub294, ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," \ub300\uc2e0 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},(0,o.kt)("inlineCode",{parentName:"a"},"selectorFamily")),"\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," selector\uc5d0\uc11c\ub3c4 \ub9e4\uac1c \ubcc0\uc218 \uac12\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: selectorFamily({\n    key: 'MyAtom/Default',\n    get: param => ({get}) => {\n      return computeDefaultUsingParam(param);\n    },\n  }),\n});\n")),(0,o.kt)("h2",{id:"\uad6c\ub3c5"},"\uad6c\ub3c5"),(0,o.kt)("p",null,"\ubaa8\ub4e0 \uc694\uc18c\uc5d0 \ub300\ud55c \uc0c1\ud0dc \ub9f5\uc774 \uc788\ub294 \ub2e8\uc77c atom\uc744 \uc800\uc7a5\ud558\ub294 \uac83\ubcf4\ub2e4 \uac01 \uc694\uc18c\uc5d0 \ub300\ud574 \ubd84\ub9ac\ub41c atom\uc744 \uac16\ub294 \uc774 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uba74 \ubaa8\ub450 \uc790\uccb4 \uac1c\ubcc4 \uad6c\ub3c5\uc744 \uc720\uc9c0\ud55c\ub2e4\ub294 \uc7a5\uc810\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c, \ud55c \uc694\uc18c\uc758 \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uba74 \ud574\ub2f9 atom\ub97c \uad6c\ub3c5\ud558\ub294 React \ucef4\ud3ec\ub10c\ud2b8\ub9cc \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc9c0\uc18d\uc131persistence"},"\uc9c0\uc18d\uc131(Persistence)"),(0,o.kt)("p",null,"\uc9c0\uc18d\uc131 \uc635\uc800\ubc84\ub294 \uc0ac\uc6a9 \ub41c \ub9e4\uac1c\ubcc0\uc218 \uac12\uc758 \uc9c1\ub82c\ud654\uc5d0 \ub530\ub77c \uace0\uc720\ud55c \ud0a4\ub97c \uc0ac\uc6a9\ud574 \uac01 \ub9e4\uac1c \ubcc0\uc218\uc758 \uc0c1\ud0dc\ub97c \uace0\uc720\ud55c atom\uc73c\ub85c \uc720\uc9c0\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c, \uc6d0\uc2dc \ud639\uc740 \uc6d0\uc2dc \ud0c0\uc785\uc744 \ud3ec\ud568\ud558\ub294 \ub2e8\uc21c\ud55c \ubcf5\ud569 \uac1d\uccb4 \ub9e4\uac1c \ubcc0\uc218\ub9cc\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \ud074\ub798\uc2a4 \ub610\ub294 \ud568\uc218\ub294 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub3d9\uc77c\ud55c \ud0a4\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \ucd5c\uc2e0\ubc84\uc804\uc758 \uc571\uc5d0\uc11c \uac04\ub2e8\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"atom"),"\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),'\ub85c "\uc5c5\uadf8\ub808\uc774\ub4dc" \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74, \uc774\uc804 \ud0a4\ub85c \uc9c0\uc18d\ub41c \uac12\uc744 \uc77d\uc744 \uc218 \uc788\uc73c\uba70 \uc0c8 ',(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),"\uc758 \ubaa8\ub4e0 \ub9e4\uac1c \ubcc0\uc218 \uac12\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \ub2e8\uc21c atom\uc758 \uc9c0\uc18d\ub41c \uc0c1\ud0dc\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098, ",(0,o.kt)("inlineCode",{parentName:"p"},"atomFamily"),"\uc5d0\uc11c \ub9e4\uac1c \ubcc0\uc218\uc758 \ud615\uc2dd\uc744 \ubcc0\uacbd\ud558\uba74 \ubcc0\uacbd \uc804\uc758 \uac12\uc744 \uc790\ub3d9\uc73c\ub85c \uc77d\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, selector \ud639\uc740 validator\uc5d0 \ub85c\uc9c1\uc744 \ucd94\uac00\ud574 \uc774\uc804 \ub9e4\uac1c\ubcc0\uc218 \ud615\uc2dd\uc744 \uae30\ubc18\uc73c\ub85c \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud5a5\ud6c4 \uc774 \ud328\ud134\uc744 \uc790\ub3d9\ud654 \ud560 \uc218 \uc788\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);