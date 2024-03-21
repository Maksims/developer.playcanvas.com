"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2113],{71526:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var e=i(74848),a=i(28453);const s={title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0",tags:["animation"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg"},o=void 0,l={id:"tutorials/animation-blending",title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u975e\u63a8\u5968\u306eModel\u304a\u3088\u3073Animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee3\u308f\u308a\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30c8\u30b0\u30e9\u30d5\u306e\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/animation-blending.md",sourceDirName:"tutorials",slug:"/tutorials/animation-blending",permalink:"/ja/tutorials/animation-blending",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/animation-blending.md",tags:[{label:"animation",permalink:"/ja/tags/animation"}],version:"current",frontMatter:{title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0",tags:["animation"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u4f5c\u6210",permalink:"/ja/tutorials/animated-textures"},next:{title:"Animation without State Graph",permalink:"/ja/tutorials/animation-without-state-graph"}},r={},c=[{value:"Animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:2}];function d(n){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.admonition,{type:"warning",children:(0,e.jsxs)(t.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u975e\u63a8\u5968\u306eModel\u304a\u3088\u3073Animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee3\u308f\u308a\u306b",(0,e.jsx)(t.a,{href:"/tutorials/anim-blending/",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30c8\u30b0\u30e9\u30d5\u306e\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,e.jsx)("div",{className:"iframe-container",children:(0,e.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/HI8kniOx/",title:"Animation Blending"})}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.em,{children:"\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u3057\u3066\u304b\u3089\u3001\u30d1\u30f3\u30c1\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u30d6\u30ec\u30f3\u30c9\u3059\u308b\u306b\u306f\u300cp\u300d\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"})}),"\n",(0,e.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u306e\u57fa\u672c\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,e.jsx)(t.p,{children:"\u30b7\u30fc\u30f3\u5185\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u6a5f\u68b0\u3084\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3057\u305f\u3044\u7269\u4f53\u306e\u826f\u3044\u4f8b\u3067\u3059\u3002\u4e00\u822c\u7684\u306b\u30013D\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u4f5c\u6210\u3055\u308c\u308b\u969b\u306b\u306f\u3001\u500b\u3005\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u3001\u3053\u308c\u3089\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u901a\u5e38\u3001\u30b5\u30a4\u30af\u30eb\uff08\u30eb\u30fc\u30d7\u3059\u308b\u305f\u3081\uff09\u3068\u547c\u3070\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u4eba\u9593\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u306f\u30a2\u30a4\u30c9\u30eb\u306e\u30b5\u30a4\u30af\u30eb\u3001\u6b69\u884c\u306e\u30b5\u30a4\u30af\u30eb\u3001\u8d70\u884c\u306e\u30b5\u30a4\u30af\u30eb\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002PlayCanvas\u306e\u958b\u767a\u8005\u3068\u3057\u3066\u306f\u3001\u3053\u308c\u3089\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u4e0a\u3067\u518d\u751f\u3059\u308b\u4ed5\u7d44\u307f\u304c\u5fc5\u8981\u3067\u3059\u3002\u307e\u305f\u3001\u3053\u308c\u3089\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u5207\u308a\u66ff\u308f\u308b\u969b\u306b\u7a81\u7136\u5909\u308f\u308a\u304c\u751f\u3058\u308b\u3053\u3068\u306f\u671b\u307e\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u308c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u4f7f\u7528\u3057\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u9593\u306e\u30b9\u30e0\u30fc\u30ba\u306a\u9077\u79fb\u3092\u5b9f\u73fe\u3059\u308b\u3079\u304d\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u8996\u899a\u7684\u306a\u5fe0\u5b9f\u5ea6\u304c\u5927\u5e45\u306b\u5411\u4e0a\u3057\u307e\u3059\u3002"}),"\n",(0,e.jsx)(t.p,{children:"\u305d\u308c\u3067\u306f\u3001PlayCanvas\u3092\u4f7f\u3063\u3066\u3053\u308c\u304c\u3069\u306e\u3088\u3046\u306b\u5b9f\u73fe\u3055\u308c\u308b\u304b\u898b\u3066\u307f\u307e\u3057\u3087\u3046..."}),"\n",(0,e.jsx)(t.h2,{id:"animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"Animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,e.jsx)(t.p,{children:"\u30e2\u30c7\u30eb\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u9069\u7528\u3059\u308b\u306b\u306f\u3001animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u8868\u793a\u3055\u308c\u308b\u30b9\u30ad\u30f3\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u8a2d\u5b9a\u3067\u3059\u3002"}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"Animated Entity",src:i(68999).A+"",width:"314",height:"748"})}),"\n",(0,e.jsx)(t.p,{children:"Animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u30022\u3064\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u307e\u3059\uff1a'idle' \u30b5\u30a4\u30af\u30eb\u3068 'punch' \u30b5\u30a4\u30af\u30eb\u3067\u3059\u3002Animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u3053\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u6700\u521d\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff08idle\u30b5\u30a4\u30af\u30eb\uff09\u304c\u518d\u751f\u3055\u308c\u3001\u30eb\u30fc\u30d7\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u7121\u9650\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u7d9a\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u3082\u3046\u5c11\u3057\u8208\u5473\u6df1\u3044\u6a5f\u80fd\u3092\u5b9f\u73fe\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"\u30eb\u30fc\u30d7\u3059\u308b\u30a2\u30a4\u30c9\u30eb\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u518d\u751f"}),"\n",(0,e.jsx)(t.li,{children:"\u30ad\u30fc\u3092\u62bc\u3059\u3068\u3001\u30eb\u30fc\u30d7\u3059\u308b\u30d1\u30f3\u30c1\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u30d6\u30ec\u30f3\u30c9"}),"\n",(0,e.jsx)(t.li,{children:"\u30ad\u30fc\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u30a2\u30a4\u30c9\u30eb\u306b\u623b\u3059"}),"\n"]}),"\n",(0,e.jsx)(t.p,{children:"\u3053\u306e\u3088\u3046\u306a\u6a5f\u80fd\u306f\u3001\u5358\u7d14\u306aanimation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u6a5f\u80fd\u3092\u8d85\u3048\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u8ffd\u52a0\u306e\u52d5\u4f5c\u3092\u30af\u30c3\u30af\u30a2\u30c3\u30d7\u3059\u308b\u306b\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30b9\u30ad\u30f3\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4e0a\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3067\u78ba\u8a8d\u3067\u304d\u3001animation_blending.js\u3068\u3044\u3046\u540d\u524d\u306eJS\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-javascript",children:"var AnimationBlending = pc.createScript('animationBlending');\n\nAnimationBlending.states = {\n    idle: {\n        animation: 'male.json'\n    },\n    punch: {\n        animation: 'male_uppercut_jab.json'\n    }\n};\n\n// initialize code called once per entity\nAnimationBlending.prototype.initialize = function() {\n    this.blendTime = 0.2;\n\n    this.setState('idle');\n};\n\nAnimationBlending.prototype.update = function(dt) {\n    if (this.app.keyboard.wasPressed(pc.KEY_P)) {\n        this.setState('punch');\n    }\n\n    if (this.app.keyboard.wasReleased(pc.KEY_P)) {\n        this.setState('idle');\n    }\n};\n\nAnimationBlending.prototype.setState = function (state) {\n    var states = AnimationBlending.states;\n\n    this.state = state;\n    // \u73fe\u5728\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u30010.2\u79d2\u304b\u3051\u3066\u304b\u3089\u30d6\u30ec\u30f3\u30c9\u3057\u307e\u3059\u3002\n    // \u73fe\u5728\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3092\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u59cb\u4f4d\u7f6e\u307e\u3067\u79fb\u52d5\u3055\u305b\u308b\u3002\n    this.entity.animation.play(states[state].animation, this.blendTime);\n};\n"})}),"\n",(0,e.jsx)(t.p,{children:"\u3053\u3053\u304b\u3089\u3001Animation\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u3055\u3089\u306b\u591a\u304f\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u3001\u3088\u308a\u8907\u96d1\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30c8\u30c1\u30e3\u30fc\u30c8\u3092\u30b9\u30af\u30ea\u30d7\u30c8\u5316\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/440156",children:"\u3053\u3061\u3089\u3067\u30b7\u30fc\u30f3\u306e\u5185\u5bb9\u3092\u3059\u3079\u3066\u8868\u793a\u3067\u304d\u307e\u3059"})})]})}function m(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},68999:(n,t,i)=>{i.d(t,{A:()=>e});const e=i.p+"assets/images/animation_blending-be54796750003ff5963bdc9415646c9f.jpg"},28453:(n,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var e=i(96540);const a={},s=e.createContext(a);function o(n){const t=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),e.createElement(s.Provider,{value:t},n.children)}}}]);