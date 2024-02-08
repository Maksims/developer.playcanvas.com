"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4320],{84718:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=o(85893),r=o(11151);const s={title:"Version Control",sidebar_position:13},a=void 0,i={id:"user-manual/version-control/index",title:"Version Control",description:"Once you've moved beyond the simplest of projects, you will find that version control becomes an important part of your application development process. Version Control is a catch-all term for a system that performs the following functions",source:"@site/docs/user-manual/version-control/index.md",sourceDirName:"user-manual/version-control",slug:"/user-manual/version-control/",permalink:"/user-manual/version-control/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/version-control/index.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Version Control",sidebar_position:13},sidebar:"userManualSidebar",previous:{title:"Nested Templates",permalink:"/user-manual/templates/nested"},next:{title:"Checkpoints",permalink:"/user-manual/version-control/checkpoints"}},c={},l=[{value:"Version Control in PlayCanvas",id:"version-control-in-playcanvas",level:2},{value:"How Version Control Affects Your Storage",id:"how-version-control-affects-your-storage",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Once you've moved beyond the simplest of projects, you will find that version control becomes an important part of your application development process. Version Control is a catch-all term for a system that performs the following functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Allows you to turn back time to a previous version of your code and assets"}),"\n",(0,t.jsx)(n.li,{children:"Allows you to see changes that have been made to a project over time"}),"\n",(0,t.jsx)(n.li,{children:"Allows you to trial new changes in a safe place, isolated from other developers, and merge changes when ready"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["PlayCanvas has version control tools built directly into the Editor which can be broken down into three main features. ",(0,t.jsx)(n.strong,{children:"Checkpoints"})," are a snapshot of your project at a single point in time, they form a timeline of changes to your project; ",(0,t.jsx)(n.strong,{children:"Branches"})," are a single line of development perhaps representing the changes required to create one feature or by one developer. Changes to assets in one branch will not affect changes in another branch; ",(0,t.jsx)(n.strong,{children:"Merging & Resolving conflicts"}),", merging is the process of combining one branch into another branch, conflicts occur when both branches edit the same data. After resolving conflicts the destination branch should contain the changes from both branches."]}),"\n",(0,t.jsx)(n.h2,{id:"version-control-in-playcanvas",children:"Version Control in PlayCanvas"}),"\n",(0,t.jsx)(n.p,{children:"You may be familiar with other version control systems (VCS), if so this summary will help you get familiar with how PlayCanvas works relative to other version control systems."}),"\n",(0,t.jsxs)(n.p,{children:["You can think of a checkpoint like you would a ",(0,t.jsx)(n.strong,{children:"commit"})," in a VCS like Git or Mercurial. Each checkpoint is a point-in-time snapshot of project with an associated message that describes what changes were made in this checkpoint. While you are editing your project your current (un-checkpointed) changes are similar to the ",(0,t.jsx)(n.strong,{children:"working directory"})," i.e. you can think of these as your ",(0,t.jsx)(n.strong,{children:"local changes"})," (even though in PlayCanvas your local changes are shared with anyone else in the same branch as you)."]}),"\n",(0,t.jsxs)(n.p,{children:["You cannot delete a checkpoint, but you can restore a previous checkpoint. Restoring a checkpoint works a little like a ",(0,t.jsx)(n.code,{children:"git checkout <commit>"})," or ",(0,t.jsx)(n.code,{children:"hg update -r <commit>"}),". However, in PlayCanvas we don't allow branches unless they have been explicitly created (no detached heads or similar). When you restore a previous checkpoint future changes will be children of the latest checkpoint in the branch."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Branches"})," in PlayCanvas work like branches in other systems. A branch forms an isolated line of development made up of checkpoints. All users who have set a branch as their current branch will see their changes in a real-time collaborative fashion. Branches cannot be deleted, but when you are finished working on a branch it can be ",(0,t.jsx)(n.em,{children:"closed"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Merging works in a similar way to other VCSs. However, in PlayCanvas it's important to note that merging occurs ",(0,t.jsx)(n.em,{children:"between checkpoints"})," so any changes that you have not committed in a checkpoint will not be included in your merge. PlayCanvas automatically creates checkpoints in the destination branch of a merge to prevent you accidentally losing changes when merging."]}),"\n",(0,t.jsxs)(n.p,{children:["More details can be found on the specific pages for ",(0,t.jsx)(n.a,{href:"/user-manual/version-control/checkpoints",children:"checkpoints"}),", ",(0,t.jsx)(n.a,{href:"/user-manual/version-control/branches",children:"branches"}),", and ",(0,t.jsx)(n.a,{href:"/user-manual/version-control/merging",children:"merging"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-version-control-affects-your-storage",children:"How Version Control Affects Your Storage"}),"\n",(0,t.jsx)(n.p,{children:"Using Version Control will use more storage for checkpoints and branches."}),"\n",(0,t.jsx)(n.p,{children:"Every checkpoint created only stores the changes from the previous checkpoint. The amount of data used is dependent on the changes such as new assets, texture changes etc."}),"\n",(0,t.jsx)(n.p,{children:"Creating a branch from a checkpoint makes a copy of the project state at that checkpoint. This can increase storage usage significantly depending on the project."}),"\n",(0,t.jsx)(n.p,{children:"Unfortunately, it is not possible to delete branches or checkpoints except in these specific cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/user-manual/version-control/checkpoints/#hard-reset-to-a-checkpoint",children:"Hard reset to a checkpoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/user-manual/version-control/branches/#deleting-a-branch",children:"Deleting a branch"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you need more storage space, please email us at ",(0,t.jsx)(n.a,{href:"mailto:support@playcanvas.com",children:"support@playcanvas.com"}),". In most cases, we can increase your storage allowance with no extra charge."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>a});var t=o(67294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);