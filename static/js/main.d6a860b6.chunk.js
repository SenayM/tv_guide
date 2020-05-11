(this.webpackJsonptvguide_web=this.webpackJsonptvguide_web||[]).push([[0],{57:function(e,t,a){e.exports=a.p+"static/media/eservices.4105d0f7.jpg"},63:function(e,t,a){e.exports=a(77)},68:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),r=a.n(o),c=(a(68),a(69),a(7)),i=a(8),s=a(10),u=a(9),m=a(11),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h2",null,"Home Page")))}}]),t}(n.Component),h=a(79),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={stations:[],programs:[],schedule:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){this.getPrograms()}},{key:"getPrograms",value:function(){var e=this;fetch("http://192.168.1.38:60601/program/",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({programs:t})})).catch((function(e){console.log("Error Found : "+e)}))}},{key:"render",value:function(){var e=this.state.programs;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h2",null,"Programs Page")),l.a.createElement(h.a,{className:"mt-4",striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Program Title"),l.a.createElement("th",null,"Program Id"),l.a.createElement("th",null,"Hosting Station "),l.a.createElement("th",null,"Schedule Id"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.programTitle),l.a.createElement("td",null,e.programId),l.a.createElement("td",null,e.hostingStationName),l.a.createElement("td",null,e.scheduleId))})))))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={stations:[],programs:[],schedules:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){this.getSchedule()}},{key:"getSchedule",value:function(){var e=this;fetch("http://192.168.1.38:60601/schedule/",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({schedules:t})})).catch((function(e){console.log("Error Found : "+e)}))}},{key:"render",value:function(){var e=this.state.schedules;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h2",null,"Schedule Page")),l.a.createElement(h.a,{className:"mt-4",striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Schedule Id"),l.a.createElement("th",null,"Day "),l.a.createElement("th",null,"Start Time"),l.a.createElement("th",null,"End Time"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.scheduleId),l.a.createElement("td",null,e.dayOfTheWeek),l.a.createElement("td",null,e.from),l.a.createElement("td",null,e.to))})))))}}]),t}(n.Component),f=a(82),b=a(81),v=a(85),S=a(80),g=a(51),y=a(86),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("http://192.168.1.38:60601/station/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({stationId:e.target.StationID.value,stationName:e.target.StationName.value,stationLogo:e.target.StationLogo.value})}).then((function(e){return e.json()})).then((function(e){alert("Successfuly Added Station "),window.location.reload()}),(function(e){alert("Failed")})).catch((function(e){console.log("Error Found : "+e)}))}},{key:"render",value:function(){return l.a.createElement(v.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,{id:"contained-modal-title-vcenter"},"Add Statoin")),l.a.createElement(v.a.Body,null,l.a.createElement("div",{className:"container"},l.a.createElement(S.a,null,l.a.createElement(g.a,{sm:6},l.a.createElement(y.a,{onSubmit:this.handleSubmit},l.a.createElement(y.a.Group,{as:S.a,controlId:"StationID"},l.a.createElement(y.a.Label,null,"Station ID    : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationID",required:!0,placeholder:"StationID"}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationName"},l.a.createElement(y.a.Label,null,"Station Name : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationName",required:!0,placeholder:"St. Name"}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationLogo"},l.a.createElement(y.a.Label,null,"Station Logo : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationLogo",required:!0,placeholder:"St. Logo"}))),l.a.createElement(y.a.Group,null,l.a.createElement(b.a,{variant:"primary",type:"submit"},"Add Station"))))))),l.a.createElement(v.a.Footer,null,l.a.createElement(b.a,{variant:"danger",onClick:this.props.onHide},"Close")))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("http://192.168.1.38:60601/station/"+e.target._ID.value,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({stationId:e.target.StationID.value,stationName:e.target.StationName.value,stationLogo:e.target.StationLogo.value})}).then((function(){alert("Successfuly Edited Station "),window.location.reload()})).catch((function(e){console.log("Error Found : "+e)}))}},{key:"render",value:function(){return l.a.createElement(v.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,{id:"contained-modal-title-vcenter"},"Update Station")),l.a.createElement(v.a.Body,null,l.a.createElement("div",{className:"container"},l.a.createElement(S.a,null,l.a.createElement(g.a,{sm:6},l.a.createElement(y.a,{onSubmit:this.handleSubmit},l.a.createElement(y.a.Group,{as:S.a,controlId:"_ID",style:{display:"none"}},l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"_ID",required:!0,disabled:!0,defaultValue:this.props.st_id}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationID"},l.a.createElement(y.a.Label,null,"Station ID    : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationID",required:!0,disabled:!0,defaultValue:this.props.stid}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationName"},l.a.createElement(y.a.Label,null,"Station Name : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationName",required:!0,defaultValue:this.props.stname}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationLogo"},l.a.createElement(y.a.Label,null,"Station Logo : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationLogo",required:!0,defaultValue:this.props.stlogo}))),l.a.createElement(y.a.Group,null,l.a.createElement(b.a,{variant:"primary",type:"submit"},"Update Station"))))))),l.a.createElement(v.a.Footer,null,l.a.createElement(b.a,{variant:"danger",onClick:this.props.onHide},"Close")))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("http://192.168.1.38:60601/station/"+e.target._ID.value,{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(){console.log("removed"),alert("Station Removed"),window.location.reload()})).catch((function(e){console.log("Error Found : "+e)}))}},{key:"render",value:function(){return l.a.createElement(v.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,{id:"contained-modal-title-vcenter"},"Are you Sure you want to Delete Station?")),l.a.createElement(v.a.Body,null,l.a.createElement("div",{className:"container"},l.a.createElement(S.a,null,l.a.createElement(g.a,{sm:6},l.a.createElement(y.a,{onSubmit:this.handleSubmit},l.a.createElement(y.a.Group,{as:S.a,controlId:"_ID",style:{display:"none"}},l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"_ID",required:!0,defaultValue:this.props.st_id}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationID"},l.a.createElement(y.a.Label,null,"Station ID    : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationID",required:!0,disabled:!0,defaultValue:this.props.stid}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationName"},l.a.createElement(y.a.Label,null,"Station Name : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationName",disabled:!0,defaultValue:this.props.stname}))),l.a.createElement(y.a.Group,{as:S.a,controlId:"StationLogo"},l.a.createElement(y.a.Label,null,"Station Logo : "),l.a.createElement(g.a,null,l.a.createElement(y.a.Control,{type:"text",name:"StationLogo",disabled:!0,defaultValue:this.props.stlogo}))),l.a.createElement(y.a.Group,null,l.a.createElement(b.a,{variant:"danger",type:"submit"},"Confirm Deletion"))))))),l.a.createElement(v.a.Footer,null,l.a.createElement(b.a,{variant:"info",onClick:this.props.onHide},"Cancel")))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={stations:[],addModalShow:!1,editModalShow:!1,deleteModalShow:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){this.getStation()}},{key:"getStation",value:function(){var e=this;fetch("http://192.168.1.38:60601/station/",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({stations:t})})).catch((function(e){console.log("Error Found : "+e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=(t.stations,t.stid),n=t.stname,o=t.stlogo,r=t.st_id;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h2",null,"Stations Page")),l.a.createElement(h.a,{className:"mt-4",striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Station Name"),l.a.createElement("th",null,"Station Id"),l.a.createElement("th",null,"Station Logo"),l.a.createElement("th",null,"Options"))),l.a.createElement("tbody",null,this.state.stations.map((function(t){return l.a.createElement("tr",{key:t._id},l.a.createElement("td",null,t.stationId),l.a.createElement("td",null,t.stationName),l.a.createElement("td",null,t.stationLogo),l.a.createElement("td",null,l.a.createElement(f.a,null,l.a.createElement(b.a,{className:"mr-2",variant:"info",onClick:function(){return e.setState({editModalShow:!0,stid:t.stationId,stname:t.stationName,stlogo:t.stationLogo,st_id:t._id})}},"Edit"),l.a.createElement(b.a,{className:"mr-2",variant:"danger",onClick:function(){return e.setState({deleteModalShow:!0,stid:t.stationId,stname:t.stationName,stlogo:t.stationLogo,st_id:t._id})}},"Delete"))))})))),l.a.createElement(f.a,null,l.a.createElement(b.a,{variant:"primary",onClick:function(){e.setState({addModalShow:!0}),console.log("Clicked Add Station "+e.state.addModalShow)}},"Add Station")),l.a.createElement(j,{show:this.state.addModalShow,onHide:function(){return e.setState({addModalShow:!1})}}),l.a.createElement(O,{show:this.state.editModalShow,onHide:function(){return e.setState({editModalShow:!1})},st_id:r,stid:a,stname:n,stlogo:o}),l.a.createElement(k,{show:this.state.deleteModalShow,onHide:function(){return e.setState({deleteModalShow:!1})},st_id:r,stid:a,stname:n,stlogo:o}))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h2",null,"Not Found Page")))}}]),t}(n.Component),w=a(36),L=a(88),C=a(87),D=a(52),x=a(37);function T(){var e=Object(w.a)(["\n.navbar {\n    background-color: #222;\n}\n\n.navbar-brand, .navbar-nav .nav-link {\n    color: #bbb;\n\n    &:hover {\n        color: white;\n    }\n}\n"]);return T=function(){return e},e}var _=x.a.div(T()),G=function(){return l.a.createElement(_,null,l.a.createElement(L.a,{expand:"md",bg:"dark",variant:"dark"},l.a.createElement(L.a.Brand,{href:"/"},"Utopian"),l.a.createElement(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(C.a,{className:"ml-auto"},l.a.createElement(C.a.Item,null,l.a.createElement(C.a.Link,{href:"/"},"Home")),l.a.createElement(C.a.Item,null,l.a.createElement(C.a.Link,{href:"/programs"},"Programs")),l.a.createElement(C.a.Item,null,l.a.createElement(C.a.Link,{href:"/schedule"},"Schedule")),l.a.createElement(C.a.Item,null,l.a.createElement(C.a.Link,{href:"/stations"},"Stations"))),l.a.createElement(y.a,{inline:!0},l.a.createElement(D.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(b.a,{variant:"outline-success"},"Search")))))},M=a(83),P=a(84),A=a(57),F=a.n(A);function H(){var e=Object(w.a)(["\n.jumbo {\n    background: url(",") no-repeat fixed bottom;\n    background-size: cover;\n    color: #efefef;\n    height: 200px;\n    position: relative;\n    z-index: -2;\n}\n\n.overlay {\n    background-color: #000;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n}\n"]);return H=function(){return e},e}var q=x.a.div(H(),F.a),z=function(){return l.a.createElement(q,null,l.a.createElement(M.a,{fluid:!0,className:"jumbo"},l.a.createElement(P.a,null,l.a.createElement("h1",null,"Welcome to"),l.a.createElement("p",null,"TvGuide Web"))))},B=a(58),V=a(24);var W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null),l.a.createElement(z,null),l.a.createElement(B.a,null,l.a.createElement(V.c,null,l.a.createElement(V.a,{exact:!0,path:"/",component:d}),l.a.createElement(V.a,{exact:!0,path:"/programs",component:E}),l.a.createElement(V.a,{exact:!0,path:"/schedule",component:p}),l.a.createElement(V.a,{exact:!0,path:"/stations",component:I}),l.a.createElement(V.a,{component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.d6a860b6.chunk.js.map