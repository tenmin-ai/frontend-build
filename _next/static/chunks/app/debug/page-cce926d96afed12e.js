(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{8446:function(e,t,n){Promise.resolve().then(n.bind(n,4570))},4570:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7437),s=n(2265),l=n(4031),c=n(3061),a=n(7776),o=n(6463),i=n(40);function u(e){let{children:t}=e,n=(0,c.useIsClient)(),{token:s,saveToken:u}=(0,i.f)(),d=(0,o.useSearchParams)().get("session_id");return d?n?(console.log("token",s),(0,r.jsx)(l.eA,{url:"wss://backend-us.tenmin.ai/ws"+"/".concat(d)+"?token=".concat(s),label:"Debug Call",toast:a.A,autoconnect:!0,wsAuth:!0,children:t})):(0,r.jsx)("div",{children:"Loading.."}):(0,r.jsx)("div",{children:"Invalid lesson"})}var d=n(6920),x=n(5079),f=n(68),p=n(7743),m=e=>{let{onStartPress:t,onEndPress:n,children:l}=e,[c,a]=(0,s.useState)(!1),o=e=>{"Space"!==e.code||e.repeat||(a(!0),t())},i=e=>{"Space"===e.code&&(a(!1),n())};return(0,s.useEffect)(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}),[]),(0,r.jsx)("button",{onMouseDown:e=>{e.preventDefault(),a(!0),t()},onMouseUp:e=>{e.preventDefault(),a(!1),n()},children:l?l(c):"Press and Hold"})},h=n(357);function b(){let e=(0,l.MV)("AUDIO_CALL",{status:"BACKEND_DISCONNECTED",speedPreference:"NORMAL"}),t=(0,l.MV)("STT",{totalTranscript:"",currTranscript:"",tempTranscript:""}),n=(0,l.MV)("CHAT",{messages:[]}),c=(0,l.MV)("TTS",{captions:"",playbackTimestamp:null}),o=(0,l.MV)("AUTOCOMPLETE",{suggestions:[],translations:[]}),i=(0,s.useContext)(l.Dm);(0,l.$o)(i,a.A);let[u,b]=(0,s.useState)(1),[g,v]=(0,s.useState)(!1),[T,N]=(0,s.useState)(!1);(0,s.useEffect)(()=>((async()=>{await p.P.keepAwake()})(),()=>{(async()=>{await p.P.allowSleep()})()}),[]);let[j,S]=(0,s.useState)(!1),{startSpeaker:w,isPlaying:E}=function(e){let{onPlaybackChange:t,volume:n=1,speed:r=1}=e,c=(0,s.useContext)(l.Dm),a=(0,s.useRef)(null),o=(0,s.useRef)([]),i=(0,s.useRef)(0),u=(0,s.useRef)(null),d=(0,s.useRef)(null),x=(0,s.useRef)(null),[f,p]=(0,s.useState)(!1),m=()=>{if(u.current&&(clearTimeout(u.current),u.current=null),0===o.current.length)return;let e=1,t=o.current.slice(0,1);for(let n of t)if(n&&n.buffer){let t=n.buffer.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=t[n]*e,e-=1/(1*t.length)}o.current.slice(1).forEach(e=>{e.stop()}),o.current=t},h=async e=>{let{i:t,data:n}=e;if(null===a.current){console.error("AudioContext not initialized!");return}0==t&&(o.current.length>0&&m(),i.current=a.current.currentTime);let s=i.current+.1*t/r+.05,l=a.current.currentTime-s;l>0&&(console.log("Audio chunk is late, delaying playback by ".concat(l," seconds.")),s+=l,i.current+=l);let c=a.current.createBufferSource();c.connect(d.current),c.start(s),c.playbackRate.value=r,o.current.push(c),1==o.current.length&&(u.current=setTimeout(()=>{p(!0),u.current=null},50)),c.onended=()=>{o.current.length>0&&o.current.shift(),0===o.current.length&&p(!1)};let x=await new Response(n).arrayBuffer(),f=new Int16Array(x),h=a.current.createBuffer(1,x.byteLength/2,24e3),b=h.getChannelData(0);for(let e=0;e<f.length;e++)b[e]=f[e]/32767;c.buffer=h};return(0,s.useEffect)(()=>{if(!c){console.error("No session found!");return}return c.registerEvent("TTS_CHUNK",h),c.registerEvent("TTS_INTERRUPT",()=>{console.log("TTS_INTERRUPT"),m()}),()=>{null==c||c.deregisterEvent("TTS_CHUNK"),null==c||c.deregisterEvent("TTS_INTERRUPT")}},[c,r]),(0,s.useEffect)(()=>{null==t||t(f)},[f]),(0,s.useEffect)(()=>{d.current&&(d.current.gain.value=n)},[n]),(0,s.useEffect)(()=>{x.current&&(x.current.parameters.get("pitchFactor").value=1/r)},[r]),{isPlaying:f,startSpeaker:()=>{null===a.current&&(a.current=new(window.AudioContext||window.webkitAudioContext),d.current=a.current.createGain(),a.current.audioWorklet.addModule("worklets/phase-vocoder.js").then(()=>{x.current=new AudioWorkletNode(a.current,"phase-vocoder-processor"),d.current.connect(x.current),x.current.connect(a.current.destination),d.current.gain.value=n,x.current.parameters.get("pitchFactor").value=1/r}))}}}({onPlaybackChange:e=>{c.sendAction({type:e?"PLAYBACK_STARTED":"PLAYBACK_FINISHED"})},volume:1,speed:u}),[k,y]=(0,s.useState)(!1),[A,C]=(0,s.useState)(600),[D,R]=(0,s.useState)(0),{isMicActive:L,setMicActive:P}=function(e){let{onSpeechStart:t,onSpeechEnd:n,onAudioData:r,micVolume:l=1}=e,c=(0,s.useRef)(null),a=(0,s.useRef)(null),o=(0,s.useRef)(null),i=(0,s.useRef)(null),[u,d]=(0,s.useState)(!1);(0,s.useEffect)(()=>{u?x():o.current&&p()},[u]);let x=async()=>{try{console.log(navigator.mediaDevices),c.current=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}}),console.log(c.current);let e=new AudioContext,s=e.createMediaStreamSource(c.current);a.current=e.createGain(),s.connect(a.current),a.current.gain.value=l;let u=e.createMediaStreamDestination();a.current.connect(u),o.current=new MediaRecorder(u.stream),await o.current.start(500),o.current.ondataavailable=e=>{null==r||r(e.data)},i.current=await f.MicVAD.new({workletURL:"/vad/vad.worklet.bundle.min.js",modelURL:"/vad/silero_vad.onnx",ortConfig:e=>{e.env.wasm.wasmPaths="/vad/"},stream:c.current,onSpeechStart:()=>{console.log("User started talking"),null==t||t()},onVADMisfire:()=>{console.log("Nvm, user didn't start talking"),null==n||n(!0)},onSpeechEnd:e=>{console.log("User stopped talking"),null==n||n(!1)},positiveSpeechThreshold:.7,negativeSpeechThreshold:.35}),i.current.start()}catch(e){console.error("Error accessing microphone:",e)}},p=()=>{if(o.current&&c.current){var e;c.current.getTracks().forEach(e=>e.stop()),o.current.stop(),null===(e=i.current)||void 0===e||e.destroy()}};return(0,s.useEffect)(()=>{a.current&&(a.current.gain.value=l)},[l]),{isMicActive:u,setMicActive:d}}({onAudioData:e=>{(null==i?void 0:i.isConnected)?t.sendBinary({type:"STREAM_MIC"},e):console.log("Not sending audio data because not connected")},onSpeechStart:()=>{S(!0),t.sendAction({type:"VAD_CHANGED",detected:!0})},onSpeechEnd:()=>{S(!1),t.sendAction({type:"VAD_CHANGED",detected:!1})},micVolume:D});return(0,s.useEffect)(()=>{if(L&&A>0){let e=setInterval(()=>{C(e=>e-1)},1e3);return()=>clearInterval(e)}},[L,A]),(0,s.useEffect)(()=>{let e=document.getElementById("DEBUG_BOTTOM");e&&e.scrollIntoView({behavior:"smooth"})},[n.messages]),(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full items-center tracking-[-0.02em] px-7",children:[(h.env.NEXT_PUBLIC_DEBUG,(0,r.jsxs)("div",{className:"absolute z-50 w-2/3 h-2/3 bg-white/80 border-red-500 border flex flex-col text-black",children:[(0,r.jsx)("p",{className:"text-red-500 text-center",children:"DEBUG-A-TRON-5000"}),(0,r.jsxs)("div",{className:"flex flex-col gap-5 w-full h-full overflow-scroll text-left",children:[n&&n.messages&&n.messages.map((e,t)=>{var n;return(0,r.jsxs)("div",{className:"text-center border border-black bg-blue-500/30 m-3 p-3",children:[(0,r.jsx)("div",{children:null==e?void 0:null===(n=e.role)||void 0===n?void 0:n.toUpperCase()}),(0,r.jsx)("div",{className:"border border-black mb-3"}),(0,r.jsx)("pre",{className:"text-left text-wrap",children:null==e?void 0:e.content})]},t)}),(0,r.jsx)("div",{id:"DEBUG_BOTTOM"})]}),(0,r.jsxs)("div",{className:"mt-20 flex flex-row items-center gap-[2px]",children:["TRANSCRIPT:",(0,r.jsx)("span",{className:"text-gray-500 text-center inline",children:t.totalTranscript}),(0,r.jsx)("span",{className:"text-black text-center inline",children:t.currTranscript}),(0,r.jsx)("span",{className:"text-green-500 text-center inline",children:t.tempTranscript}),(0,r.jsx)("div",{className:"flex flex-col gap-1 ml-2 bg-blue-200 rounded-xl p-2",children:o.suggestions.map((e,t)=>(0,r.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,r.jsxs)("span",{className:"text-blue-700",children:["...",e]},t),o.translations[t]&&(0,r.jsxs)("span",{className:"text-sm text-black",children:["(",o.translations[t],")"]},t)]}))})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)("button",{className:"border border-black bg-blue-500 p-2",onClick:()=>{P(!0),t.sendAction({type:"DEBUG:START"})},children:"START STT"}),(0,r.jsx)("button",{className:"border border-black bg-blue-500 p-2",onClick:()=>{P(!1),t.sendAction({type:"DEBUG:STOP"})},children:"STOP STT"})]}),(0,r.jsxs)("div",{children:["Mic Volume: ",D]}),(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)("button",{className:"border border-black bg-blue-500 p-2",onClick:()=>{w(),c.sendAction({type:"TEST"})},children:"TEST TTS"}),(0,r.jsx)("button",{className:"border border-black bg-green-500 p-2",onClick:()=>{w(),c.sendAction({type:"SAY",text_stream:"Hi Jay"})},children:"Say Hi"}),(0,r.jsx)("input",{type:"range",min:"0.5",max:"1.5",step:"0.05",value:u,onChange:e=>b(parseFloat(e.target.value))}),(0,r.jsxs)("p",{children:["Playback Speed: ",u]}),(0,r.jsxs)("p",{children:["Current TTS Config: ",e.speedPreference]}),(0,r.jsx)("button",{onClick:()=>{e.sendAction({type:"DEBUG"})},children:"PRESS ME"})]})]})),(0,r.jsx)("div",{className:"flex flex-col items-center w-full ",children:(0,r.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,r.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:()=>{y(!1),e.sendAction({type:"STOP_CALL"}),P(!1)},children:(0,r.jsx)(d.G,{icon:x.EOp})}),(0,r.jsxs)("button",{className:"flex flex-col items-center text-sm font-medium",onClick:()=>{e.sendAction({type:"SET_SPEED_PREFERENCE",speed:"SLOW"==e.speedPreference?"NORMAL":"SLOW"})},children:[(0,r.jsx)("div",{className:"text-black/30 ",children:"SLOW"}),(0,r.jsx)("div",{className:"".concat("SLOW"==e.speedPreference?"bg-[#0039FF]":"bg-black/30"," rounded-sm px-[2px] text-white"),children:"SLOW"==e.speedPreference?"ON":"OFF"})]})]})}),(0,r.jsxs)("div",{className:"flex flex-col items-center w-full h-full justify-end absolute bottom-0 gap-5 pb-14 tracking-[-0.02em] px-8 pointer-events-none",children:[(0,r.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 px-8 pb-6 w-screen flex flex-col items-center transform transition-all duration-500",children:(0,r.jsxs)("div",{className:"w-full py-10    bg-white flex flex-col justify-center mt-10 rounded-xl items-center border-black/10 border-[1px] transition-all duration-500 pointer-events-auto",children:[(0,r.jsx)("img",{alt:"",className:"".concat(g?"w-10":"w-20"," ").concat(g?"self-start":""," transition-all duration-500 mx-[10%]")}),g?(0,r.jsxs)("div",{className:"px-[10%] mt-5",children:[(0,r.jsx)("p",{className:"font-medium",children:e.captions}),(0,r.jsx)("div",{className:"border-t-black/20 border-t-[1px] my-2"}),(0,r.jsx)("p",{className:"opacity-35",children:"Translations are coming soon! Stay tuned!"})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("p",{className:"pt-4 font-medium text-gray-800 text-xl ",children:"tutor"}),(0,r.jsx)("p",{className:" text-black/50 mt-1 text-center px-5 ",children:"lesson"})]})]})}),"CONNECTED"!==e.status?(0,r.jsx)("div",{className:"flex w-full gap-4 mt-6 pointer-events-auto",children:(0,r.jsx)("button",{className:" bg-[#0039FF] text-white font-bold px-4 h-[3.6rem] flex-grow rounded-full flex items-center justify-center",onClick:()=>{k||(y(!0),e.sendAction({type:"START_CALL"}),w(),P(!0),v(!0))},children:k?(0,r.jsx)(d.G,{className:"animate-spin",icon:x.LM3}):(0,r.jsx)("p",{className:"font-medium text-lg",children:"Start"})})}):(0,r.jsxs)("div",{className:"pointer-events-auto flex gap-5 text-xl items-center bg-white px-5 py-3 rounded-full border-black/10 border-[1px]",children:[(0,r.jsx)(m,{onStartPress:()=>{L||P(!0),R(1),e.sendAction({type:"PTT_PRESSED"})},onEndPress:()=>{R(0),e.sendAction({type:"PTT_RELEASED"})},children:e=>(0,r.jsx)("div",{className:"bg-blue-300 rounded-xl p-3 ".concat(e?"bg-blue-800":""),children:"PUSH TO TALK (Hold Mouse or Spacebar)"})}),(0,r.jsx)("button",{className:"".concat(g?"text-[#0039FF] text-opacity-100 bg-[#0039FF] bg-opacity-10 ":"text-black text-opacity-50 bg-black bg-opacity-10 ","  text-2xl w-14 h-14 rounded-full"),onClick:()=>{v(!g)},children:(0,r.jsx)(d.G,{icon:x.uKJ})}),"CONNECTED"!==e.status?(0,r.jsx)("button",{className:" bg-[#0039FF] text-white font-bold px-4 h-[3.6rem] rounded-full flex items-center justify-center",onClick:()=>{k||(y(!0),e.sendAction({type:"START_CALL"}),w(),P(!0),v(!0))},children:k?(0,r.jsx)(d.G,{className:"animate-spin",icon:x.LM3}):(0,r.jsx)("p",{className:"font-medium text-lg",children:"Start"})}):(0,r.jsx)("button",{className:"bg-[#EA0038] text-white text-opacity-95 font-bold w-[3.6rem] h-[3.6rem] rounded-full flex items-center justify-center",onClick:()=>{y(!1),e.sendAction({type:"STOP_CALL"}),P(!1),v(!1)},children:(0,r.jsx)(d.G,{icon:x.j1w,className:"rotate-[135deg]"})})]})]})]})}function g(){return(0,r.jsx)(u,{children:(0,r.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-14",children:[(0,r.jsx)(b,{}),(0,r.jsx)(a.x,{position:"top-center",richColors:!0})]})})}},40:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var r=n(3061);let s=()=>{let[e,t]=(0,r.useLocalStorage)("token");return{token:e,saveToken:t}}}},function(e){e.O(0,[676,753,61,168,897,42,971,23,744],function(){return e(e.s=8446)}),_N_E=e.O()}]);