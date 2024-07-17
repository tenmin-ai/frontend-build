(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{496:function(e,t,n){Promise.resolve().then(n.bind(n,5483))},5483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),l=n(2265),s=n(4031),c=n(3061),i=n(7776),a=n(1980),u=n(6463);function o(e){let{children:t}=e,n=(0,c.useIsClient)(),{token:l,saveToken:o,backend_url:d}=(0,a.E)(),f=(0,u.useSearchParams)().get("lesson_id");return f?n?(console.log("token",l),(0,r.jsx)(s.eA,{url:d+"/".concat(f)+"?token=".concat(l),label:"call",toast:i.A,autoconnect:!0,wsAuth:!0,children:t})):(0,r.jsx)("div",{children:"Loading.."}):(0,r.jsx)("div",{children:"Invalid lesson"})}var d=n(6920),f=n(5079),x=n(68);function h(){let e=(0,s.MV)("AUDIO_CALL",{isSpeaking:!1,status:"BACKEND_DISCONNECTED",transcriptFull:"",transcriptPartial:""}),t=(0,l.useContext)(s.Dm);(0,s.$o)(t,i.A);let n=(0,u.useRouter)(),{tutors:c}=(0,a.E)(),o=(0,u.useSearchParams)(),h=c.find(e=>e._id==o.get("tutor_id"));h||console.error("Tutor not found");let[m,g]=(0,l.useState)(!1),{startSpeaker:b,isPlaying:p}=function(e){let{onPlaybackChange:t,volume:n=1}=e,r=(0,l.useContext)(s.Dm),c=(0,l.useRef)(null),i=(0,l.useRef)([]),a=(0,l.useRef)(0),u=(0,l.useRef)(null),o=(0,l.useRef)(null),[d,f]=(0,l.useState)(!1),x=()=>{if(u.current&&(clearTimeout(u.current),u.current=null),0===i.current.length)return;let e=1,t=i.current.slice(0,1);for(let n of t)if(n&&n.buffer){let t=n.buffer.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=t[n]*e,e-=1/(1*t.length)}i.current.slice(1).forEach(e=>{e.stop()}),i.current=t},h=async e=>{let{i:t,data:n}=e;if(null===c.current){console.error("AudioContext not initialized!");return}0==t&&(i.current.length>0&&x(),a.current=c.current.currentTime);let r=a.current+.1*t+.05,l=c.current.currentTime-r;l>0&&(console.log("Audio chunk is late, delaying playback by ".concat(l," seconds.")),r+=l,a.current+=l);let s=c.current.createBufferSource();s.connect(o.current),s.start(r),i.current.push(s),1==i.current.length&&(u.current=setTimeout(()=>{f(!0),u.current=null},50)),s.onended=()=>{i.current.length>0&&i.current.shift(),0===i.current.length&&f(!1)};let d=await new Response(n).arrayBuffer(),h=new Int16Array(d),m=c.current.createBuffer(1,d.byteLength/2,24e3),g=m.getChannelData(0);for(let e=0;e<h.length;e++)g[e]=h[e]/32767;s.buffer=m};return(0,l.useEffect)(()=>{if(!r){console.error("No session found!");return}return r.registerEvent("TTS_CHUNK",h),r.registerEvent("TTS_INTERRUPT",()=>{console.log("TTS_INTERRUPT"),x()}),()=>{null==r||r.deregisterEvent("TTS_CHUNK"),null==r||r.deregisterEvent("TTS_INTERRUPT")}},[r]),(0,l.useEffect)(()=>{null==t||t(d)},[d]),(0,l.useEffect)(()=>{o.current&&(o.current.gain.value=n)},[n]),{isPlaying:d,startSpeaker:()=>{null===c.current&&(c.current=new(window.AudioContext||window.webkitAudioContext),o.current=c.current.createGain(),o.current.connect(c.current.destination),o.current.gain.value=n)}}}({onPlaybackChange:t=>{e.sendAction({type:t?"TTS_PLAYBACK_STARTED":"TTS_PLAYBACK_FINISHED"})},volume:m?.3:1}),[j,v]=(0,l.useState)(!1),{activated:w,setActivation:C}=function(e){let{onSpeechStart:t,onSpeechEnd:n,onAudioData:r}=e,s=(0,l.useRef)(null),c=(0,l.useRef)(null),i=(0,l.useRef)(null),[a,u]=(0,l.useState)(!1);(0,l.useEffect)(()=>{a?o():s.current&&d()},[a]);let o=async()=>{try{console.log(navigator.mediaDevices),c.current=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}}),s.current=new MediaRecorder(c.current),await s.current.start(500),s.current.ondataavailable=e=>{null==r||r(e.data)},i.current=await x.MicVAD.new({workletURL:"/vad/vad.worklet.bundle.min.js",modelURL:"/vad/silero_vad.onnx",ortConfig:e=>{e.env.wasm.wasmPaths="/vad/"},stream:c.current,onSpeechStart:()=>{console.log("User started talking"),null==t||t()},onVADMisfire:()=>{console.log("Nvm, user didn't start talking"),null==n||n(!0)},onSpeechEnd:e=>{console.log("User stopped talking"),null==n||n(!1)}}),i.current.start()}catch(e){console.error("Error accessing microphone:",e)}},d=()=>{if(s.current&&c.current){var e;c.current.getTracks().forEach(e=>e.stop()),s.current.stop(),null===(e=i.current)||void 0===e||e.destroy()}};return{activated:a,setActivation:u}}({onAudioData:n=>{(null==t?void 0:t.isConnected)?e.sendBinary({type:"STREAM_MIC"},n):console.log("Not sending audio data because not connected")},onSpeechStart:()=>{g(!0),e.sendAction({type:"VAD_CHANGED",is_user_speaking:!0})},onSpeechEnd:()=>{g(!1),e.sendAction({type:"VAD_CHANGED",is_user_speaking:!1})}});return(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full items-center tracking-[-0.02em] px-8",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center w-full ",children:[(0,r.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,r.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:()=>{n.back()},children:(0,r.jsx)(d.G,{icon:f.EOp})}),(0,r.jsx)("div",{className:"font-semibold bg-[#63C7B2]/20 text-[#63C7B2] rounded-full h-12 px-4 border-2 border-[#63C7B2] text-lg flex flex-col justify-center",children:(0,r.jsx)("div",{children:"10:00"})})]}),(0,r.jsxs)("div",{className:"w-full bg-white flex flex-col items-center justify-center py-10 mt-10 rounded-xl border-black/10 border-[1px]",children:[(0,r.jsx)("img",{src:null==h?void 0:h.profile_picture_url,alt:"",className:"w-20"}),(0,r.jsx)("p",{className:"pt-4 font-medium text-gray-800 text-xl ",children:null==h?void 0:h.name})]}),(0,r.jsxs)("div",{className:"mt-20",children:[(0,r.jsx)("span",{className:"text-white text-center inline",children:e.transcriptFull}),(0,r.jsx)("span",{className:"text-green-500 text-center inline",children:e.transcriptPartial})]})]}),"CONNECTED"!==e.status?(0,r.jsx)("button",{className:" bg-[#0039FF] text-white font-bold px-4 h-[3.6rem] w-full rounded-full flex items-center justify-center",onClick:()=>{j||(v(!0),e.sendAction({type:"START_CALL"}),b(),C(!0))},children:j?(0,r.jsx)(d.G,{className:"animate-spin",icon:f.LM3}):(0,r.jsx)("p",{className:"font-medium text-lg",children:"Start"})}):(0,r.jsxs)("div",{className:"flex gap-5 text-xl items-center bg-white px-5 py-3 rounded-full border-black/10 border-[1px]",children:[(0,r.jsx)("button",{className:"text-black text-opacity-50 text-2xl bg-black bg-opacity-10 w-14 h-14 rounded-full",onClick:()=>i.A.info("This feature is not available yet!"),children:(0,r.jsx)(d.G,{icon:f.UFh})}),(0,r.jsx)("button",{className:"text-black text-opacity-50 text-2xl bg-black bg-opacity-10 w-14 h-14 rounded-full",children:(0,r.jsx)(d.G,{icon:f.uKJ})}),(0,r.jsx)("button",{className:"text-black text-opacity-50 text-2xl bg-black bg-opacity-10 w-14 h-14 rounded-full",children:(0,r.jsx)(d.G,{icon:f.IyC})}),"CONNECTED"!==e.status?(0,r.jsx)("button",{className:" bg-[#0039FF] text-white font-bold px-4 h-[3.6rem] rounded-full flex items-center justify-center",onClick:()=>{j||(v(!0),e.sendAction({type:"START_CALL"}),b(),C(!0))},children:j?(0,r.jsx)(d.G,{className:"animate-spin",icon:f.LM3}):(0,r.jsx)("p",{className:"font-medium text-lg",children:"Start"})}):(0,r.jsx)("button",{className:"bg-[#EA0038] text-white text-opacity-95 font-bold w-[3.6rem] h-[3.6rem] rounded-full flex items-center justify-center",onClick:()=>{v(!1),e.sendAction({type:"STOP_CALL"}),C(!1)},children:(0,r.jsx)(d.G,{icon:f.j1w,className:"rotate-[135deg]"})})]})]})}function m(){return(0,r.jsx)(o,{children:(0,r.jsx)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-14",children:(0,r.jsx)(h,{})})})}},1980:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return u},E:function(){return o}});var r=n(7437),l=n(2265),s=n(6463),c=n(750),i=n(3061);let a=(0,l.createContext)(void 0),u=e=>{let{children:t}=e,n=(0,i.useIsClient)(),[u,o]=(0,l.useState)([]),d="https://backend-us.tenmin.ai";(0,l.useEffect)(()=>{(async()=>{try{let e=await fetch(d+"/tutors"),t=await e.json();o(t.map(e=>({...e.tutor,lessons:e.lessons})))}catch(e){console.error("Error fetching data:",e)}})()},[d]);let[f,x]=(0,c._)("token","",{initializeWithValue:!1}),h=(0,s.useRouter)();return((0,l.useEffect)(()=>{f||h.push("/login")},[f,h]),n)?(0,r.jsx)(a.Provider,{value:{token:f,saveToken:x,backend_url:"wss://backend-us.tenmin.ai/ws",tutors:u},children:t}):(0,r.jsx)("div",{children:"Loading.."})},o=()=>{let e=(0,l.useContext)(a);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}}},function(e){e.O(0,[676,753,772,61,920,878,971,23,744],function(){return e(e.s=496)}),_N_E=e.O()}]);