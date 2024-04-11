"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3189],{5191:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=s(74848),t=s(28453);const a={title:"\u6700\u521d\u306e\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u65b9\u6cd5",tags:["animation","basics"],thumb:"/img/tutorials/importing-first-model-and-animation/thumbnail.jpg"},c=void 0,d={id:"tutorials/importing-first-model-and-animation",title:"\u6700\u521d\u306e\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u65b9\u6cd5",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/importing-first-model-and-animation.md",sourceDirName:"tutorials",slug:"/tutorials/importing-first-model-and-animation",permalink:"/ja/tutorials/importing-first-model-and-animation",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/importing-first-model-and-animation.md",tags:[{label:"animation",permalink:"/ja/tags/animation"},{label:"basics",permalink:"/ja/tags/basics"}],version:"current",frontMatter:{title:"\u6700\u521d\u306e\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u65b9\u6cd5",tags:["animation","basics"],thumb:"/img/tutorials/importing-first-model-and-animation/thumbnail.jpg"},sidebar:"tutorialsSidebar",previous:{title:"HTML/CSS UI",permalink:"/ja/tutorials/htmlcss-ui"},next:{title:"Information hotspots",permalink:"/ja/tutorials/information-hotspots"}},r={},l=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30bb\u30c3\u30c8\u306e\u5165\u624b",id:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30bb\u30c3\u30c8\u306e\u5165\u624b",level:2},{value:"\u30e2\u30c7\u30eb\u306eFBX\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",id:"\u30e2\u30c7\u30eb\u306efbx\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",level:2},{value:"\u30e2\u30c7\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0",id:"\u30e2\u30c7\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0",level:2},{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30e2\u30c7\u30eb\u306b\u8ffd\u52a0",id:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30e2\u30c7\u30eb\u306b\u8ffd\u52a0",level:2},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d\u306eFBX\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d\u306efbx\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",level:2},{value:"\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",id:"\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",level:2}];function h(e){const i={a:"a",h2:"h2",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://www.youtube.com/embed/r0LYQw7laRA",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,n.jsx)(i.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,n.jsx)(i.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6700\u521d\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(17914).A+"",width:"932",height:"480"})}),"\n",(0,n.jsx)(i.h2,{id:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30bb\u30c3\u30c8\u306e\u5165\u624b",children:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30bb\u30c3\u30c8\u306e\u5165\u624b"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://www.kenney.nl/assets/animated-characters-1",children:"Kenney Animated Characters \u30a2\u30bb\u30c3\u30c8\u30d1\u30c3\u30af"}),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(12875).A+"",width:"894",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u89e3\u51cd\u3057\u305f\u3089\u3001\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u96e2\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u4f7f\u3044\u3084\u3059\u3044\u3067\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(67752).A+"",width:"1528",height:"502"})}),"\n",(0,n.jsx)(i.h2,{id:"\u30e2\u30c7\u30eb\u306efbx\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",children:"\u30e2\u30c7\u30eb\u306eFBX\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"}),"\n",(0,n.jsx)(i.p,{children:"\u307e\u305a\u306f\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u306b\u6ce8\u76ee\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u30e2\u30c7\u30eb\u30d5\u30a9\u30eb\u30c0\u3092\u958b\u304d\u3001FBX\u30d5\u30a1\u30a4\u30eb\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u3059\u308b\u3068\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u3001PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u304c\u30de\u30c6\u30ea\u30a2\u30eb (Material) \u3001\u30b3\u30f3\u30c6\u30ca (Container) \u3001\u30ec\u30f3\u30c0\u30fc(Render) \u30a2\u30bb\u30c3\u30c8\u3001\u305d\u3057\u3066\u6700\u3082\u91cd\u8981\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8 (Template) \u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(46856).A+"",width:"1019",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bFBX\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5834\u5408\u306f\u3001Project Settings -> Asset Tasks\u3067\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(51188).A+"",width:"480",height:"467"})}),"\n",(0,n.jsx)(i.h2,{id:"\u30e2\u30c7\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0",children:"\u30e2\u30c7\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0"}),"\n",(0,n.jsx)(i.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u5b8c\u5168\u306aEntity\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u307f\u3001\u30e2\u30c7\u30eb\u3092\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u6b21\u306e\u3088\u3046\u306b\u8907\u6570\u306e\u65b9\u6cd5\u3067\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u9078\u629e\u3057\u305fEntity\u306e\u5b50\u3068\u3057\u3066\u30013D\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3060\u3051\u3067\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(93577).A+"",width:"934",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"Entity\u306e\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u30d3\u30e5\u30fc\u306b\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3068\u3001\u305d\u306eEntity\u306e\u5b50\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(50376).A+"",width:"934",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u30d3\u30e5\u30fc\u306e\u7a7a\u767d\u9818\u57df\u306b\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3068\u3001\u30b7\u30fc\u30f3\u3067\u6700\u4e0a\u4f4d\u306eEntity\u306e\u5b50\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(95895).A+"",width:"934",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u6700\u5f8c\u306b\u3001Entity\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(5644).A+"",width:"934",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0\u3055\u308c\u305f\u306e\u3067\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u306a\u3044\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002\u4eca\u56de\u306e\u5834\u5408\u3001FBX\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u57cb\u3081\u8fbc\u307e\u308c\u3066\u304a\u3089\u305a\u3001\u5225\u9014\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u3082\u3057FBX\u306b\u57cb\u3081\u8fbc\u307e\u308c\u3066\u3044\u305f\u5834\u5408\u306f\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u30d7\u30ed\u30bb\u30b9\u304c\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u9069\u5207\u306a\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u3053\u3053\u3067\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30bb\u30c3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(14780).A+"",width:"1422",height:"544"})}),"\n",(0,n.jsx)(i.h2,{id:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30e2\u30c7\u30eb\u306b\u8ffd\u52a0",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30e2\u30c7\u30eb\u306b\u8ffd\u52a0"}),"\n",(0,n.jsx)(i.p,{children:"\u3055\u3066\u3001Kenney Character\u3078\u623b\u308a\u307e\u3057\u3087\u3046\u3002skin\u30d5\u30a9\u30eb\u30c0\u304b\u3089\u30c6\u30af\u30b9\u30c1\u30e3\u30921\u3064\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u30e2\u30c7\u30eb\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u9069\u7528\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(30849).A+"",width:"830",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30bb\u30c3\u30c8\u3092\u30de\u30c6\u30ea\u30a2\u30eb\u30b9\u30ed\u30c3\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u308c\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(1375).A+"",width:"932",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u307e\u305f\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u30b9\u30ed\u30c3\u30c8\u306e 'Edit' \u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3057\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067\u305d\u308c\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\xa0"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(14523).A+"",width:"932",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u7d20\u6674\u3089\u3057\u3044\uff01\u3053\u308c\u3067\u30b7\u30fc\u30f3\u306b\u5b8c\u5168\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u65bd\u3055\u308c\u305f\u30e2\u30c7\u30eb\u304c\u3042\u308a\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d\u306efbx\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d\u306eFBX\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"}),"\n",(0,n.jsx)(i.p,{children:"\u5148\u307b\u3069\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u5225\u306eFBX\u30d5\u30a1\u30a4\u30eb\u306b\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u30e9\u30f3\u30cb\u30f3\u30b0\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u30a8\u30c7\u30a3\u30bf\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(12229).A+"",width:"807",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u542b\u3080\u3044\u304f\u3064\u304b\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u5fc5\u8981\u306a\u306e\u306f\u305d\u308c\u3060\u3051\u306a\u306e\u3067\u3001\u4ed6\u306e\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306f\u524a\u9664\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(59707).A+"",width:"1410",height:"544"})}),"\n",(0,n.jsx)(i.p,{children:"\u3053\u3053\u304b\u3089\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3068\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067\u305d\u308c\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u30d7\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u9069\u7528\u3059\u308b\u30d7\u30ec\u30d3\u30e5\u30fc\u30a2\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u5148\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30ebFBX\u306e\u305f\u3081\u306b\u4f5c\u6210\u3055\u308c\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a2\u30bb\u30c3\u30c8\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(29427).A+"",width:"935",height:"480"})}),"\n",(0,n.jsx)(i.h2,{id:"\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",children:"\u30e2\u30c7\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,n.jsx)(i.p,{children:"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306eAnim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3001\u3055\u3089\u306bAnim State Graph\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"Anim State Graph\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001'New Asset'  -> 'Anim State Graph' \u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(38379).A+"",width:"935",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u30b0\u30e9\u30d5\u30a2\u30bb\u30c3\u30c8\u306b\u306f\u8907\u6570\u306e\u30b9\u30c6\u30fc\u30c8\u304c\u3042\u308a\u3001\u5404\u30b9\u30c6\u30fc\u30c8\u306b\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30b9\u30c6\u30fc\u30c8\u9593\u306e\u30d5\u30ed\u30fc\u306f\u3001\u6761\u4ef6\u4ed8\u304d\u306e\u30c8\u30e9\u30f3\u30b8\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u5236\u5fa1\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(79301).A+"",width:"1417",height:"720"})}),"\n",(0,n.jsxs)(i.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u5358\u4e00\u306e\u30b9\u30c6\u30fc\u30c8\u3068\u5358\u4e00\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u7126\u70b9\u3092\u5f53\u3066\u307e\u3059\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3084\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f  ",(0,n.jsx)(i.a,{href:"/user-manual/animation/",children:"\u3053\u3061\u3089"}),"\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(i.p,{children:"\u30e2\u30c7\u30eb\u306b\u30b0\u30e9\u30d5\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30b7\u30fc\u30f3\u5185\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u9078\u629e\u3057\u3001\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306b\u3066Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"Anim\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001Anim State Graph\u30a2\u30bb\u30c3\u30c8\u3092\u5272\u308a\u5f53\u3066\u3001\u30b0\u30e9\u30d5\u5185\u306e\u30b9\u30c6\u30fc\u30c8\u304c\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u3067\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u3092\u30b9\u30c6\u30fc\u30c8\u306b\u5272\u308a\u5f53\u3066\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(7853).A+"",width:"935",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(55854).A+"",width:"935",height:"480"})}),"\n",(0,n.jsx)(i.p,{children:"\u4ee5\u4e0a\u3067\u3059\uff01\u6700\u521d\u306e\u30e2\u30c7\u30eb\u3068\u30eb\u30fc\u30d7\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092PlayCanvas\u306b\u6b63\u5e38\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f\uff01"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:s(17914).A+"",width:"932",height:"480"})})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7853:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/add-anim-component-97e6cae316eb132091511a5d820320e3.gif"},55854:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/add-animation-to-anim-d641cdaad6ac5b81637a2ee3e2b76c71.gif"},79301:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/anim-state-graph-e9adb2e5d408466504cca93648410260.png"},29427:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/animation-preview-89f5962470acc692c5be099a51c5a902.gif"},67752:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/asset-pack-contents-52ea43520dc2204add2ce45a8d871f1c.png"},51188:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/asset-tasks-settings-04e0ff09ed3224e83210bb07ac7fe0ad.png"},38379:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/create-anim-state-graph-741bdacbc5b0a4f6c0655168d6cb50fb.gif"},59707:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/delete-animation-files-d6cfee405760a1bab2fc8ce414269ef4.png"},14780:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/embedded-textures-fbx-example-bb6485cbde26a7a86032120dcc2add20.png"},12229:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/importing-animation-fbx-93ef8bb032a09508a8d131742f0bc86a.gif"},46856:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/importing-model-fbx-d81795f06331d51edaf051cf1527f4bf.gif"},30849:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/importing-texture-f8470f4afc49fa0b8c3ae7961b8f6b4b.gif"},12875:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/kenney-site-814e85e12a9282f665663c36fc25cbf3.jpg"},14523:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/material-pick-texture-814f0b503e184827b7f8e78d37e2914e.gif"},17914:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/preview-beac8edb46f6f4378c0cbd3b0d3ca925.gif"},5644:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/template-add-context-menu-2a0e4c4d1c3490c8f1da93230d9acd1c.gif"},50376:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/template-add-on-entity-dabf38f11f60927065c0149298536fee.gif"},95895:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/template-add-scene-hierarchy-area-8b8c4ead3fe30d39de39d41eb81bdad6.gif"},93577:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/template-add-scene-view-94c066f62c61ac0e2c4692a4190aed1e.gif"},1375:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/texture-to-material-50c3a524bc3074e8a639fb05d8b59d94.gif"},28453:(e,i,s)=>{s.d(i,{R:()=>c,x:()=>d});var n=s(96540);const t={},a=n.createContext(t);function c(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);