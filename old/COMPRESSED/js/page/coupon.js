!function(){function e(e,c){r||(r=!0,d=e||d+1,g.ClassClear("none"),v.Class("none"),h=!1,$.ajax({url:"../api/v2/club/user_get_coupons",isReplaceUrl:!0,data:{loginName:$.$.userLoginName,clubId:$.$.clubID,page:d,pageSize:b},success:function(e){if("200"!=e.statusCode)return $.tipShow(e.msg||"数据请求失败！");if("9358"!=$.$.visitChannel){for(e=e.respData,u="",s=0,i=e.length;s<i;s++)p!=e[s].clubId+"-"+e[s].useType&&(u+='<div class="coupon-type">'+e[s].useTypeName+"</div>",p=e[s].clubId+"-"+e[s].useType),u+=o(e[s]);1==d?(l.Html(u),u?l.ClassClear("nullData"):(l.Class("nullData"),h=!0),C=y[0].scrollHeight):(l.Html(u,!0),i<b&&(h=!0,v.ClassClear("none")))}else{for(n={},s=0;s<e.respData.length;s++)n[e.respData[s].clubId]||(n[e.respData[s].clubId]={clubName:e.respData[s].clubName,clubId:e.respData[s].clubId,list:[]}),n[e.respData[s].clubId].list.push(e.respData[s]);u="";var m,S,f,D=0,T="";for(m in n){if(f=!1,d>1&&0==D&&(S=$("#content>div>div:nth-of-type(2)>div>div:last-child"),S.Attr("hh")==n[m].clubId)){for(a=n[m].list,s=0;s<a.length;s++)T+=o(a[s]);S.Html(T,!0),f=!0}if(!f){for(u+="<div hh='"+n[m].clubId+"'><div class='header'>"+n[m].clubName+"</div>",a=n[m].list,s=0;s<a.length;s++)p!=n[m].clubId+"-"+a[s].useType&&(u+='<div class="coupon-type">'+a[s].useTypeName+"</div>",p=n[m].clubId+"-"+a[s].useType),u+=o(a[s]);u+="</div>"}D++}1==d?(y.Html(u),u?y.ClassClear("nullData"):(y.Class("nullData"),h=!0),C=y[0].scrollHeight):(y.Html(u,!0),e.respData.length<b&&(h=!0,v.ClassClear("none")))}t(),r=!1,g.Class("none"),c&&c()}}))}function o(e){var o="已过期"==e.couponStatusDescription||"已使用"==e.couponStatusDescription,t="paid_service_item"==e.couponType;"money"==e.useType&&0==e.consumeMoney&&(e.consumeMoneyDescription="&nbsp;");var s="<div type='"+e.couponType+"' hh='"+e.userActId+"' class='item "+(o?"expire":"")+"'>                        <i></i>                        <div>"+(e.actTitle+(t?"券":""))+"</div>                        <div>"+("money"==e.useType?e.actValue+"元现金券，":"")+e.consumeMoneyDescription+"</div>                        <div>券有效期："+(t?e.couponPeriod.replace(/ \d{2}:\d{2}/g,""):e.couponPeriod)+"</div>                        <div>"+e.useTypeName+"</div>";if(o?s+="<span>"+e.couponStatusDescription+"</span>":"paid"==e.couponType&&(s+="<span class='"+(0==e.couponStatus?"unpay":1==e.couponStatus?"payed":"expire")+"'>"+e.couponStatusDescription+"</span>"),s+="<div style='display:"+("redpack"==e.couponType?"block":"none")+"'>分享获得更多优惠机会</div>",t&&!o){var n=new Date(e.useEndDate.split(" ")[0].replace(/-/g,"/")).getTime()-(new Date).getTime();s+="<div>剩余 <span>"+Math.round(n/864e5)+"</span>天</div>"}return s+="</div>"}function t(){$("div#coupon #content>div>div:nth-of-type(2)>div>div>div.item",!0).Event("click",function(e,o){$.sessionStorage("coupon_data",y.Html()),$.sessionStorage("coupon_page",d),$.sessionStorage("coupon_page_height",C),$.sessionStorage("coupon_end",h),$.sessionStorage("coupon_ID",JSON.stringify(c)),$.sessionStorage("coupon_top",m[0].scrollTop),"paid"==o.getAttribute("type")?$.page("paidCouponDetail&userActId="+o.getAttribute("hh")):$.page("couponDetail&userActId="+o.getAttribute("hh")+"&couponType="+o.getAttribute("type"))},!0)}var s,n,a,i,p,l,u="",c=JSON.parse($.sessionStorage("coupon_ID")||"{}"),r=!1,d=1,g=$("#loadTip"),v=$("#finishTip"),h="true"==($.sessionStorage("coupon_end")||"false"),y=$("#content>div>div:nth-of-type(2)>div"),m=$("#content"),S=$.sessionStorage("coupon_top"),f=$.sessionStorage("coupon_page"),D=$.sessionStorage("coupon_data"),C=$.sessionStorage("page_height")||0,b=10,T=.4;"9358"!=$.$.visitChannel?(y.Html("<div></div>"),l=$("#content>div>div:nth-of-type(2)>div>div")):"true"==$.param("backPublic")&&$("#title>div:nth-of-type(2)").Click(function(e){e.stopImmediatePropagation(),history.back()});var _=$.getUrlParams("loginTel")[0];return _&&_!=$.$.userTel?($.$.loginUrl="coupon",$.$.userToken=null,void $.page("login")):(m.Event("scroll",function(o){!h&&m[0].scrollTop+m[0].clientHeight-(d+T-1)*C>=0&&e()}),D?(d=parseInt(f),y.Html(D),setTimeout(function(){m[0].scrollTop=S},1),t(),h&&v.ClassClear("none"),$.pageSwitch()):e(1,function(){$.pageSwitch()}),$.sessionStorageClear("coupon_ID"),$.sessionStorageClear("coupon_data"),$.sessionStorageClear("coupon_end"),$.sessionStorageClear("coupon_top"),$.sessionStorageClear("coupon_page"),void $.sessionStorageClear("coupon_page_height"))}();