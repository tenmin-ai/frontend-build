(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9525],{6672:function(e,t,n){Promise.resolve().then(n.bind(n,5898))},5898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var a=n(7437),l=n(1189),s=n.n(l),i=n(2265),r=n(9376),u=n(1273),o=n(3510),c=n(4272),d=n(3974),g=n(3772),D=n(9403);function m(e){let{children:t}=e,n=(0,d.useIsClient)(),{token:l}=(0,D.f)(),s=(0,r.useSearchParams)().get("session_id");return s?n?(0,a.jsx)(c.eA,{url:"".concat("wss://backend-us.tenmin.ai/ws","/ws/feedback/").concat(s,"?token=").concat(l),label:"Feedback",toast:g.A,autoconnect:!0,wsAuth:!0,binaryType:"arraybuffer",children:t}):(0,a.jsx)("div",{children:"Loading.."}):(0,a.jsx)("div",{children:"Invalid lesson"})}var f=n(4502);let h=e=>{let{initialValue:t,viewMode:n,editMode:a,onSave:l}=e,[s,r]=(0,i.useState)(!1),[u,o]=(0,i.useState)(t),c=(0,i.useCallback)(()=>{r(!1),l(u)},[u,l]),d=(0,i.useCallback)(()=>{r(!1),o(t)},[t]);return(0,i.useEffect)(()=>{o(t)},[t]),s?a(u,o,c,d):n(t,()=>r(!0))};var x=n(5040),v=n(7140),p=n(6593),C=n(3344);let b=()=>{var e,t,n,l;let D=(0,r.useRouter)();(0,c.$o)((0,i.useContext)(c.Dm),g.A);let m=(0,c.MV)("FEEDBACK",{info:{},feedback:[]}),b=(0,c.MV)("STT",{totalTranscript:"",currTranscript:"",tempTranscript:""}),{setRecording:F,cancelRecording:j}=(0,o.Z)({onAudioData:async e=>{0!=e.size&&(console.log("sending audio",e.size),b.sendBinary({type:"STREAM_MIC"},await e.arrayBuffer()))},onRecordingStart:()=>{console.log("recording start"),b.sendAction({type:"PTT_PRESSED"})},onRecordingStop:e=>{e?b.sendAction({type:"PTT_CANCELLED"}):(console.log("recording stop"),b.sendAction({type:"PTT_RELEASED"}))},onSpeechStart:()=>{console.log("speech start"),b.sendAction({type:"VAD_CHANGED",detected:!0})},onSpeechEnd:()=>{console.log("speech end"),b.sendAction({type:"VAD_CHANGED",detected:!1})},micVolume:1,recordingChunkSize:100}),w=v.M.find(e=>{var t,n;return e.code==(null==m?void 0:null===(n=m.info)||void 0===n?void 0:null===(t=n.student)||void 0===t?void 0:t.fallback_language)}),[y]=(0,d.useLocalStorage)("language"),{data:A}=(0,p.a)({...(0,C.rs)({query:{language:y}})}),k=Object.entries(A||{}),E=Math.min(k.length>0&&(null===(e=k[0][1])||void 0===e?void 0:e.streak)||0,7),N=["Su","Mo","Tu","We","Th","Fr","Sa"],S=new Date().getDay(),T=Array.from({length:E},(e,t)=>(S-E+t+1+7)%7),_=[...T.map(e=>N[e]),...N.filter((e,t)=>!T.includes(t))];return(0,i.useEffect)(()=>{let e=new Audio("fanfare_achievement.mp3");e.volume=.5,e.play()},[]),(0,i.useEffect)(()=>{setTimeout(()=>{let e=document.getElementById("CHAT_BOTTOM");e&&e.scrollIntoView({behavior:"smooth"})},3e3)},[]),(0,a.jsxs)("div",{className:"flex h-full flex-col",children:[(0,a.jsx)("div",{className:"flex w-full flex-col items-center px-7 pb-6",children:(0,a.jsxs)("div",{className:"flex w-full items-center justify-between px-1",children:[(0,a.jsx)("button",{className:"flex h-12 items-center justify-center self-start rounded-full text-black",onClick:()=>{D.push("/premium")},children:(0,a.jsx)(u._0w,{className:"text-xl"})}),(0,a.jsx)("div",{className:"pt-1 font-medium",children:"Great Job!"}),(0,a.jsx)("button",{className:"flex h-12 items-center justify-center self-start rounded-full text-black/30",onClick:()=>{},children:(0,a.jsx)(u.kvo,{className:"text-xl"})})]})}),(0,a.jsxs)("div",{className:"h-full overflow-y-auto",children:[(0,a.jsxs)("div",{className:"mb-16 flex flex-col items-center justify-center",children:[(0,a.jsx)("img",{src:"streak_fire.svg",alt:"Streak Fire",className:"relative z-10 w-16"}),(0,a.jsx)("div",{className:"h-5 w-5 -translate-y-4 scale-x-[2] transform rounded-full bg-[#FFC801]/50"}),(0,a.jsx)("div",{className:"".concat(s().className," mt-4 bg-gradient-to-b from-[#FFB201] to-[#FF9600] bg-clip-text text-6xl font-bold text-transparent"),children:E}),(0,a.jsx)("div",{className:"mt-2 text-xl font-semibold text-[#FF9600]",children:"day streak"}),(0,a.jsxs)("div",{className:"mt-10 flex w-full flex-col items-center rounded-md border-[1px] border-[#DADADA] px-4 py-4",children:[(0,a.jsx)("div",{className:"flex w-full justify-between px-2 font-medium text-black/30",children:_.map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-col items-center ".concat(t<E?"text-[#FF9600]":"text-black/30"),children:[(0,a.jsx)("div",{children:e}),(0,a.jsx)(u.ETl,{className:"text-xl ".concat(t<E?"text-[#FF9600]":"text-[#DADADA]")})]},e))}),(0,a.jsx)("div",{className:"my-4 w-full border-t-[1px] border-[#DADADA]"}),(0,a.jsx)("div",{className:"text-medium text-black/30",children:"Practice daily to grow your streak!"})]})]}),(0,a.jsxs)("div",{className:"flex h-full w-full flex-col px-7",children:[(0,a.jsx)("div",{className:"mt-1 self-start",children:w&&(0,a.jsx)(x.nQ,{profilePicture:(0,a.jsxs)("div",{className:"-mt-1 mb-1 flex h-8 w-fit items-center justify-center gap-1 overflow-visible rounded-xl bg-blue-200 p-2",children:[(0,a.jsx)("img",{src:"/tenmin_new_logo.svg",className:"aspect-square h-full"}),(0,a.jsx)("p",{children:"Tenmin"})]}),isPlaying:!1,message:"Thanks for trying out the lesson ".concat(null===(t=m.info.lesson)||void 0===t?void 0:t.title," with ").concat(null===(n=m.info.tutor)||void 0===n?void 0:n.name,"! Could you please give us some feedback in ").concat(null!==(l=w.name.split(" ")[0])&&void 0!==l?l:"your native language"+(w.flag||""),"? Did everything go smoothly? Did the conversation feel natural?")})}),m.feedback.map((e,t)=>(0,a.jsx)(h,{initialValue:e,viewMode:(e,t)=>(0,a.jsx)(x.ZP,{message:e,onTap:t}),editMode:(e,t,n,l)=>(0,a.jsxs)("div",{className:"mb-8 flex items-center gap-1",children:[(0,a.jsx)("button",{onClick:n,className:"mt-2 rounded-lg bg-blue-400 p-2 text-white",children:(0,a.jsx)(u.l_A,{})}),(0,a.jsx)("button",{onClick:l,className:"mt-2 rounded-lg bg-red-400 p-2 text-white",children:(0,a.jsx)(u._0w,{})}),(0,a.jsx)("input",{value:e,onChange:e=>t(e.target.value),className:"w-full rounded-lg border-2 border-black/10 p-2"})]}),onSave:e=>{m.sendAction({type:"UPDATE_FEEDBACK",index:t,value:e})}},t)),(0,a.jsx)("div",{id:"CHAT_BOTTOM",className:"self-center text-center text-black/30",children:"Simply speak into the microphone and exit whenever! We will only save the text transcription, not your voice recording!"})]})]}),(0,a.jsx)("div",{className:"w-full justify-end gap-5 border-t-2 border-black/10 bg-white pb-10 pt-6 tracking-[-0.02em]",children:(0,a.jsx)(f.y,{onStartPress:()=>{F(!0)},onEndPress:()=>{F(!1)},onCancel:()=>{j()},viewText:!1,setViewText:()=>{},viewQuestion:!1,setViewQuestion:()=>{}})})]})};function F(){return(0,a.jsx)(m,{children:(0,a.jsx)("main",{className:"h-screen-safe flex flex-col justify-between bg-[#FAFBFF] pt-5 tracking-[-0.02em]",children:(0,a.jsx)(b,{})})})}},7140:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var a=n(7437),l=n(1273),s=n(2265),i=n(9376);let r=[{name:"English (US)",flag:"\uD83C\uDDFA\uD83C\uDDF8",code:"en",path:"us United States of America usa.svg",greeting:"Hello"},{name:"English (United Kingdom)",flag:"\uD83C\uDDEC\uD83C\uDDE7",code:"en-GB",path:"gb United Kingdom uk.svg",greeting:"Hello"},{name:"English (Australia)",flag:"\uD83C\uDDE6\uD83C\uDDFA",code:"en-AU",path:"au Australia.svg",greeting:"G'day"},{name:"German (Germany)",flag:"\uD83C\uDDE9\uD83C\uDDEA",code:"de",path:"de Germany.svg",greeting:"Hallo"},{name:"Spanish (Spain)",flag:"\uD83C\uDDEA\uD83C\uDDF8",code:"es",path:"es Spain.svg",greeting:"Hola"},{name:"Korean",flag:"\uD83C\uDDF0\uD83C\uDDF7",code:"ko",path:"kr South Korea.svg",greeting:"안녕"},{name:"French (France)",flag:"\uD83C\uDDEB\uD83C\uDDF7",code:"fr",path:"fr France.svg",greeting:"Bonjour"},{name:"Japanese",flag:"\uD83C\uDDEF\uD83C\uDDF5",code:"ja",path:"jp Japan.svg",greeting:"こんにちは"},{name:"Chinese (China)",flag:"\uD83C\uDDE8\uD83C\uDDF3",code:"zh",path:"cn China.svg",greeting:"你好"},{name:"Chinese (Taiwan)",flag:"\uD83C\uDDF9\uD83C\uDDFC",code:"zh-TW",path:"tw Taiwan.svg",greeting:"你好"},{name:"Hindi",flag:"\uD83C\uDDEE\uD83C\uDDF3",code:"hi",path:"in India.svg",greeting:"नमस्ते"},{name:"Portuguese (Brazil)",flag:"\uD83C\uDDE7\uD83C\uDDF7",code:"pt",path:"br Brazil.svg",greeting:"Ol\xe1"},{name:"Portuguese (Portugal)",flag:"\uD83C\uDDF5\uD83C\uDDF9",code:"pt-PT",path:"pt Portugal.svg",greeting:"Ol\xe1"},{name:"Italian",flag:"\uD83C\uDDEE\uD83C\uDDF9",code:"it",path:"it Italy.svg",greeting:"Ciao"},{name:"Indonesian",flag:"\uD83C\uDDEE\uD83C\uDDE9",code:"id",path:"id Indonesia.svg",greeting:"Halo"},{name:"Dutch",flag:"\uD83C\uDDF3\uD83C\uDDF1",code:"nl",path:"nl Netherlands.svg",greeting:"Hallo"},{name:"Turkish",flag:"\uD83C\uDDF9\uD83C\uDDF7",code:"tr",path:"tr Turkey.svg",greeting:"Merhaba"},{name:"Polish",flag:"\uD83C\uDDF5\uD83C\uDDF1",code:"pl",path:"pl Poland.svg",greeting:"Cześć"},{name:"Swedish",flag:"\uD83C\uDDF8\uD83C\uDDEA",code:"sv",path:"se Sweden.svg",greeting:"Hej"},{name:"Bulgarian",flag:"\uD83C\uDDE7\uD83C\uDDEC",code:"bg",path:"bg Bulgaria.svg",greeting:"Здравейте"},{name:"Romanian",flag:"\uD83C\uDDF7\uD83C\uDDF4",code:"ro",path:"ro Romania.svg",greeting:"Bună"},{name:"Arabic (Saudi Arabia)",flag:"\uD83C\uDDF8\uD83C\uDDE6",code:"ar",path:"sa Saudi Arabia.svg",greeting:"مرحبا"},{name:"Czech",flag:"\uD83C\uDDE8\uD83C\uDDFF",code:"cs",path:"cz Czech Republic.svg",greeting:"Ahoj"},{name:"Greek",flag:"\uD83C\uDDEC\uD83C\uDDF7",code:"el",path:"gr Greece.svg",greeting:"Γειά σας"},{name:"Finnish",flag:"\uD83C\uDDEB\uD83C\uDDEE",code:"fi",path:"fi Finland.svg",greeting:"Hei"},{name:"Hungarian",flag:"\uD83C\uDDED\uD83C\uDDFA",code:"hu",path:"hu Hungary.svg",greeting:"Hell\xf3"},{name:"Norwegian",flag:"\uD83C\uDDF3\uD83C\uDDF4",code:"no",path:"no Norway.svg",greeting:"Hei"},{name:"Vietnamese",flag:"\uD83C\uDDFB\uD83C\uDDF3",code:"vi",path:"vn Vietnam.svg",greeting:"Xin ch\xe0o"},{name:"Slovak",flag:"\uD83C\uDDF8\uD83C\uDDF0",code:"sk",path:"sk Slovakia.svg",greeting:"Ahoj"},{name:"Russian",flag:"\uD83C\uDDF7\uD83C\uDDFA",code:"ru",path:"ru Russia.svg",greeting:"Здравствуйте"},{name:"Ukrainian",flag:"\uD83C\uDDFA\uD83C\uDDE6",code:"uk",path:"ua Ukraine.svg",greeting:"Привіт"},{name:"Malay",flag:"\uD83C\uDDF2\uD83C\uDDFE",code:"ms",path:"my Malaysia.svg",greeting:"Halo"},{name:"Danish",flag:"\uD83C\uDDE9\uD83C\uDDF0",code:"da",path:"dk Denmark.svg",greeting:"Hej"}];t.Z=e=>{let{nextStep:t,previousStep:n,userData:u,setUserData:o}=e,c=(0,i.useSearchParams)().get("learn"),[d,g]=(0,s.useState)(c),D=e=>{g(e),o({...u,language:e})};return(0,a.jsxs)("main",{className:"h-screen-safe flex flex-col items-center bg-[#FAFBFF] px-7 pb-10 pt-3",children:[(0,a.jsx)("div",{className:"flex w-full items-center justify-between",children:(0,a.jsx)("button",{className:"flex h-12 w-12 items-center justify-center self-start rounded-full bg-black bg-opacity-[10%] text-sm font-medium text-black/60",onClick:n,children:(0,a.jsx)(l.bUI,{})})}),(0,a.jsxs)("div",{className:"flex min-h-0 w-full flex-grow flex-col items-start justify-start",children:[(0,a.jsx)("p",{className:"my-7 w-full text-left text-xl font-semibold text-black",children:"What would you like to learn?"}),(0,a.jsxs)("div",{className:"flex min-h-0 w-full flex-grow flex-col gap-3 overflow-y-auto",children:[r.map(e=>(0,a.jsxs)("button",{className:"flex w-full items-center gap-3 rounded-lg border-[1px] px-7 py-4 text-base ".concat(d===e.code?"border-[#0039FF] bg-[#0039FF]/5 text-[#0039FF]":"border-black/10 bg-white"),onClick:()=>D(e.code),children:[(0,a.jsx)("img",{src:"flags/".concat(e.path),alt:"",className:"mr-3 h-5 rounded-md border-[1px] border-[#DADADA]"}),e.name]},e.name)),(0,a.jsx)("p",{className:"text-black/30",children:"We are actively working on adding more languages. Stay tuned!"})]}),(0,a.jsx)("div",{className:"mt-4 flex w-full flex-col items-center gap-3",children:(0,a.jsx)("button",{className:"w-full rounded-full bg-[#0039FF] py-4 font-semibold text-white ".concat(d?"":"cursor-not-allowed opacity-50"),onClick:()=>{d&&t()},disabled:!d,children:"Next question"})})]})]})}},6870:function(e,t,n){"use strict";n.d(t,{GlobalAudioContextProvider:function(){return i},Y:function(){return r}});var a=n(7437),l=n(2265);let s=(0,l.createContext)(null),i=e=>{let{children:t}=e,n=(0,l.useRef)(null);return n.current||(console.log("creating audio context"),n.current=new(window.AudioContext||window.webkitAudioContext),n.current.onstatechange=()=>{var e,t,a,l,s;if(console.log("onstagechange - AudioContext state changed: ",null===(e=n.current)||void 0===e?void 0:e.state),(null===(t=n.current)||void 0===t?void 0:t.state)==="suspended"&&(null===(l=n.current)||void 0===l||l.resume().then(()=>{var e;console.log("AudioContext state: ",null===(e=n.current)||void 0===e?void 0:e.state)}).catch(e=>{console.error("Failed to resume AudioContext:",e)})),(null===(a=n.current)||void 0===a?void 0:a.state)==="running"){let e=null===(s=n.current)||void 0===s?void 0:s.currentTime;setTimeout(()=>{var t;(null===(t=n.current)||void 0===t?void 0:t.currentTime)===e&&(console.warn("AudioContext currentTime is stuck, attempting to fix..."),window.location.reload())},100)}}),(0,a.jsx)(s.Provider,{value:n.current,children:t})},r=()=>{let e=(0,l.useContext)(s);if(!e)throw Error("useAudioContext must be used within a GlobalAudioContextProvider");return e}},9403:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var a=n(3974);let l=()=>{let[e,t]=(0,a.useLocalStorage)("token");return{token:e,saveToken:t}}},2859:function(e,t,n){"use strict";n.d(t,{J:function(){return l}});var a=n(7437);n(2265);let l=e=>{let{icon:t,className:n,...l}=e;return(0,a.jsx)(t,{className:n,...l})}},1189:function(e){e.exports={style:{fontFamily:"'__M_PLUS_Rounded_1c_1ebfbf'",fontStyle:"normal"},className:"__className_1ebfbf"}}},function(e){e.O(0,[5058,7240,6051,4753,254,2278,1649,4272,5563,4438,3344,5955,2971,2117,1744],function(){return e(e.s=6672)}),_N_E=e.O()}]);