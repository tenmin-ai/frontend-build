(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{2484:function(e,t,n){Promise.resolve().then(n.bind(n,5276)),Promise.resolve().then(n.bind(n,6870)),Promise.resolve().then(n.t.bind(n,4742,23)),Promise.resolve().then(n.t.bind(n,2357,23)),Promise.resolve().then(n.t.bind(n,7960,23))},5276:function(e,t,n){"use strict";n.d(t,{BackendProvider:function(){return g},CSPostHogProvider:function(){return _},h:function(){return h}});var r=n(7437),o=n(2265),l=n(3974),u=n(9856),i=n(2979),a=n(9827),s=n(9376),c=n(6214),d=n(3664);u.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),u.Lp.interceptors.request.use((e,t)=>{var n;let r=JSON.parse(null!==(n=localStorage.getItem("token"))&&void 0!==n?n:"null");return r&&e.headers.set("Authorization","Bearer "+r),e});let v=new i.S,f=(0,o.createContext)(void 0),g=e=>{let{children:t}=e,n=(0,l.useIsClient)(),i=(0,s.useRouter)(),c=(0,s.usePathname)(),[d,g]=(0,o.useState)(null);return((0,o.useEffect)(()=>{if(n){let e=localStorage.getItem("token");g(e),console.log(c),e||"/login"===c||i.push("/onboarding")}},[n,i]),n)?(0,r.jsx)(f.Provider,{value:{authedClient:u.Lp,isLoggedIn:!!localStorage.getItem("token"),saveToken:e=>{null===e?localStorage.removeItem("token"):localStorage.setItem("token",JSON.stringify(e)),g(e)}},children:(0,r.jsx)(a.aH,{client:v,children:t})}):(0,r.jsx)("main",{className:"h-screen-safe flex w-screen items-center justify-center bg-[#FAFBFF]",children:(0,r.jsx)("img",{src:"tenmin_two_bubbles.svg",alt:"",className:"w-10"})})},h=()=>{let e=(0,o.useContext)(f);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e};function _(e){let{children:t}=e;return(0,r.jsx)(d.zf,{client:c.ZP,children:t})}c.ZP.init("phc_3RgWCdQuPIThVhLMxGlimaJQHP7ILbqZnxeR8GRkin6",{api_host:"https://ph-proxy.tenmin.ai",person_profiles:"always"})},9856:function(e,t,n){"use strict";n.d(t,{H4:function(){return u},Hy:function(){return c},I:function(){return m},It:function(){return d},Lp:function(){return o},Vz:function(){return h},_5:function(){return v},_G:function(){return f},c_:function(){return s},eU:function(){return l},kc:function(){return i},oY:function(){return _},pR:function(){return a},zW:function(){return g}});var r=n(5478);let o=(0,r.eI)((0,r._g)()),l=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).post({...e,...r.RL,headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"/login"})},u=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).patch({...e,url:"/change_login"})},i=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).get({...e,url:"/oauth/google/login"})},a=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).get({...e,url:"/oauth/google/callback"})},s=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).post({...e,url:"/user/create_account_and_profile"})},c=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).post({...e,url:"/user/add_new_profile"})},d=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).get({...e,url:"/user/my_data"})},v=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).patch({...e,url:"/user/change_profile"})},f=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).post({...e,url:"/lesson/generate_user_roleplay"})},g=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).get({...e,url:"/tutoring/all"})},h=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).get({...e,url:"/tutoring/leaderboard"})},_=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).post({...e,url:"/call/start/{service}"})},m=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:o).post({...e,url:"/stats/premium"})}},6870:function(e,t,n){"use strict";n.d(t,{GlobalAudioContextProvider:function(){return u},Y:function(){return i}});var r=n(7437),o=n(2265);let l=(0,o.createContext)(null),u=e=>{let{children:t}=e,n=(0,o.useRef)(null);return n.current||(console.log("creating audio context"),n.current=new AudioContext,n.current.onstatechange=()=>{var e,t,r,o,l;if(console.log("onstagechange - AudioContext state changed: ",null===(e=n.current)||void 0===e?void 0:e.state),(null===(t=n.current)||void 0===t?void 0:t.state)==="suspended"&&(null===(o=n.current)||void 0===o||o.resume().then(()=>{var e;console.log("AudioContext state: ",null===(e=n.current)||void 0===e?void 0:e.state)}).catch(e=>{console.error("Failed to resume AudioContext:",e)})),(null===(r=n.current)||void 0===r?void 0:r.state)==="running"){let e=null===(l=n.current)||void 0===l?void 0:l.currentTime;setTimeout(()=>{var t;(null===(t=n.current)||void 0===t?void 0:t.currentTime)===e&&(console.warn("AudioContext currentTime is stuck, attempting to fix..."),window.location.reload())},100)}}),(0,r.jsx)(l.Provider,{value:n.current,children:t})},i=()=>{let e=(0,o.useContext)(l);if(!e)throw Error("useAudioContext must be used within a GlobalAudioContextProvider");return e}},7960:function(){},4742:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},2357:function(e){e.exports={style:{fontFamily:"'__Onest_5f161b', '__Onest_Fallback_5f161b'",fontStyle:"normal"},className:"__className_5f161b"}}},function(e){e.O(0,[8996,5878,254,2278,4102,2971,2117,1744],function(){return e(e.s=2484)}),_N_E=e.O()}]);