"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[101],{2101:function(e,n,t){t.r(n);var r=t(1413),s=t(2982),i=t(4165),c=t(5861),o=t(885),u=t(8870),a=t(890),l=t(9281),d=t(703),f=t(9836),h=t(6890),x=t(5855),p=t(3994),Z=t(3382),v=t(3239),j=t(1286),m=t(7247),b=t(2791),y=t(4839),g=t(9112),k=t(6819),C=t(5322),w=t(4163),K=t(184);n.default=function(){var e=(0,b.useContext)(w.U),n=(0,b.useState)(!1),t=(0,o.Z)(n,2),_=t[0],A=t[1],S=(0,b.useState)(),U=(0,o.Z)(S,2),D=U[0],R=U[1],z=(0,b.useState)(!1),E=(0,o.Z)(z,2),I=E[0],N=E[1],F=(0,b.useContext)(C.V),L=(0,b.useState)([]),M=(0,o.Z)(L,2),O=M[0],V=M[1],q=function(){var n=(0,c.Z)((0,i.Z)().mark((function n(t){var r,s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,N(!0),n.next=4,e.authAxios.patch("/users/admin/".concat(t));case 4:r=n.sent,s=r.data,R(s.message),A(!0),N(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),B=function(){var n=(0,c.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,N(!0),n.next=4,e.authAxios.delete("/users/".concat(t));case 4:R("User Deleted"),A(!0),N(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.useEffect)((function(){e.authAxios.get("/users").then((function(e){var n=e.data;V(n)})).catch((function(e){console.log(e)}));var n=F.pusher.subscribe("users");return n.bind("created",(function(n){V((function(e){return[].concat((0,s.Z)(e),[n])})),e.setRefreshKey(e.refreshKey=1)})),n.bind("updated",(function(n){V(O.map((function(e){return e._id===n._id?(0,r.Z)((0,r.Z)({},O),{},{updatedUser:n}):e}))),e.setRefreshKey(e.refreshKey=1)})),n.bind("deleted-user",(function(n){V(O.filter((function(e,t){return e._id!==n[t]._id}))),e.setRefreshKey(e.refreshKey+1)})),function(){n.unbind_all(),n.unsubscribe("users")}}),[e.refreshKey]),(0,K.jsxs)(K.Fragment,{children:[D&&(0,K.jsx)(g.j,{open:_,setOpen:A,successMessage:D}),(0,K.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",flexDirection:"column",gap:2},children:[(0,K.jsx)(a.Z,{variant:"h6",component:"h2",children:"List of All Users"}),(0,K.jsx)(l.Z,{component:d.Z,children:(0,K.jsxs)(f.Z,{children:[(0,K.jsx)(h.Z,{children:(0,K.jsx)(x.Z,{children:k.EA.map((function(e,n){return(0,K.jsx)(p.Z,{children:e.label},n)}))})}),(0,K.jsx)(Z.Z,{children:null===O||void 0===O?void 0:O.map((function(e,n){return(0,K.jsxs)(x.Z,{children:[(0,K.jsx)(p.Z,{children:null===e||void 0===e?void 0:e.role}),(0,K.jsx)(p.Z,{children:"".concat(null===e||void 0===e?void 0:e.firstName," ").concat(null===e||void 0===e?void 0:e.lastName)}),(0,K.jsx)(p.Z,{children:null===e||void 0===e?void 0:e.email}),(0,K.jsx)(p.Z,{children:" +63".concat(String(null===e||void 0===e?void 0:e.contact))}),(0,K.jsxs)(p.Z,{sx:{display:"flex",gap:2},children:["admin"!==(null===e||void 0===e?void 0:e.role)&&(0,K.jsx)(y.Z,{color:"info",disabled:!0===I,startIcon:!0===I?(0,K.jsx)(v.Z,{size:20,color:"primary"}):(0,K.jsx)(j.Z,{}),onClick:function(){q(null===e||void 0===e?void 0:e._id),N(!1)},children:"Change to Admin"}),(0,K.jsx)(y.Z,{color:"error",disabled:!0===I,startIcon:!0===I?(0,K.jsx)(v.Z,{size:20,color:"primary"}):(0,K.jsx)(m.Z,{}),onClick:function(){B(null===e||void 0===e?void 0:e._id)},children:"Delete"})]})]},n)}))})]})})]})]})}}}]);
//# sourceMappingURL=101.2b54ed0d.chunk.js.map