"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6278],{28263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),i=t(28453);const r={title:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0",sidebar_position:3},o=void 0,a={id:"user-manual/physics/trigger-volumes",title:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0",description:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u306f\u3001RigidBody\u304c\u30dc\u30ea\u30e5\u30fc\u30e0\u5185\u306b\u5165\u3063\u305f\u308a\u51fa\u305f\u308a\u3057\u305f\u3068\u304d\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u767a\u751f\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u9759\u7684\u306a\u885d\u7a81\u5f62\u72b6\u3067\u3059\u3002 \u3053\u308c\u306f\u3001\u30b5\u30c3\u30ab\u30fc\u306e\u8a66\u5408\u3067\u76ee\u6a19\u304c\u9054\u6210\u3055\u308c\u305f\u3068\u304d\u3084\u3001\u30ec\u30fc\u30b9\u30ab\u30fc\u304c\u30b4\u30fc\u30eb\u30e9\u30a4\u30f3\u306b\u5230\u9054\u3057\u305f\u3068\u304d\u3092\u691c\u51fa\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/physics/trigger-volumes.md",sourceDirName:"user-manual/physics",slug:"/user-manual/physics/trigger-volumes",permalink:"/ja/user-manual/physics/trigger-volumes",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/trigger-volumes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"\u529b\u3068\u885d\u6483",permalink:"/ja/user-manual/physics/forces-and-impulses"},next:{title:"Compound",permalink:"/ja/user-manual/physics/compound-shapes"}},c={},l=[];function u(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u306f\u3001RigidBody\u304c\u30dc\u30ea\u30e5\u30fc\u30e0\u5185\u306b\u5165\u3063\u305f\u308a\u51fa\u305f\u308a\u3057\u305f\u3068\u304d\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u767a\u751f\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u9759\u7684\u306a\u885d\u7a81\u5f62\u72b6\u3067\u3059\u3002 \u3053\u308c\u306f\u3001\u30b5\u30c3\u30ab\u30fc\u306e\u8a66\u5408\u3067\u76ee\u6a19\u304c\u9054\u6210\u3055\u308c\u305f\u3068\u304d\u3084\u3001\u30ec\u30fc\u30b9\u30ab\u30fc\u304c\u30b4\u30fc\u30eb\u30e9\u30a4\u30f3\u306b\u5230\u9054\u3057\u305f\u3068\u304d\u3092\u691c\u51fa\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b",(0,s.jsx)(n.a,{href:"/user-manual/scenes/components/collision",children:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u3092\u8ffd\u52a0\u3057\u3066\u3001\u305d\u306e\u5f62\u72b6\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u306fRigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Trigger Volume",src:t(96247).A+"",width:"2658",height:"1471"})}),"\n",(0,s.jsx)(n.p,{children:"RigidBody\u30d9\u30fc\u30b9\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u51fa\u5165\u308a\u3057\u305f\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var TriggerVolume = pc.createScript('triggerVolume');\n\n// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3054\u3068\u306b1\u56de\u547c\u3073\u51fa\u3055\u308c\u308b\u521d\u671f\u30b3\u30fc\u30c9\nTriggerVolume.prototype.initialize = function() {\n    this.entity.collision.on('triggerenter', function (entity) {\n        console.log(entity.name + ' has entered trigger volume.');\n    });\n    this.entity.collision.on('triggerleave', function (entity) {\n        console.log(entity.name + ' has left trigger volume.');\n    });\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},96247:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/trigger-volume-38f91c92ff6d2315144201272b59b92c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);