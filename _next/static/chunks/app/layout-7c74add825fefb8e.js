(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3395:function(e,t,n){Promise.resolve().then(n.bind(n,1980)),Promise.resolve().then(n.t.bind(n,3247,23)),Promise.resolve().then(n.t.bind(n,9454,23)),Promise.resolve().then(n.t.bind(n,6857,23))},1980:function(e,t,n){"use strict";n.d(t,{BackendProvider:function(){return d},h:function(){return _}});var r=n(7437),l=n(2265),o=n(3061),i=n(2702),s=n(8699),u=n(3191);i.Lp.setConfig({baseUrl:"https://backend-us.tenmin.ai"}),i.Lp.interceptors.request.use((e,t)=>{let n=localStorage.getItem("token");return console.log("Intercepter: "+n),n&&e.headers.set("Authorization","Bearer "+JSON.parse(n)),e});let a=new s.S,c=(0,l.createContext)(void 0),d=e=>{let{children:t}=e;return(0,o.useIsClient)()?(0,r.jsx)(c.Provider,{value:{authedClient:i.Lp,saveToken:e=>{localStorage.setItem("token",JSON.stringify(e))}},children:(0,r.jsx)(u.aH,{client:a,children:t})}):(0,r.jsx)("main",{className:"bg-[#0039FF] h-screen w-screen flex justify-center items-center",children:(0,r.jsx)("img",{src:"tenmin_new_logo_white.svg",alt:"",className:"w-10"})})},_=()=>{let e=(0,l.useContext)(c);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}},2702:function(e,t,n){"use strict";n.d(t,{Lp:function(){return l},c_:function(){return i},dA:function(){return s},eU:function(){return o},oY:function(){return a},zW:function(){return u}});var r=n(8035);let l=(0,r.eI)((0,r._g)()),o=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:l).post({...e,...r.RL,headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"/login"})},i=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:l).post({...e,url:"/user/create_account_and_profile"})},s=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:l).get({...e,url:"/user/me"})},u=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:l).get({...e,url:"/tutoring/all"})},a=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:l).post({...e,url:"/call/start/{service}"})}},6857:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},9454:function(e){e.exports={style:{fontFamily:"'__Onest_5849fd', '__Onest_Fallback_5849fd'",fontStyle:"normal"},className:"__className_5849fd"}}},function(e){e.O(0,[169,61,475,971,23,744],function(){return e(e.s=3395)}),_N_E=e.O()}]);