!function(){$.ajax({url:"homeData",success:function(e){function t(e,t){function i(){function e(){if(m[9]>0)m=[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9]-1],l([9]);else if(m[8]>0)m=[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8]-1,9],l([8,9]);else if(""==m.join("").replace(/0/g,""))return d&&o?(C[t]=!0,$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(2)").Class("hide")):i(),!0;setTimeout(e,10)}function s(){var e=[];if(m[7]>0)m=[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7]-1,9,9],e=e.concat([7]);else if(m[6]>0)m=[m[0],m[1],m[2],m[3],m[4],m[5],m[6]-1,9,9,9],e=e.concat([6,7]);else if(m[5]>0)m=[m[0],m[1],m[2],m[3],m[4],m[5]-1,5,9,9,9],e=e.concat([5,6,7]);else if(m[4]>0)m=[m[0],m[1],m[2],m[3],m[4]-1,9,5,9,9,9],e=e.concat([4,5,6,7]);else if(m[3]>0)m=[m[0],m[1],m[2],m[3]-1,5,9,5,9,9,9],e=e.concat([3,4,5,6,7]);else if(m[2]>0)m=[m[0],m[1],m[2]-1,9,5,9,5,9,9,9],e=e.concat([2,3,4,5,6,7]);else if(m[1]>0)m=[m[0],m[1]-1,2,4,5,9,5,9,9,9],e=e.concat([1,2,3,4,5,6,7]);else if(m[0]>0)m=[m[0]-1,9,2,4,5,9,5,9,9,9],e=e.concat([0,1,2,3,4,5,6,7]);else if(""==m.join("").replace(/0/g,""))return d&&o?(C[t]=!0,$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(2)").Class("hide")):i(),!0;l(e),setTimeout(s,1e3)}function l(e){e.forEach(function(e){D.Index(e).Children().Index(0).Text(m[e]),b.Index(e).Class("toggle")})}var v,r,c,p,f,h,u,m,g=(Math.round,Math.floor),y=+new Date,b=$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(3)>span"),D=$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(3)>span>div"),T=!1;if(n>y)v=n-y,$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(3)>div:nth-of-type(1)").Text("距开始：");else{if(!(a>y))return d=!0,o=!0,C[t]=!0,$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(3)").Class("act-end").Html("活动已结束，欢迎下次抢购！"),$("#robProjectList>div:nth-of-type("+(t+1)+")>div:nth-of-type(2)").Class("hide"),void $("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(2)").Class("hide");v=a-y,$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(3)>div:nth-of-type(1)").Text("距结束："),$("#robProjectList>div:nth-of-type("+(t+1)+")>div:nth-of-type(2)").ClassClear("hide"),d=!0,$("#robProjectList>div:nth-of-type("+(t+1)+")>div>div:nth-of-type(2)>div:nth-of-type(2)>span:nth-of-type(2)").ClassClear("hide")}r=v/1e3,r>0&&(c=g(v%1e3/10),p=g(r%60),f=g(r/60%60),h=g(r/3600%24),u=g(r/3600/24),m=[g(u/10),u%10,g(h/10),h%10,g(f/10),f%10,g(p/10),p%10,g(c/10),g(v%10)],D.Index(0).Children().Text(m[0]),D.Index(1).Children().Text(m[1]),D.Index(2).Children().Text(m[2]),D.Index(3).Children().Text(m[3]),D.Index(4).Children().Text(m[4]),D.Index(5).Children().Text(m[5]),D.Index(6).Children().Text(m[6]),D.Index(7).Children().Text(m[7]),D.Index(8).Children().Text(m[8]),D.Index(9).Children().Text(m[9]),0!=u||T||(T=!0,$("#robProjectList>div:nth-of-type("+(t+1)+") .rob-day").Class("hide"),$("#robProjectList>div:nth-of-type("+(t+1)+") .rob-millis").ClassClear("hide"),setTimeout(e,10)),setTimeout(s,v%1e3),b.Event(function(){var e,t=document.createElement("tmpelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd",MsTransition:"msTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),function(e,i){var n=$(i),a=n.Children().Index(0).Children();a.Index(1).Text(a.Index(0).Text()),n.ClassClear("toggle"),0!=m[0]||0!=m[1]||T||(T=!0,$("#robProjectList>div:nth-of-type("+(t+1)+") .rob-day").Class("hide"),$("#robProjectList>div:nth-of-type("+(t+1)+") .rob-millis").ClassClear("hide"))}))}var n=e.startDate,a=e.endDate,d=!1,o=!1;i()}if("200"!=e.statusCode)return $.tipShow(e.msg||"获取会所数据失败！");e=e.respData;var i,n,a,d,o="",s="",l=e.sliderPic.length,v=$("#telDetail"),r=$("#content")[0],c=$(".banner>div:nth-of-type(1)>div:nth-of-type(1)"),p=$(".banner>div:nth-of-type(1)>div:nth-of-type(3)"),f=$(".banner>div:nth-of-type(2)>div");for(e.club.telephone||(e.club.telephone=""),0==l&&(e.sliderPic=[{imageUrl:$.$.defaultBanner}],l=1),i=0;i<l;i++)o+='<img src="'+(e.sliderPic[i].imageUrl||$.$.defaultBanner)+'" link="'+(e.sliderPic[i].link||"")+'"/>',s+="<span></span>";for(c.Html(o),p.Html(s),$.$.clubLogo=e.club.imageUrl||$.$.defaultClubLogo,f.CSS("backgroundImage",'url("'+$.$.clubLogo+'")'),$.$.clubName=e.club.name||$.$.defaultClubName,$(".banner>div:nth-of-type(3)").Text($.$.clubName),o="",i=0,l=e.serviceItems.length;i<l;i++)o+='<div hh="'+e.serviceItems[i].id+'">                     <div style="background-image: url(\''+(e.serviceItems[i].imageUrl||$.$.defaultService)+"')\"></div>                        <div>"+e.serviceItems[i].name+"</div>                        <div>                            <div"+(e.serviceItems[i].price1?"":' style="visibility:hidden;"')+"></div>                            <div"+(e.serviceItems[i].price1?"":' style="visibility:hidden;"')+">"+($.formatPrice(e.serviceItems[i].price1,e.serviceItems[i].duration1,e.serviceItems[i].durationUnit)||" ")+"</div>                        </div>                    </div>";if($(".service>div:nth-of-type(2)").Html(o),0==l&&$(".service").Hide(),o="",""!=e.club.telephone)for(i=0,s=e.club.telephone.split(","),l=s.length;i<l;i++)o+="<div>"+s[i]+"</div>";if($("#telDetail>div").Html(o+"<div>取消</div>"),n=$.scroll({content:$(".banner>div:nth-of-type(1)")[0],contentX:c[0],flagX:p[0],loopX:!0,autoX:!0}),$(".banner>div:nth-of-type(1)>div:nth-of-type(1)>img").Event("click",function(e,t){var i=$(t).Attr("link");i&&(top.location.href=i)}),$(".menu>div:nth-of-type(1)").Page("clubProfile"),$(".menu>div:nth-of-type(2)").Page("promotions"),$(".menu>div:nth-of-type(3)").Page("serviceList"),$(".menu>div:nth-of-type(4)").Page("map"),$(".menu>div:nth-of-type(5)").Click(""==e.club.telephone?function(){$.tipShow("暂无电话")}:function(){v.Class("active"),$.hideOrderMenu()}),v.Event("touchmove",function(e){e.preventDefault()},!1),v.Click(function(e,t){e.target==t&&(v.ClassClear("active"),$.showOrderMenu())}),a=$("#telDetail>div>div"),d=a.Remove(a.length-1),a.Click(function(e,t){location.href="tel:"+t.innerHTML}),d.Click(function(){v.ClassClear("active"),$.showOrderMenu()}),e.techs.length>0){for(o="",i=0;i<e.techs.length;i++)o+="<div hh='"+e.techs[i].id+"'>                        <div style=\"background-image: url('"+(e.techs[i].avatarUrl||$.$.defaultHeader)+"')\">                                <div>"+e.techs[i].name+"</div>                            </div>                        </div>";$(".tech>div:nth-of-type(2)>div").Html(o),$.scroll({content:$(".tech>div:nth-of-type(2)")[0],contentX:$(".tech>div:nth-of-type(2)>div")[0],numsX:4,perX:4.5*$.$.scale*16,widthX:19.333*$.$.scale*16,loopX:!0})}else $(".tech").CSS("display","none");$(".tech>div:nth-of-type(1)").Click(function(){$.page("technicianList")}),$(".tech>div:nth-of-type(2)").Delegate("click",">div>div",function(e,t){$.page("technicianDetail&id="+t.getAttribute("hh"))}),$(".service>div:nth-of-type(1)").Click(function(){$.page("serviceList")}),$(".service>div:nth-of-type(2)>div").Click(function(e,t){$.sessionStorage("home_top",r.scrollTop,3e4),$.page("serviceItem&id="+t.getAttribute("hh")+"&top=1")}),r.scrollTop=$.sessionStorage("home_top"),$.sessionStorageClear("home_top"),$("#orderBtn").Page("technicianList");var h=$("#coupons"),u=$.localStorage("getCouponsTime"+$.$.clubID)||0,m=($.localStorage("getFlowersTime"+$.$.clubID)||0,(new Date).getTime()),g=m-u>864e5,y=!0;(g||y)&&(g&&(h.Click(function(e,t){e.preventDefault(),e.target==t&&(h.Hide(),$.localStorage("getCouponsTime"+$.$.clubID,m))}),h.Event("touchmove",function(e){e.preventDefault()},!1),$("#coupons>div:nth-of-type(3)").Click(function(){h.Hide(),$.localStorage("getCouponsTime"+$.$.clubID,m)})),$.ajax({url:"top_popup/data",success:function(e){function t(){$.localStorage("getCouponsTime"+$.$.clubID,m),location.href=e.respData.shareUrl}function i(){s?o.Class("toggle"):o.ClassClear("toggle"),s=!s,setTimeout(i,800)}if(200==e.statusCode)if("coupon"==e.respData.type&&g){var n=function(e){for(var t,i=0,n=0;n<e.length;n++)t=e.charAt(n),i+=null!=t.match(/[^\x00-\xff]/gi)?2:1;return i}(e.respData.actTitle),a=$("#coupons>div:nth-of-type(1)>div"),d=$("#coupons>div:nth-of-type(1)>div>div");d.Html(e.respData.actTitle),n<=10||(n<=12?a.Class("spec-6"):n<=14?a.Class("spec-7"):n<=16?a.Class("spec-8"):(a.Class("two-line"),n>32&&d.Html(e.respData.actTitle.substr(0,14)+"..."))),$("#coupons>div:nth-of-type(1)").Click(t),$("#coupons>div:nth-of-type(2)").Click(t),h.Show()}else if("plumFlower"==e.respData.type&&y){var o=$("#getPlumflowers>div>div:nth-of-type(1)>div"),s=!0;setTimeout(i,800),$("#getPlumflowers").Class("active"),$("#getPlumflowers>div>div:nth-of-type(2)").Click(function(){$("#getPlumflowers").ClassClear("active"),$.localStorage("getFlowersTime"+$.$.clubID,m)}),$("#getPlumflowers>div>div:nth-of-type(1)>a").Click(function(){$.localStorage("getFlowersTime"+$.$.clubID,m),location.href=e.respData.shareUrl})}}}));var C=[];$.ajax({url:"../api/v2/club/paid_service_item/list",isReplaceUrl:!0,data:{clubId:$.$.clubID},success:function(e){if(200==e.statusCode){e=e.respData||[];var i=[],n=[];e.forEach(function(e,t){var a=+new Date;i.push('<div class="rob-project" data-item-id="'+e.id+'" data-act-index="'+t+'">                                          <div>                                            <div style="background-image:url('+e.imageUrl+')"></div>                                            <div>                                              <div>                                                <div>'+e.name+"</div>                                                "+(e.canPaidCount>0&&e.canPaidCount-e.paidCount==0?(C[t]=!0,'<div class="act-end">抢光了</div>'):"<div>"+(e.canPaidCount>0?"剩余<span>"+(e.canPaidCount-e.paidCount)+"</span>份":"<span>不限份数</span>")+"</div>")+"                                              </div>                                              <div>￥"+e.amount+"<span>原价：<span>"+e.price+"</span>元</span><span "+(a>new Date(e.startDate.replace(/-/g,"/")).getTime()&&a<new Date(e.endDate.replace(/-/g,"/")).getTime()&&(e.canPaidCount-e.paidCount>0||0==e.canPaidCount)?"":'class="hide"')+">去抢购</span>                                              </div>                                              "+((0==e.canPaidCount||e.canPaidCount-e.paidCount>0)&&(new Date).getTime()<new Date(e.endDate.replace(/-/g,"/")).getTime()?"<div>"+function(){var i=a<new Date(e.startDate.replace(/-/g,"/")).getTime();return i?(n[t]={startDate:new Date(e.startDate.replace(/-/g,"/")).getTime(),endDate:new Date(e.endDate.replace(/-/g,"/")).getTime()},"<div>距开始：</div>"):a<new Date(e.endDate.replace(/-/g,"/")).getTime()?(n[t]={startDate:new Date(e.startDate.replace(/-/g,"/")).getTime(),endDate:new Date(e.endDate.replace(/-/g,"/")).getTime()},isCanPay=!0,"<div>距结束：</div>"):"<div>已结束：</div>"}()+'                                              <span class="rob-day"><div><div>0</div><div>0</div></div></span>                                              <span class="rob-day"><div><div>0</div><div>0</div></div></span> <div class="rob-day">天</div>                                              <span><div><div>0</div><div>0</div></div></span>                                              <span><div><div>0</div><div>0</div></div></span> <div>时</div>                                              <span><div><div>0</div><div>0</div></div></span>                                              <span><div><div>0</div><div>0</div></div></span> <div>分</div>                                              <span><div><div>0</div><div>0</div></div></span>                                              <span><div><div>0</div><div>0</div></div></span> <div>秒</div>                                              <span class="rob-millis hide"><div><div>0</div><div>0</div></div></span>                                              <span class="rob-millis hide"><div><div>0</div><div>0</div></div></span> <div class="rob-millis hide">毫秒</div>                                              </div>':(C[t]=!0,'<div class="act-end">活动已结束，欢迎下次抢购！</div>'))+"                                            </div>                                          </div>                                        </div>")}),$("#robProjectList").Html(i.join("")).Delegate("click",".rob-project",function(e,t){C[t.dataset.actIndex]!==!0&&$.page("robProjectDetail&robProjectId="+t.dataset.itemId)}),n.forEach(function(e,i){t(e,i)})}}}),$.pageSwitch()},error:function(e){}})}();