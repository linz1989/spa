!function(){$.ajax({url:"activities",success:function(t){if("200"!=t.statusCode)return $.tipShow(t.msg),$.pageCancel();t=t.respData;var e,o="",s=t.coupons.length,a=$("#popCouponInfo"),i=!1;for(0!=s&&(o+='<div class="title">优惠券</div><div class="coupon-list">'),e=0;e<s;e++){t.coupons[e].useType="null"==t.coupons[e].useType?"money":t.coupons[e].useType;var n=t.coupons[e];o+='<div class="money-coupon">                              <div data-act-id="'+n.actId+'">                                <div>'+n.actTitle+"</div>                                <div>"+("money"==n.useType?n.actValue+"元现金券，":"")+n.consumeMoneyDescription+"</div>                              </div>                              <div>                                <div>"+n.useTypeName+'</div>                                <div class="sure-btn '+("already_get"==n.getFlag||"finish_get"==n.getFlag?"disabled":"")+'" data-act-id="'+n.actId+'" data-act-value="'+n.actValue+'" data-act-title="'+n.actTitle+'" data-user-get-count="'+n.userGetCount+'"  data-user-get-counts="'+n.userGetCounts+'">'+("already_get"==n.getFlag?"已领取":"finish_get"==n.getFlag?"已领完":"立即领取")+"</div>                              </div>                            </div>"}for(o+="</div>",s=t.acts.length,0!=s&&(o+='<div class="title">优惠活动</div>'),e=0;e<s;e++)o+='<div class="activity" style="background-image: url(\''+t.acts[e].actLogoUrl+"')\">                    <div>                        <div>"+t.acts[e].actTitle+"</div>                        <div>活动时间："+$.formatDate(t.acts[e].startDate,t.acts[e].endDate)+"</div>                        </div>                    </div>";""==o?$("#content>div:nth-of-type(2)").Class("nullData"):$("#content>div:nth-of-type(2)").Html(o),$(".activity").Click(function(e,o,s){$.page("promotionsActivity&id="+t.acts[s].actId)}),$("#popCouponInfo>div>div:nth-of-type(2)>div:nth-of-type(1)").Click(function(){a.ClassClear()}),$("#popCouponInfo>div>div:nth-of-type(2)>div:nth-of-type(2)").Click(function(){$.page("personal")});var d=$("#content>div:nth-of-type(2)>div.coupon-list>div.money-coupon.money-coupon>div:nth-of-type(2)>div:nth-of-type(2)");d.Click(function(e,o,s){var n=$(o);if($.$.userToken){if(!$.$.userTel)return $.$.loginUrl="promotions",$.bindPhone(),!0;if(!n.ClassHave("disabled")&&!n.ClassHave("disabled")&&!i){t.coupons[s].shareUrl;i=!0,n.Class("disabled"),n.Text("领取中..."),$.ajax({url:"../get/redpacket",data:{actId:t.coupons[s].actId,phoneNum:$.$.userTel,openId:$.$.openId},success:function(e){i=!1,n.ClassClear("disabled"),n.Text("立即领取"),200==e.statusCode?(a.Class("active"),"redpack"!=t.coupons[s].couponType&&(t.coupons[s].userGetCounts++,t.coupons[s].couponSellTotal++)):206==e.statusCode?$.tipShow(e.msg||"你已经领取过了！"):$.tipShow(e.msg||"领取失败！"),200!=e.statusCode&&"redpack"!=t.coupons[s].couponType&&(n.Class("disabled"),200!=e.statusCode&&206!=e.statusCode||(o.innerHTML="已领取完")),"redpack"==t.coupons[s].couponType?(n.Class("disabled"),200!=e.statusCode&&206!=e.statusCode||(o.innerHTML="已领取")):200==e.statusCode&&(t.coupons[s].userGetCount>t.coupons[s].userGetCounts&&t.coupons[s].couponSellTotal<t.coupons[s].actTotal||(n.Class("disabled"),200!=e.statusCode&&206!=e.statusCode||(o.innerHTML="已领取完")))},error:function(t){t.msg&&$.tipShow(t.msg),i=!1,n.ClassClear("disabled"),n.Text("立即领取")}})}}else $.$.loginUrl="promotions",$.page("login")}),$.pageSwitch()}})}();