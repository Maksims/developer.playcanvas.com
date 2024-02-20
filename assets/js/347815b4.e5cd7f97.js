"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5737],{81263:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=r(85893),t=r(11151);const a={title:"Branches - List branches"},i=void 0,c={id:"user-manual/api/branch-list",title:"Branches - List branches",description:"Route URL",source:"@site/docs/user-manual/api/branch-list.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/branch-list",permalink:"/user-manual/api/branch-list",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/branch-list.md",tags:[],version:"current",frontMatter:{title:"Branches - List branches"},sidebar:"userManualSidebar",previous:{title:"Assets - Update asset",permalink:"/user-manual/api/asset-update"},next:{title:"Jobs - Get job",permalink:"/user-manual/api/job-get"}},l={},d=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"route-url",children:"Route URL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"GET https://playcanvas.com/api/projects/:projectId/branches\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get a list of all open branches for a project"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/branches"\n'})}),"\n",(0,s.jsx)(n.p,{children:"HTTP Request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"GET https://playcanvas.com/api/projects/{projectId}/branches\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"projectId"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"The id of the project."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "result": [    {\n      "id": string,\n      "projectId": int,\n      "name": "Branch Name",\n      "createdAt": data,\n      "closed": bool,\n      "latestCheckpointId": string,\n      "user": {\n        "id": int,\n        "fullName": string,\n        "username": string\n      }\n    },, ...],\n    "pagination": {\n        "hasMore": bool\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint uses a slightly different pagination method. If a response contains the value ",(0,s.jsx)(n.code,{children:"hasMore: true"})," then additional results are available. Use ",(0,s.jsx)(n.code,{children:"?skip=branchId"})," query parameter with the last received branch id to receive more branches in alphabetical order."]}),"\n",(0,s.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Unauthorized"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Forbidden"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Project not found"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"429"}),(0,s.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,s.jsxs)(n.p,{children:["This route uses a ",(0,s.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(67294);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);