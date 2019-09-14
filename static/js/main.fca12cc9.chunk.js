(window["webpackJsonphubenschmidt.github.io"]=window["webpackJsonphubenschmidt.github.io"]||[]).push([[0],{31:function(e){e.exports=JSON.parse('[{"id":12,"name":"digitalCrates","title":"digitalCrates","url":"https://young-mesa-54357.herokuapp.com","repo":"https://github.com/hubenschmidt/you-can-dig-it","image":"/assets/images/digitalcrates.png","description":"Sync & stream Discogs record collection w/ matched YouTube links."},{"id":8,"name":"tasteMaker","title":"tasteMaker","url":"https://whispering-fortress-56292.herokuapp.com","repo":"https://github.com/hubenschmidt/TasteMaker","image":"/assets/images/result.png","description":"Make friends with similar music taste."},{"id":13,"name":"message-digest","title":"message-digest","url":"","repo":"https://github.com/hubenschmidt/message-digest","image":"/assets/images/messagedigest.png","description":"Cryptographic one-way hashing service."},{"id":7,"name":"recordDistroCLI","title":"recordDistroCLI","url":"","repo":"https://github.com/hubenschmidt/Node-MySQL-Record-Distro","image":"/assets/images/manager_addProduct.gif","description":"Sales & inventory database with command line interface."},{"id":1,"name":"99\xa2 Dreams Records","title":"99\xa2 Radio // 99\xa2 Dreams Records","url":"http://www.99centradio.com","repo":"","image":"/assets/images/99c.png","description":"Record label launched in 2014."},{"id":6,"name":"language-interpreter-CLI","title":"language-interpreter-CLI","url":"","repo":"https://github.com/hubenschmidt/liri-node-app","image":"/assets/images/liri-commands.gif","description":"Return search results for concerts, songs, & movies w/ command line interface."},{"id":14,"name":"course-catalog","title":"course-catalog","url":"https://infinite-sea-36887.herokuapp.com","repo":"https://github.com/hubenschmidt/course-catalog","image":"/assets/images/course-catalog.png","description":"React course catalog w/ tags"},{"id":10,"name":"recordScraper","title":"recordScraper","url":"https://sleepy-stream-41980.herokuapp.com","repo":"https://github.com/hubenschmidt/RecordScraper","image":"/assets/images/recordscraper.png","description":"Scrape, preview and save reggae releases."}]')},46:function(e,a,t){e.exports=t(58)},51:function(e,a,t){},55:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(25),i=t.n(o),l=(t(51),t(26)),c=t(14),s=t(27),m=t(28),p=t(33),d=t(3),g=t(79),h=t(76),u=t(81),b=t(41),f=Object(b.a)({root:{overflow:"hidden"},blue:{color:"#258BFF"},yellow:{color:"yellow",fontWeight:"1000",fontSize:"1.2rem"},yellow2:{color:"yellow",fontWeight:"1000"},white:{color:"white"},fuschia:{color:"red",fontSize:"1rem"},orange:{color:"orange",fontWeight:"1000",fontSize:"1rem"},grayLine:{color:"gray",whiteSpace:"nowrap"}});function E(){var e=f();return n.a.createElement(u.a,{component:"div",className:e.root},n.a.createElement(u.a,{component:"span",className:e.grayLine},n.a.createElement(h.a,null,"// introduction--------------------------------------------------------------------------------------------------------------------------------------------")),n.a.createElement(u.a,{component:"div"},n.a.createElement(u.a,{component:"span"},n.a.createElement(h.a,{className:e.blue,display:"inline"},"const"," "),n.a.createElement(h.a,{className:e.yellow,display:"inline"},"williamRoy"," "),n.a.createElement(h.a,{className:e.white,display:"inline"},"="," "),n.a.createElement(h.a,{className:e.yellow,display:"inline"},"(hubenschmidt)"," "),n.a.createElement(h.a,{className:e.blue,display:"inline"},"=>"," "),n.a.createElement(h.a,{className:e.white,display:"inline"},"{"," "),n.a.createElement(u.a,{component:"div",marginLeft:"20px"},n.a.createElement(u.a,{component:"div"},n.a.createElement(h.a,{className:e.white,display:"inline"},"page ="," "),n.a.createElement(h.a,{className:e.yellow2,display:"inline"},"portfolio"),n.a.createElement(h.a,{className:e.white,display:"inline"},";")),n.a.createElement(u.a,{component:"div"},n.a.createElement(h.a,{className:e.fuschia,display:"inline"},"return"," "),n.a.createElement(h.a,{className:e.orange,display:"inline"},"'Information and '"," "),n.a.createElement(h.a,{className:e.white,display:"inline"},"+page+"),n.a.createElement(h.a,{className:e.orange,display:"inline"},"' on software developer in Brooklyn'"," "))),n.a.createElement(h.a,{className:e.white},"};"),n.a.createElement(h.a,{className:e.white}))))}var y=Object(b.a)({root:{overflow:"hidden",justifyContent:"right"},grayLine:{whiteSpace:"nowrap"},green:{color:"#4DFF00"},gray:{color:"gray"},boxBody:{}});function w(e){var a=y();return n.a.createElement(u.a,{component:"div",className:a.root},n.a.createElement(u.a,{component:"span",className:a.grayLine},n.a.createElement(h.a,{className:a.gray},e.header)),n.a.createElement(h.a,{className:a.green},e.title),n.a.createElement(u.a,{component:"span",className:a.boxBody},e.children))}var x=t(83),v=Object(b.a)({root:{marginBottom:"10px"},white:{color:"red"}});function N(e){v();return n.a.createElement(u.a,{component:"div"},n.a.createElement(x.a,null,e.children))}function k(e){var a=v();return n.a.createElement(u.a,{component:"div",className:a.root},n.a.createElement(u.a,{component:"span"},e.children))}var j=t(32),S=t(80),L=t(61),O=t(31),B=t(16),C=function(e){return O.filter((function(a){return a.id==e}))},D=t(82),R=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={project:{}},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.match.params.id,a=C(e);this.setState({project:a})}},{key:"componentWillReceiveProps",value:function(e){var a=e.match.params.id,t=C(a);this.setState({project:t})}},{key:"render",value:function(){var e=this.props.classes;return this.state.project.map((function(a){return n.a.createElement(u.a,{component:"div",className:e.root},n.a.createElement(u.a,{component:"span",display:"inline"},n.a.createElement(h.a,{className:e.header})),n.a.createElement(u.a,{component:"span",display:"inline"},n.a.createElement(h.a,{className:e.header},n.a.createElement("strong",null,a.title,":")," ",a.description)),n.a.createElement(u.a,{component:"div",display:"block"},n.a.createElement(h.a,{className:e.desc},n.a.createElement("strong",null,"links: "),n.a.createElement(D.a,{color:"inherit",href:a.url,target:"_blank",className:e.link_a},a.url)),n.a.createElement(h.a,{className:e.desc},n.a.createElement(D.a,{color:"inherit",href:a.repo,target:"_blank",className:e.link_b},a.repo))),n.a.createElement(u.a,{component:"div",style:{backgroundImage:'url("'.concat(a.image,'")')},className:e.img},n.a.createElement(u.a,{className:e.hide},a.image)))}))}}]),a}(r.Component),_=Object(L.a)((function(e){return{root:{},header:Object(d.a)({color:"yellow",fontSize:"1rem",fontWeight:"0",boxShadow:"-3px -2px yellow",marginLeft:"38px",backgroundColor:"#009CFF"},"marginLeft","2px"),desc:{color:"yellow",fontSize:"1rem",fontWeight:"0",boxShadow:"-3px -2px #009CFF"},img:{height:"50vh",boxShadow:"-8px -8px yellow"},hide:{visibility:"hidden"},link_a:{marginLeft:"2px"},link_b:{marginLeft:"44px"}}}))(R),F=t(78),W=t(43),z=t(77),T=(t(55),Object(W.a)({typography:{fontFamily:"Gayathri"}})),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={projectData:O},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(z.a,{theme:T},n.a.createElement("div",{className:e.root},n.a.createElement(F.a,null),n.a.createElement(g.a,{maxWidth:"lg"},n.a.createElement(S.a,{container:!0},n.a.createElement(j.a,null,n.a.createElement(S.a,{item:!0,xs:12,sm:6,className:e.grid2},n.a.createElement(E,{spacing:0})),n.a.createElement(S.a,{item:!0,xs:12,sm:6,className:e.grid2},n.a.createElement(w,{header:"// projects--------------------------------------------------------------------------------------------------------------------------------------------"},this.state.projectData.length?n.a.createElement(N,null,this.state.projectData.map((function(a){return n.a.createElement(k,{key:a.id},n.a.createElement(j.b,{className:e.projTitle,to:"/projects/"+a.id},n.a.createElement(h.a,null,a.title)),n.a.createElement(h.a,{className:e.projDesc},a.description))}))):n.a.createElement("h3",null,"No Results to Display"))),n.a.createElement(B.a,{exact:!0,path:"/projects/:id",component:_})))),n.a.createElement(S.a,{item:!0,xs:12,sm:12,className:e.grid2a}),n.a.createElement(S.a,{item:!0,xs:12,sm:12,className:e.grid2},n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://github.com/hubenschmidt",target:"_blank",className:e.footer_a},"github")),n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://linkedin.com/in/williamhubenschmidt",target:"_blank",className:e.footer_b},"linkedin")),n.a.createElement(h.a,null,n.a.createElement("a",{href:"/assets/William Hubenschmidt, Developer.pdf",target:"_blank",className:e.footer_c},"resume"))),n.a.createElement(S.a,{item:!0,xs:12,sm:12,className:e.grid2}),n.a.createElement("footer",{className:e.footer},n.a.createElement(g.a,{maxWidth:"lg"},n.a.createElement(h.a,{style:{marginLeft:"150px"}},"2019 \xa9 William Hubenschmidt")))))}}]),a}(r.Component),M=Object(L.a)((function(){var e;return e={root:{flexGrow:0,display:"flex",flexDirection:"column",minHeight:"100vh",backgroundImage:"linear-gradient(#1d115d, #9F1159)",lineHeight:"4",fontSize:"2rem",fontWeight:"1000",letterSpacing:".7px"},footer:{marginTop:"auto",color:"white",borderTop:"1px solid orange"},footer_a:{color:"white",float:"left",marginLeft:"40px",marginTop:"-14px",backgroundColor:"black",fontSize:"1.9rem"},footer_b:{color:"red",marginLeft:"10px",marginBottom:"-1px",backgroundColor:"yellow",fontSize:"1.2rem"},footer_c:{color:"white",marginLeft:"-20px",marginBottom:"-1px",backgroundColor:"green",fontSize:"1.6rem"},grid:{border:"1px dotted #4DFF00",marginTop:"4px",marginBottom:"4px",borderLeft:"none",borderRight:"none",borderBottom:"1px dotted yellow"},grid2:{border:"1px solid yellow",marginBottom:"4px",borderLeft:"none",borderRight:"none",borderBottom:"none"},grid2a:{border:"2px dashed pink",marginBottom:"4px",borderLeft:"none",borderRight:"none",borderBottom:"none"}},Object(d.a)(e,"grid2a",{border:"3px solid yellow",marginBottom:"2px",borderLeft:"none",borderRight:"none",borderBottom:"none",marginTop:"20px"}),Object(d.a)(e,"grid3",{border:"1px dotted red",marginBottom:"4px",borderLeft:"none",borderRight:"none",borderBottom:"none"}),Object(d.a)(e,"paper",{textAlign:"center",backgroundColor:"#170457"}),Object(d.a)(e,"projTitle",{color:"#4DFF00"}),Object(d.a)(e,"projDesc",{color:"white"}),e}))(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.fca12cc9.chunk.js.map