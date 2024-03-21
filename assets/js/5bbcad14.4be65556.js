"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7999],{92068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(74848),a=t(28453);const s={title:"Light Estimation",sidebar_position:1},r=void 0,o={id:"user-manual/xr/ar/light-estimation",title:"Light Estimation",description:"In AR, the real world can have complex illumination and various environments. For better immersion and the ability to blend between the real and the virtual world, virtual objects can be shaded and illuminated based on Light Estimation data, such as:",source:"@site/docs/user-manual/xr/ar/light-estimation.md",sourceDirName:"user-manual/xr/ar",slug:"/user-manual/xr/ar/light-estimation",permalink:"/user-manual/xr/ar/light-estimation",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/light-estimation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Light Estimation",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"Image Tracking",permalink:"/user-manual/xr/ar/image-tracking"},next:{title:"Mesh Detection",permalink:"/user-manual/xr/ar/mesh-detection"}},l={},c=[{value:"Support",id:"support",level:2},{value:"Directional Light",id:"directional-light",level:2},{value:"Ambient Light",id:"ambient-light",level:2},{value:"Reflections",id:"reflections",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In AR, the real world can have complex illumination and various environments. For better immersion and the ability to blend between the real and the virtual world, virtual objects can be shaded and illuminated based on Light Estimation data, such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Directional light"})," (the most prominent), its rotation, intensity and color."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ambient light"})," in the form of L3 spherical harmonics."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reflections"})," in the form of a cube map (",(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/engine/issues/6070",children:"currently not integrated"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,i.jsx)(n.p,{children:"You can check if light estimation is supported by the system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.lightEstimation.supportedColor) {\n    // light estimation access is supported\n}\n\napp.xr.lightEstimation.on('available', () => {\n    // light estimation becomes available\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"directional-light",children:"Directional Light"}),"\n",(0,i.jsx)(n.p,{children:"The most basic information that light estimation provides is the most prominent directional light rotation, intensity and color:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const lightEstimation = app.xr.lightEstimation;\n\n// check if light estimation is available\nif (lightEstimation.available) {\n    // rotate entity\n    entity.setRotation(lightEstimation.rotation());\n\n    // set light parameters\n    entity.light.intensity = lightEstimation.intensity;\n    entity.light.color = lightEstimation.color;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ambient-light",children:"Ambient Light"}),"\n",(0,i.jsx)(n.p,{children:"As the environment is usually much more complex than a single directional light, light estimation provides ambient light information in the form of L3 SH (spherical harmonics)."}),"\n",(0,i.jsxs)(n.p,{children:["To use SH, the material either has a prefiltered cube map applied (scene skybox works also), or the constant ambient shader chunk (",(0,i.jsx)(n.code,{children:"ambientConstantPS"}),") should be updated."]}),"\n",(0,i.jsx)(n.p,{children:"You can set SH data per material:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.lightEstimation.available) {\n    material.setParameter('ambientSH[0]', app.xr.lightEstimation.sphericalHarmonics);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"If there is no prefiltered cube map or skybox on the scene, you can update the material chunk:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"material.chunks.ambientConstantPS = chunkCode;\nmaterial.update();\n"})}),"\n",(0,i.jsx)(n.p,{children:"Shader chunk code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-glsl",children:"uniform vec3 ambientSH[9];\n\nvoid addAmbient(vec3 worldNormal) {\n    vec3 n = worldNormal;\n\n    vec3 color =\n        ambientSH[0] +\n        ambientSH[1] * n.x +\n        ambientSH[2] * n.y +\n        ambientSH[3] * n.z +\n        ambientSH[4] * n.x * n.z +\n        ambientSH[5] * n.z * n.y +\n        ambientSH[6] * n.y * n.x +\n        ambientSH[7] * (3.0 * n.z * n.z - 1.0) +\n        ambientSH[8] * (n.x * n.x - n.y * n.y);\n\n    dDiffuseLight += color;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reflections",children:"Reflections"}),"\n",(0,i.jsxs)(n.p,{children:["WebXR Light Estimation provides an estimation of the environment reflection in form of a cube map, but ",(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/engine/issues/6070",children:"at the moment"})," it is not integrated into PlayCanvas Engine."]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);