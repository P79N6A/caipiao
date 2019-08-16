<template>
<div class="scroller-wrap" ref="scroll"
    :style="wrapStyle">
    <div class="scroller-content">
        <slot/>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'scroller',
    props: {
        width: Number,
        height: Number,
        top: Number,
        bottom: Number,
    },
    computed: {
        wrapStyle(){
            //定位的滚动视图
            if(this.top && this.bottom){
                return {
                    position: 'absolute',
                    top: this.top+'px',
                    bottom: this.bottom + 'px'
                }
            }else{
                //普通调用滚动视图
                return {
                    width: this.width+'px', 
                    height: this.height+'px'
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.scroller-wrap{
    overflow: hidden;
    width: 100%;
    left: 0;
}
</style>

