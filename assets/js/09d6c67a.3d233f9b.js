"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5063],{79620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(85893),r=a(11151);const s={title:"VR",sidebar_position:21},i=void 0,o={id:"user-manual/xr/vr/index",title:"VR",description:"VR View",source:"@site/docs/user-manual/xr/vr/index.md",sourceDirName:"user-manual/xr/vr",slug:"/user-manual/xr/vr/",permalink:"/user-manual/xr/vr/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/vr/index.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"VR",sidebar_position:21},sidebar:"userManualSidebar",previous:{title:"Zappar Integration",permalink:"/user-manual/xr/ar/zappar-integration"},next:{title:"Types of VR experiences",permalink:"/user-manual/xr/vr/types-of-vr"}},c={},l=[{value:"Platforms",id:"platforms",level:2},{value:"Getting started with WebXR VR",id:"getting-started-with-webxr-vr",level:2},{value:"Starter Kits",id:"starter-kits",level:2}];function p(e){const t={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/user-manual/xr/vr-view.png",alt:"VR View"})}),"\n",(0,n.jsx)(t.p,{children:"PlayCanvas also lets you create Virtual Reality (VR) applications."}),"\n",(0,n.jsx)(t.h2,{id:"platforms",children:"Platforms"}),"\n",(0,n.jsx)(t.p,{children:"VR capabilities are available across various platforms: desktop (Chrome, Edge), mobile (Chrome, Samsung) and HMDs (Oculus, Magic Leap, Pico)."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-webxr-vr",children:"Getting started with WebXR VR"}),"\n",(0,n.jsx)(t.p,{children:"To start a VR session, device support and availability should be checked first. Then, on user interaction such as a button click or other input, a VR session can be started:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"button.element.on('click', function () {\n    // check if XR is supported and VR is available\n    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {\n        // start AR using a camera component\n        entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);\n    }\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once the user is done, VR mode can be exited by calling:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"starter-kits",children:"Starter Kits"}),"\n",(0,n.jsx)(t.p,{children:"PlayCanvas provides a \u2018VR Kit\u2019 project to help you and your VR experience get up and running faster. When creating a new project, simply select \u2018VR Kit\u2019 from the dialog."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var n=a(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);