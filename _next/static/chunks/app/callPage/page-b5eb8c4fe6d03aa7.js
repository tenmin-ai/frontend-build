(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{496:function(e,t,n){Promise.resolve().then(n.bind(n,5483))},5483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(7437),s=n(2265),l=n(4031),c=n(3061),i=n(7776),u=n(1980),o=n(6463);function a(e){let{children:t}=e,n=(0,c.useIsClient)(),{token:s,saveToken:a,backend_url:d,tutors:f}=(0,u.E)(),h=(0,o.useSearchParams)(),x=f.find(e=>e._id==h.get("id"));return x?n?(console.log("token",s),(0,r.jsx)(l.eA,{url:d+"/".concat(x._id)+"?token=".concat(s),label:"call",toast:i.A,autoconnect:!0,wsAuth:!0,children:t})):(0,r.jsx)("div",{children:"Loading.."}):(0,r.jsx)("div",{children:"Invalid tutor"})}var d=n(6920),f=n(5079);function h(){let e=(0,l.MV)("AUDIO_CALL",{isSpeaking:!1,status:"BACKEND_DISCONNECTED",transcriptFull:"",transcriptPartial:""}),t=(0,o.useRouter)(),{tutors:n}=(0,u.E)(),c=(0,o.useSearchParams)(),i=n.find(e=>e._id==c.get("id"));i||console.error("Tutor not found"),console.log(c);let{startSpeaker:a,isPlaying:h}=function(e){let t=(0,s.useContext)(l.Dm),n=(0,s.useRef)(null),r=(0,s.useRef)([]),c=(0,s.useRef)(0),i=(0,s.useRef)(null),[u,o]=(0,s.useState)(!1),a=()=>{if(i.current&&(clearTimeout(i.current),i.current=null),0===r.current.length)return;let e=1,t=r.current.slice(0,1);for(let n of t)if(n&&n.buffer){let t=n.buffer.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=t[n]*e,e-=1/(1*t.length)}r.current.slice(1).forEach(e=>{e.stop()}),r.current=t},d=async e=>{let{i:t,data:s}=e;if(null===n.current){console.error("AudioContext not initialized!");return}0==t&&(r.current.length>0&&a(),c.current=n.current.currentTime);let l=n.current.createBufferSource();l.connect(n.current.destination),l.start(c.current+.1*t+0),r.current.push(l),1==r.current.length&&(i.current=setTimeout(()=>{o(!0),i.current=null},0)),l.onended=()=>{r.current.length>0&&r.current.shift(),0===r.current.length&&o(!1)};let u=await new Response(s).arrayBuffer(),d=new Int16Array(u),f=n.current.createBuffer(1,u.byteLength/2,24e3),h=f.getChannelData(0);for(let e=0;e<d.length;e++)h[e]=d[e]/32767;l.buffer=f};return(0,s.useEffect)(()=>{if(!t){console.error("No session found!");return}return t.registerEvent("TTS_CHUNK",d),t.registerEvent("TTS_INTERRUPT",()=>{console.log("TTS_INTERRUPT"),a()}),()=>{null==t||t.deregisterEvent("TTS_CHUNK"),null==t||t.deregisterEvent("TTS_INTERRUPT")}},[t]),(0,s.useEffect)(()=>{e.sendAction({type:u?"TTS_PLAYBACK_STARTED":"TTS_PLAYBACK_FINISHED"})},[u]),{isPlaying:u,startSpeaker:()=>{null===n.current&&(n.current=new(window.AudioContext||window.webkitAudioContext))}}}(e),{activated:x,setActivation:m}=function(e){let[t,n]=(0,s.useState)(null),r=(0,s.useRef)(null),[l,c]=(0,s.useState)(!1);(0,s.useEffect)(()=>{l?i():t&&u()},[l]);let i=async()=>{try{console.log(navigator.mediaDevices);let t=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}});r.current=t;let s=new MediaRecorder(t);n(s),await s.start(500),s.ondataavailable=t=>{e.sendBinary({type:"STREAM_MIC"},t.data)}}catch(e){console.error("Error accessing microphone:",e)}},u=()=>{t&&r.current&&(t.stop(),r.current.getTracks().forEach(e=>e.stop()),t.onstop=()=>{})};return{activated:l,setActivation:c}}(e);return(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full items-center",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,r.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,r.jsx)("button",{className:"text-white font-bold text-xl self-start ml-10 ",onClick:()=>{t.back()},children:(0,r.jsx)(d.G,{icon:f.A35})}),(0,r.jsx)("button",{className:"text-transparent font-bold text-xl self-start mr-10",children:(0,r.jsx)(d.G,{icon:f.A35})})]}),(0,r.jsx)("img",{src:null==i?void 0:i.profile_picture_url,alt:"",className:"w-24 mt-10"}),(0,r.jsx)("p",{className:"pt-4 font-semibold text-white text-xl ",children:null==i?void 0:i.name}),(0,r.jsx)("p",{className:"text-white text-center mt-20",children:e.transcriptFull}),(0,r.jsx)("p",{className:"text-green-500 text-center",children:e.transcriptPartial})]}),(0,r.jsxs)("div",{className:"flex gap-14 text-xl",children:[(0,r.jsx)("button",{className:"text-white text-2xl",children:(0,r.jsx)(d.G,{icon:f.UFh})}),"CONNECTED"!==e.status?(0,r.jsx)("button",{className:" bg-green-600 text-white font-bold w-16 h-16 rounded-full flex items-center justify-center",onClick:()=>{e.sendAction({type:"START_CALL"}),a(),m(!0)},children:(0,r.jsx)(d.G,{icon:f.j1w})}):(0,r.jsx)("button",{className:"bg-[#FD3A31] text-white font-bold w-16 h-16 rounded-full flex items-center justify-center",onClick:()=>{e.sendAction({type:"STOP_CALL"}),m(!1)},children:(0,r.jsx)(d.G,{icon:f.j1w,className:"rotate-[135deg]"})}),(0,r.jsx)("button",{className:"text-white text-2xl",onClick:()=>{e.sendAction({type:"SAY",text:"Hello! How are you doing today?"}),a()},children:(0,r.jsx)(d.G,{icon:f.X8G})})]})]})}function x(){return(0,r.jsx)(a,{children:(0,r.jsx)("main",{className:"bg-[#2A2A2A] h-screen py-16",children:(0,r.jsx)(h,{})})})}},1980:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return o},E:function(){return a}});var r=n(7437),s=n(2265),l=n(6463),c=n(750),i=n(3061);let u=(0,s.createContext)(void 0),o=e=>{let{children:t}=e,n=(0,i.useIsClient)(),[o,a]=(0,s.useState)([]),d="https://backend-us.tenmin.ai";(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch(d+"/tutors"),t=await e.json();a(t)}catch(e){console.error("Error fetching data:",e)}})()},[d]);let[f,h]=(0,c._)("token","",{initializeWithValue:!1}),x=(0,l.useRouter)();return((0,s.useEffect)(()=>{f||x.push("/login")},[f,x]),n)?(0,r.jsx)(u.Provider,{value:{token:f,saveToken:h,backend_url:"wss://backend-us.tenmin.ai/ws",tutors:o},children:t}):(0,r.jsx)("div",{children:"Loading.."})},a=()=>{let e=(0,s.useContext)(u);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}}},function(e){e.O(0,[676,772,61,920,776,31,971,23,744],function(){return e(e.s=496)}),_N_E=e.O()}]);