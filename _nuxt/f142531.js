(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{266:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("bad8e090",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n.r(e);var r={props:{article:Object}},l=n(21),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"transition-all duration-500 ease-in-out"},[n("a",{attrs:{href:"/blog/"+t.article.slug}},[n("nuxt-img",{staticClass:"rounded-lg",attrs:{src:t.article.img,preset:"preview",width:"400",height:"300"}}),t._v(" "),t.article.tags?n("ul",{staticClass:"flex space-x-3 mt-2"},t._l(t.article.tags,(function(e){return n("li",{key:e,staticClass:"text-gray-400 font-bold"},[t._v("\n        "+t._s(e)+"\n      ")])})),0):t._e(),t._v(" "),n("h2",{staticClass:"mt-2 text-3xl font-semibold"},[t._v(t._s(t.article.title))])],1)])}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n(266)},273:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}",""]),r.locals={},t.exports=r},292:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(42),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()}}),c=(n(272),n(21)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-24 p-24"},[n("h1",{staticClass:"text-7xl font-black text-center"},[t._v("New on the blog")]),t._v(" "),n("ul",{staticClass:"grid grid-cols-3 gap-8 mt-8"},t._l(t.articles,(function(article){return n("ArticlePreview",{key:article.slug,attrs:{article:article}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticlePreview:n(267).default})}}]);