!function(){var e=$.param("userOneYuanId")||$.getUrlParam("userOneYuanId",!0),t=$.param("clubId")||$.getUrlParam("clubId",!0)||$.$.clubID;return e&&t?($.eventMaskShow(!0),$.ajax({url:"../api/v2/club/one_yuan/draw/user_one_yuan/view",isReplaceUrl:!0,data:{clubId:t,userOneYuanId:e},success:function(e){function t(){$.ajax({url:"../api/v2/club//user/coupon_qrcode",isReplaceUrl:!0,data:{userActId:i.suaId},success:function(e){200==e.statusCode?$("#content>div.qr-info>img")[0].src=e.respData:n>0?(n--,t()):$.tipShow(e.msg||"获取二维码失败")}})}if($.eventMaskShow(!1),200==e.statusCode){e=e.respData;var i=e.userAct;if($("div.club-info>div:nth-of-type(1)").CSS("background-image","url("+(i.clubImageUrl||$.$.defaultClubLogo)+")"),$("div.club-info>div:nth-of-type(2)").Text(i.clubName),$("div.club-info").Click(function(e,t){$.$.clubID&&$.$.clubID==i.clubId?$.page("home"):location.href=location.origin+location.pathname+"?club="+i.clubId}),$("div.project-info>div:nth-of-type(1)").CSS("background-image","url("+e.imageUrl+")"),$("div.project-info>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)").Text(i.actTitle),$("div.project-info>div:nth-of-type(2)>div:nth-of-type(2)>span").Text(i.actValue+"元"),$("div.project-info>div:nth-of-type(2)>div:nth-of-type(3)>span").Text(e.ticketNo),i.couponQrCodeUrl)$("#content>div.qr-info>img")[0].src=i.couponQrCodeUrl;else{var n=3;t()}$("#content>div.qr-info>span").Text($.spaceStr(i.couponNo)),$("div.explain-item>.exp-item-plain:nth-of-type(2)>span").Text(i.couponPeriod),i.useTimePeriod&&($("div.explain-item>.exp-item-plain:nth-of-type(3)>span").Text(i.useTimePeriod),$("div.explain-item>.exp-item-plain:nth-of-type(3)").Show()),$("#actExplain>.exp-item-ul").Html(i.actContent),$("#projectExplain>.exp-item-ul").Html(i.actDescription)}else $.tipShow(e.msg||"查询数据失败")}}),void $.pageSwitch()):($.tipShow("缺少必要参数"),$.pageCancel())}();