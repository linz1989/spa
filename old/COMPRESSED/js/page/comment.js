!function(){var t,e,n=$.param("orderId")||$.param("id"),a=$.param("techId"),o=$.param("type"),i=$.param("commentId")||"";$.$.payAuthCode=$.param("code")||$.getUrlParam("code")||$.$.payAuthCode,$.paramClear("commentId"),$.$.ua.isWX&&($("#content>div:nth-of-type(6)>div:nth-of-type(3)").CSS("display","none"),$("#content>div:nth-of-type(6)>div:nth-of-type(4)").CSS("display","none"),$("#content>div:nth-of-type(6)>div:nth-of-type(1)").CSS("display","block"),$("#content>div:nth-of-type(6)").CSS("padding-top","1.25rem")),$.ajax({url:($.$.clubID?"../":"")+"/impression/list",data:{},success:function(c){200!=c.statusCode&&$.tipShow(c.msg||"查询印象标签数据出错");var s=[],d={};c.respData.forEach(function(t,e){s.push("<div>"+t.tag+"</div>"),d[t.tag]=e}),$(".comment-labels").Html(s.join("")),$.ajax({url:($.$.clubID?"../":"")+"/shared/technician",data:{id:n||a,type:o,commentId:i},success:function(c){function s(t,e){var n=Math.ceil(t.offsetX/e.clientWidth/.2),a=e.dataset.index,o=$(e).Children();(!n||n<1)&&(n=1),r[a]=20*n,o[0].style.width=r[a]+"%",m[a].Text(v[a<3?0:1][n-1])}function l(t){var e=0;h.every(function(n,a){return n.Text()!=t||(e=a,!1)}),h.splice(e,1)}function p(t,e){var n=$(e);n.ClassHave("active")?(n.ClassClear("active"),l(n.Text())):(n.Class("active"),h.length>0&&3==h.length&&h.shift().ClassClear("active"),h.push(n))}if(200!=c.statusCode)return $.tipShow(c.msg||"数据获取失败！"),$.pageCancel();c=c.respData,t=c.tech;var r=[100,100,100,100],v=[["非常差","很差","一般","很好","非常好"],["非常严重","很严重","一般","无偷钟","认真负责"]],m=[$("div.comment-score:nth-of-type(1)>div:nth-of-type(3)"),$("div.comment-score:nth-of-type(2)>div:nth-of-type(3)"),$("div.comment-score:nth-of-type(3)>div:nth-of-type(3)"),$("div.comment-score:nth-of-type(4)>div:nth-of-type(3)")],h=[],f=$("div.comment-text>textarea"),u=$("div.comment-text>span"),y=c.allow,C=$("#footer>div"),_=!1;if($("#content>div:nth-of-type(3)>div:nth-of-type(1)").CSS("backgroundImage",'url("'+(c.tech.avatarUrl||$.$.defaultHeader)+'")'),$("#content>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)").Text(c.tech.name||$.$.defaultTechName),$("#content>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div").CSS("width",c.tech.star+"%"),$("#content>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)").Text(c.tech.commentCount+"评论"),$("#content>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(2)").Html(c.tech.serialNo?"编号【<span>"+c.tech.serialNo+"</span>】":""),$("#footer>div").Class("active"),e=c.tech.clubId,"9358"==$.$.visitChannel?$("#content>div:nth-of-type(6)").CSS("display","none"):$.ajax({url:"../api/v1/wx/club/param_qrcode",isReplaceUrl:!0,data:{clubId:e},success:function(t){"200"==t.statusCode&&("N"==t.respData?$.ajax({url:"../api/v1/wx/club/param_qrcode",isReplaceUrl:!0,data:{clubId:e},success:function(t){"200"==t.statusCode&&"N"!=t.respData&&($("#content>div:nth-of-type(6)>div:nth-of-type(2)>img")[0].src=t.respData)}}):$("#content>div:nth-of-type(6)>div:nth-of-type(2)>img")[0].src=t.respData)}}),$("#content>div:nth-of-type(3)").Page("technicianDetail&id="+c.tech.id),$(".comment-stars").Delegate("click",">div",s,!1,"__star_click_event__"),$(".comment-labels").Delegate("click",">div",p,!1,"__labels_click_event__"),f.Event("focus",function(t){u.Class("none"),$("#content")[0].scrollTop=19.444*$.$.scale*16}),f.Event("blur",function(t){0==f.Value().length&&u.ClassClear("none")}),0==y)$("#content>div:nth-of-type(2)").Class("none");else if(1==y){$("#content>div:nth-of-type(2)").ClassClear("none"),$("#content>div:nth-of-type(6)").CSS("display","none"),$(".comment-stars").EventRemove("click",s,!1,"__star_click_event__"),$(".comment-labels").EventRemove("click",p,!1,"__labels_click_event__"),f.Value(c.comment.comment+" "),f.Attr("readonly","readonly"),u.Hide(),$("div.comment-text>div").Hide(),$("#footer").Hide();var x=$(".comment-stars>div").Children();r=[c.comment.attitudeRate,c.comment.appearanceRate,c.comment.skillRate,c.comment.clockRate],r.forEach(function(t,e){t<20&&(t=20),r[e]=t,x[e].style.width=t+"%",m[e].Text(v[e<3?0:1][Math.ceil(t/20)-1])});var b=c.comment.impression.split("、"),S=$(".comment-labels>div");b.forEach(function(t,e){S.Index(d[t]).Class("active")}),f.Event("focus",function(t,e){e.blur()}),c.comment.comment||$(".comment-text").Hide()}C.Click(function(){if(C.ClassHave("active"))if(_)$.tipShow("正在提交评论，请稍候...");else if(0==y){_=!0,C.Class("disabled"),C.Text("提交中...");var t=f.Value();t&&t.length>200&&(t=t.substr(0,200)),$.ajax({url:($.$.clubID?"../":"")+"/user/comment/create",data:{id:n||a,type:o,attitudeRate:r[0],appearanceRate:r[1],skillRate:r[2],clockRate:r[3],impression:function(){var t=[];return h.forEach(function(e){t.push(e.Text())}),t.join("、")}(),comment:encodeURIComponent(t)},type:"post",success:function(t){if("200"==t.statusCode){_=!1,y=1,C.ClassClear("disabled"),C.Text("提交"),$("#content>div:nth-of-type(2)").ClassClear("none"),$("#content>div:nth-of-type(6)").CSS("display","none"),$(".comment-stars").EventRemove("click",s,!1,"__star_click_event__"),$(".comment-labels").EventRemove("click",p,!1,"__labels_click_event__"),""==f.Value()&&(f.Value(" "),$(".comment-text").Hide()),f.Attr("readonly","readonly"),u.Hide(),$("div.comment-text>div").Hide(),$("#footer").Hide(),f.Event("focus",function(t,e){e.blur()});var e=$("#content>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)");e.Text(parseInt(e.Text())+1+"评论"),$.$.ua.isWX&&(i=t.respData,$.param("commentId",i),$.page("techReward&techId="+a+(i?"&commentId="+i:"")))}else"412"==t.statusCode?($.page(),$.tipShow(t.msg||"您今天已经评论过该技师了")):(_=!1,C.ClassClear("disabled"),C.Text("提交"),$.tipShow(t.msg||"评论出错"))},error:function(){_=!1,C.ClassClear("disabled"),C.Text("提交")}})}else $.tipShow("此评论已提交。")}),$.pageSwitch(!0,!1)}})}})}();