"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5644],{34806:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=a(85893),t=a(11151);const s={title:"\u5165\u529b\u30bd\u30fc\u30b9",sidebar_position:5},r=void 0,o={id:"user-manual/xr/input-sources",title:"\u5165\u529b\u30bd\u30fc\u30b9",description:"An XrInputSource represents an input mechanism that allows the user to interact with a virtual world. Those include but are not limited to handheld controllers, optically tracked hands, gaze-based input methods, and touch screens. However, an input source is not explicitly associated with traditional gamepads, mice or keyboards.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/input-sources.md",sourceDirName:"user-manual/xr",slug:"/user-manual/xr/input-sources",permalink:"/ja/user-manual/xr/input-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/input-sources.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5165\u529b\u30bd\u30fc\u30b9",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"VR\u4f53\u9a13\u306e\u7a2e\u985e",permalink:"/ja/user-manual/xr/vr/types-of-vr"},next:{title:"Hand Tracking",permalink:"/ja/user-manual/xr/hand-tracking"}},c={},d=[{value:"Input Sources\u3078\u306e\u30a2\u30af\u30bb\u30b9",id:"input-sources\u3078\u306e\u30a2\u30af\u30bb\u30b9",level:2},{value:"\u4e3b\u64cd\u4f5c(\u9078\u629e)",id:"\u4e3b\u64cd\u4f5c\u9078\u629e",level:2},{value:"\u30ec\u30a4",id:"\u30ec\u30a4",level:2},{value:"\u30b0\u30ea\u30c3\u30d7 (Grip)",id:"\u30b0\u30ea\u30c3\u30d7-grip",level:2},{value:"\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9 (GamePad)",id:"\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9-gamepad",level:2},{value:"\u624b (Hands)",id:"\u624b-hands",level:2},{value:"Profiles",id:"profiles",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInputSource.html",children:"XrInputSource"})," represents an input mechanism that allows the user to interact with a virtual world. Those include but are not limited to handheld controllers, optically tracked hands, gaze-based input methods, and touch screens. However, an input source is not explicitly associated with traditional gamepads, mice or keyboards."]}),"\n",(0,i.jsx)(n.h2,{id:"input-sources\u3078\u306e\u30a2\u30af\u30bb\u30b9",children:"Input Sources\u3078\u306e\u30a2\u30af\u30bb\u30b9"}),"\n",(0,i.jsxs)(n.p,{children:["\u5165\u529b\u30bd\u30fc\u30b9\u306e\u30ea\u30b9\u30c8\u306f\u3001",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrManager.html",children:"XrManager"}),"\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u308b",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInput.html",children:"XrInput"}),"\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const inputSources = app.xr.input.inputSources;\nfor (let i = 0; i < inputSources.length; i++) {\n    // iterate through available input sources\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Input sources can be added and removed dynamically. This can be done by connecting physical devices or by switching input devices by the underlying platform, and some input sources are transient - and have a lifespan only during their primary action (e.g. touch screen tap in an AR session on mobile). You can subscribe to ",(0,i.jsx)(n.code,{children:"add"})," and ",(0,i.jsx)(n.code,{children:"remove"})," events:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"app.xr.input.on('add', function (inputSource) {\n    // \u5165\u529b\u30bd\u30fc\u30b9\u304c\u8ffd\u52a0\u3055\u308c\u305f\n\n    inputSource.once('remove', function () {\n        // \u5165\u529b\u30bd\u30fc\u30b9\u304c\u524a\u9664\u3055\u308c\u305f\u6642\u70b9\u3067\u901a\u77e5\u3055\u308c\u308b\n    });\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e3b\u64cd\u4f5c\u9078\u629e",children:"\u4e3b\u64cd\u4f5c(\u9078\u629e)"}),"\n",(0,i.jsxs)(n.p,{children:["Each input source can have a primary action ",(0,i.jsx)(n.code,{children:"select"}),". For controllers, it is a primary button/trigger. For the touch-screen, it is a tap. For hands, it is a pinch of thumb and index fingers. There are also ",(0,i.jsx)(n.code,{children:"selectstart"})," and ",(0,i.jsx)(n.code,{children:"selectend"})," events which you can subscribe to as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"inputSource.on('select', function () {\n    // \u4e3b\u64cd\u4f5c\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u307e\u305f\u306f\u3001\u5165\u529b\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u4ecb\u3057\u3066:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"app.xr.input.on('select', function (inputSource) {\n    // \u4e3b\u64cd\u4f5c\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30ec\u30a4",children:"\u30ec\u30a4"}),"\n",(0,i.jsx)(n.p,{children:"Each input source has a ray which has an origin where it points from and a direction in which it is pointing. A ray is transformed into world space. Some examples of input sources might be, but are not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Controllers"})," (e.g. Meta Quest Touch), will have a ray originating from the tip of the handheld device and the direction is based on the rotation of the device."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hands"})," have a ray that originates from a point between the thumb and index tips and points forward. If the underlying system does not provide a ray for hands, the PlayCanvas engine will emulate it. So all hands should have a ray."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Screen"}),"-based input. This might be available on mobile devices (mono screen) in AR session types, where the user can interact with the virtual world via a touch screen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gaze"}),"-based input, such as a mobile phone is inserted into a Google Cardboard style device. It will have an input source with ",(0,i.jsx)(n.code,{children:"targetRayMode"})," set to ",(0,i.jsx)(n.code,{children:"pc.XRTARGETRAY_GAZE"}),", and will originate from the viewer's position and point straight where the user is facing."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example illustrating how to check whether a ray has intersected with the bounding box of a mesh:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// set ray with input source data\nray.set(inputSource.getOrigin(), inputSource.getDirection());\n\n// check if mesh bounding box intersects with ray\nif (meshInstance.aabb.intersectsRay(ray)) {\n    // input source is pointing at a mesh\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30b0\u30ea\u30c3\u30d7-grip",children:"\u30b0\u30ea\u30c3\u30d7 (Grip)"}),"\n",(0,i.jsx)(n.p,{children:"Some input sources are associated with a physical handheld device, such as a Meta Quest Touch, and can have position and rotation. Their position and rotation are provided in world space."}),"\n",(0,i.jsx)(n.p,{children:"This can be used to render a virtual controller that matches real-world controller position and rotation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (inputSource.grip) {\n    // \u30c7\u30d0\u30a4\u30b9\u30e2\u30c7\u30eb\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3067\u304d\u307e\u3059\n    // \u30e2\u30c7\u30eb\u3067\u95a2\u9023\u3059\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u3068\u56de\u8ee2\u3092\u8a2d\u5b9a\u3059\u308b\n    entity.setPosition(inputSource.getPosition());\n    entity.setRotation(inputSource.getRotation());\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9-gamepad",children:"\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9 (GamePad)"}),"\n",(0,i.jsxs)(n.p,{children:["If the platform supports the ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/webxr-gamepads-module-1/",children:"WebXR Gamepads Module"}),", then an input source might have an associated ",(0,i.jsx)(n.a,{href:"https://w3c.github.io/gamepad/",children:"GamePad"})," object with it, which provides access to its buttons, triggers, axes and other input hardware states:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const gamepad = inputSource.gamepad;\nif (gamepad) {\n    if (gamepad.buttons[0] && gamepad.buttons[0].pressed) {\n        // user pressed a button on a gamepad\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u624b-hands",children:"\u624b (Hands)"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the dedicated page for ",(0,i.jsx)(n.a,{href:"/user-manual/xr/hand-tracking/",children:"Hand Tracking"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"profiles",children:"Profiles"}),"\n",(0,i.jsxs)(n.p,{children:["Each input source might have a list of strings describing a type of input source, which is described in a ",(0,i.jsx)(n.a,{href:"https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry",children:"profile registry"}),". Based on this, you can figure out what type of model to render for a handheld device or what capabilities it might have. Additionally, the profile registry lists gamepad mapping details, such as buttons and axes."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (inputSource.profiles.includes('oculus-touch-v2')) {\n    // it is an Oculus TouchTM handheld device\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var i=a(67294);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);