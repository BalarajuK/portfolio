(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,n,a){},15:function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),r=a(4),i=a.n(r),s=a(5),o=a(6),l=a(8),d=a(7),j=a(2),m=a(0),b=function(e){var n=e.dark,a=e.children,t=e.className,c=e.items,r=e.to,i=e.Link;return n=n?"dark":"light",Object(m.jsxs)("nav",{className:"Header navbar navbar-".concat(n," bg-").concat(n)+(t?" "+t:"")+(c&&c.length?" navbar-expand-lg":""),children:[r?Object(m.jsx)(i,{to:r,className:"navbar-brand",children:a}):Object(m.jsx)("span",{className:"navbar-brand",children:a}),c&&c.length>0&&Object(m.jsx)("div",{className:"collapse navbar-collapse",children:Object(m.jsx)("ul",{className:"navbar-nav ml-auto",children:c.map((function(e,n){return Object(m.jsx)("li",{className:"nav-item",children:e},n)}))})})]})},u=function(e){Object(l.a)(a,e);var n=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={Dark:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title=j.Name+"'s Portfolio"}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{className:"Header fixed-top",dark:this.state.Dark,items:j.Sections.map((function(e){return Object(m.jsx)("a",{className:"nav-link",target:e.Link?"_blank":null,rel:"noopener",href:e.Link?e.Link:"#"+e.Name,children:e.Name},e.Name)})),children:j.Name}),j.Sections.map((function(e){return e.Link?null:Object(m.jsx)("section",{id:e.Name,children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-12",children:Object(m.jsxs)("article",{children:[Object(m.jsx)("h2",{children:e.Name}),Object(m.jsx)("p",{children:e.Content})]})})})})},e.Name)}))]})}}]),a}(t.Component),h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(n){var a=n.getCLS,t=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;a(e),t(e),c(e),r(e),i(e)}))};a(14);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(u,{})}),document.getElementById("root")),h()},2:function(e){e.exports=JSON.parse('{"Name":"Raju","Description":"Software Engineer","Image":"","Sections":[{"Name":"About","Content":"I am a software developer"},{"Name":"Education","Content":"M.Tech in Computer Science and Engineering"},{"Name":"Contact","Content":"Hyderabad"},{"Name":"LinkedIn","Link":"https://www.linkedin.com/in/balarajuyadav/"}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.5110ed47.chunk.js.map