import{a as H}from"./chunk-2C4LRSKT.js";import{l as R,m as U}from"./chunk-JGHYOTFW.js";import{X as V,Z as N}from"./chunk-EACOVX2Y.js";import{Ca as m,Cb as x,Da as g,Ib as d,Ka as u,Kc as L,Lc as S,Ob as c,Pc as D,Qb as h,Rb as k,Ud as F,Vd as W,_d as j,ac as s,bc as l,cc as M,ce as $,dc as P,ec as w,gc as f,he as J,jc as _,lc as r,nb as T,nd as E,od as C,qb as a,sd as O,vb as b,wc as I,wd as y,xc as v,zc as z}from"./chunk-JAZ4D6AH.js";var X=(t,n,e,i,o)=>({width:t,height:n,minWidth:e,minHeight:i,borderRadius:o}),Y=(t,n,e,i)=>({width:t,height:n,minWidth:e,minHeight:i});function Z(t,n){if(t&1&&M(0,"img",2),t&2){let e=r();c("src",e.src,T)("ngStyle",S(3,X,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px"))("alt",e.name?e.name[0]:"")}}function ee(t,n){if(t&1&&(s(0,"div",3),v(1),l()),t&2){let e=r();c("ngStyle",L(2,Y,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px")),a(),z(" ",e.name?e.name[0]:""," ")}}var q=class t{src="";name="";size=35;radius=3;check=!0;constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-logo"]],inputs:{src:"src",name:"name",size:"size",radius:"radius",check:"check"},decls:3,vars:2,consts:[["noSrc",""],["class","icon common-icon","draggable","false","loading","lazy",3,"src","ngStyle","alt",4,"ngIf","ngIfElse"],["draggable","false","loading","lazy",1,"icon","common-icon",3,"src","ngStyle","alt"],[1,"circle","common-icon",3,"ngStyle"]],template:function(e,i){if(e&1&&d(0,Z,1,9,"img",1)(1,ee,2,7,"ng-template",null,0,D),e&2){let o=I(2);c("ngIf",i.src)("ngIfElse",o)}},dependencies:[y,C,O],styles:['.icon[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;pointer-events:none;background-color:#eee;border-radius:3px;object-fit:cover;transition:all .12s linear}.icon[_ngcontent-%COMP%]:after{content:"" attr(alt);z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1890ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}.circle[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#1890ff;font-size:18px}'],changeDetection:0})};function te(t,n){if(t&1){let e=f();s(0,"div",3),_("click",function(o){let p=m(e).$implicit,B=r();return g(B.jumpService.goUrl(o,p.url))}),v(1),l()}if(t&2){let e=n.$implicit,i=r();k("background-color: "+(i.tagMap[e.id]&&i.tagMap[e.id].color)),h("cursor-pointer",e.url),a(),z(" ",i.tagMap[e.id]&&i.tagMap[e.id].name," ")}}function ne(t,n){if(t&1){let e=f();s(0,"div",7),_("click",function(o){m(e);let p=r(2);return g(p.openEditWebMoal(o))}),l()}}function ie(t,n){if(t&1){let e=f();s(0,"div",8),_("click",function(o){m(e);let p=r(2);return g(p.openMoveWebModal(o))}),l()}}function oe(t,n){if(t&1){let e=f();s(0,"div",9),_("nzOnConfirm",function(){m(e);let o=r(2);return g(o.confirmDel())})("click",function(o){m(e);let p=r(2);return g(p.handleClick(o))}),l()}if(t&2){let e=r(2);c("nzPopconfirmTitle",e.$t("_confirmDel"))}}function re(t,n){if(t&1&&(P(0),d(1,ne,1,0,"div",4)(2,ie,1,0,"div",5)(3,oe,1,1,"div",6),w()),t&2){let e=r();a(),c("ngIf",e.isLogin||e.permissions.edit),a(),c("ngIf",e.isLogin),a(),c("ngIf",e.isLogin||e.permissions.del)}}var A=class t{constructor(n){this.jumpService=n}data=[];action=!1;onDelete=new u;onMove=new u;onEdit=new u;$t=J;isLogin=F;tagMap=$;permissions=W(j);handleClick(n){n.stopPropagation(),n.preventDefault()}openEditWebMoal(n){n.stopPropagation(),n.preventDefault(),this.onEdit.emit()}confirmDel(){this.onDelete.emit()}openMoveWebModal(n){n.stopPropagation(),n.preventDefault(),this.onMove.emit()}static \u0275fac=function(e){return new(e||t)(b(H))};static \u0275cmp=x({type:t,selectors:[["tag-list"]],inputs:{data:"data",action:"action"},outputs:{onDelete:"onDelete",onMove:"onMove",onEdit:"onEdit"},decls:3,vars:2,consts:[[1,"tagbox"],["class","tag-item",3,"cursor-pointer","style","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"tag-item",3,"click"],["class","tag-item cursor-pointer tag-action","style","background-color: #1f883d","nz-icon","","nzType","edit","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action","style","background-color: #108ee9","nz-icon","","nzType","swap","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action","style","background-color: red","nz-icon","","nzType","delete","nzTheme","outline","nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",3,"nzPopconfirmTitle","nzOnConfirm","click",4,"ngIf"],["nz-icon","","nzType","edit","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#1f883d",3,"click"],["nz-icon","","nzType","swap","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#108ee9",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline","nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"tag-item","cursor-pointer","tag-action",2,"background-color","red",3,"nzOnConfirm","click","nzPopconfirmTitle"]],template:function(e,i){e&1&&(s(0,"div",0),d(1,te,2,5,"div",1)(2,re,4,3,"ng-container",2),l()),e&2&&(a(),c("ngForOf",i.data),a(),c("ngIf",i.action))},dependencies:[y,E,C,N,V,U,R],styles:[".tagbox[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.tag-item[_ngcontent-%COMP%]{padding:0 6px;border-radius:2px;font-size:12px;display:flex;align-items:center;transition:all .1s linear;color:#fff;min-height:15px}.tag-item[_ngcontent-%COMP%]:hover{opacity:.8}.tag-action[_ngcontent-%COMP%]{display:none}"]})};export{q as a,A as b};
