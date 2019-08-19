<template>
    <div id="search">
        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
        </mt-search>
       
    </div>
</template>

<script>
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
export default {

}
</script>