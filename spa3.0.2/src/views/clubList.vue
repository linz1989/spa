<style>
    @import '../styles/page/clubList.css';
</style>
<template>
    <router-view></router-view>
</template>
<script>
    import { Global } from '../libs/global'
    import { eventHub } from '../libs/hub'
    import Util from '../libs/util'

    module.exports = {
        data: function () {
            return {
                global: Global.data,
                currCity: '',
                currRegion: '',
                isOldUser: Util.localStorage('viewClubType') == 4
            }
        },
        beforeRouteEnter: function (to, from, next) {
            var global = Global.data
            var authCode = to.query.code
            if (global.userAgent.isWX && (!global.openId || global.openId.length < 10)) {
                if (authCode) {
                    Global.getOpenId({authCode: authCode}).then(function () {
                        next(function (vm) {
                            vm.init()
                        })
                    }, function (err) {
                        Util.tipShow(err)
                    })
                } else {
                    Global.getOauthCode('', '9358', '9358', 'base')
                    next(false)
                }
            } else {
                next(function (vm) {
                    vm.init()
                })
            }
        },
        created: function () {
            eventHub.$on('get-curr-city-region', this.doGetCurrCityRegion)
        },
        methods: {
            init: function () {
                var that = this
                var global = that.global
                var currPage = global.currPage
                if (currPage.name == 'clubList') {
                    var searchText = currPage.query['search_text']
                    if (searchText) {
                        that.$router.push({name: 'clubList-search', query: {'search_text': searchText}})
                    } else {
                        that.$router.push({name: 'clubList-' + (that.isOldUser ? 'nearby' : 'all')})
                    }
                }
                that.initLocationInfo()
            },
            // 初始化位置信息
            initLocationInfo: function () {
                var that = this
                var global = that.global
                if (global.currLngx && global.currLaty) {
                    Global.waitAMapInit().then(function () {
                        // 初始化位置信息
                        var mapObj
                        var geocoder
                        var lnglatXY = new AMap.LngLat(global.currLngx, global.currLaty)

                        // 加载地理编码插件
                        mapObj = new AMap.Map('mapInfo', {
                            resizeEnable: false,
                            view: new AMap.View2D({
                                zoom: 15,
                                center: lnglatXY
                            })
                        })

                        mapObj.plugin(['AMap.Geocoder'], function () {
                            geocoder = new AMap.Geocoder({
                                radius: 1000, // 以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息
                                extensions: 'all' // 返回地址描述以及附近兴趣点和道路信息，默认'base'
                            })
                            // 返回地理编码结果
                            AMap.event.addListener(geocoder, 'complete', function (data) {
                                var address = data.regeocode.addressComponent
                                that.currCity = address.city || address.province
                                that.currRegion = address.district
                                // 主动触发事件
                                eventHub.$emit('put-curr-city-region', {
                                    city: that.currCity,
                                    region: that.currRegion
                                })
                            })
                            // 逆地理编码
                            geocoder.getAddress(lnglatXY)
                        })
                    }, function () {
                        Util.tipShow('高德地图初始化失败！')
                    })
                } else if (global.userAgent.isWX) {
                    Util.tipShow('请打开\'9358\'公众号的位置信息！')
                }
            },

            doGetCurrCityRegion: function () {
                var that = this
                if (that.currCity != '' || that.currRegion != '') {
                    eventHub.$emit('put-curr-city-region', {city: that.currCity, region: that.currRegion})
                }
            }
        },
        beforeDestroy: function () {
            eventHub.$off('get-curr-city-region', this.doGetCurrCityRegion)
        }
    }
</script>