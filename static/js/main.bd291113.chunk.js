(this.webpackJsonpfirebasechat=this.webpackJsonpfirebasechat||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(12),r=a.n(c),i=(a(22),a(13)),o=a(14),u=a(15),l=a(16),m=a(8),d=a.n(m),f={apiKey:"AIzaSyDIvDhVMRfwhv475q-BEuor3gfuIecWi3E",authDomain:"projectchat-4fc23.firebaseapp.com",databaseURL:"https://projectchat-4fc23.firebaseio.com",projectId:"projectchat-4fc23",storageBucket:"projectchat-4fc23.appspot.com",messagingSenderId:"128867382129",appId:"1:128867382129:web:ed2fe620cf0379575b7cd0"},p=(a(33),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).writeUserData=function(){d.a.database().ref("/").set(n.state),console.log("data saved")},n.getUserData=function(){d.a.database().ref("/").on("value",(function(e){var t=e.val();n.setState(t)})),console.log("data retrieved")},n.handleSubmit=function(e){e.preventDefault();var t=n.refs.name.value,a=n.refs.msg.value,s=n.refs.uid.value;if(s&&t&&a){var c=n.state.dev,r=c.findIndex((function(e){return e.uid===s}));c[r].name=t,c[r].msg=a,n.setState({dev:c})}else if(t&&a){var i=(new Date).getTime().toString(),o=n.state.dev;o.push({uid:i,name:t,msg:a}),n.setState({dev:o})}n.refs.msg.value="",n.refs.uid.value=""},n.removeData=function(e){console.log(n.state);var t=n.state.dev.filter((function(t){return t.uid!==e.uid}));n.setState({dev:t})},d.a.initializeApp(f),console.log(f),n.state={dev:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"componentDidUpdate",value:function(e,t){t!==this.state&&this.writeUserData()}},{key:"render",value:function(){var e=this,t=this.state.dev;return s.a.createElement("div",{className:"main-cont"},t.map((function(t){return s.a.createElement("div",{key:t.uid,className:"msg-cont"},s.a.createElement("div",null,s.a.createElement("h5",{className:"name"},t.name),s.a.createElement("p",{className:"msg"},t.msg)),s.a.createElement("button",{onClick:function(){return e.removeData(t)},className:"del"},"\u2718"))})),s.a.createElement("div",{className:"inp-cont"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"hidden",ref:"uid"}),s.a.createElement("input",{type:"text",ref:"name",className:"inp-name",placeholder:"Name"}),s.a.createElement("input",{type:"text",ref:"msg",className:"inp-msg",placeholder:"Message"}),s.a.createElement("button",{type:"submit",className:"btnSend"},"Send"))))}}]),a}(s.a.Component));r.a.render(s.a.createElement(p,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bd291113.chunk.js.map