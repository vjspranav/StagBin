(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{85:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(14),i=c.n(r),o=(c(85),c(10)),s=c(39),l=c(11),j=c(54),b=c(3);function d(e){var t=e.curTheme,c=Object(l.f)().id,n=Object(b.jsx)(j.a,{height:"90vh",defaultLanguage:"javascript",original:"",modified:c}),a=Object(b.jsx)("div",{style:{overflow:"hidden"},children:Object(b.jsx)(j.b,{theme:"light"===t?"light":"vs-dark",height:"88vh",defaultLanguage:"javascript",defaultValue:c?"content from "+c:"//Enter text",colorDecorators:"true",automaticLayout:"true"})});return console.log(c),c?n:a}var h=c(19),u=c(145),O=c(136),x=c(99),g=c(131),m=c(135),v=c(133),f=c(141),p=c(69),y=c.n(p),k=c(134),F=c(140),S=c(68),w=c.n(S),B=c(67),C=c.n(B),T=c(66),I=c.n(T),N=c(64),L=c.n(N),A=c(65),E=c.n(A),H=c(137),D=c(143),P=c(138),J=c(139),R=c(144),V=c(142),q=Object(g.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(1),right:e.spacing(2),minHeight:"10px"},centerItems:{justifyContent:"space-between"},urlEdit:{justifyContent:"center",marginLeft:"500px",paddingBottom:"15px"}}}));function z(e){var t=e.children,c=e.window,n=q(),a=Object(v.a)({target:c?c():void 0,disableHysteresis:!0,threshold:100});return Object(b.jsx)(k.a,{in:a,children:Object(b.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root,children:t})})}function M(e){var t=e.curTheme,c=e.isEditing,r=Object(n.useState)("dark"===t),i=Object(o.a)(r,2),s=i[0],l=i[1],j=Object(n.useState)(""),d=Object(o.a)(j,2),g=d[0],v=d[1],p=q();return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(m.a,{}),Object(b.jsx)(u.a,{style:{background:"inherit",color:"inherit"},children:Object(b.jsxs)(O.a,{className:p.centerItems,children:[Object(b.jsx)(x.a,{variant:"h6",children:"StagBIN"}),Object(b.jsxs)(H.a,{children:[Object(b.jsx)(D.a,{htmlFor:"custom-url",children:"URL"}),Object(b.jsx)(R.a,{id:"custom-url",type:"text",value:g,onChange:function(e){console.log(e.target.value),v(e.target.value)},style:{color:"inherit"},endAdornment:Object(b.jsx)(P.a,{position:"end",children:Object(b.jsx)(J.a,{"aria-label":"cop"})})})]}),Object(b.jsxs)("div",{children:[c?Object(b.jsx)(V.a,{title:"Save",children:Object(b.jsx)(J.a,{edge:"end",color:"inherit","aria-label":"Save",children:Object(b.jsx)(L.a,{})})}):Object(b.jsx)(V.a,{title:"Edit",children:Object(b.jsx)(J.a,{edge:"end",color:"inherit","aria-label":"Save",children:Object(b.jsx)(E.a,{})})}),Object(b.jsx)(V.a,{title:"New Paste",children:Object(b.jsx)(J.a,{edge:"end",color:"inherit","aria-label":"Save",children:Object(b.jsx)(I.a,{})})}),Object(b.jsx)(F.a,{color:"inherit",onClick:function(){e.toggle(),l(!s)},children:s?Object(b.jsx)(C.a,{}):Object(b.jsx)(w.a,{})})]})]})}),Object(b.jsx)(O.a,{id:"back-to-top-anchor"}),Object(b.jsx)(z,Object(h.a)(Object(h.a)({},e),{},{children:Object(b.jsx)(f.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(b.jsx)(y.a,{})})}))]})}var U=Object(g.a)((function(e){return{appBar:{bottom:0,top:"auto"},toolbar:{minHeight:"30px"}}}));function G(){var e=U();return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(m.a,{}),Object(b.jsx)(u.a,{position:"fixed",style:{background:"inherit",color:"inherit"},className:e.appBar,children:Object(b.jsxs)(O.a,{className:e.toolbar,children:[Object(b.jsx)(s.b,{to:"/",className:"navbar-brand",style:{color:"inherit"},children:Object(b.jsx)("small",{children:"\xa9 Copyright 2021, vjspranav"})})," "]})})]})}var K,Q=c(48),W=c(70),X=Object(Q.b)(K||(K=Object(W.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),Y={body:"#FFF",text:"#363537",toggleBorder:"#FFF",background:"#363537"},Z={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"};var $=function(){var e=localStorage.getItem("theme"),t=Object(n.useState)(e||"light"),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(b.jsx)(Q.a,{theme:"light"===a?Y:Z,children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(X,{}),Object(b.jsx)("div",{className:"App",style:{},children:Object(b.jsxs)(s.a,{basename:"",children:[Object(b.jsx)("div",{children:Object(b.jsx)(M,{toggle:function(){r("light"===a?"dark":"light"),localStorage.setItem("theme","light"===a?"dark":"light")},curTheme:a,isEditing:!0})}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(d,{curTheme:a})}),Object(b.jsx)(l.a,{path:"/:id",children:Object(b.jsx)(d,{curTheme:a})})]}),Object(b.jsx)("div",{children:Object(b.jsx)(G,{curTheme:a})})]})})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,146)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root")),_()}},[[97,1,2]]]);
//# sourceMappingURL=main.2805a881.chunk.js.map