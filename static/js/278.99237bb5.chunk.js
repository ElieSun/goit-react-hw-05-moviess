"use strict";(self.webpackChunkgoit_react_hw_05_moviess=self.webpackChunkgoit_react_hw_05_moviess||[]).push([[278],{854:function(e,t,n){n.d(t,{a:function(){return u}});var r=n(1523),a=n(184),u=function(){return(0,a.jsx)("div",{className:"LoaderSection",children:(0,a.jsx)(r.rj,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0})})}},4672:function(e,t,n){n.d(t,{O:function(){return x}});var r,a,u,c,i=n(7689),s=n(6393),o=n(8586),p=n(168),f=n(1087),l=n(3237),d=l.Z.ul(r||(r=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n"]))),v=l.Z.li(a||(a=(0,p.Z)(["\n    display: block;\n"]))),h=(0,l.Z)(f.OL)(u||(u=(0,p.Z)(["\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  &:hover,\n  &:focus {\n    color: #be7214;\n  }\n"]))),m=l.Z.img(c||(c=(0,p.Z)(["\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n  margin-bottom: 5px;\n"]))),g=n(184),x=function(e){var t=e.movies,n=(0,i.TH)();return(0,g.jsx)(d,{children:t.map((function(e){var t=e.id,r=e.title,a=e.poster_path,u=e.release_date;return(0,g.jsx)(v,{children:(0,g.jsxs)(h,{to:"/movies/".concat(t),state:{from:n},children:[(0,g.jsx)(m,{src:a?s.Y+a:o,alt:r}),(0,g.jsxs)("p",{children:[r,"(",u.slice(0,4),")"]})]})},t)}))})}},9278:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),u=n(4687),c=n.n(u),i=n(2791),s=n(1087),o=n(8183),p=n(4672),f=n(854),l=n(184);t.default=function(){var e=(0,i.useState)(" "),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,i.useState)([]),v=(0,a.Z)(d,2),h=v[0],m=v[1],g=(0,i.useState)(!1),x=(0,a.Z)(g,2),b=x[0],w=x[1],Z=(0,s.lr)(),y=(0,a.Z)(Z,2),k=y[0],j=y[1];(0,i.useEffect)((function(){var e=k.get("query");if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Ph)(e.trim().toLowerCase());case 3:if((n=t.sent).length){t.next=6;break}throw new Error("Bad Query");case 6:m(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:return t.prev=12,w(!1),u(e.trim().toLowerCase()),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[0,9,12,16]])})));return function(){return t.apply(this,arguments)}}();t()}}),[k]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(!0),j({query:n})},children:[(0,l.jsx)("input",{type:"text",name:"query",value:n,onChange:function(e){u(e.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),b&&(0,l.jsx)(f.a,{}),(0,l.jsx)(p.O,{movies:h})]})}},8183:function(e,t,n){n.d(t,{Df:function(){return s},M1:function(){return f},Ph:function(){return o},TP:function(){return p},q5:function(){return l}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="30f8890b4b18c3650777b7120811d941",s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?",{params:{api_key:i,page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?&language=en-US&query=".concat(t,"&page=1&include_adult=false"),{params:{api_key:i,page:1}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?&language=en-US"),{params:{api_key:i}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?&language=en-US "),{params:{api_key:i}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?&language=en-US "),{params:{api_key:i}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6393:function(e,t,n){n.d(t,{Y:function(){return r}});var r="https://image.tmdb.org/t/p/w400"},8586:function(e,t,n){e.exports=n.p+"static/media/placeholder.c621699b04d9ed2896e8.webp"}}]);
//# sourceMappingURL=278.99237bb5.chunk.js.map