"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[178],{94095:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(85893),r=i(11151);const a={title:"\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e",sidebar_position:1},t=void 0,l={id:"user-manual/assets/textures/texture-compression",title:"\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e",description:"\u30c6\u30af\u30b9\u30c1\u30e3\u30c7\u30fc\u30bf\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u30d3\u30c7\u30aa\u30e1\u30e2\u30ea(\u307e\u305f\u306fVRAM)\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u30bf\u30d6\u306e\u30af\u30e9\u30c3\u30b7\u30e5\u306a\u3069\u3001\u671b\u307e\u3057\u304f\u306a\u3044\u3053\u3068\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c VRAM \u3092\u4f7f\u3044\u679c\u305f\u3055\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/textures/texture-compression.md",sourceDirName:"user-manual/assets/textures",slug:"/user-manual/assets/textures/texture-compression",permalink:"/ja/user-manual/assets/textures/texture-compression",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/textures/texture-compression.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u30c6\u30af\u30b9\u30c1\u30e3",permalink:"/ja/user-manual/assets/textures/"},next:{title:"Texture Atlas",permalink:"/ja/user-manual/assets/texture-atlas"}},o={},c=[{value:"Basis \u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u306e\u4f7f\u7528",id:"using-basis-texture-compression",level:2},{value:"Basis \u306e\u5236\u9650",id:"basis-limitations",level:2},{value:"\u65e7\u6765\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e",id:"legacy-texture-compression",level:2},{value:"Legacy \u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u304b\u3089 Basis \u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u3078\u306e\u79fb\u884c",id:"migrating-from-legacy-to-basis-texture-compression",level:2}];function u(s){const e={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30c7\u30fc\u30bf\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u30d3\u30c7\u30aa\u30e1\u30e2\u30ea(\u307e\u305f\u306fVRAM)\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u30bf\u30d6\u306e\u30af\u30e9\u30c3\u30b7\u30e5\u306a\u3069\u3001\u671b\u307e\u3057\u304f\u306a\u3044\u3053\u3068\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c VRAM \u3092\u4f7f\u3044\u679c\u305f\u3055\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u30a8\u30c7\u30a3\u30bf\u306b\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u5bfe\u3057\u3066 Basis \u3092\u4f7f\u7528\u3057\u3066\u3001\u640d\u5931\u304c\u3042\u308b\u5727\u7e2e\u30b9\u30ad\u30fc\u30e0\u3092\u9069\u7528\u3057\u3066 VRAM \u4f7f\u7528\u91cf\u3092\u5287\u7684\u306b\u6e1b\u3089\u3059\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://github.com/BinomialLLC/basis_universal",children:"Basis"})," \u306f\u300c\u8d85\u5727\u7e2e\u300d\u3055\u308c\u305f\u30c6\u30af\u30b9\u30c1\u30e3\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30cd\u30a4\u30c6\u30a3\u30d6\u306b\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u5727\u7e2e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5909\u63db\u3067\u304d\u308b\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u975e\u4f9d\u5b58\u306e\u640d\u5931\u306e\u3042\u308b\u30d6\u30ed\u30c3\u30af\u5727\u7e2e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3002\u5bfe\u5fdc\u3059\u308b\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u53ef\u80fd\u306a\u5834\u5408\u306f ASTC\u3001DXT\u3001ETC2\u3001ETC\u3001PVR\u3001ATC \u306e\u9806\u3067\u9078\u629e\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(e.p,{children:"\u6b21\u306e\u3088\u3046\u306aTexture\u30a2\u30bb\u30c3\u30c8\u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/brick.jpg",alt:"Brick Texture",width:"256",height:"256"}),"\n",(0,n.jsx)(e.p,{children:"\u3053\u308c\u306f512x512\u306eJPG\u3067\u30b5\u30a4\u30ba\u306f202KB\u3067\u3059\u3002\u3057\u304b\u3057\u3001JPG\u306f\u5727\u7e2e\u3055\u308c\u305f\u5f62\u5f0f\u3067\u3042\u308a\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30a8\u30f3\u30b8\u30f3\u306b\u6e21\u3055\u308c\u308b\u3068\u89e3\u51cd\u3055\u308c\u305fRGB8\u5f62\u5f0f\u306b\u62e1\u5f35\u3055\u308c\u3001\u30df\u30c3\u30d7\u30de\u30c3\u30d7\u30ec\u30d9\u30eb\u3092\u542b\u3081\u308b\u30681.05MB\u306eVRAM\u3092\u5360\u6709\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7d50\u679c\u304c\u5f97\u3089\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/compression-results.png",alt:"Basis Compression results",width:"400"}),"\n",(0,n.jsx)(e.p,{children:"\u5727\u7e2e\u306b\u3088\u308a\u3001VRAM\u306e\u4f7f\u7528\u91cf\u304c6\u5206\u306e1\u306b\u6e1b\u5c11\u3057\u307e\u3057\u305f\u3002\u3055\u3089\u306b\u3001\u3053\u306e\u5834\u5408\u3001\u5727\u7e2e\u306b\u3088\u308a\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30b5\u30a4\u30ba\u304c202KB\u304b\u3089Default\u54c1\u8cea\u8a2d\u5b9a\u3068ETC\u30e2\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u6700\u5c0f46KB\u307e\u3067\u6e1b\u5c11\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u4ee5\u4e0b\u306b\u3001Mac\u306eChrome\u3067\u306e\u30ec\u30f3\u30ac\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u4e26\u3079\u3066\u6bd4\u8f03\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)("a",{href:"/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-brick.png",target:"_blank",children:(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-brick-thumb.jpg",alt:"Brick texture compression comparison"})}),"\n",(0,n.jsxs)(e.p,{children:["\u4ee5\u4e0b\u306f\u3001Mac\u3068Chrome\u3067 PlayCanvas \u306e\u30ad\u30e5\u30fc\u30d6\u3092 Basis (ETC\u30e2\u30fc\u30c9)",(0,n.jsx)(e.a,{href:"https://playcanv.as/p/j8rsh3eO/",children:"2"})," \u3067\u6bd4\u8f03\u3057\u305f\u3082\u306e\u3068\u3001",(0,n.jsx)(e.a,{href:"https://playcanv.as/p/nAW3WkW8/",children:"\u5727\u7e2e\u3057\u3066\u3044\u306a\u3044\u3082\u306e"}),"\u3067\u3059\u3002"]}),"\n",(0,n.jsx)("a",{href:"/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-cube.png",target:"_blank",children:(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-cube-thumb.jpg",alt:"PlayCanvas cube compression comparison"})}),"\n",(0,n.jsx)(e.h2,{id:"using-basis-texture-compression",children:"Basis \u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u306e\u4f7f\u7528"}),"\n",(0,n.jsx)(e.p,{children:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30a8\u30c7\u30a3\u30bf\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u3089\u3001\u305d\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u9078\u629e\u3057\u3001\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3092\u4e0b\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u3001Compression \u30bb\u30af\u30b7\u30e7\u30f3\u3092\u898b\u3064\u3051\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"BASIS \u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Import Basis \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b Basis \u30e9\u30f3\u30bf\u30a4\u30e0\u306eWASM\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8ffd\u52a0\u3057\u307e\u3059(\u3053\u308c\u306f1\u56de\u3060\u3051\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)\u3002"}),"\n",(0,n.jsx)(e.li,{children:"\u3053\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3067\u5727\u7e2e\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u3092\u6e1b\u3089\u3059\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30e2\u30fc\u30c9\u3092 'ETC (smaller size, lower quality)' \u304b\u3089 'ASTC (larger size, higher quality)' \u306b\u5909\u66f4\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Normal Map \u3092\u5727\u7e2e\u3059\u308b\u5834\u5408\u306f\u3001Normals \u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u3068\u54c1\u8cea\u306e\u30d0\u30e9\u30f3\u30b9\u3092\u53d6\u308b\u305f\u3081\u306b\u3001\u54c1\u8cea\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059\u3002\u54c1\u8cea\u3092\u4e0b\u3052\u308b\u3068\u3001\u3088\u308a\u5c0f\u3055\u306a\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Compress Basis \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/enable-basis-texture-compression.gif",alt:"Enabling Basis Texture Compression",width:"400"}),"\n",(0,n.jsxs)(e.p,{children:["Basis\u306eWASM\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u3001\u30d7\u30ea\u30ed\u30fc\u30c9\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30b5\u30a4\u30ba\u306b\u8ffd\u52a0\u3067253KB\u306egzip\u5727\u7e2e\u30c7\u30fc\u30bf\u3092\u8ffd\u52a0\u3057\u307e\u3059\u304c\u3001\u305d\u308c\u306f\u30ec\u30ac\u30b7\u30fc\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3068\u6bd4\u8f03\u3057\u3066\u30c6\u30af\u30b9\u30c1\u30e3\u30b5\u30a4\u30ba\u306e\u7bc0\u7d04\u306b\u3088\u3063\u3066\u76f8\u6bba\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff08",(0,n.jsx)(e.a,{href:"#legacy-texture-compression",children:"\u4e0b\u8a18\u53c2\u7167"}),"\uff09\u3002"]}),"\n",(0,n.jsx)(e.p,{children:"\u30c6\u30af\u30b9\u30c1\u30e3\u304b\u3089 Basis \u5727\u7e2e\u3092\u524a\u9664\u3059\u308b\u65b9\u6cd5\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"BASIS \u306e\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Compress Basis \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/disable-basis-texture-compression.gif",alt:"Disabling Basis Texture Compression",width:"400"}),"\n",(0,n.jsx)(e.p,{children:"\u3082\u3046 Basis \u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3059\u3079\u3066\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u304b\u3089 Basis \u5727\u7e2e\u3092\u524a\u9664\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089 Basis \u30d5\u30a9\u30eb\u30c0\u3092\u524a\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/delete-basis-library.png",alt:"Delete Basis Module",width:"400"}),"\n",(0,n.jsx)(e.h2,{id:"basis-limitations",children:"Basis \u306e\u5236\u9650"}),"\n",(0,n.jsx)(e.p,{children:"PlayCanvas \u3067 Basis \u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u306b\u306f\u3001\u6b21\u306e\u5236\u9650\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"PVR \u5f62\u5f0f\u306f\u3001\u5e45\u3068\u9ad8\u3055\u304c\u540c\u3058\u6b63\u65b9\u5f62\u3067\u30012\u306e\u7d2f\u4e57\u3067\u3042\u308b(256\u3001512\u30011024\u306a\u3069)\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u65e7\u578b\u306eiOS\u30c7\u30d0\u30a4\u30b9\uff08iPhone 5\u30845C\u306e\u3088\u3046\u306aA6 SoC\u4ee5\u4e0b\u306e\u3082\u306e\uff09\u3084\u53e4\u3044iOS\u30d0\u30fc\u30b8\u30e7\u30f3\uff0813.7\u4ee5\u4e0b\uff09\u306fPVR\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u6b63\u65b9\u5f62\u3067\u306a\u3044\u3001\u307e\u305f\u306f2\u306e\u51aa\u3067\u306a\u3044Basis\u30c6\u30af\u30b9\u30c1\u30e3\u306fPVR\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u30c8\u30e9\u30f3\u30b9\u30b3\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u304c\u3001\u4ee3\u308f\u308a\u306b16\u30d3\u30c3\u30c8565\u30d4\u30af\u30bb\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u305d\u308c\u3067\u3082\u6b63\u3057\u304f\u8868\u793a\u3055\u308c\u307e\u3059\u304c\u3001VRAM\u3092\u3088\u308a\u591a\u304f\u5360\u3081\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Basis\u5727\u7e2e\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u6700\u5927\u5bf8\u6cd5\u306f4096x4096\u3067\u3059\u3002\u3053\u308c\u3088\u308a\u5927\u304d\u306a\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u5727\u7e2e\u306b\u904e\u5ea6\u306a\u6642\u9593\u3092\u8981\u3059\u308b\u305f\u3081\u3001\u3053\u308c\u306f\u7121\u52b9\u5316\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"legacy-texture-compression",children:"\u65e7\u6765\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e"}),"\n",(0,n.jsx)(e.p,{children:"\u53ef\u80fd\u306a\u5834\u5408\u306fBasis\u5727\u7e2e\u3092\u5f37\u304f\u63a8\u5968\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3059\u3079\u3066\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u30ab\u30d0\u30fc\u3059\u308b\u305f\u3081\u306e\u5358\u4e00\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u30d5\u30a1\u30a4\u30eb\u3092\u5fc5\u8981\u3068\u3057\u3001\u307e\u305f\u30ec\u30ac\u30b7\u30fc\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u6bd4\u8f03\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u3082\u306f\u308b\u304b\u306b\u5c0f\u3055\u3044\u304b\u3089\u3067\u3059\u3002\u79c1\u305f\u3061\u306e\u30c6\u30b9\u30c8\u3067\u306f\u3001Basis\u306f\u54c1\u8cea\u306e\u9055\u3044\u304c\u307b\u3068\u3093\u3069\u306a\u3044\u307e\u307e\u3001\u7d04 ~50\uff05\u5c0f\u3055\u304f\u306a\u308b\u3053\u3068\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.p,{children:"\u65e7\u6765\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"DXT:\u901a\u5e38\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30c7\u30d0\u30a4\u30b9\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"PVR:\u901a\u5e38\u3001iOS \u30c7\u30d0\u30a4\u30b9\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"ETC:\u901a\u5e38\u3001Android \u30c7\u30d0\u30a4\u30b9\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Legacy Texture Compression \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u9078\u629e\u3057\u3066\u3001\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067\u5727\u7e2e\u30bb\u30af\u30b7\u30e7\u30f3\u307e\u3067\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"LEGACY \u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"\u4f7f\u3044\u305f\u3044\u3059\u3079\u3066\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Compress Legacy \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/enable-legacy-texture-compression.gif",alt:"Enabling Legacy Texture Compression",width:"400"}),"\n",(0,n.jsx)(e.p,{children:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30921\u3064\u307e\u305f\u306f\u8907\u6570\u524a\u9664\u3059\u308b\u306b\u306f:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u524a\u9664\u3057\u305f\u3044\u3059\u3079\u3066\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Compress Legacy \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/disable-legacy-texture-compression.gif",alt:"Disabling Legacy Texture Compression",width:"400"}),"\n",(0,n.jsx)(e.h2,{id:"migrating-from-legacy-to-basis-texture-compression",children:"Legacy \u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u304b\u3089 Basis \u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u3078\u306e\u79fb\u884c"}),"\n",(0,n.jsx)(e.p,{children:"\u65e2\u306b Legacy Texture Compression \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Basis \u3092\u4f7f\u3046\u3088\u3046\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u6b21\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u3059\u3079\u3066\u306e Legacy \u30c6\u30af\u30b9\u30c1\u30e3\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Basis \u3092\u6709\u52b9\u306b\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/user-manual/assets/textures/texture-compression/migrate-legacy-to-basis.gif",alt:"Migrate from Legacy to Basis",width:"400"})]})}function x(s={}){const{wrapper:e}={...(0,r.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(u,{...s})}):u(s)}},11151:(s,e,i)=>{i.d(e,{Z:()=>l,a:()=>t});var n=i(67294);const r={},a=n.createContext(r);function t(s){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:t(s.components),n.createElement(a.Provider,{value:e},s.children)}}}]);