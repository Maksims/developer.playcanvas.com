"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[121],{41696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(74848),s=n(28453);const i={title:"Making a Simple Game - Part 3",tags:["games"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"},o=void 0,r={id:"tutorials/keepyup-part-three",title:"Making a Simple Game - Part 3",description:"You can find the full project here. If you haven't see Part 1 and Part 2 read them first.",source:"@site/docs/tutorials/keepyup-part-three.md",sourceDirName:"tutorials",slug:"/tutorials/keepyup-part-three",permalink:"/tutorials/keepyup-part-three",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/keepyup-part-three.md",tags:[{label:"games",permalink:"/tags/games"}],version:"current",frontMatter:{title:"Making a Simple Game - Part 3",tags:["games"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Making a Simple Game - Part 6",permalink:"/tutorials/keepyup-part-six"},next:{title:"Making a Simple Game - Part 2",permalink:"/tutorials/keepyup-part-two"}},h={},c=[{value:"The Game script &amp; Input",id:"the-game-script--input",level:2},{value:"game.js",id:"gamejs",level:2},{value:"Game State",id:"game-state",level:3},{value:"Application Events",id:"application-events",level:3},{value:"Scoring",id:"scoring",level:3},{value:"Resolution",id:"resolution",level:3},{value:"input.js",id:"inputjs",level:2},{value:"Touch Events",id:"touch-events",level:3},{value:"Mouse Events",id:"mouse-events",level:3},{value:"Taps",id:"taps",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/KH37bnOk/?overlay=false",title:"Making a Simple Game - Part 3"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["You can find the ",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/406050",children:"full project here"}),". If you haven't see ",(0,a.jsx)(t.a,{href:"/tutorials/keepyup-part-one/",children:"Part 1"})," and ",(0,a.jsx)(t.a,{href:"/tutorials/keepyup-part-two/",children:"Part 2"})," read them first."]})}),"\n",(0,a.jsx)(t.h2,{id:"the-game-script--input",children:"The Game script & Input"}),"\n",(0,a.jsxs)(t.p,{children:["These two scripts ",(0,a.jsx)(t.code,{children:"game.js"})," and ",(0,a.jsx)(t.code,{children:"input.js"}),' are attached the root entity in the scene, called "Game". Scripts are generally executed in the order they are encountered in the hierarchy so it\'s easiest to attach any non-Entity specific scripts the first Entity. You can also manage the loading order of Scripts in the Settings panel of the Editor, to load scripts first without attaching them to an Entity.']}),"\n",(0,a.jsx)(t.h2,{id:"gamejs",children:"game.js"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var Game = pc.createScript('game');\n\nGame.attributes.add('uiMenu', {type: 'entity'});\nGame.attributes.add('uiInGame', {type: 'entity'});\nGame.attributes.add('uiGameOver', {type: 'entity'});\nGame.attributes.add('audio', {type: 'entity'});\n\nGame.STATE_MENU = 'menu';\nGame.STATE_INGAME = 'ingame';\nGame.STATE_GAMEOVER = 'gameover';\n\n// initialize code called once per entity\nGame.prototype.initialize = function() {\n    this._state = Game.STATE_MENU;\n    this._score = 0;\n\n    this.setResolution();\n\n    window.addEventListener(\"resize\", this.setResolution.bind(this));\n\n    // listen to events from the UI\n    this.app.on(\"ui:start\", this.start, this);\n    this.app.on(\"ui:reset\", this.reset, this);\n};\n\nGame.prototype.setResolution = function () {\n    // if the screen width is less than 640\n    // fill the whole window\n    // otherwise\n    // use the default setting\n\n    var w = window.screen.width;\n    var h = window.screen.height;\n\n    if (w < 640) {\n        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);\n        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);\n    }\n};\n\n// Call this to move from MENU to INGAME\nGame.prototype.start = function () {\n    this._state = Game.STATE_INGAME;\n    this.app.fire(\"game:start\");\n    this.uiMenu.enabled = false;\n    this.uiInGame.enabled = true;\n\n    this.audio.sound.play(\"music\");\n};\n\n// Call this to move from INGAME to GAMEOVER\nGame.prototype.gameOver = function () {\n    this._state = Game.STATE_GAMEOVER;\n    this.app.fire(\"game:gameover\");\n    this.uiInGame.enabled = false;\n    this.uiGameOver.enabled = true;\n\n    this.audio.sound.stop();\n    this.audio.sound.play(\"gameover\");\n};\n\n// Call this to move from GAMEOVER to MENU\nGame.prototype.reset = function () {\n    this.app.fire(\"game:reset\");\n    this.resetScore();\n    this._state = Game.STATE_MENU;\n    this.uiGameOver.enabled = false;\n    this.uiMenu.enabled = true;\n\n    this.audio.sound.stop();\n};\n\n// return the current score\nGame.prototype.getScore = function () {\n    return this._score;\n};\n\n// add a value to the score\nGame.prototype.addScore = function (v) {\n    this._score += v;\n    this.app.fire(\"game:score\", this._score);\n};\n\n// reset the score\nGame.prototype.resetScore = function () {\n    this._score = 0;\n    this.app.fire(\"game:score\", this._score);\n};\n"})}),"\n",(0,a.jsx)(t.h3,{id:"game-state",children:"Game State"}),"\n",(0,a.jsx)(t.p,{children:"The game script manages the overall state of the game, it exposes some methods to alter the game state and fires events to alert other code that the game state has changed."}),"\n",(0,a.jsxs)(t.p,{children:["We've divided the game up into three main states: Menu, In Game and Game Over. The game script provides the methods to transition between each state, ",(0,a.jsx)(t.code,{children:"start()"}),", ",(0,a.jsx)(t.code,{children:"gameOver()"})," and ",(0,a.jsx)(t.code,{children:"reset()"}),". Each one sets the ",(0,a.jsx)(t.code,{children:"_state"})," variable to remember which state we're in; fires an application event to alert other scripts to state changes; switches user interface elements on and off; and manages the state of the music or game over sound effect."]}),"\n",(0,a.jsxs)(t.p,{children:["These state change methods will be called from other scripts when the appropriate trigger events occur. For example, the ",(0,a.jsx)(t.code,{children:"gameOver()"})," method is called by ",(0,a.jsx)(t.code,{children:"ball.js"})," when the ball goes off the bottom of the screen."]}),"\n",(0,a.jsx)(t.h3,{id:"application-events",children:"Application Events"}),"\n",(0,a.jsx)(t.p,{children:"Let's pause to take a look at the way the game script fires events on the application."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'this.app.fire("game:start")\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Events are an extremely useful way to communicate form one script to many other scripts. The way an event works is that an object (in this case ",(0,a.jsx)(t.code,{children:"this.app"}),') chooses to "fire" an event. Any other code that has access to the object can choose to listen to one or more events on this object and the code will be notified when the event is fired.']}),"\n",(0,a.jsxs)(t.p,{children:["One of the issues with this is that the code needs access to the object in order to start listening to the event. This is why application events are so useful. Every script in PlayCanvas has access to ",(0,a.jsx)(t.code,{children:"this.app"}),". That makes it useful to act as a central communications hub between any other scripts."]}),"\n",(0,a.jsxs)(t.p,{children:["We have chosen to adopt a namespace pattern to make events clearer and avoid clashes. To listen for the ",(0,a.jsx)(t.code,{children:"game:start"})," event from above. You would use this code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'this.app.on("game:start", function () {\n    console.log("game:start event was fired");\n}, this)\n'})}),"\n",(0,a.jsx)(t.h3,{id:"scoring",children:"Scoring"}),"\n",(0,a.jsx)(t.p,{children:"The game script also manages the current score. It exposes methods that are used to modify the score and also fires events to let other code know that the score has changed."}),"\n",(0,a.jsx)(t.h3,{id:"resolution",children:"Resolution"}),"\n",(0,a.jsx)(t.p,{children:"Finally the game script handles the initial choice of resolution to make sure the main canvas is the correct size on both mobile and desktop. On mobile (defined by a screen less than 640 pixels wide) the game simply fills the entire screen. On desktop we use the predefined resolution set in the project settings."}),"\n",(0,a.jsx)(t.h2,{id:"inputjs",children:"input.js"}),"\n",(0,a.jsx)(t.p,{children:'The input script listens for input from the mouse or touchscreen, normalizes the input from the two into a general purpose "tap" and communicates with the rest of the application that a tap has occurred.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var Input = pc.createScript('input');\n\nInput.attributes.add('ball', {type: 'entity'});\nInput.attributes.add('camera', {type: 'entity'});\nInput.attributes.add('ballRadius', {type: 'number', default: 0.5});\n\nInput.worldPos = new pc.Vec3();\n\n// initialize code called once per entity\nInput.prototype.initialize = function() {\n\n    var self = this;\n\n    this._paused = true;\n\n    // Listen for game events so we know whether to respond to input\n    this.app.on(\"game:start\", function () {\n        self._paused = false;\n    });\n    this.app.on(\"game:gameover\", function () {\n        self._paused = true;\n    });\n\n    // set up touch events if available\n    if (this.app.touch) {\n        this.app.touch.on(\"touchstart\", this._onTouchStart, this);\n    }\n\n    // set up mouse events\n    this.app.mouse.on(\"mousedown\", this._onMouseDown, this);\n};\n\nInput.prototype._onTap = function (x, y) {\n    var p = this.ball.getPosition();\n    var camPos = this.camera.getPosition();\n    var worldPos = Input.worldPos;\n\n    // Get the position in the 3D world of the touch or click\n    // Store the in worldPos variable.\n    // This position is at the same distance away from the camera as the ball\n    this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);\n\n    // get the distance of the touch/click to the ball\n    var dx = (p.x - worldPos.x);\n    var dy = (p.y - worldPos.y);\n\n    // If the click is inside the ball, tap the ball\n    var lenSqr = dx*dx + dy*dy;\n    if (lenSqr < this.ballRadius*this.ballRadius) {\n        this.ball.script.ball.tap(dx, dy);\n    }\n};\n\nInput.prototype._onTouchStart = function (e) {\n    if (this._paused) {\n        return;\n    }\n\n    // respond to event\n    var touch = e.changedTouches[0];\n    this._onTap(touch.x, touch.y);\n\n    // stop mouse events firing as well\n    e.event.preventDefault();\n};\n\nInput.prototype._onMouseDown = function (e) {\n    if (this._paused) {\n        return;\n    }\n\n    // respond to event\n    this._onTap(e.x, e.y);\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["First, in initialize we are setting up event listening. We listen for application events to determine if the game is in a paused state (that is in the menu or in the game over state). If the input is paused we don't respond to the taps. Next we listen for touch events (note, you must check if ",(0,a.jsx)(t.code,{children:"this.app.touch"})," is available) and mouse events."]}),"\n",(0,a.jsx)(t.h3,{id:"touch-events",children:"Touch Events"}),"\n",(0,a.jsxs)(t.p,{children:["For touch events we take the first touch and pass through the screen co-ordinates. We also call ",(0,a.jsx)(t.code,{children:"preventDefault()"})," on the browser event to stop the browser also generating a ",(0,a.jsx)(t.code,{children:"click"})," event which it will do otherwise."]}),"\n",(0,a.jsx)(t.h3,{id:"mouse-events",children:"Mouse Events"}),"\n",(0,a.jsx)(t.p,{children:'On "mousedown" events we pass the screen co-ordinates through to the tap code. Note, that PlayCanvas ensures that touch and mouse events have the same coordinate system. This is not the case with normal browser events!'}),"\n",(0,a.jsx)(t.h3,{id:"taps",children:"Taps"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"_onTap()"}),' takes a screen co-ordinate (x, y) works out if this has "hit" the ball and if so tells the ball code that it has been tapped.']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);\n"})}),"\n",(0,a.jsx)(t.p,{children:"In detail, this function takes the screen co-ordinates (x, y) and asks the camera to convert them into a position in 3D space under that point on the screen. To do this, we need to supply a depth, as in how far away from the screen do you want the 3D point. In this case we get the 3D point at the same depth as the ball is."}),"\n",(0,a.jsxs)(t.p,{children:["We also pass in a vector ",(0,a.jsx)(t.code,{children:"Input.worldPos"}),". It's important in PlayCanvas applications to avoid creating new objects, like calling ",(0,a.jsx)(t.code,{children:"new pc.Vec3()"})," to create a new vector, in your update loops. The more memory allocations you do (by calling ",(0,a.jsx)(t.code,{children:"new"}),") the more Garbage Collection the browser will have to do to clear up your allocations. Garbage Collection is a (comparatively slow) operation and will cause your game or application to stutter if it happens often."]}),"\n",(0,a.jsx)(t.p,{children:"In most cases, PlayCanvas will provide an option to pass in vector or similar option so that you can pre-allocate and re-use objects."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// get the distance of the touch/click to the ball\nvar dx = (p.x - worldPos.x);\nvar dy = (p.y - worldPos.y);\n\n// If the click is inside the ball, tap the ball\nvar lenSqr = dx*dx + dy*dy;\nif (lenSqr < this.ballRadius*this.ballRadius) {\n    this.ball.script.ball.tap(dx, dy);\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"Once we have the the 3D point where we've just tapped, we test to see if it is overlapping with the ball. You'll see here we are testing the radius squared against the distance between the tap and the ball squared. This prevents us doing a slow Square Root operation every time we test."}),"\n",(0,a.jsxs)(t.p,{children:["If the tap has hit the ball, we call the ",(0,a.jsx)(t.code,{children:"tap(dx, dy)"})," function on the ball script we pass in the distance from the ball where the tap occurred. We'll use that in the ",(0,a.jsx)(t.a,{href:"/tutorials/keepyup-part-four/",children:"Part 4"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);