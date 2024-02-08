"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7027],{82845:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var i=a(85893),n=a(11151);const t={title:"Physical Materials",sidebar_position:1},l=void 0,r={id:"user-manual/graphics/physical-rendering/physical-materials",title:"Physical Materials",description:"To use Physically Based Rendering in PlayCanvas you will need to understand how the Physical Material is configured and what effect altering the various parameters will have.",source:"@site/docs/user-manual/graphics/physical-rendering/physical-materials.md",sourceDirName:"user-manual/graphics/physical-rendering",slug:"/user-manual/graphics/physical-rendering/physical-materials",permalink:"/user-manual/graphics/physical-rendering/physical-materials",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/physical-rendering/physical-materials.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Physical Materials",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"Physically Based Rendering",permalink:"/user-manual/graphics/physical-rendering/"},next:{title:"Image Based Lighting",permalink:"/user-manual/graphics/physical-rendering/image-based-lighting"}},o={},h=[{value:"Image Based Lighting",id:"image-based-lighting",level:2},{value:"Metalness and Specular Workflow",id:"metalness-and-specular-workflow",level:2},{value:"Material Properties and Maps",id:"material-properties-and-maps",level:2},{value:"Diffuse",id:"diffuse",level:3},{value:"Metalness",id:"metalness",level:3},{value:"Glossiness",id:"glossiness",level:3},{value:"All together",id:"all-together",level:3}];function c(e){const s={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"To use Physically Based Rendering in PlayCanvas you will need to understand how the Physical Material is configured and what effect altering the various parameters will have."}),"\n",(0,i.jsx)(s.p,{children:"In this section we'll talk about the most useful properties of the material and you can see in the live demos how altering them affects the appearance of a material."}),"\n",(0,i.jsx)(s.p,{children:"First a note about Cubemaps and Workflows"}),"\n",(0,i.jsx)(s.h2,{id:"image-based-lighting",children:"Image Based Lighting"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/user-manual/graphics/physical-rendering/image-based-lighting/",children:"First up IBL"}),", because inevitably you'll jump into the Editor and create Materials and wonder why your materials don't look the like the samples below. ",(0,i.jsx)(s.strong,{children:"Physical Materials with an HDR Prefiltered CubeMap look great!"})]}),"\n",(0,i.jsx)(s.h2,{id:"metalness-and-specular-workflow",children:"Metalness and Specular Workflow"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/graphics/physical-rendering/workflows.jpg",alt:"Workflows"})}),"\n",(0,i.jsx)(s.p,{children:'PBR is often split into two different methods of building assets or workflows. The two workflows are equivalent and offer the same results. It is really down to your preference as to which you choose. At PlayCanvas we usually choose the "metalness" flow as we find the metalness map simpler to create and is as it is only a single channel it is usually more efficient.'}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"metalness"})," workflow involves setting a metalness value or creating a metalness map which determines which areas of the material are metal or non-metal. Usually this is a simple binary choice. 1 for metal, 0 for non-metal. It is not often that you have a value between the two."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"specular"})," workflow involves setting a specular value or creating a specular map which determines the color and intensity of the reflected light for your material."]}),"\n",(0,i.jsxs)(s.p,{children:["There is a good explanation of the differences on the ",(0,i.jsx)(s.a,{href:"https://marmoset.co/posts/pbr-texture-conversion/",children:"Marmoset Toolbag blog"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"On to materials..."}),"\n",(0,i.jsx)(s.h2,{id:"material-properties-and-maps",children:"Material Properties and Maps"}),"\n",(0,i.jsx)(s.h3,{id:"diffuse",children:"Diffuse"}),"\n",(0,i.jsx)(s.p,{children:"The Diffuse Color is the base color of the material. This is an RGB color value. For clean pure (metal, plastic) substances this can be a constant value but it can also be supplied as a diffuse map texture. Note, you should usually avoid including lighting detail (shadows or highlights) in your diffuse map as this can be applied in other maps."}),"\n",(0,i.jsxs)(s.p,{children:["It can also be known as ",(0,i.jsx)(s.strong,{children:"albedo"})," or ",(0,i.jsx)(s.strong,{children:"base color"}),"."]}),"\n",(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/Q28EwTwQ/?color",title:"Physical Materials - Diffuse"})}),"\n",(0,i.jsx)(s.p,{children:"You can often find the charts of recorded values for diffuse/albedo values on the internet."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/graphics/physical-rendering/metals.jpg",alt:"Metals"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Material"}),(0,i.jsx)(s.th,{children:"RGB"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Gold"}),(0,i.jsx)(s.td,{children:"(1.000, 0.766, 0.336) or [255, 195, 86]"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Silver"}),(0,i.jsx)(s.td,{children:"(0.972, 0.960, 0.915) or [248, 245, 233]"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Copper"}),(0,i.jsx)(s.td,{children:"(0.955, 0.637, 0.538) or [244, 162, 137]"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"metalness",children:"Metalness"}),"\n",(0,i.jsxs)(s.p,{children:["The metalness value is part of the ",(0,i.jsx)(s.strong,{children:"metalness"})," workflow. Metalness is a single value between 0-1 which determines if a material is metal (1) or non-metal (0)."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"The metalness value should almost always be 0 or 1. It is rare that you will need a value somewhere between these two."})}),"\n",(0,i.jsx)(s.p,{children:"You can also supply a metalness map which lets you define specific areas of your material as metal or non-metal."}),"\n",(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/Q28EwTwQ/?metal",title:"Physical Materials - Metalness"})}),"\n",(0,i.jsx)(s.h3,{id:"glossiness",children:"Glossiness"}),"\n",(0,i.jsxs)(s.p,{children:["Glossiness is used in both  ",(0,i.jsx)(s.strong,{children:"metalness"})," and ",(0,i.jsx)(s.strong,{children:"specular"})," workflows and it defines how smooth your material surface is. The glossiness will affect how blurry or sharp the reflections on the material are, or how broad or narrow the specular highlights are. Glossiness is provided as a single value between 0-100 or a glossiness map."]}),"\n",(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/Q28EwTwQ/?gloss",title:"Physical Materials - Glossiness"})}),"\n",(0,i.jsxs)(s.p,{children:["Some PBR systems use ",(0,i.jsx)(s.strong,{children:"Roughness"})," instead of Glossiness. The roughness is the inverse of the glossiness. If you need to convert a roughness map to a glossiness map, simply invert it."]}),"\n",(0,i.jsxs)(s.p,{children:["Sometimes glossiness and roughness are referred to as the ",(0,i.jsx)(s.strong,{children:"microsurface"})," value."]}),"\n",(0,i.jsx)(s.h3,{id:"all-together",children:"All together"}),"\n",(0,i.jsxs)(s.p,{children:["These three properties ",(0,i.jsx)(s.strong,{children:"diffuse"}),", ",(0,i.jsx)(s.strong,{children:"metalness"})," and ",(0,i.jsx)(s.strong,{children:"glossiness"})," are the core of the physical material system. You can try different combinations in the live demo below."]}),"\n",(0,i.jsx)(s.p,{children:"There are many other additional properties to investigate that can be used to make great materials such as Ambient Occlusion, Emissive, Opacity, Normal and Height maps."}),"\n",(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/Q28EwTwQ/",title:"Physical Materials - All"})})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>l});var i=a(67294);const n={},t=i.createContext(n);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);