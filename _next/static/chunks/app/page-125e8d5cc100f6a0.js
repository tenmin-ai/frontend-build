(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3958:function(e,t,s){Promise.resolve().then(s.bind(s,6774))},1980:function(e,t,s){"use strict";s.d(t,{AuthProvider:function(){return o},E:function(){return x}});var n=s(7437),l=s(2265),c=s(6463),i=s(750),a=s(3061);let r=(0,l.createContext)(void 0),o=e=>{let{children:t}=e,s=(0,a.useIsClient)(),[o,x]=(0,l.useState)([]),m="https://backend-us.tenmin.ai";(0,l.useEffect)(()=>{(async()=>{try{let e=await fetch(m+"/tutors"),t=await e.json();x(t)}catch(e){console.error("Error fetching data:",e)}})()},[m]);let[d,u]=(0,i._)("token","",{initializeWithValue:!1}),f=(0,c.useRouter)();return((0,l.useEffect)(()=>{d||f.push("/login")},[d,f]),s)?(0,n.jsx)(r.Provider,{value:{token:d,saveToken:u,backend_url:"wss://backend-us.tenmin.ai/ws",tutors:o},children:t}):(0,n.jsx)("div",{children:"Loading.."})},x=()=>{let e=(0,l.useContext)(r);if(!e)throw Error("useAuthContext must be used within an AuthProvider");return e}},6774:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s(7437),l=s(2265),c=s(6920),i=s(5079),a=s(6463),r=s(1980);function o(){let[e,t]=(0,l.useState)("Speak"),s=(0,a.useRouter)(),{tutors:o}=(0,r.E)(),x=e=>{s.push("/callPage?id="+e)};return(0,n.jsxs)("main",{className:"flex flex-col bg-[#F6F8FF] h-screen pt-16 pb-4 px-8 justify-between tracking-[-0.01em]",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("img",{src:"/tenmin.svg",alt:"Tenmin Logo"}),(0,n.jsx)("div",{className:"flex items-center gap-5",children:(0,n.jsxs)("div",{className:"flex items-center text-[#FE8D26] gap-1 font-bold text-lg",children:[(0,n.jsx)(c.G,{icon:i.Rpv}),(0,n.jsx)("p",{className:"pt-[1px]",children:"8"})]})})]}),(0,n.jsx)("div",{className:"flex-1 overflow-y-auto mt-10 scrollbar-hide pb-20",children:o.map((e,t)=>(0,n.jsxs)("div",{className:"bg-white rounded-2xl py-8 px-6 mb-5",onClick:()=>x(e._id),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:e.profile_picture_url,alt:e.name,className:"w-20 h-20 rounded-full mr-7"}),(0,n.jsxs)("h3",{className:"text-xl font-semibold text-black",children:[e.name,(0,n.jsx)("p",{className:"text-sm  text-center text-[#0039FF] font-normal rounded-md bg-[#CCD7FF] px-3 py-1 mt-2 ",children:"AI-powered"})]})]}),(0,n.jsx)("p",{className:"text-base text-black mt-4",children:e.description}),(0,n.jsxs)("button",{className:"text-[#0039FF] mt-3 text-sm flex items-center",children:[(0,n.jsx)(c.G,{icon:i.j1w,className:"mr-2"}),(0,n.jsx)("p",{className:"text-base font-semibold",children:"Jump on a call"})]})]},t))}),(0,n.jsxs)("div",{className:"flex justify-around items-center bg-white shadow-md pt-3 fixed bottom-0 left-0 right-0 text-md pb-10",children:[(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Speak"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Speak"),children:[(0,n.jsx)(c.G,{icon:i.lXL,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Speak"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Topics"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Topics"),children:[(0,n.jsx)(c.G,{icon:i.FL8,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Topics"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Challenges"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Challenges"),children:[(0,n.jsx)(c.G,{icon:i.kWN,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Challenges"})]}),(0,n.jsxs)("button",{className:"flex flex-col items-center ".concat("Profile"===e?"text-[#0039FF]":" text-[#959595]"),onClick:()=>t("Profile"),children:[(0,n.jsx)(c.G,{icon:i.ILF,size:"lg"}),(0,n.jsx)("span",{className:"text-[0.65rem] mt-1",children:"Profile"})]})]})]})}}},function(e){e.O(0,[676,772,61,920,971,23,744],function(){return e(e.s=3958)}),_N_E=e.O()}]);