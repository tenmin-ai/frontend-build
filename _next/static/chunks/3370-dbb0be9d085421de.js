"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3370],{5040:function(e,t,n){n.d(t,{MI:function(){return u},nQ:function(){return c}});var r=n(7437),i=n(2265),s=n(1273),o=n(2744),a=n(434),l=n(2859);let c=e=>{let{profilePicture:t,message:n,translation:s,isPlaying:c=!1,onTap:u,onTTSPlay:d,onTTSStop:x,onTranslate:h,defaultShowTranslation:m=!0}=e,[g,f]=(0,i.useState)(m);return(0,r.jsxs)("div",{className:"mb-8 mr-14 rounded-lg rounded-tl-none bg-white px-4 py-4 ring-1 ring-black/10",onClick:u,children:["string"==typeof t?(0,r.jsx)("img",{src:t,className:"mb-3 h-7 w-7 rounded-full"}):t,(0,r.jsx)("div",{className:"font-medium",children:void 0===n?(0,r.jsxs)("div",{className:"mb-4 flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"h-2 w-full rounded-full bg-gray-200"}),(0,r.jsx)("div",{className:"h-2 w-2/3 rounded-full bg-gray-200"})]}):(0,a.f)(n)}),(0,r.jsx)("div",{className:"transition-max-height overflow-hidden text-sm text-black/30 duration-700 ease-in-out ".concat(g?"max-h-40 opacity-100":"max-h-0 opacity-0"),children:s}),(0,r.jsxs)("div",{className:"mt-2 flex gap-2",children:[d&&(0,r.jsx)("button",{onClick:e=>{e.stopPropagation(),c?null==x||x():d()},children:(0,r.jsx)(l.J,{icon:c?o.H6t:o.hwG,className:"text-xl text-black/30"})}),h&&(0,r.jsx)("button",{onClick:e=>{e.stopPropagation(),h(!g),f(!g)},children:(0,r.jsx)(o.mp2,{className:"text-xl text-black/30"})})]})]})},u=e=>{let t,n,o,{message:a,translation:l,correction:c,onTap:u,onTranslate:d,defaultShowTranslation:x=!0}=e,[h,m]=(0,i.useState)(x),g="flex-initial bg-[#0039FF]/5 ring-1 rounded-lg py-4 px-4 ring-[#0039FF]/20 rounded-tr-none";c?"Grammar"===c.mistake||"Phrasing"===c.mistake?(t=(0,r.jsx)("div",{className:"font-normal text-red-600 line-through",children:a}),n=(0,r.jsx)("div",{className:"text-green-600",children:c.correct_version})):"No Mistake"===c.mistake||"Punctuation"===c.mistake?(g="relative flex-initial bg-green-500/5 ring-1 rounded-lg py-4 px-4 ring-green-600/20 rounded-tr-none",t=(0,r.jsx)("div",{className:"font-normal text-green-600",children:a}),o=(0,r.jsx)(s.ETl,{className:"absolute -bottom-2 -right-2 text-xl text-green-600"})):t=(0,r.jsx)("div",{className:"font-normal",children:a}):t=(0,r.jsx)("div",{className:"font-normal",children:a});let f=l&&h&&(0,r.jsx)("div",{className:"text-sm text-black/30",children:l});return(0,r.jsxs)("div",{className:"mb-8 ml-14 flex flex-wrap-reverse items-center justify-end gap-y-3",children:[c&&c.explanation&&"Punctuation"!==c.mistake&&(0,r.jsxs)("div",{className:"-ml-10 mr-3 grow basis-32 text-xs",children:[(0,r.jsxs)("p",{className:"font-bold",children:[c.mistake,(0,r.jsx)(s.EQK,{className:"mx-1 inline-block"})]}),(0,r.jsx)("p",{className:"italic",children:c.explanation})]}),(0,r.jsxs)("div",{className:g,onClick:u,children:[t,n,f,(0,r.jsx)("div",{className:"mt-2 flex items-center gap-2 text-sm text-black/30",children:(0,r.jsx)(s.YRv,{className:"-rotate-45"})}),o]})]})};t.ZP=u},4502:function(e,t,n){n.d(t,{y:function(){return c}});var r=n(7437),i=n(2265),s=e=>{let{onStartPress:t,onEndPress:n,onCancel:s,cancelButtonRef:o,children:a}=e,[l,c]=(0,i.useState)(!1),u=(0,i.useRef)({x:0,y:0}),d=e=>{if(o.current){let t=o.current.getBoundingClientRect();return e.x>=t.left&&e.x<=t.right&&e.y>=t.top&&e.y<=t.bottom}return!1};return(0,i.useEffect)(()=>{let e=e=>{var t,n;if(!l)return;let r=e.touches[0];d({x:r.clientX,y:r.clientY})?null===(t=o.current)||void 0===t||t.classList.add("scale-110","bg-red-300"):null===(n=o.current)||void 0===n||n.classList.remove("scale-110","bg-red-300")};return window.addEventListener("touchmove",e),()=>{window.removeEventListener("touchmove",e)}},[l,o]),(0,r.jsx)("button",{onTouchStart:e=>{e.preventDefault(),c(!0),t();let n=e.touches[0];u.current={x:n.clientX,y:n.clientY}},onTouchEnd:e=>{e.preventDefault(),c(!1);let t=e.changedTouches[0];d({x:t.clientX,y:t.clientY})?s():n()},onContextMenu:e=>e.preventDefault(),className:"microphoneButton",children:a?a(l):"Press and Hold"})},o=n(1273),a=n(2859),l=e=>{let{color:t="black"}=e;return(0,r.jsx)("svg",{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.0946622 2.84349C0.543847 1.57554 1.74925 0.722656 3.09681 0.722656H6.41168C8.39605 0.722656 9.99947 2.33176 9.99947 4.31045C9.99947 5.59546 9.31148 6.78381 8.19705 7.42631L6.36051 8.4782C6.34913 9.21737 5.74074 9.82007 4.99589 9.82007C4.23967 9.82007 3.63128 9.21168 3.63128 8.45546V7.68786C3.63128 7.19888 3.89283 6.74969 4.31927 6.5052L6.83812 5.06099C7.10536 4.90747 7.27025 4.62317 7.27025 4.31613C7.27025 3.83852 6.88361 3.45757 6.41168 3.45757H3.09681C2.90349 3.45757 2.73291 3.57697 2.67037 3.75892L2.64762 3.82715C2.39745 4.53788 1.61279 4.90747 0.907744 4.65729C0.202694 4.40711 -0.172574 3.62246 0.0776046 2.91741L0.100348 2.84918L0.0946622 2.84349ZM3.17641 13.459C3.17641 12.9765 3.36811 12.5137 3.70933 12.1725C4.05054 11.8312 4.51334 11.6396 4.99589 11.6396C5.47845 11.6396 5.94124 11.8312 6.28246 12.1725C6.62368 12.5137 6.81538 12.9765 6.81538 13.459C6.81538 13.9416 6.62368 14.4044 6.28246 14.7456C5.94124 15.0868 5.47845 15.2785 4.99589 15.2785C4.51334 15.2785 4.05054 15.0868 3.70933 14.7456C3.36811 14.4044 3.17641 13.9416 3.17641 13.459Z",fill:t})})};let c=e=>{let{onStartPress:t,onEndPress:n,onCancel:c,viewText:u,setViewText:d,viewQuestion:x,setViewQuestion:h}=e,[m,g]=(0,i.useState)(!1),f=(0,i.useRef)(null);return(0,r.jsxs)("div",{className:"flex w-full items-center justify-center gap-6",children:[!m&&(0,r.jsx)("div",{className:"flex h-14 w-14 items-center justify-center rounded-full ".concat(u?"bg-black/5":"bg-[#0039FF]/10 text-[#0039FF]"),onClick:()=>{d(!u)},children:(0,r.jsx)(o.Vbz,{})}),m&&(0,r.jsx)("button",{ref:f,className:"flex h-12 w-12 items-center justify-center rounded-full bg-red-200 text-xl text-red-600 ring-2 ring-red-600/50 transition-transform duration-200 ease-in-out hover:scale-110",children:(0,r.jsx)(o._0w,{})}),(0,r.jsx)(s,{onStartPress:()=>{g(!0),t()},onEndPress:()=>{g(!1),n()},onCancel:()=>{g(!1),c()},cancelButtonRef:f,children:e=>(0,r.jsx)("div",{className:"".concat(e?"bg-[#0039FF]/20 text-[#0039FF] ring-2 ring-[#0039FF]/40":"bg-[#0039FF] text-white"," rounded-full px-12 py-6 text-3xl"),children:(0,r.jsx)(a.J,{icon:e?o.ZTc:o.uYL})})}),!m&&(0,r.jsx)("button",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-black/5",onClick:()=>{h(!x)},children:(0,r.jsx)(l,{})}),m&&(0,r.jsx)("div",{className:"w-12"})]})}},8706:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2265),i=n(9800),s=n(3974);class o{register(e){let t=Symbol("subscriber");return console.log("Registering subscriber:",t.toString()),this.subscribers.set(t,{init:e,initializing:this.initializeSubscriber(e)}),()=>this.removeSubscriber(t)}async resume(){if(this.audioContext&&"suspended"===this.audioContext.state)try{await this.audioContext.resume(),console.log("AudioContext resumed. State:",this.audioContext.state)}catch(e){console.error("Failed to resume AudioContext:",e)}}async ensureAudioContext(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];if(this.audioContext&&"closed"!==this.audioContext.state)return this.audioContext;for(let e of(this.audioContext&&(console.warn("AudioContext is closed, cleaning up and recreating..."),this.cleanupAllSubscribers()),console.log("Creating a new AudioContext"),this.audioContext=new AudioContext(this.audioContextOptions),this.audioWorkletModules))await this.audioContext.audioWorklet.addModule(e);return e&&this.initializeAllSubscribers(),this.audioContext.onstatechange=this.handleAudioContextStateChange,this.audioContext}async handleAudioContextStateChange(){if(this.audioContext){if(console.log("AudioContext state changed:",this.audioContext.state),"running"===this.audioContext.state){let e=this.audioContext.currentTime;setTimeout(async()=>{this.audioContext&&this.audioContext.currentTime===e&&(console.warn("AudioContext currentTime is stuck, recreating..."),await this.ensureAudioContext())},100)}"closed"===this.audioContext.state&&(console.warn("AudioContext closed, recreating..."),await this.ensureAudioContext())}}async initializeSubscriber(e){console.log("Initializing subscriber...");let t=await this.ensureAudioContext(!1),n=await e(t);return console.log("Subscriber initialized."),n}async removeSubscriber(e){console.log("Removing subscriber:",e.toString());let t=this.subscribers.get(e);if(!t)throw Error("Removing a non-existent subscriber:"+e.toString());(await t.initializing)(),this.subscribers.delete(e),console.log("Subscriber removed:",e.toString())}initializeAllSubscribers(){for(let[,e]of this.subscribers.entries())e.initializing=this.initializeSubscriber(e.init)}cleanupAllSubscribers(){for(let[,e]of this.subscribers.entries())e.initializing.then(e=>e())}constructor(e,t){if(this.audioContext=null,this.audioContextOptions={},this.subscribers=new Map,this.audioWorkletModules=new Set,e&&(this.audioContextOptions=e),t)for(let e of t)this.audioWorkletModules.add(e)}}let a=new o({sampleRate:16e3},["worklets/pcm-recorder.js"]);function l(e){let{onSpeechStart:t,onSpeechEnd:n,onAudioData:o,onPCMData:l,onRecordingStart:c,onRecordingStop:u,micVolume:d=1,recordingChunkSize:x}=e,h=(0,r.useRef)(null),m=(0,r.useRef)(null),g=(0,r.useRef)(null),f=(0,r.useRef)(null),b=(0,r.useRef)(void 0),[v,C]=(0,r.useState)(!0),[p,w]=(0,r.useState)(!1),j=(0,r.useRef)(!1),[S,k]=(0,s.useLocalStorage)("selectedMic",null),[y,N]=(0,r.useState)(!1);(0,r.useEffect)(()=>{p?E():F()},[p]),(0,r.useEffect)(()=>{if(!v)return;a.resume();let e=async e=>{try{let r=await navigator.mediaDevices.getUserMedia({audio:{deviceId:null!=S?S:void 0,echoCancellation:!0,sampleRate:16e3}});console.log("Mic acquired",S);let s=e.createGain();e.createMediaStreamSource(r).connect(s),h.current=s,s.gain.value=d,await e.audioWorklet.addModule("/worklets/pcm-recorder.js");let o=new AudioWorkletNode(e,"pcm-recorder");s.connect(o),o.port.onmessage=e=>{var t;let n=e.data;null===(t=b.current)||void 0===t||t.call(b,n)},o.onprocessorerror=e=>{console.error("PCM Processor Error:",e)},f.current=o;let a=e.createMediaStreamDestination();o.connect(a);let l=new MediaRecorder(a.stream);m.current=l;let c=await i.MicVAD.new({workletURL:"/vad/vad.worklet.bundle.min.js",modelURL:"/vad/silero_vad.onnx",ortConfig:e=>{e.env.wasm.wasmPaths="/vad/"},stream:r,onSpeechStart:()=>{N(!0),null==t||t()},onVADMisfire:()=>{N(!1),null==n||n(!0)},onSpeechEnd:()=>{N(!1),null==n||n(!1)},positiveSpeechThreshold:.5,negativeSpeechThreshold:.35});return c.start(),g.current=c,()=>{r.getTracks().forEach(e=>{e.stop(),r.removeTrack(e)}),console.log("Mic released"),o.port.close(),o.disconnect(),f.current===o&&(f.current=null),s.disconnect(),h.current===s&&(h.current=null),y&&(N(!1),null==n||n(!1)),c.destroy(),g.current===c&&(g.current=null),console.log("VAD destroyed")}}catch(e){if(e instanceof DOMException&&"NotAllowedError"===e.name)return console.log("User denied microphone access"),alert("Please allow microphone access to use this feature."),()=>{};return console.error("Error accessing microphone:",e),alert("Error accessing microphone: "+e),()=>{}}};return a.register(e)},[v,S]);let A=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;a.resume(),e&&k(e),C(!0)},M=(0,r.useRef)(void 0),R=e=>{let t=async()=>{null==o||o(await e.data.arrayBuffer()),M.current=void 0};M.current=t()},E=async()=>{var e;a.resume(),b.current=l,null===(e=f.current)||void 0===e||e.port.start(),m.current&&(m.current.ondataavailable=R,m.current.onstart=()=>{null==c||c()},m.current.onstop=async()=>{M.current&&await M.current,null==u||u(j.current)},j.current=!1,await m.current.start(x))},F=()=>{b.current=void 0,m.current&&m.current.stop()};return m.current&&(m.current.ondataavailable=R),g.current&&t&&(g.current.options.onSpeechStart=t),g.current&&n&&(g.current.options.onVADMisfire=()=>n(!0),g.current.options.onSpeechEnd=()=>n(!1)),h.current&&(h.current.gain.value=d),{isRecording:p,setRecording:w,cancelRecording:()=>{b.current=void 0,j.current=!0,w(!1)},acquireMic:A,releaseMic:()=>{b.current=void 0,F(),C(!1)},selectedMic:S,isVoiceDetected:y}}},9403:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(3974);let i=()=>{let[e,t]=(0,r.useLocalStorage)("token");return{token:e,saveToken:t}}},2859:function(e,t,n){n.d(t,{J:function(){return i}});var r=n(7437);n(2265);let i=e=>{let{icon:t,className:n,...i}=e;return(0,r.jsx)(t,{className:n,...i})}},434:function(e,t,n){n.d(t,{f:function(){return r}});let r=e=>e||"​"}}]);