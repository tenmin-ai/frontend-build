(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1631],{7832:function(e,t,l){Promise.resolve().then(l.bind(l,711))},711:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var n=l(7437),r=l(753),u=l.n(r),i=l(9376),a=l(2265),o=l(1273),c=l(6593),s=l(3344),d=l(3974);function f(){var e;let t=(0,i.useRouter)(),[l,r]=(0,d.useLocalStorage)("language"),{data:f,isLoading:v}=(0,c.a)({...(0,s.rs)({query:{language:l}})}),x=Object.entries(f||{}),m=Math.min(x.length>0&&(null===(e=x[0][1])||void 0===e?void 0:e.streak)||0,7),g=["Su","Mo","Tu","We","Th","Fr","Sa"],p=new Date().getDay(),h=Array.from({length:m},(e,t)=>(p-m+t+1+7)%7),b=[...h.map(e=>g[e]),...g.filter((e,t)=>!h.includes(t))];return(0,a.useEffect)(()=>{let e=new Audio("fanfare_achievement.mp3");e.volume=.5,e.play()},[]),(0,n.jsx)("main",{className:"h-screen-safe flex flex-col bg-[#FAFBFF] pb-10 tracking-[-0.02em]",children:(0,n.jsxs)("div",{className:"flex h-full flex-col justify-between px-8",children:[(0,n.jsxs)("div",{className:"flex h-full flex-col items-center justify-center",children:[(0,n.jsx)("img",{src:"streak_fire.svg",alt:"Streak Fire",className:"relative z-10 w-24"}),(0,n.jsx)("div",{className:"h-10 w-10 -translate-y-8 scale-x-[2] transform rounded-full bg-[#FFC801]/50"}),(0,n.jsx)("div",{className:"".concat(u().className," mt-0 bg-gradient-to-b from-[#FFB201] to-[#FF9600] bg-clip-text text-7xl font-bold text-transparent"),children:m}),(0,n.jsx)("div",{className:"mt-2 text-2xl font-semibold text-[#FF9600]",children:"day streak"}),(0,n.jsxs)("div",{className:"mt-14 flex w-full flex-col items-center rounded-lg border-[1px] border-[#DADADA] bg-white px-4 py-4",children:[(0,n.jsx)("div",{className:"grid w-full grid-cols-7 gap-2 px-2 font-medium text-black/30",children:b.map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-col items-center gap-1 ".concat(t<m?"text-[#FF9600]":"text-black/30"),children:[(0,n.jsx)("div",{children:e}),t<m?(0,n.jsx)(o.ETl,{className:"text-xl ".concat(t<m?"text-[#FF9600]":"text-[#DADADA]")}):(0,n.jsx)(o.gbA,{className:"text-xl ".concat(t<m?"text-[#FF9600]":"text-[#DADADA]")})]},e))}),(0,n.jsx)("div",{className:"my-4 w-full border-t-[1px] border-[#DADADA]"}),(0,n.jsx)("div",{className:"text-medium text-black/50",children:"Practice daily to grow your streak!"})]})]}),(0,n.jsx)("button",{className:"mt-4 flex w-full items-center justify-center rounded-full bg-[#0039FF] py-4 text-white",onClick:()=>{t.push("/premium")},children:(0,n.jsx)("p",{className:"text-base font-semibold",children:"Continue"})})]})})}},9856:function(e,t,l){"use strict";l.d(t,{H4:function(){return i},Hy:function(){return s},I:function(){return p},It:function(){return d},Lp:function(){return r},Vz:function(){return m},_5:function(){return f},_G:function(){return v},c_:function(){return c},eU:function(){return u},kc:function(){return a},oY:function(){return g},pR:function(){return o},zW:function(){return x}});var n=l(5478);let r=(0,n.eI)((0,n._g)()),u=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,...n.RL,headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"/login"})},i=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).patch({...e,url:"/change_login"})},a=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/oauth/google/login"})},o=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/oauth/google/callback"})},c=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/user/create_account_and_profile"})},s=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/user/add_new_profile"})},d=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/user/my_data"})},f=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).patch({...e,url:"/user/change_profile"})},v=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/lesson/generate_user_roleplay"})},x=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/tutoring/all"})},m=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).get({...e,url:"/tutoring/leaderboard"})},g=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/call/start/{service}"})},p=e=>{var t;return(null!==(t=null==e?void 0:e.client)&&void 0!==t?t:r).post({...e,url:"/stats/premium"})}},753:function(e){e.exports={style:{fontFamily:"'__M_PLUS_Rounded_1c_1ebfbf'",fontStyle:"normal"},className:"__className_1ebfbf"}}},function(e){e.O(0,[4857,7240,254,2278,1649,3344,2971,2117,1744],function(){return e(e.s=7832)}),_N_E=e.O()}]);