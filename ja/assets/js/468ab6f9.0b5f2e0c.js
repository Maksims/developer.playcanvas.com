"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9031],{6084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(74848),s=n(28453);const i={title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u4f5c\u6210",tags:["animation","textures"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg"},r=void 0,o={id:"tutorials/animated-textures",title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u4f5c\u6210",description:"\u30d5\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u898b\u3066\u304f\u3060\u3055\u3044",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/animated-textures.md",sourceDirName:"tutorials",slug:"/tutorials/animated-textures",permalink:"/ja/tutorials/animated-textures",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/animated-textures.md",tags:[{label:"animation",permalink:"/ja/tags/animation"},{label:"textures",permalink:"/ja/tags/textures"}],version:"current",frontMatter:{title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u4f5c\u6210",tags:["animation","textures"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Animate entities with curves",permalink:"/ja/tutorials/animate-entities-with-curves"},next:{title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0",permalink:"/ja/tutorials/animation-blending"}},c={},l=[{value:"\u30de\u30c3\u30d7\u30aa\u30d5\u30bb\u30c3\u30c8\u3067\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30b9\u30af\u30ed\u30fc\u30eb",id:"\u30de\u30c3\u30d7\u30aa\u30d5\u30bb\u30c3\u30c8\u3067\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30b9\u30af\u30ed\u30fc\u30eb",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/BM93v05L/",title:"Animated Textures"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:[(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/405882",children:"\u30d5\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u898b\u3066\u304f\u3060\u3055\u3044"]})}),"\n",(0,a.jsx)(t.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3059\u308b\u3053\u3068\u306f\u975e\u5e38\u306b\u6709\u7528\u3067\u3059\u3002\u3053\u3053\u3067\u793a\u3055\u308c\u3066\u3044\u308b\u4f8b\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u3055\u305b\u3066\u52d5\u304d\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u3082\u306e\u3067\u3059\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u30de\u30c3\u30d7\u30aa\u30d5\u30bb\u30c3\u30c8\u3067\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30b9\u30af\u30ed\u30fc\u30eb",children:"\u30de\u30c3\u30d7\u30aa\u30d5\u30bb\u30c3\u30c8\u3067\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30b9\u30af\u30ed\u30fc\u30eb"}),"\n",(0,a.jsxs)(t.p,{children:["\u4f8b\u306e\u56db\u89d2\u5f62\u5e73\u9762\u3067\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8 ",(0,a.jsx)(t.code,{children:"scrolling-texture.js"})," \u3092\u4f7f\u7528\u3057\u3066UV\u30aa\u30d5\u30bb\u30c3\u30c8\u3092\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306b\u5e38\u306b\u79fb\u52d5\u3055\u305b\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u6d41\u308c\u308b\u6c34\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u66f4\u65b0\u30eb\u30fc\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"ScrollingTexture.prototype.update = function(dt) {\n    var velocity = ScrollingTexture.tmpVec2;\n    var offset = ScrollingTexture.tmpOffset;\n\n    // \u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30aa\u30d5\u30bb\u30c3\u30c8\u91cf\u3092\u8a08\u7b97\u3059\u308b\n    // Speed * dt\n    velocity.set(this.speed.x, this.speed.y);\n    velocity.scale(dt);\n\n    // \u73fe\u5728\u306ediffuse\u304a\u3088\u3073normal\u30de\u30c3\u30d7\u306e\u30aa\u30d5\u30bb\u30c3\u30c8\u5024\u3092\u66f4\u65b0\u3059\u308b\n    offset.copy(this.material.diffuseMapOffset);\n    offset.add(velocity);\n\n    this.material.diffuseMapOffset = offset;\n    this.material.normalMapOffset = offset;\n    this.material.update();\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u30aa\u30d5\u30bb\u30c3\u30c8\u3092\u4e00\u6642\u7684\u306a\u30d9\u30af\u30c8\u30eb ",(0,a.jsx)(t.code,{children:"tmp"})," \u306b\u8a08\u7b97\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u5358\u7d14\u306b ",(0,a.jsx)(t.code,{children:"speed * timeStep"})," \u3067\u3059\u3002\u6b21\u306b\u3001\u3053\u306e\u30aa\u30d5\u30bb\u30c3\u30c8\u3092Diffuse\u30de\u30c3\u30d7\u3068Normal\u30de\u30c3\u30d7\u306eoffset\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u308c\u306f ",(0,a.jsx)(t.code,{children:"diffuseMapOffset"})," \u3068 ",(0,a.jsx)(t.code,{children:"normalMapOffset"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u884c\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u5024\u306f ",(0,a.jsx)(t.code,{children:"pc.Vec2"})," \u3067\u3042\u308a\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8868\u9762\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308bUV\u5ea7\u6a19\u3092\u30b7\u30d5\u30c8\u3057\u307e\u3059\u3002\u4ed6\u306e\u30de\u30c3\u30d7\uff08\u4f8b\uff1aEmissive\uff09\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u306e\u30aa\u30d5\u30bb\u30c3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3\u3082\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6700\u5f8c\u306b\u3001\u5909\u66f4\u3092\u30b7\u30a7\u30fc\u30c0\u30fc\u306b\u53cd\u6620\u3055\u305b\u308b\u305f\u3081\u306b ",(0,a.jsx)(t.code,{children:"material.update()"})," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30aa\u30d5\u30bb\u30c3\u30c8\u3092\u5909\u66f4\u3057\u3066\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u3055\u305b\u308b\u305f\u3081\u306e\u30b7\u30f3\u30d7\u30eb\u3067\u76f4\u63a5\u7684\u306a\u65b9\u6cd5\u3067\u3059\u3002\u305f\u3060\u3057\u3001\u3053\u306e\u30b3\u30fc\u30c9\u306b\u306f1\u3064\u306e\u6b20\u70b9\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u306f\u3001\u5b9f\u969b\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u540c\u3058\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30fc\u30f3\u5185\u306e\u8907\u6570\u306e\u30e2\u30c7\u30eb\u304c\u3042\u308b\u5834\u5408\u3001\u3059\u3079\u3066\u304c\u5f71\u97ff\u3092\u53d7\u3051\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);