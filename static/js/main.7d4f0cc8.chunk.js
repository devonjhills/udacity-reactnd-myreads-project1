(this["webpackJsonpudacity-reactnd-myreads-project1"]=this["webpackJsonpudacity-reactnd-myreads-project1"]||[]).push([[0],{62:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(20),r=n.n(c),s=n(14),o=n(21),i=n.n(o),l=n(31),j=n(33),u=(n(62),"https://reactnd-books-api.udacity.com"),b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var d={Accept:"application/json",Authorization:b},h=function(e,t){return fetch("".concat(u,"/books/").concat(e.id),{method:"PUT",headers:Object(s.a)(Object(s.a)({},d),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()})).then(console.log("test update"))},O=function(e){return fetch("".concat(u,"/search"),{method:"POST",headers:Object(s.a)(Object(s.a)({},d),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.errors?(console.log("ERROR SEARCHING"),[]):e.books}))},f=n(25),x=n(7),k=n(82),m=n(81),p=n(89),y=n(80),v=n(56),g=n(11),N=n(15),B=[{key:"currentlyReading",label:"Currently Reading"},{key:"wantToRead",label:"Want To Read"},{key:"read",label:"Read"},{key:"none",label:"None"}],w=n(2),S=function(e){var t=e.book,n=e.updateBook;return Object(w.jsx)("div",{className:"book-shelf-changer",children:Object(w.jsx)(y.a,{title:Object(w.jsx)(g.a,{title:"Move To Shelf",icon:N.d,size:"2x"}),id:"dropdown-menu",variant:"light",size:"sm",defaultValue:t.shelf?t.shelf:"none",onSelect:function(e){n(t,e)},children:B.map((function(e){return Object(w.jsx)(v.a.Item,{eventKey:e.key,disabled:e.key===t.shelf,style:e.key===t.shelf?{background:"black"}:{background:""},children:e.label},e.key)}))})})},R=function(e){var t=e.book,n=e.updateBook;return Object(w.jsx)(m.a,{className:"mb-1 mt-2",xs:!0,sm:!0,md:6,lg:4,xl:4,children:Object(w.jsxs)(p.a,{"border-variant":"dark","bg-variant":"dark",text:"info",border:"dark",className:"text-center",children:[Object(w.jsxs)("div",{className:"card-horizontal",children:[Object(w.jsx)(p.a.Img,{style:{width:128,height:193},src:t.imageLinks&&t.imageLinks.thumbnail,alt:"Book Cover Not Available"}),Object(w.jsxs)(p.a.Body,{children:[Object(w.jsx)(p.a.Title,{children:t.title}),Object(w.jsx)(p.a.Subtitle,{className:"text-muted mb-3",children:t.authors?t.authors.join(", "):"No Author Listed"})]})]}),Object(w.jsx)(S,{updateBook:n,book:t})]})})},T=function(e){var t=e.books,n=e.updateBook;return Object(w.jsx)(k.a,{className:"m-0",children:t.map((function(e){return Object(w.jsx)(R,{updateBook:n,book:e},e.id)}))})},A=n(83),C=n(84),z=n(54),L=n(90),I=function(e){var t=e.query,n=e.handleQuery;return Object(w.jsx)(A.a,{children:Object(w.jsxs)(C.a,{className:"mb-5",children:[Object(w.jsx)(C.a.Prepend,{children:Object(w.jsx)(f.b,{to:"/",children:Object(w.jsx)(z.a,{variant:"dark",title:"Return Home",children:Object(w.jsx)(g.a,{icon:N.a})})})}),Object(w.jsx)(L.a,{type:"text",placeholder:"Search by title or author",value:t,onChange:function(e){return n(e.target.value)}})]})})},E=n(85),J=function(e){var t=e.books,n=e.updateBook,c=Object(a.useState)(""),r=Object(j.a)(c,2),o=r[0],u=r[1],b=Object(a.useState)([]),d=Object(j.a)(b,2),h=d[0],f=d[1],x=function(){var e=Object(l.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(n),""===n){e.next=6;break}return e.next=4,O(n).then((function(e){!e||e.error?f([]):Array.isArray(e)&&(e=e.map((function(e){var n,a=t.find((function(t){var n=t.id;return e.id===n}));return Object(s.a)(Object(s.a)({},e),{},{shelf:null!==(n=null===a||void 0===a?void 0:a.shelf)&&void 0!==n?n:"none"})})),f(e))}));case 4:e.next=7;break;case 6:f([]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(E.a,{className:"m-1",children:[Object(w.jsx)(I,{query:o,handleQuery:x}),Object(w.jsx)("div",{className:"search-books-results",children:h.length>0?Object(w.jsx)(T,{books:h,updateBook:n}):Object(w.jsxs)("h3",{className:"text-center mt-5",children:[Object(w.jsx)(g.a,{className:"mr-1",icon:N.f}),"No Results"]})})]})},M=n(87),q=n(88),G=function(){return Object(w.jsxs)(M.a,{fixed:"top",bg:"dark",variant:"dark",children:[Object(w.jsxs)(M.a.Brand,{eventkey:"disabled",disabled:!0,children:[Object(w.jsx)(g.a,{className:"mr-1",icon:N.b}),"MyReads"]}),Object(w.jsx)(q.a.Link,{as:f.b,to:"/",children:Object(w.jsxs)(z.a,{variant:"dark",children:[Object(w.jsx)(g.a,{className:"mr-2",icon:N.e}),"My Shelves"]})}),Object(w.jsx)(q.a.Link,{as:f.b,to:"/search",children:Object(w.jsxs)(z.a,{variant:"dark",children:[Object(w.jsx)(g.a,{className:"mr-2",icon:N.g}),"Add New Books"]})})]})},H=(n(73),function(e){return Object(w.jsxs)("h3",{className:"shelf-name",children:[e.heading,Object(w.jsx)(g.a,{className:"ml-2",icon:N.c})]})}),P=function(e){var t=e.books,n=e.updateBook,a=e.shelfName;return Object(w.jsxs)(E.a,{fluid:!0,className:"my-jumbo",children:[Object(w.jsx)(H,{heading:a}),Object(w.jsx)(T,{updateBook:n,books:t})]})},Q=n(49),D=n(86),F=function(){return Object(w.jsxs)(M.a,{position:"bottom",bg:"dark",variant:"light",children:[Object(w.jsx)(M.a.Text,{className:"text-muted",children:"Created by Devon Hills"}),Object(w.jsx)(M.a.Collapse,{className:"justify-content-end",children:Object(w.jsxs)(D.a,{children:[Object(w.jsx)(z.a,{title:"Github",href:"https://github.com/devonjhills",variant:"dark",children:Object(w.jsx)(g.a,{title:"Github",icon:Q.a,size:"2x"})}),Object(w.jsx)(z.a,{title:"LinkedIn",href:"https://www.linkedin.com/in/devonjhills/",variant:"dark",children:Object(w.jsx)(g.a,{icon:Q.b,size:"2x"})})]})})]})},K=function(e){var t=e.books,n=e.updateBook,a=B.filter((function(e){return"none"!==e.key}));return Object(w.jsxs)(w.Fragment,{children:[a.map((function(e){return Object(w.jsx)(P,{updateBook:n,shelfName:e.label,books:t.filter((function(t){return t.shelf===e.key}))},e.key)})),Object(w.jsx)(F,{})]})},U=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/books"),{headers:d}).then((function(e){return e.json()})).then((function(e){return e.books})).then(console.log("test getall")).then((function(e){c(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,a).then((function(){var e=!1,r=n.map((function(n){return n.id===t.id?(e=!0,Object(s.a)(Object(s.a)({},n),{},{shelf:a})):n}));!e&&r.push(Object(s.a)(Object(s.a)({},t),{},{shelf:a})),c(r)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(w.jsxs)(f.a,{children:[Object(w.jsx)(G,{}),Object(w.jsxs)(x.d,{children:[Object(w.jsx)(x.b,{exact:!0,path:"/",children:Object(w.jsx)(K,{books:n,updateBook:o})}),Object(w.jsx)(x.b,{path:"/search",children:Object(w.jsx)(J,{books:n,updateBook:o})}),Object(w.jsx)(x.b,{path:"*",render:function(){return Object(w.jsx)(x.a,{to:"/"})}})]})]})};n(74);r.a.render(Object(w.jsx)(U,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.7d4f0cc8.chunk.js.map