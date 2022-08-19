"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[98],{7084:function(e,t,n){var r=n(4165),i=n(5861),o=n(885),a=n(4395),s=n(1614),c=n(4663),u=n(890),d=n(8870),l=n(1889),h=n(9072),p=n(3400),x=n(3044),f=n(911),v=n(3786),Z=n(7608),m=n(5322),g=n(4163),j=n(2791),b=n(6871),k=n(184);t.Z=function(){var e=(0,b.s0)(),t=(0,j.useState)(null),n=(0,o.Z)(t,2),y=n[0],S=n[1],W=(0,j.useContext)(m.V),w=(0,j.useContext)(g.U),C=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.authAxios.get("/logout");case 3:W.logout(),e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return(0,k.jsx)("div",{children:(0,k.jsx)(a.Z,{position:"static",children:(0,k.jsx)(s.Z,{maxWidth:"lg",children:(0,k.jsxs)(c.Z,{disableGutters:!0,children:[(0,k.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{color:"inherit",textDecoration:"none",textTransform:"uppercase"},children:"mis helpdesk"}),(0,k.jsxs)(d.Z,{sx:{flexGrow:0,marginLeft:"auto",display:"flex",gap:2},children:[(0,k.jsxs)(l.ZP,{container:!0,direction:"column",alignItems:"flex-end",children:[(0,k.jsx)(l.ZP,{item:!0,children:(0,k.jsx)(u.Z,{variant:"subtitle1",children:"".concat(W.authState.userInfo.firstName," ").concat(W.authState.userInfo.lastName)})}),(0,k.jsx)(u.Z,{variant:"caption",children:W.authState.userInfo.role})]}),(0,k.jsx)(h.Z,{title:"Open settings",children:(0,k.jsx)(p.Z,{onClick:function(e){S(e.currentTarget)},sx:{p:0},children:(0,k.jsx)(x.Z,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),(0,k.jsx)(f.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(y),onClose:function(){S(null)},children:(0,k.jsxs)(v.Z,{onClick:C,children:[(0,k.jsx)(Z.Z,{}),"\xa0Logout"]})})]})]})})})})}},3098:function(e,t,n){n.r(t);var r=n(1413),i=n(2982),o=n(4165),a=n(5861),s=n(885),c=n(1614),u=n(8870),d=n(890),l=n(9281),h=n(703),p=n(9836),x=n(6890),f=n(5855),v=n(3994),Z=n(3382),m=n(1918),g=n(3239),j=n(2791),b=n(5322),k=n(4163),y=n(7084),S=n(6819),W=n(4839),w=n(9112),C=n(184);t.default=function(){var e=(0,j.useContext)(k.U),t=(0,j.useContext)(b.V),n=(0,j.useState)(!1),R=(0,s.Z)(n,2),G=R[0],q=R[1],M=(0,j.useState)(),T=(0,s.Z)(M,2),K=T[0],N=T[1],P=(0,j.useState)(!1),I=(0,s.Z)(P,2),L=I[0],_=I[1],A=(0,j.useState)([]),O=(0,s.Z)(A,2),z=O[0],D=O[1],E=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.authAxios.get("/user-requests").then((function(e){var t=e.data;D(t.requests)})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(n){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(!0),e.authAxios.delete("/request/".concat(n)).then((function(e){var t=e.data;N(t.message),q(!0),_(!1)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,j.useEffect)((function(){E();var n=t.pusher.subscribe("request");return n.bind("created",(function(t){D((function(e){return[].concat((0,i.Z)(e),[t])})),e.setRefreshKey(e.refreshKey=1)})),n.bind("updated",(function(t){D(null===z||void 0===z?void 0:z.map((function(e){return e._id===t._id?(0,r.Z)((0,r.Z)({},z),{},{updateReq:t}):e}))),e.setRefreshKey(e.refreshKey=1)})),n.bind("deleted-req",(function(t){D(z.filter((function(e,n){return e._id!==t[n]._id}))),e.setRefreshKey(e.refreshKey+1)})),function(){n.unbind_all(),n.unsubscribe("request")}}),[e.refreshKey]),(0,C.jsxs)(C.Fragment,{children:[K&&(0,C.jsx)(w.j,{open:G,setOpen:q,successMessage:K}),(0,C.jsx)(y.Z,{}),(0,C.jsx)(c.Z,{children:(0,C.jsxs)(u.Z,{sx:{marginTop:5},children:[(0,C.jsx)(d.Z,{variant:"h2",component:"h1",children:"My Requests"}),(0,C.jsx)(d.Z,{variant:"h6",component:"p",sx:{marginTop:2},children:"List of your pending and completed request"}),(0,C.jsx)(l.Z,{component:h.Z,children:(0,C.jsxs)(p.Z,{children:[(0,C.jsx)(x.Z,{children:(0,C.jsx)(f.Z,{children:S.WY.map((function(e,t){return(0,C.jsx)(v.Z,{children:e.label},t)}))})}),(0,C.jsx)(Z.Z,{children:z.map((function(e,t){var n=new Date(null===e||void 0===e?void 0:e.createdAt),r=n.getMonth()+1,i=n.getDate();return(0,C.jsxs)(f.Z,{children:[(0,C.jsx)(v.Z,{children:"".concat(r," - ").concat(i)}),(0,C.jsx)(v.Z,{children:null===e||void 0===e?void 0:e.ticketNo}),(0,C.jsx)(v.Z,{children:null===e||void 0===e?void 0:e.title}),(0,C.jsx)(v.Z,{children:null===e||void 0===e?void 0:e.reqType}),(0,C.jsx)(v.Z,{children:(0,C.jsxs)(u.Z,{sx:{display:"flex",gap:.5},children:[!1===(null===e||void 0===e?void 0:e.approved)&&!1===(null===e||void 0===e?void 0:e.rejected)&&(0,C.jsx)(m.Z,{label:"In Evaluation",color:"warning"}),!0===(null===e||void 0===e?void 0:e.approved)&&(0,C.jsx)(m.Z,{label:"Approved",color:"success"}),!0===(null===e||void 0===e?void 0:e.completed)&&(0,C.jsx)(m.Z,{label:"Completed",color:"success"}),!0===(null===e||void 0===e?void 0:e.pending)&&(0,C.jsx)(m.Z,{label:"Pending",color:"secondary"}),!0===(null===e||void 0===e?void 0:e.rejected)&&(0,C.jsx)(m.Z,{label:"Rejected",color:"error"})]})}),(0,C.jsx)(v.Z,{children:!(null!==e&&void 0!==e&&e.rejected)&&(0,C.jsx)(W.Z,{color:"error",onClick:function(){return U(null===e||void 0===e?void 0:e._id)},disabled:!0===L,startIcon:!0===L?(0,C.jsx)(g.Z,{size:20,color:"primary"}):null,children:"Cancel"})})]},t)}))})]})})]})})]})}},1614:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(4942),i=n(3366),o=n(7462),a=n(2791),s=n(8182),c=n(7312),u=n(1217),d=n(4419),l=n(6083),h=(0,n(4046).ZP)(),p=n(5080),x=n(184),f=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,p.Z)(),Z=h("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),m=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:v})},g=function(e,t){var n=e.classes,r=e.fixed,i=e.disableGutters,o=e.maxWidth,a={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),r&&"fixed",i&&"disableGutters"]};return(0,d.Z)(a,(function(e){return(0,u.Z)(t,e)}),n)};var j=n(4036),b=n(6934),k=n(1402),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?Z:t,c=e.useThemeProps,u=void 0===c?m:c,d=e.componentName,l=void 0===d?"MuiContainer":d,h=n((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,i=t.breakpoints.values[r];return 0!==i&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(i).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),p=a.forwardRef((function(e,t){var n=u(e),r=n.className,a=n.component,c=void 0===a?"div":a,d=n.disableGutters,p=void 0!==d&&d,v=n.fixed,Z=void 0!==v&&v,m=n.maxWidth,j=void 0===m?"lg":m,b=(0,i.Z)(n,f),k=(0,o.Z)({},n,{component:c,disableGutters:p,fixed:Z,maxWidth:j}),y=g(k,l);return(0,x.jsx)(h,(0,o.Z)({as:c,ownerState:k,className:(0,s.Z)(y.root,r),ref:t},b))}));return p}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,j.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),S=y}}]);
//# sourceMappingURL=98.376618e7.chunk.js.map