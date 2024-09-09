"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{3061:function(e,t,n){n.r(t),n.d(t,{useBattery:function(){return a},useClickAway:function(){return c},useCopyToClipboard:function(){return s},useCounter:function(){return d},useDebounce:function(){return f},useDefault:function(){return w},useDocumentTitle:function(){return v},useFavicon:function(){return g},useGeolocation:function(){return m},useHistoryState:function(){return y},useHover:function(){return h},useIdle:function(){return L},useIntersectionObserver:function(){return S},useIsClient:function(){return b},useIsFirstRender:function(){return k},useList:function(){return C},useLocalStorage:function(){return x},useLockBodyScroll:function(){return D},useLongPress:function(){return I},useMap:function(){return P},useMeasure:function(){return z},useMediaQuery:function(){return A},useMouse:function(){return Y},useNetworkState:function(){return j},useObjectState:function(){return B},useOrientation:function(){return W},usePreferredLanguage:function(){return Q},usePrevious:function(){return q},useQueue:function(){return F},useRenderCount:function(){return V},useRenderInfo:function(){return G},useScript:function(){return K},useSessionStorage:function(){return eu},useSet:function(){return eo},useThrottle:function(){return ei},useToggle:function(){return el},useVisibilityChange:function(){return ed},useWindowScroll:function(){return ef},useWindowSize:function(){return ew}});var r=n(2265);function u({nativeEvent:e}){return window.TouchEvent?e instanceof TouchEvent:"touches"in e}function o(e){return e.nativeEvent instanceof MouseEvent}function i(e){return"[object Object]"===Object.prototype.toString.call(e)}function l(e,t){window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:t}))}function a(){let[e,t]=r.useState({supported:!0,loading:!0,level:null,charging:null,chargingTime:null,dischargingTime:null});return r.useEffect(()=>{if(!navigator.getBattery){t(e=>({...e,supported:!1,loading:!1}));return}let e=null,n=()=>{t({supported:!0,loading:!1,level:e.level,charging:e.charging,chargingTime:e.chargingTime,dischargingTime:e.dischargingTime})};return navigator.getBattery().then(t=>{e=t,n(),t.addEventListener("levelchange",n),t.addEventListener("chargingchange",n),t.addEventListener("chargingtimechange",n),t.addEventListener("dischargingtimechange",n)}),()=>{e&&(e.removeEventListener("levelchange",n),e.removeEventListener("chargingchange",n),e.removeEventListener("chargingtimechange",n),e.removeEventListener("dischargingtimechange",n))}},[]),e}function c(e){let t=r.useRef(null),n=r.useRef(e);return r.useLayoutEffect(()=>{n.current=e}),r.useEffect(()=>{let e=e=>{let r=t.current;r&&!r.contains(e.target)&&n.current(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[]),t}function s(){let[e,t]=r.useState(null);return[e,r.useCallback(e=>{(async()=>{try{if(navigator?.clipboard?.writeText)await navigator.clipboard.writeText(e),t(e);else throw Error("writeText not supported")}catch(n){!function(e){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e),t(e)}})()},[])]}function d(e=0,t={}){let{min:n,max:u}=t;if("number"==typeof n&&e<n)throw Error(`Your starting value of ${e} is less than your min of ${n}.`);if("number"==typeof u&&e>u)throw Error(`Your starting value of ${e} is greater than your max of ${u}.`);let[o,i]=r.useState(e),l=r.useCallback(()=>{i(e=>{let t=e+1;return"number"==typeof u&&t>u?e:t})},[u]);return[o,{increment:l,decrement:r.useCallback(()=>{i(e=>{let t=e-1;return"number"==typeof n&&t<n?e:t})},[n]),set:r.useCallback(e=>{i(t=>"number"==typeof u&&e>u||"number"==typeof n&&e<n?t:e)},[u,n]),reset:r.useCallback(()=>{i(e)},[e])}]}function f(e,t){let[n,u]=r.useState(e);return r.useEffect(()=>{let n=setTimeout(()=>{u(e)},t);return()=>{clearTimeout(n)}},[e,t]),n}function w(e,t){let[n,u]=r.useState(e);return null==n?[t,u]:[n,u]}function v(e){r.useEffect(()=>{document.title=e},[e])}function g(e){r.useEffect(()=>{let t=document.querySelector('link[rel~="icon"]');t?t.href=e:((t=document.createElement("link")).type="image/x-icon",t.rel="icon",t.href=e,document.head.appendChild(t))},[e])}function m(e={}){let[t,n]=r.useState({loading:!0,accuracy:null,altitude:null,altitudeAccuracy:null,heading:null,latitude:null,longitude:null,speed:null,timestamp:null,error:null}),u=r.useRef(e);return r.useEffect(()=>{let e=({coords:e,timestamp:t})=>{n({loading:!1,timestamp:t,latitude:e.latitude,longitude:e.longitude,altitude:e.altitude,accuracy:e.accuracy,altitudeAccuracy:e.altitudeAccuracy,heading:e.heading,speed:e.speed})},t=e=>{n(t=>({...t,loading:!1,error:e}))};navigator.geolocation.getCurrentPosition(e,t,u.current);let r=navigator.geolocation.watchPosition(e,t,u.current);return()=>{navigator.geolocation.clearWatch(r)}},[]),t}let E={past:[],present:null,future:[]},p=(e,t)=>{let{past:n,present:r,future:u}=e;if("UNDO"===t.type)return{past:n.slice(0,n.length-1),present:n[n.length-1],future:[r,...u]};if("REDO"===t.type)return{past:[...n,r],present:u[0],future:u.slice(1)};if("SET"===t.type){let{newPresent:u}=t;return t.newPresent===r?e:{past:[...n,r],present:u,future:[]}}if("CLEAR"===t.type)return{...E,present:t.initialPresent};throw Error("Unsupported action type")};function y(e={}){let t=r.useRef(e),[n,u]=r.useReducer(p,{...E,present:t.current}),o=0!==n.past.length,i=0!==n.future.length,l=r.useCallback(()=>{o&&u({type:"UNDO"})},[o]),a=r.useCallback(()=>{i&&u({type:"REDO"})},[i]),c=r.useCallback(e=>u({type:"SET",newPresent:e}),[]),s=r.useCallback(()=>u({type:"CLEAR",initialPresent:t.current}),[]);return{state:n.present,set:c,undo:l,redo:a,clear:s,canUndo:o,canRedo:i}}function h(){let[e,t]=r.useState(!1),n=r.useRef(null),u=r.useCallback(()=>{t(!0)},[]),o=r.useCallback(()=>{t(!1)},[]);return[r.useCallback(e=>{n.current?.nodeType===Node.ELEMENT_NODE&&(n.current.removeEventListener("mouseenter",u),n.current.removeEventListener("mouseleave",o)),e?.nodeType===Node.ELEMENT_NODE&&(e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",o)),n.current=e},[u,o]),e]}function L(e=6e4){let[t,n]=r.useState(!1);return r.useEffect(()=>{var t;let r,u;let o=()=>{n(!0)},i=(t=t=>{n(!1),window.clearTimeout(r),r=window.setTimeout(o,e)},u=0,()=>{let e=Date.now();e-u>=500&&(t(),u=e)}),l=()=>{document.hidden||i()};return r=window.setTimeout(o,e),window.addEventListener("mousemove",i),window.addEventListener("mousedown",i),window.addEventListener("resize",i),window.addEventListener("keydown",i),window.addEventListener("touchstart",i),window.addEventListener("wheel",i),document.addEventListener("visibilitychange",l),()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mousedown",i),window.removeEventListener("resize",i),window.removeEventListener("keydown",i),window.removeEventListener("touchstart",i),window.removeEventListener("wheel",i),document.removeEventListener("visibilitychange",l),window.clearTimeout(r)}},[e]),t}function S(e={}){let{threshold:t=1,root:n=null,rootMargin:u="0px"}=e,[o,i]=r.useState(null),l=r.useRef(null);return[r.useCallback(e=>{if(l.current&&(l.current.disconnect(),l.current=null),e?.nodeType===Node.ELEMENT_NODE){let r=new IntersectionObserver(([e])=>{i(e)},{threshold:t,root:n,rootMargin:u});r.observe(e),l.current=r}},[t,n,u]),o]}function b(){let[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}function k(){let e=r.useRef(!0);return!0===e.current?(e.current=!1,!0):e.current}function C(e=[]){let[t,n]=r.useState(e),u=r.useCallback(e=>{n(e)},[]),o=r.useCallback(e=>{n(t=>[...t,e])},[]),i=r.useCallback(e=>{n(t=>[...t.slice(0,e),...t.slice(e+1)])},[]);return[t,{set:u,push:o,removeAt:i,insertAt:r.useCallback((e,t)=>{n(n=>[...n.slice(0,e),t,...n.slice(e)])},[]),updateAt:r.useCallback((e,t)=>{n(n=>n.map((n,r)=>r===e?t:n))},[]),clear:r.useCallback(()=>n([]),[])}]}let T=(e,t)=>{let n=JSON.stringify(t);window.localStorage.setItem(e,n),l(e,n)},R=e=>{window.localStorage.removeItem(e),l(e,null)},N=e=>window.localStorage.getItem(e),O=e=>(window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)),M=()=>{throw Error("useLocalStorage is a client-only hook")};function x(e,t){let n=r.useSyncExternalStore(O,()=>N(e),M),u=r.useCallback(t=>{try{let r="function"==typeof t?t(JSON.parse(n)):t;null==r?R(e):T(e,r)}catch(e){console.warn(e)}},[e,n]);return r.useEffect(()=>{null===N(e)&&void 0!==t&&T(e,t)},[e,t]),[n?JSON.parse(n):t,u]}function D(){r.useLayoutEffect(()=>{let e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[])}function I(e,t={}){let{threshold:n=400,onStart:i,onFinish:l,onCancel:a}=t,c=r.useRef(!1),s=r.useRef(!1),d=r.useRef();return r.useMemo(()=>{if("function"!=typeof e)return{};let t=t=>{(o(t)||u(t))&&(i&&i(t),s.current=!0,d.current=setTimeout(()=>{e(t),c.current=!0},n))},r=e=>{(o(e)||u(e))&&(c.current?l&&l(e):s.current&&a&&a(e),c.current=!1,s.current=!1,d.current&&window.clearTimeout(d.current))};return{onMouseDown:t,onMouseUp:r,onMouseLeave:r,onTouchStart:t,onTouchEnd:r}},[e,n,a,l,i])}function P(e){let t=r.useRef(new Map(e)),[,n]=r.useReducer(e=>e+1,0);return t.current.set=(...e)=>(Map.prototype.set.apply(t.current,e),n(),t.current),t.current.clear=(...e)=>{Map.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Map.prototype.delete.apply(t.current,e);return n(),r},t.current}function z(){let[e,t]=r.useState({width:null,height:null}),n=r.useRef(null);return[r.useCallback(e=>{if(n.current&&(n.current.disconnect(),n.current=null),e?.nodeType===Node.ELEMENT_NODE){let r=new ResizeObserver(([e])=>{if(e&&e.borderBoxSize){let{inlineSize:n,blockSize:r}=e.borderBoxSize[0];t({width:n,height:r})}});r.observe(e),n.current=r}},[]),e]}function A(e){let t=r.useCallback(t=>{let n=window.matchMedia(e);return n.addEventListener("change",t),()=>{n.removeEventListener("change",t)}},[e]);return r.useSyncExternalStore(t,()=>window.matchMedia(e).matches,()=>{throw Error("useMediaQuery is a client-only hook")})}function Y(){let[e,t]=r.useState({x:0,y:0,elementX:0,elementY:0,elementPositionX:0,elementPositionY:0}),n=r.useRef(null);return r.useLayoutEffect(()=>{let e=e=>{let r={x:e.pageX,y:e.pageY};if(n.current?.nodeType===Node.ELEMENT_NODE){let{left:t,top:u}=n.current.getBoundingClientRect(),o=t+window.scrollX,i=u+window.scrollY,l=e.pageX-o,a=e.pageY-i;r.elementX=l,r.elementY=a,r.elementPositionX=o,r.elementPositionY=i}t(e=>({...e,...r}))};return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}},[]),[e,n]}let _=()=>navigator?.connection||navigator?.mozConnection||navigator?.webkitConnection,U=e=>{window.addEventListener("online",e,{passive:!0}),window.addEventListener("offline",e,{passive:!0});let t=_();return t&&t.addEventListener("change",e,{passive:!0}),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e),t&&t.removeEventListener("change",e)}},X=()=>{throw Error("useNetworkState is a client-only hook")};function j(){let e=r.useRef({});return r.useSyncExternalStore(U,()=>{let t=navigator.onLine,n=_(),r={online:t,downlink:n?.downlink,downlinkMax:n?.downlinkMax,effectiveType:n?.effectiveType,rtt:n?.rtt,saveData:n?.saveData,type:n?.type};return!function(e,t){let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(e[r]!==t[r])return!1;return!0}(e.current,r)?(e.current=r,r):e.current},X)}function B(e){let[t,n]=r.useState(e);return[t,r.useCallback(e=>{"function"==typeof e&&n(t=>{let n=e(t);if(i(n))return{...t,...n}}),i(e)&&n(t=>({...t,...e}))},[])]}function W(){let[e,t]=r.useState({angle:0,type:"landscape-primary"});return r.useLayoutEffect(()=>{let e=()=>{let{angle:e,type:n}=window.screen.orientation;t({angle:e,type:n})},n=()=>{t({type:"UNKNOWN",angle:window.orientation})};return window.screen?.orientation?(e(),window.screen.orientation.addEventListener("change",e)):(n(),window.addEventListener("orientationchange",n)),()=>{window.screen?.orientation?window.screen.orientation.removeEventListener("change",e):window.removeEventListener("orientationchange",n)}},[]),e}let J=e=>(window.addEventListener("languagechange",e),()=>window.removeEventListener("languagechange",e)),$=()=>navigator.language,H=()=>{throw Error("usePreferredLanguage is a client-only hook")};function Q(){return r.useSyncExternalStore(J,$,H)}function q(e){let[t,n]=r.useState(e),[u,o]=r.useState(null);return e!==t&&(o(t),n(e)),u}function F(e=[]){let[t,n]=r.useState(e);return{add:r.useCallback(e=>{n(t=>[...t,e])},[]),remove:r.useCallback(()=>{let e;return n(([t,...n])=>(e=t,n)),e},[]),clear:r.useCallback(()=>{n([])},[]),first:t[0],last:t[t.length-1],size:t.length,queue:t}}function V(){let e=r.useRef(0);return e.current++,e.current}function G(e="Unknown"){let t=r.useRef(0),n=r.useRef();Date.now(),t.current++,r.useEffect(()=>{n.current=Date.now()}),n.current&&n.current}function K(e,t={}){let[n,u]=r.useState("loading"),o=r.useRef(t);return r.useEffect(()=>{let t=document.querySelector(`script[src="${e}"]`),n=t?.getAttribute("data-status");if(n){u(n);return}if(null===t){(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);let n=()=>{t.setAttribute("data-status","ready"),u("ready"),i()},r=()=>{t.setAttribute("data-status","error"),u("error"),i()},i=()=>{t.removeEventListener("load",n),t.removeEventListener("error",r)};t.addEventListener("load",n),t.addEventListener("error",r);let l=o.current.removeOnUnmount;return()=>{!0===l&&(t.remove(),i())}}u("unknown")},[e]),n}let Z=(e,t)=>{let n=JSON.stringify(t);window.sessionStorage.setItem(e,n),l(e,n)},ee=e=>{window.sessionStorage.removeItem(e),l(e,null)},et=e=>window.sessionStorage.getItem(e),en=e=>(window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)),er=()=>{throw Error("useSessionStorage is a client-only hook")};function eu(e,t){let n=r.useSyncExternalStore(en,()=>et(e),er),u=r.useCallback(t=>{try{let r="function"==typeof t?t(JSON.parse(n)):t;null==r?ee(e):Z(e,r)}catch(e){console.warn(e)}},[e,n]);return r.useEffect(()=>{null===et(e)&&void 0!==t&&Z(e,t)},[e,t]),[n?JSON.parse(n):t,u]}function eo(e){let t=r.useRef(new Set(e)),[,n]=r.useReducer(e=>e+1,0);return t.current.add=(...e)=>{let r=Set.prototype.add.apply(t.current,e);return n(),r},t.current.clear=(...e)=>{Set.prototype.clear.apply(t.current,e),n()},t.current.delete=(...e)=>{let r=Set.prototype.delete.apply(t.current,e);return n(),r},t.current}function ei(e,t=500){let[n,u]=r.useState(e),o=r.useRef(null);return r.useEffect(()=>{let n=Date.now();if(o.current&&n>=o.current+t)o.current=n,u(e);else{let r=window.setTimeout(()=>{o.current=n,u(e)},t);return()=>window.clearTimeout(r)}},[e,t]),n}function el(e){let[t,n]=r.useState(()=>"boolean"==typeof e?e:!!e);return[t,r.useCallback(e=>"boolean"==typeof e?n(e):n(e=>!e),[])]}let ea=e=>(document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}),ec=()=>document.visibilityState,es=()=>{throw Error("useVisibilityChange is a client-only hook")};function ed(){return"visible"===r.useSyncExternalStore(ea,ec,es)}function ef(){let[e,t]=r.useState({x:null,y:null}),n=r.useCallback((...e)=>{if("object"==typeof e[0])window.scrollTo(e[0]);else if("number"==typeof e[0]&&"number"==typeof e[1])window.scrollTo(e[0],e[1]);else throw Error("Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo")},[]);return r.useLayoutEffect(()=>{let e=()=>{t({x:window.scrollX,y:window.scrollY})};return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),[e,n]}function ew(){let[e,t]=r.useState({width:null,height:null});return r.useLayoutEffect(()=>{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e}}}]);