(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{3658:function(e,t,n){Promise.resolve().then(n.bind(n,8646))},8646:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7437),s=n(2265),l=n(4031),c=n(3061),a=n(7776),i=n(6463),o=n(40);function u(e){let{children:t}=e,n=(0,c.useIsClient)(),{token:s,saveToken:u}=(0,o.f)(),d=(0,i.useSearchParams)().get("session_id");return d?n?(console.log("token",s),(0,r.jsx)(l.eA,{url:"wss://backend-us.tenmin.ai/ws"+"/".concat(d)+"?token=".concat(s),label:"Debug Call",toast:a.A,autoconnect:!0,wsAuth:!0,children:t})):(0,r.jsx)("div",{children:"Loading.."}):(0,r.jsx)("div",{children:"Invalid lesson"})}var d=n(6920),x=n(3267);n(3034),n(7322);var f=n(7805),m=n(2793),h=n(5079),g=n(2792),p=n(9728),v=n(7743);function b(){let{startRecording:e,stopRecording:t,playRecording:n,stopPlayback:c,isPracticeRecording:o,isPlayingAudio:u}=function(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),l=(0,s.useRef)(null),c=(0,s.useRef)(null),a=(0,s.useRef)(null),i=(0,s.useRef)([]),[o,u]=(0,s.useState)("");return{startRecording:async()=>{try{let e=await navigator.mediaDevices.getUserMedia({audio:!0});l.current=e,c.current=new MediaRecorder(e),c.current.ondataavailable=e=>{e.data.size>0&&(i.current.push(e.data),console.log(e.data))},c.current.onstop=()=>{let e=new Blob(i.current),n=URL.createObjectURL(e);u(n),console.log("Audio URL:",n),i.current=[],t(!1)},c.current.start(),t(!0)}catch(e){console.error("Error accessing microphone:",e)}},stopRecording:()=>{c.current&&"recording"===c.current.state&&c.current.stop(),l.current&&l.current.getTracks().forEach(e=>{e.stop()}),t(!1)},playRecording:()=>{o?(a.current=new Audio(o),a.current.play(),r(!0),a.current.onended=()=>r(!1)):console.warn("No recording available to play")},stopPlayback:()=>{a.current&&(a.current.pause(),a.current.currentTime=0,r(!1))},isPracticeRecording:e,isPlayingAudio:n}}(),[b,j]=(0,s.useState)(!1),[w,N]=(0,s.useState)([]),[y,k]=(0,s.useState)(""),E=(0,l.MV)("AUDIO_CALL",{status:"BACKEND_DISCONNECTED",speedPreference:"NORMAL"}),S=(0,l.MV)("STT",{totalTranscript:"",currTranscript:"",tempTranscript:""}),T=(0,l.MV)("CHAT",{messages:[]}),A=(0,l.MV)("TTS",{captions:"",playbackTimestamp:null}),C=(0,l.MV)("TRANSLATION",{wordForWord:{},translations:{}}),R=(0,l.MV)("AUTOCOMPLETE",{suggestions:[],transliterations:[],translations:[],wordForWord:[]}),F=(0,s.useContext)(l.Dm);(0,l.$o)(F,a.A);let[D,L]=(0,s.useState)(1),[O,_]=(0,s.useState)(!1),[P,M]=(0,s.useState)(!1);(0,s.useEffect)(()=>((async()=>{await v.P.keepAwake()})(),()=>{(async()=>{await v.P.allowSleep()})()}),[]);let[U,I]=(0,s.useState)(!1),{startSpeaker:G,isPlaying:B}=(0,p.Z)({onPlaybackChange:e=>{A.sendAction({type:e?"PLAYBACK_STARTED":"PLAYBACK_FINISHED"})},volume:1,speed:D}),[V,W]=(0,s.useState)(!1),[H,K]=(0,s.useState)(600),Z=(0,i.useRouter)(),[z,Y]=(0,s.useState)(0),{isMicActive:q,setMicActive:J}=(0,g.Z)({onAudioData:e=>{(null==F?void 0:F.isConnected)?S.sendBinary({type:"STREAM_MIC"},e):console.log("Not sending audio data because not connected")},onSpeechStart:()=>{I(!0),S.sendAction({type:"VAD_CHANGED",detected:!0})},onSpeechEnd:()=>{I(!1),S.sendAction({type:"VAD_CHANGED",detected:!1})},micVolume:z});return(0,s.useEffect)(()=>{if(q&&H>0){let e=setInterval(()=>{K(e=>e-1)},1e3);return()=>clearInterval(e)}},[q,H]),(0,s.useEffect)(()=>{let e=document.getElementById("DEBUG_BOTTOM");e&&e.scrollIntoView({behavior:"smooth"})},[T.messages]),(0,r.jsxs)("div",{className:"flex flex-col h-full items-center tracking-[-0.02em] ",children:[(0,r.jsxs)(m.y,{isOpen:b,onClose:()=>j(!1),detent:"content-height",tweenConfig:{ease:"easeInOut",duration:.3},children:[(0,r.jsx)(m.y.Container,{children:(0,r.jsx)(m.y.Content,{style:{backgroundImage:"white"},children:(0,r.jsxs)("div",{className:"p-8 pb-16 text-black w-full",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("p",{className:"font-semibold text-lg ",children:"Explanation"}),(0,r.jsx)("div",{className:"flex gap-3",children:(0,r.jsx)(d.G,{icon:h.EOp,onClick:()=>j(!1)})})]}),(0,r.jsx)("div",{className:"flex gap-1 mt-4 overflow-x-auto",children:w&&w.length>0&&w.map(e=>(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"font-normal text-xl px-1 bg-black/5 rounded-sm mb-1 text-nowrap",children:e.original}),(0,r.jsx)("div",{className:"text-black px-1 bg-black/5 rounded-sm text-nowrap",children:e.translation})]}))}),(0,r.jsxs)("div",{className:"mt-6 flex items-center gap-2 text-black/30",children:[(0,r.jsx)("div",{className:"material-symbols-rounded !text-xl",children:"translate"}),(0,r.jsx)("div",{children:y})]}),(0,r.jsxs)("div",{className:"flex mt-10 justify-center gap-6 mx-10",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2 flex-1 w-16",children:[(0,r.jsx)("button",{className:"shadow-custom-blue-shadow bg-white rounded-full p-4 h-14 w-14 flex justify-center items-center",children:(0,r.jsx)(d.G,{className:"text-[#0039FF] text-lg",icon:h.zc})}),(0,r.jsx)("div",{className:"text-sm",children:"Play"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2 flex-1 w-16",children:[(0,r.jsx)("button",{onClick:o?t:e,className:"shadow-custom-blue-shadow bg-[#0039FF] rounded-full p-4 h-14 w-14 flex justify-center items-center",children:(0,r.jsx)(d.G,{className:"text-white text-xl",icon:o?h.pL1:h.UOM})}),(0,r.jsx)("div",{className:"text-sm",children:"Practice"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2 flex-1 w-16",children:[(0,r.jsx)("button",{onClick:u?c:n,className:"shadow-custom-blue-shadow bg-white rounded-full p-4 h-14 w-14 flex justify-center items-center",children:(0,r.jsx)(d.G,{className:"text-[#0039FF] text-xl",icon:h.GJz})}),(0,r.jsx)("div",{className:"text-sm",children:"Your sound"})]})]})]})})}),(0,r.jsx)(m.y.Backdrop,{onTap:()=>{j(!1)}})]}),(0,r.jsx)("div",{className:"flex flex-col items-center w-full pb-6 px-7",children:(0,r.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,r.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:()=>{W(!1),E.sendAction({type:"STOP_CALL"}),J(!1),Z.push("/")},children:(0,r.jsx)(d.G,{icon:h.EOp})}),(0,r.jsxs)("button",{className:"flex flex-col items-center text-sm font-medium",onClick:()=>{E.sendAction({type:"SET_SPEED_PREFERENCE",speed:"SLOW"==E.speedPreference?"NORMAL":"SLOW"})},children:[(0,r.jsx)("div",{className:"text-black/30 ",children:"SLOW"}),(0,r.jsx)("div",{className:"".concat("SLOW"==E.speedPreference?"bg-[#0039FF]":"bg-black/30"," rounded-sm px-[2px] text-white"),children:"SLOW"==E.speedPreference?"ON":"OFF"})]})]})}),(0,r.jsxs)("div",{className:"flex-grow w-full overflow-auto px-7 pt-1",children:["CONNECTED"!==E.status&&T&&T.messages.length<2?(0,r.jsx)("div",{className:"flex flex-col items-center justify-center h-full w-full",children:(0,r.jsxs)("div",{className:"bg-white flex flex-col justify-center rounded-xl items-center border-black/10 border-[1px] transition-all duration-500 pointer-events-auto py-10 px-8 w-full",children:[(0,r.jsx)(d.G,{icon:h.YKZ,className:"text-green-500/80 text-4xl"}),(0,r.jsx)("p",{className:"mt-7 font-light text-black/30 text-base text-center",children:"Please ensure you are in a quiet environment suitable for speaking."})]})}):(0,r.jsx)("div",{}),T&&T.messages&&T.messages.map((e,t)=>(null==e?void 0:e.role)==="assistant"?(0,r.jsxs)("div",{className:"bg-white rounded-tl-none rounded-lg py-4 px-4 mb-8 ring-1 ring-black/10 mr-14",children:[(0,r.jsx)("img",{src:"mina.png",className:"w-7 h-7 mb-3 rounded-full"}),(0,r.jsx)("div",{className:"font-medium",children:null==e?void 0:e.content}),(0,r.jsx)("div",{className:"text-black/30",children:C.translations[t]}),(0,r.jsxs)("div",{className:"mt-2 flex gap-2",children:[(0,r.jsx)("div",{className:"material-symbols-rounded text-black/30 !text-xl",children:"volume_up"}),(0,r.jsx)("div",{className:"material-symbols-rounded text-black/30 !text-xl",children:"translate"})]})]},t):(null==e?void 0:e.role)==="user"?(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("div",{className:"bg-[#0039FF]/5 ring-1 rounded-lg py-4 px-4 mb-8 ring-[#0039FF]/20 ml-14 rounded-tr-none",children:(0,r.jsx)("div",{className:"font-normal",children:null==e?void 0:e.content})},t)}):void 0)]}),(0,r.jsx)("div",{className:"w-full justify-end gap-5 tracking-[-0.02em] pointer-events-none",children:(0,r.jsxs)("div",{className:"flex flex-col w-full gap-4 pointer-events-auto bg-white pb-10 pt-8 border-t-2 border-black/10",children:[R.suggestions.length>0&&(0,r.jsx)("div",{className:"flex justify-center text-black/30 font-light",children:"Tap on the card for details \uD83D\uDC47"}),(0,r.jsx)(x.tq,{pagination:!0,modules:[f.tl],className:" bg-white w-screen",children:R.suggestions.map((e,t)=>(0,r.jsx)(x.o5,{className:"!h-auto px-6 py-2 mb-4",children:(0,r.jsxs)("button",{onClick:()=>{N(R.wordForWord[t]),k(R.translations[t]),j(!0)},className:"shadow-custom-shadow w-full h-full bg-white p-4 rounded-lg",children:[(0,r.jsxs)("div",{children:[" ",e]}),(0,r.jsx)("div",{className:"text-black/30",children:R.translations[t]})]})}))}),"CONNECTED"!==E.status?(0,r.jsx)("button",{className:" bg-[#0039FF] mx-8 text-white font-bold px-4 h-[3.6rem] flex-grow rounded-full flex items-center justify-center",onClick:()=>{V||(W(!0),E.sendAction({type:"START_CALL"}),G(),J(!0),_(!0))},children:V?(0,r.jsx)(d.G,{className:"animate-spin",icon:h.LM3}):(0,r.jsx)("p",{className:"font-medium text-lg",children:"Start"})}):(0,r.jsxs)("div",{className:"flex w-full justify-center items-center gap-6",children:[P&&(0,r.jsx)("button",{onClick:()=>{},className:"h-12 w-12 flex justify-center items-center text-xl rounded-full bg-red-200 text-red-600 ring-2 ring-red-600/50",children:(0,r.jsx)(d.G,{icon:h.g82})}),(0,r.jsx)("button",{onClick:()=>{P?(M(!1),Y(0),E.sendAction({type:"PTT_RELEASED"})):(M(!0),q||J(!0),Y(1),E.sendAction({type:"PTT_PRESSED"}))},className:"".concat(P?"bg-[#0039FF]/20 text-[#0039FF] ring-2 ring-[#0039FF]/40":"bg-[#0039FF] text-white","  px-14 py-6 text-3xl rounded-full"),children:(0,r.jsx)(d.G,{icon:P?h.FPD:h.UOM})}),P&&(0,r.jsx)("div",{className:"w-12"})]})]})})]})}function j(){return(0,r.jsx)(u,{children:(0,r.jsx)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pt-5",children:(0,r.jsx)(b,{})})})}},2792:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2265),s=n(68);function l(e){let{onSpeechStart:t,onSpeechEnd:n,onAudioData:l,micVolume:c=1}=e,a=(0,r.useRef)(null),i=(0,r.useRef)(null),o=(0,r.useRef)(null),u=(0,r.useRef)(null),[d,x]=(0,r.useState)(!1);(0,r.useEffect)(()=>{d?f():o.current&&m()},[d]);let f=async()=>{try{console.log(navigator.mediaDevices),a.current=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}}),console.log(a.current);let e=new AudioContext,r=e.createMediaStreamSource(a.current);i.current=e.createGain(),r.connect(i.current),i.current.gain.value=c;let d=e.createMediaStreamDestination();i.current.connect(d),o.current=new MediaRecorder(d.stream),await o.current.start(500),o.current.ondataavailable=e=>{null==l||l(e.data)},u.current=await s.MicVAD.new({workletURL:"/vad/vad.worklet.bundle.min.js",modelURL:"/vad/silero_vad.onnx",ortConfig:e=>{e.env.wasm.wasmPaths="/vad/"},stream:a.current,onSpeechStart:()=>{console.log("User started talking"),null==t||t()},onVADMisfire:()=>{console.log("Nvm, user didn't start talking"),null==n||n(!0)},onSpeechEnd:e=>{console.log("User stopped talking"),null==n||n(!1)},positiveSpeechThreshold:.7,negativeSpeechThreshold:.35}),u.current.start()}catch(e){console.error("Error accessing microphone:",e)}},m=()=>{if(o.current&&a.current){var e;a.current.getTracks().forEach(e=>e.stop()),o.current.stop(),null===(e=u.current)||void 0===e||e.destroy()}};return(0,r.useEffect)(()=>{i.current&&(i.current.gain.value=c)},[c]),{isMicActive:d,setMicActive:x}}},40:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var r=n(3061);let s=()=>{let[e,t]=(0,r.useLocalStorage)("token");return{token:e,saveToken:t}}},9728:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2265),s=n(4031);function l(e){let{onPlaybackChange:t,volume:n=1,speed:l=1}=e,c=(0,r.useContext)(s.Dm),a=(0,r.useRef)(null),i=(0,r.useRef)([]),o=(0,r.useRef)(0),u=(0,r.useRef)(null),d=(0,r.useRef)(null),x=(0,r.useRef)(null),[f,m]=(0,r.useState)(!1),h=()=>{if(u.current&&(clearTimeout(u.current),u.current=null),0===i.current.length)return;let e=1,t=i.current.slice(0,1);for(let n of t)if(n&&n.buffer){let t=n.buffer.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=t[n]*e,e-=1/(1*t.length)}i.current.slice(1).forEach(e=>{e.stop()}),i.current=t},g=async e=>{let{i:t,data:n}=e;if(null===a.current){console.error("AudioContext not initialized!");return}0==t&&(i.current.length>0&&h(),o.current=a.current.currentTime);let r=o.current+.1*t/l+.05,s=a.current.currentTime-r;s>0&&(console.log("Audio chunk is late, delaying playback by ".concat(s," seconds.")),r+=s,o.current+=s);let c=a.current.createBufferSource();c.connect(d.current),c.start(r),c.playbackRate.value=l,i.current.push(c),1==i.current.length&&(u.current=setTimeout(()=>{m(!0),u.current=null},50)),c.onended=()=>{i.current.length>0&&i.current.shift(),0===i.current.length&&m(!1)};let x=await new Response(n).arrayBuffer(),f=new Int16Array(x),g=a.current.createBuffer(1,x.byteLength/2,24e3),p=g.getChannelData(0);for(let e=0;e<f.length;e++)p[e]=f[e]/32767;c.buffer=g};return(0,r.useEffect)(()=>{if(!c){console.error("No session found!");return}return c.registerEvent("TTS_CHUNK",g),c.registerEvent("TTS_INTERRUPT",()=>{console.log("TTS_INTERRUPT"),h()}),()=>{null==c||c.deregisterEvent("TTS_CHUNK"),null==c||c.deregisterEvent("TTS_INTERRUPT")}},[c,l]),(0,r.useEffect)(()=>{null==t||t(f)},[f]),(0,r.useEffect)(()=>{d.current&&(d.current.gain.value=n)},[n]),(0,r.useEffect)(()=>{x.current&&(x.current.parameters.get("pitchFactor").value=1/l)},[l]),{isPlaying:f,startSpeaker:()=>{null===a.current&&(a.current=new(window.AudioContext||window.webkitAudioContext),d.current=a.current.createGain(),a.current.audioWorklet.addModule("worklets/phase-vocoder.js").then(()=>{x.current=new AudioWorkletNode(a.current,"phase-vocoder-processor"),d.current.connect(x.current),x.current.connect(a.current.destination),d.current.gain.value=n,x.current.parameters.get("pitchFactor").value=1/l}))}}}}},function(e){e.O(0,[476,676,753,119,920,542,87,793,214,971,23,744],function(){return e(e.s=3658)}),_N_E=e.O()}]);