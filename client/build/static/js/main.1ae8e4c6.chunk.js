(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,a){e.exports=a(146)},129:function(e,t,a){},130:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),l=(a(129),a(130),a(204)),c=a(114),s=a(79),m=a(205),u=a(9),d=a(10),p=a(12),h=a(11),g=a(16),f=a(4),E=a(182),b=a(32),v=a(176),y=a(180),j=a(181),x=a(8),C=a(58),O=a.n(C),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{className:e.gridList,cols:3},this.props.media.map((function(t,a){return r.a.createElement(y.a,{key:a,className:e.tile},r.a.createElement(x.b,{to:"/media/"+t._id},r.a.createElement(O.a,{url:"/api/v1/media/video/"+t._id,width:"100%",height:"inherit",style:{maxHeight:"100%"}})),r.a.createElement(j.a,{className:e.tileBar,title:r.a.createElement(x.b,{to:"/media/"+t._id,className:e.tileTitle}," ",t.title," "),subtitle:r.a.createElement("span",null,r.a.createElement("span",null,t.views," views"),r.a.createElement("span",{className:e.tileGenre},r.a.createElement("em",null,t.genre)))}))}))))}}]),a}(n.Component),w=Object(f.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",background:e.palette.background.paper,textAlign:"left",padding:"8px 16px"},gridList:{width:"100%",minHeight:180,padding:"0px 0 10px"},title:{padding:"".concat(3*e.spacing.unit,"px ").concat(2.5*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),color:e.palette.openTitle,width:"100%"},tile:{textAlign:"center",maxHeight:"100%"},tileBar:{backgroundColor:"rgba(0, 0, 0, 0.72)",textAlign:"left",height:"55px"},tileTitle:{fontSize:"1.1em",marginBottom:"5px",color:"rgb(193, 173, 144)",display:"block"},tileGenre:{float:"right",color:"rgb(193, 182, 164)",marginRight:"8px"}}}))(S),k=a(27),N=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={media:[]},e.componentDidMount=function(){Object(k.listPopular)().then((function(t){t.error?console.log(t.error):e.setState({media:t})}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(E.a,{className:e.card},r.a.createElement(b.a,{type:"headline",component:"h2",className:e.title},"Popular Videos"),r.a.createElement(w,{media:this.state.media}))}}]),a}(n.Component),T=Object(f.a)((function(e){return{card:{margin:"".concat(5*e.spacing.unit,"px 30px")},title:{padding:"".concat(3*e.spacing.unit,"px ").concat(2.5*e.spacing.unit,"px 0px"),color:e.palette.text.secondary,fontSize:"1em"},media:{minHeight:330}}}))(N),A=a(118),I=a(183),M=a(184),D=a(185),F=a(186),B=a(187),P=a(209),_=a(188),R=a(110),U=a.n(R),z=a(75),L=a.n(z),G=a(31),W=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e.componentDidMount=function(){Object(G.list)().then((function(t){t.error?console.log(t.error):e.setState({users:t})}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(A.a,{className:e.root,elevation:4},r.a.createElement(b.a,{type:"title",className:e.title},"All Users"),r.a.createElement(I.a,{dense:!0},this.state.users.map((function(e,t){return r.a.createElement(x.b,{to:"/user/"+e._id,key:t},r.a.createElement(M.a,{button:"button"},r.a.createElement(D.a,null,r.a.createElement(P.a,null,r.a.createElement(L.a,null))),r.a.createElement(F.a,{primary:e.name}),r.a.createElement(B.a,null,r.a.createElement(_.a,null,r.a.createElement(U.a,null)))))}))))}}]),a}(n.Component),J=Object(f.a)((function(e){return{root:e.mixins.gutters({padding:e.spacing.unit,margin:e.spacing(5)}),title:{margin:"".concat(e.spacing(4),"px 0 ").concat(e.spacing(2),"px"),color:e.palette.openTitle}}}))(W),H=a(42),q=a(189),V=a(191),$=a(192),K=a(206),Q=a(190),X=a(208),Y=a(193),Z=a(194),ee=a(195),te=a(196),ae=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",password:"",email:"",open:!1,error:""},e.handleChange=function(t){return function(a){e.setState(Object(H.a)({},t,a.target.value))}},e.clickSubmit=function(){var t={name:e.state.name||void 0,email:e.state.email||void 0,password:e.state.password||void 0};Object(G.create)(t).then((function(t){t.error?e.setState({error:t.error}):e.setState({error:"",open:!0})}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(E.a,{className:e.card},r.a.createElement(q.a,null,r.a.createElement(b.a,{type:"headline",component:"h2",className:e.title},"Sign Up"),r.a.createElement(K.a,{id:"name",label:"Name",className:e.textField,value:this.state.name,onChange:this.handleChange("name"),margin:"normal"})," ",r.a.createElement("br",null),r.a.createElement(K.a,{id:"email",type:"email",label:"Email",className:e.textField,value:this.state.email,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"password",type:"password",label:"Password",className:e.textField,value:this.state.password,onChange:this.handleChange("password"),margin:"normal"}),r.a.createElement("br",null),this.state.error&&r.a.createElement(b.a,{component:"p",color:"error"},r.a.createElement(Q.a,{color:"error",className:e.error},"error"),this.state.error)),r.a.createElement(V.a,null,r.a.createElement($.a,{color:"primary",raised:"raised",onClick:this.clickSubmit,className:e.submit},"Submit"))),r.a.createElement(X.a,{open:this.state.open,disableBackdropClick:!0},r.a.createElement(Y.a,null,"New Account"),r.a.createElement(Z.a,null,r.a.createElement(ee.a,null,"New account successfully created.")),r.a.createElement(te.a,null,r.a.createElement(x.b,{to:"/signin"},r.a.createElement($.a,{color:"primary",autoFocus:"autoFocus",variant:"raised"},"Sign In")))))}}]),a}(n.Component),ne=Object(f.a)((function(e){return{card:{maxWidth:600,margin:"auto",textAlign:"center",marginTop:5*e.spacing.unit,paddingBottom:2*e.spacing.unit},error:{verticalAlign:"middle"},title:{marginTop:2*e.spacing.unit,color:e.palette.openTitle},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300},submit:{margin:"auto",marginBottom:2*e.spacing.unit}}}))(ae),re=function(e){return fetch("/api/v1/auth/signin/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},ie={isAuthenticated:function(){return"undefined"!=typeof window&&(!!sessionStorage.getItem("jwt")&&JSON.parse(sessionStorage.getItem("jwt")))},authenticate:function(e,t){"undefined"!==typeof window&&sessionStorage.setItem("jwt",JSON.stringify(e)),t()},signout:function(e){"undefined"!==typeof window&&sessionStorage.removeItem("jwt"),e(),fetch("/auth/signout/",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){document.cookie="t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}))}},oe=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",error:"",redirectToReferrer:!1},e.clickSubmit=function(){var t={email:e.state.email||void 0,password:e.state.password||void 0};re(t).then((function(t){t.error?e.setState({error:t.error}):ie.authenticate(t,(function(){e.setState({redirectToReferrer:!0})}))}))},e.handleChange=function(t){return function(a){e.setState(Object(H.a)({},t,a.target.value))}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?r.a.createElement(g.a,{to:t}):r.a.createElement(E.a,{className:e.card},r.a.createElement(q.a,null,r.a.createElement(b.a,{type:"headline",component:"h2",className:e.title},"Sign In"),r.a.createElement(K.a,{id:"email",type:"email",label:"Email",className:e.textField,value:this.state.email,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"password",type:"password",label:"Password",className:e.textField,value:this.state.password,onChange:this.handleChange("password"),margin:"normal"}),r.a.createElement("br",null)," ",this.state.error&&r.a.createElement(b.a,{component:"p",color:"error"},r.a.createElement(Q.a,{color:"error",className:e.error},"error"),this.state.error)),r.a.createElement(V.a,null,r.a.createElement($.a,{color:"primary",variant:"raised",onClick:this.clickSubmit,className:e.submit},"Submit")))}}]),a}(n.Component),le=Object(f.a)((function(e){return{card:{maxWidth:600,margin:"auto",textAlign:"center",marginTop:5*e.spacing.unit,paddingBottom:2*e.spacing.unit},error:{verticalAlign:"middle"},title:{marginTop:2*e.spacing.unit,color:e.palette.openTitle},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300},submit:{margin:"auto",marginBottom:2*e.spacing.unit}}}))(oe),ce=a(78),se=a.n(ce),me=a(197),ue=a(77),de=a.n(ue),pe=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1,open:!1},e.clickButton=function(){e.setState({open:!0})},e.deleteAccount=function(){var t=ie.isAuthenticated();Object(G.remove)({userId:e.props.userId},{t:t.token}).then((function(t){t.error?console.log(t.error):(ie.signout((function(){return console.log("deleted")})),e.setState({redirect:!0}))}))},e.handleRequestClose=function(){e.setState({open:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(g.a,{to:"/"}):r.a.createElement("span",null,r.a.createElement(_.a,{"aria-label":"Delete",onClick:this.clickButton,color:"secondary"},r.a.createElement(de.a,null)),r.a.createElement(X.a,{open:this.state.open,onClose:this.handleRequestClose},r.a.createElement(Y.a,null,"Delete Account"),r.a.createElement(Z.a,null,r.a.createElement(ee.a,null,"Confirm to delete your account.")),r.a.createElement(te.a,null,r.a.createElement($.a,{onClick:this.handleRequestClose,color:"primary"},"Cancel"),r.a.createElement($.a,{onClick:this.deleteAccount,color:"secondary",autoFocus:"autoFocus"},"Confirm"))))}}]),a}(n.Component),he=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n,r=e.match;return Object(u.a)(this,a),(n=t.call(this)).init=function(e){var t=ie.isAuthenticated();Object(G.read)({userId:e},{t:t.token}).then((function(e){e.error?n.setState({redirectToSignin:!0}):n.setState({user:e})}))},n.componentWillReceiveProps=function(e){n.init(e.match.params.userId)},n.componentDidMount=function(){n.init(n.match.params.userId)},n.state={user:"",redirectToSignin:!1},n.match=r,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToSignin?r.a.createElement(g.a,{to:"/signin"}):r.a.createElement(A.a,{className:e.root,elevation:4},r.a.createElement(b.a,{type:"title",className:e.title},"Profile"),r.a.createElement(I.a,{dense:!0},r.a.createElement(M.a,null,r.a.createElement(D.a,null,r.a.createElement(P.a,null,r.a.createElement(L.a,null))),r.a.createElement(F.a,{primary:this.state.user.name,secondary:this.state.user.email})," ",ie.isAuthenticated().user&&ie.isAuthenticated().user._id===this.state.user._id&&r.a.createElement(B.a,null,r.a.createElement(x.b,{to:"/user/edit/"+this.state.user._id},r.a.createElement(_.a,{"aria-label":"Edit",color:"primary"},r.a.createElement(se.a,null))),r.a.createElement(pe,{userId:this.state.user._id}))),r.a.createElement(me.a,null),r.a.createElement(M.a,null,r.a.createElement(F.a,{primary:"Joined: "+new Date(this.state.user.created).toDateString()}))))}}]),a}(n.Component),ge=Object(f.a)((function(e){return{root:e.mixins.gutters({maxWidth:600,margin:"auto",padding:e.spacing(3),marginTop:e.spacing(5)}),title:{margin:"".concat(e.spacing(3),"px 0 ").concat(e.spacing(2),"px"),color:e.palette.protectedTitle}}}))(he),fe=a(198),Ee=a(199),be=a(112),ve=a.n(be),ye=a(111),je=a.n(ye),xe=function(e,t){return e.location.pathname===t?{color:"#f99085"}:{color:"#efdcd5"}},Ce=Object(g.g)((function(e){var t=e.history;return r.a.createElement(fe.a,{position:"static"},r.a.createElement(Ee.a,null,r.a.createElement(b.a,{type:"title",color:"inherit"},"MERN Social"),r.a.createElement(x.b,{to:"/"},r.a.createElement(_.a,{"aria-label":"Home",style:xe(t,"/")},r.a.createElement(je.a,null))),r.a.createElement(x.b,{to:"/users"},r.a.createElement($.a,{style:xe(t,"/users")},"Users")),!ie.isAuthenticated()&&r.a.createElement("span",null,r.a.createElement(x.b,{to:"/signup"},r.a.createElement($.a,{style:xe(t,"/signup")},"Sign up")),r.a.createElement(x.b,{to:"/signin"},r.a.createElement($.a,{style:xe(t,"/signin")},"Sign In"))),ie.isAuthenticated()&&r.a.createElement("span",null,r.a.createElement(x.b,{to:"/media/new"},r.a.createElement($.a,{style:xe(t,"/media/new")},r.a.createElement(ve.a,{style:{marginRight:"8px"}})," Add Media")),r.a.createElement(x.b,{to:"/user/"+ie.isAuthenticated().user._id},r.a.createElement($.a,{style:xe(t,"/user/"+ie.isAuthenticated().user._id)},"My Profile")),r.a.createElement($.a,{color:"inherit",onClick:function(){ie.signout((function(){return t.push("/")}))}},"Sign out"))))})),Oe=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n,r=e.match;return Object(u.a)(this,a),(n=t.call(this)).componentDidMount=function(){var e=ie.isAuthenticated();Object(G.read)({userId:n.match.params.userId},{t:e.token}).then((function(e){e.error?n.setState({error:e.error}):n.setState({name:e.name,email:e.email})}))},n.clickSubmit=function(){var e=ie.isAuthenticated(),t={name:n.state.name||void 0,email:n.state.email||void 0,password:n.state.password||void 0};Object(G.update)({userId:n.match.params.userId},{t:e.token},t).then((function(e){e.error?n.setState({error:e.error}):n.setState({userId:e._id,redirectToProfile:!0})}))},n.handleChange=function(e){return function(t){n.setState(Object(H.a)({},e,t.target.value))}},n.state={name:"",email:"",password:"",redirectToProfile:!1,error:""},n.match=r,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToProfile?r.a.createElement(g.a,{to:"/user/"+this.state.userId}):r.a.createElement(E.a,{className:e.card},r.a.createElement(q.a,null,r.a.createElement(b.a,{type:"headline",component:"h2",className:e.title},"Edit Profile"),r.a.createElement(K.a,{id:"name",label:"Name",className:e.textField,value:this.state.name,onChange:this.handleChange("name"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"email",type:"email",label:"Email",className:e.textField,value:this.state.email,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"password",type:"password",label:"Password",className:e.textField,value:this.state.password,onChange:this.handleChange("password"),margin:"normal"}),r.a.createElement("br",null)," ",this.state.error&&r.a.createElement(b.a,{component:"p",color:"error"},r.a.createElement(Q.a,{color:"error",className:e.error},"error"),this.state.error)),r.a.createElement(V.a,null,r.a.createElement($.a,{color:"primary",variant:"raised",onClick:this.clickSubmit,className:e.submit},"Submit")))}}]),a}(n.Component),Se=Object(f.a)((function(e){return{card:{maxWidth:600,margin:"auto",textAlign:"center",marginTop:5*e.spacing.unit,paddingBottom:2*e.spacing.unit},title:{margin:2*e.spacing.unit,color:e.palette.protectedTitle},error:{verticalAlign:"middle"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300},submit:{margin:"auto",marginBottom:2*e.spacing.unit}}}))(Oe),we=a(115),ke=["component"],Ne=function(e){var t=e.component,a=Object(we.a)(e,ke);return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return ie.isAuthenticated()?r.a.createElement(t,e):r.a.createElement(g.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},Te=a(113),Ae=a.n(Te),Ie=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:"",video:"",description:"",genre:"",redirect:!1,error:"",mediaId:""},e.componentDidMount=function(){e.mediaData=new FormData},e.clickSubmit=function(){var t=ie.isAuthenticated();Object(k.create)({userId:t.user._id},{t:t.token},e.mediaData).then((function(t){t.error?e.setState({error:t.error}):e.setState({redirect:!0,mediaId:t._id})}))},e.handleChange=function(t){return function(a){var n="video"===t?a.target.files[0]:a.target.value;e.mediaData.set(t,n),e.setState(Object(H.a)({},t,n))}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return this.state.redirect?r.a.createElement(g.a,{to:"/media/"+this.state.mediaId}):r.a.createElement(E.a,{className:e.card},r.a.createElement(q.a,null,r.a.createElement(b.a,{type:"headline",component:"h1",className:e.title},"New Video"),r.a.createElement("input",{accept:"video/*",onChange:this.handleChange("video"),className:e.input,id:"icon-button-file",type:"file"}),r.a.createElement("label",{htmlFor:"icon-button-file"},r.a.createElement($.a,{color:"secondary",variant:"raised",component:"span"},"Upload",r.a.createElement(Ae.a,null)))," ",r.a.createElement("span",{className:e.filename},this.state.video?this.state.video.name:""),r.a.createElement("br",null),r.a.createElement(K.a,{id:"title",label:"Title",className:e.textField,value:this.state.title,onChange:this.handleChange("title"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"multiline-flexible",label:"Description",multiline:!0,rows:"2",value:this.state.description,onChange:this.handleChange("description"),className:e.textField,margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"genre",label:"Genre",className:e.textField,value:this.state.genre,onChange:this.handleChange("genre"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement("br",null)," ",this.state.error&&r.a.createElement(b.a,{component:"p",color:"error"},r.a.createElement(Q.a,{color:"error",className:e.error},"error"),this.state.error)),r.a.createElement(V.a,null,r.a.createElement($.a,{color:"primary",variant:"raised",onClick:this.clickSubmit,className:e.submit},"Submit")))}}]),a}(n.Component),Me=Object(f.a)((function(e){return{card:{maxWidth:500,margin:"auto",textAlign:"center",marginTop:5*e.spacing.unit,paddingBottom:2*e.spacing.unit},title:{margin:2*e.spacing.unit,color:e.palette.protectedTitle,fontSize:"1em"},error:{verticalAlign:"middle"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300},submit:{margin:"auto",marginBottom:2*e.spacing.unit},input:{display:"none"},filename:{marginLeft:"10px"}}}))(Ie),De=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n,r=e.match;return Object(u.a)(this,a),(n=t.call(this)).componentDidMount=function(){Object(k.read)({mediaId:n.match.params.mediaId}).then((function(e){e.error?n.setState({error:e.error}):n.setState({media:e})}))},n.clickSubmit=function(){var e=ie.isAuthenticated();Object(k.update)({mediaId:n.state.media._id},{t:e.token},n.state.media).then((function(e){e.error?n.setState({error:e.error}):n.setState({error:"",redirect:!0,media:e})}))},n.handleChange=function(e){return function(t){var a=n.state.media;a[e]=t.target.value,n.setState({media:a})}},n.state={media:{title:"",description:"",genre:""},redirect:!1,error:""},n.match=r,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return this.state.redirect?r.a.createElement(g.a,{to:"/media/"+this.state.media._id}):r.a.createElement(E.a,{className:e.card},r.a.createElement(q.a,null,r.a.createElement(b.a,{type:"headline",component:"h1",className:e.title},"Edit Video Details"),r.a.createElement(K.a,{id:"title",label:"Title",className:e.textField,value:this.state.media.title,onChange:this.handleChange("title"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"multiline-flexible",label:"Description",multiline:!0,rows:"2",value:this.state.media.description,onChange:this.handleChange("description"),className:e.textField,margin:"normal"}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"genre",label:"Genre",className:e.textField,value:this.state.media.genre,onChange:this.handleChange("genre"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement("br",null)," ",this.state.error&&r.a.createElement(b.a,{component:"p",color:"error"},r.a.createElement(Q.a,{color:"error",className:e.error},"error"),this.state.error)),r.a.createElement(V.a,null,r.a.createElement($.a,{color:"primary",variant:"raised",onClick:this.clickSubmit,className:e.submit},"Submit")))}}]),a}(n.Component),Fe=Object(f.a)((function(e){return{card:{maxWidth:500,margin:"auto",textAlign:"center",marginTop:5*e.spacing.unit,paddingBottom:2*e.spacing.unit},title:{margin:2*e.spacing.unit,color:e.palette.protectedTitle,fontSize:"1em"},error:{verticalAlign:"middle"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300},submit:{margin:"auto",marginBottom:2*e.spacing.unit},input:{display:"none"},filename:{marginLeft:"10px"}}}))(De),Be=a(202),Pe=a(201),_e=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1,open:!1},e.clickButton=function(){e.setState({open:!0})},e.deleteMedia=function(){var t=ie.isAuthenticated();Object(k.remove)({mediaId:e.props.mediaId},{t:t.token}).then((function(t){t.error?console.log(t.error):e.setState({redirect:!0})}))},e.handleRequestClose=function(){e.setState({open:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(g.a,{to:"/"}):r.a.createElement("span",null,r.a.createElement(_.a,{"aria-label":"Delete",onClick:this.clickButton,color:"secondary"},r.a.createElement(de.a,null)),r.a.createElement(X.a,{open:this.state.open,onClose:this.handleRequestClose},r.a.createElement(Y.a,null,"Delete "+this.props.mediaTitle),r.a.createElement(Z.a,null,r.a.createElement(ee.a,null,"Confirm to delete ",this.props.mediaTitle," from your account.")),r.a.createElement(te.a,null,r.a.createElement($.a,{onClick:this.handleRequestClose,color:"primary"},"Cancel"),r.a.createElement($.a,{onClick:this.deleteMedia,variant:"raised",color:"secondary",autoFocus:"autoFocus"},"Confirm"))))}}]),a}(n.Component),Re=a(64),Ue=a.n(Re),ze=a(200),Le=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={playing:!0,volume:.8,muted:!1,played:0,loaded:0,duration:0,ended:!1,playbackRate:1,loop:!1,fullscreen:!1,videoError:!1},e.componentDidMount=function(){Ue.a.enabled&&Ue.a.on("change",(function(){var t=!!Ue.a.isFullscreen;e.setState({fullscreen:t})}))},e.setVolume=function(t){e.setState({volume:parseFloat(t.target.value)})},e.toggleMuted=function(){e.setState({muted:!e.state.muted})},e.playPause=function(){e.setState({playing:!e.state.playing})},e.onLoop=function(){e.setState({loop:!e.state.loop})},e.onProgress=function(t){e.state.seeking||e.setState({played:t.played,loaded:t.loaded})},e.onClickFullscreen=function(){Ue.a.request(Object(i.findDOMNode)(e.player))},e.onEnded=function(){e.state.loop?e.setState({playing:!0}):e.props.handleAutoplay((function(){e.setState({ended:!0,playing:!1})}))},e.onDuration=function(t){e.setState({duration:t})},e.onSeekMouseDown=function(t){e.setState({seeking:!0})},e.onSeekChange=function(t){e.setState({played:parseFloat(t.target.value),ended:parseFloat(t.target.value)>=1})},e.onSeekMouseUp=function(t){e.setState({seeking:!1}),e.player.seekTo(parseFloat(t.target.value))},e.ref=function(t){e.player=t},e.format=function(e){var t=new Date(1e3*e),a=t.getUTCHours(),n=t.getUTCMinutes(),r=("0"+t.getUTCSeconds()).slice(-2);return a?(n=("0"+t.getUTCMinutes()).slice(-2),"".concat(a,":").concat(n,":").concat(r)):"".concat(n,":").concat(r)},e.videoError=function(t){e.setState({videoError:!0})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.playing,n=t.ended,i=t.volume,o=t.muted,l=t.loop,c=t.played,s=t.loaded,m=t.duration,u=t.playbackRate,d=t.fullscreen,p=t.videoError;return r.a.createElement("div",null,r.a.createElement("div",{className:e.flex},p&&r.a.createElement("p",{className:e.videoError},"Video Error. Try again later."),r.a.createElement(O.a,{ref:this.ref,width:d?"100%":"inherit",height:d?"100%":"inherit",style:d?{position:"relative"}:{maxHeight:"500px"},config:{attributes:{style:{height:"100%",width:"100%"}}},url:this.props.srcUrl,playing:a,loop:l,playbackRate:u,volume:i,muted:o,onEnded:this.onEnded,onError:this.videoError,onProgress:this.onProgress,onDuration:this.onDuration}),r.a.createElement("br",null)),r.a.createElement("div",{className:e.controls},r.a.createElement(ze.a,{color:"primary",variant:"buffer",value:100*c,valueBuffer:100*s,style:{width:"100%"},classes:{colorPrimary:e.primaryColor,dashedColorPrimary:e.primaryDashed,dashed:e.dashed}}),r.a.createElement("input",{type:"range",min:0,max:1,value:c,step:"any",onMouseDown:this.onSeekMouseDown,onChange:this.onSeekChange,onMouseUp:this.onSeekMouseUp,className:e.rangeRoot}),r.a.createElement(_.a,{color:"primary",onClick:this.playPause},r.a.createElement(Q.a,null,a?"pause":n?"replay":"play_arrow")),r.a.createElement(_.a,{disabled:!this.props.nextUrl,color:"primary"},r.a.createElement(x.b,{to:this.props.nextUrl,style:{color:"inherit"}},r.a.createElement(Q.a,null,"skip_next"))),r.a.createElement(_.a,{color:"primary",onClick:this.toggleMuted},r.a.createElement(Q.a,null,(i>0&&!o?"volume_up":o&&"volume_off")||0===i&&"volume_mute")),r.a.createElement("input",{type:"range",min:0,max:1,step:"any",value:o?0:i,onChange:this.setVolume,style:{verticalAlign:"middle"}}),r.a.createElement(_.a,{color:l?"primary":"default",onClick:this.onLoop},r.a.createElement(Q.a,null,"loop")),r.a.createElement(_.a,{color:"primary",onClick:this.onClickFullscreen},r.a.createElement(Q.a,null,"fullscreen")),r.a.createElement("span",{style:{float:"right",padding:"10px",color:"#b83423"}},r.a.createElement("time",{dateTime:"P".concat(Math.round(m*c),"S")},this.format(m*c))," / ",r.a.createElement("time",{dateTime:"P".concat(Math.round(m),"S")},this.format(m)))))}}]),a}(n.Component),Ge=Object(f.a)((function(e){return{flex:{display:"flex"},primaryDashed:{background:"none",backgroundColor:e.palette.secondary.main},primaryColor:{backgroundColor:"#6969694f"},dashed:{animation:"none"},controls:{position:"relative",backgroundColor:"#ababab52"},rangeRoot:{position:"absolute",width:"100%",top:"-7px",zIndex:"3456","-webkit-appearance":"none",backgroundColor:"rgba(0,0,0,0)"},videoError:{width:"100%",textAlign:"center",color:e.palette.primary.light}}}))(Le),We=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.media._id?"/api/v1/media/video/".concat(this.props.media._id):null,t=this.props.nextUrl,a=this.props.classes;return r.a.createElement(E.a,{className:a.card},r.a.createElement(Pe.a,{className:a.header,title:this.props.media.title,action:r.a.createElement("span",{className:a.action},this.props.media.views+" views"),subheader:this.props.media.genre}),r.a.createElement(Ge,{srcUrl:e,nextUrl:t,handleAutoplay:this.props.handleAutoplay}),r.a.createElement(I.a,{dense:!0},r.a.createElement(M.a,null,r.a.createElement(D.a,null,r.a.createElement(P.a,{className:a.avatar},this.props.media.postedBy.name&&this.props.media.postedBy.name[0])),r.a.createElement(F.a,{primary:this.props.media.postedBy.name,secondary:"Published on "+new Date(this.props.media.created).toDateString()}),ie.isAuthenticated().user&&ie.isAuthenticated().user._id===this.props.media.postedBy._id&&r.a.createElement(B.a,null,r.a.createElement(x.b,{to:"/media/edit/"+this.props.media._id},r.a.createElement(_.a,{"aria-label":"Edit",color:"secondary"},r.a.createElement(se.a,null))),r.a.createElement(_e,{mediaId:this.props.media._id,mediaTitle:this.props.media.title}))),r.a.createElement(me.a,null),r.a.createElement(M.a,null,r.a.createElement(F.a,{primary:this.props.media.description}))))}}]),a}(n.Component),Je=Object(f.a)((function(e){return{card:{padding:"20px"},header:{padding:"0px 16px 16px 12px"},action:{margin:"24px 20px 0px 0px",display:"inline-block",fontSize:"1.15em",color:e.palette.secondary.dark},avatar:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.light}}}))(We),He=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(A.a,{className:e.root,elevation:4,style:{padding:"16px"}},r.a.createElement(b.a,{type:"title",className:e.title},"Up Next"),this.props.media.map((function(t,a){return r.a.createElement("span",{key:a},r.a.createElement(E.a,{className:e.card},r.a.createElement("div",{style:{marginRight:"5px",backgroundColor:"black"}},r.a.createElement(x.b,{to:"/media/"+t._id},r.a.createElement(O.a,{url:"/api/v1/media/video/"+t._id,width:"160px",height:"140px"}))),r.a.createElement("div",{className:e.details},r.a.createElement(q.a,{className:e.content},r.a.createElement(x.b,{to:"/media/"+t._id},r.a.createElement(b.a,{type:"title",component:"h3",className:e.mediaTitle,color:"primary"},t.title)),r.a.createElement(b.a,{type:"subheading",className:e.subheading},t.genre),r.a.createElement(b.a,{component:"p",className:e.date},new Date(t.created).toDateString())),r.a.createElement("div",{className:e.controls},r.a.createElement(b.a,{type:"subheading",component:"h3",className:e.views,color:"primary"}," ",t.views," views")))),r.a.createElement(me.a,null))})))}}]),a}(n.Component),qe=Object(f.a)((function(e){return{root:e.mixins.gutters({paddingBottom:24,backgroundColor:"#80808024"}),title:{margin:"".concat(3*e.spacing.unit,"px ").concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),color:e.palette.openTitle,fontSize:"1em"},card:{width:"100%",display:"inline-flex"},details:{display:"inline-block",width:"100%"},content:{flex:"1 0 auto",padding:"16px 8px 0px"},controls:{marginTop:"8px"},date:{color:"rgba(0, 0, 0, 0.4)"},mediaTitle:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"130px",fontSize:"1em",marginBottom:"5px"},subheading:{color:"rgba(88, 114, 128, 0.67)"},views:{display:"inline",lineHeight:"3",paddingLeft:"8px",color:e.palette.text.secondary}}}))(He),Ve=a(203),$e=a(210),Ke=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n,r=e.match;return Object(u.a)(this,a),(n=t.call(this)).loadMedia=function(e){Object(k.read)({mediaId:e}).then((function(e){e.error?n.setState({error:e.error}):(n.setState({media:e}),Object(k.listRelated)({mediaId:e._id}).then((function(e){e.error?console.log(e.error):n.setState({relatedMedia:e})})))}))},n.componentDidMount=function(){n.loadMedia(n.match.params.mediaId)},n.componentWillReceiveProps=function(e){n.loadMedia(e.match.params.mediaId)},n.handleChange=function(e){n.setState({autoPlay:e.target.checked})},n.handleAutoplay=function(e){var t=n.state.relatedMedia,a=t[0];if(!n.state.autoPlay||0===t.length)return e();t.length>1?(t.shift(),n.setState({media:a,relatedMedia:t})):Object(k.listRelated)({mediaId:a._id}).then((function(e){e.error?console.log(e.error):n.setState({media:a,relatedMedia:e})}))},n.state={media:{postedBy:{}},relatedMedia:[],autoPlay:!1},n.match=r,n}return Object(d.a)(a,[{key:"render",value:function(){this.props.data&&null!=this.props.data[0]&&(this.setState({media:this.props.data[0]}),this.setState({relatedMedia:[]}));var e=this.state.relatedMedia.length>0?"/media/".concat(this.state.relatedMedia[0]._id):"",t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(Be.a,{container:!0,spacing:24},r.a.createElement(Be.a,{item:!0,xs:8,sm:8},r.a.createElement(Je,{media:this.state.media,nextUrl:e,handleAutoplay:this.handleAutoplay})),this.state.relatedMedia.length>0&&r.a.createElement(Be.a,{item:!0,xs:4,sm:4},r.a.createElement(Ve.a,{className:t.toggle,control:r.a.createElement($e.a,{checked:this.state.autoPlay,onChange:this.handleChange,color:"primary"}),label:this.state.autoPlay?"Autoplay ON":"Autoplay OFF"}),r.a.createElement(qe,{media:this.state.relatedMedia}))))}}]),a}(n.Component),Qe=Object(f.a)((function(e){return{root:{flexGrow:1,margin:30},toggle:{float:"right",marginRight:"30px",marginTop:" 10px"}}}))(Ke),Xe=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n,r=e.data;return Object(u.a)(this,a),(n=t.call(this)).data=r,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ce,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:T}),r.a.createElement(g.b,{path:"/users",component:J}),r.a.createElement(g.b,{path:"/signup",component:ne}),r.a.createElement(g.b,{path:"/signin",component:le}),r.a.createElement(Ne,{path:"/user/edit/:userId",component:Se}),r.a.createElement(Ne,{path:"/media/new",component:Me}),r.a.createElement(Ne,{path:"/media/edit/:mediaId",component:Fe}),r.a.createElement(g.b,{path:"/user/:userId",component:ge}),r.a.createElement(g.b,{path:"/media/:mediaId",render:function(t){return r.a.createElement(Qe,Object.assign({},t,{data:e.data}))}}),r.a.createElement(g.b,{path:"/media/:mediaId",component:Qe})))}}]),a}(n.Component);var Ye=Object(c.a)({palette:{primary:{light:"#f05545",main:"#b71c1c",dark:"#7f0000",contrastText:"#fff"},secondary:{light:"#efdcd5",main:"#d7ccc8",dark:"#8c7b75",contrastText:"#424242"},openTitle:s.a[500],protectedTitle:m.a[300],type:"light"}}),Ze=function(){return r.a.createElement(x.a,null,r.a.createElement(l.a,{theme:Ye},r.a.createElement(Xe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t){t.create=function(e,t,a){return fetch("/api/v1/media/new/"+e.userId,{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer "+t.t},body:a}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},t.listPopular=function(e){return fetch("/api/v1/media/popular",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},t.listByUser=function(e){return fetch("/api/v1/media/by/"+e.userId,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},t.read=function(e){return fetch("/api/v1/media/"+e.mediaId,{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},t.update=function(e,t,a){return fetch("/api/v1/media/"+e.mediaId,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t.t},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},t.remove=function(e,t){return fetch("/api/v1/media/"+e.mediaId,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t.t}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},t.listRelated=function(e){return fetch("/api/v1/media/related/"+e.mediaId,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},31:function(e,t){t.create=function(e){return fetch("/api/v1/users/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},t.list=function(){return fetch("/api/v1/users/",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},t.read=function(e,t){return fetch("/api/v1/users/"+e.userId,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t.t}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},t.update=function(e,t,a){return fetch("/api/v1/users/"+e.userId,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t.t},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},t.remove=function(e,t){return fetch("/api/v1/users/"+e.userId,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t.t}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}}},[[124,1,2]]]);
//# sourceMappingURL=main.1ae8e4c6.chunk.js.map