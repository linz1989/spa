!function(){$.ajax({url:"service/select",success:function(e){function t(e,t){if(!T){T=!0,L=e||L+1;var a,s,d;C.ClassHave("active")?(a="free",$.param("onlyFree",1)):(a="all",$.paramClear("onlyFree")),f.ClassHave("order_comment")?(s=1,$.param("scoreUp",1)):(s=-1,$.paramClear("scoreUp")),o?(d=o.getAttribute("hh"),$.param("sid",d)):(d=-1,$.paramClear("sid")),_.ClassClear("none"),S.Class("none"),H=!1,I.ClassClear("nullData"),$.ajax({url:"technician",data:{page:L,pageSize:U,stateActiveId:a,scoreActiveId:s,itemActiveId:d,techName:M.ClassHave("active")?encodeURIComponent(O[0].value):""},success:function(e){for(e=e.list,1==L&&(p={}),n=0,l="",c=e.length;n<c;n++)p[e[n].id]||(p[e[n].id]=1,e[n].techTags&&0!=e[n].techTags.length||(e[n].techTags=[{tagName:"(无)"}]),o&&o.parentNode&&e[n].techTags.length>1&&e[n].techTags.sort(function(e,t){return e.tagName==o.parentNode.getAttribute("hh")?-1:t.tagName==o.parentNode.getAttribute("hh")?1:0}),h="",e[n].techTags.length>0&&(h="<div>"+e[n].techTags[0].tagName+"</div>"),e[n].techTags.length>1&&(h+="<div>"+e[n].techTags[1].tagName+"</div>"),e[n].techTags.length>2&&(h+="<div>...</div>"),l+='<div hh="'+e[n].id+'">                                    <div>                                        <div style="background-image: url(\''+(e[n].avatarUrl||$.$.defaultHeader)+'\')"></div>                                        <div class="'+e[n].status+'">'+("free"==e[n].status?"闲":"忙")+"</div>                                    </div>                                    <div>                                        <div>                                            <div><div>"+(e[n].name||$.$.defaultTechName)+"</div><div>[<span>"+(e[n].serialNo||"")+'</span>]</div></div>                                            <div>                                                <div class="stars"><div style="width:'+e[n].star+'%"></div></div>                                                <div>'+e[n].commentCount+"评论</div>                                            </div>                                        </div>                                        <div>"+h+"</div>                                        <div>                                            <div>"+(e[n].description||"")+"</div>                                            <div>预约</div>                                        </div>                                    </div>                                </div>");1==L?(I.Html(l),l?I.ClassClear("nullData"):(d!=-1||$.param("sid")||$.param("scoreUp")||M.ClassHave("active")?I.Class("nullData"):($("#content>div>div:nth-of-type(3)").Hide(),$("#content>div>div:nth-of-type(4)").Hide(),$("#content>div>div:nth-of-type(5)").Hide(),$("#content>div>div:nth-of-type(6)").Show(),$("#content>div>div:nth-of-type(6)>div:nth-of-type(2)").Click(function(){$.page("serviceList")})),H=!0),b=I[0].scrollHeight):(I.Html(l,!0),c<U&&(H=!0,S.ClassClear("none"))),i(),T=!1,_.Class("none"),t&&t()}})}}function i(){$("div#technicianList #content>div>div:nth-of-type(3)>div:nth-of-type(2)>div",!0).Event("click",function(e,t){$.sessionStorage("technicianList_data",I.Html()),$.sessionStorage("technicianList_page",L),$.sessionStorage("technicianList_page_height",b),$.sessionStorage("technicianList_end",H),$.sessionStorage("technicianList_ID",JSON.stringify(p)),$.sessionStorage("technicianList_top",x[0].scrollTop),$.page("technicianDetail&id="+t.getAttribute("hh"))},!0)}function a(){u.Translate(0,"100%"),$.showOrderMenu()}var n,s,c,d,v,o,l="",r="",h="",p=JSON.parse($.sessionStorage("technicianList_ID")||"{}"),C=$("#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)"),f=$("#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)"),g=$("#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)"),y=$("#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(3)>div:nth-of-type(2)"),u=$("#selectArea"),m=$("#selectArea>div>div:nth-of-type(1)>div:nth-of-type(1)>div"),T=!1,L=1,_=$("#loadTip"),S=$("#finishTip"),H="true"==($.sessionStorage("technicianList_end")||"false"),I=$("#content>div>div:nth-of-type(3)>div:nth-of-type(2)"),x=$("#content"),A=$.sessionStorage("technicianList_top"),k=$.sessionStorage("technicianList_page"),N=$.sessionStorage("technicianList_data"),D=.4,b=$.sessionStorage("technicianList_page_height"),U=10,w=$("#content>div>div#title>div:nth-of-type(3)"),M=$("#content>div>div.search"),O=$("#content>div>div.search>input"),E=$("#content>div>div.search>div");for(n=0,c=e.length;n<c;n++){for(s=0,r="",d=e[n].serviceItems.length;s<d;s++)r+='<div hh="'+e[n].serviceItems[s].id+'">'+e[n].serviceItems[s].name+"</div>";l+="<div>                        <div>"+e[n].name+'</div>                        <div hh="'+e[n].name+'">'+r+"</div>                    </div>"}if($("#selectArea>div>div:nth-of-type(1)>div:nth-of-type(2)").Html(l),$("#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(1)").Click(function(){C.ClassHave("active")?C.ClassClear("active"):C.Class("active"),t(1)}),1==$.param("onlyFree")&&C.Class("active"),$("#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)").Click(function(e,t){g.ClassHave("active")?(g.ClassClear("active"),$(t).ClassClear("active")):(g.Class("active"),$(t).Class("active"))}),g.Delegate("click",">div",function(e,i){g.ClassClear("active");var a=i.dataset.type,n=$(i),s=n.Text();"score"==a?(g.Children().Index(0).ClassClear("active"),f.Class("order_score"),f.ClassClear("order_comment")):(g.Children().Index(1).ClassClear("active"),f.ClassClear("order_score"),f.Class("order_comment")),n.Class("active"),f.ClassClear("active"),f.Children().Index(0).Text(s),t(1)}),$.param("scoreUp")&&(f.ClassClear("order_score"),f.Class("order_comment"),f.Children().Index(0).Text($('#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(2)>div[data-type="comment"]').Text()),g.Children().Index(0).Class("active"),g.Children().Index(1).ClassClear("active")),$("#content>div>div:nth-of-type(3)>div:nth-of-type(1)>div:nth-of-type(3)").Click(function(){$.hideOrderMenu(),u.TransitionDelay(300),u.Translate(0,0)}),u.Click(function(e,t){e.target==t&&a()}),m.Click(function(){o&&(o.classList.remove("active"),o=null),m.Class("active")}),$("#selectArea>div>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(2)>div").Click(function(e,t){o&&o.classList.remove("active"),m.ClassClear("active"),o==t?o=null:(o=t,o.classList.add("active"))}),$("#selectArea>div>div:nth-of-type(2)>div:nth-of-type(1)").Click(function(){a(),o&&o.classList.remove("active"),o=v,o?(o.classList.add("active"),m.ClassClear("active")):m.Class("active")}),$("#selectArea>div>div:nth-of-type(2)>div:nth-of-type(2)").Click(function(){a(),o?(y.Class("active"),y.Text(o.innerHTML)):(y.ClassClear("active"),y.Text("项目筛选")),v=o,t(1)}),$.param("sid")){var F=$.param("sid");$("#selectArea>div>div:nth-of-type(1)>div:nth-of-type(2)>div>div:nth-of-type(2)>div").Each(function(e){e.getAttribute("hh")==F&&(o=e)}),o&&(v=o,o.classList.add("active"),m.ClassClear("active"),y.Class("active"),y.Text(o.innerHTML))}x.Event("scroll",function(e){!H&&x[0].scrollTop+x[0].clientHeight-(L+D-1)*b>=0&&t()}),w.Click(function(){M.ClassHave("active")?M.ClassClear("active"):M.Class("active")}),E.Click(function(){t(1)}),N?(L=parseInt(k),I.Html(N),setTimeout(function(){x[0].scrollTop=A},1),i(),H&&S.ClassClear("none"),$.pageSwitch()):t(1,$.pageSwitch()),$.sessionStorageClear("technicianList_ID"),$.sessionStorageClear("technicianList_data"),$.sessionStorageClear("technicianList_end"),$.sessionStorageClear("technicianList_top"),$.sessionStorageClear("technicianList_page"),$.sessionStorageClear("technicianList_page_height")}})}();