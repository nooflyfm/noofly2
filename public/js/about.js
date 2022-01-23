"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[443],{5442:(t,e,r)=>{r.d(e,{Z:()=>n});var a=r(3645),s=r.n(a)()((function(t){return t[1]}));s.push([t.id,".el-row[data-v-79cd15bd]{margin-bottom:10px}.el-row[data-v-79cd15bd]:last-child{margin-bottom:0}",""]);const n=s},5633:(t,e,r)=>{r.r(e),r.d(e,{default:()=>_});var a=r(7757),s=r.n(a),n=r(7297),c=n.tA.reactiveProp;const o={extends:n.$I,mixins:[c],props:["options"],mounted:function(){this.renderChart(this.chartData,{maintainAspectRatio:!1})}};var l=r(1900);const i=(0,l.Z)(o,undefined,undefined,!1,null,null,null).exports;var u=void 0;function d(t,e,r,a,s,n,c){try{var o=t[n](c),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(a,s)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var n=t.apply(e,r);function c(t){d(n,a,s,c,o,"next",t)}function o(t){d(n,a,s,c,o,"throw",t)}c(void 0)}))}}const p={name:"MyBudget",props:["homeurl"],data:function(){return{loading:!0,page_title:"Budget",currencies:[],budgetCurrency:"",currency:this.$route.params.id,items:[],cashes:[],stats:[{income_summ:0,expense_summ:0,free_money:0,curr_symbol:""}],income_summ:0,addform:{category:"",summ:""},addformRules:{category:[{required:!0,message:"Required field",trigger:"blur"}],summ:[{required:!0,message:"Required field",trigger:"blur"}]},chart_data:{}}},components:{DoughnutChart:i},methods:{getCurrencies:function(){var t=this;return m(s().mark((function e(){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("".concat(t.homeurl,"/currencies/data/1"));case 3:r=e.sent,a=r.data,t.currencies=a.items,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t.loading=!0,t.$notify.error({title:"Application error!"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getData:function(){var t=this;return m(s().mark((function e(){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("".concat(t.homeurl,"/budget/").concat(t.currency,"/data"));case 3:r=e.sent,a=r.data,t.items=a.items,t.stats[0].expense_summ=a.expense_summ,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t.loading=!0,t.$notify.error({title:"Application error!"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getCashes:function(){var t=this;return m(s().mark((function e(){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("".concat(t.homeurl,"/budget/").concat(t.currency,"/cashes"));case 3:r=e.sent,a=r.data,t.cashes=a.items,t.stats[0].income_summ=a.income_summ,t.stats[0].curr_symbol=a.curr_symbol,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.loading=!0,t.$notify.error({title:"Application error!"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getCurr:function(t){t=Math.floor(t);var e=this.currencies.filter((function(e){return e.id==t}));return void 0===e[0]?{id:""}:e[0].id},redirectToCurrency:function(){var t=this;return m(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""==t.budgetCurrency?t.$router.push({name:"MyBudget"}):(t.$router.push({name:"MyBudgetWithCurrency",params:{id:t.budgetCurrency}}),window.location.reload());case 1:case"end":return e.stop()}}),e)})))()},submitAddForm:function(){var t=this;this.$refs.addform.validate((function(e){if(!e)return!1;t.addItem()}))},addItem:function(){var t=this;return m(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,(r=new FormData).append("category",t.addform.category),r.append("summ",t.addform.summ),e.next=7,axios.post("".concat(t.homeurl,"/budget/").concat(t.currency,"/add"),r);case 7:return t.$notify.success({title:"Expense category added!"}),t.addform.category="",t.addform.summ="",t.loading=!1,e.next=13,t.getAll();case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),t.loading=!0,t.$notify.error({title:"Application Error!"});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()},removeItem:function(t){var e=this;return m(s().mark((function r(){var a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,axios.delete("".concat(e.homeurl,"/budget/").concat(e.currency,"/").concat(t.id));case 3:return a=e.items.indexOf(t),e.items.splice(a,1),e.$notify.success({title:"Category Deleted!"}),r.next=8,e.getAll();case 8:r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),e.loading=!0,e.$notify.error({title:"Application error!"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},calculateFn:function(){var t=this;return m(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.stats[0].free_money=t.stats[0].income_summ-t.stats[0].expense_summ);case 1:case"end":return e.stop()}}),e)})))()},chartCalc:function(){var t=this;return m(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.chart_data={labels:["Incomes","Expenses","Free Money"],datasets:[{label:"Summ",backgroundColor:["#09e53c","#ff0000","#009dff"],data:[t.stats[0].income_summ,t.stats[0].expense_summ,t.stats[0].free_money]}]};case 1:case"end":return e.stop()}}),e)})))()},getAll:function(){var t=this;return m(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCurrencies();case 2:return e.next=4,t.getData();case 4:return e.next=6,t.getCashes();case 6:return e.next=8,t.calculateFn();case 8:return e.next=10,t.chartCalc();case 10:case"end":return e.stop()}}),e)})))()}},watch:{currency:function(){u.currency<1&&u.getAll()}},mounted:function(){var t=this;return m(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAll();case 2:t.$nextTick((function(){t.budgetCurrency=t.getCurr(t.$route.params.id)})),t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}};var f=r(3379),v=r.n(f),g=r(5442),h={insert:"head",singleton:!1};v()(g.Z,h);g.Z.locals;const _=(0,l.Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"main"},[r("h3",{staticClass:"page-title"},[t._v(t._s(t.page_title))]),t._v(" "),r("div",{staticClass:"main-content"},[r("div",[r("el-row",{staticClass:"mb-4",attrs:{gutter:24}},[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header bg-success text-white"},[t._v("\n                          Select currency\n                      ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("el-skeleton",{staticStyle:{width:"100%"},attrs:{loading:t.loading,animated:""}},[r("template",{slot:"template"},[r("el-skeleton",{attrs:{rows:4}})],1),t._v(" "),[r("el-select",{attrs:{placeholder:"Select"},on:{change:function(e){return t.redirectToCurrency()}},model:{value:t.budgetCurrency,callback:function(e){t.budgetCurrency=e},expression:"budgetCurrency"}},[r("el-option",{attrs:{label:"Not Selected",value:""}}),t._v(" "),t._l(t.currencies,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name+" ("+t.symbol+")",value:t.id}})}))],2)]],2)],1)])])],1),t._v(" "),r("div",[t.cashes.length>0?r("el-row",{staticClass:"mb-4",attrs:{gutter:24}},[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header bg-success text-white"},[t._v("\n                              Add expense category\n                          ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("el-skeleton",{staticStyle:{width:"100%"},attrs:{loading:t.loading,animated:""}},[r("template",{slot:"template"},[r("el-skeleton",{attrs:{rows:5}})],1),t._v(" "),[r("el-form",{ref:"addform",staticClass:"demo-ruleForm",attrs:{model:t.addform,"label-position":"top","label-width":"100px",rules:t.addformRules}},[r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:12,xs:24,sm:24,md:12,lg:12,xl:12}},[r("el-form-item",{attrs:{label:"Category",prop:"category"}},[r("el-input",{attrs:{required:""},model:{value:t.addform.category,callback:function(e){t.$set(t.addform,"category",e)},expression:"addform.category"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12,xs:24,sm:24,md:12,lg:12,xl:12}},[r("el-form-item",{attrs:{label:"Summ",prop:"summ"}},[r("el-input",{attrs:{type:"number",required:""},model:{value:t.addform.summ,callback:function(e){t.$set(t.addform,"summ",e)},expression:"addform.summ"}})],1)],1)],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){return t.submitAddForm()}}},[t._v("Add")])],1)],1)]],2)],1)])])],1):t._e(),t._v(" "),t.cashes.length>0?r("el-row",{staticClass:"mb-4",attrs:{gutter:24}},[r("el-col",{attrs:{span:12,xs:24,sm:24,md:12,lg:12,xl:12}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header bg-success text-white"},[t._v("\n                              Budget statistics\n                          ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("el-skeleton",{staticStyle:{width:"100%"},attrs:{loading:t.loading,animated:""}},[r("template",{slot:"template"},[r("el-skeleton",{attrs:{rows:5}})],1),t._v(" "),[r("doughnut-chart",{attrs:{height:250,"chart-data":t.chart_data}})]],2)],1)])]),t._v(" "),r("el-col",{attrs:{span:12,xs:24,sm:24,md:12,lg:12,xl:12}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header bg-success text-white"},[t._v("\n                              Calculating\n                          ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("el-skeleton",{staticStyle:{width:"100%"},attrs:{loading:t.loading,animated:""}},[r("template",{slot:"template"},[r("el-skeleton",{attrs:{rows:5}})],1),t._v(" "),[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.stats,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"Incomes",prop:"income_summ"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                  "+t._s(e.row.curr_symbol)+t._s(e.row.income_summ)+"\n                                              ")]}}],null,!1,1233685934)}),t._v(" "),r("el-table-column",{attrs:{label:"Expenses",prop:"expense_summ"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                  "+t._s(e.row.curr_symbol)+t._s(e.row.expense_summ)+"\n                                              ")]}}],null,!1,939553661)}),t._v(" "),r("el-table-column",{attrs:{label:"Free Money",prop:"free_money"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                  "+t._s(e.row.curr_symbol)+t._s(e.row.free_money)+"\n                                              ")]}}],null,!1,2385606255)})],1)]],2)],1)])])],1):t._e(),t._v(" "),r("el-row",{staticClass:"mb-4",attrs:{gutter:24}},[r("el-col",{attrs:{span:12,xs:24,sm:24,md:12,lg:12,xl:12}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header bg-success text-white"},[t._v("\n                              Cashes in budget\n                          ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("el-skeleton",{staticStyle:{width:"100%"},attrs:{loading:t.loading,animated:""}},[r("template",{slot:"template"},[r("el-skeleton",{attrs:{rows:5}})],1),t._v(" "),[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.cashes,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"Name",prop:"name"}}),t._v(" "),r("el-table-column",{attrs:{label:"Balance",prop:"current_balance"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                  "+t._s(e.row.curr_symbol)+t._s(e.row.current_balance)+"\n                                              ")]}}])})],1)]],2)],1)])]),t._v(" "),r("el-col",{attrs:{span:12,xs:24,sm:24,md:12,lg:12,xl:12}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header bg-success text-white"},[t._v("\n                              Expense categories\n                          ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("el-skeleton",{staticStyle:{width:"100%"},attrs:{loading:t.loading,animated:""}},[r("template",{slot:"template"},[r("el-skeleton",{attrs:{rows:5}})],1),t._v(" "),[r("el-table",{staticClass:"mb-3",staticStyle:{width:"100%"},attrs:{data:t.items,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"Name",prop:"category"}}),t._v(" "),r("el-table-column",{attrs:{label:"Summ",prop:"summ"}}),t._v(" "),r("el-table-column",{attrs:{label:"Actions",align:"right",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popconfirm",{attrs:{cancelButtonText:"No",confirmButtonText:"Yes",title:"Delete category?"},on:{confirm:function(r){return t.removeItem(e.row)},onConfirm:function(r){return t.removeItem(e.row)}}},[r("el-button",{staticClass:"ml-2",attrs:{slot:"reference",type:"danger",icon:"el-icon-delete"},slot:"reference"})],1)]}}])})],1)]],2)],1)])])],1)],1)],1)])])])}),[],!1,null,"79cd15bd",null).exports},8022:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});const a={name:"NotFound"};const s=(0,r(1900).Z)(a,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-danger",staticStyle:{float:"left","margin-top":"200px","text-align":"center",width:"100%"}},[t._v("404 | Page not found")])])}],!1,null,"5c4eacb1",null).exports}}]);