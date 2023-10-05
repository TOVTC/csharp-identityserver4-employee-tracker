"use strict";(self["webpackChunkemployee_tracker"]=self["webpackChunkemployee_tracker"]||[]).push([[638],{7638:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var a=s(6190),i=s(9582),r=s(266),o=s(2118),l=(s(7658),s(7678)),n=s(2500),u=s(4712),h=(0,l.Z)(n.Z,(0,u.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))})):s.valid=e(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const s=this.watchers.find((t=>t._uid===e._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),d=s(1713),c=s(7808);const m=(0,l.Z)(c.Z);var p=m.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...c.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=c.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){c.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),g=function(){var t=this,e=t._self._c;return e(o.Z,[e(d.Z,{staticClass:"mt-5"},[e(r.Z,{staticClass:"ma-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" About Us ")]),e(d.Z,{staticClass:"ma-5"},[e("p",{staticClass:"line-breaks"},[t._v(t._s(t.about))])])],1)],1),e(d.Z,{staticClass:"mb-5"},[e(r.Z,{staticClass:"ma-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Contact ")]),e(d.Z,{staticClass:"ma-5"},[e(i.Z,{attrs:{elevation:"2",width:"90%"}},[e(h,{ref:"form",staticClass:"ma-5 pa-5",on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(c.Z,{attrs:{rules:t.rules.name,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(c.Z,{attrs:{rules:t.rules.email,label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(p,{attrs:{name:"input-7-1",counter:150,rules:t.rules.message,value:t.message,label:"Enter your message here",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),e(a.Z,{staticClass:"mt-3 mr-4",attrs:{disabled:!t.valid,type:"submit",color:"success"}},[t._v(" Submit ")])],1)],1)],1)],1)],1)],1)},v=[],f=s(8081),w={data:()=>({valid:!1,name:"",email:"",message:"",about:"",source:"https://www.renderforest.com/website-maker",rules:{name:[t=>!!t||"You must enter your name"],email:[t=>!!t||"You must enter a valid email",t=>/.+@.+\..+/.test(t)||"You must enter a valid email"],message:[t=>!!t||"You must enter a message",t=>!(t.trim().length>150)||"Message must be 150 characters or less"]}}),methods:{send(){this.$refs.form.validate(),this.valid&&(console.log("name: ",this.name),console.log("email: ",this.email),console.log("message: ",this.message),this.name="",this.email="",this.message="",this.$refs.form.resetValidation())}},async created(){let t=await f.Z.getAbout();this.about=t.data.description}},b=w,y=s(1001),_=(0,y.Z)(b,g,v,!1,null,"2dd988d3",null),Z=_.exports}}]);
//# sourceMappingURL=638.b0833ed5.js.map