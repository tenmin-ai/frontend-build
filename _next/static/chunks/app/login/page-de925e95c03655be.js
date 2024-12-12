(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{6542:function(e,t,n){Promise.resolve().then(n.bind(n,6374))},5276:function(e,t,n){"use strict";n.d(t,{BackendProvider:function(){return x},CSPostHogProvider:function(){return f},h:function(){return m}});var s=n(7437),r=n(2265),l=n(3974),a=n(9856),o=n(2979),i=n(9827),c=n(9376),u=n(6214),d=n(3664);a.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),a.Lp.interceptors.request.use((e,t)=>{let n=localStorage.getItem("token");return n&&e.headers.set("Authorization","Bearer "+JSON.parse(n)),e});let g=new o.S,h=(0,r.createContext)(void 0),x=e=>{let{children:t}=e,n=(0,l.useIsClient)(),o=(0,c.useRouter)(),u=(0,c.usePathname)(),[d,x]=(0,r.useState)(null);return((0,r.useEffect)(()=>{if(n){let e=localStorage.getItem("token");x(e),console.log(u),e||"/login"===u||o.push("/onboarding")}},[n,o]),n)?(0,s.jsx)(h.Provider,{value:{authedClient:a.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{localStorage.setItem("token",JSON.stringify(e)),x(e)}},children:(0,s.jsx)(i.aH,{client:g,children:t})}):(0,s.jsx)("main",{className:"h-screen-safe flex w-screen items-center justify-center bg-[#FAFBFF]",children:(0,s.jsx)("img",{src:"tenmin_two_bubbles.svg",alt:"",className:"w-10"})})},m=()=>{let e=(0,r.useContext)(h);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e};function f(e){let{children:t}=e;return(0,s.jsx)(d.zf,{client:u.ZP,children:t})}u.ZP.init("phc_3RgWCdQuPIThVhLMxGlimaJQHP7ILbqZnxeR8GRkin6",{api_host:"https://ph-proxy.tenmin.ai",person_profiles:"always"})},6374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var s=n(7437),r=n(9376),l=n(2265),a=n(5276),o=n(8079);function i(){let[e,t]=(0,l.useState)(""),[n,i]=(0,l.useState)(""),[c,u]=(0,l.useState)(null),{saveToken:d}=(0,a.h)(),g=(0,r.useRouter)(),h=(0,r.useSearchParams)();return(0,s.jsx)("main",{className:"h-screen-safe flex justify-center bg-[#F6F8FF] pb-14 pt-7",children:(0,s.jsxs)("div",{className:"m-3 flex max-w-md flex-col gap-3 px-5",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-black",children:"Login"}),(0,s.jsx)("p",{className:"text-gray-500",children:"Login to your account to continue learning with Tenmin."}),(0,s.jsxs)("button",{className:"flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 bg-white py-4 font-semibold text-black",onClick:()=>{d(null),(0,o.kc)({query:{client_callback:"".concat(location.protocol,"//").concat(location.host,"/oauth/google")}}).then(e=>{var t;let n=null===(t=e.data)||void 0===t?void 0:t.redirect_uri;console.log(e),console.log(n),n&&(window.location.href=n)})},children:[(0,s.jsx)("img",{src:"/google_logo.svg",alt:"",className:"h-5"}),"Sign in with Google"]}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"h-px flex-grow bg-gray-300"}),(0,s.jsx)("p",{className:"text-gray-500",children:"or"}),(0,s.jsx)("div",{className:"h-px flex-grow bg-gray-300"})]}),(0,s.jsx)("input",{type:"text",placeholder:"Username/Email",className:"rounded-lg border-2 border-gray-300 p-3 text-black",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("input",{type:"password",placeholder:"Password",value:n,className:"rounded-lg border-2 border-gray-300 p-3 text-black",onChange:e=>i(e.target.value)}),null!=c&&(0,s.jsx)("p",{className:"text-red-500",children:c}),(0,s.jsx)("button",{className:"mt-2 w-full rounded-lg bg-[#0039FF] py-3 font-semibold text-white",onClick:()=>{(0,o.eU)({body:{username:e,password:n}}).then(e=>{var t;if(null===(t=e.data)||void 0===t?void 0:t.access_token)d(e.data.access_token);else throw Error("No token in response");let n=h.get("redirect");null==n?g.push("/"):g.push(n)}).catch(e=>{u("Failed: "+e.detail)}).catch(e=>{u("Failed: "+e.message)})},children:"Login"})]})})}}},function(e){e.O(0,[5878,254,2278,4102,8079,2971,2117,1744],function(){return e(e.s=6542)}),_N_E=e.O()}]);