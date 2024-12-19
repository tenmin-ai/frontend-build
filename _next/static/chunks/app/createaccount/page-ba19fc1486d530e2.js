(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7312],{8478:function(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=8478,e.exports=t},8697:function(e,t,n){Promise.resolve().then(n.bind(n,1050))},5276:function(e,t,n){"use strict";n.d(t,{BackendProvider:function(){return g},CSPostHogProvider:function(){return x},h:function(){return m}});var r=n(7437),o=n(2265),l=n(3974),a=n(9856),i=n(2979),s=n(9827),u=n(9376),c=n(6214),d=n(3664);a.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),a.Lp.interceptors.request.use((e,t)=>{var n;let r=JSON.parse(null!==(n=localStorage.getItem("token"))&&void 0!==n?n:"null");return r&&e.headers.set("Authorization","Bearer "+r),e});let f=new i.S,h=(0,o.createContext)(void 0),g=e=>{let{children:t}=e,n=(0,l.useIsClient)(),i=(0,u.useRouter)(),c=(0,u.usePathname)(),[d,g]=(0,o.useState)(null);return((0,o.useEffect)(()=>{if(n){let e=localStorage.getItem("token");g(e),console.log(c),e||"/login"===c||i.push("/onboarding")}},[n,i]),n)?(0,r.jsx)(h.Provider,{value:{authedClient:a.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{null===e?localStorage.removeItem("token"):localStorage.setItem("token",JSON.stringify(e)),g(e)}},children:(0,r.jsx)(s.aH,{client:f,children:t})}):(0,r.jsx)("main",{className:"h-screen-safe flex w-screen items-center justify-center bg-[#FAFBFF]",children:(0,r.jsx)("img",{src:"tenmin_two_bubbles.svg",alt:"",className:"w-10"})})},m=()=>{let e=(0,o.useContext)(h);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e};function x(e){let{children:t}=e;return(0,r.jsx)(d.zf,{client:c.ZP,children:t})}c.ZP.init("phc_3RgWCdQuPIThVhLMxGlimaJQHP7ILbqZnxeR8GRkin6",{api_host:"https://ph-proxy.tenmin.ai",person_profiles:"always"})},1050:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),o=n(3344),l=n(940),a=n(9376),i=n(2265),s=n(5276),u=n(9827),c=n(1770),d=n(8079);function f(){let e=(0,a.useRouter)(),[t,n]=(0,l.j8)(),{saveToken:f}=(0,s.h)(),h=(0,u.NL)(),g=(0,o.GI)(),[m]=(0,l.od)(),[x,y]=(0,i.useState)(""),[p,b]=(0,i.useState)(""),[v,w]=(0,i.useState)(!1),k=(0,c.D)({...(0,o.iy)(),onMutate:async()=>{await t({message:"Updating your login credentials..."})},onError:async e=>{await n(),await t({message:"Failed to update login credentials",icon:"close",duration:1e3})},onSuccess:async e=>{f(e.access_token),h.invalidateQueries({queryKey:g.queryKey}),await n(),await t({message:"Login credentials updated!",icon:"checkmark",duration:1e3})}});return(0,r.jsx)("main",{className:"h-screen-safe flex flex-col bg-[#FAFBFF] pb-10 tracking-[-0.02em]",children:(0,r.jsxs)("div",{className:"flex h-full flex-col justify-between px-8 pt-16",children:[(0,r.jsxs)("div",{className:"flex h-full flex-grow flex-col items-center justify-start",children:[(0,r.jsx)("div",{className:"text-4xl font-semibold leading-tight",children:"Don't lose your account!"}),(0,r.jsx)("div",{className:"mt-4 font-light",children:"You have not registered yet. Create an account to save your data and keep using Tenmin."}),v&&(0,r.jsxs)("div",{className:"mt-4 flex w-full flex-col gap-2",children:[(0,r.jsx)("input",{type:"text",placeholder:"Email",className:"w-full rounded-lg border-[1px] border-[#DADADA] p-3 text-black",value:x,onChange:e=>y(e.target.value)}),(0,r.jsx)("input",{type:"password",placeholder:"Password",className:"w-full rounded-lg border-[1px] border-[#DADADA] p-3 text-black",value:p,onChange:e=>b(e.target.value)})]})]}),!v&&(0,r.jsxs)("div",{className:"mt-4 flex w-full flex-col items-center gap-3",children:[(0,r.jsxs)("button",{className:"flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 bg-white py-4 font-semibold text-black",onClick:()=>{(0,d.kc)({query:{client_callback:"".concat(location.protocol,"//").concat(location.host,"/oauth/google")}}).then(e=>{var t;let n=null===(t=e.data)||void 0===t?void 0:t.redirect_uri;console.log(e),console.log(n),n&&(window.location.href=n)})},children:[(0,r.jsx)("img",{src:"/google_logo.svg",alt:"",className:"h-5"}),"Sign in with Google"]}),(0,r.jsx)("button",{className:"flex w-full items-center justify-center gap-3 rounded-full bg-gray-200 py-4 font-semibold text-black",onClick:()=>e.push("/"),children:"I'll sign in later"})]}),(0,r.jsx)("div",{children:v&&(0,r.jsx)("button",{className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#0039FF] py-4 text-white",onClick:()=>{if(!x.includes("@"))return m({header:"Invalid email",message:"Please enter a valid email address.",buttons:["OK"]});k.mutate({body:{username:"lmao",email:x,password:p}})},children:(0,r.jsx)("p",{className:"text-base font-semibold",children:"Create account"})})})]})})}},3344:function(e,t,n){"use strict";n.d(t,{GI:function(){return s},PA:function(){return h},ax:function(){return u},iy:function(){return a},rs:function(){return d}});var r=n(2274),o=n(9856);let l=(e,t,n)=>{var r;let l={_id:e,baseUrl:(null!==(r=null==t?void 0:t.client)&&void 0!==r?r:o.Lp).getConfig().baseUrl};return n&&(l._infinite=n),(null==t?void 0:t.body)&&(l.body=t.body),(null==t?void 0:t.headers)&&(l.headers=t.headers),(null==t?void 0:t.path)&&(l.path=t.path),(null==t?void 0:t.query)&&(l.query=t.query),l},a=()=>({mutationFn:async e=>{let{data:t}=await (0,o.H4)({...e,throwOnError:!0});return t}}),i=e=>[l("userMyData",e)],s=e=>(0,r.C)({queryFn:async t=>{let{queryKey:n}=t,{data:r}=await (0,o.It)({...e,...n[0],throwOnError:!0});return r},queryKey:i(e)}),u=()=>({mutationFn:async e=>{let{data:t}=await (0,o._5)({...e,throwOnError:!0});return t}}),c=e=>[l("tutoringGetAll",e)],d=e=>(0,r.C)({queryFn:async t=>{let{queryKey:n}=t,{data:r}=await (0,o.zW)({...e,...n[0],throwOnError:!0});return r},queryKey:c(e)}),f=e=>[l("tutoringGetLeaderboard",e)],h=e=>(0,r.C)({queryFn:async t=>{let{queryKey:n}=t,{data:r}=await (0,o.Vz)({...e,...n[0],throwOnError:!0});return r},queryKey:f(e)})},2274:function(e,t,n){"use strict";function r(e){return e}n.d(t,{C:function(){return r}})},1172:function(e,t,n){"use strict";function r(e,t){return"function"==typeof e?e(...t):!!e}function o(){}n.d(t,{L:function(){return r},Z:function(){return o}})}},function(e){e.O(0,[5878,254,2278,4102,4180,8079,2971,2117,1744],function(){return e(e.s=8697)}),_N_E=e.O()}]);