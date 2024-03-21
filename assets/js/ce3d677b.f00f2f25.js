"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4416],{9417:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var s=a(74848),n=a(28453);const t={title:"Depth Layer",sidebar_position:2},c=void 0,o={id:"user-manual/graphics/cameras/depth-layer",title:"Depth Layer",description:"Some rendering techniques require access to the depth or the color buffer of the scene for a specific camera. The Depth Layer is a special layer, which can be added to the layers property of a camera. The order of the layers defines at which point during the rendering, the depth or the color buffer is captured. The captured buffers can then be used in the following layers of the camera.",source:"@site/docs/user-manual/graphics/cameras/depth-layer.md",sourceDirName:"user-manual/graphics/cameras",slug:"/user-manual/graphics/cameras/depth-layer",permalink:"/user-manual/graphics/cameras/depth-layer",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/cameras/depth-layer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Depth Layer",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Cameras",permalink:"/user-manual/graphics/cameras/"},next:{title:"Lighting",permalink:"/user-manual/graphics/lighting/"}},i={},h=[{value:"Buffer access",id:"buffer-access",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Some rendering techniques require access to the depth or the color buffer of the scene for a specific camera. The Depth Layer is a special layer, which can be added to the ",(0,s.jsx)(r.code,{children:"layers"})," property of a camera. The ",(0,s.jsx)(r.a,{href:"/user-manual/graphics/layers/#choosing-the-layer-order",children:(0,s.jsx)(r.code,{children:"order"})})," of the layers defines at which point during the rendering, the depth or the color buffer is captured. The captured buffers can then be used in the following layers of the camera."]}),"\n",(0,s.jsx)(r.p,{children:"Typically, those buffers are captured after all opaque layers are rendered and can be used in following transparent layers or post-processing."}),"\n",(0,s.jsx)(r.p,{children:"Additionally, to capture these buffers, the capture needs to be enabled on a CameraComponent from a script:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://api.playcanvas.com/classes/Engine.CameraComponent.html#requestSceneColorMap",children:(0,s.jsx)(r.code,{children:"requestSceneColorMap"})})," to request a color map"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://api.playcanvas.com/classes/Engine.CameraComponent.html#requestSceneDepthMap",children:(0,s.jsx)(r.code,{children:"requestSceneDepthMap"})})," to request a depth map"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"buffer-access",children:"Buffer access"}),"\n",(0,s.jsx)(r.p,{children:"To access one of these buffers in the shader as a texture, these are the uniform names to be used:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["for the color map: ",(0,s.jsx)(r.code,{children:"uSceneColorMap"})]}),"\n",(0,s.jsxs)(r.li,{children:["for the depth map: ",(0,s.jsx)(r.code,{children:"uSceneDepthMap"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:"These engine examples demonstrate the rendering of both the depth and the color map, and also custom shaders allowing their use:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["GrabPass demonstrates the use of the color buffer: ",(0,s.jsx)(r.a,{href:"https://playcanvas.github.io/#/graphics/grab-pass",children:(0,s.jsx)(r.code,{children:"GrabPass"})})]}),"\n",(0,s.jsxs)(r.li,{children:["GroundFog demonstrates the use of the depth buffer: ",(0,s.jsx)(r.a,{href:"https://playcanvas.github.io/#/graphics/ground-fog",children:(0,s.jsx)(r.code,{children:"GroundFog"})})]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>c,x:()=>o});var s=a(96540);const n={},t=s.createContext(n);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);