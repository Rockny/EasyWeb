
<template>
  <div>
   <lang></lang>
    <!-- <Search />
    <template v-if="indexData">
      <Slider :data="indexData[0].components" />
      <Rectangle :data="indexData[1].components" />
    </template>
    <template v-else>
      <img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">
    </template> -->

    <layout is-header="true" is-footer="true">
      <template v-slot:header>
      <Header :data="i"></Header>
      </template>
        <template v-slot:main>
      main
      </template>
        <template v-slot:footer>
      footer
      </template>
    </layout>
  </div>
</template>

<script lang="ts" setup>
// import { mapState } from 'ssr-hoc-vue3'
// import { IndexData } from '~/typings/data'
// import Slider from '@/components/slider/index.vue'
// import Rectangle from '@/components/rectangle/index.vue'
// import Search from '@/components/search/index.vue'
import lang from '@/components/lang/index.vue'
import layout from '@/layouts/default/index.vue' 
import Header from '@/layouts/default/header/index.vue'
import { HeaderData } from '~/typings/data'
var i:HeaderData[] =[{
  id:"1",
  title:'首页',
  href:'#'
}];

// const indexData = mapState<IndexData>().indexStore.value.data
</script>
