"use strict";(self.webpackChunkgoit_react_hw_05_moviess=self.webpackChunkgoit_react_hw_05_moviess||[]).push([[257],{854:function(n,e,r){r.d(e,{a:function(){return i}});var t=r(1523),a=r(184),i=function(){return(0,a.jsx)("div",{className:"LoaderSection",children:(0,a.jsx)(t.rj,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0})})}},9257:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,a,i,s,u,c=r(5861),o=r(9439),p=r(4687),l=r.n(p),f=r(8183),d=r(7689),v=r(2791),h=r(6393),x=r(854),m=r(168),g=r(1087),b=r(3237),w=b.Z.button(t||(t=(0,m.Z)(["\n    display: block;\n    margin-bottom: 10px;\n"]))),Z=b.Z.img(a||(a=(0,m.Z)(["\n    width: 250px;\n    height: auto;\n    display: block;\n    margin-bottom: 5px;\n"]))),j=b.Z.div(i||(i=(0,m.Z)(["\n    display: flex;\n    border-bottom: 1px solid black;\n"]))),k=b.Z.div(s||(s=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),y=(0,b.Z)(g.OL)(u||(u=(0,m.Z)(["\n    margin-bottom: 5px;\n    &:visited,\n    &:link {\n        color: blue;\n    }\n"]))),_=r(184),S=function(){var n=(0,d.UO)().id,e=(0,d.TH)(),r=(0,d.s0)(),t=(0,v.useState)(null),a=(0,o.Z)(t,2),i=a[0],s=a[1],u=(0,v.useState)(!1),p=(0,o.Z)(u,2),m=p[0],g=p[1];if((0,v.useEffect)((function(){g(!0);var e=function(){var e=(0,c.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.TP)(n);case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),!i)return null;return(0,_.jsx)("div",{children:m?(0,_.jsx)(x.a,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(w,{type:"button",onClick:function(){r(e.state.from)},children:"Go back"}),(0,_.jsxs)(j,{children:[(0,_.jsx)(Z,{src:h.Y+i.poster_path,alt:i.title}),(0,_.jsxs)("div",{style:{padding:20},children:[(0,_.jsx)("h2",{children:i.title}),(0,_.jsxs)("p",{children:["User Score: ",10*i.vote_average,"%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:i.overview}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:i.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,_.jsxs)(k,{children:[(0,_.jsx)("h3",{children:"Aditional information"}),(0,_.jsx)(y,{to:"cast",state:{from:e.state.from},children:"Cast"}),(0,_.jsx)(y,{to:"reviews",state:{from:e.state.from},children:"Reviews"})]}),(0,_.jsx)(d.j3,{})]})})}},8183:function(n,e,r){r.d(e,{Df:function(){return c},M1:function(){return l},Ph:function(){return o},TP:function(){return p},q5:function(){return f}});var t=r(5861),a=r(4687),i=r.n(a),s=r(1912);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="30f8890b4b18c3650777b7120811d941",c=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/day?",{params:{api_key:u,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?&language=en-US&query=".concat(e,"&page=1&include_adult=false"),{params:{api_key:u,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"?&language=en-US"),{params:{api_key:u}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits?&language=en-US "),{params:{api_key:u}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews?&language=en-US "),{params:{api_key:u}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6393:function(n,e,r){r.d(e,{Y:function(){return t}});var t="https://image.tmdb.org/t/p/w400"}}]);
//# sourceMappingURL=257.c99ac48b.chunk.js.map