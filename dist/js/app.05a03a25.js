(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"005f":function(t,e,i){"use strict";i("0745")},"0172":function(t,e,i){"use strict";i("4f5e")},"05f4":function(t,e,i){"use strict";i("545d")},"0745":function(t,e,i){},"0830":function(t,e,i){},1337:function(t,e,i){},"266b":function(t,e,i){"use strict";i("ce06")},2883:function(t,e,i){},"2d86":function(t,e,i){},"2eee":function(t,e,i){"use strict";i("805e")},"2f8f":function(t,e,i){"use strict";i("c0e6")},"3db4":function(t,e,i){},"3f53":function(t,e,i){"use strict";i("2d86")},4087:function(t,e,i){},"4f5e":function(t,e,i){},5414:function(t,e,i){},"545d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",{attrs:{exclude:"Detail"}},[i("router-view")],1)],1)},a=[],r={name:"App"},o=r,c=i("2877"),l=Object(c["a"])(o,s,a,!1,null,null,null),u=l.exports,d=i("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("home-header"),i("home-swiper",{attrs:{list:t.swiperList}}),i("home-icons",{attrs:{list:t.iconList}}),i("home-recommend",{attrs:{list:t.recommendList}}),i("home-weekend",{attrs:{list:t.weekendList}})],1)])},h=[],m=i("5530"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._m(1),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[i("span",[t._v(t._s(this.$store.state.city))]),i("span",{staticClass:"iconfont arrow-ico"},[t._v("")])])])],1)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left"},[i("span",{staticClass:"iconfont back-ico"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" 输入城市/景点/游玩主题 ")])}],y={name:"HomeHeader"},b=y,C=(i("3f53"),Object(c["a"])(b,p,v,!1,null,"78ac6efc",null)),g=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSwiper?i("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.list,(function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},w=[],k={props:{list:Array},name:"HomeSwiper",data:function(){return{swiperOptions:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},O=k,x=(i("edfe"),Object(c["a"])(O,_,w,!1,null,"044dd68a",null)),S=x.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{staticClass:"icon-swiper",attrs:{options:t.swiperOption}},t._l(t.pages,(function(e){return i("swiper-slide",{key:e.pageId},t._l(e.pageIcons,(function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img-wrapper"},[i("img",{staticClass:"icon-img",attrs:{src:e.iconUrl}})]),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.iconDesc))])])})),0)})),1)],1)},$=[],j=(i("4160"),i("159b"),{props:{list:Array},name:"HomeIcons",data:function(){return{swiperOption:{}}},computed:{pages:function(){var t=[];return this.list.forEach((function(e,i){var n=Math.floor(i/8);t[n]||(t[n]={pageIcons:[],pageId:n}),t[n].pageIcons.push(e)})),t}}}),E=j,L=(i("56e4"),Object(c["a"])(E,I,$,!1,null,"3b7d5e39",null)),H=L.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"title"},[t._v("热销推荐")]),i("ul",t._l(t.list,(function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])})),1)])},A=[],D={props:{list:Array},name:"HomeRecommend",data:function(){return{}}},N=D,G=(i("2eee"),Object(c["a"])(N,T,A,!1,null,"2a63387e",null)),M=G.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"item"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))],2)},B=[],Y={props:{list:Array},name:"HomeWeekend",data:function(){return{}}},F=Y,U=(i("05f4"),Object(c["a"])(F,P,B,!1,null,"7a6547d4",null)),J=U.exports,R=i("bc3a"),W=i.n(R),q=i("2f62"),z={name:"Home",components:{HomeHeader:g,HomeSwiper:S,HomeIcons:H,HomeRecommend:M,HomeWeekend:J},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:Object(m["a"])({},Object(q["b"])(["city"])),methods:{getHomeInfo:function(){W.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},K=z,Q=Object(c["a"])(K,f,h,!1,null,"12bf2108",null),V=Q.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),i("city-search",{attrs:{cities:t.cities}}),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},Z=[],tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"header-left"},[i("router-link",{attrs:{to:"/"}},[i("span",{staticClass:"iconfont back-ico"},[t._v("")])])],1),i("span",[t._v("城市选择")])])},et=[],it={name:"CityHeader"},nt=it,st=(i("a0fe"),Object(c["a"])(nt,tt,et,!1,null,"3e3cfee7",null)),at=st.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,(function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v(" 没有找到匹配数据 ")])],2)])])},ot=[],ct=(i("4795"),i("c975"),i("b0c0"),i("ac1f"),i("841c"),i("f40f")),lt={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout((function(e){var i=[];for(var n in t.cities)t.cities[n].forEach((function(e){(e.spell.indexOf(t.keyword)>-1||e.name.indexOf(t.keyword)>-1)&&i.push(e)}));t.list=i}),100):this.list=[]}},methods:{handleCityClick:function(t){this.$store.commit("changeCity",t),this.$router.push("/")},initScroll:function(){this.bs=new ct["a"](this.$refs.search,{probeType:3,click:!0})}},mounted:function(){var t=this;this.$nextTick((function(){t.initScroll()}))},updated:function(){this.bs.refresh()}},ut=lt,dt=(i("2f8f"),Object(c["a"])(ut,rt,ot,!1,null,"432dcd2a",null)),ft=dt.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",{ref:"content",attrs:{id:"content"}},[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])])]),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),i("div",{staticClass:"button-list"},t._l(t.hot,(function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])})),0)]),t._l(t.cities,(function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),i("div",{staticClass:"item-list"},t._l(e,(function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),0)])}))],2)])},mt=[],pt={props:{cities:Object,hot:Array,letter:String},name:"CityList",data:function(){return{}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.bs.scrollToElement(t)}}},methods:{handleCityClick:function(t){this.$store.commit("changeCity",t),this.$router.push("/")},initScroll:function(){this.bs=new ct["a"](this.$refs.wrapper,{probeType:3,click:!0,observeDOM:!0})}},mounted:function(){this.initScroll()},activated:function(){this.bs.refresh()}},vt=pt,yt=(i("d2d9"),Object(c["a"])(vt,ht,mt,!1,null,"5ce26998",null)),bt=yt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,(function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:t.handleTouchStart,touchmove:function(e){return e.preventDefault(),t.handleTouchMove.apply(null,arguments)},touchend:t.handleTouchEnd}},[t._v(" "+t._s(e)+" ")])})),0)},gt=[],_t={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs["A"][0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){var i=t.touches[0].clientY-79,n=Math.floor((i-e.startY)/20);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])}),8))},handleTouchEnd:function(){this.touchStatus=!1}}},wt=_t,kt=(i("b4f3"),Object(c["a"])(wt,Ct,gt,!1,null,"032f4bdb",null)),Ot=kt.exports,xt={name:"City",components:{CityHeader:at,CitySearch:ft,CityList:bt,CityAlphabet:Ot},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){W.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},St=xt,It=Object(c["a"])(St,X,Z,!1,null,"1cc9c019",null),$t=It.exports,jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,gallaryImgs:t.gallaryImgs}}),i("detail-header"),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1)],1)},Et=[],Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v(" "+t._s(t.gallaryImgs.length))])])])]),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{gallaryImgs:t.gallaryImgs},on:{close:t.handleGallaryClose}},[t._v("gallary")])],1)],1)},Ht=[],Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{click:t.handleGallaryClick}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.gallaryImgs,(function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"gallary-img",attrs:{src:t}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},At=[],Dt={name:"CommonGallary",props:{gallaryImgs:Array},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},Nt=Dt,Gt=(i("266b"),Object(c["a"])(Nt,Tt,At,!1,null,"08d42413",null)),Mt=Gt.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[t._t("default")],2)},Bt=[],Yt={name:"FadeAnimation"},Ft=Yt,Ut=(i("0172"),Object(c["a"])(Ft,Pt,Bt,!1,null,"76822556",null)),Jt=Ut.exports,Rt={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},components:{CommonGallary:Mt,FadeAnimation:Jt},methods:{handleGallaryClose:function(){this.showGallary=!1},handleBannerClick:function(){this.showGallary=!0}}},Wt=Rt,qt=(i("a16b"),Object(c["a"])(Wt,Lt,Ht,!1,null,"646919fb",null)),zt=qt.exports,Kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{to:"/"}},[i("span",{staticClass:"iconfont header-abs-back"},[t._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{attrs:{to:"/"}},[i("span",{staticClass:"iconfont header-fixed-back"},[t._v("")])]),t._v(" 景点详情 ")],1)],1)},Qt=[],Vt={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Xt=Vt,Zt=(i("c2bc"),Object(c["a"])(Xt,Kt,Qt,!1,null,"dbe203f6",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v(" "+t._s(e.title)+" ")]),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])})),0)},ie=[],ne={name:"DetailList",props:{list:Array}},se=ne,ae=(i("b1b6"),Object(c["a"])(se,ee,ie,!1,null,"4073ae14",null)),re=ae.exports,oe={name:"Detail",components:{DetailBanner:zt,DetailHeader:te,DetailList:re},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){W.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDetailSucc)},handleGetDetailSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},ce=oe,le=(i("005f"),Object(c["a"])(ce,jt,Et,!1,null,"e6857576",null)),ue=le.exports;n["a"].use(d["a"]);var de=[{path:"/",name:"Home",component:V},{path:"/city",name:"City",component:$t},{path:"/detail/:id",name:"Detail",component:ue}],fe=new d["a"]({routes:de,scrollBehavior:function(t,e,i){return{x:0,y:0}}}),he=d["a"].prototype.push;d["a"].prototype.push=function(t){return he.call(this,t)["catch"]((function(t){return t}))};var me=fe;n["a"].use(q["a"]);var pe="上海";try{localStorage.city&&(pe=localStorage.city)}catch(Ce){}var ve=new q["a"].Store({state:{city:pe},mutations:{changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(Ce){}}}}),ye=i("1f80"),be=i.n(ye);i("3db4"),i("c8f4"),i("5414"),i("dfa4");n["a"].config.productionTip=!1,n["a"].use(be.a),new n["a"]({router:me,store:ve,render:function(t){return t(u)}}).$mount("#app")},"56e4":function(t,e,i){"use strict";i("9543")},"805e":function(t,e,i){},9543:function(t,e,i){},a0fe:function(t,e,i){"use strict";i("2883")},a16b:function(t,e,i){"use strict";i("a98c")},a98c:function(t,e,i){},b1b6:function(t,e,i){"use strict";i("1337")},b4f3:function(t,e,i){"use strict";i("ce37")},bc94:function(t,e,i){},c0e6:function(t,e,i){},c2bc:function(t,e,i){"use strict";i("4087")},c8f4:function(t,e,i){},ce06:function(t,e,i){},ce37:function(t,e,i){},d2d9:function(t,e,i){"use strict";i("bc94")},edfe:function(t,e,i){"use strict";i("0830")}});
//# sourceMappingURL=app.05a03a25.js.map