"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8714],{43242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(74848),r=n(28453);const i={title:"Button"},o=void 0,c={id:"user-manual/scenes/components/button",title:"Button",description:"The Button Component is a convenient shortcut for creating User Interface buttons for use with Screen and Element Components.",source:"@site/docs/user-manual/scenes/components/button.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/button",permalink:"/user-manual/scenes/components/button",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/button.md",tags:[],version:"current",frontMatter:{title:"Button"},sidebar:"userManualSidebar",previous:{title:"Audio Listener",permalink:"/user-manual/scenes/components/audiolistener"},next:{title:"Camera",permalink:"/user-manual/scenes/components/camera"}},d={},h=[{value:"Common Properties",id:"common-properties",level:2},{value:"Sprite Swap Properties",id:"sprite-swap-properties",level:2},{value:"Tint Properties",id:"tint-properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2}];function a(e){const t={a:"a",em:"em",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The Button Component is a convenient shortcut for creating User Interface buttons for use with ",(0,s.jsx)(t.a,{href:"/user-manual/scenes/components/screen",children:"Screen"})," and ",(0,s.jsx)(t.a,{href:"/user-manual/scenes/components/element",children:"Element"})," Components."]}),"\n",(0,s.jsxs)(t.p,{children:["The Button Component can be used in two Transition Modes. ",(0,s.jsx)(t.em,{children:"Sprite Swap"}),", which uses a different sprite or frame for each button state or ",(0,s.jsx)(t.em,{children:"Tint"}),", which tints a single sprite with a different color for each state."]}),"\n",(0,s.jsx)(t.h2,{id:"common-properties",children:"Common Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Active"}),(0,s.jsx)(t.td,{children:"When enabled the button will respond to and fire event. When disabled the button is set to the Inactive State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Image"}),(0,s.jsx)(t.td,{children:"The Image Element Entity that is used to detect input events."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Hit Padding"}),(0,s.jsx)(t.td,{children:"Additional space around the Image Element that will be included when testing for input events."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Transition Mode"}),(0,s.jsx)(t.td,{children:"The type of effect to use when transitioning between states. Either Sprite Swap or Tint."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"sprite-swap-properties",children:"Sprite Swap Properties"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Sprite Swap Button",src:n(36746).A+"",width:"627",height:"696"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Hover Sprite"}),(0,s.jsx)(t.td,{children:"The Sprite Asset used when the button is in the Hover State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Hover Frame"}),(0,s.jsx)(t.td,{children:"The Sprite Frame to display when the button is in the Hover State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pressed Sprite"}),(0,s.jsx)(t.td,{children:"The Sprite Asset used when the button is in the Pressed State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pressed Frame"}),(0,s.jsx)(t.td,{children:"The Sprite Frame to display when the button is in the Pressed State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Inactive Sprite"}),(0,s.jsx)(t.td,{children:"The Sprite Asset used when the button is not active."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Inactive Frame"}),(0,s.jsx)(t.td,{children:"The Sprite Frame used when the button is not active."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"tint-properties",children:"Tint Properties"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tint Button",src:n(32251).A+"",width:"628",height:"417"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Hover Tint"}),(0,s.jsx)(t.td,{children:"The color to tint the Image Element with when the button is in the Hover State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pressed Tint"}),(0,s.jsx)(t.td,{children:"The color to tint the Image Element with when the button is in the Pressed State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Inactive Tint"}),(0,s.jsx)(t.td,{children:"The color to tint the Image Element with when the button is in the Inactive State."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Fade Duration"}),(0,s.jsx)(t.td,{children:"The time in milliseconds to blend between the different state colors."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,s.jsxs)(t.p,{children:["You can control the properties of a Button component using a ",(0,s.jsx)(t.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The scripting interface for the Button component is ",(0,s.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.ButtonComponent.html",children:"here"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},36746:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/component-button-sprite-change-ec279671c0fc353b977485f87e567e23.png"},32251:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/component-button-tint-301e6d044d8cee33a6176377b052dd42.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);