"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{66118:function(e,s){s.Z=[{id:1,page:"nav_1",has_dropdown:!0,title:"Home",link:"#"},{id:2,page:"nav_1",has_dropdown:!1,title:"Feature",link:"/#feature"},{id:3,page:"nav_1",has_dropdown:!1,title:"RoadMap",link:"/#roadMap"},{id:4,page:"nav_1",has_dropdown:!0,title:"Blog",link:"#"},{id:1,page:"nav_2",has_dropdown:!0,title:"Home",link:"#",sub_menus:[{link:"/",title:"ICO Investment"},{link:"/home-two",title:"Blockchain"}]},{id:2,page:"nav_2",has_dropdown:!1,title:"Why Blockchain",link:"/home-two/#blockchain"},{id:3,page:"nav_2",has_dropdown:!1,title:"Feature",link:"/home-two/#feature"},{id:4,page:"nav_2",has_dropdown:!0,title:"Blog",link:"#",sub_menus:[{link:"/blog",title:"Our Blog"},{link:"/blog-details",title:"Blog-Details"}]},{id:5,page:"nav_2",has_dropdown:!1,title:"Contact",link:"/contact"}]},24916:function(e,s,a){var l=a(2265);s.Z=()=>{let[e,s]=(0,l.useState)(!1),a=()=>{window.scrollY>200?s(!0):s(!1)};return(0,l.useEffect)(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]),{sticky:e}}},14195:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var l=a(57437),i=a(2265),n=a(86123);let t=()=>{a.e(715).then(a.t.bind(a,23715,23)).then(e=>{new e.default.WOW({live:!1}).init()})};var c=a(24916),r=()=>{let{sticky:e}=(0,c.Z)(),[s,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{!s&&window.pageYOffset>400?a(!0):s&&window.pageYOffset<=400&&a(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[()=>{!s&&window.pageYOffset>400?a(!0):s&&window.pageYOffset<=400&&a(!1)}]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"scroll-top scroll-to-target ".concat(e?"open":""),children:(0,l.jsx)("i",{className:"fas fa-angle-up"})})})};a(62440);var d=e=>{let{children:s}=e;return(0,i.useEffect)(()=>{let e=setTimeout(()=>{t()},100);return()=>clearTimeout(e)},[]),(0,l.jsxs)(l.Fragment,{children:[s,(0,l.jsx)(r,{}),(0,l.jsx)(n.Ix,{position:"top-center"})]})}},31903:function(e,s,a){var l=a(57437),i=a(20703),n=a(8792),t=a(45896);s.Z=e=>{let{offCanvas:s,setOffCanvas:a}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"".concat(s?"offcanvas-menu-visible":""),children:[(0,l.jsxs)("div",{className:"extra-info ".concat(s?"active":""),children:[(0,l.jsx)("div",{className:"close-icon menu-close",children:(0,l.jsx)("button",{onClick:()=>a(!1),children:(0,l.jsx)("i",{className:"far fa-window-close"})})}),(0,l.jsx)("div",{className:"logo-side mb-30",children:(0,l.jsx)(n.default,{href:"/",children:(0,l.jsx)(i.default,{src:t.Z,alt:"Logo"})})}),(0,l.jsxs)("div",{className:"side-info mb-30",children:[(0,l.jsxs)("div",{className:"contact-list mb-30",children:[(0,l.jsx)("h4",{children:"Office Address"}),(0,l.jsxs)("p",{children:["123/A, Miranda City Likaoli ",(0,l.jsx)("br",{})," Prikano, Dope"]})]}),(0,l.jsxs)("div",{className:"contact-list mb-30",children:[(0,l.jsx)("h4",{children:"Phone Number"}),(0,l.jsx)("p",{children:"+0989 7876 9865 9"}),(0,l.jsx)("p",{children:"+(090) 8765 86543 85"})]}),(0,l.jsxs)("div",{className:"contact-list mb-30",children:[(0,l.jsx)("h4",{children:"Email Address"}),(0,l.jsx)("p",{children:"info@example.com"}),(0,l.jsx)("p",{children:"example.mail@hum.com"})]})]}),(0,l.jsxs)("div",{className:"social-icon-right mt-30",children:[(0,l.jsx)(n.default,{href:"#",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)(n.default,{href:"#",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)(n.default,{href:"#",children:(0,l.jsx)("i",{className:"fab fa-google-plus-g"})}),(0,l.jsx)(n.default,{href:"#",children:(0,l.jsx)("i",{className:"fab fa-instagram"})})]})]}),(0,l.jsx)("div",{onClick:()=>a(!1),className:"offcanvas-overly ".concat(s?"active":"")})]})})}},18887:function(e,s,a){a.d(s,{Z:function(){return h}});var l=a(57437),i=a(20703),n=a(8792),t=a(47907),c=a(2265),r=a(66118),d=e=>{let{setIsActive:s}=e,[a,i]=(0,c.useState)(""),d=(0,t.usePathname)(),o=e=>d===e,h=e=>d===e,f=()=>{s(!1)},m=e=>{a===e?i(""):i(e)};return(0,l.jsx)("ul",{className:"navigation",children:r.Z.filter(e=>"nav_1"===e.page).map((e,s)=>(0,l.jsxs)(c.Fragment,{children:[e.has_dropdown&&(0,l.jsxs)("li",{className:"menu-item-has-children",children:[(0,l.jsx)(n.default,{href:e.link,onClick:f,className:" ".concat(o(e.link)||e.sub_menus&&e.sub_menus.some(e=>e.link&&h(e.link))?"active":""),children:e.title}),(0,l.jsx)("div",{className:"dropdown-btn ".concat(a===e.title?"open":""),onClick:()=>m(e.title),children:(0,l.jsx)("i",{className:"".concat(a===e.title?"fas fa-angle-up":"fas fa-angle-down")})}),e.sub_menus&&e.sub_menus.length>0&&(0,l.jsx)("ul",{className:"sub-menu",style:{display:a===e.title?"block":"none"},children:e.sub_menus.map((e,s)=>(0,l.jsx)("li",{children:(0,l.jsx)(n.default,{href:e.link,onClick:f,className:e.link&&h(e.link)?"active":"",children:e.title})},s))})]}),!e.has_dropdown&&(0,l.jsx)("li",{className:"menu-item-has-children",children:(0,l.jsx)(n.default,{onClick:f,href:e.link,className:"".concat(d===e.link?"active":""),children:e.title})})]},s))})},o=a(45896),h=e=>{let{isActive:s,setIsActive:a}=e;return(0,l.jsxs)("div",{className:" ".concat(s?"mobile-menu-visible":""),children:[(0,l.jsx)("div",{className:"mobile-menu",children:(0,l.jsxs)("nav",{className:"menu-box",children:[(0,l.jsx)("div",{onClick:()=>a(!1),className:"close-btn",children:(0,l.jsx)("i",{className:"fas fa-times"})}),(0,l.jsx)("div",{className:"nav-logo",children:(0,l.jsx)(n.default,{href:"/",children:(0,l.jsx)(i.default,{src:o.Z,alt:"Logo"})})}),(0,l.jsx)("div",{className:"menu-outer",children:(0,l.jsx)(d,{setIsActive:a})}),(0,l.jsx)("div",{className:"social-links",children:(0,l.jsxs)("ul",{className:"clearfix list-wrap",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-twitter"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-instagram"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-linkedin-in"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-youtube"})})})]})})]})}),(0,l.jsx)("div",{onClick:()=>a(!1),className:"menu-backdrop"})]})}},45896:function(e,s){s.Z={src:"/_next/static/media/logo.6d3a6fd1.png",height:55,width:160,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af6ltBkA4+pV/lZEDQEhHfz++/vdAQICFf7+/t0CAgIlAf2brJ0B4OnM/nRbFgEQDxD//P35/v/+rQICAkQBAQEXAfybrFMC8PQ8/lNC9QAhHfwA+/vkAQMDCf///+MAAAAqTs8uWKdFhgEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}}}]);