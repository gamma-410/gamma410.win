(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{235:function(t,e,o){var content=o(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(128).default)("167f1018",content,!0,{sourceMap:!1})},255:function(t,e,o){"use strict";o(235)},256:function(t,e,o){var r=o(127)(!1);r.push([t.i,'body{margin-top:50px;font-family:"Hiragino Kaku Gothic Pro",sans-serif;font-size:14px;padding:0;line-height:380%;font-size:15px;background-color:#fafafa}a,body{color:#353535}a{text-decoration:underline}h2:before{content:"# ";font-size:20px}h2:after{content:" .";font-size:20px}html{border-top:5px solid #4584a1}img{max-width:100%;max-height:100%}hr{border:0;height:1px;border-bottom-width:1px;border-bottom-style:dotted}h1{max-width:100%;padding-bottom:.4em;line-height:1.2;border-bottom-width:1px;border-bottom-style:solid}h1,h2,h3,h4,h5,h6{color:#3d6375;font-weight:700}h1{font-size:30px;padding-bottom:30px}h1,h2{font-weight:medium}h2{font-size:23px;padding-top:40px;padding-bottom:20px}h3{font-size:19px}h3,h4{font-weight:medium}h4{font-size:15px}h5{font-size:13px}h5,h6{font-weight:medium}h6{font-size:12px}.container-fluid{margin-right:auto;margin-left:auto;max-width:850px}body{display:flex;flex-flow:column;min-height:100vh}main{flex:1}@media (prefers-color-scheme:dark){html{border-top:5px solid #5589a1}body{color:#ddd;font-size:15px;background-color:#3a3a3a}h1,h2,h3,h4,h5,h6{color:#5589a1;font-weight:700}a{color:#ddd}}',""]),t.exports=r},260:function(t,e,o){"use strict";o.r(e);var r=o(9),n=(o(53),o(225)),f=o.n(n),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,e.next=3,f.a.get("https://moka.microcms.io/api/v1/dr-notes/".concat(o.slug),{headers:{"X-MICROCMS-API-KEY":"af1039ff-f613-47f8-a204-9e0019ae85fe"}});case 3:return r=e.sent,data=r.data,e.abrupt("return",data);case 6:case"end":return e.stop()}}),e)})))()}},l=(o(255),o(40)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),o("main",{staticClass:"main"},[o("p",{staticClass:"publishedAt"},[t._v(t._s(t.publishedAt))]),t._v(" "),o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"post",domProps:{innerHTML:t._s(t.body)}})]),t._v(" "),o("br"),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[t._v("topPageへ")]),o("br"),o("br")],1),t._v(" "),o("footer",{staticClass:"bg-dark text-center text-white"},[o("div",{staticClass:"text-center p-3",staticStyle:{"background-color":"#535353"}},[o("h2",{staticStyle:{color:"#ffffff"}}),t._v(" "),o("a",{staticStyle:{color:"#ffffff"},attrs:{href:"/"}},[t._v("topPageへ")]),o("br"),t._v(" "),o("nuxt-link",{staticStyle:{color:"#ffffff"},attrs:{to:"/about"}},[t._v("筆者について")]),o("br"),t._v(" "),o("nuxt-link",{staticStyle:{color:"#ffffff"},attrs:{to:"/feedback"}},[t._v("フィードバックを送信")]),o("br"),o("br"),t._v(" "),o("p",{staticStyle:{color:"#ffffff"}},[t._v("(c) 2022 | drip-notes. ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticStyle:{"line-height":"none","border-bottom-width":"0px"}},[e("img",{attrs:{src:"logo1.svg",width:"150px"}})])}],!1,null,null,null);e.default=component.exports}}]);