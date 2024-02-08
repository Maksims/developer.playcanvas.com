"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3749],{66170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=r(85893),t=r(11151);const a={title:"\u30d6\u30e9\u30f3\u30c1 - List branches",sidebar_position:11},i=void 0,c={id:"user-manual/api/branch-list",title:"\u30d6\u30e9\u30f3\u30c1 - List branches",description:"\u30eb\u30fc\u30c8URL",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/api/branch-list.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/branch-list",permalink:"/ja/user-manual/api/branch-list",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/branch-list.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u30d6\u30e9\u30f3\u30c1 - List branches",sidebar_position:11},sidebar:"userManualSidebar",previous:{title:"\u30a2\u30bb\u30c3\u30c8 - Update asset",permalink:"/ja/user-manual/api/asset-update"},next:{title:"\u30b8\u30e7\u30d6 - Get job",permalink:"/ja/user-manual/api/job-get"}},d={},l=[{value:"\u30eb\u30fc\u30c8URL",id:"\u30eb\u30fc\u30c8url",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:2},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",level:2},{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",level:2},{value:"\u30ec\u30fc\u30c8\u5236\u9650",id:"\u30ec\u30fc\u30c8\u5236\u9650",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u30eb\u30fc\u30c8url",children:"\u30eb\u30fc\u30c8URL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"GET https://playcanvas.com/api/projects/:projectId/branches\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5168\u3066\u306e\u30aa\u30fc\u30d7\u30f3\u306a\u30d6\u30e9\u30f3\u30c1\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/branches"\n'})}),"\n",(0,s.jsx)(n.p,{children:"HTTP \u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"GET https://playcanvas.com/api/projects/{projectId}/branches\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u524d"}),(0,s.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"projectId"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"The id of the project."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"\u30b9\u30c6\u30fc\u30bf\u30b9:200\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "result": [    {\n      "id": string,\n      "projectId": int,\n      "name": "Branch Name",\n      "createdAt": data,\n      "closed": bool,\n      "latestCheckpointId": string,\n      "user": {\n        "id": int,\n        "fullName": string,\n        "username": string\n      }\n    },, ...],\n    "pagination": {\n        "hasMore": bool\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u82e5\u5e72\u7570\u306a\u308b\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\u65b9\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u30ec\u30b9\u30dd\u30f3\u30b9\u304c ",(0,s.jsx)(n.code,{children:"hasMore: true"})," \u306e\u5834\u5408\u3001\u8ffd\u52a0\u306e\u7d50\u679c\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u6700\u5f8c\u306b\u53d7\u4fe1\u3057\u305f\u30d6\u30e9\u30f3\u30c1ID\u3068\u3068\u3082\u306b ",(0,s.jsx)(n.code,{children:"?skip=branchId"})," \u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u9806\u306b\u3088\u308a\u591a\u304f\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u53d7\u4fe1\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc",children:"\u30a8\u30e9\u30fc"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Unauthorized"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Forbidden"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Project not found"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"429"}),(0,s.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650",children:"\u30ec\u30fc\u30c8\u5236\u9650"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30eb\u30fc\u30c8\u306f",(0,s.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"\u901a\u5e38"}),"\u306e\u30ec\u30fc\u30c8\u5236\u9650\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(67294);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);