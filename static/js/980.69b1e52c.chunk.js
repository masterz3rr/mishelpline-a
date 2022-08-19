"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[980],{7084:function(e,r,t){var n=t(4165),i=t(5861),s=t(885),a=t(4395),o=t(1614),l=t(4663),u=t(890),c=t(8870),d=t(1889),p=t(9072),x=t(3400),h=t(3044),m=t(911),f=t(3786),Z=t(7608),j=t(5322),q=t(4163),v=t(2791),g=t(6871),y=t(184);r.Z=function(){var e=(0,g.s0)(),r=(0,v.useState)(null),t=(0,s.Z)(r,2),w=t[0],b=t[1],C=(0,v.useContext)(j.V),_=(0,v.useContext)(q.U),k=function(){var r=(0,i.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,_.authAxios.get("/logout");case 3:C.logout(),e.push("/"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(null===r.t0||void 0===r.t0||null===(t=r.t0.response)||void 0===t?void 0:t.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return(0,y.jsx)("div",{children:(0,y.jsx)(a.Z,{position:"static",children:(0,y.jsx)(o.Z,{maxWidth:"lg",children:(0,y.jsxs)(l.Z,{disableGutters:!0,children:[(0,y.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{color:"inherit",textDecoration:"none",textTransform:"uppercase"},children:"mis helpdesk"}),(0,y.jsxs)(c.Z,{sx:{flexGrow:0,marginLeft:"auto",display:"flex",gap:2},children:[(0,y.jsxs)(d.ZP,{container:!0,direction:"column",alignItems:"flex-end",children:[(0,y.jsx)(d.ZP,{item:!0,children:(0,y.jsx)(u.Z,{variant:"subtitle1",children:"".concat(C.authState.userInfo.firstName," ").concat(C.authState.userInfo.lastName)})}),(0,y.jsx)(u.Z,{variant:"caption",children:C.authState.userInfo.role})]}),(0,y.jsx)(p.Z,{title:"Open settings",children:(0,y.jsx)(x.Z,{onClick:function(e){b(e.currentTarget)},sx:{p:0},children:(0,y.jsx)(h.Z,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),(0,y.jsx)(m.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:w,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(w),onClose:function(){b(null)},children:(0,y.jsxs)(f.Z,{onClick:k,children:[(0,y.jsx)(Z.Z,{}),"\xa0Logout"]})})]})]})})})})}},5178:function(e,r,t){var n=t(1413),i=t(885),s=t(5987),a=t(8550),o=t(7071),l=t(5705),u=t(184),c=["type","autoComplete","label"];r.Z=function(e){var r=e.type,t=e.autoComplete,d=e.label,p=(0,s.Z)(e,c),x=(0,l.U$)(p.name),h=(0,i.Z)(x,2),m=h[0],f=h[1],Z=f.error&&f.touched?f.error:"";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,(0,n.Z)((0,n.Z)({name:m.name},m),{},{label:d,variant:"outlined",error:!!Z,autoComplete:t,type:r,onChange:function(e){m.onChange(p.name)(e.target.value)}},p)),(0,u.jsx)(o.Z,{error:!0,children:Z})]})}},7290:function(e,r,t){var n=t(3400),i=t(5289),s=t(9157),a=t(5661),o=t(9823),l=t(9276),u=t(184);r.Z=function(e){var r=e.title,t=e.children,c=e.openPopup,d=e.handleClose,p=e.inputEl;return(0,u.jsxs)(i.Z,{open:c,onClose:function(e,r){"backdropClick"!==r&&"escapeKeyDown"!==r&&d()},fullWidth:!0,ref:p,children:[(0,u.jsx)(a.Z,{children:(0,u.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r,(0,u.jsx)(n.Z,{"aria-label":"close",onClick:d,sx:{color:function(e){return e.palette.grey[500]}},children:(0,u.jsx)(o.Z,{})})]})}),(0,u.jsx)(s.Z,{children:t})]})}},8980:function(e,r,t){t.r(r),t.d(r,{default:function(){return K}});var n=t(4165),i=t(5861),s=t(885),a=t(1614),o=t(8870),l=t(890),u=t(703),c=t(3044),d=t(5523),p=t(4479),x=t(8096),h=t(6151),m=t(9658),f=t(3239),Z=t(2793),j=t(8179),q=t(1776),v=t(983),g=t(2898),y=t(5178),w=t(5705),b=t(6871),C=t(3504),_=t(7084),k=t(1413),T=t(5987),S=t(765),P=t(2791),I=t(184),N=["field","form","name","options","children"],R=function(e){return e.map((function(e){return(0,I.jsx)(d.Z,{value:e,control:(0,I.jsx)(p.Z,{}),label:e},e)}))},M=function(e){var r=e.field,t=e.form,n=t.touched,i=t.errors,s=e.name,a=e.options,o=e.children,l=(0,T.Z)(e,N),u=s||r.name;return(0,I.jsxs)(P.Fragment,{children:[(0,I.jsx)(S.Z,(0,k.Z)((0,k.Z)((0,k.Z)({},r),l),{},{name:u,children:a?R(a):o})),n[u]&&i[u]&&(0,I.jsx)("span",{style:{color:"red",fontFamily:"sans-serif"},children:i[u]})]})},A=t(4163),D=t(3753),z=t(7290),F=t(9112),O=function(e){var r=e.ticketNo,t=e.logo,a=e.reqType,u=e.handleClose,c=e.id,d=(0,b.s0)(),p=(0,P.useContext)(A.U),x=(0,P.useState)(!1),m=(0,s.Z)(x,2),Z=m[0],j=m[1],q=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={ticketNo:r},j(!0),e.next=5,p.authAxios.patch("/request/".concat(c),t);case 5:j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,I.jsxs)(o.Z,{children:[(0,I.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column"},children:t}),(0,I.jsx)(l.Z,{variant:"h6",sx:{textAlign:"center",textTransform:"uppercase"},children:"your request is on the way"}),(0,I.jsxs)(l.Z,{variant:"subtitle2",sx:{textAlign:"center",textTransform:"uppercase"},children:["you have requested an assistance for ",a,", your ticket no. is"]}),(0,I.jsx)(l.Z,{variant:"h3",sx:{textAlign:"center",textTransform:"uppercase"},children:r}),(0,I.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column"},children:(0,I.jsx)(h.Z,{variant:"contained",color:"success",disabled:!0===Z,startIcon:!0===Z?(0,I.jsx)(f.Z,{size:20,color:"primary"}):null,onClick:function(){if(q(),!Z)return d("/request",{replace:!0}),u()},children:"Continue"})})]})},E=t(4839),W=["backup","recovery","website content","social media content"],U=["installation","maintenance"],H=["setup","maintenance"],L=["setup","configure","repair","maintenance"],K=function(){var e=(0,b.UO)().type,r=(0,P.useState)(!1),t=(0,s.Z)(r,2),k=t[0],T=t[1],S=(0,P.useState)(""),N=(0,s.Z)(S,2),R=N[0],K=N[1],$=(0,P.useState)(""),B=(0,s.Z)($,2),G=B[0],V=B[1],J=(0,P.useState)(""),Q=(0,s.Z)(J,2),X=Q[0],Y=Q[1],ee=(0,P.useState)(!1),re=(0,s.Z)(ee,2),te=re[0],ne=re[1],ie=(0,P.useState)(!1),se=(0,s.Z)(ie,2),ae=se[0],oe=se[1],le=(0,P.useState)(),ue=(0,s.Z)(le,2),ce=ue[0],de=ue[1],pe=(0,P.useState)(),xe=(0,s.Z)(pe,2),he=xe[0],me=xe[1],fe=(0,P.useContext)(A.U),Ze=(0,P.useState)(!1),je=(0,s.Z)(Ze,2),qe=je[0],ve=je[1],ge=function(){T(!1)},ye=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r,t){var i,s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ve(!0),e.next=4,fe.authAxios.post("/request",r);case 4:i=e.sent,s=i.data,de(s.message),K(s.ticketNo),V(s.reqType),Y(s._id),ne(!0),me(""),t(!0),ve(!1),null!==s&&void 0!==s&&s.ticketNo&&T(!0),e.next=24;break;case 17:e.prev=17,e.t0=e.catch(0),a=e.t0.response.data,me(a.message),oe(!0),de(""),ve(!1);case 24:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(r,t){return e.apply(this,arguments)}}();return(0,I.jsxs)(I.Fragment,{children:[ce&&(0,I.jsx)(F.j,{open:te,setOpen:ne,successMessage:ce}),he&&(0,I.jsx)(F.A,{open:ae,setOpen:oe,errorMessage:he}),(0,I.jsx)(_.Z,{}),(0,I.jsx)(a.Z,{sx:{marginBottom:5},children:(0,I.jsx)(w.J9,{initialValues:{title:e,reqType:"",description:""},validationSchema:D.HP,onSubmit:function(e,r){var t=r.resetForm;ye(e,t)},children:function(r){return(0,I.jsx)(w.l0,{children:(0,I.jsxs)(o.Z,{sx:{marginTop:5},children:[(0,I.jsx)(l.Z,{variant:"h6",component:"p",sx:{marginTop:2},children:"You are requesting for"}),(0,I.jsxs)(u.Z,{sx:{marginTop:3,p:3,display:"flex",alignItems:"center",gap:2,justifyContent:"space-between"},elevation:8,children:[(0,I.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:2},children:[(0,I.jsxs)(c.Z,{sx:{width:60,height:60,backgroundColor:"transparent",border:1,borderColor:"#192a56",color:"#192a56"},children:["data"===e&&(0,I.jsx)(q.Z,{sx:{fontSize:40}}),"software"===e&&(0,I.jsx)(j.Z,{sx:{fontSize:40}}),"hardware"===e&&(0,I.jsx)(Z.Z,{sx:{fontSize:40}}),"network"===e&&(0,I.jsx)(v.Z,{sx:{fontSize:40}}),"others"===e&&(0,I.jsx)(g.Z,{sx:{fontSize:40}})]}),(0,I.jsx)(l.Z,{variant:"h6",component:"p",children:e})]}),(0,I.jsx)(o.Z,{children:(0,I.jsx)(C.rU,{to:"/home",style:{color:"inherit",textDecoration:"none"},children:(0,I.jsx)(E.Z,{color:"secondary",variant:"contained",children:"Change Request"})})})]}),(0,I.jsxs)(a.Z,{sx:{marginTop:4},children:["others"!==e&&(0,I.jsx)(w.gN,{name:"reqType",children:function(r){var t=r.field,n=r.form;r.meta;return(0,I.jsxs)(M,{form:n,field:t,children:["data"===e&&W.map((function(e){return(0,I.jsx)(d.Z,{value:e,control:(0,I.jsx)(p.Z,{}),label:e},e)})),"hardware"===e&&H.map((function(e){return(0,I.jsx)(d.Z,{value:e,control:(0,I.jsx)(p.Z,{}),label:e},e)})),"software"===e&&U.map((function(e){return(0,I.jsx)(d.Z,{value:e,control:(0,I.jsx)(p.Z,{}),label:e},e)})),"network"===e&&L.map((function(e){return(0,I.jsx)(d.Z,{value:e,control:(0,I.jsx)(p.Z,{}),label:e},e)}))]})}}),"others"===e&&(0,I.jsx)(x.Z,{fullWidth:!0,children:(0,I.jsx)(y.Z,{margin:"dense",required:!0,fullWidth:!0,id:"firstName",label:"Please specify...",name:"reqType",autoComplete:"off",type:"text",onKeyPress:function(e){e.key.replace(/^[a-zA-Z\s]*$/,"")&&e.preventDefault()}})})]}),"social media content"===r.values.reqType&&(0,I.jsxs)(o.Z,{children:[(0,I.jsx)(l.Z,{variant:"subtitle1",component:"p",sx:{marginTop:2},children:"Content Information"}),(0,I.jsx)(o.Z,{sx:{marginTop:2},children:(0,I.jsx)(h.Z,{variant:"contained",children:(0,I.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://bit.ly/MISRequestForm",style:{color:"inherit",textDecoration:"none"},children:"Download Info Request Form"})})}),(0,I.jsx)(m.Z,{severity:"info",sx:{marginTop:2},children:(0,I.jsx)(l.Z,{variant:"subtitle2",component:"p",children:"Kindly donwload this form for posting and have it signed by the person/s involved/mentioned in the signatures. This form is required for the Approval of the Request."})})]}),(0,I.jsx)(l.Z,{variant:"subtitle1",component:"p",sx:{marginTop:2},children:"Issue Description"}),(0,I.jsx)(y.Z,{multiline:!0,fullWidth:!0,rows:5,sx:{marginTop:1.5},name:"description",onKeyPress:function(e){e.key.replace(/^[a-zA-Z\s]*$/,"")&&e.preventDefault()}}),(0,I.jsx)(o.Z,{sx:{marginTop:5},children:(0,I.jsx)(E.Z,{variant:"contained",type:"submit",disabled:!0===qe,startIcon:!0===qe?(0,I.jsx)(f.Z,{size:20,color:"primary"}):null,children:"Send Request"})})]})})}})}),(0,I.jsx)(z.Z,{openPopup:k,handleClose:ge,children:(0,I.jsx)(O,{handleClose:ge,ticketNo:R,reqType:G,id:X})})]})}},3753:function(e,r,t){t.d(r,{AX:function(){return a},EF:function(){return c},HP:function(){return l},M4:function(){return o},Ph:function(){return s},WR:function(){return u},ZQ:function(){return d},dm:function(){return i}});var n=t(4929),i=n.Ry().shape({email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().required("Password is required")}),s=n.Ry().shape({role:n.Z_().required("Type is required"),firstName:n.Z_().required("First name is required"),lastName:n.Z_().required("Last name is required"),contact:n.Z_().matches(/^(9)/,"Must start with 9").max(10,"Must be 10 digits").required("Contact No. is required"),email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().required("Password is required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match").required("Confirm your password")}),a=n.Ry().shape({role:n.Z_().required("Type is required"),firstName:n.Z_().required("First name is required"),lastName:n.Z_().required("Last name is required"),email:n.Z_().email("Invalid email").required("Email is required"),contact:n.Z_().matches(/^(9)/,"Must start with 9").max(10,"Must be 10 digits").required("Contact No. is required"),department:n.Z_().required("Department is required").min(5,"Must be at least 5 characters"),office:n.Z_().min(5,"Must be at least 5 characters"),password:n.Z_().required("Password is required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match").required("Confirm your password")}),o=n.Ry().shape({role:n.Z_().required("Type is required"),firstName:n.Z_().required("First name is required"),lastName:n.Z_().required("Last name is required"),contact:n.Z_().matches(/^(9)/,"Must start with 9").max(10,"Must be 10 digits").required("Contact No. is required"),email:n.Z_().email("Invalid email").required("Email is required"),office:n.Z_().min(5,"Must be at least 5 characters").required("Office name is required"),password:n.Z_().required("Password is required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match").required("Confirm your password")}),l=n.Ry().shape({title:n.Z_().required("Title is required"),reqType:n.Z_().required("Type is required"),description:n.Z_().required("Description is required")}),u=n.Ry().shape({type:n.Z_().required("Title is required"),members:n.Z_().required("A new member is required")}),c=n.Ry().shape({personel:n.Z_().required("Personel is required")}),d=n.Ry().shape({reason:n.Z_().required("Personel is required")})}}]);
//# sourceMappingURL=980.69b1e52c.chunk.js.map