"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2862],{89160:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(74848),a=t(28453);const s={title:"Lightmapping",sidebar_position:3},o=void 0,l={id:"user-manual/graphics/lighting/lightmapping",title:"Lightmapping",description:"PlayCanvas Lightmapping",source:"@site/docs/user-manual/graphics/lighting/lightmapping.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/lightmapping",permalink:"/user-manual/graphics/lighting/lightmapping",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/lightmapping.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Lightmapping",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Shadows",permalink:"/user-manual/graphics/lighting/shadows"},next:{title:"Ambient Occlusion",permalink:"/user-manual/graphics/lighting/ambient-occlusion"}},r={},d=[{value:"Overview",id:"overview",level:2},{value:"External Lightmap Generation",id:"external-lightmap-generation",level:2},{value:"Tools",id:"tools",level:2},{value:"Gamma Correction",id:"gamma-correction",level:2},{value:"UV Mapping",id:"uv-mapping",level:2},{value:"Simple Geometry",id:"simple-geometry",level:3},{value:"Consistent Texel Size",id:"consistent-texel-size",level:3},{value:"Non-overlapping UV",id:"non-overlapping-uv",level:3},{value:"Other Tips",id:"other-tips",level:2},{value:"Render To Texture",id:"render-to-texture",level:2},{value:"Noise",id:"noise",level:2},{value:"Upload to Editor",id:"upload-to-editor",level:2},{value:"Final remarks",id:"final-remarks",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://playcanv.as/p/zdkARz26/",children:(0,n.jsx)(i.img,{alt:"PlayCanvas Lightmapping",src:t(82958).A+"",width:"800",height:"450"})}),"\n",(0,n.jsx)(i.em,{children:"The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)"})]}),"\n",(0,n.jsxs)(i.p,{children:["Here is the link to ",(0,n.jsx)(i.a,{href:"https://playcanv.as/p/zdkARz26/",children:"final scene"})," and ",(0,n.jsx)(i.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"project"})," that uses these techniques to achieve results in image above: External HDR Lightmaps (described in this page below), ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/lighting/ambient-occlusion/",children:"Ambient Occlusion"})," and HDR Cubemap applied using Box Projection using ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/physical-rendering/image-based-lighting/",children:"Image Based Lighting"})," technique to achieve realistic reflections."]}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"Lightmap generation is the process of pre-calculating lighting information for a static scene and storing it in textures which are then applied on materials. This is an efficient way of lighting a scene if many of the light sources and geometry are static or environmental."}),"\n",(0,n.jsxs)(i.p,{children:["PlayCanvas offers two ways to use lightmaps in your scene: ",(0,n.jsx)(i.strong,{children:"External lightmap generation"})," using a 3rd-party tool and ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/lighting/runtime-lightmaps/",children:(0,n.jsx)(i.strong,{children:"Runtime Lightmapping"})})," that can be generated automatically by the Engine on loading or later while application is running."]}),"\n",(0,n.jsx)(i.p,{children:"This page gives details and best practices on rendering lightmaps from external tools."}),"\n",(0,n.jsx)(i.h2,{id:"external-lightmap-generation",children:"External Lightmap Generation"}),"\n",(0,n.jsx)(i.p,{children:"Many 3D content tools have ways to generate lightmap textures. For example, 3ds Max, Maya, Blender and other tools all have ways to bake lightmaps into textures. The advantages of using an offline tool for lightmap generation is that you can use very sophisticated lighting calculations like Global Illumination for bounce lighting, soft shadows, ambient occlusion, etc. The major disadvantage is that you have to have a complete representation of your scene inside the 3D tool. So if your PlayCanvas scene is made up of lots of instances positioned in the Editor, you need to re-create this inside your lightmapping tool."}),"\n",(0,n.jsx)(i.p,{children:"Once you have created lightmaps using an external tool you simply upload them as regular texture assets and they can be added to your materials using the lightmap slot in the standard Physical Material."}),"\n",(0,n.jsx)(i.h2,{id:"tools",children:"Tools"}),"\n",(0,n.jsx)(i.p,{children:"In this page we will use 3ds Max with VRay to generate lightmaps, but the same functionality is achievable with any other similar modeling tools."}),"\n",(0,n.jsx)(i.h2,{id:"gamma-correction",children:"Gamma Correction"}),"\n",(0,n.jsx)(i.p,{children:"When rendering Lightmaps or CubeMaps they should be rendered in Linear Space to ensure color curves are not affected by gamma correction twice. The PlayCanvas Engine will apply gamma correction during real-time rendering."}),"\n",(0,n.jsx)(i.p,{children:"In 3ds Max this option (Enable Gamma/LUT Correction) should be disabled and can be found in Preference Settings (Customize > Preferences):"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"3ds Max &gt; Preferences &gt; Linear Space",src:t(4120).A+"",width:"600",height:"636"})}),"\n",(0,n.jsx)(i.p,{children:'Then make sure Color Mapping is updated. It can be found in Render Settings (F10, or from Render to Texture window). Output should not be clamped, and not post-processed (Mode option), Linear Multiply should be used for linear color space.\nHere is a screenshot of what options should be set to what values, click the "Default" button to expand settings to "Expert":'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"3D&#39;s Max &gt; Render Settings",src:t(28783).A+"",width:"330",height:"165"})}),"\n",(0,n.jsx)(i.h2,{id:"uv-mapping",children:"UV Mapping"}),"\n",(0,n.jsx)(i.p,{children:"In order to apply a lightmap texture on geometry we need to unwrap it first. Here are some practices that will help you to get good lightmap friendly UV's."}),"\n",(0,n.jsx)(i.h3,{id:"simple-geometry",children:"Simple Geometry"}),"\n",(0,n.jsx)(i.p,{children:"A smaller area of geometry is better. Try to minimize the area of triangles and eliminate non-visible triangles. A larger area will reduce lightmap detail, require larger textures and sometimes multiple assets."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Lighmapping Tips: Simple Geometry",src:t(40638).A+"",width:"800",height:"319"})}),"\n",(0,n.jsx)(i.h3,{id:"consistent-texel-size",children:"Consistent Texel Size"}),"\n",(0,n.jsx)(i.p,{children:"Keep texels in UV unstretched and consistent in size with other texels within same geometry. This is to ensure that level of detail in lightmap texture is consistent within the scene. Some variations of texel size could be applied when geometry will be seen from up close or in the far distance as required by artistic and optimization decisions."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Lighmapping Tips: UV Consistent Texel Size",src:t(66208).A+"",width:"800",height:"298"})}),"\n",(0,n.jsx)(i.h3,{id:"non-overlapping-uv",children:"Non-overlapping UV"}),"\n",(0,n.jsx)(i.p,{children:"Triangles in UV should not overlap to ensure each pixel has a unique position in 3D space on geometry so it can store its own illumination information appropriately. UV space for lightmaps is clamped, meaning that UV will be contained between 0.0 and 1.0 and will not tile outside."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Lighmapping Tips: Non-overlapping UV",src:t(98513).A+"",width:"800",height:"303"})}),"\n",(0,n.jsx)(i.h2,{id:"other-tips",children:"Other Tips"}),"\n",(0,n.jsx)(i.p,{children:"To get good lightmap results we need to ensure that rendering is based only on data that is relevant to light propagation and not to the point of view of camera during rendering."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Disable normal maps"})," on materials - micro surface details are too tiny to be relevant in lightmap textures."]}),"\n",(0,n.jsxs)(i.li,{children:["Set ",(0,n.jsx)(i.strong,{children:"Reflection to 0"})," and ",(0,n.jsx)(i.strong,{children:"Disable Gloss Maps"})," on materials - reflection can lead to caustics and complications for renderers, leading to visual artifacts. Generally lightmaps should contain only diffuse lighting and reflectivity should be implemented using some runtime technique."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Very dark materials won't produce good results"})," as they do not reflect light much and so will not assist Global Illumination."]}),"\n",(0,n.jsxs)(i.li,{children:["In the Render To Texture window (see below) set ",(0,n.jsx)(i.strong,{children:"Padding"})," to larger value."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Light can leak"})," from behind the geometry, add blocking geometry to prevent light."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Lighmapping Light Leaking",src:t(80283).A+"",width:"400",height:"927"})}),"\n",(0,n.jsx)(i.h2,{id:"render-to-texture",children:"Render To Texture"}),"\n",(0,n.jsx)(i.p,{children:"To get illumination data out of the modeling tool we want to render the light data into a texture. We can specify resolution and format for it."}),"\n",(0,n.jsxs)(i.p,{children:["In 3ds Max this is done using the Render To Texture window. Where Padding needs to be set to larger value; selected 2nd UV Channel; and Output profile depending on your renderer, in screenshot below ",(0,n.jsx)(i.code,{children:"VRayRawTotalLightingMap"})," is used."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Render To Texture: PlayCanvas Lightmapping",src:t(65673).A+"",width:"558",height:"1295"})}),"\n",(0,n.jsx)(i.h2,{id:"noise",children:"Noise"}),"\n",(0,n.jsx)(i.p,{children:"Depending on the quality and time of rendering in some situations the illumination data in the output might be not perfect and suffer from noise. This is easily solvable by applying some blur to the image that will not blur the edges in texture but will smoothen plain sections. In Photoshop this is done using Surface Blur filter:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Lightmapping: Photoshop &gt; Surface Blur",src:t(65558).A+"",width:"400",height:"682"})}),"\n",(0,n.jsx)(i.h2,{id:"upload-to-editor",children:"Upload to Editor"}),"\n",(0,n.jsx)(i.p,{children:"At this stage you have your geometry with a second UV channel (UV1) and HDR lightmap textures and it is time to upload them to your PlayCanvas scene and setup the materials. This is done by drag 'n' dropping the files or using the upload button in assets panel. After you've uploaded your geometry it will auto-generate materials. For each material that a lightmap is rendered for you need to set the lightmap texture. Simply select all required materials and drag'n'drop or pick lightmap texture for the Lightmap slot."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"PlayCanvas Editor: Material Lightmap Texture Slot",src:t(26883).A+"",width:"306",height:"146"})}),"\n",(0,n.jsx)(i.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,n.jsx)(i.p,{children:"Gamma correction, tone mapping and exposure - are good settings that you will want to play with to get the desired look and color for your scene."}),"\n",(0,n.jsxs)(i.p,{children:["You can ",(0,n.jsx)(i.a,{href:"https://playcanv.as/p/zdkARz26/",children:"explore the example"})," that uses the techniques described above and also its ",(0,n.jsx)(i.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"project"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4120:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/3ds-max-preferences-fef399133705691ed7589b4d42861847.png"},28783:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/png;base64,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"},65673:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/3ds-max-render-to-texture-window-a883447c11290404608d3376bf0eca84.png"},80283:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/lightmapping-light-leak-00e37ceff23603114d9d5143fd8bd072.jpg"},26883:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/lightmapping-material-slot-932da6d087715ac3963fcb684a5f7950.png"},65558:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/lightmapping-surface-blur-7cccf4dcaa2ed80e2a6bd081c838dc45.jpg"},82958:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/playcanvas-lightmapping-scene-839426fc6835a0b39b941115c90cc21e.jpg"},66208:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/uv-consistency-106ecdde67f70e75071f4864595bf188.jpg"},40638:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/uv-geometry-81a905575cb8d050928e5171fa1c14a6.jpg"},98513:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/uv-overlapping-ac340c97a51edee545af986645fe9cd9.jpg"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>l});var n=t(96540);const a={},s=n.createContext(a);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);