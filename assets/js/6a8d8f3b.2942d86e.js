"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7186],{66936:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(85893),a=i(11151);const s={title:"Input Sources",sidebar_position:5},r=void 0,o={id:"user-manual/xr/input-sources",title:"Input Sources",description:"Input Source",source:"@site/docs/user-manual/xr/input-sources.md",sourceDirName:"user-manual/xr",slug:"/user-manual/xr/input-sources",permalink:"/user-manual/xr/input-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/input-sources.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Input Sources",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"Types of VR experiences",permalink:"/user-manual/xr/vr/types-of-vr"},next:{title:"Optimizing WebXR applications",permalink:"/user-manual/xr/optimizing-webxr"}},c={},d=[{value:"Input Source",id:"input-source",level:2},{value:"Accessing Input Sources",id:"accessing-input-sources",level:2},{value:"Primary Action (select)",id:"primary-action-select",level:2},{value:"Ray",id:"ray",level:2},{value:"Grip",id:"grip",level:2},{value:"GamePad",id:"gamepad",level:2},{value:"Hands",id:"hands",level:2},{value:"Profiles",id:"profiles",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"input-source",children:"Input Source"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInputSource.html",children:"XrInputSource"})," represents an input mechanism that allows the user to interact with a virtual world. Those include but are not limited to handheld controllers, optically tracked hands, gaze-based input methods, and touch screens. However, an input source is not explicitly associated with traditional gamepads, mice or keyboards."]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-input-sources",children:"Accessing Input Sources"}),"\n",(0,t.jsxs)(n.p,{children:["A list of input sources is available on the ",(0,t.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInput.html",children:"XrInput"})," manager which is created by the ",(0,t.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrManager.html",children:"XrManager"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const inputSources = app.xr.input.inputSources;\nfor (let i = 0; i < inputSources.length; i++) {\n    // iterate through available input sources\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Input sources can be added and removed dynamically. This can be done by connecting physical devices or by switching input devices by the underlying platform, and some input sources are transient - and have a lifespan only during their primary action (e.g. touch screen tap in an AR session on mobile). You can subscribe to ",(0,t.jsx)(n.code,{children:"add"})," and ",(0,t.jsx)(n.code,{children:"remove"})," events:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.xr.input.on('add', function (inputSource) {\n    // input source been added\n\n    inputSource.once('remove', function () {\n        // know when input source has been removed\n    });\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"primary-action-select",children:"Primary Action (select)"}),"\n",(0,t.jsxs)(n.p,{children:["Each input source can have a primary action ",(0,t.jsx)(n.code,{children:"select"}),". For controllers, it is a primary button/trigger. For the touch-screen, it is a tap. For hands, it is a pinch of thumb and index fingers. There are also ",(0,t.jsx)(n.code,{children:"selectstart"})," and ",(0,t.jsx)(n.code,{children:"selectend"})," events which you can subscribe to as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"inputSource.on('select', function () {\n    // primary action\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or through the input manager:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.xr.input.on('select', function (inputSource) {\n    // primary action\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ray",children:"Ray"}),"\n",(0,t.jsx)(n.p,{children:"Each input source has a ray which has an origin where it points from and a direction in which it is pointing. A ray is transformed into world space. Some examples of input sources might be, but are not limited to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Controllers"})," (e.g. Meta Quest Touch), will have a ray originating from the tip of the handheld device and the direction is based on the rotation of the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hands"})," have a ray that originates from a point between the thumb and index tips and points forward. If the underlying system does not provide a ray for hands, the PlayCanvas engine will emulate it. So all hands should have a ray."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Screen"}),"-based input. This might be available on mobile devices (mono screen) in AR session types, where the user can interact with the virtual world via a touch screen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gaze"}),"-based input, such as a mobile phone is inserted into a Google Cardboard style device. It will have an input source with ",(0,t.jsx)(n.code,{children:"targetRayMode"})," set to ",(0,t.jsx)(n.code,{children:"pc.XRTARGETRAY_GAZE"}),", and will originate from the viewer's position and point straight where the user is facing."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example illustrating how to check whether a ray has intersected with the bounding box of a mesh:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// set ray with input source data\nray.set(inputSource.getOrigin(), inputSource.getDirection());\n\n// check if mesh bounding box intersects with ray\nif (meshInstance.aabb.intersectsRay(ray)) {\n    // input source is pointing at a mesh\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"grip",children:"Grip"}),"\n",(0,t.jsx)(n.p,{children:"Some input sources are associated with a physical handheld device, such as a Meta Quest Touch, and can have position and rotation. Their position and rotation are provided in world space."}),"\n",(0,t.jsx)(n.p,{children:"This can be used to render a virtual controller that matches real-world controller position and rotation."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"if (inputSource.grip) {\n    // can render device model\n    // position and rotate associated entity with model\n    entity.setPosition(inputSource.getPosition());\n    entity.setRotation(inputSource.getRotation());\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"gamepad",children:"GamePad"}),"\n",(0,t.jsxs)(n.p,{children:["If the platform supports the ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/webxr-gamepads-module-1/",children:"WebXR Gamepads Module"}),", then an input source might have an associated ",(0,t.jsx)(n.a,{href:"https://w3c.github.io/gamepad/",children:"GamePad"})," object with it, which provides access to its buttons, triggers, axes and other input hardware states:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const gamepad = inputSource.gamepad;\nif (gamepad) {\n    if (gamepad.buttons[0] && gamepad.buttons[0].pressed) {\n        // user pressed a button on a gamepad\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hands",children:"Hands"}),"\n",(0,t.jsxs)(n.p,{children:["If the platform supports ",(0,t.jsx)(n.a,{href:"https://immersive-web.github.io/webxr-hand-input/",children:"WebXR Hand Input"}),", then an input source might have associated hand data, which is exposed as ",(0,t.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrHand.html",children:"XrHand"}),", and its data in the form of ",(0,t.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrFinger.html",children:"XrFinger"})," and ",(0,t.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrJoint.html",children:"XrJoint"})," for an application developer to use, such as wrist, fingers, each joint, tips and events for detecting when hands lose/restore tracking."]}),"\n",(0,t.jsx)(n.p,{children:"Creating a basic hand model:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const joints = [ ];\nconst hand = inputSource.hand;\n\nif (hand) {\n    for(let i = 0; i < hand.joints.length; i++) {\n        const entity = new pc.Entity();\n        entity.joint = hand.joints[i];\n        entity.addComponent('render', { type: 'box' });\n        parent.addChild(entity);\n        joints.push(entity);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"And synchronising it on every update:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"for(let i = 0; i < joints.length; i++) {\n    const entity = joints[i];\n    const joint = entity.joint;\n    const radius = joint.radius * 2;\n    entity.setLocalScale(radius, radius, radius);\n    entity.setPosition(joint.getPosition());\n    entity.setRotation(joint.getRotation());\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"profiles",children:"Profiles"}),"\n",(0,t.jsxs)(n.p,{children:["Each input source might have a list of strings describing a type of input source, which is described in a ",(0,t.jsx)(n.a,{href:"https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry",children:"profile registry"}),". Based on this, you can figure out what type of model to render for a handheld device or what capabilities it might have. Additionally, the profile registry lists gamepad mapping details, such as buttons and axes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"if (inputSource.profiles.includes('oculus-touch-v2')) {\n    // it is an Oculus Touch\u2122 handheld device\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(67294);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);