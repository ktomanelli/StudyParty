(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{63:function(e,a,t){e.exports=t(85)},68:function(e,a,t){},69:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),o=t.n(l),s=(t(68),t(13)),i=t(14),c=t(17),m=t(16),u=t(25),p=t(6),d=t(90),h=t(91),y=t(92),E=t(53),g=(t(69),t(31),t(48),t(45),t(12)),f=t.n(g);t(71),t(73);f.a.initializeApp({apiKey:"AIzaSyCLuloPcn-et2C4WJqj6uf03HGcpcYF3m8",authDomain:"studyparty-97e3d.firebaseapp.com",databaseURL:"https://studyparty-97e3d.firebaseio.com",projectId:"studyparty-97e3d",storageBucket:"studyparty-97e3d.appspot.com",messagingSenderId:"320626247759",appId:"1:320626247759:web:136b65025be5f241aa823a",measurementId:"G-F3RVYS6305"});var v=f.a.auth();f.a.firestore();f.a.firestore().enablePersistence();var w=new f.a.auth.GoogleAuthProvider,b=function(){v.signInWithPopup(w)},k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",error:null,typed:""},e.signInWithEmailAndPasswordHandler=function(a,t,n){a.preventDefault(),f.a.auth().signInWithEmailAndPassword(t,n).catch((function(e){var a=e.code,t=e.message;console.log(a),console.log(t)})),e.setState({email:"",password:"",displayName:""})},e.onChangeHandler=function(a){var t=a.currentTarget,n=t.name,r=t.value;"userEmail"===n?e.setState({email:r}):"userPassword"===n&&e.setState({password:r})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.typeWriter("Hey! You want to umm... study???")}),1500)}},{key:"typeWriter",value:function(e){var a=this;0!==e.length&&(this.setState((function(a){return{typed:a.typed.concat(e[0])}})),setTimeout((function(){return a.typeWriter(e.slice(1))}),50))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.a,{style:{backgroundColor:"white"}},r.a.createElement(h.a,{style:{backgroundColor:"white",marginBottom:"0px",textAlign:"center"}},r.a.createElement("h1",{className:"main-title permanent-marker pink animate__animated animate__bounceInDown"},"StudyParty!"),r.a.createElement("h6",{className:"montserrat"},this.state.typed,r.a.createElement("span",{className:"cursor"},r.a.createElement("span",{style:{fontWeight:"normal"}},"|")))),r.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{controlId:"userEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",name:"userEmail",value:this.state.email,onChange:function(a){return e.onChangeHandler(a)}})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"userPassword",value:this.state.password,onChange:function(a){return e.onChangeHandler(a)}})),r.a.createElement(E.a,{variant:"primary",type:"submit",block:!0,onClick:function(a){e.signInWithEmailAndPasswordHandler(a,e.state.email,e.state.password)}},"Sign In"),r.a.createElement("div",{style:{margin:"40px 0px"}},r.a.createElement("p",{className:"ride-line"},r.a.createElement("span",{className:"ride-line-span"},"or")),r.a.createElement(E.a,{variant:"outline-primary",block:!0,onClick:b},"Sign in with Google"))),r.a.createElement("p",{style:{paddingBottom:"100px"}},"Don't have an account? Sign up ",r.a.createElement(u.b,{to:"signUp"},"here")))))}}]),t}(n.Component),N=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",displayName:"",error:null,typed:""},e.createUserWithEmailAndPasswordHandler=function(a,t,n,r){console.log(t),console.log(n),console.log(r),a.preventDefault(),e.props.updateDisplayNameFromForm(e.state.displayName),f.a.auth().createUserWithEmailAndPassword(t,n).then((function(){console.log("Successfully created new user"),f.a.auth().currentUser.updateProfile({displayName:r}).then((function(){console.log("Successfully updated profile with displayName")})).catch((function(e){console.log("Error updating user with displayName:",e)}))})).catch((function(e){console.log("Error creating new user:",e)})),e.setState({email:"",password:"",displayName:""})},e.onChangeHandler=function(a){var t=a.currentTarget,n=t.name,r=t.value;"userEmail"===n?e.setState({email:r}):"userPassword"===n?e.setState({password:r}):"displayName"===n&&e.setState({displayName:r})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.typeWriter("Hey! You want to umm... study???")}),1500)}},{key:"typeWriter",value:function(e){var a=this;0!==e.length&&(this.setState((function(a){return{typed:a.typed.concat(e[0])}})),setTimeout((function(){return a.typeWriter(e.slice(1))}),50))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.a,{style:{backgroundColor:"white"}},r.a.createElement(h.a,{style:{backgroundColor:"white",marginBottom:"0px",textAlign:"center"}},r.a.createElement("h1",{className:"main-title permanent-marker pink animate__animated animate__bounceInDown"},"StudyParty!"),r.a.createElement("h6",{className:"montserrat"},this.state.typed,r.a.createElement("span",{className:"cursor"},r.a.createElement("span",{style:{fontWeight:"normal"}},"|")))),r.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{controlId:"userName"},r.a.createElement(y.a.Label,null,"Display name"),r.a.createElement(y.a.Control,{type:"name",placeholder:"Enter name",name:"displayName",value:this.state.displayName,onChange:function(a){return e.onChangeHandler(a)}})),r.a.createElement(y.a.Group,{controlId:"userEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",name:"userEmail",value:this.state.email,onChange:function(a){return e.onChangeHandler(a)}})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"userPassword",value:this.state.password,onChange:function(a){return e.onChangeHandler(a)}})),r.a.createElement(E.a,{variant:"primary",type:"submit",block:!0,onClick:function(a){e.createUserWithEmailAndPasswordHandler(a,e.state.email,e.state.password,e.state.displayName)}},"Sign Up"),r.a.createElement("div",{style:{margin:"40px 0px"}},r.a.createElement("p",{className:"ride-line"},r.a.createElement("span",{className:"ride-line-span"},"or")),r.a.createElement(E.a,{onClick:b,variant:"outline-primary",block:!0},"Sign up with Google"))),r.a.createElement("p",{style:{paddingBottom:"100px"}},"Already have an account? Sign in ",r.a.createElement(u.b,{to:"/"},"here")))))}}]),t}(n.Component),C=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement("h1",null,"Main page"))))}}]),t}(n.Component),S=t(94),P=t(95),j=t(93),I=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={user:null},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.displayName),v.onAuthStateChanged((function(a){console.log(a),e.setState({user:a})}))}},{key:"render",value:function(){return console.log(this.props),console.log(this.state),r.a.createElement(S.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(S.a.Brand,{href:"#home",className:"permanent-marker"},"StudyParty!"),r.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(P.a,{className:"mr-auto"},r.a.createElement(P.a.Link,{href:"#features"},"Features"),r.a.createElement(P.a.Link,{href:"#pricing"},"Pricing"),r.a.createElement(j.a,{title:"Dropdown",id:"collasible-nav-dropdown"},r.a.createElement(j.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(j.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(j.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(j.a.Divider,null),r.a.createElement(j.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(P.a,null,this.state.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a.Link,{style:{marginRight:"20px"}},"Welcome, ".concat(this.state.user.displayName?this.state.user.displayName:this.props.displayName)),r.a.createElement(P.a.Link,{style:{marginRight:"20px"},onClick:function(){v.signOut()}},"Logout")):null)))}}]),t}(n.Component),O=(t(83),t(84),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={user:null,displayNameFromForm:null},e.updateDisplayNameFromForm=function(a){console.log(a),e.setState({displayNameFromForm:a})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.onAuthStateChanged((function(a){console.log(a),e.setState({user:a},console.log(e.state))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Application"},r.a.createElement(I,{displayName:this.state.displayNameFromForm}),r.a.createElement(u.a,{basename:"".concat("/StudyParty","/")},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/"},this.state.user?r.a.createElement(p.a,{to:"/main"}):r.a.createElement(k,null)),r.a.createElement(p.b,{exact:!0,path:"/signUp",render:function(a){return e.state.user?r.a.createElement(p.a,{to:"/main"}):r.a.createElement(N,{updateDisplayNameFromForm:e.updateDisplayNameFromForm})}}),r.a.createElement(p.b,{exact:!0,path:"/main"},this.state.user?r.a.createElement(C,null):r.a.createElement(p.a,{to:"/"})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.c0d72ff7.chunk.js.map