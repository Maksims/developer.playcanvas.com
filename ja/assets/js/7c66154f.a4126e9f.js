"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9682],{37646:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(85893),o=t(11151);const r={title:"Bloom \u30a8\u30d5\u30a7\u30af\u30c8",sidebar_position:1},i=void 0,a={id:"user-manual/graphics/posteffects/bloom",title:"Bloom \u30a8\u30d5\u30a7\u30af\u30c8",description:"\u30d6\u30eb\u30fc\u30e0 (Bloom) \u306f\u73fe\u5b9f\u4e16\u754c\u306e\u30ab\u30e1\u30e9\u304c\u73fe\u5b9f\u306b\u306f\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u3092\u5199\u3057\u3060\u3057\u3066\u3057\u307e\u3046\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u3092\u518d\u73fe\u3059\u308b\u305f\u3081\u306b\u4f7f\u3046\u30dd\u30b9\u30c8\u30d7\u30ed\u30bb\u30b9\u30a8\u30d5\u30a7\u30af\u30c8\u3067\u3059\u3002\u3053\u306e\u30a8\u30d5\u30a7\u30af\u30c8\u306f\u753b\u50cf\u306e\u660e\u308b\u3044\u9818\u57df\u306e\u30a8\u30c3\u30b8\u304b\u3089\u6f0f\u308c\u5e83\u304c\u308b\u5149\u306e\u3075\u3061\u3092\u63cf\u753b\u3057\u3001\u975e\u5e38\u306b\u660e\u308b\u3044\u5149\u304c\u305d\u306e\u30b7\u30fc\u30f3\u3092\u64ae\u5f71\u3057\u3066\u3044\u308b\u30ab\u30e1\u30e9\u306e\u9732\u51fa\u9650\u754c\u3092\u8d85\u3048\u3066\u3044\u308b\u69d8\u5b50\u3092\u8868\u73fe\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/posteffects/bloom.md",sourceDirName:"user-manual/graphics/posteffects",slug:"/user-manual/graphics/posteffects/bloom",permalink:"/ja/user-manual/graphics/posteffects/bloom",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/posteffects/bloom.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Bloom \u30a8\u30d5\u30a7\u30af\u30c8",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u30dd\u30b9\u30c8\u30a8\u30d5\u30a7\u30af\u30c8",permalink:"/ja/user-manual/graphics/posteffects/"},next:{title:"\u30d6\u30e9\u30a4\u30c8\u30cd\u30b9\u30fb\u30b3\u30f3\u30c8\u30e9\u30b9\u30c8\u30a8\u30d5\u30a7\u30af\u30c8",permalink:"/ja/user-manual/graphics/posteffects/brightness_contrast"}},c={},l=[];function p(e){const s={a:"a",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Bloom_(shader_effect)",children:"\u30d6\u30eb\u30fc\u30e0 (Bloom) "}),"\u306f\u73fe\u5b9f\u4e16\u754c\u306e\u30ab\u30e1\u30e9\u304c\u73fe\u5b9f\u306b\u306f\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u3092\u5199\u3057\u3060\u3057\u3066\u3057\u307e\u3046\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u3092\u518d\u73fe\u3059\u308b\u305f\u3081\u306b\u4f7f\u3046\u30dd\u30b9\u30c8\u30d7\u30ed\u30bb\u30b9\u30a8\u30d5\u30a7\u30af\u30c8\u3067\u3059\u3002\u3053\u306e\u30a8\u30d5\u30a7\u30af\u30c8\u306f\u753b\u50cf\u306e\u660e\u308b\u3044\u9818\u57df\u306e\u30a8\u30c3\u30b8\u304b\u3089\u6f0f\u308c\u5e83\u304c\u308b\u5149\u306e\u3075\u3061\u3092\u63cf\u753b\u3057\u3001\u975e\u5e38\u306b\u660e\u308b\u3044\u5149\u304c\u305d\u306e\u30b7\u30fc\u30f3\u3092\u64ae\u5f71\u3057\u3066\u3044\u308b\u30ab\u30e1\u30e9\u306e\u9732\u51fa\u9650\u754c\u3092\u8d85\u3048\u3066\u3044\u308b\u69d8\u5b50\u3092\u8868\u73fe\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u6b21\u306f\u3001\u30d6\u30eb\u30fc\u30e0\u3092\u9069\u7528\u3057\u3066\u3044\u306a\u3044\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"/images/platform/posteffects/without_effects.png",alt:"Image without effect"})}),"\n",(0,n.jsx)(s.p,{children:"\u305d\u3057\u3066\u4e0b\u306e\u753b\u50cf\u304c\u30d6\u30eb\u30fc\u30e0\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u9069\u5fdc\u3057\u305f\u753b\u50cf\u3067\u3059\u3002"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"/images/platform/posteffects/with_bloom.png",alt:"Image with effect"})}),"\n",(0,n.jsx)(s.p,{children:"\u30d3\u30eb\u30c8\u30a4\u30f3\u306e\u30d6\u30eb\u30fc\u30e0\u30a8\u30d5\u30a7\u30af\u30c8\u306f\u4ee5\u4e0b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6301\u3061\u307e\u3059:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Bloom Intensity"}),": \u30a8\u30d5\u30a7\u30af\u30c8\u306e\u5f37\u5ea6"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Bloom Threshold"}),": \u3053\u306e\u95be\u5024\u3088\u308a\u660e\u308b\u3044\u30d4\u30af\u30bb\u30eb\u306e\u307f\u304c\u30a8\u30d5\u30a7\u30af\u30c8\u306e\u5bfe\u8c61\u3068\u306a\u308a\u307e\u3059\u30020\u304b\u30891\u306e\u9593\u306e\u5024\u3092\u53d6\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Blur Amount"}),": \u307c\u304b\u3057\u306e\u91cf\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u30dd\u30b9\u30c8\u30a8\u30d5\u30a7\u30af\u30c8\u30b9\u30af\u30ea\u30d7\u30c8\u306f",(0,n.jsx)(s.a,{href:"https://github.com/playcanvas/engine/blob/main/scripts/posteffects/posteffect-bloom.js",children:"GitHub"}),"\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002"]})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(67294);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);