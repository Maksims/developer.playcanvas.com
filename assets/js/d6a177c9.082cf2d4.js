"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9887],{71596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(85893),r=a(11151);const s={title:"Using Texture Packers",sidebar_position:3},i=void 0,l={id:"user-manual/2D/texture-packing",title:"Using Texture Packers",description:"What is texture packing?",source:"@site/docs/user-manual/2D/texture-packing.md",sourceDirName:"user-manual/2D",slug:"/user-manual/2D/texture-packing",permalink:"/user-manual/2D/texture-packing",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/2D/texture-packing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Using Texture Packers",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"9-slicing",permalink:"/user-manual/2D/slicing"},next:{title:"User Interface",permalink:"/user-manual/user-interface/"}},o={},c=[{value:"What is texture packing?",id:"what-is-texture-packing",level:2},{value:"Tools",id:"tools",level:2},{value:"TexturePacker Online (free)",id:"texturepacker-online-free",level:3},{value:"Texture Packer tool",id:"texture-packer-tool",level:3},{value:"Creating frames in Sprite Editor",id:"creating-frames-in-sprite-editor",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"what-is-texture-packing",children:"What is texture packing?"}),"\n",(0,n.jsxs)(t.p,{children:["It's common to find sprites or UI images bundled as separate images. Texture packing is combining those separate images into a single ",(0,n.jsx)(t.a,{href:"/user-manual/assets/texture-atlas/",children:"texture atlas"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This has several advantages including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Faster loading times as it's a single network request instead of many."}),"\n",(0,n.jsx)(t.li,{children:"As it's a single texture, the sprites can be batched into a single draw call."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"tools",children:"Tools"}),"\n",(0,n.jsx)(t.p,{children:"Here are some texture packing tools that are compatible with PlayCanvas."}),"\n",(0,n.jsx)(t.h3,{id:"texturepacker-online-free",children:"TexturePacker Online (free)"}),"\n",(0,n.jsxs)(t.p,{children:["(",(0,n.jsx)(t.a,{href:"https://www.codeandweb.com/tp-online",children:"Website"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"A free browser tool that is able to do the basics of texture packing."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/user-manual/2D/texture-packer/texture-packer-online-steps.png",alt:""})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Clear the texture atlas."}),"\n",(0,n.jsx)(t.li,{children:"Add your sprites/UI images."}),"\n",(0,n.jsx)(t.li,{children:"Data format should be kept as JSON hash."}),"\n",(0,n.jsx)(t.li,{children:"Download .png for the texture atlas."}),"\n",(0,n.jsx)(t.li,{children:"Download .json for the frame data."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"texture-packer-tool",children:"Texture Packer tool"}),"\n",(0,n.jsxs)(t.p,{children:["(",(0,n.jsx)(t.a,{href:"https://www.codeandweb.com/texturepacker",children:"Website"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["TexturePacker is a paid tool for download that has many more features and options for creating texture atlases. These include more control over the layout of the sprites/UI images and being able to set up ",(0,n.jsx)(t.a,{href:"/user-manual/2D/slicing/",children:"9 slicing"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/user-manual/2D/texture-packer/texture-packer-tool-steps.png",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"Basic steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Add your sprites/UI images."}),"\n",(0,n.jsx)(t.li,{children:"Set Output files -> Framework as PlayCanvas."}),"\n",(0,n.jsx)(t.li,{children:"Click on Publish sprite sheet to create the texture atlas and JSON frame data."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"creating-frames-in-sprite-editor",children:"Creating frames in Sprite Editor"}),"\n",(0,n.jsxs)(t.p,{children:["Once you have uploaded the texture atlas file into the Editor and created a ",(0,n.jsx)(t.a,{href:"/user-manual/assets/texture-atlas/",children:"texture atlas asset"}),", open the Sprite Editor."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/user-manual/2D/texture-packer/playcanvas-sprite-editor.png",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"Click on 'Upload Texture Packer JSON' and select the JSON frame data file to upload."}),"\n",(0,n.jsx)(t.p,{children:"This will create frames in the texture atlas that you can create sprite assets from."}),"\n",(0,n.jsx)(t.p,{children:"When updating the texture atlas later in development, as long as the sprite filenames and frame names remain the same, the following will happen when uploading the new frame data:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Sprites that have been removed on the atlas will have their frames removed."}),"\n",(0,n.jsx)(t.li,{children:"Sprites that have been added on the atlas will have new frames added to the end of the list."}),"\n",(0,n.jsx)(t.li,{children:"Existing sprites will have their frames updated."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>i});var n=a(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);