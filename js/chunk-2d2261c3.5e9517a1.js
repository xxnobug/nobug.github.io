(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2261c3"],{e6ea:function(t,e,s){"use strict";s.r(e);var a=s("a34a"),n=s.n(a),i=(s("7f7f"),s("96cf"),s("3b8d")),c=s("e814"),o=s.n(c),r=(s("20d6"),s("f499")),l=s.n(r),u=s("cebc"),d=s("2f62"),h=s("c276"),g=s("c2f9"),f=s("5990"),p={data:function(){return{assetPendingListBoxHeight:"height:"+(window.innerHeight-80)+"px",currentPage:1,pageSize:100,pageSizeArray:[100,200,300,400],assetData:[],assetCount:0}},computed:Object(u.a)({},Object(d.e)("d2admin/user",["info"])),mounted:function(){var t=this;window.onresize=function(){t.assetPendingListBoxHeight="height:"+(window.innerHeight-80)+"px"}},created:function(){this.getAssetData()},methods:{getAssetData:function(){var t=this,e=[this.info.userDetails.id];Object(g.e)({user_id:l()(e),state:'["0"]',length:this.pageSize,position:this.pageSize*(this.currentPage-1)}).then(function(e){for(var s=e.data,a=0;a<s.length;a++){var n=s[a].assets_play,i={},c=n.findIndex(function(t){return"0"==t.type});c>-1&&(i=n[c],s[a].playThum=t.$task.imgBaseUrl+i.www_path+i.server_path),s[a].state_name=t.setState(s[a].state),s[a].state_color=t.setStateColor(s[a].state),s[a].isSelect=!1}t.assetData=s,t.assetCount=o()(e.count)}).catch(function(t){})},setState:function(t){var e="";switch(t){case"0":e="待处理";break;case"1":e="已处理";break;default:e="未知状态"}return e},setStateColor:function(t){var e="";switch(t){case"0":e="#d6a21d";break;case"1":e="#67C23A";break;default:e="#ffffff"}return e},pageSizeChange:function(t){this.pageSize=t,this.getAssetData()},pagechange:function(t){this.getAssetData()},selectAllAsset:function(t){for(var e=0;e<this.assetData.length;e++)this.assetData[e].isSelect=t;this.assetData[e].splice()},downFile:function(){for(var t=[],e=0;e<this.assetData.length;e++)this.assetData[e].isSelect&&t.push(this.assetData[e].assets_id);this.downAssets(t)},downAssets:function(t){var e="",s=function(){var s={assets_id:l()(t)};Object(f.H)(s).then(function(){var t=Object(i.a)(n.a.mark(function t(s){var a,i,c,o,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a=0;a<s.length;a++)i=s[a],c={name:i.name,size:i.size,id:e+i.local_path,type:"down",localPath:e+i.local_path,loclocal_path:i.local_path,serverPath:i.disk_path+i.server_path,nodisk_path:i.local_path,successFc:function(t){o(t)},progressFc:function(t){},failFc:function(t){r(t)}},h.a.file.addDownList(c),o=function(t){},function(t){},r=function(t){};case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())};window.ue.obj.webgetdownloadprojectpath().then(function(t){e=t,s()}).catch(function(t){})},onContextmenu:function(t,e){var s=this;return this.$contextmenu({items:[{label:"浏览至资产",onClick:function(){s.toOpanLocation(e.assets)}},{label:"编辑资产",onClick:function(){s.toEditeAssets(e.assets)}},{label:"标记已处理",onClick:function(){s.setAssetPendingState(e)}}],event:t,customClass:"custom-class",zIndex:3,minWidth:230}),!1},toOpanLocation:function(t){var e="/Game"+t.local_path.slice(t.local_path.indexOf("/"),t.local_path.length)+"/"+t.name;window.ue.obj.webopenpath(e).then(function(t){})},toEditeAssets:function(t){this.$router.push({path:"/editeAsset",query:{id:t.id}})},setAssetPendingState:function(t){for(var e=this,s=[],a=0;a<this.assetData.length;a++)this.assetData[a].isSelect&&s.push(this.assetData[a].id);0==s.length&&s.push(t.id),Object(g.b)({id:l()(s),state:"1"}).then(function(t){e.getAssetData(),e.$message({message:"修改成功",type:"success"})}).catch(function(t){})}}},v=s("2877"),_=Object(v.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("d2-container",[s("div",{staticClass:"assetPendingBox"},[s("div",{staticClass:"assetPendingHeader"},[s("div",{staticClass:"assetPendingHeaderTitle"},[s("el-checkbox",{on:{change:t.selectAllAsset}}),t._v("待处理资产\n      ")],1),s("div",{staticClass:"assetPendingHeaderBtns"},[s("el-button",{attrs:{size:"mini"},on:{click:t.downFile}},[t._v("下载")])],1)]),s("div",{staticClass:"assetPendingContent"},[s("div",{staticClass:"assetPendingListBox",style:t.assetPendingListBoxHeight},[s("el-scrollbar",{staticStyle:{height:"100%"}},t._l(t.assetData,function(e,a){return s("div",{staticClass:"assetPendingList",on:{contextmenu:function(s){return s.preventDefault(),t.onContextmenu(s,e)}}},[s("div",{staticClass:"assetPendingCheck"},[s("el-checkbox",{model:{value:e.isSelect,callback:function(s){t.$set(e,"isSelect",s)},expression:"item.isSelect"}})],1),s("div",{staticClass:"assetPendingImg"},[s("viewer",{attrs:{images:[e.playThum]}},[s("img",{attrs:{src:e.playThum}})])],1),s("div",{staticClass:"assetPendingState",style:"color:"+e.state_color},[t._v("\n              "+t._s(e.state_name)+"\n            ")]),s("div",{staticClass:"assetPendingListText"},[s("div",{staticClass:"assetPendingName"},[t._v("\n                "+t._s(e.assets.name)+"  "),s("span",{staticClass:"assetPendingPath"},[t._v("("+t._s(e.assets.local_path)+")")])]),s("div",{staticClass:"assetPendingBase"},[t._v("备注:"+t._s(e.base))]),s("div",{staticClass:"assetPendingAddUser"},[t._v("\n                添加人："+t._s(e.add_user_name)+"\n                "+t._s(t.$task.stampToDateTimeM(e.add_time))+"\n              ")])])])}),0)],1)]),s("div",{staticClass:"assetPendingPagesCtr"},[s("el-pagination",{attrs:{"page-size":t.pageSize,"page-sizes":t.pageSizeArray,"current-page":t.currentPage,layout:"sizes, prev, pager, next, total",total:t.assetCount},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"size-change":t.pageSizeChange,"current-change":t.pagechange}}),s("div",{staticClass:"assetPendingPagesCount"})],1)])])},[],!1,null,null,null);_.options.__file="index.vue";e.default=_.exports}}]);