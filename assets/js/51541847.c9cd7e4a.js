"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6674],{88499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var s=n(74848),i=n(28453);const a={title:"Creating new scripts",sidebar_position:1},r=void 0,c={id:"user-manual/scripting/creating-new",title:"Creating new scripts",description:"To create a new script use the Asset Panel and select New Script. You will be asked to enter a name for for your new script file.",source:"@site/docs/user-manual/scripting/creating-new.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/creating-new",permalink:"/user-manual/scripting/creating-new",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/creating-new.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating new scripts",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"Scripting",permalink:"/user-manual/scripting/"},next:{title:"Code Editor",permalink:"/user-manual/scripting/code-editor"}},o={},p=[{value:"Attaching to a script component",id:"attaching-to-a-script-component",level:2},{value:"Adding a script component at run time",id:"adding-a-script-component-at-run-time",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To create a new script use the Asset Panel and select New Script. You will be asked to enter a name for for your new script file."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"New Script",src:n(47050).A+"",width:"370",height:"357"})}),"\n",(0,s.jsx)(t.p,{children:"Double-click the script asset in the panel to open it in the code editor."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Code Editor",src:n(56806).A+"",width:"1574",height:"912"})}),"\n",(0,s.jsx)(t.h2,{id:"attaching-to-a-script-component",children:"Attaching to a script component"}),"\n",(0,s.jsx)(t.p,{children:"The script component is created in the same way as other components. Once you have a script component you can select a script from your asset list."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Select Script",src:n(73086).A+"",width:"534",height:"173"})}),"\n",(0,s.jsx)(t.p,{children:"Scripts are shown by their name, when you select a script to add it to a component, the script content is parsed and any attributes that have been declared are exposed in the interface."}),"\n",(0,s.jsx)(t.h2,{id:"adding-a-script-component-at-run-time",children:"Adding a script component at run time"}),"\n",(0,s.jsx)(t.p,{children:"If you want to dynamically add scripts while your application is running you can do so from the script component"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'var entity = new pc.Entity();\nentity.addComponent("script");\nentity.script.create("rotate", {\n    attributes: {\n        speed: 20\n    }\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:['Note, that the "rotate" script should already have been loaded at this point. You can load a script using the Asset Registry\'s ',(0,s.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.AssetRegistry.html#load",children:"load()"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["To remove a script from a component use the ",(0,s.jsx)(t.code,{children:"destroy"})," method"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'entity.script.destroy("rotate");\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},56806:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/code-editor-new-script-0e8da83066371c4c90688a490af1c698.png"},47050:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/new-script-f41d13ef1ebbb0baaa3246fe22a74512.png"},73086:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/select-script-659b8b7a2a10bb1be1c533158b569b99.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);