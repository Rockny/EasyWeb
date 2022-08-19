<template>
  <router-view :reactiveFetchData="reactiveFetchData" />
</template>

<script lang="ts" setup>
// Register global plugins/components here
// Read document get more details http://doc.ssr-fc.com/docs/features$communication#props%20%E7%9B%B4%E5%87%BA%E6%95%B0%E6%8D%AE
import { App } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { ID_INJECTION_KEY } from 'element-plus'

import i18n from '../../lang'

const props = defineProps<{
  ssrApp: App,
  reactiveFetchData: any,
  asyncData: any
}>()

const app = props.ssrApp;

app.provide(ID_INJECTION_KEY, {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
})
var locale = i18n.global.messages.value[i18n.global.locale.value];
app.use(ElementPlus, { locale }).use(i18n)
</script>

<style lang="less">
@import '@/common.less';
</style>
