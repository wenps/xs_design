<template>
    <div class="xs-helloWorld" :class="[xsType?'xs-helloWorld--primary':'']">helloWorld  {{xsType}}</div>
</template>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "xs-helloWorld" });
// 定义结构
type xsProps = {
    type?: string
}
// 获取props
const xs = defineProps<xsProps>();
const xsType = computed(()=>{
    return xs.type == 'default'
})
</script>


