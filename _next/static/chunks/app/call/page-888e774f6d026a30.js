(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{3658:function(e,n,t){Promise.resolve().then(t.bind(t,1485))},1485:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(7437);t(2265);var s=t(4031),u=t(3061),o=t(7776),c=t(6463),i=t(40);function a(e){let{children:n}=e,t=(0,u.useIsClient)(),{token:a,saveToken:l}=(0,i.f)(),d=(0,c.useSearchParams)().get("session_id");return d?t?(console.log("token",a),(0,r.jsx)(s.eA,{url:"wss://backend-us.tenmin.ai/ws"+"/".concat(d)+"?token=".concat(a),label:"Debug Call",toast:o.A,autoconnect:!0,wsAuth:!0,children:n})):(0,r.jsx)("div",{children:"Loading.."}):(0,r.jsx)("div",{children:"Invalid lesson"})}function l(){return(0,r.jsx)(a,{children:(0,r.jsx)("main",{className:"bg-gradient-to-b from-[#F6F8FF] to-[#F7F8FD] h-screen pb-14 pt-14",children:(0,r.jsx)(o.x,{position:"top-center",richColors:!0})})})}},40:function(e,n,t){"use strict";t.d(n,{f:function(){return s}});var r=t(3061);let s=()=>{let[e,n]=(0,r.useLocalStorage)("token");return{token:e,saveToken:n}}},6463:function(e,n,t){"use strict";var r=t(1169);t.o(r,"useRouter")&&t.d(n,{useRouter:function(){return r.useRouter}}),t.o(r,"useSearchParams")&&t.d(n,{useSearchParams:function(){return r.useSearchParams}})}},function(e){e.O(0,[61,897,971,23,744],function(){return e(e.s=3658)}),_N_E=e.O()}]);