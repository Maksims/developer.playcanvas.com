"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8582],{6340:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=n(74848),i=n(28453);const s={title:"Animation",sidebar_position:15},o=void 0,r={id:"user-manual/animation/index",title:"Animation",description:"PlayCanvas provides a powerful state-based animation system which can be used to animate character models and other arbitrary scene object models. Users can work with any of their .FBX animation assets. These can be organized using animation state machines to easily control the animated behavior of scene models at runtime.",source:"@site/docs/user-manual/animation/index.md",sourceDirName:"user-manual/animation",slug:"/user-manual/animation/",permalink:"/user-manual/animation/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/animation/index.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Animation",sidebar_position:15},sidebar:"userManualSidebar",previous:{title:"Multiple Render Targets",permalink:"/user-manual/graphics/advanced-rendering/multiple-render-targets"},next:{title:"Anim Component",permalink:"/user-manual/animation/anim-component"}},m={},l=[{value:"System Overview",id:"system-overview",level:2},{value:"Animating in PlayCanvas",id:"animating-in-playcanvas",level:3}];function h(e){const a={h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"PlayCanvas provides a powerful state-based animation system which can be used to animate character models and other arbitrary scene object models. Users can work with any of their .FBX animation assets. These can be organized using animation state machines to easily control the animated behavior of scene models at runtime."}),"\n",(0,t.jsx)(a.h2,{id:"system-overview",children:"System Overview"}),"\n",(0,t.jsx)(a.p,{children:"The animation system touches on three main areas of the PlayCanvas platform. This section will walk through how these areas can be used together to create complex animation behavior for your models. The following sections of the animation user manual then will explore each area in more detail."}),"\n",(0,t.jsx)(a.h3,{id:"animating-in-playcanvas",children:"Animating in PlayCanvas"}),"\n",(0,t.jsx)(a.p,{children:"In order to begin animating a PlayCanvas entity, you must have a set of animation assets available and imported into your PlayCanvas project. These animation assets will drive the animation of a given model you wish to animate. For example a humanoid character may have a set of animations; Idle, Walk, Jump."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Animations",src:n(13676).A+"",width:"1000",height:"581"})}),"\n",(0,t.jsx)(a.p,{children:"These three animations can be organized into a single animation system to create a simple locomotion system for that character. The way this is achieved in PlayCanvas is through the use of an animstategraph asset. These assets can be thought of as state machines for an entity\u2019s animation behavior. With each state in this asset relating to an animation, the state machine can be set up to define the complex animation behavior of an entity\u2019s model. This includes defining when the system should stop one animation and start another and how the transition between these animations should be blended."}),"\n",(0,t.jsx)(a.p,{children:"The anim component is then used to assign an animstategraph asset to a particular entity in your scene. Once an entity has been assigned an animstategraph asset, each state in the graph can have an actual animation asset assigned to it. Once all states have been assigned animations, the anim component will become playable. At this point the animation system is complete and the defined animation behavior will be viewable in the PlayCanvas launcher."})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},13676:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/animations-0017f50bdbec1638777a739b03ca38b6.gif"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>r});var t=n(96540);const i={},s=t.createContext(i);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);