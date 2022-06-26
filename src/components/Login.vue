<template>
    <el-button type="primary" plain @click="handleFeishuAuth"> Feishu Login</el-button>
</template>

<script lang="ts">
import {getData} from "../http/api"
import { useRoute } from 'vue-router'

export default {
    name:"Login",
    compoents:{},
    setup(){
        // getData.then(res=>{
        //     console.log(res)
        // })
        const route = useRoute();
    
        async function handleFeishuAuth() {
            const { platform = 'cms', redirect = '' } = route.query;
            const url = ``;
            window.location.href = url;
        }
        return{
            handleFeishuAuth
        }
    }
    
}
</script>

<style>
</style>