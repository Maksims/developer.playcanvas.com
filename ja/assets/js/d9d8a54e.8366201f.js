"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3595],{14445:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var e=s(85893),l=s(11151);const a={title:"PlayCanvas\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",sidebar_position:1},r=void 0,c={id:"user-manual/publishing/web/playcanvas-hosting",title:"PlayCanvas\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",description:"\u3042\u306a\u305f\u306e\u30b2\u30fc\u30e0\u3092\u516c\u958b\u3059\u308b\u6700\u3082\u901f\u304f\u3066\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001playcanvas.com\u306b\u516c\u958b\u3059\u308b\u3053\u3068\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/publishing/web/playcanvas-hosting.md",sourceDirName:"user-manual/publishing/web",slug:"/user-manual/publishing/web/playcanvas-hosting",permalink:"/ja/user-manual/publishing/web/playcanvas-hosting",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/web/playcanvas-hosting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"PlayCanvas\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u30a6\u30a7\u30d6",permalink:"/ja/user-manual/publishing/web/"},next:{title:"\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",permalink:"/ja/user-manual/publishing/web/self-hosting"}},t={},d=[{value:"\u65b0\u898f\u30d3\u30eb\u30c9\u306e\u516c\u958b",id:"publishing-a-new-build",level:2},{value:"\u4e3b\u30d3\u30eb\u30c9(Primary Build)\u306e\u9078\u629e",id:"selecting-a-primary-build",level:2}];function u(n){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.p,{children:"\u3042\u306a\u305f\u306e\u30b2\u30fc\u30e0\u3092\u516c\u958b\u3059\u308b\u6700\u3082\u901f\u304f\u3066\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001playcanvas.com\u306b\u516c\u958b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,e.jsx)(i.p,{children:"PlayCanvas\u306b\u516c\u958b\u3059\u308b\u306b\u306f\u30012\u3064\u306e\u5358\u7d14\u306a\u624b\u9806\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:["\u65b0\u3057\u3044 ",(0,e.jsx)(i.strong,{children:"\u30d3\u30eb\u30c9(build)"})," \u3092\u516c\u958b"]}),"\n",(0,e.jsxs)(i.li,{children:["\u30d3\u30eb\u30c9\u3092 ",(0,e.jsx)(i.strong,{children:"\u4e3b\u30d3\u30eb\u30c9(Primary Build)"})," \u306b\u8a2d\u5b9a"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"\u516c\u958b\u3059\u308b\u306b\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u6700\u4f4e\u3072\u3068\u3064\u306e\u30b7\u30fc\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,e.jsx)(i.h2,{id:"publishing-a-new-build",children:"\u65b0\u898f\u30d3\u30eb\u30c9\u306e\u516c\u958b"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u79fb\u884c\u3057\u3066Editor\u3092\u958b\u304f\u3002"}),"\n",(0,e.jsxs)(i.li,{children:["\u5de6\u5074\u306e\u30c4\u30fc\u30eb\u30d0\u30fc\u306e",(0,e.jsx)("span",{class:"pc-icon",children:"\ue237"}),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u5de6\u4e0a\u30e1\u30cb\u30e5\u30fc\u304b\u3089Publishing\u3092\u30af\u30ea\u30c3\u30af\u3002"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"/images/user-manual/publishing/toolbar-publish.png",alt:"Publish \u30dc\u30bf\u30f3"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Publishing\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u958b\u304d\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u81ea\u5df1\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u7528\u306e\u30d3\u30eb\u30c9\u3092\u516c\u958b\u3057\u305f\u308a\u3001\u30d3\u30eb\u30c9\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"/images/user-manual/publishing/dialog-publish.png",alt:"\u516c\u958b"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:'"Publish on PlayCanvas"\u306e\u6a2a\u306ePUBLISH\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3002'}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"/images/user-manual/publishing/dialog-publish-build.png",alt:"\u65b0\u3057\u3044\u30d3\u30eb\u30c9\u306e\u516c\u958b"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u6b21\u306b\u3001\u65b0\u3057\u3044\u30d3\u30eb\u30c9\u306b\u95a2\u3059\u308b\u3044\u304f\u3064\u304b\u306e\u8a73\u7d30\u3092\u8a18\u5165\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4f7f\u7528\u53ef\u80fd\u306a\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Image"}),": \u5fc5\u8981\u306b\u5fdc\u3058\u3066\u7570\u306a\u308b\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u753b\u50cf\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u3067\u30d3\u30eb\u30c9\u3092\u5171\u6709\u3059\u308b\u969b\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Title"}),": \u30d3\u30eb\u30c9\u306e\u30bf\u30a4\u30c8\u30eb"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Description"}),": \u30d3\u30eb\u30c9\u306e\u8aac\u660e\u3002\u3053\u308c\u306f\u30d3\u30eb\u30c9\u306e\u30ea\u30f3\u30af\u3092\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u3067\u5171\u6709\u3059\u308b\u969b\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Version"}),": \u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001\u30d3\u30eb\u30c9\u3092\u533a\u5225\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u3042\u306a\u305f\u306b\u3068\u3063\u3066\u610f\u5473\u304c\u3042\u308b\u5024\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Release Notes"}),": \u3053\u306e\u30d3\u30eb\u30c9\u3067\u884c\u308f\u308c\u305f\u65b0\u3057\u3044\u5909\u66f4\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u540c\u69d8\u306b\u3001\u3053\u308c\u306f\u3042\u306a\u305f\u3060\u3051\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u30d3\u30eb\u30c9\u306e\u8ffd\u8de1\u304c\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Concatenate Scripts"}),": PlayCanvas\u30b9\u30af\u30ea\u30d7\u30c8\u30921\u3064\u306eJavaScript\u30d5\u30a1\u30a4\u30eb\u306b\u307e\u3068\u3081\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Minify Scripts"}),": PlayCanvas\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u6700\u5c0f\u5316\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u3092\u7e2e\u5c0f\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Generate Source Map"}),": \u30d3\u30eb\u30c9\u306b\u30bd\u30fc\u30b9\u30de\u30c3\u30d7\u3092\u542b\u3081\u307e\u3059\u3002\u3053\u308c\u306f\u30c7\u30d0\u30c3\u30b0\u306b\u5f79\u7acb\u3064\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u901a\u5e38\u306f\u30a2\u30d7\u30ea\u306e\u672c\u756a\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u516c\u958b\u3059\u308b\u969b\u306b\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.em,{children:"Optimize Scene Format"}),": \u30b7\u30fc\u30f3JSON\u3092\u6700\u592750\uff05\u307e\u3067\u5727\u7e2e\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,e.jsx)(i.a,{href:"/user-manual/optimization/optimizing-scene-format",children:"\u3053\u3061\u3089"}),"\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"/images/user-manual/publishing/dialog-publish-build-scenes.png",alt:"Select scenes"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u30d3\u30eb\u30c9\u306b\u542b\u3081\u308b\u30b7\u30fc\u30f3\u3092\u30ea\u30b9\u30c8\u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002\u30d0\u30ca\u30fc\u30a2\u30a4\u30b3\u30f3\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b7\u30fc\u30f3\u304c\u30d3\u30eb\u30c9\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30d3\u30eb\u30c9\u304c\u8d77\u52d5\u3055\u308c\u308b\u3068\u304d\u306f\u6700\u521d\u306b\u305d\u306e\u30b7\u30fc\u30f3\u304c\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,e.jsx)(i.li,{children:"'PUBLISH NOW' \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,e.jsx)(i.li,{children:"BUILDS\u30bf\u30d6\u306b\u65b0\u3057\u3044\u30d3\u30eb\u30c9\u304c\u4f5c\u6210\u3055\u308c\u305f\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u51e6\u7406\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,e.jsx)(i.li,{children:"\u3042\u306a\u305f\u306eWeb\u30a2\u30d7\u30ea\u304c\u516c\u958b\u3055\u308c\u307e\u3057\u305f\uff01\u516c\u958b\u3055\u308c\u305fURL\u304b\u3089\u30c4\u30a4\u30fc\u30c8\u3057\u305f\u308aFacebook\u3067\u5171\u6709\u3057\u305f\u308a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.p,{children:["\u30d3\u30eb\u30c9\u306f\u6b21\u306e\u5f62\u5f0f\u3067\u6c38\u4e45\u7684\u30ea\u30f3\u30af\u3092\u4e0e\u3048\u3089\u308c\u307e\u3059\uff1a ",(0,e.jsx)(i.code,{children:"https://playcanv.as/b/BUILD_ID/"})," \u3002\u3053\u306e\u30ea\u30f3\u30af\u306f\u30d3\u30eb\u30c9\u3092\u524a\u9664\u3057\u306a\u3044\u9650\u308a\u6709\u52b9\u3067\u3059\u3002\u30b2\u30fc\u30e0\u3078\u306e\u30ea\u30f3\u30af\u3092\u5171\u6709\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u516c\u958b\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30f3\u30af\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"]}),"\n",(0,e.jsx)(i.h2,{id:"selecting-a-primary-build",children:"\u4e3b\u30d3\u30eb\u30c9(Primary Build)\u306e\u9078\u629e"}),"\n",(0,e.jsx)(i.p,{children:"\u540c\u3058\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067\u30d3\u30eb\u30c9\u3092\u30af\u30ea\u30c3\u30af\u3002"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"/images/user-manual/publishing/dialog-builds.png",alt:"\u30d3\u30eb\u30c9"})}),"\n",(0,e.jsx)(i.p,{children:"\u65e2\u5b58\u306e\u516c\u958b\u30d3\u30eb\u30c9\u306e\u30ea\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,e.jsx)(i.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306ePLAY\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u518d\u751f\u3059\u308b\u30d3\u30eb\u30c9\u306f\u3001\u5404\u30d3\u30eb\u30c9\u306e\u5de6\u5074\u306b\u3042\u308b\u30d0\u30ca\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e3b\u30d3\u30eb\u30c9\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,e.jsxs)(i.p,{children:["\u53e4\u3044\u30d3\u30eb\u30c9\u3092\u524a\u9664\u3059\u308b\u969b\u306b\u58ca\u308c\u305f\u30ea\u30f3\u30af\u306e\u5fc3\u914d\u3092\u3057\u306a\u304f\u3066\u6e08\u3080\u3088\u3046\u306b\u3001\u5e38\u306b\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30b2\u30fc\u30e0\u3092\u53c2\u7167\u3059\u308b\u5358\u4e00\u306e\u30ea\u30f3\u30af\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u306f\u4fbf\u5229\u3067\u3059\u3002\u3053\u308c\u304c\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u4e3b\u30d3\u30eb\u30c9\u30ea\u30f3\u30af\u304c\u3042\u308b\u7406\u7531\u3067\u3059\u3002\u3053\u308c\u306f\u5e38\u306b",(0,e.jsx)(i.code,{children:"https://playcanv.as/p/PROJECT_ID/"}),"\u306e\u5f62\u5f0f\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,e.jsx)(i.admonition,{type:"note",children:(0,e.jsx)(i.p,{children:"\u30b2\u30fc\u30e0\u3078\u306e\u30ea\u30f3\u30af\u3092\u30b7\u30a7\u30a2\u3059\u308b\u5834\u5408\u306f\u3001Primary Build\u30ea\u30f3\u30af\u3092\u4f7f\u7528\u3059\u308b\u3079\u304d\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u518d\u516c\u958b\u3059\u308b\u969b\u306b\u30ea\u30f3\u30af\u304c\u5909\u66f4\u3055\u308c\u308b\u5fc3\u914d\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"})}),"\n",(0,e.jsx)(i.p,{children:"\u30d3\u30eb\u30c9\u3092\u516c\u958b\u3059\u308b\u969b\u306b\u521d\u3081\u3066\u3001\u81ea\u52d5\u7684\u306b\u4e3b\u30d3\u30eb\u30c9\u306b\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u306e\u30d3\u30eb\u30c9\u306b\u3064\u3044\u3066\u306f\u3001\u3044\u3064\u4e3b\u30d3\u30eb\u30c9\u306b\u5272\u308a\u5f53\u3066\u308b\u304b\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d3\u30eb\u30c9\u3092\u516c\u958b\u3057\u3066\u30c6\u30b9\u30c8\u3057\u3001\u6700\u7d42\u7684\u306b\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u306b\u516c\u958b\u3059\u308b\u524d\u306b\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"})]})}function h(n={}){const{wrapper:i}={...(0,l.a)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(u,{...n})}):u(n)}},11151:(n,i,s)=>{s.d(i,{Z:()=>c,a:()=>r});var e=s(67294);const l={},a=e.createContext(l);function r(n){const i=e.useContext(a);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),e.createElement(a.Provider,{value:i},n.children)}}}]);