webpackJsonp([18],{260:function(t,e,r){"use strict";function o(t){c||r(530)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(445),s=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var i=r(532),u=r.n(i),c=!1,d=r(4),l=o,f=d(s.a,u.a,!1,l,"data-v-24decdf5",null);f.options.__file="src\\views\\img\\index.vue",e.default=f.exports},445:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(96),s=o(a),n=r(6),i=o(n);e.default={name:"index",data:function(){return{baseUrl:s.default.apiUrl,uploadParams:{token:i.default.get("token")},loading:!1,columns:[{title:"图片",render:function(t,e){return t("img",{attrs:{src:e.row.imgUrl},style:{width:"100px",margin:"0 auto",display:"block"}},"")}},{title:"图片地址",key:"imgUrl"}],imgList:[]}},computed:{},methods:{uploadIpSuccess:function(t){this.succesFun(t)},uploadIpError:function(t){this.$Message.error("上传失败，失败原因:"+t)},uploadFormatError:function(t,e){this.$Message.error("上传失败，失败原因：文件格式不正确，只支持图片后缀的格式")},succesFun:function(t){"1002"==t.code?this.$Message.error(t.msg):"1003"==t.code?this.$Message.error(t.msg):"1000"==t.code?(this.$Message.success(t.msg),this.imgList.push({imgUrl:s.default.apiUrl+"/img/"+t.data.imgUrl})):this.$Message.error("上传失败，失败原因：文件格式不正确，只支持图片后缀的格式")}},components:{},created:function(){},mounted:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){}}},530:function(t,e,r){var o=r(531);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(19)("bcb60ddc",o,!1,{})},531:function(t,e,r){e=t.exports=r(18)(!1),e.push([t.i,"",""])},532:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Card",[r("Upload",{staticClass:"upload",attrs:{"show-upload-list":!1,multiple:"",action:t.baseUrl+"/upload",data:t.uploadParams,"on-success":t.uploadIpSuccess,"on-error":t.uploadIpError,format:["jpg","png","gif"],"on-format-error":t.uploadFormatError}},[r("Button",{attrs:{type:"primary"}},[t._v("图片上传")])],1)],1),t._v(" "),r("Card",{attrs:{shadow:""}},[r("Table",{ref:"table",attrs:{border:"","highlight-row":"",loading:t.loading,columns:t.columns,data:t.imgList}})],1)],1)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.default=s}});