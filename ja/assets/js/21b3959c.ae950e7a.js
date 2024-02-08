"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5927],{61306:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var l=s(85893),i=s(11151);const o={title:"Collision"},c=void 0,t={id:"user-manual/scenes/components/collision",title:"Collision",description:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30b3\u30ea\u30b8\u30e7\u30f3\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002 'Type'\u5c5e\u6027\u306b\u57fa\u3065\u3044\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306f\u52d5\u7684\u306b\u7570\u306a\u308b\u5c5e\u6027\u3092\u8868\u793a\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scenes/components/collision.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/collision",permalink:"/ja/user-manual/scenes/components/collision",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/collision.md",tags:[],version:"current",frontMatter:{title:"Collision"},sidebar:"userManualSidebar",previous:{title:"Camera",permalink:"/ja/user-manual/scenes/components/camera"},next:{title:"Element",permalink:"/ja/user-manual/scenes/components/element"}},r={},d=[{value:"Box",id:"box",level:4},{value:"Capsule",id:"capsule",level:4},{value:"Compound",id:"compound",level:4},{value:"Cone",id:"cone",level:4},{value:"Cylinder",id:"cylinder",level:4},{value:"Mesh",id:"mesh",level:4},{value:"Sphere",id:"sphere",level:4},{value:"Properties",id:"properties",level:2},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",level:2}];function a(e){const n={a:"a",h2:"h2",h4:"h4",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30b3\u30ea\u30b8\u30e7\u30f3\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002 'Type'\u5c5e\u6027\u306b\u57fa\u3065\u3044\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306f\u52d5\u7684\u306b\u7570\u306a\u308b\u5c5e\u6027\u3092\u8868\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d1\u30cd\u30eb\u306e\u53f3\u4e0a\u306b\u3042\u308b\u30c8\u30b0\u30eb\u3092\u4f7f\u7528\u3057\u3066\u6709\u52b9\u307e\u305f\u306f\u7121\u52b9\u306b\u3067\u304d\u307e\u3059\u3002\u6709\u52b9\u3067\u3001\u304b\u3064\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30c8\u30ea\u30ac\u30fc\u4f53\u7a4d\u3067\u3042\u308b\u5834\u5408(\u59c9\u59b9\u306eRigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u305f\u306a\u3044\u305f\u3081)\u3001\u30c8\u30ea\u30ac\u30fc\u4f53\u7a4d\u304c\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002\u540c\u69d8\u306b\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u59c9\u59b9\u306eRigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3042\u308b\u5834\u5408\u3001rigidbody\u304c\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"box",children:"Box"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-box.png",alt:"Collision component (Box)"})}),"\n",(0,l.jsx)(n.h4,{id:"capsule",children:"Capsule"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-capsule.png",alt:"Collision component (Capsule)"})}),"\n",(0,l.jsx)(n.h4,{id:"compound",children:"Compound"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-compound.png",alt:"Collision component (Compound)"})}),"\n",(0,l.jsx)(n.h4,{id:"cone",children:"Cone"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-cone.png",alt:"Collision component (Cone)"})}),"\n",(0,l.jsx)(n.h4,{id:"cylinder",children:"Cylinder"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-cylinder.png",alt:"Collision component (Cylinder)"})}),"\n",(0,l.jsx)(n.h4,{id:"mesh",children:"Mesh"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-mesh.png",alt:"Collision component (Mesh)"})}),"\n",(0,l.jsx)(n.h4,{id:"sphere",children:"Sphere"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-sphere.png",alt:"Collision component (Sphere)"})}),"\n",(0,l.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306bRigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3042\u308b\u5834\u5408\u3001Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306frigidbody\u306e\u5f62\u72b6\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002RigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u30c8\u30ea\u30ac\u30fc\u4f53\u7a4d\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\u30c8\u30ea\u30ac\u30fc\u4f53\u7a4d\u306f\u3001\u30b7\u30fc\u30f3\u5185\u306e\u4ed6\u306eRigidBody\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b\u3001Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u3001\u30c8\u30ea\u30ac\u30fc\u30a4\u30d9\u30f3\u30c8\u306b\u5fdc\u7b54\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30a2\u30bf\u30c3\u30c1\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001RigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3064\u5225\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u30c8\u30ea\u30ac\u30fc\u306b\u5165\u308b\u304b\u51fa\u308b\u3068\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u901a\u77e5\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"}),(0,l.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30bf\u30a4\u30d7"}),(0,l.jsxs)(n.td,{children:["\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u306e\u30bf\u30a4\u30d7\u3002\u6b21\u306e\u3044\u305a\u308c\u304b\u304c\u3067\u304d\u307e\u3059:",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Box"}),(0,l.jsx)("li",{children:"Sphere"}),(0,l.jsx)("li",{children:"Capsule"}),(0,l.jsx)("li",{children:"Mesh"})]})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Half Extents"}),(0,l.jsx)(n.td,{children:"Box\u306e\u307f\u3002\u30b3\u30ea\u30b8\u30e7\u30f3\u30dc\u30c3\u30af\u30b9\u306e\u534a\u5f84\u3002\u3053\u308c\u306f3\u6b21\u5143\u30d9\u30af\u30c8\u30eb\u3067\u3001\u30ed\u30fc\u30ab\u30eb\u30b9\u30da\u30fc\u30b9\u306e\u534a\u5e45\u3001\u534a\u9ad8\u5ea6\u3001\u304a\u3088\u3073\u534a\u6df1\u5ea6\u3067\u3059\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Axis"}),(0,l.jsx)(n.td,{children:"Capsule\u306e\u307f\u3002\u30ab\u30d7\u30bb\u30eb\u3092\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ed\u30fc\u30ab\u30eb\u30b9\u30da\u30fc\u30b9\u306eX\u3001Y\u3001\u307e\u305f\u306fZ\u8ef8\u306b\u6574\u5217\u3055\u305b\u307e\u3059\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Height"}),(0,l.jsx)(n.td,{children:"Capsule\u306e\u307f\u3002\u30ab\u30d7\u30bb\u30eb\u306e\u5148\u7aef\u304b\u3089\u5148\u7aef\u307e\u3067\u306e\u9ad8\u3055\u3067\u3059\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Radius"}),(0,l.jsx)(n.td,{children:"Sphere\u3068Capsule\u306e\u307f\u3002\u7403\u4f53\u307e\u305f\u306f\u30ab\u30d7\u30bb\u30eb\u306e\u4f53\u306e\u534a\u5f84\u3067\u3059\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30a2\u30bb\u30c3\u30c8 (Asset)"}),(0,l.jsx)(n.td,{children:"Mesh\u306e\u307f\u3002\u4e09\u89d2\u5f62\u30d9\u30fc\u30b9\u306e\u30b3\u30ea\u30b8\u30e7\u30f3\u30e1\u30c3\u30b7\u30e5\u306e\u30bd\u30fc\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308bModel\u30a2\u30bb\u30c3\u30c8\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/user-manual/scenes/components/script",children:"Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u3092\u4f7f\u7528\u3057\u3066Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f",(0,l.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.CollisionComponent.html",children:"\u3053\u3061\u3089"}),"\u3067\u3059\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var l=s(67294);const i={},o=l.createContext(i);function c(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);