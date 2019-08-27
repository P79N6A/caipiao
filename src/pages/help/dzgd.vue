<template>
    <div class="dzgd">
        <h1>玩法说明</h1>
        <p>定制跟单就是定制对某发单人所发方案的自动跟单，在发单人详情页下方点击“定制跟单”可进入定制界面，设置定制认购倍数、单倍金额范围，确认提交后即定制成功。</p>
        <p>当发单人发单的单倍金额在你所设定的定制跟单金额范围内，将自动根据定制规则跟单。</p>
        <p>定制跟单将自动抵扣您账户余额，如余额不足则跟单失败。</p>
    </div>
</template>

<style lang="scss" scoped>
    .dzgd {
        position: relative;
        height: 100%;
        padding: 0 15px;
        color: #333333;
        overflow-x: hidden;
        overflow-y: auto;
        top: 1rem;
        h1 {
            font-size: .44rem;
            color: #111;
        }
        p {
            display: block;
            font-size: .28rem;

        margin: 9px 0;
        text-indent: 0;
    }
    }
</style>