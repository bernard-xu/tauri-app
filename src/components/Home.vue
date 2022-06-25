<template>
home
    {{username}}
</template>

<script lang="ts">

import { defineComponent,computed } from 'vue';
import { useRoute } from 'vue-router'
export default defineComponent({
    name:"Home",
    components:{},
    setup(_,{}){
       const username = computed(()=>{
           const route = useRoute()
           console.log(route.params);
           return route.params.username
       })
       return{
           username,
       }
    }
})
</script>