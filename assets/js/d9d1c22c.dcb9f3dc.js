"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4357],{40675:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=s(74848),n=s(28453);const l={title:"Facebook Playable Ad",sidebar_position:1},i=void 0,o={id:"user-manual/publishing/playable-ads/fb-playable-ads",title:"Facebook Playable Ad",description:"PlayCanvas supports the Facebook Playable Ad formats and requirements via an official external tool on GitHub.",source:"@site/docs/user-manual/publishing/playable-ads/fb-playable-ads.md",sourceDirName:"user-manual/publishing/playable-ads",slug:"/user-manual/publishing/playable-ads/fb-playable-ads",permalink:"/user-manual/publishing/playable-ads/fb-playable-ads",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/playable-ads/fb-playable-ads.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Facebook Playable Ad",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"Playable Ads",permalink:"/user-manual/publishing/playable-ads/"},next:{title:"Snapchat Playable Ad",permalink:"/user-manual/publishing/playable-ads/snapchat-playable-ads"}},r={},c=[{value:"Example project",id:"example-project",level:2},{value:"File size tips",id:"file-size-tips",level:2},{value:"Playable ad checklist",id:"playable-ad-checklist",level:2},{value:"How to export",id:"how-to-export",level:2},{value:"Single HTML",id:"single-html",level:3},{value:"ZIP file",id:"zip-file",level:3},{value:"How to test",id:"how-to-test",level:3}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["PlayCanvas supports the ",(0,t.jsx)(a.a,{href:"https://www.facebook.com/business/ads/playable-ad-format",children:"Facebook Playable Ad"})," formats and requirements via an ",(0,t.jsx)(a.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools",children:"official external tool on GitHub"}),"."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Facebook Playable Ads",src:s(30190).A+"",width:"595",height:"360"})}),"\n",(0,t.jsxs)(a.p,{children:["The tool can create both the single 2MB (uncompressed) HTML file and the 5MB (uncompressed) ZIP formats via the configuration options. Full specifications for Facebook Playable Ads can be found on their ",(0,t.jsx)(a.a,{href:"https://www.facebook.com/business/help/412951382532338",children:"help centre"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"example-project",children:"Example project"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.a,{href:"https://playcanvas.com/project/354998/overview/cube-jump-playable-ad-for-fb",children:"Cube Jump project"})," is ready to be exported for the Facebook Playable Ad format and the expected ",(0,t.jsx)(a.a,{href:"pathname:///downloads/fb-playable-ad-cube-jump-html.zip",children:"HTML output can be found here"}),"."]}),"\n",(0,t.jsx)("div",{className:"iframe-container",children:(0,t.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/e/p/Hywjl9Bh/",title:"Cube Jump Playable Ad"})}),"\n",(0,t.jsx)(a.h2,{id:"file-size-tips",children:"File size tips"}),"\n",(0,t.jsx)(a.p,{children:"As there is a strict file size limit, you will have to plan and budget the usage of assets for the ad."}),"\n",(0,t.jsxs)(a.p,{children:["The minified PlayCanvas Engine code is ",(0,t.jsx)(a.strong,{children:"~1.2MB"})," uncompressed and due to the need to encode the asset files into Base64 strings, it adds ",(0,t.jsx)(a.strong,{children:"~30%"})," to the size of each asset file."]}),"\n",(0,t.jsx)(a.p,{children:"This means that for a single HTML format, this leaves ~500KB for assets before they are encoded into Base64 strings. For the ZIP format, this would be about ~3MB for assets before encoding."}),"\n",(0,t.jsxs)(a.p,{children:["Try to keep images as small as possible in dimensions and use tools like ",(0,t.jsx)(a.a,{href:"https://tinypng.com/",children:"TinyPNG"})," to reduce file size even further."]}),"\n",(0,t.jsx)(a.h2,{id:"playable-ad-checklist",children:"Playable ad checklist"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Have you added the function call ",(0,t.jsx)(a.code,{children:"FbPlayableAd.onCTAClick()"})," as part of your call to action callback?"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"how-to-export",children:"How to export"}),"\n",(0,t.jsxs)(a.p,{children:["Follow the ",(0,t.jsx)(a.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#setup",children:"setup steps"})," from the readme in the GitHub repo."]}),"\n",(0,t.jsx)(a.h3,{id:"single-html",children:"Single HTML"}),"\n",(0,t.jsxs)(a.p,{children:["Set the following options in the ",(0,t.jsx)(a.code,{children:"config.json"})," as shown below. This will produce a single HTML file in the output directory."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'    "one_page": {\n        "patch_xhr_out": true,\n        "inline_game_scripts": true,\n        "extern_files": false\n    }\n'})}),"\n",(0,t.jsx)(a.h3,{id:"zip-file",children:"ZIP file"}),"\n",(0,t.jsxs)(a.p,{children:["Set the following options in the ",(0,t.jsx)(a.code,{children:"config.json"})," as shown below. This will produce a ZIP file with the asset data and PlayCanvas Engine code as separate files from the ",(0,t.jsx)(a.code,{children:"index.html"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'    "one_page": {\n        "patch_xhr_out": true,\n        "inline_game_scripts": true,\n        "extern_files": true\n    }\n'})}),"\n",(0,t.jsx)(a.p,{children:"And run the command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"npm run one-page\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Full details of options and commands can be found in the readme section for '",(0,t.jsx)(a.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file",children:"Converting a project into a single HTML file"}),"'."]}),"\n",(0,t.jsx)(a.h3,{id:"how-to-test",children:"How to test"}),"\n",(0,t.jsxs)(a.p,{children:["Follow the steps ",(0,t.jsx)(a.a,{href:"https://www.facebook.com/business/help/338940216641734",children:"here"})," to create a Facebook ad and at the time where the files for the ad are uploaded, there is an opportunity to test within the manager."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Test Ad",src:s(97042).A+"",width:"1402",height:"720"})}),"\n",(0,t.jsxs)(a.p,{children:["Please ignore the warning about the source may contain an ",(0,t.jsx)(a.code,{children:"XMLHttpRequest"})," as the code path has been removed by this tool."]}),"\n",(0,t.jsx)(a.p,{children:"Facebook also allows testing on device via the ad manager but requires you to publish the ad first. This is a strange limitation by Facebook but is required at the moment."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Preview Ad",src:s(63096).A+"",width:"1171",height:"720"})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},63096:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/fb-playable-ad-preview-device-f4d64c80e6464f51b9860b4451a16982.jpg"},97042:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/fb-playable-ad-tester-5062a8828e2a1dc5d7910c03cb90b245.jpg"},30190:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/fb-playable-ads-ee7f7ffe218d12182ff123f9f49df90f.gif"},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var t=s(96540);const n={},l=t.createContext(n);function i(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);