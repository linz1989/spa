<style>
    @import '../styles/page/qrPayCode.css';
</style>
<template>
    <div class="page" id="qrpay-code-page" v-show="!global.loading" :style="{ height : global.winHeight+'px' }">
            <div class="page-title"><a v-if="!isDirect" class="back" @click="doClickPageBack()"></a>付款二维码</div>
            <div class="qrcode-wrap">
                <div>
                    <div><img  :src="qrCodeImgSrc"/></div>
                    <div :class="{ processing : isProcessing }" @click="refreshCode()"><span>{{timeStr}}</span></div>
                </div>
            </div>
        </div>
</template>
<script>
    import { Global } from '../libs/global';
    import Util from "../libs/util";
    import 'jr-qrcode';

    module.exports = {
        data: function(){
            return {
                global : Global.data,
                isDirect : false,
                isProcessing : false,
                getCodeUrl : "../api/v2/finacial/account/pay/qrcode",
                timer : 0,
                timeStr : "每分钟自动更换",
                qrCodeImgSrc : null
            }
        },
        created : function(){
            var   _this = this, global = _this.global, pageParams = global.currPage.query;
            if(pageParams.isDirect != undefined) _this.isDirect = true;
            _this.refreshCode();
        },
        beforeDestroy : function(){
            if(this.timer)  clearTimeout(this.timer);
        },
        methods: {
            doClickPageBack : function(){
                history.back();
            },
            refreshCode : function(){
                var _this = this;
                if(_this.isProcessing){
                    return Util.tipShow("正在请求二维码！");
                }
                _this.isProcessing = true;
                _this.$http.get(_this.getCodeUrl).then(function(res){
                    res = res.body;
                    _this.isProcessing = false;
                    if(res.statusCode == 200){
                        res = res.respData;
                        if(_this.timer) clearTimeout(_this.timer);
                        _this.qrCodeImgSrc = jrQrcode.getQrBase64(JSON.stringify(res),{ padding : 0 });
                        if(res.period>0){
                            _this.timer = setTimeout(_this.refreshCode,res.period * 1000);
                            var timeStr = _this.formatSec(res.period);
                            if(timeStr == '1分钟'){
                                _this.timeStr = '每分钟自动更换';
                            }
                            else{
                                _this.timeStr = '每'+timeStr+'自动更换';
                            }
                        }else{
                            _this.timeStr = '无限期，不自动刷新';
                        }
                    }
                    else{
                        Util.tipShow(res.msg || '请求二维码失败');
                        if(_this.timer) clearTimeout(_this.timer);
                        _this.qrCodeImgSrc = "images/common/loading_page.png";
                    }
                });
            },
            formatSec : function(sec){
                var str = '',tmp1,tmp2,floor=Math.floor;
                tmp1 = sec%60;
                if(tmp1){
                    str += tmp1+'秒';
                }
                tmp2 = floor(sec/60);
                if(tmp2>=60){
                    tmp1 = tmp2%60;
                    if(tmp1){
                        str = tmp1 + '分钟'+str;
                    }
                    tmp2 = floor(tmp2/60);
                    if(tmp2>=24){
                        tmp1 = tmp2%24;
                        if(tmp1){
                            str = tmp1 + '小时' + str;
                        }
                        tmp2 = floor(tmp2/24);
                        str = tmp2 + '天' + str;
                    }else{
                        str = tmp2 + '小时' + str;
                    }
                }else{
                    str = tmp2 + '分钟' + str;
                }
                return str;
            }
        }
    }
</script>