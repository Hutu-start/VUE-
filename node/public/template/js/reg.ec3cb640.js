(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reg"],{"1f3b":function(t,e,n){"use strict";var a=n("1f75"),i=n.n(a);i.a},"1f75":function(t,e,n){},"310e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-input"},[n("input",{staticClass:"name",attrs:{type:"text",placeholder:t.title},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},i=[],s={data:function(){return{}},props:{title:{type:String,default:"默认"},value:{type:String,default:""}},components:{},mounted:function(){},updated:function(){},methods:{}},o=s,r=(n("b4bc"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},"4cd2":function(t,e,n){},"5e6b":function(t,e,n){"use strict";var a=n("d9be"),i=n.n(a);i.a},"7ace":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reg"},[a("v-navbar",{attrs:{title:"用户注册",rightDisplay:!1}}),a("div",[a("div",{attrs:{id:"icon"},on:{click:t.upload}},[a("img",{attrs:{src:n("ab9e"),alt:"",id:"imgicon"}})]),a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"}})]),a("div",{staticClass:"reg_main"},[a("HTinput",{attrs:{title:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("HTinput",{attrs:{title:"请输入昵称"},model:{value:t.nikename,callback:function(e){t.nikename=e},expression:"nikename"}}),a("HTinput",{attrs:{title:"请设置密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-button",{attrs:{text:"注册"},nativeOn:{click:function(e){return t.register(e)}}}),a("van-overlay",{attrs:{show:t.show,"z-index":"100000"},nativeOn:{click:function(e){t.show=!1}}},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"block"},[t._v(" "+t._s(t.mess)+" ")])])])],1)},i=[],s=n("310e"),o=n("9544"),r=n("d996"),c={data:function(){return{username:"",password:"",nikename:"",mess:"",show:!1}},components:{HTinput:s["a"],"v-button":o["a"],"v-navbar":r["a"]},mounted:function(){this.great()},updated:function(){},methods:{great:function(){document.getElementById("file").onchange=function(){var t=this.files[0],e=new FileReader;e.onload=function(){document.getElementById("imgicon").src=e.result},e.readAsDataURL(t)}},register:function(){var t=this,e=new FormData;e.append("username",this.username),e.append("nikename",this.nikename),e.append("password",this.password);var n=document.getElementById("file");e.append("icon",n.files[0]),this.$axios({url:"/api/reg",method:"post",data:e}).then((function(e){0==e.data.err?(console.log(e.data),t.$router.push("/login")):(t.mess=e.data.msg,t.show=!0)}))},upload:function(){var t=document.getElementById("file");t.click()}}},u=c,l=(n("1f3b"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,"316d931c",null);e["default"]=d.exports},9544:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login_button"},[n("input",{attrs:{type:"button",value:t.text}})])},i=[],s={data:function(){return{}},props:{text:{type:String,default:"按 钮"}},components:{},mounted:function(){},updated:function(){},methods:{}},o=s,r=(n("e8ce"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},ab9e:function(t,e,n){t.exports=n.p+"img/logoicon.13c748c8.jpg"},b4bc:function(t,e,n){"use strict";var a=n("4cd2"),i=n.n(a);i.a},d996:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.bgcolor},attrs:{id:"ht__header"}},[n("div",{staticClass:"ht__header__nav",style:{background:t.bgcolor}},[n("div",{staticClass:"ht__header-left",on:{click:t.onClickLeft}}),n("div",{staticClass:"ht__header-center"},[t._v(t._s(t.title))]),n("div",{staticClass:"ht__header-right",on:{clickRight:t.onClickRight}},[t.rightDisplay?n("i"):t._e()])]),n("div",{staticClass:"ht__header__empty",style:{}})])},i=[],s={name:"ht__header",data:function(){return{}},props:{title:{type:String,default:"标题"},bgcolor:{type:String,default:"#fff"},rightDisplay:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){}}},o=s,r=(n("5e6b"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},d9be:function(t,e,n){},dca5:function(t,e,n){},e8ce:function(t,e,n){"use strict";var a=n("dca5"),i=n.n(a);i.a}}]);
//# sourceMappingURL=reg.ec3cb640.js.map