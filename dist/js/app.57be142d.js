(function(t){function e(e){for(var s,i,c=e[0],o=e[1],d=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("weather")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__wrapper"},[a("div",{staticClass:"page__title"},[t._v("World Weather")]),t.currentLocation?a("div",{staticClass:"card__wrapper_current_location_inner"},[t._m(0),a("div",{staticClass:"card__wrapper_current_location"},[a("div",{staticClass:"card__wrapper_title"},[a("span",{staticClass:"card__city"},[t._v(t._s(t.currentLocation.name)+", "+t._s(t.currentLocation.country))]),a("span",{staticClass:"card__subtitle"},[t._v("Your current location")])]),a("div",{staticClass:"card__wrapper_info"},[a("span",[t._v("Weather")]),a("span",[t._v(t._s(t.currentLocation.weather))])]),a("div",{staticClass:"card__wrapper_info"},[a("span",[t._v("Temperature")]),a("span",[t._v(" "+t._s(t.currentLocation.temp)+" °C ")])]),a("div",{staticClass:"card__wrapper_info"},[a("span",[t._v("Humidity")]),a("span",[t._v(t._s(t.currentLocation.humidity)+" %")])]),a("div",{staticClass:"card__time_ago"},[a("span",[t._v(" "+t._s(t.currentLocation.fromNow)+" ")])]),a("div",{staticClass:"card__wrapper_btn"},[a("button",{staticClass:"card__remove"}),a("button",{staticClass:"card__reload",on:{click:function(e){return t.updateTimeAgo(t.currentLocation)}}},[t._v("RELOAD")])])])]):t._e(),a("div",{staticClass:"card__wrapper_outer"},t._l(t.cityList,(function(e,s){return a("div",{key:s,staticClass:"card__wrapper_inner"},[a("div",{staticClass:"card__wrapper_title"},[a("span",{staticClass:"card__city"},[t._v(t._s(e.name))]),a("span",{staticClass:"card__subtitle"},[t._v(t._s(e.country))])]),a("div",{staticClass:"card__wrapper_info"},[a("span",[t._v("Weather")]),a("span",[t._v(t._s(e.weather))])]),a("div",{staticClass:"card__wrapper_info"},[a("span",[t._v("Temperature")]),a("span",[t._v(" "+t._s(e.temp)+" °C ")])]),a("div",{staticClass:"card__wrapper_info"},[a("span",[t._v("Humidity")]),a("span",[t._v(t._s(e.humidity)+" %")])]),a("div",{staticClass:"card__time_ago"},[a("span",[t._v(" "+t._s(e.fromNow)+" ")])]),a("div",{staticClass:"card__wrapper_btn"},[a("button",{staticClass:"card__remove",on:{click:function(e){return t.remove(s)}}},[t._v("REMOVE")]),a("button",{staticClass:"card__reload",on:{click:function(a){return t.updateTimeAgo(e)}}},[t._v("RELOAD")])])])})),0),[a("button",{staticClass:"page__add",on:{click:function(e){t.showModal=!0}}},[t._v("+")]),t.showModal?a("transition",[a("div",{staticClass:"modal__mask"},[a("div",{staticClass:"modal__wrapper"},[a("div",{staticClass:"modal__container"},[a("div",{staticClass:"modal__header"},[a("span",{staticClass:"modal__header_title"},[t._v(" Choose a city ")]),a("span",{staticClass:"modal__header_subtitle"},[t._v(" To find city start typing ")])]),a("div",{staticClass:"modal__body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.city.$model,expression:"$v.city.$model"}],attrs:{cols:"40",rows:"1",type:"text",placeholder:"Search city"},domProps:{value:t.$v.city.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.city,"$model",e.target.value)}}}),!t.$v.city.required&&t.$v.city.$error?a("div",{staticClass:"input__error"},[t._v("Enter a city")]):t._e(),t.error?a("div",{staticClass:"input__error"},[t._v(t._s(t.error))]):t._e()]),a("div",[a("button",{staticClass:"modal__btn_add",attrs:{disabled:""===t.$v.city.$model},on:{click:function(e){return t.add()}}},[t._v("ADD")]),a("button",{staticClass:"modal__btn_cancel",on:{click:function(e){return t.cancel()}}},[t._v("CANCEL")]),a("button",{staticClass:"modal__btn_clear",attrs:{disabled:""===t.$v.city.$model},on:{click:function(e){t.$v.city.$model=""}}},[t._v("CLEAR")])])])])])]):t._e()]],2)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card__title"},[a("span",[t._v("Watch weather in your current location")])])}],o=(a("c740"),a("a434"),a("d81d"),a("e9c4"),a("d3b7"),a("159b"),a("b5ae")),d=a("1da1"),u=(a("96cf"),a("b0c0"),a("25f0"),a("3ca3"),a("ddb0"),a("9861"),a("c1df")),l=a.n(u),f="4fe24e64144b4d92545e1c9c08b6c7d0",p="https://api.openweathermap.org/data/2.5/weather?";function _(t){return b.apply(this,arguments)}function b(){return b=Object(d["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={appid:f},"string"===typeof e?a.q=e:"number"===typeof e?a.id=e:(a.lat=e.latitude,a.lon=e.longitude),a=new URLSearchParams(a).toString(),t.next=5,fetch(p+a);case 5:if(s=t.sent,!s.ok){t.next=8;break}return t.abrupt("return",s.json());case 8:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function j(t){return m.apply(this,arguments)}function m(){return m=Object(d["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_(e).then((function(t){return h(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function h(t){return{country:t.sys.country,dt:l()().subtract(1,"s"),fromNow:l()().fromNow(),humidity:t.main.humidity,id:t.id,name:t.name,temp:v(t.main.temp),weather:t.weather[0].main}}function v(t){return Math.round(t-273.15)}var y={name:"weather",data:function(){return{city:"",cityList:[],currentLocation:null,error:"",showModal:!1}},validations:{city:{required:o["required"]}},created:function(){this.getCityStorage(),this.getCurrentPosition()},watch:{cityList:function(){this.setCityStorage()}},methods:{getCurrentPosition:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){j(e.coords).then((function(e){t.currentLocation=e,t.updateTimeAgo(t.currentLocation,!1)}))}))},updateTimeAgo:function(t){var e=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(a)j(t.id).then((function(t){e.reloadCycle(t,a)}));else{var s=t;s.fromNow=t.dt.fromNow(),this.reloadCycle(s,a)}},reloadCycle:function(t,e){var a=this.cityList.findIndex((function(e){return e.id===t.id}));this.checkCityTimeAgo(a,t,e)},checkCityTimeAgo:function(t,e,a){var s=this,n=6e4;-1===t?a?(clearTimeout(this.currentLocation.timeout),this.currentLocation=e,this.updateTimeAgo(this.currentLocation,!1)):this.currentLocation.timeout=setTimeout((function(){s.updateTimeAgo(s.currentLocation,!1)}),n):a?(clearTimeout(this.cityList[t].timeout),this.$set(this.cityList,t,e),this.updateTimeAgo(this.cityList[t],!1)):this.cityList[t].timeout=setTimeout((function(){s.updateTimeAgo(s.cityList[t],!1)}),n)},add:function(){var t=this;j(this.$v.city.$model).then((function(e){t.cityList.push(e),t.updateTimeAgo(e),t.showModal=!1,t.$v.city.$model="",t.$v.$reset()})).catch((function(){t.error="City not found"}))},cancel:function(){this.showModal=!1,this.error="",this.$v.city.$model="",this.$v.$reset()},remove:function(t){this.cityList.splice(t,1)},setCityStorage:function(){var t=this.cityList.map((function(t){return{id:t.id}}));localStorage.setItem("cities",JSON.stringify(t))},getCityStorage:function(){var t=this,e=JSON.parse(localStorage.getItem("cities"));e&&e.forEach((function(e){j(e.id).then((function(e){t.cityList.push(e),t.updateTimeAgo(e)}))}))}}},g=y,w=a("2877"),C=Object(w["a"])(g,i,c,!1,null,null,null),k=C.exports,L={name:"App",components:{weather:k}},$=L,z=Object(w["a"])($,n,r,!1,null,null,null),O=z.exports,T=(a("7d05"),a("1dce")),x=a.n(T);s["a"].use(x.a),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(O)}}).$mount("#app")},"7d05":function(t,e,a){}});
//# sourceMappingURL=app.57be142d.js.map