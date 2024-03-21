"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3499],{80381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(74848),i=t(28453);const s={title:"Trigger Volumes",sidebar_position:3},o=void 0,a={id:"user-manual/physics/trigger-volumes",title:"Trigger Volumes",description:"Trigger volumes are static collision shapes which can fire events whenever a rigid body enters or leaves their volume. They can be useful to determine when a goal has been scored in a football match or when a race car has reached the finish line.",source:"@site/docs/user-manual/physics/trigger-volumes.md",sourceDirName:"user-manual/physics",slug:"/user-manual/physics/trigger-volumes",permalink:"/user-manual/physics/trigger-volumes",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/trigger-volumes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Trigger Volumes",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Forces and Impulses",permalink:"/user-manual/physics/forces-and-impulses"},next:{title:"Compound Shapes",permalink:"/user-manual/physics/compound-shapes"}},c={},l=[];function u(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Trigger volumes are static collision shapes which can fire events whenever a rigid body enters or leaves their volume. They can be useful to determine when a goal has been scored in a football match or when a race car has reached the finish line."}),"\n",(0,r.jsxs)(n.p,{children:["To create a trigger volume, add a ",(0,r.jsx)(n.a,{href:"/user-manual/scenes/components/collision",children:"collision component"})," to an entity and configure its shape. Do not add a rigidbody component to your trigger volume entity."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Trigger Volume",src:t(96247).A+"",width:"2658",height:"1471"})}),"\n",(0,r.jsx)(n.p,{children:"To check whether a volume has been entered or exited by a rigid body based entity, you need a simple script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var TriggerVolume = pc.createScript('triggerVolume');\n\n// initialize code called once per entity\nTriggerVolume.prototype.initialize = function() {\n    this.entity.collision.on('triggerenter', function (entity) {\n        console.log(entity.name + ' has entered trigger volume.');\n    });\n    this.entity.collision.on('triggerleave', function (entity) {\n        console.log(entity.name + ' has left trigger volume.');\n    });\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},96247:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/trigger-volume-38f91c92ff6d2315144201272b59b92c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);