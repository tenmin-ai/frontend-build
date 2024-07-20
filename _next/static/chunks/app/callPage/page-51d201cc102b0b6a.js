(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{496:function(e,t,n){Promise.resolve().then(n.bind(n,5483))},5483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(7437),l=n(2265),s=n(4031),c=n(3061),o=n(7776),a=n(1980),i=n(6463);function u(e){let{children:t}=e,n=(0,c.useIsClient)(),{token:l,saveToken:u,backend_url:d}=(0,a.E)(),f=(0,i.useSearchParams)().get("lesson_id");return f?n?(console.log("token",l),(0,r.jsx)(s.eA,{url:d+"/".concat(f)+"?token=".concat(l),label:"call",toast:o.A,autoconnect:!0,wsAuth:!0,children:t})):(0,r.jsx)("div",{children:"Loading.."}):(0,r.jsx)("div",{children:"Invalid lesson"})}var d=n(6920),f=n(5079),x=n(68),h=n(7743);function m(){let e=(0,s.MV)("AUDIO_CALL",{isSpeaking:!1,status:"BACKEND_DISCONNECTED",transcriptFull:"",transcriptPartial:""}),t=(0,l.useContext)(s.Dm);(0,s.$o)(t,o.A);let n=(0,i.useRouter)(),{tutors:c}=(0,a.E)(),u=(0,i.useSearchParams)(),m=c.find(e=>e._id==u.get("tutor_id")),b=null==m?void 0:m.lessons.find(e=>e.id==u.get("lesson_id")),[g,p]=(0,l.useState)(!1),v=(0,l.useRef)(null),[w,j]=(0,l.useState)(null),k=()=>{if(w){y();return}navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{j(e);let t=v.current;t?(t.srcObject=e,t.play().catch(e=>console.error("Error playing video:",e)),p(!g)):console.error("Video element not found")}).catch(e=>{console.error(e)})},y=()=>{w&&(w.getTracks().forEach(e=>e.stop()),j(null),p(!g))};m||console.error("Tutor not found"),(0,l.useEffect)(()=>((async()=>{await h.P.keepAwake()})(),()=>{(async()=>{await h.P.allowSleep()})()}),[]);let[C,N]=(0,l.useState)(!1),{startSpeaker:A,isPlaying:E}=function(e){let{onPlaybackChange:t,volume:n=1}=e,r=(0,l.useContext)(s.Dm),c=(0,l.useRef)(null),o=(0,l.useRef)([]),a=(0,l.useRef)(0),i=(0,l.useRef)(null),u=(0,l.useRef)(null),[d,f]=(0,l.useState)(!1),x=()=>{if(i.current&&(clearTimeout(i.current),i.current=null),0===o.current.length)return;let e=1,t=o.current.slice(0,1);for(let n of t)if(n&&n.buffer){let t=n.buffer.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=t[n]*e,e-=1/(1*t.length)}o.current.slice(1).forEach(e=>{e.stop()}),o.current=t},h=async e=>{let{i:t,data:n}=e;if(null===c.current){console.error("AudioContext not initialized!");return}0==t&&(o.current.length>0&&x(),a.current=c.current.currentTime);let r=a.current+.1*t+.05,l=c.current.currentTime-r;l>0&&(console.log("Audio chunk is late, delaying playback by ".concat(l," seconds.")),r+=l,a.current+=l);let s=c.current.createBufferSource();s.connect(u.current),s.start(r),o.current.push(s),1==o.current.length&&(i.current=setTimeout(()=>{f(!0),i.current=null},50)),s.onended=()=>{o.current.length>0&&o.current.shift(),0===o.current.length&&f(!1)};let d=await new Response(n).arrayBuffer(),h=new Int16Array(d),m=c.current.createBuffer(1,d.byteLength/2,24e3),b=m.getChannelData(0);for(let e=0;e<h.length;e++)b[e]=h[e]/32767;s.buffer=m};return(0,l.useEffect)(()=>{if(!r){console.error("No session found!");return}return r.registerEvent("TTS_CHUNK",h),r.registerEvent("TTS_INTERRUPT",()=>{console.log("TTS_INTERRUPT"),x()}),()=>{null==r||r.deregisterEvent("TTS_CHUNK"),null==r||r.deregisterEvent("TTS_INTERRUPT")}},[r]),(0,l.useEffect)(()=>{null==t||t(d)},[d]),(0,l.useEffect)(()=>{u.current&&(u.current.gain.value=n)},[n]),{isPlaying:d,startSpeaker:()=>{null===c.current&&(c.current=new(window.AudioContext||window.webkitAudioContext),u.current=c.current.createGain(),u.current.connect(c.current.destination),u.current.gain.value=n)}}}({onPlaybackChange:t=>{e.sendAction({type:t?"TTS_PLAYBACK_STARTED":"TTS_PLAYBACK_FINISHED"})},volume:C?.3:1}),[T,_]=(0,l.useState)(!1),{activated:S,setActivation:R}=function(e){let{onSpeechStart:t,onSpeechEnd:n,onAudioData:r}=e,s=(0,l.useRef)(null),c=(0,l.useRef)(null),o=(0,l.useRef)(null),[a,i]=(0,l.useState)(!1);(0,l.useEffect)(()=>{a?u():s.current&&d()},[a]);let u=async()=>{try{console.log("blubblub"),console.log(navigator.mediaDevices),c.current=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}}),console.log(c.current),s.current=new MediaRecorder(c.current),await s.current.start(500),s.current.ondataavailable=e=>{null==r||r(e.data)},o.current=await x.MicVAD.new({workletURL:"/vad/vad.worklet.bundle.min.js",modelURL:"/vad/silero_vad.onnx",ortConfig:e=>{e.env.wasm.wasmPaths="/vad/"},stream:c.current,onSpeechStart:()=>{console.log("User started talking"),null==t||t()},onVADMisfire:()=>{console.log("Nvm, user didn't start talking"),null==n||n(!0)},onSpeechEnd:e=>{console.log("User stopped talking"),null==n||n(!1)}}),o.current.start()}catch(e){console.error("Error accessing microphone:",e)}},d=()=>{if(s.current&&c.current){var e;c.current.getTracks().forEach(e=>e.stop()),s.current.stop(),null===(e=o.current)||void 0===e||e.destroy()}};return{activated:a,setActivation:i}}({onAudioData:n=>{(null==t?void 0:t.isConnected)?e.sendBinary({type:"STREAM_MIC"},n):console.log("Not sending audio data because not connected")},onSpeechStart:()=>{N(!0),e.sendAction({type:"VAD_CHANGED",is_user_speaking:!0})},onSpeechEnd:()=>{N(!1),e.sendAction({type:"VAD_CHANGED",is_user_speaking:!1})}});return(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full items-center tracking-[-0.02em] px-8",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center w-full ",children:[(0,r.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,r.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:()=>{_(!1),e.sendAction({type:"STOP_CALL"}),R(!1),y(),n.back()},children:(0,r.jsx)(d.G,{icon:f.EOp})}),(0,r.jsx)("div",{className:"font-semibold bg-[#63C7B2]/20 text-[#63C7B2] rounded-full h-12 px-4 border-2 border-[#63C7B2] text-lg flex flex-col justify-center",children:(0,r.jsx)("div",{children:"10:00"})})]}),(0,r.jsx)("video",{className:"".concat(g?"scale-100 mt-10":"scale-0 h-0"," w-full rounded-xl border-black/10 border-[1px] transform transition-all duration-500 object-cover h-[48vh]"),ref:v})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center w-full absolute bottom-0 gap-5 pb-14 tracking-[-0.02em] px-8",children:[(0,r.jsxs)("div",{className:"".concat(g?"w-4/5 py-6 max-h-[20vh]":"w-full py-10 mb-[50%]"," bg-white flex flex-col items-center justify-center mt-10 rounded-xl border-black/10 border-[1px] transition-all duration-500 "),children:[(0,r.jsx)("img",{src:null==m?void 0:m.profile_picture_url,alt:"",className:"".concat(g?"w-16":"w-20"," transition-all duration-500")}),(0,r.jsx)("p",{className:"pt-4 font-medium text-gray-800 text-xl ",children:null==m?void 0:m.name}),(0,r.jsx)("p",{className:"text-black/50 mt-1",children:null==b?void 0:b.title})]}),"CONNECTED"!==e.status?(0,r.jsx)("button",{className:" bg-[#0039FF] text-white font-bold px-4 h-[3.6rem] w-full rounded-full flex items-center justify-center",onClick:()=>{T||(_(!0),e.sendAction({type:"START_CALL"}),A(),R(!0))},children:T?(0,r.jsx)(d.G,{className:"animate-spin",icon:f.LM3}):(0,r.jsx)("p",{className:"font-medium text-lg",children:"Start"})}):(0,r.jsxs)("div",{className:"flex gap-5 text-xl items-center bg-white px-5 py-3 rounded-full border-black/10 border-[1px]",children:[(0,r.jsx)("button",{className:"text-black text-opacity-50 text-2xl bg-black bg-opacity-10 w-14 h-14 rounded-full",onClick:()=>o.A.info("This feature is not available yet!"),children:(0,r.jsx)(d.G,{icon:f.UFh})}),(0,r.jsx)("button",{className:"text-black text-opacity-50 text-2xl bg-black bg-opacity-10 w-14 h-14 rounded-full",children:(0,r.jsx)(d.G,{icon:f.uKJ})}),(0,r.jsx)("button",{className:"text-black text-opacity-50 text-2xl bg-black bg-opacity-10 w-14 h-14 rounded-full",onClick:()=>{k()},children:(0,r.jsx)(d.G,{icon:g?f.dRd:f.IyC})}),"CONNECTED"!==e.status?(0,r.jsx)("button",{className:" bg-[#0039FF] text-white font-bold px-4 h-[3.6rem] rounded-full flex items-center justify-center",onClick:()=>{T||(_(!0),e.sendAction({type:"START_CALL"}),A(),R(!0))},children:T?(0,r.jsx)(d.G,{className:"animate-spin",icon:f.LM3}):(0,r.jsx)("p",{className:"font-medium text-lg",children:"Start"})}):(0,r.jsx)("button",{className:"bg-[#EA0038] text-white text-opacity-95 font-bold w-[3.6rem] h-[3.6rem] rounded-full flex items-center justify-center",onClick:()=>{_(!1),e.sendAction({type:"STOP_CALL"}),R(!1),y()},children:(0,r.jsx)(d.G,{icon:f.j1w,className:"rotate-[135deg]"})})]})]})]})}function b(){return(0,r.jsx)(u,{children:(0,r.jsx)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-14",children:(0,r.jsx)(m,{})})})}},1980:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return i},E:function(){return u}});var r=n(7437),l=n(2265),s=n(6463),c=n(750),o=n(3061);let a=(0,l.createContext)(void 0),i=e=>{let{children:t}=e,n=(0,o.useIsClient)(),[i,u]=(0,l.useState)([]),d="https://backend-us.tenmin.ai";(0,l.useEffect)(()=>{(async()=>{try{let e=await fetch(d+"/tutors"),t=await e.json();u(t.map(e=>({...e.tutor,lessons:e.lessons})))}catch(e){console.error("Error fetching data:",e)}})()},[d]);let[f,x]=(0,c._)("token","",{initializeWithValue:!1}),h=(0,s.useRouter)();return((0,l.useEffect)(()=>{f||h.push("/login")},[f,h]),n)?(0,r.jsx)(a.Provider,{value:{token:f,saveToken:x,backend_url:"wss://backend-us.tenmin.ai/ws",tutors:i},children:t}):(0,r.jsx)("div",{children:"Loading.."})},u=()=>{let e=(0,l.useContext)(a);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}}},function(e){e.O(0,[676,753,772,61,920,87,971,23,744],function(){return e(e.s=496)}),_N_E=e.O()}]);