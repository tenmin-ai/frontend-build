(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{496:function(e,t,n){Promise.resolve().then(n.bind(n,5483))},5483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(7437),s=n(2265),l=n(4031),i=n(3061),c=n(7776),o=n(1980),u=n(6463);function a(e){let{children:t}=e,n=(0,i.useIsClient)(),{token:s,saveToken:a,backend_url:d,tutors:f}=(0,o.E)(),h=(0,u.useSearchParams)(),x=f.find(e=>e._id==h.get("id"));return x?n?(console.log("token",s),(0,r.jsx)(l.eA,{url:d+"/".concat(x._id)+"?token=".concat(s),label:"call",toast:c.A,autoconnect:!0,wsAuth:!0,children:t})):(0,r.jsx)("div",{children:"Loading.."}):(0,r.jsx)("div",{children:"Invalid tutor"})}var d=n(6920),f=n(5079);function h(){let e=(0,l.MV)("AUDIO_CALL",{isSpeaking:!1,status:"BACKEND_DISCONNECTED",transcriptFull:"",transcriptPartial:""}),t=(0,s.useContext)(l.Dm);(0,l.$o)(t,c.A);let n=(0,u.useRouter)(),{tutors:i}=(0,o.E)(),a=(0,u.useSearchParams)(),h=i.find(e=>e._id==a.get("id"));h||console.error("Tutor not found"),console.log(a);let{startSpeaker:x,isPlaying:m}=function(e){let t=(0,s.useContext)(l.Dm),n=(0,s.useRef)(null),r=(0,s.useRef)([]),i=(0,s.useRef)(0),c=(0,s.useRef)(null),[o,u]=(0,s.useState)(!1),a=()=>{if(c.current&&(clearTimeout(c.current),c.current=null),0===r.current.length)return;let e=1,t=r.current.slice(0,1);for(let n of t)if(n&&n.buffer){let t=n.buffer.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=t[n]*e,e-=1/(1*t.length)}r.current.slice(1).forEach(e=>{e.stop()}),r.current=t},d=async e=>{let{i:t,data:s}=e;if(null===n.current){console.error("AudioContext not initialized!");return}0==t&&(r.current.length>0&&a(),i.current=n.current.currentTime);let l=n.current.createBufferSource();l.connect(n.current.destination),l.start(i.current+.1*t+0),r.current.push(l),1==r.current.length&&(c.current=setTimeout(()=>{u(!0),c.current=null},0)),l.onended=()=>{r.current.length>0&&r.current.shift(),0===r.current.length&&u(!1)};let o=await new Response(s).arrayBuffer(),d=new Int16Array(o),f=n.current.createBuffer(1,o.byteLength/2,24e3),h=f.getChannelData(0);for(let e=0;e<d.length;e++)h[e]=d[e]/32767;l.buffer=f};return(0,s.useEffect)(()=>{if(!t){console.error("No session found!");return}return t.registerEvent("TTS_CHUNK",d),t.registerEvent("TTS_INTERRUPT",()=>{console.log("TTS_INTERRUPT"),a()}),()=>{null==t||t.deregisterEvent("TTS_CHUNK"),null==t||t.deregisterEvent("TTS_INTERRUPT")}},[t]),(0,s.useEffect)(()=>{e.sendAction({type:o?"TTS_PLAYBACK_STARTED":"TTS_PLAYBACK_FINISHED"})},[o]),{isPlaying:o,startSpeaker:()=>{null===n.current&&(n.current=new(window.AudioContext||window.webkitAudioContext))}}}(e),{activated:g,setActivation:w}=function(e){let[t,n]=(0,s.useState)(null),r=(0,s.useRef)(null),[l,i]=(0,s.useState)(!1);(0,s.useEffect)(()=>{l?c():t&&o()},[l]);let c=async()=>{try{console.log(navigator.mediaDevices);let t=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}});r.current=t;let s=new MediaRecorder(t);n(s),await s.start(500),s.ondataavailable=t=>{e.sendBinary({type:"STREAM_MIC"},t.data)}}catch(e){console.error("Error accessing microphone:",e)}},o=()=>{t&&r.current&&(t.stop(),r.current.getTracks().forEach(e=>e.stop()),t.onstop=()=>{})};return{activated:l,setActivation:i}}(e);return(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full items-center",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,r.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,r.jsx)("button",{className:"text-white font-bold text-xl self-start ml-10 ",onClick:()=>{n.back()},children:(0,r.jsx)(d.G,{icon:f.A35})}),(0,r.jsx)("button",{className:"text-transparent font-bold text-xl self-start mr-10",children:(0,r.jsx)(d.G,{icon:f.A35})})]}),(0,r.jsx)("img",{src:null==h?void 0:h.profile_picture_url,alt:"",className:"w-24 mt-10"}),(0,r.jsx)("p",{className:"pt-4 font-semibold text-white text-xl ",children:null==h?void 0:h.name}),(0,r.jsxs)("div",{className:"mt-20",children:[(0,r.jsx)("span",{className:"text-white text-center inline",children:e.transcriptFull}),(0,r.jsx)("span",{className:"text-green-500 text-center inline",children:e.transcriptPartial})]})]}),(0,r.jsxs)("div",{className:"flex gap-10 text-xl items-center",children:[(0,r.jsx)("button",{className:"text-white text-opacity-85 text-xl bg-white bg-opacity-10 w-14 h-14 rounded-full",onClick:()=>e.sendAction({type:"TEST"}),children:(0,r.jsx)(d.G,{icon:f.UFh})}),"CONNECTED"!==e.status?(0,r.jsx)("button",{className:" bg-green-600 text-white text-opacity-85 font-bold w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center",onClick:()=>{e.sendAction({type:"START_CALL"}),x(),w(!0)},children:(0,r.jsx)(d.G,{icon:f.j1w})}):(0,r.jsx)("button",{className:"bg-[#FD3A31] text-white text-opacity-95 font-bold w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center",onClick:()=>{e.sendAction({type:"STOP_CALL"}),w(!1)},children:(0,r.jsx)(d.G,{icon:f.j1w,className:"rotate-[135deg]"})}),(0,r.jsx)("button",{className:"text-white text-opacity-85 text-xl bg-white bg-opacity-10 w-14 h-14 rounded-full",onClick:()=>c.A.info("This feature is not available yet!"),children:(0,r.jsx)(d.G,{icon:f.X8G})})]})]})}function x(){return(0,r.jsx)(a,{children:(0,r.jsx)("main",{className:"bg-[#1F2021] h-screen py-16",children:(0,r.jsx)(h,{})})})}},1980:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return u},E:function(){return a}});var r=n(7437),s=n(2265),l=n(6463),i=n(750),c=n(3061);let o=(0,s.createContext)(void 0),u=e=>{let{children:t}=e,n=(0,c.useIsClient)(),[u,a]=(0,s.useState)([]),d="https://backend-us.tenmin.ai";(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch(d+"/tutors"),t=await e.json();a(t)}catch(e){console.error("Error fetching data:",e)}})()},[d]);let[f,h]=(0,i._)("token","",{initializeWithValue:!1}),x=(0,l.useRouter)();return((0,s.useEffect)(()=>{f||x.push("/login")},[f,x]),n)?(0,r.jsx)(o.Provider,{value:{token:f,saveToken:h,backend_url:"wss://backend-us.tenmin.ai/ws",tutors:u},children:t}):(0,r.jsx)("div",{children:"Loading.."})},a=()=>{let e=(0,s.useContext)(o);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}}},function(e){e.O(0,[676,772,61,920,776,31,971,23,744],function(){return e(e.s=496)}),_N_E=e.O()}]);