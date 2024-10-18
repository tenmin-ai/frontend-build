(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{8234:function(e,l,a){Promise.resolve().then(a.bind(a,2003))},1980:function(e,l,a){"use strict";a.d(l,{BackendProvider:function(){return d},h:function(){return m}});var t=a(7437),n=a(2265),u=a(3061),s=a(2702),D=a(8699),c=a(3191),o=a(6463);s.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),s.Lp.interceptors.request.use((e,l)=>{let a=localStorage.getItem("token");return console.log("Intercepter: "+a),a&&e.headers.set("Authorization","Bearer "+JSON.parse(a)),e});let i=new D.S,r=(0,n.createContext)(void 0),d=e=>{let{children:l}=e,a=(0,u.useIsClient)(),D=(0,o.useRouter)(),[d,m]=(0,n.useState)(null);return((0,n.useEffect)(()=>{if(a){let e=localStorage.getItem("token");m(e),e||D.push("/onboarding")}},[a,D]),a)?(0,t.jsx)(r.Provider,{value:{authedClient:s.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{localStorage.setItem("token",JSON.stringify(e)),m(e)}},children:(0,t.jsx)(c.aH,{client:i,children:l})}):(0,t.jsx)("main",{className:"bg-[#0039FF] h-screen w-screen flex justify-center items-center",children:(0,t.jsx)("img",{src:"tenmin_new_logo_white.svg",alt:"",className:"w-10"})})},m=()=>{let e=(0,n.useContext)(r);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}},2003:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return j}});var t=a(7437),n=a(2265),u=a(1980),s=e=>{let{nextStep:l,router:a}=e,{isLoggedIn:n}=(0,u.h)();return(0,t.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-7 flex flex-col items-center px-7",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center flex-grow justify-center",children:[(0,t.jsx)("img",{src:"/tenmin_new.svg",alt:""}),(0,t.jsx)("p",{className:"mt-5 text-black/30",children:"Learn how to speak any language!"})]}),(0,t.jsx)("div",{className:"flex flex-col items-center w-full gap-3",children:(0,t.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold",onClick:l,children:"Get started"})})]})},D=a(5079),c=a(6920);let o=[{name:"German",flag:"\uD83C\uDDE9\uD83C\uDDEA",code:"de"},{name:"English",flag:"\uD83C\uDDEC\uD83C\uDDE7",code:"en"},{name:"Spanish",flag:"\uD83C\uDDEA\uD83C\uDDF8",code:"es"},{name:"Korean",flag:"\uD83C\uDDF0\uD83C\uDDF7",code:"ko"},{name:"French",flag:"\uD83C\uDDEB\uD83C\uDDF7",code:"fr"},{name:"Japanese",flag:"\uD83C\uDDEF\uD83C\uDDF5",code:"ja"},{name:"Chinese",flag:"\uD83C\uDDE8\uD83C\uDDF3",code:"zh"},{name:"Hindi",flag:"\uD83C\uDDEE\uD83C\uDDF3",code:"hi"},{name:"Portuguese",flag:"\uD83C\uDDF5\uD83C\uDDF9",code:"pt"},{name:"Italian",flag:"\uD83C\uDDEE\uD83C\uDDF9",code:"it"},{name:"Indonesian",flag:"\uD83C\uDDEE\uD83C\uDDE9",code:"id"},{name:"Dutch",flag:"\uD83C\uDDF3\uD83C\uDDF1",code:"nl"},{name:"Turkish",flag:"\uD83C\uDDF9\uD83C\uDDF7",code:"tr"},{name:"Polish",flag:"\uD83C\uDDF5\uD83C\uDDF1",code:"pl"},{name:"Swedish",flag:"\uD83C\uDDF8\uD83C\uDDEA",code:"sv"},{name:"Bulgarian",flag:"\uD83C\uDDE7\uD83C\uDDEC",code:"bg"},{name:"Romanian",flag:"\uD83C\uDDF7\uD83C\uDDF4",code:"ro"},{name:"Arabic",flag:"\uD83C\uDDF8\uD83C\uDDE6",code:"ar"},{name:"Czech",flag:"\uD83C\uDDE8\uD83C\uDDFF",code:"cs"},{name:"Greek",flag:"\uD83C\uDDEC\uD83C\uDDF7",code:"el"},{name:"Finnish",flag:"\uD83C\uDDEB\uD83C\uDDEE",code:"fi"},{name:"Hungarian",flag:"\uD83C\uDDED\uD83C\uDDFA",code:"hu"},{name:"Norwegian",flag:"\uD83C\uDDF3\uD83C\uDDF4",code:"no"},{name:"Vietnamese",flag:"\uD83C\uDDFB\uD83C\uDDF3",code:"vi"},{name:"Slovak",flag:"\uD83C\uDDF8\uD83C\uDDF0",code:"sk"},{name:"Russian",flag:"\uD83C\uDDF7\uD83C\uDDFA",code:"ru"},{name:"Ukrainian",flag:"\uD83C\uDDFA\uD83C\uDDE6",code:"uk"},{name:"Malay",flag:"\uD83C\uDDF2\uD83C\uDDFE",code:"ms"},{name:"Danish",flag:"\uD83C\uDDE9\uD83C\uDDF0",code:"da"}];var i=e=>{let{nextStep:l,previousStep:a,userData:u,setUserData:s}=e,[i,r]=(0,n.useState)(null),d=e=>{r(e),s({...u,language:e})};return(0,t.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-7 flex flex-col items-center px-7",children:[(0,t.jsx)("div",{className:"flex w-full justify-between items-center",children:(0,t.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:a,children:(0,t.jsx)(c.G,{icon:D.A35})})}),(0,t.jsxs)("div",{className:"flex flex-col items-start flex-grow justify-start w-full min-h-0",children:[(0,t.jsx)("p",{className:"my-7 text-black text-xl text-left font-semibold w-full",children:"What would you like to learn?"}),(0,t.jsxs)("div",{className:"overflow-y-auto w-full flex-grow min-h-0 flex flex-col gap-3",children:[o.map(e=>(0,t.jsxs)("button",{className:"text-base border-[1px] py-4 px-7 rounded-lg w-full flex gap-3 items-center ".concat(i===e.code?"bg-[#0039FF]/5 border-[#0039FF] text-[#0039FF]":"bg-white border-black/10"),onClick:()=>d(e.code),children:[(0,t.jsx)("p",{className:"text-2xl",children:e.flag}),e.name]},e.name)),(0,t.jsx)("p",{className:"text-black/30",children:"We are actively working on adding more languages. Stay tuned!"})]})]}),(0,t.jsx)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:(0,t.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold ".concat(i?"":"opacity-50 cursor-not-allowed"),onClick:()=>{i&&l()},disabled:!i,children:"Next question"})})]})},r=e=>{let{nextStep:l,previousStep:a,setUserData:u,userData:s}=e,[o,i]=(0,n.useState)("");return(0,t.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-7 flex flex-col items-center px-7",children:[(0,t.jsx)("div",{className:"flex w-full justify-between items-center",children:(0,t.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:a,children:(0,t.jsx)(c.G,{icon:D.A35})})}),(0,t.jsxs)("div",{className:"flex flex-col items-start flex-grow justify-start w-full min-h-0",children:[(0,t.jsx)("p",{className:"my-7 text-black text-xl text-left font-semibold w-full",children:"Last question! How should we call you?"}),(0,t.jsxs)("div",{className:"overflow-y-auto w-full flex-grow min-h-0 flex flex-col gap-3",children:[(0,t.jsx)("input",{type:"text",placeholder:"Your name (e.g. John)",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:o,onChange:e=>{i(e.target.value),u({...s,profile:{...s.profile,nickname:e.target.value}})}}),(0,t.jsx)("p",{className:"text-black/30",children:"This is how our AI tutor will address you during the lessons."})]})]}),(0,t.jsx)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:(0,t.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold ".concat(o.trim()?"":"opacity-50 cursor-not-allowed"),onClick:()=>{o.trim()&&l()},disabled:!o.trim(),children:"Finish"})})]})},d=a(6572),m=a(3730),f=a.n(m),x=a(6662);let g=new(f());var F=e=>{let{nextStep:l,previousStep:a,setUserData:s,userData:o,router:i}=e,{isLoggedIn:r,saveToken:m}=(0,u.h)(),[f,F]=(0,n.useState)(()=>(null==o?void 0:o.profile.nickname)||null),[C,h]=(0,n.useState)("RANDOM"),[b,p]=(0,n.useState)("RANDOM@RANDOM.COM"),[w,j]=(0,n.useState)("RANDOM"),[N,k]=(0,n.useState)(!1);return(0,t.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-7 flex flex-col items-center px-7",children:[(0,t.jsx)("div",{className:"flex w-full justify-between items-center",children:(0,t.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:a,children:(0,t.jsx)(c.G,{icon:D.A35})})}),(0,t.jsx)("div",{className:"flex flex-col items-center flex-grow justify-center",children:(0,t.jsxs)("div",{className:"mt-5 text-black/30 text-lg text-center",children:[(0,t.jsx)("p",{className:"font-semibold text-2xl mb-2 text-black",children:(0,t.jsx)(d.e,{splitter:e=>g.splitGraphemes(e),sequence:["Hallo ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Hola ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Bonjour ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Ciao ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Hello ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"こんにちは ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"안녕하세요 ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"你好 ".concat(null!=f?f:"Friend"," \uD83C\uDF89")],wrapper:"span",speed:50,style:{display:"inline-block"},cursor:!1,repeat:1/0})}),"Let's start your first lesson! We will jump right in."]})}),r?(0,t.jsx)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:(0,t.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold",onClick:()=>{(0,x.Hy)({body:o}).then(e=>{e.data&&i.push("/debug?session_id=".concat(e.data.session_id))}).catch(e=>{var l;return alert(null===(l=e.body)||void 0===l?void 0:l.detail)})},children:"Continue"})}):(0,t.jsxs)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:[N&&(0,t.jsx)("div",{className:"flex flex-col items-center w-full gap-2",children:(0,t.jsx)("div",{className:"my-2 w-1/2 h-px bg-gray-300"})}),(0,t.jsx)("button",{className:"bg-[#0039FF] text-white border border-[#DADADA] py-3 w-full rounded-lg font-semibold",onClick:()=>{if(!b||!w){alert("Please enter your email and password");return}(0,x.c_)({body:{...o,account:{username:C,email:b,password:w}}}).then(e=>{e.data?(m(e.data.token.access_token),i.push("/call?session_id=".concat(e.data.session_id))):(alert("No token in response, please login manually"),i.push("/login"))}).catch(e=>{var l;return alert(null===(l=e.body)||void 0===l?void 0:l.detail)})},children:"Get Started"})]})]})},C=a(5127),h=a(2351),b=a(6463);let p=[{name:"German",flag:"\uD83C\uDDE9\uD83C\uDDEA",code:"de"},{name:"English",flag:"\uD83C\uDDEC\uD83C\uDDE7",code:"en"},{name:"Spanish",flag:"\uD83C\uDDEA\uD83C\uDDF8",code:"es"},{name:"Korean",flag:"\uD83C\uDDF0\uD83C\uDDF7",code:"ko"},{name:"French",flag:"\uD83C\uDDEB\uD83C\uDDF7",code:"fr"},{name:"Japanese",flag:"\uD83C\uDDEF\uD83C\uDDF5",code:"ja"},{name:"Chinese",flag:"\uD83C\uDDE8\uD83C\uDDF3",code:"zh"},{name:"Hindi",flag:"\uD83C\uDDEE\uD83C\uDDF3",code:"hi"},{name:"Portuguese",flag:"\uD83C\uDDF5\uD83C\uDDF9",code:"pt"},{name:"Italian",flag:"\uD83C\uDDEE\uD83C\uDDF9",code:"it"},{name:"Indonesian",flag:"\uD83C\uDDEE\uD83C\uDDE9",code:"id"},{name:"Dutch",flag:"\uD83C\uDDF3\uD83C\uDDF1",code:"nl"},{name:"Turkish",flag:"\uD83C\uDDF9\uD83C\uDDF7",code:"tr"},{name:"Polish",flag:"\uD83C\uDDF5\uD83C\uDDF1",code:"pl"},{name:"Swedish",flag:"\uD83C\uDDF8\uD83C\uDDEA",code:"sv"},{name:"Bulgarian",flag:"\uD83C\uDDE7\uD83C\uDDEC",code:"bg"},{name:"Romanian",flag:"\uD83C\uDDF7\uD83C\uDDF4",code:"ro"},{name:"Arabic",flag:"\uD83C\uDDF8\uD83C\uDDE6",code:"ar"},{name:"Czech",flag:"\uD83C\uDDE8\uD83C\uDDFF",code:"cs"},{name:"Greek",flag:"\uD83C\uDDEC\uD83C\uDDF7",code:"el"},{name:"Finnish",flag:"\uD83C\uDDEB\uD83C\uDDEE",code:"fi"},{name:"Hungarian",flag:"\uD83C\uDDED\uD83C\uDDFA",code:"hu"},{name:"Norwegian",flag:"\uD83C\uDDF3\uD83C\uDDF4",code:"no"},{name:"Vietnamese",flag:"\uD83C\uDDFB\uD83C\uDDF3",code:"vi"},{name:"Slovak",flag:"\uD83C\uDDF8\uD83C\uDDF0",code:"sk"},{name:"Russian",flag:"\uD83C\uDDF7\uD83C\uDDFA",code:"ru"},{name:"Ukrainian",flag:"\uD83C\uDDFA\uD83C\uDDE6",code:"uk"},{name:"Malay",flag:"\uD83C\uDDF2\uD83C\uDDFE",code:"ms"},{name:"Danish",flag:"\uD83C\uDDE9\uD83C\uDDF0",code:"da"}];var w=e=>{let{nextStep:l,previousStep:a,userData:u,setUserData:s}=e,[o,i]=(0,n.useState)(null),r=e=>{i(e),s({...u,profile:{...u.profile,fallback_language:e}})};return(0,t.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-7 flex flex-col items-center px-7",children:[(0,t.jsx)("div",{className:"flex w-full justify-between items-center",children:(0,t.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:a,children:(0,t.jsx)(c.G,{icon:D.A35})})}),(0,t.jsxs)("div",{className:"flex flex-col items-start flex-grow justify-start w-full min-h-0",children:[(0,t.jsx)("p",{className:"my-3 text-black text-xl text-left font-semibold w-full",children:"What is your native language?"}),(0,t.jsx)("p",{className:"my-5 font-normal text-sm text-black/30",children:"The language you select here will be used to translate and help you during the lesson!"}),(0,t.jsx)("div",{className:"overflow-y-auto w-full flex-grow min-h-0 flex flex-col gap-3",children:p.map(e=>(0,t.jsxs)("button",{className:"text-base border-[1px] py-4 px-7 rounded-lg w-full flex gap-3 items-center ".concat(o===e.code?"bg-[#0039FF]/5 border-[#0039FF] text-[#0039FF]":"bg-white border-black/10"),onClick:()=>r(e.code),children:[(0,t.jsx)("p",{className:"text-2xl",children:e.flag}),e.name]},e.name))})]}),(0,t.jsx)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:(0,t.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold ".concat(o?"":"opacity-50 cursor-not-allowed"),onClick:()=>{o&&l()},disabled:!o,children:"Next question"})})]})};function j(){let e=(0,b.useRouter)(),[l,a]=(0,n.useState)(1),[u,D]=(0,n.useState)({account:{username:"",email:"",password:""},language:"en",profile:{nickname:"",level:"BEGINNER"}}),c={nextStep:()=>{console.log("nextStep"),a(e=>e+1)},previousStep:()=>{a(e=>e-1)},setUserData:D,userData:u};return(0,t.jsx)("div",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen w-screen flex items-center justify-center",children:(0,t.jsx)(C.M,{mode:"wait",children:(0,t.jsx)(h.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"w-full h-full",children:(()=>{switch(l){case 1:default:return(0,t.jsx)(s,{...c,router:e});case 2:return(0,t.jsx)(i,{...c});case 3:return(0,t.jsx)(w,{...c});case 4:return(0,t.jsx)(r,{...c});case 5:return(0,t.jsx)(F,{...c,router:e})}})()},l)})})}}},function(e){e.O(0,[676,119,920,475,542,458,662,971,23,744],function(){return e(e.s=8234)}),_N_E=e.O()}]);