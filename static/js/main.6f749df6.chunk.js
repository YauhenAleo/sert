(this["webpackJsonpaleo-website"]=this["webpackJsonpaleo-website"]||[]).push([[1],{111:function(e,t,n){},112:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(25),r=n.n(l),s=(n(111),n(38)),i=n(76),j=n.n(i),o=n(93),d=n(37),u=(n(112),n(94)),b=n.n(u),O=n(189),h=n(192),x=n(46),f=n(30),p=n(103),y=n(191),v=n(190),m=n(193),g=n(194),w=n(53),A=n(195),C=n(196),k=n(7),K=O.a.Header,z=O.a.Content,I=O.a.Footer,S=function(){return Object(k.jsx)(w.a,{style:{fontSize:24},spin:!0})},_=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],l=n[1],r=function(){b()(e.data),l(!0),setTimeout((function(){return l(!1)}),2e3)};return c?Object(k.jsx)(A.a,{onClick:r}):Object(k.jsx)(C.a,{onClick:r})},P=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),c=t[0],l=t[1],r=Object(a.useState)(null),i=Object(d.a)(r,2),u=i[0],b=i[1],O=Object(a.useState)(!1),g=Object(d.a)(O,2),w=g[0],A=g[1];Object(a.useEffect)((function(){null===c&&n.e(0).then(n.bind(null,202)).then((function(e){return l(e)}))}),[]);var C=function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(!0),setTimeout((function(){b(new c.Account),A(!1)}),50);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){return null!==u?u.to_private_key():""},z=function(){return null!==u?u.to_view_key():""},I=function(){return null!==u?u.to_address():""};return null!==c?Object(k.jsxs)(h.a,{title:"Create a New Account",style:{width:"100%",borderRadius:"20px"},bordered:!1,children:[Object(k.jsxs)(x.a,{justify:"center",children:[Object(k.jsx)(f.a,{children:Object(k.jsx)(p.a,{type:"primary",shape:"round",size:"large",onClick:C,children:w?Object(k.jsx)(S,{}):"Generate"})}),Object(k.jsx)(f.a,{offset:"1",children:Object(k.jsx)(p.a,{shape:"round",size:"large",onClick:function(){return b(null)},children:"Clear"})})]}),null!==u?Object(k.jsxs)(y.a,Object(s.a)(Object(s.a)({},{labelCol:{span:3},wrapperCol:{span:21}}),{},{children:[Object(k.jsx)(v.a,{}),Object(k.jsx)(y.a.Item,{label:"Private Key",colon:!1,children:Object(k.jsx)(m.a,{size:"large",placeholder:"Private Key",value:K(),addonAfter:Object(k.jsx)(_,{data:K()}),disabled:!0})}),Object(k.jsx)(y.a.Item,{label:"View Key",colon:!1,children:Object(k.jsx)(m.a,{size:"large",placeholder:"View Key",value:z(),addonAfter:Object(k.jsx)(_,{data:z()}),disabled:!0})}),Object(k.jsx)(y.a.Item,{label:"Address",colon:!1,children:Object(k.jsx)(m.a,{size:"large",placeholder:"Address",value:I(),addonAfter:Object(k.jsx)(_,{data:I()}),disabled:!0})})]})):null]}):Object(k.jsx)("h3",{children:Object(k.jsx)("center",{children:"Loading..."})})},F=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),c=t[0],l=t[1],r=Object(a.useState)(null),i=Object(d.a)(r,2),j=i[0],o=i[1];Object(a.useEffect)((function(){null===c&&n.e(0).then(n.bind(null,202)).then((function(e){return l(e)}))}),[]);var u={labelCol:{span:3},wrapperCol:{span:21}};if(null!==c){var b=function(){return null!==j?j.to_address():""};return Object(k.jsxs)(h.a,{title:"Load Account from Private Key",style:{width:"100%",borderRadius:"20px"},bordered:!1,children:[Object(k.jsx)(y.a,Object(s.a)(Object(s.a)({},u),{},{children:Object(k.jsx)(y.a.Item,{label:"Private Key",colon:!1,children:Object(k.jsx)(m.a,{name:"privateKey",size:"large",placeholder:"Private Key",allowClear:!0,onChange:function(e){o(null);try{o(c.Account.from_private_key(e.target.value))}catch(t){console.error(t)}},style:{borderRadius:"20px"}})})})),null!==j?Object(k.jsxs)(y.a,Object(s.a)(Object(s.a)({},u),{},{children:[Object(k.jsx)(v.a,{}),Object(k.jsx)(y.a.Item,{label:"View Key",colon:!1,children:Object(k.jsx)(m.a,{size:"large",placeholder:"View Key",value:null!==j?j.to_view_key():"",addonAfter:Object(k.jsx)(_,{data:b(),style:{borderRadius:"20px"}}),disabled:!0})}),Object(k.jsx)(y.a.Item,{label:"Address",colon:!1,children:Object(k.jsx)(m.a,{size:"large",placeholder:"Address",value:b(),addonAfter:Object(k.jsx)(_,{data:b(),style:{borderRadius:"20px"}}),disabled:!0})})]})):null]})}return Object(k.jsx)("h3",{children:Object(k.jsx)("center",{children:"Loading..."})})};var L=function(){return Object(k.jsxs)(O.a,{className:"layout",children:[Object(k.jsxs)(K,{className:"header",children:[Object(k.jsx)("div",{className:"logo"}),Object(k.jsxs)(g.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(k.jsx)(g.a.Item,{children:"Account"},"1"),Object(k.jsx)(g.a.Item,{children:"TBD"},"2")]})]}),Object(k.jsxs)(z,{style:{padding:"50px 50px"},children:[Object(k.jsx)(P,{}),Object(k.jsx)("br",{}),Object(k.jsx)(F,{})]}),Object(k.jsxs)(I,{style:{textAlign:"center"},children:["Visit the ",Object(k.jsx)("a",{href:"https://github.com/AleoHQ/aleo",children:"Aleo Github repo"}),"."]})]})},R=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,203)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};n(184);r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(L,{})}),document.getElementById("root")),R()}},[[185,2,3]]]);
//# sourceMappingURL=main.6f749df6.chunk.js.map