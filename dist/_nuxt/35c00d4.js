(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{235:function(t,e,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(128).default)("15a0faba",content,!0,{sourceMap:!1})},257:function(t,e,o){"use strict";o(235)},258:function(t,e,o){var n=o(127)(!1);n.push([t.i,'body{margin-top:10px;font-family:"Jost",sans-serif,"Noto Sans JP";font-size:14px;line-height:380%;color:#353535;font-size:15px;background-color:#ececec}.letter-pack{letter-spacing:1px}a{color:#353535;padding:.3em .3em .3em 0;background-image:linear-gradient(90deg,transparent 50%,#ff8b60 0);background-position:0 0;background-size:200% auto;transition:.3s}a:hover{background-position:-100% 0;color:#f6f6f6;text-decoration:none}html{border-top:1px solid #202020;font-family:"Jost",sans-serif,"Noto Sans JP"}img{max-width:100%;max-height:100%}hr{border:0;height:1px;border-bottom-width:1px;border-bottom-style:dotted}.logo{max-width:100%;padding-bottom:.4em;line-height:1.2;border-bottom:1px solid #d4d4d4;margin-top:120px;-webkit-animation:text-in .8s cubic-bezier(.22,.15,.25,1.43) .1s backwards;animation:text-in .8s cubic-bezier(.22,.15,.25,1.43) .1s backwards}.name{margin-top:50px;margin-bottom:30px;font-size:36px}h2,h3,h4,h5,h6{color:#292929;font-weight:700}h1{font-size:25px}h1,h2{font-weight:medium}h2{font-size:23px;padding-top:40px;padding-bottom:20px}h3{font-size:19px}h3,h4{font-weight:medium}h4{font-size:15px}h5{font-size:13px}h5,h6{font-weight:medium}h6{font-size:12px}body{display:flex;flex-flow:column;min-height:100vh}main{flex:1}.container-fluid{margin-right:auto;margin-left:auto;max-width:730px}.sub-name{margin-bottom:40px;color:#7a7a7a}.main{margin-top:60px;margin-bottom:180px;-webkit-animation:text-in .8s cubic-bezier(.22,.15,.25,1.43) .3s backwards;animation:text-in .8s cubic-bezier(.22,.15,.25,1.43) .3s backwards}.text-notes{margin-top:35px}.nuxtlink{font-size:25px;font-weight:medium;padding:0;margin-top:30px;text-decoration:none}.sub-title{padding-left:.5em;padding-bottom:10px;margin:0;color:#7a7a7a;line-height:15px}.foots{background-color:#2d2d2d;-webkit-animation:text-in .8s cubic-bezier(.22,.15,.25,1.43) .6s backwards;animation:text-in .8s cubic-bezier(.22,.15,.25,1.43) .6s backwards}ul{line-height:40px;list-style-type:square}.bgs{border-radius:25px;border:none;margin-top:20px}@media (prefers-color-scheme:dark){html{border-top:1px solid #cdcdcd}body{color:#ddd;font-size:15px;background-color:#1b1b1b}h2,h3,h4,h5,h6{color:#f5f5f5;font-weight:700}a{color:#ddd}.sub-name{color:#969696}a{color:#f6f6f6;padding:.3em .3em .3em 0;background-image:linear-gradient(90deg,transparent 50%,#7f9cd6 0);background-position:0 0;background-size:200% auto;transition:.3s}a,a:hover{text-decoration:none}a:hover{background-position:-100% 0;color:#3a3a3a}.logo{max-width:100%;padding-bottom:.4em;line-height:1.2;border-bottom:1px solid #494949;margin-top:120px}.foots{background-color:#0d0d0d}.bgs{background:#373737}}@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(https://example.com/MaterialIcons-Regular.eot);src:local("Material Icons"),local("MaterialIcons-Regular"),url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),url(https://example.com/MaterialIcons-Regular.woff) format("woff"),url(https://example.com/MaterialIcons-Regular.ttf) format("truetype")}.material-icon{font-family:"Material Icons";font-weight:400;font-style:normal;font-size:5px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.fadeUp{-webkit-animation-name:fadeUpAnime;animation-name:fadeUpAnime;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:1}@-webkit-keyframes text-in{0%{transform:translateY(-20px);opacity:0}}@keyframes text-in{0%{transform:translateY(-20px);opacity:0}}',""]),t.exports=n},263:function(t,e,o){"use strict";o.r(e);var n=o(9),r=(o(53),o(226)),c=o.n(r),l={asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://moka.microcms.io/api/v1/blog",{headers:{"X-MICROCMS-API-KEY":"af1039ff-f613-47f8-a204-9e0019ae85fe"}});case 2:return e=t.sent,data=e.data,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})))()}},d=(o(257),o(40)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),o("div",{staticClass:"main"},[o("div",{staticClass:"text-notes"},t._l(t.contents,(function(content){return o("div",{key:content.id,staticClass:"card-deck"},[o("div",{staticClass:"card bgs"},[o("div",{staticClass:"card-body"},[o("h3",{staticClass:"card-title"},[t._v(t._s(content.title))]),t._v(" "),o("nuxt-link",{attrs:{to:"/"+content.id}},[t._v(" "),o("u",[t._v("Read")]),t._v(" "),o("span",{staticClass:"material-icon"},[t._v("arrow_forward_ios")])]),t._v(" "),t._m(1,!0)],1)])])})),0),o("br"),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[t._v(" "),o("u",[t._v("Return to the index page")])])],1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo"},[o("img",{attrs:{src:"logo1.svg",width:"85px"}}),t._v(" "),o("h1",{staticClass:"name fadeUp"},[o("b",[t._v("dripLog")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"card-text"},[o("small",{staticClass:"text-muted"},[t._v("Writer: @gamma_410")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"text-center text-white"},[o("div",{staticClass:"text-center p-3 foots"},[o("br"),o("br"),t._v(" "),o("img",{attrs:{src:"logo1.svg",width:"40px"}}),o("br"),t._v(" "),o("p",{staticStyle:{color:"#ffffff"}},[t._v("© 2022  dr-notes.work ")])])])}],!1,null,null,null);e.default=component.exports}}]);