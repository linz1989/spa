<style>
    @import '../styles/page/login.css';
</style>
<template>
    <div class="page login-page" id="confirm-login-page">
        <page-title title-text="登录"></page-title>
        <div class="input tel spec"><i></i><span>+86</span><input type="tel" placeholder="请输入您的11位手机号" v-model="tel" maxlength="11" v-tel-input @keypress.enter="doClickLoginBtn()"/></div>
        <div class="input pw"><i></i><input type="password" autofocus placeholder="请输入6-20位密码，仅限字母和数字" v-password-input v-model="password" maxlength="20" @keypress.enter="doClickLoginBtn()"/></div>
        <div class="error" v-show="!isTelValid">*&nbsp;请输入正确的11位手机号</div>
        <div class="error" v-show="isTelValid && !isPasswordValid">*&nbsp;请输入6~20位密码</div>
        <div class="next-btn" :class="{ active : isTelValid && isPasswordValid }" @click="doClickLoginBtn()">登录</div>
        <div class="recover-password" @click="doClickRecoverPasswordBtn()">忘记密码？</div>
        <div class="tip-title">注：</div>
        <div class="tip">您的手机号已注册，请输入密码完成登录</div>
    </div>
</template>
<script>
    import { Global } from '../libs/global'
    import { IM } from '../libs/im'
    import Util from '../libs/util'
    import TelInput from '../directives/tel-input'
    import PasswordInput from '../directives/password-input'

    module.exports = {
        directives: {
            'tel-input': TelInput,
            'password-input': PasswordInput
        },
        data: function () {
            return {
                global: Global.data,
                tel: '',
                password: '',
                isBindWeixin: false,
                userLoginParam: null
            }
        },
        computed: {
            isTelValid: function () {
                return /^1[34578]\d{9}$/.test(this.tel)
            },
            isPasswordValid: function () {
                return (this.password.length >= 6)
            }
        },
        created: function () {
            var that = this
            var _userLoginParam = Util.localStorage('con-login-param')
            var pageParam = that.global.currPage.query
            var global = that.global
            if (_userLoginParam) {
                that.userLoginParam = JSON.parse(_userLoginParam)
            } else {
                that.userLoginParam = window['spa-login-info'] || null
            }
            if (pageParam.code) {
                global.authCode = pageParam.code
            }
            if (global.userAgent.isWX && (!global.authCode || pageParam.state != '9358_login')) {
                Global.getOauthCode('', '9358', '9358_login', 'base')
                return
            } else {
                global.loading = false
            }
        },
        mounted: function () {
            var that = this
            var param = that.userLoginParam
            if (param && param['username']) {
                that.tel = param['username']
                that.isTelValid = /^1[34578]\d{9}$/.test(that.tel)
                that.isBindWeixin = param.isBindWeixin
                if (param.password) {
                    that.password = param.password
                    that.isPasswordValid = true
                    Util.removeLocalStorage('con-login-param')
                    that.doClickLoginBtn()
                }
            }
        },
        methods: {
            doClickLoginBtn: function () {
                var that = this
                var global = that.global
                if (that.isTelValid && that.isPasswordValid) {
                    var paramData = {
                        username: that.tel,
                        password: that.password,
                        usertype: 'user',
                        clubId: global.clubId || '',
                        code: global.authCode,
                        isBindWeixin: that.isBindWeixin ? 'Y' : 'N'
                    }
                    if (global.sessionType == '9358') {
                        paramData.loginChanel = global.loginChanel
                        paramData.openId = global.openId
                        paramData.wxNickName = global.nickName
                        paramData.wxHeadimgurl = global.headerImgUrl
                    }
                    that.$http.post('../api/v1/user/login', paramData).then(function (res) {
                        res = res.body
                        if (res.statusCode == 2) {
                            window['spa-login-info'] = paramData
                            that.$router.push({name: 'register'})
                        } else if (res.statusCode == '935801') {        // 需重新获取授权
                            Util.localStorage('con-login-param', JSON.stringify(paramData))
                            Global.getOauthCode('', '9358', '9358_login', 'base')
                        } else if (res.status == 200) {
                            global.token = res.token
                            global.userId = res.userId
                            global.userHeader = res.avatarUrl || global.defaultHeader
                            global.userTel = res.phoneNum
                            global.userName = res.name
                            global.loginName = res.loginName
                            global.isTelephoneUser = true
                            global.isLogin = true

                            Util.localStorage('token', global.token)
                            Util.localStorage('userID', global.userId)
                            Util.localStorage('userHeader', global.userHeader)
                            Util.localStorage('userTel', global.userTel)
                            Util.localStorage('userName', global.userName)
                            Util.localStorage('userLoginName', global.loginName)
                            Util.localStorage('isTelephoneUser', true)
                            Util.tipShow(res.message || '登录成功！')

                            var im = IM
                            var userLoginParam = that.userLoginParam
                            im.id = res.emchatId
                            if (userLoginParam.oldUserId && userLoginParam.oldUserId != global.userId) {
                                im.secondId = userLoginParam.oldChatId
                                im.mergeAccount(userLoginParam.oldUserId, global.userId)
                            }
                            var delay = false
                            if (im.conn && im.conn.isOpened()) {
                                im.closeConn()
                                delay = true
                            }
                            setTimeout(function () {
                                im.createConn()
                                if (im.secondId) {
                                    im.createConn(1)
                                }
                                Global.redirectToLastPage(that.$router)
                            }, delay ? 500 : 1)

                            if (res.message) {
                                Util.tipShow(res.message)
                            }
                        } else if (res.respData == 'HAS_BOUND') {
                            Util.tipShow(res.message || '当前用户已绑定！')
                            Global.redirectToLastPage(that.$router)
                        } else {
                            Util.tipShow(res.message || '登录出错！')
                        }
                    })
                }
            },
            doClickRecoverPasswordBtn: function () {
                var that = this
                window['spa-login-info'] = {'username': that.tel}
                that.$router.push({name: 'recoverPassword'})
            }
        }
    }
</script>