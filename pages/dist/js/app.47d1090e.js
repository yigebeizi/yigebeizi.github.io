(function(){var t={881:function(t,e,s){var i={"./Run_000.png":521,"./Run_001.png":967,"./Run_002.png":534,"./Run_003.png":732,"./Run_004.png":820,"./Run_005.png":99,"./Run_006.png":835,"./Run_007.png":290,"./Run_008.png":68,"./Run_009.png":527};function n(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=881},521:function(t,e,s){"use strict";t.exports=s.p+"img/Run_000.c98fa765.png"},967:function(t,e,s){"use strict";t.exports=s.p+"img/Run_001.1f2ece94.png"},534:function(t,e,s){"use strict";t.exports=s.p+"img/Run_002.98604a48.png"},732:function(t,e,s){"use strict";t.exports=s.p+"img/Run_003.3a5c442a.png"},820:function(t,e,s){"use strict";t.exports=s.p+"img/Run_004.179e9e2d.png"},99:function(t,e,s){"use strict";t.exports=s.p+"img/Run_005.d7551a9b.png"},835:function(t,e,s){"use strict";t.exports=s.p+"img/Run_006.45223eb0.png"},290:function(t,e,s){"use strict";t.exports=s.p+"img/Run_007.447bcffb.png"},68:function(t,e,s){"use strict";t.exports=s.p+"img/Run_008.cd3ccf78.png"},527:function(t,e,s){"use strict";t.exports=s.p+"img/Run_009.431a9b06.png"},709:function(t,e,s){"use strict";t.exports=s.p+"img/Sliding_000.8a4693f8.png"},665:function(t,e,s){"use strict";t.exports=s.p+"img/stand.c4af051d.png"}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}!function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p=""}();!function(){"use strict";var t=Vue,e=s.n(t),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app",tabindex:"0"},on:{keydown:t.keyupHandle}},["menu"===t.gameStatus?s("menu-module",{on:{start:t.gameStart}}):t._e(),s("div",{staticClass:"sky-wrap"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"start"===t.gameStatus,expression:"gameStatus === 'start'"}],staticClass:"total"},[t._v(t._s(Math.floor(t.total)))]),s("cloud-model"),s("obstruction-model",{ref:"obsModule",attrs:{speed:t.speed,userStatus:t.userStatus},on:{gameOver:t.gameOver}}),s("user-model",{staticClass:"user-model",attrs:{speed:t.speed,status:t.userStatus}})],1),s("div",{staticClass:"ground-wrap"}),s("game-over",{directives:[{name:"show",rawName:"v-show",value:"over"===t.gameStatus,expression:"gameStatus === 'over'"}],attrs:{total:t.total},on:{restart:t.gameStart,goHome:function(e){t.gameStatus="menu"}}})],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-wrap"},[s("div",{staticClass:"title"},[t._v("奔跑吧，程序员")]),s("div",{staticClass:"menu-total"},[s("div",{staticClass:"total-desc"},[t._v("全员已累计奔跑")]),s("div",{staticClass:"total-menu"},[t._v(t._s(t.totalLoading?"加载中":t.total+"m"))])]),s("div",{staticClass:"menu-box"},[s("div",{staticClass:"menu-item",on:{click:function(e){return t.$emit("start")}}},[t._v("开始游戏")]),s("div",{staticClass:"menu-item",on:{click:function(e){t.showRanking=!0}}},[t._v("排行榜")]),s("div",{staticClass:"menu-item",on:{click:function(e){t.showRule=!0}}},[t._v("游戏规则")]),s("a",{staticClass:"menu-item",attrs:{href:"https://juejin.cn/post/7103423600660578341/",target:"_blank"}},[t._v("点赞作者")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showRule,expression:"showRule"}],staticClass:"log-mask",on:{click:function(e){t.showRule=!1}}},[s("div",{staticClass:"log-wrap",on:{click:function(t){t.stopPropagation()}}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showRanking,expression:"showRanking"}],staticClass:"log-mask",on:{click:function(e){t.showRanking=!1}}},[s("div",{staticClass:"log-wrap",on:{click:function(t){t.stopPropagation()}}},[t.rankingList&&t.rankingList.length>0?s("div",{staticClass:"rank-list"},[t._l(t.rankingList,(function(e,i){return s("div",{key:e._id,staticClass:"rank-item"},[s("div",[t._v(" "+t._s(i+1)+"、"),s("a",{staticClass:"rank-username",attrs:{href:"https://juejin.cn/user/"+e.uid,target:"_blank"}},[t._v(t._s(e.username))])]),s("div",{staticClass:"rank-value"},[t._v(t._s(e.value))])])})),s("p",{staticClass:"rank-tips"},[t._v("*由于未设置防作弊机制，排行榜仅供参考")])],2):s("div",{staticClass:"rank-empty"},[t._v("暂无排行榜数据")])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 游戏背景："),s("br"),t._v(" 夏天到了，又到了露肉的季节，你是否还随身携带着游泳圈？快来和大家一起跑步吧！ ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 游戏规则："),s("br"),t._v(" 游戏开始后，游戏人物会主动向前奔跑，玩家需控制人物跳跃或者下滑躲避障碍物，随着游戏的进行，障碍物的数量和游戏人物的速度都会随之改变，当游戏人物碰到障碍物时，游戏结束 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 操作说明："),s("br"),t._v(" 按键 w 或 ↑ 控制人物跳跃"),s("br"),t._v(" 按键 s 或 ↓ 控制人物下滑"),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 个人成绩上传："),s("br"),t._v(" 游戏结束后玩家可上传本轮游戏的成绩，排行榜和总里程均依照此处成绩生成，上传成绩时需要填写本人掘金id，从而获取掘金用户名，一名用户可多次上传成绩，但是同样的成绩不可重复上传，游戏未设置防作弊机制，娱乐而已，希望大家不要作弊 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 总里程："),s("br"),t._v(" 游戏首页会显示所有用户的每一次上传成绩总和 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 排行榜："),s("br"),t._v(" 排行榜会取所有用户成绩前10名，单名玩家可重复上榜 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 声明："),s("br"),t._v(" 以上三项功能均需服务器支撑，由于服务器配置较低，也未设置防范机制，请大家不要恶意攻击，如有变故以上三项功能取消 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"rule-item"},[t._v(" 支持作者："),s("br"),t._v(" 文章地址："),s("a",{attrs:{href:"https://juejin.cn/post/7103423600660578341/"}},[t._v("https://juejin.cn/post/7103423600660578341/")]),s("br"),t._v(" 游戏完全开源，如果对你有所帮助或者你觉得这个小游戏还可以，希望可以点击文章链接给个赞和评论"),s("br"),t._v(" 源码地址："),s("br")])}],o=axios,u=s.n(o),l={name:"menuModule",data(){return{showRule:!1,showRanking:!1,total:0,totalLoading:!0,rankingList:[],rankLoading:!0}},mounted(){u().get("http://summer.node.pkec.net/api/getTotal").then((t=>{this.total=t.data.data||0,this.totalLoading=!1})),u().get("http://summer.node.pkec.net/api/getRankingList").then((t=>{this.rankingList=t.data.data,this.rankLoading=!1}))}},c=l;function d(t,e,s,i,n,a,r,o){var u,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):n&&(u=o?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var m=d(c,a,r,!1,null,"5ac20429",null),p=m.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("img",{ref:"userImg",staticClass:"user-img",attrs:{src:t.userPic}})])},v=[],f={name:"userModel",props:{speed:{type:Number,default:1},status:{type:String,default:""}},data(){return{userRunList:[],slideList:[],userPic:"",standPic:s(665),userJumpPic:s(521),userSlidePic:s(709),runInterval:null,lastRunTime:0}},watch:{status:{handler(t){cancelAnimationFrame(this.runInterval),this.$refs.userImg&&this.$refs.userImg.classList.remove("slide","jump"),"run"===t?this.run():"slide"===t?(this.$refs.userImg.classList.add("slide"),this.slide()):"jump"===t?(this.$refs.userImg.classList.add("jump"),this.jump()):this.userPic=this.standPic},immediate:!0}},mounted(){for(let t=0;t<10;t++){let e=s(881)("./Run_00"+t+".png");this.userRunList.push(e)}},methods:{run(){let t=this,e=0,s=()=>{let i=(new Date).getTime();i-this.lastRunTime>120-20*this.speed&&(e>this.userRunList.length-1&&(e=0),t.userPic=this.userRunList[e],e++,this.lastRunTime=i),this.runInterval=requestAnimationFrame(s)};s()},slide(){this.userPic=this.userSlidePic},jump(){this.userPic=this.userJumpPic}}},_=f,g=d(_,h,v,!1,null,"52ed3202",null),C=g.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"cloudWrap",staticClass:"cloud-wrap"})},k=[],x={name:"cloud-model",data(){return{screenWidth:document.documentElement.clientWidth,lastCreateTime:0,cloudFrequency:10,cloudSpeed:1}},mounted(){this.createCloud()},methods:{createCloud(){let t=(new Date).getTime();if(t-this.lastCreateTime>3e3){let e=document.createElement("div");e.className="cloud-item",e.cloudScale=Math.random(),e.style.transform="scale("+e.cloudScale+")",e.style.opacity=e.cloudScale;let s=this.screenWidth;e.style.left=s+"px";let i=400*Math.random();e.style.top=i+"px",this.$refs.cloudWrap.appendChild(e);let n=()=>{let t=this.cloudSpeed*e.cloudScale,s=+e.style.left.slice(0,-2);e.style.left=s-t+"px",e.offsetLeft<-e.offsetWidth?this.$refs.cloudWrap.removeChild(e):requestAnimationFrame(n)};n(),n(),this.lastCreateTime=t}requestAnimationFrame(this.createCloud)}}},S=x,w=d(S,b,k,!1,null,null,null),R=w.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"obstructionWrap",staticClass:"obstruction-wrap"})},$=[],M={name:"obstructionModel",props:{speed:{type:Number,default:1},userStatus:{type:String,default:""}},data(){return{screenWidth:document.documentElement.clientWidth,obsInterval:[400,600],obsMoveInterval:null}},mounted(){},methods:{init(){this.$refs.obstructionWrap.innerHTML="",this.createObstruction(),this.obsMove()},createObstruction(){let t=document.createElement("div"),e=Math.random()>.5?"top":"bottom";t.className="obs-list-"+e,t.state=e;let s=Math.ceil(Math.random()*(this.speed-2));s=Math.max(s,1);for(let i=0;i<s;i++){let e=document.createElement("div");e.className="obs-item",t.appendChild(e)}t.style.left=this.screenWidth+"px",t.nextSpace=Math.random()*(this.obsInterval[1]-this.obsInterval[0])+this.obsInterval[0],this.$refs.obstructionWrap.appendChild(t)},obsMove(){let t=this.$refs.obstructionWrap.children,e=Array.from(t),s=null;for(let n=0;n<e.length;n++){let t=e[n];t.offsetLeft<-t.offsetWidth?this.$refs.obstructionWrap.removeChild(t):t.style.left=t.offsetLeft-3*this.speed+"px",s||t.offsetLeft>this.screenWidth/2-60-t.offsetWidth&&(s=t)}if(s.offsetLeft<this.screenWidth/2+60)if("top"===s.state){if("slide"!==this.userStatus)return void this.$emit("gameOver")}else if("jump"!==this.userStatus)return void this.$emit("gameOver");let i=e[e.length-1];i.offsetLeft<this.screenWidth-i.offsetWidth-i.nextSpace&&this.createObstruction(),this.obsMoveInterval=requestAnimationFrame(this.obsMove)},gameOver(){cancelAnimationFrame(this.obsMoveInterval)}}},O=M,L=d(O,y,$,!1,null,null,null),E=L.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gameover-wrap"},[s("div",{staticClass:"title"},[t._v("游戏结束!")]),s("div",{staticClass:"menu-total"},[s("div",{staticClass:"total-desc"},[t._v("您的成绩为")]),s("div",{staticClass:"total-menu"},[t._v(t._s(Math.floor(t.total))+"m")])]),s("div",{staticClass:"menu-box"},[s("div",{staticClass:"menu-item",on:{click:function(e){return t.$emit("restart")}}},[t._v("再来一次")]),s("div",{staticClass:"menu-item",on:{click:function(e){return t.$emit("goHome")}}},[t._v("返回首页")]),s("a",{staticClass:"menu-item",attrs:{href:"https://juejin.cn/post/7103423600660578341/",target:"_blank"}},[t._v("点赞作者")])]),s("div",{staticClass:"upload-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.uid,expression:"uid"}],staticClass:"upload-input",attrs:{type:"text",placeholder:"请输入您的掘金ID"},domProps:{value:t.uid},on:{input:function(e){e.target.composing||(t.uid=e.target.value)}}}),s("div",{staticClass:"upload-btn",on:{click:t.uploadScore}},[t._v("上传成绩")])]),s("p",{staticClass:"tips"},[t._v("掘金id为您的个人主页链接juejin.cn/user/后面的数字")])])},I=[],W={name:"gameOver",props:{total:{type:Number,default:0}},data(){return{uid:""}},methods:{uploadScore(){this.uid?u().post("http://summer.node.pkec.net/api/upload",{uid:this.uid,value:Math.floor(this.total)}).then((t=>{t.data.code,alert(t.data.message)})):alert("请输入您的掘金UID")}}},P=W,T=d(P,j,I,!1,null,"0a5bcb24",null),N=T.exports,F={name:"App",data(){return{gameStatus:"menu",speed:2,userStatus:"",canOperate:!1,groundMoveInterval:null,total:0}},components:{userModel:C,cloudModel:R,obstructionModel:E,menuModule:p,gameOver:N},mounted(){},methods:{gameStart(){this.gameStatus="start",this.userStatus="run",this.total=0,this.speed=2,this.canOperate=!0,this.groundScroll(),this.$refs.obsModule.init()},groundScroll(){let t=document.querySelector(".ground-wrap"),e=0;t.style.backgroundPositionX=e+"px";let s=()=>{e<=-600&&(e=0),e-=3*this.speed,this.total+=this.speed/10,this.total>=1e5?this.speed=6:this.total>=8e3?this.speed=5.5:this.total>=6e3?this.speed=5:this.total>=4e3?this.speed=4.5:this.total>=2e3?this.speed=4:this.total>=1e3?this.speed=3.5:this.total>=500?this.speed=3:this.total>=200&&(this.speed=2.5),t.style.backgroundPositionX=e+"px",this.groundMoveInterval=requestAnimationFrame(s)};s()},keyupHandle(t){this.canOperate&&(this.canOperate=!1,87===t.keyCode||38===t.keyCode?(this.userStatus="jump",setTimeout((()=>{this.canOperate=!0,this.userStatus="run"}),Math.max(900-100*this.speed,400))):83===t.keyCode||40===t.keyCode?(this.userStatus="slide",setTimeout((()=>{this.canOperate=!0,this.userStatus="run"}),Math.max(900-100*this.speed,400))):this.canOperate=!0)},gameOver(){cancelAnimationFrame(this.groundMoveInterval),this.userStatus="",this.canOperate=!1,this.gameStatus="over"}}},A=F,q=d(A,i,n,!1,null,null,null),D=q.exports;e().config.productionTip=!1,new(e())({render:t=>t(D)}).$mount("#app")}()})();
//# sourceMappingURL=app.47d1090e.js.map