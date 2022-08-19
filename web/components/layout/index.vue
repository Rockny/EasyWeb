<template>
  <html>

  <head>
    <meta charSet="utf-8">
    <title>{{ headerTitle }}</title>
    <template v-for="item in meta">
      <meta :name="item.name" :http-equiv="item.httpEquiv" :content="item.content">
    </template>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="theme-color" content="#000000">
    <slot v-if="false" name="remInitial"></slot>
    <slot name="injectHeader"></slot>
  </head>

  <body>
    <slot name="content"></slot>
  </body>

  </html>
</template>
<script lang="ts" setup>
import { Context } from '@midwayjs/koa'
import type { UserConfig } from 'ssr-types'
import { reactive, provide } from 'vue'
var props = defineProps<{
  ctx: Context,
  config: UserConfig,
  asyncData: any
}>()

let reactiveAsyncData = reactive(props.asyncData.value)

// 数据改变时，重新渲染页面
const changeAsyncData = (data) => {
  reactiveAsyncData = data
}
provide('asyncData', reactiveAsyncData)
provide('changeAsyncData', changeAsyncData)

// 标题
const headerTitle = reactiveAsyncData.head?.title;
// 元数据
const meta = reactiveAsyncData.head?.meta;
</script>