"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{55:function(n,t,e){e.d(t,{x:function(){return a}});var r,o=e(168),c=e(444),u=e(407),a=c.ZP.div(r||(r=(0,o.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),u.$_,u.Dh,u.bK,u.GQ,u.eC,u.Oq,u.Cg,u.FK,u.AF,u.cp)},815:function(n,t,e){e.d(t,{O:function(){return p}});var r,o=e(55),c=e(731),u=e(689),a=e(168),i=e(444).ZP.li(r||(r=(0,a.Z)(["\n    color: ",";\n    font-family: ",";\n    font-size: ","px;\n    padding-left: ","px;\n    margin-top: ","px;\n"])),(function(n){return n.theme.colors.linkColor}),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]})),s=e(184),f=function(n){var t=n.id,e=n.title,r=(0,u.TH)();return(0,s.jsx)(i,{children:(0,s.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,s.jsx)("p",{children:e})})})},p=function(n){var t=n.movies;return(0,s.jsx)(o.x,{as:"ul",children:t.map((function(n){var t=n.id,e=n.title;return(0,s.jsx)(f,{id:t,title:e},t)}))})}},842:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,o,c=e(982),u=e(885),a=e(55),i=e(791),s=e(731),f=e(409),p=e(562),l=e(168),d=e(444),h=d.ZP.input(r||(r=(0,l.Z)(["\n    font-family: ",";\n    font-size: ","px;\n    padding-top: 11px;\n    padding-bottom: 11px;\n    padding-left: 10px;\n    width: 20%;\n    height: 15px;\n    border: 1px solid lightGray;\n    border-radius: 4px;\n    margin-top: ","px;\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.space[3]})),m=d.ZP.button(o||(o=(0,l.Z)(["\n    color: ",";\n    font-family: ",";\n    font-family: ",";\n    font-size: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n    padding-top: ","px;\n    border-radius: ",";\n    border: 1px solid lightGray;\n    cursor: pointer;\n\n    :hover{\n        color: ",";\n        background-color: ",";\n    };\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),v=e(184),x=function(n){var t=n.onFormSubmit,e=(0,i.useState)(""),r=(0,u.Z)(e,2),o=r[0],c=r[1];return(0,v.jsxs)(a.x,{as:"form",onSubmit:function(n){n.preventDefault(),""===o.trim()&&p.Notify.info("Please enter a request!"),t(o),c("")},children:[(0,v.jsx)(h,{type:"text",placeholder:"Enter movie name",value:o,onChange:function(n){c(n.currentTarget.value)}}),(0,v.jsx)(m,{type:"submit",children:"Search"})]})},g=e(815),b=function(){var n,t=(0,i.useState)([]),e=(0,u.Z)(t,2),r=e[0],o=e[1],p=(0,s.lr)(),l=(0,u.Z)(p,2),d=l[0],h=l[1],m=null!==(n=d.get("query"))&&void 0!==n?n:"";(0,i.useEffect)((function(){m&&(0,f.V0)(m).then((function(n){o((function(t){return[].concat((0,c.Z)(t),(0,c.Z)(n))}))}))}),[m]);return(0,v.jsxs)(a.x,{children:[(0,v.jsx)("h2",{children:"Movies"}),(0,v.jsx)(x,{onFormSubmit:function(n){h({query:n})}}),r&&(0,v.jsx)(g.O,{movies:r})]})}},409:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return p},TP:function(){return f},V0:function(){return d},tx:function(){return l}});var r=e(861),o=e(757),c=e.n(o),u=e(44),a="4b55a17181d7341df65895a40b0e8946",i="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(i,"trending/movie/day?api_key=").concat(a));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(i,"movie/").concat(t,"?api_key=").concat(a));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(a));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(a));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(i,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=842.64f35248.chunk.js.map