<template>
    <div class="recommend">
        <h1>sdfasdfa</h1>
    </div>
</template>

<script>
    import { recommendList } from '@/request/api';
    export default {
        data() {
            return {
                awesomeList: []
            }
        },
        created() {
            recommendList().then( res => {
                this.awesomeList = res
            }).catch( err => {
                console.log(err);
            })
        }
    }
</script>