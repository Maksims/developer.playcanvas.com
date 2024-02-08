"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4887],{14112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(85893),s=t(11151);const i={title:"\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",sidebar_position:11},a=void 0,c={id:"user-manual/scripting/index",title:"\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",description:"\u30b2\u30fc\u30e0\u3092\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306b\u3059\u308b\u306b\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u3044\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306fJavaScript\u3067\u66f8\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3042\u3089\u3086\u308b\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scripting/index.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/",permalink:"/ja/user-manual/scripting/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/index.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",sidebar_position:11},sidebar:"userManualSidebar",previous:{title:"\u30a2\u30bb\u30c3\u30c8\u30d3\u30e5\u30fc\u30a2\u30fc",permalink:"/ja/user-manual/assets/viewers"},next:{title:"\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210",permalink:"/ja/user-manual/scripting/creating-new"}},l={},o=[{value:"\u7528\u8a9e\u96c6",id:"\u7528\u8a9e\u96c6",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u30b2\u30fc\u30e0\u3092\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306b\u3059\u308b\u306b\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u3044\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306f",(0,r.jsx)(n.strong,{children:"JavaScript"}),"\u3067\u66f8\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3042\u3089\u3086\u308b\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u4e8c\u3064\u306e\u500b\u5225\u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u306b\u5206\u304b\u308c\u3066\u3044\u308b\u3082\u306e\u3068\u8003\u3048\u3066\u304f\u3060\u3055\u3044\u3002\u4e00\u3064\u306fPlayCanvas\u304c\u63d0\u4f9b\u3059\u308b\u30a8\u30f3\u30b8\u30f3\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3001\u5165\u529b\u51e6\u7406\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u3001PlayCanvas\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306a\u3069\u3092\u542b\u3080\u57fa\u672c\u7684\u306a\u6a5f\u80fd\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002\u3082\u3046\u4e00\u3064\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059\u3002\u3053\u308c\u306f\u591a\u304f\u306e\u5834\u5408\u3001\u4fbf\u5229\u306a\u6319\u52d5\u3092\u63d0\u4f9b\u3059\u308b\u518d\u5229\u7528\u53ef\u80fd\u306a\u30d6\u30ed\u30c3\u30af\u304b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7279\u6709\u306e\u3082\u306e\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u672c\u7684\u306b\u3001\u30a8\u30f3\u30b8\u30f3\u30b3\u30fc\u30c9\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u542b\u307e\u308c\u308b\u5358\u4e00\u306eJavaScript\u30d5\u30a1\u30a4\u30eb\u306a\u306e\u3067\u3001\u6c17\u306b\u304b\u3051\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30a8\u30f3\u30b8\u30f3\u306e\u4e00\u90e8\u3092\u66f8\u304d\u63db\u3048\u308b\u5834\u5408\u3001\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0\u306b\u95a2\u3059\u308b\u3053\u306e\u5c0e\u5165\u306f\u5fc5\u8981\u306a\u3044\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u3053\u3067\u306f\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u300crotate\u300d\u3068\u547c\u3070\u308c\u3001\u53d6\u308a\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u6bce\u79d210\u5ea6\u56de\u8ee2\u3055\u305b\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'var Rotate = pc.createScript("rotate");\n\nRotate.prototype.update = function (dt) {\n    this.entity.rotate(0, 10*dt, 0);\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u4f5c\u6210\u3055\u308c\u305f\u3068\u304d\u306b\u6307\u5b9a\u3055\u308c\u305f\u540d\u524d\u306b\u3088\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u3001Editor\u307e\u305f\u306f\u30b3\u30fc\u30c9\u3067\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067",(0,r.jsx)(n.a,{href:"/user-manual/scenes/components/script/",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u306b\u6dfb\u4ed8\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7528\u8a9e\u96c6",children:"\u7528\u8a9e\u96c6"}),"\n",(0,r.jsx)(n.p,{children:"\u3044\u304f\u3064\u304b\u306e\u7528\u8a9e\u3092\u5b9a\u7fa9\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Script"})})," \u30b9\u30af\u30ea\u30d7\u30c8\u3068\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5b9a\u7fa9\u3092\u4e00\u3064\u4ee5\u4e0a\u542b\u3080\u5358\u4e00\u306eJavaScript\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Script Component"})})," \u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306fPlayCanvas\u30a8\u30f3\u30b8\u30f3\u3067\u5b9a\u7fa9\u3055\u308c\u3001\u30b2\u30fc\u30e0\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8aad\u307f\u8fbc\u307f\u30b9\u30af\u30ea\u30d7\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u6a5f\u80fd\u3092\u4e0e\u3048\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"ScriptType"})})," \u30b9\u30af\u30ea\u30d7\u30c8\u30bf\u30a4\u30d7\u3068\u306f",(0,r.jsx)(n.code,{children:"pc.create Script"}),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\u3055\u308c\u308bJavaScript\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u8ffd\u52a0\u3055\u308c\u305f\u3068\u304d\u306b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3055\u308c\u308b\u65b0\u3057\u3044\u30af\u30e9\u30b9\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Script Instance"})})," \u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001ScriptType\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306bScriptType\u304c\u6dfb\u4ed8\u3055\u308c\u3066\u3044\u308b\u5404\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3057\u3066\u4e00\u3064\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);