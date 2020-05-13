(this["webpackJsonpmitch-portfolio"]=this["webpackJsonpmitch-portfolio"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=(a(11),function(){return l.a.createElement("div",{className:"header-overlay"},l.a.createElement("h1",null,"Mitchell Naleid"),l.a.createElement("h2",null,"Web Developer"))}),o=a(1),s=function(){var e=Object(n.useState)([{source:"../images/half-moon-pier.jpg",title:"Half Moon Pier"},{source:"../images/port-washington-rocks.jpg",title:"Port Washington Rocks"},{source:"../images/abandoned-rail.jpg",title:"Abandoned Rail"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(0),r=Object(o.a)(a,2),c=r[0],i=r[1],s=t[c];return l.a.createElement("div",{id:"carousel-block"},l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{id:"slider"},l.a.createElement("div",{className:"slide"},l.a.createElement("img",{src:s.source,alt:s.title,title:s.title,className:"slider-img"}),l.a.createElement("div",{className:"arrows"},l.a.createElement("div",{id:"arrow-left",onClick:function(){i(0!==c?c-1:c=t.length-1),s=t[c]}},l.a.createElement("i",{className:"fas fa-arrow-alt-circle-left"})),l.a.createElement("div",{id:"arrow-right",onClick:function(){c!==t.length-1?i(c+1):i(c=0),s=t[c]}},l.a.createElement("i",{className:"fas fa-arrow-alt-circle-right"})))))))},u=function(){return l.a.createElement("div",{id:"about-block"},l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"flex-child"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"My past experience started out on the front-end of coding. This includes HTML5, CSS3, JavaScript, WordPress",l.a.createElement("em",null,"(PHP)")," and the Bootstrap framework. I've also worked with version control such as GitHub and BitBucket. My first real job out of college, in addition to standard HTML and CSS, included creating email campaigns which needed to be coded using tables.",l.a.createElement("em",null,"(I believe it's still that way today)"),"."),l.a.createElement("p",null,"During the quarantine, I've been taking the time to fill in some of the gaps when it comes JavaScript. I've also been looking into React, Express, and MongoDB. I already did a project with React class components, but I'd prefer the newer hooks. In fact, I am re-making this portfolio using React Hooks. I also plan on looking into Angular and Firebase.")),l.a.createElement("div",{className:"flex-child"},l.a.createElement("figure",{className:"figure"},l.a.createElement("img",{src:"images/mitchell-bio-image.jpg",alt:"Mitchell Naleid",title:"Mitchell Naleid",className:"rounded-circle img-fluid d-block mx-auto"}),l.a.createElement("figcaption",{className:"figure-caption"},"Photo by Sarah Geraldson")))))},m=a(2),d=a.n(m),h=a(3),f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://api.open-notify.org/iss-now.json",e.next=3,fetch("http://api.open-notify.org/iss-now.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a.iss_position);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval((function(){e()}),5e3);return function(){return clearInterval(t)}}),[]),l.a.createElement("div",{className:"coordinates"},l.a.createElement("h4",null,"ISS Location: "),l.a.createElement("p",null,"Latitude: ",l.a.createElement("strong",null,a.latitude)," Longitude: ",l.a.createElement("strong",null,a.longitude)))},E=function(){return l.a.createElement("div",{id:"spaceStation-block"},l.a.createElement("h2",null,"Location of the International Space Station"),l.a.createElement(f,null),l.a.createElement("p",null,"This is an example of a REST API. I chose the Open Notify REST API exclusively because it doesn't require an API key. I know most do, but in this case, I didn't want to expose a real API key by using it on the client-side."),l.a.createElement("div",{className:"photo-credit"},l.a.createElement("small",null,"Photo by Andy Holmes via Unsplash.com")))};var p=function(){Object(n.useEffect)((function(){c()}),[]);var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/languages");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"flex-child"},l.a.createElement("h2",null,"Known Languages/Tools"),l.a.createElement("ul",{className:"list-group"},a.map((function(e){return l.a.createElement("li",{key:e.id,className:"list-group-item"},e.title,null!=e.extension?l.a.createElement("span",{className:"badge badge-primary badge-pill"},e.extension):"")}))),l.a.createElement("div",{className:"list-post-content"},l.a.createElement("p",null,"These are the languages or tools that I am comfortable with. I may not know every single aspect of all of these, but if a developer says they do, they are likely lying to you."),l.a.createElement("p",null,"This list is being pulled with the native fetch function and grabbing a local JSON file. I am simulating that the JSON file is on a separate server with JSON-Server.")))},g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),i=Object(o.a)(c,2),s=i[0],u=i[1],m=a[s];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3002/learn",e.next=3,fetch("http://localhost:3002/learn");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){s!==a.length-1?u(s+1):u(s=0),m=a[s]}),8e3);return function(){return clearInterval(e)}}),[s]),a.length?l.a.createElement("span",{key:m.id},l.a.createElement("img",{src:m.source,alt:m.title,title:m.title,className:"img-fluid mx-auto d-block"}),l.a.createElement("h4",{className:"text-center"},m.title)):null};var v=function(){return l.a.createElement("div",{className:"flex-child languages"},l.a.createElement("h2",null,"Languages/Tools to Learn"),l.a.createElement("div",{className:"logo-parent"},l.a.createElement("div",{className:"img-container"},l.a.createElement(g,null))),l.a.createElement("div",{className:"list-post-content"},l.a.createElement("p",null,"These are the languages and tools that I see most often in job searches, or just when I'm doing research on my own time. I think it's important to keep learning. I thought being at home would face me witth too many distractions, but it has actually had the adverse effect. I think with my fiance working from home, it has been pushing me to be just as productive as her.")))},b=function(){return l.a.createElement("div",{id:"prev-experience",className:"flex-container text-center"},l.a.createElement("div",{className:"flex-child"},l.a.createElement("h2",null,"Previous Experience"),l.a.createElement("br",null),l.a.createElement("h3",null,"Web Designer"),l.a.createElement("h4",null,"Beyond Private Label"),l.a.createElement("p",null,"3+ years"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Graphic Designer"),l.a.createElement("h4",null,"Redefined Realty Advisors, LLC"),l.a.createElement("p",null,"1 year"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Web Designer/Email Marketing Manager"),l.a.createElement("h4",null,"DiscountRamps.com"),l.a.createElement("p",null,"2 years")))},y=function(){return l.a.createElement("div",{id:"footer-block"},l.a.createElement("ul",null,l.a.createElement("li",null,"Mitchell Naleid - Web Developer"),l.a.createElement("li",null,l.a.createElement("a",{href:"tel:+12623648896"},l.a.createElement("i",{className:"fas fa-mobile-alt"})," 1-262-364-8896")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-map-marker-alt"})," Menomonee Falls, WI")))};var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(s,null),l.a.createElement(u,null),l.a.createElement(E,null),l.a.createElement("div",{id:"languages-block"},l.a.createElement("div",{className:"flex-container"},l.a.createElement(p,null),l.a.createElement(v,null))),l.a.createElement(b,null),l.a.createElement(y,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.a6faffff.chunk.js.map