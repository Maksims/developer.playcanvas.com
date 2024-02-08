"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8612],{34763:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=t(85893),s=t(11151);const a={title:"Mini Stats",sidebar_position:3},r=void 0,o={id:"user-manual/optimization/mini-stats",title:"Mini Stats",description:"Mini stats is a lightweight graphical display of an application's key performance statistics. It shows draw call count, frame time, CPU load and (where supported) GPU load.",source:"@site/docs/user-manual/optimization/mini-stats.md",sourceDirName:"user-manual/optimization",slug:"/user-manual/optimization/mini-stats",permalink:"/user-manual/optimization/mini-stats",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/mini-stats.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Mini Stats",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Profiler",permalink:"/user-manual/optimization/profiler"},next:{title:"Device Pixel Ratio",permalink:"/user-manual/optimization/runtime-devicepixelratio"}},l={},c=[{value:"Using Mini-Stats Outside of the Editor",id:"using-mini-stats-outside-of-the-editor",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Mini stats is a lightweight graphical display of an application's key performance statistics. It shows draw call count, frame time, CPU load and (where supported) GPU load."}),"\n",(0,n.jsx)(i.p,{children:"Editor users can enable the mini-stats panel via the Launch button menu:"}),"\n",(0,n.jsx)("img",{loading:"lazy",alt:"Launch Menu",width:"600",src:"/images/user-manual/optimization/mini-stats/launch-menu-mini-stats.png"}),"\n",(0,n.jsx)(i.p,{children:"Clicking on the mini-stats will cycle through three supported sizes:"}),"\n",(0,n.jsx)("img",{loading:"lazy",alt:"Mini Stats",width:"411",src:"/images/user-manual/optimization/mini-stats/mini-stats.gif"}),"\n",(0,n.jsx)(i.p,{children:"The information displayed is as follows:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"DrawCalls"})," - The number of rendered objects dispatched every frame. Each draw call has a cost on the CPU and GPU, so minimizing this number is sensible."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Frame"})," - The total time in milliseconds for the browser to process each frame."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"GPU"})," - Shows the time in milliseconds to render each frame by the GPU. This stat is only shown if the underlying WebGL implementation supports the extension ",(0,n.jsx)(i.code,{children:"EXT_disjoint_timer_query"})," (WebGL 1.0) or ",(0,n.jsx)(i.code,{children:"EXT_disjoint_timer_query_webgl2"})," (WebGL 2.0). You can confirm whether your browser supports either of these extensions by visiting ",(0,n.jsx)(i.a,{href:"https://webglreport.com/",children:"WebGL Report"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CPU"})," - Shows the time in milliseconds to render each frame by the CPU."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The CPU and GPU graphs display a breakdown of the update and render portion of the frame using red and green respectively."}),"\n",(0,n.jsx)(i.h2,{id:"using-mini-stats-outside-of-the-editor",children:"Using Mini-Stats Outside of the Editor"}),"\n",(0,n.jsxs)(i.p,{children:["While the mini-stats panel is incorporated into the Editor's Launch page, you can also use it independent of the Editor. The source code can be found ",(0,n.jsx)(i.a,{href:"https://github.com/playcanvas/engine/tree/master/extras/mini-stats",children:"here"}),". Simply build ",(0,n.jsx)(i.code,{children:"playcanvas-extras.js"}),", include it in your project and call:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"    const miniStats = new pcx.MiniStats(app);\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"https://playcanvas.github.io/",children:"'Engine-only' examples"})," all do this."]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>r});var n=t(67294);const s={},a=n.createContext(s);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);