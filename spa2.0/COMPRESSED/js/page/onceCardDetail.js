!function(){function e(){$.ajax({url:"../api/v2/club/item_card/activity/detail",data:{activityId:n,clubId:s},isReplaceUrl:!0,success:function(e){if(200==e.statusCode){e=e.respData,s=e.clubId;var o=e.activity,d=e.item,v=o.itemCardPlans;$(".banner>div>div").CSS("background-image","url("+(e.clubImageUrl||$.$.defaultClubLogo)+")"),$(".banner>div>span").Text(e.clubName),$(".banner").CSS("background-image","url("+o.imageUrl+")"),$(".service-wrap>div")[0].innerHTML=o.name+"<span>"+d.duration+d.durationUnit+"</span>",o.period=o.period.replace(/(Y|M|D)/g,function(){return r[arguments[0]]?r[arguments[0]]:arguments[0]}),$(".pay>div:nth-of-type(3)>strong").Text(o.period+"内"),$(".pay>div:nth-of-type(5)").Html(o.description||"无"),$(".service>div.service-item>div:nth-of-type(1)").CSS("background-image","url("+(d.imageUrl||$.$.defaultService)+")"),$(".service>div.service-item>div:nth-of-type(2)").Text(d.name),$(".service>div.service-item>div:nth-of-type(3)").Html(d.price+"元/"+d.duration+d.durationUnit+(d.pricePlus?"<span>加钟</span>"+d.pricePlus+"元/"+d.durationPlus+d.durationUnitPlus:"")),$(".service>div.service-item").Click(function(){$.page("serviceItem&id="+d.id)}),d.price=parseFloat(d.price);var g,m,C,f="",y="";for(a=0;a<v.length;a++)g=v[a],"Y"==g.optimal&&(C=g),m=d.price*(g.paidCount+g.giveCount),g.originAmount=100*m,f+="<li planId='"+g.id+"' data-index='"+a+"' class='"+("Y"==g.optimal?"active best":"")+"'>买<span>"+g.paidCount+"</span>送<span>"+g.giveCount+"</span></li>",y+="<li class='"+("Y"==g.optimal?"active":"")+"'>                                                     <div>"+d.name+"<span>"+d.price+"元/次</span><span>"+(g.paidCount+g.giveCount)+"次</span></div>                                                     <div>¥<b>"+(g.actAmount/100).toFixed(2)+"</b><span>¥"+m.toFixed(2)+"</span><span>每次立减"+((m-g.actAmount/100)/(g.giveCount+g.paidCount)).toFixed(2)+"元</span></div>                                                    </li>";if($(".service-wrap>ul.package-title").Html(f),$(".service-wrap>ul.package-content").Html(y),i=$(".service-wrap>ul.package-title>li"),t=$(".service-wrap>ul.package-content>li"),i.Click(function(e,a){if(!a.classList.contains("active")){var n=a.getAttribute("data-index");i.ClassClear("active"),t.ClassClear("active"),a.classList.add("active"),t[n].classList.add("active")}}),$(".banner>div").Click(function(){$.$.clubID&&$.$.clubID==s?$.page("home"):s&&(location.href=location.origin+"/spa-manager/spa2/?club="+s+"#home")}),"已售完"!=o.statusName&&"已过期"!=o.statusName||(u.Class("notPay"),u.Text("逛商城、找优惠"),$(".service").Class("notPay"),"已售完"==o.statusName?l.Class("sellOut"):l.Class("expired")),$.$.ua.isWX){var h=(C.actAmount/C.originAmount*10).toFixed(1);$.X5Config({title:o.name,desc:d.name+"_"+h+"折_（买"+C.paidCount+"送"+C.giveCount+"）",link:location.href.split("?")[0]+"?club="+s+"#onceCardDetail&id="+n+(c?"&techId="+c:""),imgUrl:e.clubImageUrl||$.$.defaultClubLogo})}$.pageSwitch(!1),p&&(i[p-0].click(),l[0].click())}else $.tipShow(e.msg||"获取次卡详情失败！"),$.pageCancel()}})}var a,i,t,n=$.param("id"),s=$.param("clubId")||$.$.clubID||"",c=$.param("techId")||"",r={Y:"年",M:"月",D:"日"},o=$.param("code")||$.getUrlParam("code")||$.$.payAuthCode,p=$.sessionStorage("once-card-pay-param"),d=document,l=$("#footer"),u=$("#footer>div");return n&&s?($.$.payAuthCode=o,p&&o?$.ajax({url:"../wx/oauth2/user/openid",isReplaceUrl:!0,type:"post",data:{code:$.$.payAuthCode,scope:"snsapi_base",wxmp:"9358",userType:"user",state:"once-card-pay"},success:function(a){if(200==a.statusCode)e();else{if("935801"!=a.statusCode)return $.tipShow(a.msg||"获取openId失败！"),$.pageCancel();$.getOauthCode("","9358","once-card-pay","base")}}}):e(),void l.Click(function(){if(u.ClassHave("notPay"))return void $.page("discountMall");if($.$.ua.isWX){var e=$(".package-title>li.active").Attr("planId");if(!e)return $.tipShow("未选择套餐！");if(u.ClassHave("processing"))return $.tipShow("购买中，请稍候...");u.Class("processing").Text("购买中..."),$.ajax({url:"../api/v2/wx/pay/once_card/save",isReplaceUrl:!0,type:"post",data:{clubId:s,techId:c,itemPlanId:e},success:function(e){function a(){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp+"",nonceStr:e.nonceStr,"package":e["package"],signType:e.signType,paySign:e.paySign},function(a){u.ClassClear("processing"),a.err_msg&&a.err_msg.indexOf("ok")>=0?($.tipShow("支付成功！"),$.page("onceCardOrders")):(u.Text("购买"),$.tipShow("未能成功支付！"),$.ajax({url:"../api/v2/wx/pay/activity/payment/cancel",isReplaceUrl:!0,type:"post",data:{payId:e.payId},success:function(){}}))})}200==e.statusCode?(e=JSON.parse(e.respData),"undefined"==typeof WeixinJSBridge?d.addEventListener?d.addEventListener("WeixinJSBridgeReady",a,!1):d.attachEvent&&(d.attachEvent("WeixinJSBridgeReady",a),d.attachEvent("onWeixinJSBridgeReady",a)):a()):"935801"==e.statusCode?($.sessionStorage("once-card-pay-param",$(".package-title>li.active").Attr("data-index")),$.getOauthCode("","9358","once-card-pay","base")):($.tipShow(e.msg||"支付失败！"),u.ClassClear("processing").Text("购买"))},error:function(){$.tipShow("请求支付失败！"),u.ClassClear("processing").Text("购买")}})}else $.tipShow("请在微信中打开！")})):($.pageCancel(),$.tipShow("页面缺少访问参数！"))}();