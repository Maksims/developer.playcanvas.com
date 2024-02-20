"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7033],{67835:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=s(85893),r=s(11151);const a={title:"Exporting Assets",sidebar_position:3},o=void 0,i={id:"user-manual/assets/models/exporting",title:"Exporting Assets",description:"PlayCanvas can import 3D content in the following formats: glTF binary (GLB), FBX, OBJ, 3DS and COLLADA (DAE). We strongly recommend you use GLB as it's an open source industry standard and very well supported in the Editor.",source:"@site/docs/user-manual/assets/models/exporting.md",sourceDirName:"user-manual/assets/models",slug:"/user-manual/assets/models/exporting",permalink:"/user-manual/assets/models/exporting",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/models/exporting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Exporting Assets",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Building Models",permalink:"/user-manual/assets/models/building"},next:{title:"Asset Store",permalink:"/user-manual/assets/asset-store"}},l={},d=[{value:"General export tips",id:"general-export-tips",level:2},{value:"Tips for Exporting to GLB",id:"tips-for-exporting-to-glb",level:2},{value:"Tips for Exporting to FBX",id:"tips-for-exporting-to-fbx",level:2}];function p(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"PlayCanvas can import 3D content in the following formats: glTF binary (GLB), FBX, OBJ, 3DS and COLLADA (DAE). We strongly recommend you use GLB as it's an open source industry standard and very well supported in the Editor."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/user-manual/assets/models/building/glb-import.gif",alt:"GLB Import Example"})}),"\n",(0,n.jsxs)(t.p,{children:["(Model by Lo\xefc Norgeot and mosquito scan by Geoffrey Marchal for ",(0,n.jsx)(t.a,{href:"https://sketchfab.com/3d-models/",children:"Sketchfab"})," licensed under ",(0,n.jsx)(t.a,{href:"https://creativecommons.org/licenses/by/4.0/",children:"CC BY 4.0"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"If GLB is not available, then please use FBX as it is a robust and well tested interchange industry format."}),"\n",(0,n.jsx)(t.h2,{id:"general-export-tips",children:"General export tips"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only export what you need from your scene. For example, if your scene contains a red car and a blue car but you only want to import the red car, export only the red car. Your modeling application should have an 'Export Selected' or similar option."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"tips-for-exporting-to-glb",children:"Tips for Exporting to GLB"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Set the format to glTF Binary (GLB)."}),"\n",(0,n.jsx)(t.li,{children:"Ensure that materials and images are set to be exported and embedded in the GLB. Otherwise, you must upload all scene textures separately and relink all textures to materials and re-configure the materials parameters."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"tips-for-exporting-to-fbx",children:"Tips for Exporting to FBX"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure you have the latest available FBX exporter for your modelling application installed."}),"\n",(0,n.jsx)(t.li,{children:"Select the 'Embed Media' option in the FBX exporter panel. This packages the scene's textures in the exported FBX. This preserves material to textures links during import into PlayCanvas. Otherwise, you must upload all scene textures separately and relink all textures to materials."}),"\n",(0,n.jsx)(t.li,{children:"Select the 'Binary' file format option in the FBX exporter panel. This reduces FBX file size considerably."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(67294);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);