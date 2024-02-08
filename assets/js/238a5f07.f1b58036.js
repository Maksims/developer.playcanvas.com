"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5775],{52763:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=s(85893),a=s(11151);const r={title:"Assets",sidebar_position:10},o=void 0,i={id:"user-manual/assets/index",title:"Assets",description:"Assets are resources that are available to use in your game. Assets can be of various different content types, for example, 3D models or audio files. They come in two different forms: Source and Target.",source:"@site/docs/user-manual/assets/index.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/",permalink:"/user-manual/assets/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Assets",sidebar_position:10},sidebar:"userManualSidebar",previous:{title:"Loading Scenes",permalink:"/user-manual/scenes/loading-scenes"},next:{title:"Uploading and Importing",permalink:"/user-manual/assets/importing"}},l={},d=[{value:"Type",id:"type",level:2},{value:"Source Assets and Target Assets",id:"source-assets-and-target-assets",level:2}];function u(e){const t={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Assets are resources that are available to use in your game. Assets can be of various different content types, for example, 3D models or audio files. They come in two different forms: Source and Target."}),"\n",(0,n.jsx)(t.p,{children:"After uploading a file for an Asset the file is run through the importing pipeline which converts and optimizes the data for final use in the game."}),"\n",(0,n.jsx)(t.h2,{id:"type",children:"Type"}),"\n",(0,n.jsx)(t.p,{children:"PlayCanvas supports the importing of a wide variety of content types:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Models e.g. FBX, COLLADA, obj"}),"\n",(0,n.jsx)(t.li,{children:"3D Animations"}),"\n",(0,n.jsx)(t.li,{children:"Images for textures e.g. jpg, png"}),"\n",(0,n.jsx)(t.li,{children:"Audio e.g. mp3, ogg"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When you upload a new file the asset type will be set automatically from the type of file you've uploaded. For example, if you upload a PNG file, the Asset created will be a ",(0,n.jsx)(t.em,{children:"texture"})," type."]}),"\n",(0,n.jsx)(t.h2,{id:"source-assets-and-target-assets",children:"Source Assets and Target Assets"}),"\n",(0,n.jsxs)(t.p,{children:["After the asset type, then next most important property of an Asset is whether it is a ",(0,n.jsx)(t.strong,{children:"Source"})," Asset or a ",(0,n.jsx)(t.strong,{children:"Target"})," Asset."]}),"\n",(0,n.jsx)(t.p,{children:"Put simply, Source Assets reference the original files that you uploaded. Target Assets are created at the end of the import pipeline for any files that have been generated by the PlayCanvas conversion and optimization process."}),"\n",(0,n.jsxs)(t.p,{children:["For example, if you upload a Photoshop (PSD) file for a texture, we create a Source Asset of type ",(0,n.jsx)(t.em,{children:"texture"})," for that PSD file. Then we run the import pipeline and convert the PSD file into a JPG file. At the end of the process we create a Target Asset of type ",(0,n.jsx)(t.em,{children:"texture"})," for the new JPG file."]}),"\n",(0,n.jsx)(t.p,{children:"In the Editor and in your game, you will only ever be referring to Target Assets. That is because they are in formats optimized and ready to use at runtime."})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(67294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);