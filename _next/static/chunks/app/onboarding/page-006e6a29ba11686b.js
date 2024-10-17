(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{8234:function(e,t,l){Promise.resolve().then(l.bind(l,2640))},1980:function(e,t,l){"use strict";l.d(t,{BackendProvider:function(){return D},h:function(){return m}});var a=l(7437),n=l(2265),s=l(3061),u=l(2702),o=l(8699),r=l(3191),i=l(6463);u.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),u.Lp.interceptors.request.use((e,t)=>{let l=localStorage.getItem("token");return console.log("Intercepter: "+l),l&&e.headers.set("Authorization","Bearer "+JSON.parse(l)),e});let c=new o.S,d=(0,n.createContext)(void 0),D=e=>{let{children:t}=e,l=(0,s.useIsClient)(),o=(0,i.useRouter)(),[D,m]=(0,n.useState)(null);return((0,n.useEffect)(()=>{if(l){let e=localStorage.getItem("token");m(e),e||o.push("/onboarding")}},[l,o]),l)?(0,a.jsx)(d.Provider,{value:{authedClient:u.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{localStorage.setItem("token",JSON.stringify(e)),m(e)}},children:(0,a.jsx)(r.aH,{client:c,children:t})}):(0,a.jsx)("main",{className:"bg-[#0039FF] h-screen w-screen flex justify-center items-center",children:(0,a.jsx)("img",{src:"tenmin_new_logo_white.svg",alt:"",className:"w-10"})})},m=()=>{let e=(0,n.useContext)(d);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}},2640:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return C}});var a=l(7437),n=l(2265),s=l(1980),u=e=>{let{nextStep:t,router:l}=e,{isLoggedIn:n}=(0,s.h)();return(0,a.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen py-5 flex flex-col items-center px-7",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center flex-grow justify-center",children:[(0,a.jsx)("img",{src:"/tenmin_new.svg",alt:""}),(0,a.jsx)("p",{className:"mt-5 text-black/30",children:"Learn how to speak any language!"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center w-full gap-3",children:[(0,a.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold",onClick:t,children:"Get started"}),!n&&(0,a.jsx)("button",{className:"bg-black bg-opacity-[7%] text-black py-3 w-full rounded-lg font-semibold",onClick:()=>{l.push("/login")},children:"I have an account"})]})]})},o=l(5079),r=l(6920);let i=[{name:"German",flag:"\uD83C\uDDE9\uD83C\uDDEA",code:"de"},{name:"English",flag:"\uD83C\uDDEC\uD83C\uDDE7",code:"en"},{name:"Spanish",flag:"\uD83C\uDDEA\uD83C\uDDF8",code:"es"},{name:"Korean",flag:"\uD83C\uDDF0\uD83C\uDDF7",code:"ko"},{name:"French",flag:"\uD83C\uDDEB\uD83C\uDDF7",code:"fr"},{name:"Japanese",flag:"\uD83C\uDDEF\uD83C\uDDF5",code:"ja"},{name:"Chinese",flag:"\uD83C\uDDE8\uD83C\uDDF3",code:"zh"},{name:"Hindi",flag:"\uD83C\uDDEE\uD83C\uDDF3",code:"hi"},{name:"Portuguese",flag:"\uD83C\uDDF5\uD83C\uDDF9",code:"pt"},{name:"Italian",flag:"\uD83C\uDDEE\uD83C\uDDF9",code:"it"},{name:"Indonesian",flag:"\uD83C\uDDEE\uD83C\uDDE9",code:"id"},{name:"Dutch",flag:"\uD83C\uDDF3\uD83C\uDDF1",code:"nl"},{name:"Turkish",flag:"\uD83C\uDDF9\uD83C\uDDF7",code:"tr"},{name:"Polish",flag:"\uD83C\uDDF5\uD83C\uDDF1",code:"pl"},{name:"Swedish",flag:"\uD83C\uDDF8\uD83C\uDDEA",code:"sv"},{name:"Bulgarian",flag:"\uD83C\uDDE7\uD83C\uDDEC",code:"bg"},{name:"Romanian",flag:"\uD83C\uDDF7\uD83C\uDDF4",code:"ro"},{name:"Arabic",flag:"\uD83C\uDDF8\uD83C\uDDE6",code:"ar"},{name:"Czech",flag:"\uD83C\uDDE8\uD83C\uDDFF",code:"cs"},{name:"Greek",flag:"\uD83C\uDDEC\uD83C\uDDF7",code:"el"},{name:"Finnish",flag:"\uD83C\uDDEB\uD83C\uDDEE",code:"fi"},{name:"Hungarian",flag:"\uD83C\uDDED\uD83C\uDDFA",code:"hu"},{name:"Norwegian",flag:"\uD83C\uDDF3\uD83C\uDDF4",code:"no"},{name:"Vietnamese",flag:"\uD83C\uDDFB\uD83C\uDDF3",code:"vi"},{name:"Slovak",flag:"\uD83C\uDDF8\uD83C\uDDF0",code:"sk"},{name:"Russian",flag:"\uD83C\uDDF7\uD83C\uDDFA",code:"ru"},{name:"Ukrainian",flag:"\uD83C\uDDFA\uD83C\uDDE6",code:"uk"},{name:"Malay",flag:"\uD83C\uDDF2\uD83C\uDDFE",code:"ms"},{name:"Danish",flag:"\uD83C\uDDE9\uD83C\uDDF0",code:"da"}];var c=e=>{let{nextStep:t,previousStep:l,userData:s,setUserData:u}=e,[c,d]=(0,n.useState)(null),D=e=>{d(e),u({...s,language:e})};return(0,a.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-14 flex flex-col items-center px-7",children:[(0,a.jsx)("div",{className:"flex w-full justify-between items-center",children:(0,a.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:l,children:(0,a.jsx)(r.G,{icon:o.A35})})}),(0,a.jsxs)("div",{className:"flex flex-col items-start flex-grow justify-start w-full min-h-0",children:[(0,a.jsx)("p",{className:"my-7 text-black text-xl text-left font-semibold w-full",children:"What would you like to learn?"}),(0,a.jsxs)("div",{className:"overflow-y-auto w-full flex-grow min-h-0 flex flex-col gap-3",children:[i.map(e=>(0,a.jsxs)("button",{className:"text-base border-[1px] py-4 px-7 rounded-lg w-full flex gap-3 items-center ".concat(c===e.code?"bg-[#0039FF]/5 border-[#0039FF] text-[#0039FF]":"bg-white border-black/10"),onClick:()=>D(e.code),children:[(0,a.jsx)("p",{className:"text-2xl",children:e.flag}),e.name]},e.name)),(0,a.jsx)("p",{className:"text-black/30",children:"We are actively working on adding more languages. Stay tuned!"})]})]}),(0,a.jsx)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:(0,a.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold ".concat(c?"":"opacity-50 cursor-not-allowed"),onClick:()=>{c&&t()},disabled:!c,children:"Next question"})})]})},d=e=>{let{nextStep:t,previousStep:l,setUserData:s,userData:u}=e,[i,c]=(0,n.useState)("");return(0,a.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-14 flex flex-col items-center px-7",children:[(0,a.jsx)("div",{className:"flex w-full justify-between items-center",children:(0,a.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:l,children:(0,a.jsx)(r.G,{icon:o.A35})})}),(0,a.jsxs)("div",{className:"flex flex-col items-start flex-grow justify-start w-full min-h-0",children:[(0,a.jsx)("p",{className:"my-7 text-black text-xl text-left font-semibold w-full",children:"Last question! How should we call you?"}),(0,a.jsxs)("div",{className:"overflow-y-auto w-full flex-grow min-h-0 flex flex-col gap-3",children:[(0,a.jsx)("input",{type:"text",placeholder:"Your name (e.g. John)",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:i,onChange:e=>{c(e.target.value),s({...u,profile:{...u.profile,nickname:e.target.value}})}}),(0,a.jsx)("p",{className:"text-black/30",children:"This is how our AI tutor will address you during the lessons."})]})]}),(0,a.jsx)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:(0,a.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold ".concat(i.trim()?"":"opacity-50 cursor-not-allowed"),onClick:()=>{i.trim()&&t()},disabled:!i.trim(),children:"Finish"})})]})},D=l(6572),m=l(3730),f=l.n(m),x=l(6662);let g=new(f());var h=e=>{let{nextStep:t,previousStep:l,setUserData:u,userData:i,router:c}=e,{isLoggedIn:d,saveToken:m}=(0,s.h)(),[f,h]=(0,n.useState)(()=>(null==i?void 0:i.profile.nickname)||null),[b,F]=(0,n.useState)(""),[p,C]=(0,n.useState)(""),[w,j]=(0,n.useState)(""),[k,y]=(0,n.useState)(!1);return(0,a.jsxs)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-14 flex flex-col items-center px-7",children:[(0,a.jsx)("div",{className:"flex w-full justify-between items-center",children:(0,a.jsx)("button",{className:"text-black/60 font-medium text-sm self-start flex items-center bg-black bg-opacity-[10%] w-12 h-12 justify-center rounded-full",onClick:l,children:(0,a.jsx)(r.G,{icon:o.A35})})}),(0,a.jsx)("div",{className:"flex flex-col items-center flex-grow justify-center",children:(0,a.jsxs)("div",{className:"mt-5 text-black/30 text-lg text-center",children:[(0,a.jsx)("p",{className:"font-semibold text-2xl mb-2 text-black",children:(0,a.jsx)(D.e,{splitter:e=>g.splitGraphemes(e),sequence:["Hallo ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Hola ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Bonjour ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Ciao ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"Hello ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"こんにちは ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"안녕하세요 ".concat(null!=f?f:"Friend"," \uD83C\uDF89"),2e3,"你好 ".concat(null!=f?f:"Friend"," \uD83C\uDF89")],wrapper:"span",speed:50,style:{display:"inline-block"},cursor:!1,repeat:1/0})}),"Let's start your first lesson! Sign in and jump right in."]})}),d?(0,a.jsx)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:(0,a.jsx)("button",{className:"bg-[#0039FF] text-white py-3 w-full rounded-lg font-semibold",onClick:()=>{(0,x.Hy)({body:i}).then(e=>{e.data&&c.push("/debug?session_id=".concat(e.data.session_id))}).catch(e=>{var t;return alert(null===(t=e.body)||void 0===t?void 0:t.detail)})},children:"Continue"})}):(0,a.jsxs)("div",{className:"flex flex-col items-center w-full gap-3 mt-4",children:[(0,a.jsxs)("button",{disabled:!0,className:"bg-white text-black border border-gray-300 py-3 w-full rounded-lg font-semibold flex items-center justify-center gap-3",onClick:()=>{t()},children:[(0,a.jsx)("img",{src:"/google_logo.svg",alt:"",className:"h-5"}),"Sign in with Google"]}),k&&(0,a.jsxs)("div",{className:"flex flex-col items-center w-full gap-2",children:[(0,a.jsx)("div",{className:"my-2 w-1/2 h-px bg-gray-300"}),(0,a.jsx)("input",{type:"text",placeholder:"Email",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:p,onChange:e=>{F(e.target.value),C(e.target.value)}}),(0,a.jsx)("input",{type:"password",placeholder:"Password",className:"text-black border-[#DADADA] border-[1px] p-3 rounded-lg w-full",value:w,onChange:e=>j(e.target.value)})]}),(0,a.jsx)("button",{className:"bg-[#0039FF] text-white border border-[#DADADA] py-3 w-full rounded-lg font-semibold",onClick:()=>{if(!k){y(!0);return}if(!p||!w){alert("Please enter your email and password");return}(0,x.c_)({body:{...i,account:{username:b,email:p,password:w}}}).then(e=>{e.data?(m(e.data.token.access_token),c.push("/debug?session_id=".concat(e.data.session_id))):(alert("No token in response, please login manually"),c.push("/login"))}).catch(e=>{var t;return alert(null===(t=e.body)||void 0===t?void 0:t.detail)})},children:"Sign in with Email"})]})]})},b=l(5127),F=l(2351),p=l(6463);function C(){let e=(0,p.useRouter)(),[t,l]=(0,n.useState)(1),[s,o]=(0,n.useState)({account:{username:"",email:"",password:""},language:"en",profile:{nickname:"",level:"BEGINNER"}}),r={nextStep:()=>{console.log("nextStep"),l(e=>e+1)},previousStep:()=>{l(e=>e-1)},setUserData:o,userData:s};return(0,a.jsx)("div",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen w-screen flex items-center justify-center",children:(0,a.jsx)(b.M,{mode:"wait",children:(0,a.jsx)(F.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"w-full h-full",children:(()=>{switch(t){case 1:default:return(0,a.jsx)(u,{...r,router:e});case 2:return(0,a.jsx)(c,{...r});case 3:return(0,a.jsx)(d,{...r});case 4:return(0,a.jsx)(h,{...r,router:e})}})()},t)})})}}},function(e){e.O(0,[676,119,920,475,542,458,662,971,23,744],function(){return e(e.s=8234)}),_N_E=e.O()}]);