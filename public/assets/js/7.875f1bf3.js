(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{125:function(t,e,n){var i=n(8),r=n(26),s=n(9);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*s((function(){n(1)})),"Object",a)}},126:function(t,e,n){"use strict";n(127)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},127:function(t,e,n){var i=n(8),r=n(9),s=n(14),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},130:function(t,e,n){"use strict";var i=n(40);n.n(i).a},131:function(t,e,n){"use strict";var i=n(41);n.n(i).a},132:function(t,e,n){t.exports=n(133)},133:function(t,e,n){n(92),n(67),t.exports=n(134)},134:function(t,e,n){var i=n(33),r=n(114);t.exports=n(25).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},136:function(t,e,n){"use strict";var i=n(42);n.n(i).a},137:function(t,e,n){"use strict";n(78)("trim",(function(t){return function(){return t(this,3)}}))},138:function(t,e,n){"use strict";var i=n(43);n.n(i).a},139:function(t,e,n){var i=n(11),r=n(102),s=n(17).f,a=n(80).f,o=n(75),u=n(73),l=i.RegExp,c=l,f=l.prototype,h=/a/g,p=/a/g,d=new l(h)!==h;if(n(13)&&(!d||n(9)((function(){return p[n(10)("match")]=!1,l(h)!=h||l(p)==p||"/a/i"!=l(h,"i")})))){l=function(t,e){var n=this instanceof l,i=o(t),s=void 0===e;return!n&&i&&t.constructor===l&&s?t:r(d?new c(i&&!s?t.source:t,e):c((i=t instanceof l)?t.source:t,i&&s?u.call(t):e),n?this:f,l)};for(var g=function(t){t in l||s(l,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},v=a(c),m=0;v.length>m;)g(v[m++]);f.constructor=l,l.prototype=f,n(18)(i,"RegExp",l)}n(140)("RegExp")},141:function(t,e,n){"use strict";var i=n(44);n.n(i).a},142:function(t,e,n){"use strict";var i=n(45);n.n(i).a},143:function(t,e,n){"use strict";var i=n(46);n.n(i).a},144:function(t,e,n){"use strict";var i=n(47);n.n(i).a},145:function(t,e,n){"use strict";var i=n(48);n.n(i).a},146:function(t,e,n){"use strict";var i=n(49);n.n(i).a},147:function(t,e,n){"use strict";var i=n(50);n.n(i).a},148:function(t,e,n){"use strict";var i=n(51);n.n(i).a},149:function(t,e,n){"use strict";var i=n(52);n.n(i).a},158:function(t,e,n){},16:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"k",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"i",(function(){return c})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"l",(function(){return b}));n(74),n(99),n(100),n(20),n(72),n(39),n(101),n(76),n(29);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^(https?:|mailto:|tel:)/,o=/(\.xml)/;function u(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return a.test(t)}function c(t){return o.test(t)}function f(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",r=u(t);return s.test(r)||c(r)?t:r+".html"+n}function d(t,e){var n=t.hash,r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&u(t.path)===u(e)}function g(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=u(e),r=0;r<t.length;r++)if(u(t[r].path)===i)return Object.assign({},t[r],{type:"page",path:p(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||s.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t.path,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),l=u.base,c=u.config;return c?c.map((function(t){return function t(e,n,i,r){if("string"==typeof e)return g(n,e,i);if(Array.isArray(e))return Object.assign(g(n,e[0],i),{title:e[1]});r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[];return{type:"group",title:e.title,children:s.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},166:function(t,e,n){"use strict";n(130),n(131);var i=n(1),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,s=n(103),a=n.n(s);var o=n(132),u=n.n(o),l=n(115),c=n.n(l);function f(t,e){return function(t){if(a()(t))return t}(t)||function(t,e){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=u()(t);!(i=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(20),n(135);var h={props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){Promise.all([Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,258,7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,259,7))]).then((function(n){var i=f(n,1)[0];i=i.default;var r=t.algoliaOptions,s=void 0===r?{}:r;i(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(s.facetFilters||[])},s)}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}},p=(n(136),Object(i.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null).exports),d=(n(74),n(137),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site,n=e.pages,i=e.themeConfig.searchMaxSuggestions||5,r=this.$localePath,s=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},a=[],o=0;o<n.length&&!(a.length>=i);o++){var u=n[o];if(this.getPageLocalePath(u)===r)if(s(u))a.push(u);else if(u.headers)for(var l=0;l<u.headers.length&&!(a.length>=i);l++){var c=u.headers[l];s(c)&&a.push(Object.assign({},u,{path:u.path+"#"+c.slug,header:c}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),g=(n(138),Object(i.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,"2e51bff4",null).exports);function v(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:r,NavLinks:n(83).a,SearchBox:g,AlgoliaSearchBox:p},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(v(this.$el,"paddingLeft"))+parseInt(v(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},b=(n(145),Object(i.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,"e96c6d68",null));e.a=b.exports},167:function(t,e,n){"use strict";n(24),n(39);var i=n(16);function r(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function s(t,e,n,a,o){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||u>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[r(t,n+"#"+e.slug,e.title,l),s(t,e.children,n,a,o,u+1)])})))}var a={functional:!0,props:["item"],render:function(t,e){var n=e.parent,a=n.$page,o=n.$site,u=n.$route,l=e.props.item,c=Object(i.e)(u,l.path),f="auto"===l.type?c||l.children.some((function(t){return Object(i.e)(u,l.basePath+"#"+t.slug)})):c,h=r(t,l.path,l.title||l.path,f),p=null!=a.frontmatter.sidebarDepth?a.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,d=null==p?1:p,g=!!o.themeConfig.displayAllHeaders;return"auto"===l.type?[h,s(t,l.children,l.basePath,u,d)]:(f||g)&&l.headers&&!i.d.test(l.path)?[h,s(t,Object(i.c)(l.headers),l.path,u,d)]:h}},o=(n(146),n(147),n(1)),u=Object(o.a)(a,void 0,void 0,!1,null,null,null).exports,l={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:u,DropdownTransition:n(84).a}};n(148);var c={components:{SidebarGroup:Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null).exports,SidebarLink:u,NavLinks:n(83).a},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some((function(e){return Object(i.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.path)}}},f=(n(149),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("h2",{staticClass:"site-title"},[t._v("Pixels & Bits – Kamicrafted Blog")]),t._v(" "),n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=f.exports},24:function(t,e,n){"use strict";var i=n(8),r=n(38)(3);i(i.P+i.F*!n(23)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},245:function(t,e,n){"use strict";var i=n(158);n.n(i).a},261:function(t,e,n){"use strict";n.r(e);var i=n(166),r=n(167),s=n(16),a=["There's nothing here.","How did we get here? 🤔","Yikes, that's not supposed to happen.","That's a Four-Oh-Four.","Looks like we've got some broken links."],o={components:{Sidebar:r.a,Navbar:i.a},data:function(){return{isSidebarOpen:!1,swUpdateEvent:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(s.n)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){},methods:{getMsg:function(){return a[Math.floor(Math.random()*a.length)]},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onSWUpdated:function(t){this.swUpdateEvent=t}}},u=(n(245),n(1)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container view-error",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"message"},[n("h1",{staticClass:"headline"},[t._v("Page not found")]),t._v(" "),n("p",[t._v(t._s(t.getMsg()))]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Return home")])],1)])],1)}),[],!1,null,null,null);e.default=l.exports},29:function(t,e,n){"use strict";var i=n(12),r=n(28),s=n(22),a=n(31),o=n(59),u=n(60),l=Math.max,c=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(61)("replace",2,(function(t,e,n,d){return[function(i,r){var s=t(this),a=null==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var f=i(t),h=String(this),p="function"==typeof e;p||(e=String(e));var v=f.global;if(v){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var k=u(f,h);if(null===k)break;if(b.push(k),!v)break;""===String(k[0])&&(f.lastIndex=o(h,s(f.lastIndex),m))}for(var x,_="",$=0,w=0;w<b.length;w++){k=b[w];for(var C=String(k[0]),y=l(c(a(k.index),h.length),0),S=[],O=1;O<k.length;O++)S.push(void 0===(x=k[O])?x:String(x));var L=k.groups;if(p){var j=[C].concat(S,y,h);void 0!==L&&j.push(L);var I=String(e.apply(void 0,j))}else I=g(C,h,y,S,L,e);y>=$&&(_+=h.slice($,y)+I,$=y+C.length)}return _+h.slice($)}];function g(t,e,i,s,a,o){var u=i+t.length,l=s.length,c=p;return void 0!==a&&(a=r(a),c=h),n.call(o,c,(function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(u);case"<":o=a[r.slice(1,-1)];break;default:var c=+r;if(0===c)return n;if(c>l){var h=f(c/10);return 0===h?n:h<=l?void 0===s[h-1]?r.charAt(1):s[h-1]+r.charAt(1):n}o=s[c-1]}return void 0===o?"":o}))}}))},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},63:function(t,e,n){"use strict";n(20),n(77),n(24),n(126);var i=n(16),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h,isXml:i.i}},s=n(1),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)||t.isXml(t.link)?t.isXml(t.link)?n("a",{staticClass:"nav-link",attrs:{href:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.a=a.exports},72:function(t,e,n){"use strict";var i=n(8),r=n(38)(0),s=n(23)([].forEach,!0);i(i.P+i.F*!s,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},74:function(t,e,n){"use strict";var i=n(8),r=n(70)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(23)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},76:function(t,e,n){"use strict";var i=n(12),r=n(22),s=n(59),a=n(60);n(61)("match",1,(function(t,e,n,o){return[function(n){var i=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=i(t),l=String(this);if(!u.global)return a(u,l);var c=u.unicode;u.lastIndex=0;for(var f,h=[],p=0;null!==(f=a(u,l));){var d=String(f[0]);h[p]=d,""===d&&(u.lastIndex=s(l,r(u.lastIndex),c)),p++}return 0===p?null:h}]}))},77:function(t,e,n){var i=n(28),r=n(95);n(125)("keys",(function(){return function(t){return r(i(t))}}))},78:function(t,e,n){var i=n(8),r=n(14),s=n(9),a=n(79),o="["+a+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),c=function(t,e,n){var r={},o=s((function(){return!!a[t]()||"​"!="​"[t]()})),u=r[t]=o?e(f):a[t];n&&(r[n]=u),i(i.P+i.F*o,"String",r)},f=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},79:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},80:function(t,e,n){var i=n(96),r=n(71).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},83:function(t,e,n){"use strict";n(139),n(76);var i=n(85),r=(n(24),n(29),n(39),n(20),n(77),n(63)),s=n(84),a={components:{NavLink:r.a,DropdownTransition:s.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},o=(n(142),n(143),n(1)),u=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports,l=n(16),c={components:{NavLink:r.a,DropdownLink:u},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(i){var a,o=e[i],u=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===a}))||(a=i)),{text:u,link:a}}))};return[].concat(Object(i.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(l.l)(t),{items:(t.items||[]).map(l.l)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},f=(n(144),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,"0374d5f0",null));e.a=f.exports},84:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(141),n(1)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports}}]);