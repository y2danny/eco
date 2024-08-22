(()=>{var e={};e.id=327,e.ids=[327],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},62992:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>m,routeModule:()=>h,tree:()=>c});var r=s(50482),a=s(69108),i=s(62563),o=s.n(i),n=s(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,19009)),"C:\\Users\\USER\\Downloads\\ecoreact\\iko\\src\\app\\contact\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,21342)),"C:\\Users\\USER\\Downloads\\ecoreact\\iko\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"]}],m=["C:\\Users\\USER\\Downloads\\ecoreact\\iko\\src\\app\\contact\\page.tsx"],d="/contact/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},55472:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,31900,23)),Promise.resolve().then(s.t.bind(s,61476,23)),Promise.resolve().then(s.bind(s,35454)),Promise.resolve().then(s.bind(s,41034)),Promise.resolve().then(s.bind(s,57839)),Promise.resolve().then(s.bind(s,60855)),Promise.resolve().then(s.bind(s,89350)),Promise.resolve().then(s.bind(s,63470)),Promise.resolve().then(s.bind(s,95454)),Promise.resolve().then(s.bind(s,56128))},60855:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>R});var r=s(95344),a=s(3729);class i{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},n=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async(e,t,s={})=>{let r=await fetch(o.origin+e,{method:"POST",headers:s,body:t}),a=await r.text(),n=new i(r.status,a);if(r.ok)return n;throw n},c=(e,t,s)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||"string"!=typeof s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},m=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},d=e=>e.webdriver||!e.languages||0===e.languages.length,p=()=>new i(451,"Unavailable For Headless Browser"),h=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},u=e=>!e.list?.length||!e.watchVariable,x=(e,t)=>e instanceof FormData?e.get(t):e[t],g=(e,t)=>{if(u(e))return!1;h(e.list,e.watchVariable);let s=x(t,e.watchVariable);return"string"==typeof s&&e.list.includes(s)},j=()=>new i(403,"Forbidden"),f=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},b=async(e,t,s)=>{let r=Number(await s.get(e)||0);return t-Date.now()+r},v=async(e,t,s)=>{if(!t.throttle||!s)return!1;f(t.throttle,t.id);let r=t.id||e;return await b(r,t.throttle,s)>0||(await s.set(r,Date.now().toString()),!1)},y=()=>new i(429,"Too Many Requests"),w=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_=e=>"string"==typeof e?document.querySelector(e):e,P={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let s=n(e);o.publicKey=s.publicKey,o.blockHeadless=s.blockHeadless,o.storageProvider=s.storageProvider,o.blockList=s.blockList,o.limitRate=s.limitRate,o.origin=s.origin||t},send:async(e,t,s,r)=>{let a=n(r),i=a.publicKey||o.publicKey,h=a.blockHeadless||o.blockHeadless,u=o.storageProvider||a.storageProvider,x={...o.blockList,...a.blockList},f={...o.limitRate,...a.limitRate};return h&&d(navigator)?Promise.reject(p()):(c(i,e,t),m(s),s&&g(x,s))?Promise.reject(j()):await v(location.pathname,f,u)?Promise.reject(y()):l("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:i,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})},sendForm:async(e,t,s,r)=>{let a=n(r),i=a.publicKey||o.publicKey,m=a.blockHeadless||o.blockHeadless,h=o.storageProvider||a.storageProvider,u={...o.blockList,...a.blockList},x={...o.limitRate,...a.limitRate};if(m&&d(navigator))return Promise.reject(p());let f=_(s);c(i,e,t),w(f);let b=new FormData(f);return g(u,b)?Promise.reject(j()):await v(location.pathname,x,h)?Promise.reject(y()):(b.append("lib_version","4.3.3"),b.append("service_id",e),b.append("template_id",t),b.append("user_id",i),l("/api/v1.0/email/send-form",b))},EmailJSResponseStatus:i};var N=s(69697),k=s(84502),S=s(60708),q=s(96040);let C=k.Ry({user_name:k.Z_().required().label("Name"),user_email:k.Z_().required().email().label("Email"),user_phone:k.Rx().transform((e,t)=>t&&""===t.phone?NaN:e).typeError("Phone number is required").required("Phone must be a number"),user_company:k.Z_().required().label("Company"),message:k.Z_().required().label("Message")}).required(),R=()=>{let{register:e,handleSubmit:t,reset:s,formState:{errors:i}}=(0,S.cI)({resolver:(0,q.X)(C)}),o=(0,a.useRef)(null);return(0,r.jsxs)("form",{ref:o,onSubmit:t(e=>{o.current?P.sendForm("themegenix","template_hdr7ic6",o.current,"QOBCxT0bzNKEs-CwW").then(e=>{(0,N.Am)("Comment sent successfully",{position:"top-center"}),s(),console.log(e.text),console.log("msg send")},e=>{console.log(e.text)}):console.error("Form reference is null")}),children:[(0,r.jsxs)("div",{className:"row",children:[r.jsx("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-grp",children:[r.jsx("input",{type:"text",...e("user_name"),name:"user_name",placeholder:"Enter you name"}),r.jsx("p",{className:"form_error",children:i.user_name?.message})]})}),r.jsx("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-grp",children:[r.jsx("input",{type:"email",...e("user_email"),name:"user_email",placeholder:"Enter you email"}),r.jsx("p",{className:"form_error",children:i.user_email?.message})]})}),r.jsx("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-grp",children:[r.jsx("input",{type:"number",...e("user_phone"),name:"user_phone",placeholder:"Mobile no"}),r.jsx("p",{className:"form_error",children:i.user_phone?.message})]})}),r.jsx("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-grp",children:[r.jsx("input",{type:"text",...e("user_company"),name:"user_company",placeholder:"Company"}),r.jsx("p",{className:"form_error",children:i.user_company?.message})]})})]}),(0,r.jsxs)("div",{className:"form-grp",children:[r.jsx("textarea",{...e("message"),placeholder:"Enter you message....."}),r.jsx("p",{className:"form_error",children:i.message?.message})]}),r.jsx("button",{type:"submit",value:"Send",className:"btn",children:"Send Message"})]})}},19009:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f,metadata:()=>j});var r=s(25036),a=s(90693),i=s(27152),o=s(34682),n=s(16274);let l=(0,s(86843).createProxy)(String.raw`C:\Users\USER\Downloads\ecoreact\iko\src\component\forms\ContactForm.tsx`),{__esModule:c,$$typeof:m}=l,d=l.default,p=[{id:1,icon:"fas fa-map-marker-alt",title:"Location",info:(0,r.jsxs)(r.Fragment,{children:["1901 Thornridge Cir. ",r.jsx("br",{})," Shiloh, Hawaii"]})},{id:2,icon:"fas fa-phone-alt",title:"Contact",info:(0,r.jsxs)(r.Fragment,{children:[r.jsx(n.default,{href:"tel:0123456789",children:"+88(0) 555-0108"})," ",r.jsx("br",{})," ",r.jsx(n.default,{href:"tel:0123456789",children:"+88(0) 555-01117"})]})},{id:3,icon:"fas fa-envelope",title:"Email",info:(0,r.jsxs)(r.Fragment,{children:[r.jsx(n.default,{href:"mailto:xeco.@example.com",children:"sara.cruz@example.com"})," ",r.jsx("br",{})," ",r.jsx(n.default,{href:"mailto:xeco.@example.com",children:"xeco.@example.com"})]})},{id:4,icon:"fas fa-business-time",title:"Visit Between",info:(0,r.jsxs)(r.Fragment,{children:["Mon - Sat : 8.00-5.00 ",r.jsx("br",{})," Sunday : Closed"]})}],h=()=>r.jsx("section",{className:"contact-area pt-140 pb-140",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx("div",{className:"contact-info-wrap",children:r.jsx("div",{className:"row justify-content-center",children:p.map(e=>r.jsx("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"contact-info-item",children:[r.jsx("div",{className:"icon",children:r.jsx("i",{className:e.icon})}),(0,r.jsxs)("div",{className:"content",children:[r.jsx("h6",{className:"title",children:e.title}),r.jsx("p",{children:e.info})]})]})},e.id))})}),r.jsx("div",{className:"contact-form-wrap",children:(0,r.jsxs)("div",{className:"row g-0",children:[r.jsx("div",{className:"col-57 order-0 order-lg-2",children:(0,r.jsxs)("div",{className:"contact-form",children:[r.jsx("h4",{className:"title",children:"Send a message"}),r.jsx(d,{}),r.jsx("p",{className:"ajax-response mb-0"})]})}),r.jsx("div",{className:"col-43",children:r.jsx("div",{className:"contact-map",children:r.jsx("iframe",{src:"https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/",allowFullScreen:!0,loading:"lazy"})})})]})})]})});var u=s(43362);let x=()=>(0,r.jsxs)("main",{children:[r.jsx(u.ZP,{}),r.jsx(i.Z,{title:"Contact"}),r.jsx(h,{}),r.jsx(o.Z,{}),r.jsx(a.ZP,{})]});var g=s(99940);let j={title:"Contact IKO - ICO & Crypto Landing Page Page React Next js Template"},f=()=>r.jsx(g.ZP,{children:r.jsx(x,{})})}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[22,671,427,740,702,34],()=>s(62992));module.exports=r})();