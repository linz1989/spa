<style>
    @import '../styles/components/counter.css';
</style>
<template>
    <div class="counter-wrap" :class="type" @transitionend="doTransitionEnd($event)">
        <label>{{ type=='clock' ? '距离下钟' : tipText[status] }}</label>
        <template v-if="status !='over' ">
            <div ref="w0" v-show="showAni && showDay">
                <div data-index="0"><b>{{ times[0][0] }}</b><b>{{ times[0][1] }}</b></div>
            </div>
            <div ref="w1" v-show="showAni && showDay">
                <div data-index="1"><b>{{ times[1][0] }}</b><b>{{ times[1][1] }}</b></div>
            </div>
            <span v-show="showDay">{{ times[0][1] }}{{ times[1][1] }}</span>
            <label v-show="showDay">天</label>
            <div ref="w2" v-show="showAni">
                <div data-index="2"><b>{{ times[2][0] }}</b><b>{{ times[2][1] }}</b></div>
            </div>
            <div ref="w3" v-show="showAni">
                <div data-index="3"><b>{{ times[3][0] }}</b><b>{{ times[3][1] }}</b></div>
            </div>
            <span>{{ times[2][1] }}{{ times[3][1] }}</span>
            <label>{{ type=='clock' ? ':' : '时' }}</label>
            <div ref="w4" v-show="showAni">
                <div data-index="4"><b>{{ times[4][0] }}</b><b>{{ times[4][1] }}</b></div>
            </div>
            <div ref="w5" v-show="showAni">
                <div data-index="5"><b>{{ times[5][0] }}</b><b>{{ times[5][1] }}</b></div>
            </div>
            <span>{{ times[4][1] }}{{ times[5][1] }}</span>
            <label>{{ type=='clock' ? ':' : '分' }}</label>
            <div ref="w6" v-show="showAni && showSecond">
                <div data-index="6"><b>{{ times[6][0] }}</b><b>{{ times[6][1] }}</b></div>
            </div>
            <div ref="w7" v-show="showAni && showSecond">
                <div data-index="7"><b>{{ times[7][0] }}</b><b>{{ times[7][1] }}</b></div>
            </div>
            <span v-show="showSecond">{{ times[6][1] }}{{ times[7][1] }}</span>
            <label v-show="showSecond">秒</label>
        </template>
        <label v-else>活动已结束，欢迎下次抢购！</label>
    </div>
</template>

<script>
    import Vue from 'vue'

    module.exports = {
        data: function () {
            return {
                times: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                surplusMillSecond: 0, // 剩余的毫秒数
                timer: null
            }
        },
        props: {
            start: {
                type: String,
                required: true
            },
            end: {
                type: String,
                required: true
            },
            tipText: {
                type: Object,
                default: function () {
                    return {'notStarted': '距开始：', 'started': '距结束：', 'over': '已结束'}
                }
            },
            type: {
                type: String,
                default: 'act'
            },
            showSecond: {
                type: Boolean,
                default: false
            },
            showDay: {
                type: Boolean,
                default: true
            },
            showAni: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            status: function () {
                var currStatus = this.getStatus()
                this.$emit('status-change', currStatus)
                return currStatus
            },
            startTime: function () {
                return new Date(this.start.replace(/-/g, '/')).getTime()
            },
            endTime: function () {
                return new Date(this.end.replace(/-/g, '/')).getTime()
            }
        },
        mounted: function () {
            var that = this
            if (that.status != 'over') {
                that.$nextTick(function () {
                    that.update(that.getFormatTime(that.surplusMillSecond), true)
                    that.doCount()
                })
            }
        },
        methods: {
            getStatus: function () {
                var that = this
                var currTime = (+new Date())
                if (currTime < that.startTime) {
                    that.surplusMillSecond = that.startTime - currTime
                    return 'notStarted' // 未开始
                } else if (currTime < that.endTime) {
                    that.surplusMillSecond = that.endTime - currTime
                    return 'started' // 已开始
                } else {
                    return 'over' // 已结束
                }
            },
            getFormatTime: function (millSecond) {
                var floor = Math.floor
                var second = millSecond / 1000
                var sec = floor(second % 60)
                var min = floor(second / 60 % 60)
                var hour = floor(second / 3600 % 24)
                var day = floor(second / 3600 / 24)
                return [floor(day / 10), day % 10, floor(hour / 10), hour % 10, floor(min / 10), min % 10, floor(sec / 10), sec % 10]
            },
            doTransitionEnd: function (event) {
                var that = this
                var target = event.target || event.srcElement
                var index = target.dataset.index
                var times = that.times
                index = index - 0
                Vue.set(times[index], 1, times[index][0])
                that.$refs['w' + index].className = ''
            },
            update: function (timeArr, isInit) {
                var that = this
                var times = that.times
                var k = 0
                for (; k < timeArr.length; k++) {
                    if (times[k][1] != timeArr[k]) { // 需要更新
                        Vue.set(times[k], 0, timeArr[k])
                        if (isInit) {
                            Vue.set(times[k], 1, timeArr[k])
                        } else {
                            that.$refs['w' + k].className = 'toggle'
                        }
                    }
                }
            },
            doCount: function () {
                var that = this
                that.timer = setTimeout(function () {
                    that.surplusMillSecond -= 1000
                    if (that.surplusMillSecond == 0) {
                        that.status = that.getStatus()
                        this.$emit('status-change', that.status)
                    }
                    that.update(that.getFormatTime(that.surplusMillSecond))
                    that.doCount()
                }, 1000)
            }
        },
        beforeDestroy: function () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        }
    }
</script>