(function(){"use strict";var t={3979:function(t,e,n){var o=n(144),r=n(998),a=n(6072),i=n(6190),s=n(4324),c=n(3059),l=n(3687),u=function(){var t=this,e=t._self._c;return e(r.Z,[e(a.Z,{attrs:{app:"",color:"green",dark:""}},[e("router-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[e("div",{staticClass:"d-flex align-center"},[e(s.Z,{staticClass:"ma-3",attrs:{"x-large":""}},[t._v("mdi-badge-account-horizontal")]),e("h1",{staticClass:"ma-3 white--text"},[t._v("Employee Tracker")])],1)]),e(l.Z),e(i.Z,{staticClass:"mx-2",attrs:{to:"/tracker",text:""}},[e("span",{staticClass:"mx-2"},[t._v("Employees")])]),e(i.Z,{staticClass:"mx-2",attrs:{to:"/about-contact",text:""}},[e("span",{staticClass:"mx-2"},[t._v("About/Contact")])])],1),e(c.Z,[e("router-view",{key:t.$route.fullPath})],1)],1)},d=[],h={name:"App",data:()=>({})},f=h,p=n(1001),m=(0,p.Z)(f,u,d,!1,null,null,null),g=m.exports,v=n(1705);o.ZP.use(v.Z);var y=new v.Z({}),b=n(8345),w=n(9582),k=n(4886),C=n(266),Z=n(2118),_=n(1713),A=function(){var t=this,e=t._self._c;return e(Z.Z,[this.$root.isAuthenticated?e(_.Z,[e(C.Z,{staticClass:"ma-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Protect employee information ")]),e(_.Z,{staticClass:"ma-5"},[e(w.Z,{attrs:{width:"35%"}},[e(k.ZB,[e("h2",[t._v("Logout")]),e("p",{staticClass:"my-3"},[t._v(" Make sure to logout of your account by clicking on the button below. You will be redirected to an external portal. ")])]),e(k.h7,[e(i.Z,{attrs:{text:"",color:"green accent-4"},on:{click:t.logout}},[t._v(" Redirect Me ")])],1)],1)],1)],1)],1):e(_.Z,{staticClass:"my-5"},[e(C.Z,{staticClass:"ma-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Welcome ")]),e(_.Z,{staticClass:"ma-5"},[e(w.Z,{attrs:{width:"35%"}},[e(k.ZB,[e("h2",[t._v("Login")]),e("p",{staticClass:"my-3"},[t._v(" Please login to view employee information. You will be redirected to an external portal. ")])]),e(k.h7,[e(i.Z,{attrs:{text:"",color:"green accent-4"},on:{click:t.login}},[t._v(" Redirect Me ")])],1)],1)],1)],1)],1)],1)},x=[],O=(n(7658),{name:"HomeView",data:()=>({valid:!1,visible:!1,username:"",password:"",rules:{username:[t=>!!t||"You must enter your username",t=>!(t.trim().length<3||t.trim().length>10)||"You must enter your username"],password:[t=>!!t||"You must enter a valid password",t=>!(t.trim().length<3)||"You must enter a valid password"]}}),methods:{search(){this.$refs.form.validate(),this.valid&&$.push({name:"tracker"})},login(){this.loggedIn=!0,this.$root.signIn("/")},logout(){this.loggedIn=!1,this.$root.signOut("/")}},async beforeMount(){console.log(this.$root.isAuthenticated),console.log(await this.$root.getUser()),console.log($.app.isAuthenticated)}}),P=O,j=(0,p.Z)(P,A,x,!1,null,null,null),E=j.exports;o.ZP.use(b.ZP);const S=[{path:"/",name:"home",component:E},{path:"/tracker",name:"tracker",meta:{requiresAuth:!0},component:()=>Promise.all([n.e(808),n.e(942)]).then(n.bind(n,9942))},{path:"/about-contact",name:"about-contact",component:()=>Promise.all([n.e(808),n.e(638)]).then(n.bind(n,7638))},{path:"/callback",name:"callback",component:()=>n.e(338).then(n.bind(n,5338))},{path:"/:catchAll(.*)",name:"404",component:E}],T=new b.ZP({mode:"history",base:"/",routes:S});T.beforeEach((async(t,e,n)=>{let o=T.app||{isAuthenticated:!1};o.isAuthenticated?(console.log("router"),console.log(o.isAuthenticated),n()):t.matched.some((t=>t.meta.requiresAuth))?o.authenticate(t.path).then((()=>{console.log("authenticating a protected url: ",t.path),n()})):n()}));var $=T,L=n(4671),N=n.n(L),M=new(N().UserManager)({authority:"https://localhost:5001",client_id:"js",redirect_uri:"https://localhost:8080/callback",response_type:"code",scope:"openid profile trackerApi",post_logout_redirect_uri:"https://localhost:8080",userStore:new(N().WebStorageStateStore)({store:window.localStorage})});N().Log.logger=console,N().Log.level=N().Log.INFO;var R=M,B=n(8081);o.ZP.config.productionTip=!1;const I={isAuthenticated:!1,user:"",mgr:R},U={async authenticate(t){const e=await this.$root.getUser();e?(this.isAuthenticated=!0,this.user=e):await this.$root.signIn(t)},async getUser(){try{let t=await this.mgr.getUser();return t}catch(t){console.log(t)}},signIn(t){t?this.mgr.signinRedirect({state:t}):this.mgr.signinRedirect()},signOut(t){t?this.mgr.signoutRedirect({state:t}):this.mgr.signoutRedirect()}};let Y=new o.ZP({vuetify:y,router:$,data:I,methods:U,render:t=>t(g)}).$mount("#app");B.Z.apiClient.interceptors.request.use((t=>{const e=Y.$root.user;if(e){const n=e.access_token;n&&(t.headers.Authorization=`Bearer ${n}`)}return t}),(t=>t))},8081:function(t,e,n){var o=n(6154);const r=o.Z.create({baseURL:"https://localhost:6001/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});e.Z={apiClient:r,async getDepartments(){try{return await r.get("/tracker/departments")}catch(t){console.log(t)}},async getRoles(){try{return await r.get("/tracker/roles")}catch(t){console.log(t)}},async getEmployees(){try{return await r.get("/tracker/employees")}catch(t){console.log(t)}},async getAbout(){try{return await r.get("/about")}catch(t){console.log(t)}}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],a=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{338:"8d06ffa0",638:"b0833ed5",808:"483ff8a9",942:"fade0a4d"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{638:"51179e70",808:"35062c7b",942:"cb29df4b"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="employee-tracker:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var h=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={638:1,808:1,942:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],c=o[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(e&&e(o);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkemployee_tracker"]=self["webpackChunkemployee_tracker"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3979)}));o=n.O(o)})();
//# sourceMappingURL=app.39564ada.js.map