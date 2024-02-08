"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9142],{56823:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=a(85893),i=a(11151);const t={title:"Using WebXR in PlayCanvas",sidebar_position:1},r=void 0,o={id:"user-manual/xr/using-webxr",title:"Using WebXR in PlayCanvas",description:"Checking for WebXR Support",source:"@site/docs/user-manual/xr/using-webxr.md",sourceDirName:"user-manual/xr",slug:"/user-manual/xr/using-webxr",permalink:"/user-manual/xr/using-webxr",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/using-webxr.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using WebXR in PlayCanvas",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"XR",permalink:"/user-manual/xr/"},next:{title:"Capabilities",permalink:"/user-manual/xr/capabilities"}},l={},c=[{value:"Checking for WebXR Support",id:"checking-for-webxr-support",level:2},{value:"Starting an XR Session",id:"starting-an-xr-session",level:2},{value:"Ending an XR Session",id:"ending-an-xr-session",level:2},{value:"Types of XR",id:"types-of-xr",level:2},{value:"Camera Position and Orientation in XR",id:"camera-position-and-orientation-in-xr",level:2},{value:"Why can&#39;t I enable XR mode automatically?",id:"why-cant-i-enable-xr-mode-automatically",level:2},{value:"Experimental Features",id:"experimental-features",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"checking-for-webxr-support",children:"Checking for WebXR Support"}),"\n",(0,s.jsx)(n.p,{children:"Browser support for WebXR is not (yet) universal. It can be checked as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.supported) {\n    // WebXR is supported\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"starting-an-xr-session",children:"Starting an XR Session"}),"\n",(0,s.jsxs)(n.p,{children:["The API for entering XR is on the Camera Component or ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrManager.html",children:"XrManager"})," on the Application. To start an XR session you should use the ",(0,s.jsx)(n.code,{children:"startXr"})," method on a CameraComponent and provide the type of XR session, reference space, and optional object with additional arguments:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It is an asynchronous operation and is only possible to start on a user interaction, such as a button click, mouse click, or touch. To know when a session is started, you can subscribe to the ",(0,s.jsx)(n.code,{children:"start"})," event:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.on('start', function () {\n    // XR session has started\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Session type or reference space might not be available on a particular platform, so it will fail to start the session, providing an error in a callback and firing the ",(0,s.jsx)(n.code,{children:"error"})," event on XrManager:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_UNBOUNDED, {\n    callback: function(err) {\n        if (err) {\n            // failed to start session\n        }\n    }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ending-an-xr-session",children:"Ending an XR Session"}),"\n",(0,s.jsx)(n.p,{children:"Exiting XR can be triggered in various ways. You can trigger an exit of XR from code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Also, the user might exit XR via some external process like the back button in the browser. ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrManager.html",children:"XrManager"})," will fire events associated with the session ",(0,s.jsx)(n.code,{children:"end"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.on('end', function () {\n    // XR session has ended\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"types-of-xr",children:"Types of XR"}),"\n",(0,s.jsx)(n.p,{children:"Each platform can support different types of sessions. These are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"VR"})," (Virtual Reality) - Provides some level of viewer tracking and it provides exclusive access to XR Device. This means that the application will be rendered onto a device's frame buffer and not the HTML canvas element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AR"})," (Augmented Reality) - This type of session provides exclusive access to the XR Device and content is meant to be blended with the real-world environment. In this mode, the camera's clear color should be transparent."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The availability of a session type can change during an application's lifetime, based on devices being plugged in or features on devices being enabled. To check if a session type is available do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.isAvailable(pc.XRTYPE_VR)) {\n    // VR is available\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can subscribe to availability change events too:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.on('available', function (type, available) {\n    console.log('XR session', type, 'type is now', available ? 'available' : 'unavailable');\n});\n\n// or specific session type\napp.xr.on('available:' + pc.XRTYPE_VR, function (available) {\n    console.log('XR session VR type is now', available ? 'available' : 'unavailable');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"camera-position-and-orientation-in-xr",children:"Camera Position and Orientation in XR"}),"\n",(0,s.jsx)(n.p,{children:"When you are presenting in XR, the position and orientation of the camera are overwritten by data from the XR session. If you want to implement additional movement and rotation of the camera, you should add a parent entity to your camera and apply your manipulations to that entity."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/xr/using-webxr/camera-offset.jpg",alt:"Camera Offset"})}),"\n",(0,s.jsx)(n.p,{children:"Position, orientation and rays of different XR objects: input sources, tracked meshes, tracked planes, tracked images, and others, are provided in world space."}),"\n",(0,s.jsx)(n.h2,{id:"why-cant-i-enable-xr-mode-automatically",children:"Why can't I enable XR mode automatically?"}),"\n",(0,s.jsxs)(n.p,{children:["Entering WebXR is required by browsers to be triggered by a ",(0,s.jsx)(n.em,{children:"user action"}),". That means that it must be in response to a key press, a mouse click or a touch event. For that reason, there is no way to enter XR immediately on loading a page."]}),"\n",(0,s.jsx)(n.h2,{id:"experimental-features",children:"Experimental Features"}),"\n",(0,s.jsxs)(n.p,{children:["The WebXR API is constantly evolving and additional APIs get released extending the XR feature set. While the engine is constantly updated with integrations for XR APIs, some of the features might come with delay. For developers willing to experiment with new features, it is possible to enable them by passing relevant ",(0,s.jsx)(n.code,{children:"optionalFeatures"})," flags."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Accessing internal, undocumented APIs is subject to engine changes that are not guaranteed to be backwards compatible."})}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of enabling the experimental API for ",(0,s.jsx)(n.a,{href:"https://immersive-web.github.io/layers/",children:"WebXR Layers"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.start(cameraComponent, pc.XRTYPE_VR, pc.XRSPACE_LOCAL, {\n    optionalFeatures: [ 'layers' ],\n    callback: function(err) {\n        if (err) {\n            console.log(err);\n            return;\n        }\n\n        if (app.xr.session.renderState.layers) {\n            // get access to WebXR Layers\n        }\n    }\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var s=a(67294);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);