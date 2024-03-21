"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[520],{12784:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(74848),a=i(28453);const s={title:"Image Based Lighting",sidebar_position:2},r=void 0,o={id:"user-manual/graphics/physical-rendering/image-based-lighting",title:"Image Based Lighting",description:"To get best results with Physically Based Rendering in PlayCanvas you can use the technique called Image Based Lighting or IBL, it allows to use pre-rendered image data as source information for ambient and reflection light.",source:"@site/docs/user-manual/graphics/physical-rendering/image-based-lighting.md",sourceDirName:"user-manual/graphics/physical-rendering",slug:"/user-manual/graphics/physical-rendering/image-based-lighting",permalink:"/user-manual/graphics/physical-rendering/image-based-lighting",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/physical-rendering/image-based-lighting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Image Based Lighting",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Physical Materials",permalink:"/user-manual/graphics/physical-rendering/physical-materials"},next:{title:"3D Gaussian Splatting",permalink:"/user-manual/graphics/gaussian-splatting"}},l={},c=[{value:"HDR",id:"hdr",level:2},{value:"Energy Conservation",id:"energy-conservation",level:2},{value:"Authoring Environment Maps",id:"authoring-environment-maps",level:2},{value:"Rendering CubeMap",id:"rendering-cubemap",level:2},{value:"Applying IBL",id:"applying-ibl",level:2},{value:"Box Projection Mapping",id:"box-projection-mapping",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"To get best results with Physically Based Rendering in PlayCanvas you can use the technique called Image Based Lighting or IBL, it allows to use pre-rendered image data as source information for ambient and reflection light."}),"\n",(0,t.jsxs)(n.p,{children:["This technique relies on ",(0,t.jsx)(n.a,{href:"/user-manual/assets/types/cubemap/",children:"CubeMap"})," - the environment map that is made of 6 texture (faces) forming a cube to have full surround texture coverage."]}),"\n",(0,t.jsx)(n.h2,{id:"hdr",children:"HDR"}),"\n",(0,t.jsx)(n.p,{children:'Image data can be stored in LDR or HDR (High Dynamic Range) color space, which allows to store more than 0.0 to 1.0 (256 gradations) in single channel. HDR allows to store values above 1.0 (what is considered "white"), with combination of many factors of environment such as gamma correction, tone mapping and exposure  it allows to contain more light details and provide much better control over light quality and desirable results to artists.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"HDR vs LDR CubeMap for Image Based Rendering",src:i(52240).A+"",width:"800",height:"418"})}),"\n",(0,t.jsx)(n.p,{children:"Notice how bright parts in the texture are clamped using LDR."}),"\n",(0,t.jsx)(n.h2,{id:"energy-conservation",children:"Energy Conservation"}),"\n",(0,t.jsx)(n.p,{children:"The concept is derived from the fact that the diffuse light and the reflected light all come from the light hitting the material, the sum of diffuse and reflected light can not be more than the total light hitting the material. In practice this means that if a surface is highly reflective it will show very little diffuse color. And the opposite, if a material has a bright diffuse color, it can not reflect much."}),"\n",(0,t.jsx)(n.p,{children:"In nature, smoother surfaces have sharper reflections and rougher surfaces have blurrier. The reason for that is basically that rougher surfaces have larger, more prominent microfacets, reflecting light in many directions, while smooth surfaces tend to reflect it mostly in one direction. When light coming from different directions is averaged inside a tiny visible point, the result looks blurry to us, and also less bright, thanks to energy conservation. PlayCanvas simulates this behavior with the glossiness parameter, which works automatically for lights, however, for IBL we must precalculate the correct blurred response in advance. This is what the Prefilter button does."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Prefilter"})," button is available on CubeMap asset in the Inspector, it is mandatory to enable IBL on physical materials using a CubeMap."]}),"\n",(0,t.jsx)(n.h2,{id:"authoring-environment-maps",children:"Authoring Environment Maps"}),"\n",(0,t.jsx)(n.p,{children:"Environment Maps comes in different projections: equirectangular, CubeMap (face list), azimuthal and many others. WebGL and GPU works with face list - set of 6 textures representing sides of a cube - CubeMap. So environment map should be converted into 6 textures if it comes in any other projection."}),"\n",(0,t.jsxs)(n.p,{children:["In order to convert between projections you can use various tools, one of them is cross-platform open-source CubeMap filtering tool: ",(0,t.jsx)(n.a,{href:"https://github.com/dariomanesku/cmftStudio",children:"cmftStudio"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["CubeMaps can be CGI rendered or assembled from photography, and there are websites to download/buy HDR environment maps. Some of good sources for experimenting can be: ",(0,t.jsx)(n.a,{href:"http://www.hdrlabs.com/sibl/archive.html",children:"sIBL Archive"}),", ",(0,t.jsx)(n.a,{href:"http://noemotionhdrs.net/",children:"No Emotion HDR's"}),", ",(0,t.jsx)(n.a,{href:"https://www.openfootage.net/?tag=hdri",children:"Open Footage"}),", ",(0,t.jsx)(n.a,{href:"https://www.pauldebevec.com/Probes/",children:"Paul Debevec"}),". Environment maps can come in equirectangular projection and convertible by cmftStudio mentioned above."]}),"\n",(0,t.jsx)(n.h2,{id:"rendering-cubemap",children:"Rendering CubeMap"}),"\n",(0,t.jsx)(n.p,{children:"CubeMap is made of 6 faces, each representing square side of a cube, simply put: it can be rendered using square viewport camera, by rotating it in different 90 degrees directions with 90 degrees field of view."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CubeMap Faces",src:i(29845).A+"",width:"600",height:"450"})}),"\n",(0,t.jsxs)(n.p,{children:["You can use popular 3D modelling tools, or photography and 360 Imagery software. They should be rendered in linear gamma space and without color corrections that is described in ",(0,t.jsx)(n.a,{href:"/user-manual/graphics/lighting/lightmapping/#gamma-correction",children:"Lightmapping Gamma Correction section"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["One of the plugins for 3D Studio Max such as ",(0,t.jsx)(n.a,{href:"http://www.scriptspot.com/3ds-max/scripts/vray-cubemap-generator-for-unity",children:"this"})," can be used to render VRay CubeMap Faces, ready to be uploaded into PlayCanvas Editor."]}),"\n",(0,t.jsx)(n.h2,{id:"applying-ibl",children:"Applying IBL"}),"\n",(0,t.jsx)(n.p,{children:"This can be done using two methods:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Use CubeMap as Skybox in Scene Settings."}),"\n",(0,t.jsx)(n.li,{children:"Use CubeMap as environment map on the Material directly."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"box-projection-mapping",children:"Box Projection Mapping"}),"\n",(0,t.jsx)(n.p,{children:"This technique changes the projection of environment map which allows to specify box within the space so CubeMap corresponds to its bounds. The most common use is to simulate reflections on surfaces within room scale environment."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Material CubeMap Box Projection",src:i(76852).A+"",width:"306",height:"307"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Here is an ",(0,t.jsx)(n.a,{href:"https://playcanv.as/p/zdkARz26/",children:"example"})," and ",(0,t.jsx)(n.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"project"})," of the scene using CubeMap Box Projection. Notice the reflection on the wooden floor from the windows and the subtle reflection on the ceiling, as well as the reflection of the room on the metal PlayCanvas logo on the wall on the right. This is a dynamic effect and can provide very realistic reflections and control to the artist of how surfaces reflect the room environment."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://playcanv.as/p/zdkARz26/",children:(0,t.jsx)(n.img,{alt:"Environment Box Projection Mapping",src:i(82958).A+"",width:"800",height:"450"})})}),"\n",(0,t.jsx)(n.p,{children:"The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},82958:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/playcanvas-lightmapping-scene-839426fc6835a0b39b941115c90cc21e.jpg"},76852:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cubemap-box-projection-5f86a77a6c023a679baf3348351163cd.png"},29845:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cubemap-faces-33df09fbabc7f0c01c77c78ade45a890.jpg"},52240:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ibl-hdr-ldr-1d70e5bde2357268007e5a5c0d3431ad.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);