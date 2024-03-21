"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9054],{16664:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var t=r(74848),i=r(28453);const n={title:"\u30a2\u30bb\u30c3\u30c8\u30a4\u30f3\u30dd\u30fc\u30c8\u306e\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",sidebar_position:3},a=void 0,l={id:"user-manual/assets/import-pipeline/index",title:"\u30a2\u30bb\u30c3\u30c8\u30a4\u30f3\u30dd\u30fc\u30c8\u306e\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",description:'\u4e00\u90e8\u306e\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30b2\u30fc\u30e0\u3067\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001"\u30bf\u30fc\u30b2\u30c3\u30c8 (Target) "\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3092 \u30a4\u30f3\u30dd\u30fc\u30c8 \u3068\u547c\u3073\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u30013D\u30e2\u30c7\u30eb\u306fFBX\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u304c\u3001\u30b2\u30fc\u30e0\u3067\u8aad\u307f\u8fbc\u3080\u524d\u306bPlayCanvas\u4e92\u63db\u306e\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002',source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/import-pipeline/index.md",sourceDirName:"user-manual/assets/import-pipeline",slug:"/user-manual/assets/import-pipeline/",permalink:"/ja/user-manual/assets/import-pipeline/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/import-pipeline/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u30a2\u30bb\u30c3\u30c8\u30a4\u30f3\u30dd\u30fc\u30c8\u306e\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3068\u30a4\u30f3\u30dd\u30fc\u30c8",permalink:"/ja/user-manual/assets/importing"},next:{title:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u3080\u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",permalink:"/ja/user-manual/assets/import-pipeline/import-hierarchy"}},o={},d=[{value:"\u30a2\u30bb\u30c3\u30c8\u30bf\u30b9\u30af (Asset Tasks)",id:"asset-tasks",level:2},{value:"\u95a2\u9023\u30a2\u30bb\u30c3\u30c8\u306e\u691c\u7d22 (Search related assets)",id:"search-related-assets",level:3},{value:"\u30a2\u30bb\u30c3\u30c8\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u3092\u30d7\u30ea\u30ed\u30fc\u30c9\u306b\u8a2d\u5b9a (Assets default to preload)",id:"assets-default-to-preload",level:3},{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a4\u30f3\u30dd\u30fc\u30c8\u8a2d\u5b9a (Texture Import Settings)",id:"texture-import-settings",level:2},{value:"\u30c6\u30af\u30b9\u30c1\u30e3POT (Power of Two)",id:"texture-pot-power-of-two",level:3},{value:"\u30a2\u30c8\u30e9\u30b9\u3092\u4f5c\u6210 (Create Atlases)",id:"create-atlases",level:3},{value:"\u30e2\u30c7\u30eb\u30a4\u30f3\u30dd\u30fc\u30c8\u8a2d\u5b9a (Model Import Settings)",id:"model-import-settings",level:2},{value:"\u30de\u30c6\u30ea\u30a2\u30eb\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u4fdd\u6301 (Preserve material mappings)",id:"preserve-material-mappings",level:3},{value:"\u30e2\u30c7\u30eb\u3092\u4e0a\u66f8\u304d (Overwrite Models)",id:"overwrite-models",level:3},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u4e0a\u66f8\u304d (Overwrite Animations)",id:"overwrite-animations",level:3},{value:"\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4e0a\u66f8\u304d (Overwrite Materials)",id:"overwrite-materials",level:3},{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4e0a\u66f8\u304d (Overwrite Textures)",id:"overwrite-textures",level:3},{value:"GLB\u306b\u5909\u63db (Convert to GLB)",id:"convert-to-glb",level:3},{value:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u3080\u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",id:"import-hierarchy",level:3},{value:"\u30e1\u30c3\u30b7\u30e5\u5727\u7e2e (Mesh Compression)",id:"mesh-compression",level:3},{value:"FBX\u30d5\u30a9\u30eb\u30c0\u306e\u4f5c\u6210 (Create FBX Folder)",id:"create-fbx-folder",level:3},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a4\u30f3\u30dd\u30fc\u30c8\u8a2d\u5b9a (Animation Import Settings)",id:"animation-import-settings",level:2}];function p(e){const s={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:['\u4e00\u90e8\u306e\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30b2\u30fc\u30e0\u3067\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001"\u30bf\u30fc\u30b2\u30c3\u30c8 (Target) "\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3092 ',(0,t.jsx)(s.em,{children:"\u30a4\u30f3\u30dd\u30fc\u30c8"})," \u3068\u547c\u3073\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u30013D\u30e2\u30c7\u30eb\u306fFBX\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u304c\u3001\u30b2\u30fc\u30e0\u3067\u8aad\u307f\u8fbc\u3080\u524d\u306bPlayCanvas\u4e92\u63db\u306e\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u4e00\u90e8\u306e\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u4f7f\u7528\u3059\u308b\u524d\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u305f\u3068\u3048\u3070\u3001PNG\u753b\u50cf\u306f\u76f4\u3061\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"asset-tasks",children:"\u30a2\u30bb\u30c3\u30c8\u30bf\u30b9\u30af (Asset Tasks)"}),"\n",(0,t.jsx)(s.p,{children:"PlayCanvas\u306f\u3001\u30bd\u30fc\u30b9 (Source) \u30a2\u30bb\u30c3\u30c8\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3068\u3001\u30a2\u30bb\u30c3\u30c8\u30bf\u30b9\u30af (Asset Task) \u3092\u958b\u59cb\u3057\u3001\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u30a4\u30f3\u30dd\u30fc\u30c8\u30d7\u30ed\u30bb\u30b9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u8907\u6570\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306e\u52d5\u4f5c\u3092\u8abf\u6574\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)("img",{loading:"lazy",src:"/img/user-manual/assets/import-pipeline/asset-tasks.png",width:"480"}),"\n",(0,t.jsx)(s.h3,{id:"search-related-assets",children:"\u95a2\u9023\u30a2\u30bb\u30c3\u30c8\u306e\u691c\u7d22 (Search related assets)"}),"\n",(0,t.jsx)(s.p,{children:"\u30bd\u30fc\u30b9 (Source) \u30a2\u30bb\u30c3\u30c8\u3092\u66f4\u65b0\u3059\u308b\u5834\u5408\u3001\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u305f\u30bf\u30fc\u30b2\u30c3\u30c8\u30a2\u30bb\u30c3\u30c8\u306e\u66f4\u65b0\u65b9\u6cd5\u306b\u306f2\u3064\u306e\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"\u95a2\u9023\u30a2\u30bb\u30c3\u30c8\u306e\u691c\u7d22 (Search related assets)"})," \u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306f\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u95a2\u4fc2\u306a\u304f\u30bf\u30fc\u30b2\u30c3\u30c8\u30a2\u30bb\u30c3\u30c8\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.li,{children:"**\u95a2\u9023\u30a2\u30bb\u30c3\u30c8\u306e\u691c\u7d22 (Search related assets) ** \u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\u30a2\u30bb\u30c3\u30c8\u3092\u30bd\u30fc\u30b9\u30a2\u30bb\u30c3\u30c8\u3068\u540c\u3058\u30d5\u30a9\u30eb\u30c0\u30fc\u3067\u306e\u307f\u691c\u7d22\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u3057\u305f\u304c\u3063\u3066\u3001\u3053\u306e\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3057\u3066\u304a\u304f\u3068\u3001\u30bd\u30fc\u30b9 (Source)\u30a2\u30bb\u30c3\u30c8\u3068\u30bf\u30fc\u30b2\u30c3\u30c8 (Target) \u30a2\u30bb\u30c3\u30c8\u3092\u30d5\u30a9\u30eb\u30c0\u306b\u6574\u7406\u3057\u3001\u30bd\u30fc\u30b9 (Source)\u30a2\u30bb\u30c3\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3068\u95a2\u9023\u3059\u308b\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u66f4\u65b0\u3055\u308c\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"assets-default-to-preload",children:"\u30a2\u30bb\u30c3\u30c8\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u3092\u30d7\u30ea\u30ed\u30fc\u30c9\u306b\u8a2d\u5b9a (Assets default to preload)"}),"\n",(0,t.jsxs)(s.p,{children:["\u65b0\u3057\u304f\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u307e\u305f\u306f\u7121\u52b9\u304b\u3069\u3046\u304b\u306b\u5fdc\u3058\u3066\u3001\u81ea\u52d5\u7684\u306b",(0,t.jsx)(s.a,{href:"/user-manual/assets/preloading-and-streaming/",children:"\u30d7\u30ea\u30ed\u30fc\u30c9"}),"\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u306fJavaScript\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u3002JavaScript\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u4f5c\u6210\u3055\u308c\u305f\u3068\u304d\u306b\u5e38\u306b\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"texture-import-settings",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a4\u30f3\u30dd\u30fc\u30c8\u8a2d\u5b9a (Texture Import Settings)"}),"\n",(0,t.jsx)(s.p,{children:"\u3053\u308c\u3089\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u753b\u50cf\u3068\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u306b\u306e\u307f\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"texture-pot-power-of-two",children:"\u30c6\u30af\u30b9\u30c1\u30e3POT (Power of Two)"}),"\n",(0,t.jsx)(s.p,{children:"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u30012\u306e\u7d2f\u4e57\u3067\u306a\u3044\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u6642\u306b\u6700\u3082\u8fd1\u30442\u306e\u7d2f\u4e57\u89e3\u50cf\u5ea6\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"create-atlases",children:"\u30a2\u30c8\u30e9\u30b9\u3092\u4f5c\u6210 (Create Atlases)"}),"\n",(0,t.jsx)(s.p,{children:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u305f\u753b\u50cf\u306f\u3001\u901a\u5e38\u306eTexture\u30a2\u30bb\u30c3\u30c8\u3067\u306f\u306a\u304f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u3068\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u591a\u304f\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u30b7\u30fc\u30c8\u3084UI\u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"model-import-settings",children:"\u30e2\u30c7\u30eb\u30a4\u30f3\u30dd\u30fc\u30c8\u8a2d\u5b9a (Model Import Settings)"}),"\n",(0,t.jsx)(s.p,{children:"\u3053\u308c\u3089\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30e2\u30c7\u30eb\u307e\u305f\u306f\u30b7\u30fc\u30f3\u30d5\u30a1\u30a4\u30eb(FBX\u3001Collada\u3001obj\u306a\u3069)\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u306b\u306e\u307f\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"preserve-material-mappings",children:"\u30de\u30c6\u30ea\u30a2\u30eb\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u4fdd\u6301 (Preserve material mappings)"}),"\n",(0,t.jsx)(s.p,{children:"\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u307e\u305f\u306f\u518d\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u305d\u308c\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30de\u30c6\u30ea\u30a2\u30eb\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u4fdd\u6301\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"overwrite-models",children:"\u30e2\u30c7\u30eb\u3092\u4e0a\u66f8\u304d (Overwrite Models)"}),"\n",(0,t.jsx)(s.p,{children:"\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u307e\u305f\u306f\u518d\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u30bf\u30fc\u30b2\u30c3\u30c8\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u4e0a\u66f8\u304d\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002\u65b0\u3057\u3044\u30e2\u30c7\u30eb\u3067\u4e0a\u66f8\u304d\u3059\u308b\u3053\u3068\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"overwrite-animations",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u4e0a\u66f8\u304d (Overwrite Animations)"}),"\n",(0,t.jsx)(s.p,{children:"\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u307e\u305f\u306f\u518d\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u30e2\u30c7\u30eb\u304b\u3089\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u4e0a\u66f8\u304d\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002\u65b0\u3057\u3044\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3067\u4e0a\u66f8\u304d\u3059\u308b\u3053\u3068\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"overwrite-materials",children:"\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4e0a\u66f8\u304d (Overwrite Materials)"}),"\n",(0,t.jsx)(s.p,{children:"\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u307e\u305f\u306f\u518d\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u30e2\u30c7\u30eb\u304b\u3089\u4f5c\u6210\u3055\u308c\u305f\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u4e0a\u66f8\u304d\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002\u65e2\u5b58\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u6b8b\u3059\u3053\u3068\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"overwrite-textures",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4e0a\u66f8\u304d (Overwrite Textures)"}),"\n",(0,t.jsx)(s.p,{children:"\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u307e\u305f\u306f\u518d\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u30e2\u30c7\u30eb\u304b\u3089\u4f5c\u6210\u3055\u308c\u305f\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u4e0a\u66f8\u304d\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002\u65e2\u5b58\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u65b0\u3057\u3044\u30c6\u30af\u30b9\u30c1\u30e3\u3067\u4e0a\u66f8\u304d\u3059\u308b\u3053\u3068\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"convert-to-glb",children:"GLB\u306b\u5909\u63db (Convert to GLB)"}),"\n",(0,t.jsx)(s.p,{children:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u53e4\u3044\u975e\u63a8\u5968\u306eJSON\u5f62\u5f0f\u3067\u306f\u306a\u304f\u3001GLB\u30e2\u30c7\u30eb\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30bb\u30c3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"import-hierarchy",children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u3080\u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"#convert-to-glb",children:"Convert to GLB"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3068\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u3057\u3066\u30e2\u30c7\u30eb\u5168\u4f53\u306e\u30d5\u30eb\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3092\u542b\u3080Template\u30a2\u30bb\u30c3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u3001\u30a8\u30c7\u30a3\u30bf\u3067\u76f4\u63a5\u64cd\u4f5c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,t.jsx)(s.a,{href:"/user-manual/assets/import-pipeline/import-hierarchy/",children:"\u3053\u3061\u3089"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(s.h3,{id:"mesh-compression",children:"\u30e1\u30c3\u30b7\u30e5\u5727\u7e2e (Mesh Compression)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"#convert-to-glb",children:"Convert to GLB"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u5727\u7e2e\u5f62\u5f0f (compression)\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3084\u518d\u30a4\u30f3\u30dd\u30fc\u30c8\u6642\u306b\u30e1\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3092\u81ea\u52d5\u7684\u306b\u5727\u7e2e\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u306e\u89e3\u51cd\u30b3\u30b9\u30c8\u304c\u82e5\u5e72\u304b\u304b\u308b\u4ee3\u308f\u308a\u306b\u3001GLB\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u3092\u5287\u7684\u306b\u524a\u6e1b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"Draco\u5727\u7e2e\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bDraco WASM\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u306a\u3044\u5834\u5408\u306b\u306f\u3001\u30e2\u30c7\u30eb\u306f\u8aad\u307f\u8fbc\u307e\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)("img",{loading:"lazy",src:"/img/user-manual/assets/import-pipeline/draco-import-button.png",width:"480"}),"\n",(0,t.jsx)(s.h3,{id:"create-fbx-folder",children:"FBX\u30d5\u30a9\u30eb\u30c0\u306e\u4f5c\u6210 (Create FBX Folder)"}),"\n",(0,t.jsx)(s.p,{children:"\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\uff08GLB\u3084FBX\u306a\u3069\uff09\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u969b\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u30a4\u30f3\u30dd\u30fc\u30c8\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u308b\u30a2\u30bb\u30c3\u30c8\uff08\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306a\u3069\uff09\u306e\u305f\u3081\u306b\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u3082\u3057\u73fe\u5728\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u65e2\u306b\u540c\u3058\u540d\u524d\u306e\u30e2\u30c7\u30eb\uff08\u30bd\u30fc\u30b9\uff09\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u305d\u306e\u540d\u524d\u3068\u540c\u3058\u540d\u524d\u306e\u30d5\u30a9\u30eb\u30c0\u304c\u3042\u308b\u5834\u5408\u3001\u65b0\u3057\u3044\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3059\u308b\u4ee3\u308f\u308a\u306b\u65e2\u5b58\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"animation-import-settings",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a4\u30f3\u30dd\u30fc\u30c8\u8a2d\u5b9a (Animation Import Settings)"}),"\n",(0,t.jsxs)(s.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(s.a,{href:"/user-manual/assets/types/animation/",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30bb\u30af\u30b7\u30e7\u30f3"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>l});var t=r(96540);const i={},n=t.createContext(i);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);