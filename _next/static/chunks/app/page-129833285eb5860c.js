(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3958:function(e,t,s){Promise.resolve().then(s.bind(s,8692))},1980:function(e,t,s){"use strict";s.d(t,{BackendProvider:function(){return d},h:function(){return x}});var n=s(7437),l=s(2265),u=s(3061),a=s(2702),r=s(8699),i=s(3191),o=s(6463);a.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),a.Lp.interceptors.request.use((e,t)=>{let s=localStorage.getItem("token");return console.log("Intercepter: "+s),s&&e.headers.set("Authorization","Bearer "+JSON.parse(s)),e});let c=new r.S,D=(0,l.createContext)(void 0),d=e=>{let{children:t}=e,s=(0,u.useIsClient)(),r=(0,o.useRouter)(),[d,x]=(0,l.useState)(null);return((0,l.useEffect)(()=>{if(s){let e=localStorage.getItem("token");x(e),e||r.push("/onboarding")}},[s,r]),s)?(0,n.jsx)(D.Provider,{value:{authedClient:a.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{localStorage.setItem("token",JSON.stringify(e)),x(e)}},children:(0,n.jsx)(i.aH,{client:c,children:t})}):(0,n.jsx)("main",{className:"bg-[#0039FF] h-screen w-screen flex justify-center items-center",children:(0,n.jsx)("img",{src:"tenmin_new_logo_white.svg",alt:"",className:"w-10"})})},x=()=>{let e=(0,l.useContext)(D);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}},8692:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var n=s(7437),l=s(2265),u=s(6920),a=s(5079),r=s(6463),i=s(1980),o=s(2793),c=s(6662),D=s(5355),d=s(9006),x=s(2702);let h=(e,t,s)=>{var n;let l={_id:e,baseUrl:(null!==(n=null==t?void 0:t.client)&&void 0!==n?n:x.Lp).getConfig().baseUrl};return s&&(l._infinite=s),(null==t?void 0:t.body)&&(l.body=t.body),(null==t?void 0:t.headers)&&(l.headers=t.headers),(null==t?void 0:t.path)&&(l.path=t.path),(null==t?void 0:t.query)&&(l.query=t.query),l},m=e=>[h("tutoringGetAll",e)],C=e=>(0,d.C)({queryFn:async t=>{let{queryKey:s}=t,{data:n}=await (0,x.zW)({...e,...s[0],throwOnError:!0});return n},queryKey:m(e)});var b=s(3061);let F={en:"\uD83C\uDDEC\uD83C\uDDE7 English",de:"\uD83C\uDDE9\uD83C\uDDEA German",es:"\uD83C\uDDEA\uD83C\uDDF8 Spanish",ko:"\uD83C\uDDF0\uD83C\uDDF7 Korean",fr:"\uD83C\uDDEB\uD83C\uDDF7 French",ja:"\uD83C\uDDEF\uD83C\uDDF5 Japanese",zh:"\uD83C\uDDE8\uD83C\uDDF3 Chinese",hi:"\uD83C\uDDEE\uD83C\uDDF3 Hindi",pt:"\uD83C\uDDF5\uD83C\uDDF9 Portuguese",it:"\uD83C\uDDEE\uD83C\uDDF9 Italian",id:"\uD83C\uDDEE\uD83C\uDDE9 Indonesian",nl:"\uD83C\uDDF3\uD83C\uDDF1 Dutch",tr:"\uD83C\uDDF9\uD83C\uDDF7 Turkish",pl:"\uD83C\uDDF5\uD83C\uDDF1 Polish",sv:"\uD83C\uDDF8\uD83C\uDDEA Swedish",bg:"\uD83C\uDDE7\uD83C\uDDEC Bulgarian",ro:"\uD83C\uDDF7\uD83C\uDDF4 Romanian",ar:"\uD83C\uDDF8\uD83C\uDDE6 Arabic",cs:"\uD83C\uDDE8\uD83C\uDDFF Czech",el:"\uD83C\uDDEC\uD83C\uDDF7 Greek",fi:"\uD83C\uDDEB\uD83C\uDDEE Finnish",hu:"\uD83C\uDDED\uD83C\uDDFA Hungarian",no:"\uD83C\uDDF3\uD83C\uDDF4 Norwegian",vi:"\uD83C\uDDFB\uD83C\uDDF3 Vietnamese",sk:"\uD83C\uDDF8\uD83C\uDDF0 Slovak",ru:"\uD83C\uDDF7\uD83C\uDDFA Russian",uk:"\uD83C\uDDFA\uD83C\uDDE6 Ukrainian",ms:"\uD83C\uDDF2\uD83C\uDDFE Malay",da:"\uD83C\uDDE9\uD83C\uDDF0 Danish"};function f(){let[e,t]=(0,l.useState)("Speak"),[s,d]=(0,l.useState)(!1),[x,h]=(0,b.useLocalStorage)("language","en"),[m,f]=(0,l.useState)(""),g=(0,r.useRouter)();(0,i.h)();let{data:p,isLoading:j}=(0,D.a)({...C({query:{language:x}})}),k=(e,t)=>{(0,c.oY)({path:{service:"ws"},query:{tutoring_id:e,lesson_id:t}}).then(e=>{e.data&&g.push("/call?session_id=".concat(e.data.session_id))}).catch(e=>{console.error(e)})};return(0,n.jsxs)("main",{className:"flex flex-col bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pt-5 pb-4 px-7 justify-between tracking-[-0.02em]",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("button",{className:"flex items-center",onClick:()=>d(!0),children:(0,n.jsx)("div",{className:"text-black font-bold text-3xl mr-2",children:F[x].split(" ")[0]})}),(0,n.jsxs)(o.y,{isOpen:s,onClose:()=>d(!1),detent:"content-height",tweenConfig:{ease:"easeInOut",duration:.3},children:[(0,n.jsxs)(o.y.Container,{children:[(0,n.jsx)(o.y.Header,{style:{background:"#F6F8FF"}}),(0,n.jsx)(o.y.Content,{style:{backgroundImage:"linear-gradient(to bottom, #F6F8FF, #F7F8FD)"},children:(0,n.jsxs)("div",{className:"p-8 pb-16 text-black",children:[(0,n.jsx)("p",{className:"font-bold text-2xl mb-7",children:"What would you like to learn?"}),(0,n.jsx)("div",{className:"flex flex-col",children:Object.entries(F).map(e=>{let[t,s]=e;return(0,n.jsx)("button",{className:"text-lg border-[1px] border-black/10 p-4 rounded-lg mb-4 bg-white",onClick:()=>{h(t),d(!1)},children:s},t)})})]})})]}),(0,n.jsx)(o.y.Backdrop,{onTap:()=>{d(!1)}})]}),(0,n.jsx)("div",{className:"flex items-center gap-5",children:(0,n.jsx)("button",{onClick:()=>window.open("https://tally.so/r/n0JpK6","_blank"),className:"flex items-center text-[#0039FF] bg-[#0039FF]/5 py-1 px-2 rounded-lg border-[#0039FF]/20 border-[1px] text-sm",children:"Give feedback"})})]}),j&&(0,n.jsx)("p",{children:"Loading..."}),p&&Object.entries(p).map(e=>{let[t,s]=e;return(0,n.jsxs)("div",{className:"flex-1 overflow-y-auto mt-8 scrollbar-hide pb-20",children:[(0,n.jsxs)("div",{className:"bg-white rounded-lg py-7 px-7 mb-8 border-[1px] border-black/10",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-black/50 text-sm",children:"New!"}),(0,n.jsx)("p",{className:"text-2xl leading-8 font-bold text-black mt-2",children:"Free talk with Mina"}),(0,n.jsx)("div",{className:"text-black/50 text-[0.938rem] mt-2",children:"Talk about anything"})]}),(0,n.jsx)("img",{src:"mina.png",className:"w-24 h-24 ml-10 rounded-full"})]}),(0,n.jsx)("button",{className:"text-white bg-[#0039FF] mt-6 py-3 w-full rounded-lg flex items-center justify-center",onClick:()=>{},children:(0,n.jsx)("p",{className:"text-lg font-bold",children:"Start"})})]}),(0,n.jsx)("div",{className:"font-bold",children:"Scenarios"}),(0,n.jsx)("div",{className:"grid grid-cols-2 gap-2 mt-4",children:s.available_lessons.map((e,s)=>(0,n.jsxs)("div",{className:"bg-white rounded-lg py-4 px-4 h-36 flex flex-col justify-between  border-[1px] border-black/10 text-base",onClick:()=>k(t,e.id),children:[(0,n.jsx)("div",{className:"font-medium",children:e.info.title}),(0,n.jsx)("div",{className:"w-full text-right text-6xl",children:e.info.emoji})]},s))})]})}),(0,n.jsxs)("div",{className:"flex justify-around items-center bg-white backdrop-blur-xl shadow-md pt-3 fixed bottom-0 left-0 right-0 text-md pb-10 z-50 border-t-[1px] border-black/10",children:[(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Lessons"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Lessons"),children:[(0,n.jsx)(u.G,{icon:a.FL8,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Lessons"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Chat"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Chat"),children:[(0,n.jsx)(u.G,{icon:a.lXL,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Chat"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Challenges"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Challenges"),children:[(0,n.jsx)(u.G,{icon:a.kWN,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Challenges"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Profile"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Profile"),children:[(0,n.jsx)(u.G,{icon:a.ILF,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Profile"})]})]})]})}}},function(e){e.O(0,[676,119,920,475,542,793,894,662,971,23,744],function(){return e(e.s=3958)}),_N_E=e.O()}]);