"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[46],{71551:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(74848),t=n(28453);const a={title:"\u30c7\u30d0\u30a4\u30b9\u30d4\u30af\u30bb\u30eb\u6bd4\u7387 (DPI)",sidebar_position:6},s=void 0,c={id:"user-manual/optimization/runtime-devicepixelratio",title:"\u30c7\u30d0\u30a4\u30b9\u30d4\u30af\u30bb\u30eb\u6bd4\u7387 (DPI)",description:"\u30c7\u30d0\u30a4\u30b9\u30d4\u30af\u30bb\u30eb\u6bd4\u7387(Device Pixel Ratio)\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u7269\u7406\u7684\u306a\u30d4\u30af\u30bb\u30eb\u3068\u3001\u8ad6\u7406\u7684\u306a\u30d4\u30af\u30bb\u30eb(\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u7269\u7406\u7684\u306a\u30b5\u30a4\u30ba\u306b\u95a2\u9023\u3057\u305f\u3001CSS\u306b\u3088\u308b)\u306e\u6bd4\u7387\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/optimization/runtime-devicepixelratio.md",sourceDirName:"user-manual/optimization",slug:"/user-manual/optimization/runtime-devicepixelratio",permalink:"/ja/user-manual/optimization/runtime-devicepixelratio",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/runtime-devicepixelratio.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u30c7\u30d0\u30a4\u30b9\u30d4\u30af\u30bb\u30eb\u6bd4\u7387 (DPI)",sidebar_position:6},sidebar:"userManualSidebar",previous:{title:"Mini Stats",permalink:"/ja/user-manual/optimization/mini-stats"},next:{title:"\u30ed\u30fc\u30c9\u6642\u9593\u306e\u6700\u9069\u5316",permalink:"/ja/user-manual/optimization/load-time"}},o={},l=[];function d(e){const i={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"\u30c7\u30d0\u30a4\u30b9\u30d4\u30af\u30bb\u30eb\u6bd4\u7387(Device Pixel Ratio)\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u7269\u7406\u7684\u306a\u30d4\u30af\u30bb\u30eb\u3068\u3001\u8ad6\u7406\u7684\u306a\u30d4\u30af\u30bb\u30eb(\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u7269\u7406\u7684\u306a\u30b5\u30a4\u30ba\u306b\u95a2\u9023\u3057\u305f\u3001CSS\u306b\u3088\u308b)\u306e\u6bd4\u7387\u3067\u3059\u3002"}),"\n",(0,r.jsx)(i.p,{children:"Enabling Device Pixel Ratio on the Project settings will render the application at the native resolution of the screen which will make it look very crisp. However, that comes at a performance cost as now there are more pixels to fill and render each frame."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Project setting",src:n(35986).A+"",width:"534",height:"838"})}),"\n",(0,r.jsx)(i.p,{children:"Below is an example of the Model Viewer Starter Kit with device pixel ratio enabled and disabled. Click on the thumbnail to see the full size."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Device Pixel Ratio",src:n(54193).A+"",width:"1796",height:"902"})}),"\n",(0,r.jsx)(i.p,{children:"\u7406\u60f3\u7684\u306b\u306f\u3001\u9ad8\u6027\u80fd\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u6700\u9ad8\u54c1\u8cea\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u3001\u4f4e\u6027\u80fd\u30c7\u30d0\u30a4\u30b9\u3067\u3042\u3063\u3066\u3082\u30d7\u30ec\u30a4\u53ef\u80fd\u306a\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u6bd4\u7387\u3092\u6e1b\u3089\u305b\u308b\u3001\u4e21\u65b9\u306e\u5229\u70b9\u3092\u517c\u306d\u5099\u3048\u305f\u72b6\u614b\u306b\u3057\u305f\u3044\u3082\u306e\u3067\u3059\u3002"}),"\n",(0,r.jsx)(i.p,{children:"\u7406\u60f3\u7684\u306b\u306f\u3001\u9ad8\u6027\u80fd\u30c7\u30d0\u30a4\u30b9\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u6700\u9ad8\u54c1\u8cea\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u3001\u4f4e\u6027\u80fd\u30c7\u30d0\u30a4\u30b9\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u6bd4\u7387\u3092\u4e0b\u3052\u308b\u3068\u3044\u3046\u3001\u4e21\u65b9\u306e\u826f\u3044\u70b9\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(i.p,{children:["\u30c7\u30d0\u30a4\u30b9\u30d4\u30af\u30bb\u30eb\u6bd4\u306f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3",(0,r.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.GraphicsDevice.html#maxPixelRatio",children:(0,r.jsx)(i.code,{children:"pc.GraphicsDevice#maxPixelRatio"})}),"\u3092\u4f7f\u3063\u3066\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-javascript",children:"var device = pc.Application.getApplication().graphicsDevice;\nif (highTierDevice) {\n    // Use the default device pixel ratio of the device\n    device.maxPixelRatio = window.devicePixelRatio;\n} else {\n    // Use the CSS resolution device pixel ratio\n    device.maxPixelRatio = 1;\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:"\u96e3\u3057\u3044\u306e\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u6027\u80fd\u80fd\u529b\u3092\u898b\u6975\u3081\u308b\u3053\u3068\u3067\u3001\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u65b9\u6cd5\u3067\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u59cb\u6642\u306b\u4f55\u3089\u304b\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3092\u4f7f\u7528\u3057\u3001\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u3092\u89b3\u5bdf\u3059\u308b"}),"\n",(0,r.jsx)(i.li,{children:"WebGL\u30ec\u30f3\u30c0\u30e9\u30fc\u306e\u30c7\u30fc\u30bf\u3092\u7167\u4f1a\u3057\u3066GPU\u306e\u540d\u524d\u3092\u53d6\u5f97\u3057\u3001\u65e2\u77e5\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5c64\u306e\u30ea\u30b9\u30c8\u3068\u7167\u3089\u3057\u5408\u308f\u305b\u308b"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["GPU\u306b\u3064\u3044\u3066\u306e\u60c5\u5831\u3092\u5f97\u308b\u305f\u3081\u306b\u306f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3 ",(0,r.jsx)(i.code,{children:"pc.GraphicsDevice#unmaskedRenderer"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u60c5\u5831\u3092\u542b\u3080\u6587\u5b57\u5217\u3092\u542b\u3080\u304b\u3001\u30d6\u30e9\u30a6\u30b6\u304c\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u7a7a\u306e\u6587\u5b57\u5217\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(i.p,{children:"\u6587\u5b57\u5217\u306b\u306f\u6b21\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-none",children:"ANGLE (NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0)\n"})}),"\n",(0,r.jsxs)(i.p,{children:["\u7570\u306a\u308bGPU\u30ab\u30fc\u30c9\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306f\u3001",(0,r.jsx)(i.a,{href:"https://www.videocardbenchmark.net/GPU_mega_page.html",children:"Video Card Benchmark"}),"\u3084",(0,r.jsx)(i.a,{href:"https://www.notebookcheck.net/Smartphone-Graphics-Cards-Benchmark-List.149363.0.html",children:"Notebook Check Smartphone and Tablet list"}),"\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u5404GPU\u306e\u80fd\u529b\u3092\u5224\u65ad\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u5229\u7528\u53ef\u80fd\u306aGPU\u30ab\u30fc\u30c9\u306e\u6570\u304c\u975e\u5e38\u306b\u591a\u3044\u305f\u3081\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u80fd\u529b\u3092\u8a55\u4fa1\u3059\u308b\u306e\u306f\u975e\u5e38\u306b\u96e3\u3057\u3044\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(i.p,{children:"\u30e2\u30d0\u30a4\u30eb\u306e\u4f8b\u306f\u4ee5\u4e0b\u306b\u3042\u308a\u307e\u3059\uff08\u8a18\u8ff0\u6642\u70b9\u3067\u306e\u60c5\u5831\u30012020\u5e747\u670830\u65e5\uff08\u6728\uff09\uff09\u3002"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-javascript",children:"function isLowQualityGPU() {\n    var renderer = pc.Application.getApplication().graphicsDevice.unmaskedRenderer;\n\n    // Only check the GPU if we are on mobile\n    if (renderer && pc.platform.mobile) {\n        // low level GPU's\n        if(renderer.search(/Adreno\\D*3/) !== -1 ||\n           renderer.search(/Adreno\\D*4/) !== -1 ||\n           renderer.search(/Adreno\\D*505/) !== -1 ||\n           renderer.search(/Adreno\\D*506/) !== -1 ||\n           renderer.search(/Mali\\D*4/) !== -1 ||\n           renderer.search(/Mali\\D*5/) !== -1 ||\n           renderer.search(/Mali\\D*6/) !== -1 ||\n           renderer.search(/Mali\\D*T7/) !== -1 ||\n           renderer.search(/Mali\\D*T82/) !== -1 ||\n           renderer.search(/Mali\\D*T83/) !== -1)\n        {\n            return true;\n        }\n    }\n\n    return false;\n};\n"})}),"\n",(0,r.jsx)(i.p,{children:"\u307e\u305f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u54c1\u8cea\u30ec\u30d9\u30eb\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a2d\u3051\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u81ea\u5206\u304c\u5feb\u9069\u306b\u611f\u3058\u308b\u30ec\u30d9\u30eb\u3092\u9078\u629e\u3057\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u7bc0\u7d04\u3057\u30d0\u30c3\u30c6\u30ea\u30fc\u5bff\u547d\u3092\u5ef6\u3070\u3059\u305f\u3081\u306b\u54c1\u8cea\u3092\u4e0b\u3052\u308b\u3053\u3068\u3082\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},54193:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/device-pixel-ratio-closeup-1c0fe03e8ed3b60a66d334357b68e079.jpg"},35986:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/device-pixel-ratio-setting-704cb52549412773b0389de41cad3187.png"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var r=n(96540);const t={},a=r.createContext(t);function s(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);