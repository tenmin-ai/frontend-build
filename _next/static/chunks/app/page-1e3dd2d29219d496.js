(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{8478:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=8478,e.exports=t},3958:function(e,t,a){Promise.resolve().then(a.bind(a,1586))},5276:function(e,t,a){"use strict";a.d(t,{BackendProvider:function(){return x},CSPostHogProvider:function(){return f},h:function(){return h}});var n=a(7437),s=a(2265),l=a(3974),r=a(9856),i=a(2979),o=a(9827),c=a(9376),u=a(6214),d=a(3664);r.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),r.Lp.interceptors.request.use((e,t)=>{var a;let n=JSON.parse(null!==(a=localStorage.getItem("token"))&&void 0!==a?a:"null");return n&&e.headers.set("Authorization","Bearer "+n),e});let g=new i.S,m=(0,s.createContext)(void 0),x=e=>{let{children:t}=e,a=(0,l.useIsClient)(),i=(0,c.useRouter)(),u=(0,c.usePathname)(),[d,x]=(0,s.useState)(null);return((0,s.useEffect)(()=>{if(a){let e=localStorage.getItem("token");x(e),console.log(u),e||"/login"===u||i.push("/onboarding")}},[a,i]),a)?(0,n.jsx)(m.Provider,{value:{authedClient:r.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{null===e?localStorage.removeItem("token"):localStorage.setItem("token",JSON.stringify(e)),x(e)}},children:(0,n.jsx)(o.aH,{client:g,children:t})}):(0,n.jsx)("main",{className:"h-screen-safe flex w-screen items-center justify-center bg-[#FAFBFF]",children:(0,n.jsx)("img",{src:"tenmin_two_bubbles.svg",alt:"",className:"w-10"})})},h=()=>{let e=(0,s.useContext)(m);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e};function f(e){let{children:t}=e;return(0,n.jsx)(d.zf,{client:u.ZP,children:t})}u.ZP.init("phc_3RgWCdQuPIThVhLMxGlimaJQHP7ILbqZnxeR8GRkin6",{api_host:"https://ph-proxy.tenmin.ai",person_profiles:"always"})},7140:function(e,t,a){"use strict";a.d(t,{M:function(){return i}});var n=a(7437),s=a(1273),l=a(2265),r=a(9376);let i=[{name:"English (US)",flag:"\uD83C\uDDFA\uD83C\uDDF8",code:"en",path:"us United States of America usa.svg",greeting:"Hello"},{name:"English (United Kingdom)",flag:"\uD83C\uDDEC\uD83C\uDDE7",code:"en-GB",path:"gb United Kingdom uk.svg",greeting:"Hello"},{name:"English (Australia)",flag:"\uD83C\uDDE6\uD83C\uDDFA",code:"en-AU",path:"au Australia.svg",greeting:"G'day"},{name:"German (Germany)",flag:"\uD83C\uDDE9\uD83C\uDDEA",code:"de",path:"de Germany.svg",greeting:"Hallo"},{name:"Spanish (Spain)",flag:"\uD83C\uDDEA\uD83C\uDDF8",code:"es",path:"es Spain.svg",greeting:"Hola"},{name:"Korean",flag:"\uD83C\uDDF0\uD83C\uDDF7",code:"ko",path:"kr South Korea.svg",greeting:"안녕"},{name:"French (France)",flag:"\uD83C\uDDEB\uD83C\uDDF7",code:"fr",path:"fr France.svg",greeting:"Bonjour"},{name:"Japanese",flag:"\uD83C\uDDEF\uD83C\uDDF5",code:"ja",path:"jp Japan.svg",greeting:"こんにちは"},{name:"Chinese (China)",flag:"\uD83C\uDDE8\uD83C\uDDF3",code:"zh",path:"cn China.svg",greeting:"你好"},{name:"Chinese (Taiwan)",flag:"\uD83C\uDDF9\uD83C\uDDFC",code:"zh-TW",path:"tw Taiwan.svg",greeting:"你好"},{name:"Hindi",flag:"\uD83C\uDDEE\uD83C\uDDF3",code:"hi",path:"in India.svg",greeting:"नमस्ते"},{name:"Portuguese (Brazil)",flag:"\uD83C\uDDE7\uD83C\uDDF7",code:"pt",path:"br Brazil.svg",greeting:"Ol\xe1"},{name:"Portuguese (Portugal)",flag:"\uD83C\uDDF5\uD83C\uDDF9",code:"pt-PT",path:"pt Portugal.svg",greeting:"Ol\xe1"},{name:"Italian",flag:"\uD83C\uDDEE\uD83C\uDDF9",code:"it",path:"it Italy.svg",greeting:"Ciao"},{name:"Indonesian",flag:"\uD83C\uDDEE\uD83C\uDDE9",code:"id",path:"id Indonesia.svg",greeting:"Halo"},{name:"Dutch",flag:"\uD83C\uDDF3\uD83C\uDDF1",code:"nl",path:"nl Netherlands.svg",greeting:"Hallo"},{name:"Turkish",flag:"\uD83C\uDDF9\uD83C\uDDF7",code:"tr",path:"tr Turkey.svg",greeting:"Merhaba"},{name:"Polish",flag:"\uD83C\uDDF5\uD83C\uDDF1",code:"pl",path:"pl Poland.svg",greeting:"Cześć"},{name:"Swedish",flag:"\uD83C\uDDF8\uD83C\uDDEA",code:"sv",path:"se Sweden.svg",greeting:"Hej"},{name:"Bulgarian",flag:"\uD83C\uDDE7\uD83C\uDDEC",code:"bg",path:"bg Bulgaria.svg",greeting:"Здравейте"},{name:"Romanian",flag:"\uD83C\uDDF7\uD83C\uDDF4",code:"ro",path:"ro Romania.svg",greeting:"Bună"},{name:"Arabic (Saudi Arabia)",flag:"\uD83C\uDDF8\uD83C\uDDE6",code:"ar",path:"sa Saudi Arabia.svg",greeting:"مرحبا"},{name:"Czech",flag:"\uD83C\uDDE8\uD83C\uDDFF",code:"cs",path:"cz Czech Republic.svg",greeting:"Ahoj"},{name:"Greek",flag:"\uD83C\uDDEC\uD83C\uDDF7",code:"el",path:"gr Greece.svg",greeting:"Γειά σας"},{name:"Finnish",flag:"\uD83C\uDDEB\uD83C\uDDEE",code:"fi",path:"fi Finland.svg",greeting:"Hei"},{name:"Hungarian",flag:"\uD83C\uDDED\uD83C\uDDFA",code:"hu",path:"hu Hungary.svg",greeting:"Hell\xf3"},{name:"Norwegian",flag:"\uD83C\uDDF3\uD83C\uDDF4",code:"no",path:"no Norway.svg",greeting:"Hei"},{name:"Vietnamese",flag:"\uD83C\uDDFB\uD83C\uDDF3",code:"vi",path:"vn Vietnam.svg",greeting:"Xin ch\xe0o"},{name:"Slovak",flag:"\uD83C\uDDF8\uD83C\uDDF0",code:"sk",path:"sk Slovakia.svg",greeting:"Ahoj"},{name:"Russian",flag:"\uD83C\uDDF7\uD83C\uDDFA",code:"ru",path:"ru Russia.svg",greeting:"Здравствуйте"},{name:"Ukrainian",flag:"\uD83C\uDDFA\uD83C\uDDE6",code:"uk",path:"ua Ukraine.svg",greeting:"Привіт"},{name:"Malay",flag:"\uD83C\uDDF2\uD83C\uDDFE",code:"ms",path:"my Malaysia.svg",greeting:"Halo"},{name:"Danish",flag:"\uD83C\uDDE9\uD83C\uDDF0",code:"da",path:"dk Denmark.svg",greeting:"Hej"}];t.Z=e=>{let{nextStep:t,previousStep:a,userData:o,setUserData:c}=e,u=(0,r.useSearchParams)().get("learn"),[d,g]=(0,l.useState)(u),m=e=>{g(e),c({...o,language:e})};return(0,n.jsxs)("main",{className:"h-screen-safe flex flex-col items-center bg-[#FAFBFF] px-7 pb-10 pt-3",children:[(0,n.jsx)("div",{className:"flex w-full items-center justify-between",children:(0,n.jsx)("button",{className:"flex h-12 w-12 items-center justify-center self-start rounded-full bg-black bg-opacity-[10%] text-sm font-medium text-black/60",onClick:a,children:(0,n.jsx)(s.bUI,{})})}),(0,n.jsxs)("div",{className:"flex min-h-0 w-full flex-grow flex-col items-start justify-start",children:[(0,n.jsx)("p",{className:"my-7 w-full text-left text-xl font-semibold text-black",children:"What would you like to learn?"}),(0,n.jsxs)("div",{className:"flex min-h-0 w-full flex-grow flex-col gap-3 overflow-y-auto",children:[i.map(e=>(0,n.jsxs)("button",{className:"flex w-full items-center gap-3 rounded-lg border-[1px] px-7 py-4 text-base ".concat(d===e.code?"border-[#0039FF] bg-[#0039FF]/5 text-[#0039FF]":"border-black/10 bg-white"),onClick:()=>m(e.code),children:[(0,n.jsx)("img",{src:"flags/".concat(e.path),alt:"",className:"mr-3 h-5 rounded-md border-[1px] border-[#DADADA]"}),e.name]},e.name)),(0,n.jsx)("p",{className:"text-black/30",children:"We are actively working on adding more languages. Stay tuned!"})]}),(0,n.jsx)("div",{className:"mt-4 flex w-full flex-col items-center gap-3",children:(0,n.jsx)("button",{className:"w-full rounded-full bg-[#0039FF] py-4 font-semibold text-white ".concat(d?"":"cursor-not-allowed opacity-50"),onClick:()=>{d&&t()},disabled:!d,children:"Next question"})})]})]})}},1586:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var n=a(7437),s=a(3920),l=a.n(s),r=a(2265),i=a(1273),o=a(5168),c=a(9376),u=a(5276),d=a(3069),g=a(9827),m=a(6593),x=a(1770),h=a(3344),f=a(3974),p=a(718),D=a.n(p);let v=e=>{let{color:t="currentColor",strokeColor:a="white",size:s=20}=e;return(0,n.jsxs)("svg",{width:s,height:s,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M19.2177 18.9323C19.2177 19.2155 19.1053 19.4871 18.905 19.6873C18.7048 19.8875 18.4332 20 18.1501 20H1.06765C0.784493 20 0.512932 19.8875 0.312708 19.6873C0.112485 19.4871 2.56995e-07 19.2155 2.56995e-07 18.9323V7.71132C-0.00011262 7.54863 0.0369591 7.38806 0.108384 7.24188C0.179808 7.0957 0.283697 6.96777 0.412114 6.86788L8.95333 0.224948C9.14075 0.0791549 9.37142 0 9.60887 0C9.84631 0 10.077 0.0791549 10.2644 0.224948L18.8056 6.86788C18.934 6.96777 19.0379 7.0957 19.1094 7.24188C19.1808 7.38806 19.2178 7.54863 19.2177 7.71132V18.9323Z",fill:t}),(0,n.jsx)("path",{d:"M14.5853 14.6666C14.1709 14.8873 13.4676 15.0761 12.5643 15.2091C11.661 15.3421 10.5982 15.4133 9.51045 15.4138C8.42265 15.4142 7.35868 15.3439 6.45306 15.2117C5.54744 15.0794 4.84087 14.8912 4.42267 14.6709",stroke:a,strokeWidth:"2",strokeLinecap:"round"})]})};v.propTypes={color:D().string,strokeColor:D().string,size:D().number};var b=e=>{let{rectColor:t="#FFC801",pathColor:a="#FF9600",className:s}=e;return(0,n.jsxs)("svg",{className:s,width:"22",height:"24",viewBox:"0 0 22 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{clipPath:"url(#clip0_4013_8124)",children:[(0,n.jsx)("rect",{x:"4.96094",y:"9.08203",width:"11.5607",height:"9.90913",fill:t}),(0,n.jsx)("path",{d:"M11.5668 1.33847C11.2039 1.10185 10.7213 1.19105 10.4612 1.53753C9.54136 2.76626 8.70346 4.0629 7.94964 5.43943C7.40893 4.94179 6.79915 4.4028 6.16986 3.98667C5.80224 3.74677 5.315 3.83268 5.05231 4.18784C3.90287 5.74943 3.03974 7.69703 2.50857 9.49551C1.98515 11.2679 1.73965 13.0284 1.94669 14.2025C2.84525 19.2985 7.59013 22.901 12.5504 22.0264C17.5665 21.1419 20.7365 16.1397 19.8379 11.0437C19.5675 9.5101 18.5264 7.76238 17.0973 6.10365C15.6514 4.41907 13.7321 2.7356 11.5668 1.33847ZM11.8064 18.2043C10.796 18.3825 9.85212 18.2607 8.91085 17.8502C7.02245 16.9725 6.15709 14.7037 6.84216 12.6805C6.9585 12.2893 7.41356 12.1844 7.72667 12.4421L8.93942 13.4348C9.25653 13.6919 9.73037 13.6001 9.92235 13.2409C10.4334 12.286 11.3475 10.5807 11.8685 9.61169C12.0637 9.24782 12.5423 9.15932 12.8542 9.43375C14.5034 10.8931 15.371 11.8437 15.583 13.0458C16.0614 15.7822 14.3265 17.76 11.8064 18.2043Z",fill:a})]}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"clip0_4013_8124",children:(0,n.jsx)("rect",{width:"18.168",height:"20.7634",fill:"white",transform:"matrix(-0.984808 0.173648 0.173648 0.984808 17.8906 0)"})})})]})},C=a(7140),F=a(940),j=e=>{let{options:t,defaultValue:a,onSegmentChange:s}=e,[l,i]=(0,r.useState)(a||t[0].value);return(0,n.jsx)(F.cJ,{value:l,onIonChange:e=>{let t=e.detail.value;i(t),s&&s(t)},mode:"ios",children:t.map(e=>(0,n.jsx)(F.GO,{value:e.value,children:(0,n.jsx)(F.Q$,{className:"py-1 font-medium",children:e.label})},e.value))})},w=a(386),y=a(4272),k=a(3399),N=a(1755),A=a(9403);let S=()=>{let[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)("Saved"),[l,i]=(0,r.useState)([]),[o,c]=(0,r.useState)(null),[u,d]=(0,r.useState)(""),[g]=(0,f.useLocalStorage)("language"),x=(0,h.rs)({query:{language:g}}),{data:p,isLoading:D}=(0,m.a)({...x});(0,r.useEffect)(()=>{if(p){var e,a;let n=null===(a=Object.entries(p||{})[0])||void 0===a?void 0:null===(e=a[1])||void 0===e?void 0:e.cards;if(n){let e=[];for(let t=0;t<n.length;t++)switch(n[t].type){case"SavedAutocompletion":e.push({id:t,text:n[t].suggestion,translation:n[t].translation||"",type:"SavedAutocompletion",wordForWord:n[t].lexical_items||[]});break;case"SavedTutorMessage":e.push({id:t,text:n[t].message,translation:n[t].translation||"",type:"SavedTutorMessage",wordForWord:n[t].word_for_word||[]});break;case"SavedStudentMessage":e.push({id:t,text:n[t].message,translation:n[t].translation||"",type:"SavedStudentMessage",wordForWord:n[t].word_for_word||[]});break;default:console.warn("Unknown card type: ".concat(n[t].type))}t(e)}}},[p]);let{startRecording:v,stopRecording:b,playRecording:C,stopPlayback:F,isPracticeRecording:A,isPlayingAudio:S}=(0,N.I)(),P=(0,y.MV)("TTS",{volumeMultiplier:1}),{startSpeaker:_,isPlaying:E,latestAudioId:T,latestCharIndex:I}=(0,k.Z)({onPlaybackChange:(e,t)=>{P.sendAction({type:e?"PLAYBACK_STARTED":"PLAYBACK_FINISHED",id:t})},volume:P.volumeMultiplier,speed:1});return(0,n.jsxs)("div",{className:"mb-5 flex h-full w-full flex-col items-center justify-start gap-2 px-7 py-7",children:[(0,n.jsx)(w.e,{isOpen:null!==o,onClose:()=>c(null),detailedTranslation:"number"==typeof o?{wordForWord:e[o].wordForWord,translation:e[o].translation}:o,isTTSPlaying:E&&"e"==T,onTTSPlay:e=>{_(),u&&P.sendAction({type:"SAY",text_stream:null!=e?e:u,id:"e"})},isPracticeRecording:A,setPracticeRecording:e=>{e?v():b()},isPracticePlaying:S,setPracticePlaying:e=>{e?C():F()}}),(0,n.jsx)(j,{options:[{value:"Saved",label:"Saved"},{value:"Recommended",label:"Recommended"}],onSegmentChange:e=>{s(e)}}),(0,n.jsx)("div",{className:"mt-4 flex w-full flex-col gap-2",children:e.map(e=>(0,n.jsxs)("div",{className:"flex h-auto w-full flex-col items-center rounded-lg border-[1px] border-[#DADADA] bg-white p-4",onClick:()=>{d(e.text),c(e)},children:[(0,n.jsx)("div",{className:"w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-sm",children:e.text}),(0,n.jsx)("div",{className:"w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-black/30",children:e.translation})]},e.id))})]})};var P=e=>{let{tutoringId:t}=e,{token:a}=(0,A.f)();return(0,n.jsx)(y.eA,{url:"".concat("wss://backend-us.tenmin.ai","/ws/practice/").concat(t,"?token=").concat(a),label:"Practice",autoconnect:!0,wsAuth:!0,binaryType:"arraybuffer",children:(0,n.jsx)(S,{})})};let _={en:["English (US)","us United States of America usa.svg"],"en-GB":["English (UK)","gb United Kingdom uk.svg"],"en-AU":["English (Australia)","au Australia.svg"],de:["German","de Germany.svg"],es:["Spanish (Spain)","es Spain.svg"],ko:["Korean","kr South Korea.svg"],fr:["French (France)","fr France.svg"],ja:["Japanese","jp Japan.svg"],zh:["Chinese (China)","cn China.svg"],"zh-TW":["Chinese (Taiwan)","tw Taiwan.svg"],hi:["Hindi","in India.svg"],pt:["Portuguese (Brazil)","br Brazil.svg"],"pt-PT":["Portuguese (Portugal)","pt Portugal.svg"],it:["Italian","it Italy.svg"],id:["Indonesian","id Indonesia.svg"],nl:["Dutch","nl Netherlands.svg"],tr:["Turkish","tr Turkey.svg"],pl:["Polish","pl Poland.svg"],sv:["Swedish","se Sweden.svg"],bg:["Bulgarian","bg Bulgaria.svg"],ro:["Romanian","ro Romania.svg"],ar:["Arabic (Saudi Arabia)","sa Saudi Arabia.svg"],cs:["Czech","cz Czech Republic.svg"],el:["Greek","gr Greece.svg"],fi:["Finnish","fi Finland.svg"],hu:["Hungarian","hu Hungary.svg"],no:["Norwegian","no Norway.svg"],vi:["Vietnamese","vn Vietnam.svg"],sk:["Slovak","sk Slovakia.svg"],ru:["Russian","ru Russia.svg"],uk:["Ukrainian","ua Ukraine.svg"],ms:["Malay","my Malaysia.svg"],da:["Danish","dk Denmark.svg"]};function E(){var e,t,a,s;let[p,D]=(0,r.useState)("Home"),[j,w]=(0,r.useState)(!1),[y,k]=(0,f.useLocalStorage)("language","en"),N=(0,r.useRef)(),A=(0,c.useRouter)(),[S,E]=(0,F.j8)(),[T]=(0,F.od)(),{saveToken:I}=(0,u.h)(),B=(0,g.NL)(),R=(0,h.rs)({query:{language:y}}),{data:H,isLoading:L}=(0,m.a)({...R}),O=Object.entries(H||{}),M=(0,h.GI)(),{data:U}=(0,m.a)({...M}),z=null==U?void 0:U.profiles[y],G=(0,x.D)({...(0,h.ax)(),onMutate:async()=>{await S({message:"Updating your profile..."})},onError:async e=>{console.log(e),await E(),await S({message:"Failed to update profile",icon:"close",duration:1e3})},onSuccess:async e=>{B.setQueryData(M.queryKey,e),await E(),await S({message:"Profile updated!",icon:"checkmark",duration:1e3})}}),W=O.length>0&&(null===(e=O[0][1])||void 0===e?void 0:e.streak)?null===(t=O[0][1])||void 0===t?void 0:t.streak:0,K=O.length>0&&(null===(a=O[0][1])||void 0===a?void 0:a.last_lesson_date)?new Date(O[0][1].last_lesson_date):null,J=!K||K.getTime()<new Date().setHours(0,0,0,0),V=(e,t)=>{A.push("/customizeLesson?tutoring_id="+e+"&lesson_id="+t)},[q,Z]=(0,r.useState)({"The Essentials":!0});return(0,r.useEffect)(()=>{}),(0,n.jsxs)("main",{className:"h-screen-safe flex flex-col justify-between bg-[#FAFBFF] pt-5 tracking-[-0.02em]",children:[(0,n.jsxs)(d.y,{ref:N,isOpen:j,onClose:()=>w(!1),detent:"full-height",tweenConfig:{ease:"easeInOut",duration:.3},disableDrag:!0,children:[(0,n.jsxs)(d.y.Container,{style:{background:"#FAFBFF"},children:[(0,n.jsx)(d.y.Header,{}),(0,n.jsx)("p",{className:"px-8 py-5 text-xl font-semibold",children:"What would you like to learn?"}),(0,n.jsx)(d.y.Content,{style:{backgroundColor:"#FAFBFF",paddingBottom:"25px"},children:(0,n.jsx)(d.y.Scroller,{draggableAt:"top",children:(0,n.jsx)("div",{className:"px-8 pb-16 text-black",children:(0,n.jsx)("div",{className:"flex flex-col",children:Object.entries(_).map(e=>{let[t,a]=e;return(0,n.jsxs)("button",{className:"mb-4 flex items-center rounded-lg border-[1px] border-black/10 bg-white p-4 text-lg",onClick:()=>{k(t),w(!1)},children:[(0,n.jsx)("img",{src:"flags/".concat(a[1]),alt:"",className:"mr-3 h-5 rounded-md border-[1px] border-[#DADADA]"}),a[0]]},t)})})})})})]}),(0,n.jsx)(d.y.Backdrop,{onTap:()=>{w(!1)}})]}),(0,n.jsxs)("div",{className:"mx-1 flex items-center justify-between px-7",children:[(0,n.jsx)("button",{className:"flex items-center",onClick:()=>w(!0),children:(0,n.jsx)("div",{className:"mr-2 text-3xl font-bold text-black",children:(0,n.jsx)("img",{src:"flags/".concat(_[y][1]),alt:"",className:"h-7 rounded-md border-[1px] border-[#DADADA]"})})}),(0,n.jsx)("div",{className:"flex items-center gap-5",children:(0,n.jsxs)("button",{className:"flex items-center rounded-lg border-[1px] border-[#DADADA] bg-white px-2 py-1",onClick:()=>{A.push("/streak")},children:[(0,n.jsx)(b,{rectColor:J?"#FFFFFF":"#FFC801",pathColor:J?"#DADADA":"#FF9600"}),(0,n.jsx)("div",{className:"".concat(l().className," ml-0.5 font-semibold ").concat(J?"text-black/20":"text-[#FF9600]"),children:W})]})})]}),"Practice"===p&&O[0]&&(0,n.jsx)(P,{tutoringId:O[0][0]}),"Profile"===p&&(0,n.jsxs)("div",{className:"mb-5 flex h-full w-full flex-col items-center justify-center gap-2 overflow-y-auto px-7",children:[(0,n.jsx)("div",{className:"flex h-24 w-24 flex-none items-center justify-center rounded-full border-2 border-[#0039FF]/10 bg-[#0039FF]/10 text-4xl font-bold text-[#0039FF]/30",children:(null==z?void 0:null===(s=z.nickname)||void 0===s?void 0:s[0])||"?"}),(0,n.jsx)("div",{className:"mt-2 text-2xl font-semibold",children:null==z?void 0:z.nickname}),U&&U.email.endsWith("@random.com")?(0,n.jsx)("div",{className:"flex flex-col items-center gap-2",children:(0,n.jsx)("button",{className:"rounded-full bg-[#0039FF] p-2 px-4 text-white",onClick:()=>A.push("/createaccount"),children:"Create your account!"})}):(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(null==U?void 0:U.email)||"email not found"})}),(0,n.jsx)("div",{className:"text-lg text-black/30",children:{ADMIN:"Administrator",USER:"Premium",TRIAL:"Free Trial"}[(null==U?void 0:U.role)||"TRIAL"]}),(0,n.jsxs)("div",{className:"text-md mt-2 flex flex-wrap items-center justify-center text-black",children:["Learning ",_[y][0]," via \xa0",(0,n.jsx)(F.q_,{children:(0,n.jsx)(F.t9,{"aria-label":"Native Languages",interface:"popover",placeholder:"your native language",className:"rounded-lg border-[1px] border-[#DADADA] px-2",value:G.isPending?G.variables.body.fallback_language:null==z?void 0:z.fallback_language,onIonChange:e=>{let t=e.detail.value;G.mutate({query:{language:y},body:{fallback_language:t}})},children:Object.entries(_).map(e=>{let[t,a]=e;return t!=y&&(0,n.jsx)(F.n0,{value:t,children:a[0]},t)})})})]}),(0,n.jsxs)("button",{onClick:()=>window.open("https://discord.gg/B9Syxz3mVA","_blank"),className:"mt-2 flex items-center rounded-lg border-[1px] border-[#0039FF]/20 bg-[#0039FF]/5 px-2 py-1 text-sm text-[#0039FF]",children:[(0,n.jsx)(i.j2d,{className:"mr-2"}),"Join our discord"]})]}),"Home"===p&&(0,n.jsx)(n.Fragment,{children:O.length>0?O.map(e=>{var t;let[a,s]=e;return(0,n.jsx)("div",{className:"flex h-full flex-col items-center",children:(0,n.jsxs)("div",{className:"flex h-full flex-col items-center justify-center px-7",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 text-sm font-semibold text-[#0039FF]/30",children:[(0,n.jsx)(o.SCG,{className:"h-4"}),"Memory On"]}),(0,n.jsxs)("div",{className:"mt-6 text-center text-2xl font-medium",children:[null===(t=C.M.find(e=>e.code===y))||void 0===t?void 0:t.greeting,", ",null==z?void 0:z.nickname,"! ",(0,n.jsx)("br",{}),"Let’s learn"," ",_[y][0].split(" (")[0],"."]})]})},a)}):!L&&(0,n.jsx)("div",{className:"scrollbar-hide mt-8 flex flex-1 flex-col justify-center overflow-y-auto px-7 pb-20",children:(0,n.jsxs)("div",{className:"pointer-events-auto flex w-full flex-col items-center justify-center rounded-xl border-[1px] border-black/10 bg-white px-8 py-10 transition-all duration-500",children:[(0,n.jsx)(i.EQK,{className:"text-4xl text-[#0039FF]/30"}),(0,n.jsxs)("p",{className:"mt-7 text-center text-base font-light text-black",children:["You have not started learning"," ",_[y][0].split(" (")[0]," yet. Please redo the onboarding to add"," ",_[y][0].split(" (")[0],"."]}),(0,n.jsx)("button",{className:"mt-4 w-full rounded-full bg-[#0039FF] py-3 font-semibold text-white",onClick:()=>A.push("/onboarding?learn=".concat(y)),children:(0,n.jsxs)("div",{className:"font-medium",children:["Start learning"," ",_[y][0].split(" (")[0]]})})]})})}),"Home"===p&&O.length>0&&O.map(e=>{let[t,a]=e;return(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("div",{className:"scrollbar-hide mb-6 flex gap-2 overflow-x-auto overscroll-y-contain px-7",children:a.available_lessons.map((e,a)=>(0,n.jsxs)("div",{className:"flex min-w-32 flex-col items-end justify-between gap-1 rounded-xl border-[1px] border-[#DADADA] bg-white p-4",onClick:()=>V(t,e.id),children:[(0,n.jsx)("div",{className:"w-full text-sm leading-snug",children:e.info.title}),(0,n.jsx)("div",{className:"text-3xl",children:e.info.emoji})]},a))}),(0,n.jsxs)("div",{className:"flex w-full flex-col items-center px-7 pb-2",children:[(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("div",{className:"mx-4 border-t-[1px] border-[#DADADA]"})}),(0,n.jsx)("div",{className:"absolute -translate-y-1/2 transform bg-[#FAFBFF] px-4 text-center text-sm text-black/30",children:"or"})]}),(0,n.jsx)("div",{className:"mt-1 w-full px-7",children:(0,n.jsx)("button",{className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#0039FF] py-4 text-white",onClick:()=>{A.push("/customizeLesson?tutoring_id="+t+"&lesson_id=673289b281b336ee5f36d93c")},children:(0,n.jsx)("p",{className:"text-base font-bold",children:"Smart lesson"})})})]},t)}),(0,n.jsxs)("div",{className:"text-md flex items-center justify-around bg-[#FAFBFF] pb-10 pt-3 shadow-md backdrop-blur-xl",children:[(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Home"===p?"text-[#0039FF]":"text-[#959595]"),onClick:()=>D("Home"),children:[(0,n.jsx)(v,{}),(0,n.jsx)("span",{className:"mt-1 text-[0.65rem]",children:"Home"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Practice"===p?"text-[#0039FF]":"text-[#959595]"),onClick:()=>D("Practice"),children:[(0,n.jsx)(i.nGB,{className:"text-2xl"}),(0,n.jsx)("span",{className:"mt-1 text-[0.65rem]",children:"Practice"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Profile"===p?"text-[#0039FF]":"text-[#959595]"),onClick:()=>D("Profile"),children:[(0,n.jsx)(i.Xws,{className:"text-xl"}),(0,n.jsx)("span",{className:"mt-1 text-[0.65rem]",children:"Profile"})]})]})]})}(0,F.bg)({})},9403:function(e,t,a){"use strict";a.d(t,{f:function(){return s}});var n=a(3974);let s=()=>{let[e,t]=(0,n.useLocalStorage)("token");return{token:e,saveToken:t}}},8049:function(e,t,a){"use strict";var n=a(4397);function s(){}function l(){}l.resetWarningCache=s,e.exports=function(){function e(e,t,a,s,l,r){if(r!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:s};return a.PropTypes=a,a}},718:function(e,t,a){e.exports=a(8049)()},4397:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2859:function(e,t,a){"use strict";a.d(t,{J:function(){return s}});var n=a(7437);a(2265);let s=e=>{let{icon:t,className:a,...s}=e;return(0,n.jsx)(t,{className:a,...s})}},3920:function(e){e.exports={style:{fontFamily:"'__M_PLUS_Rounded_1c_1ebfbf'",fontStyle:"normal"},className:"__className_1ebfbf"}}},function(e){e.O(0,[3845,7240,5878,6051,6950,254,2278,4102,1649,755,4272,4180,3069,3344,3386,2971,2117,1744],function(){return e(e.s=3958)}),_N_E=e.O()}]);