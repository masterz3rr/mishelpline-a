"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[104],{8104:function(e,n,t){t.r(n);var i=t(1413),r=t(2982),c=t(4165),s=t(5861),l=t(885),o=t(8870),u=t(890),d=t(9281),a=t(703),f=t(9836),h=t(6890),v=t(5855),p=t(3994),x=t(3382),Z=t(2791),j=t(6819),b=t(5322),m=t(4163),y=t(184);n.default=function(){var e=(0,Z.useContext)(m.U),n=(0,Z.useContext)(b.V),t=(0,Z.useState)([]),g=(0,l.Z)(t,2),q=g[0],K=g[1],k=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.authAxios.get("/requests/pending").then((function(e){var n=e.data;K(n.requests)})).catch((function(e){console.log(e)}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,Z.useEffect)((function(){k();var t=n.pusher.subscribe("request");return t.bind("created",(function(n){K((function(e){return[].concat((0,r.Z)(e),[n])})),e.setRefreshKey(e.refreshKey=1)})),t.bind("updated",(function(n){K(q.map((function(e){return e._id===n._id?(0,i.Z)((0,i.Z)({},q),{},{updateReq:n}):e}))),e.setRefreshKey(e.refreshKey=1)})),t.bind("deleted-req",(function(n){K(q.filter((function(e,t){return e._id!==n[t]._id}))),e.setRefreshKey(e.refreshKey+1)})),function(){t.unbind_all(),t.unsubscribe("request")}}),[e.refreshKey]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",flexDirection:"column",gap:2},children:[(0,y.jsx)(u.Z,{variant:"h6",component:"h2",children:"List of All Pending"}),(0,y.jsx)(d.Z,{component:a.Z,children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(h.Z,{children:(0,y.jsx)(v.Z,{children:j.RM.map((function(e,n){return(0,y.jsx)(p.Z,{children:e.label},n)}))})}),(0,y.jsx)(x.Z,{children:null===q||void 0===q?void 0:q.map((function(e,n){var t,i,r,c,s=new Date(null===e||void 0===e?void 0:e.createdAt),l=s.getMonth()+1,o=s.getDate();return(0,y.jsxs)(v.Z,{children:[(0,y.jsx)(p.Z,{children:"".concat(l," - ").concat(o)}),(0,y.jsx)(p.Z,{children:null===e||void 0===e?void 0:e.ticketNo}),(0,y.jsx)(p.Z,{children:"".concat(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.firstName," ").concat(null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.lastName)}),(0,y.jsx)(p.Z,{children:null===e||void 0===e?void 0:e.title}),(0,y.jsx)(p.Z,{children:null===e||void 0===e?void 0:e.reqType}),(0,y.jsx)(p.Z,{children:"".concat(null===e||void 0===e||null===(r=e.personel)||void 0===r?void 0:r.firstName," ").concat(null===e||void 0===e||null===(c=e.personel)||void 0===c?void 0:c.lastName)})]},n)}))})]})})]})})}}}]);
//# sourceMappingURL=104.6eb9b56c.chunk.js.map