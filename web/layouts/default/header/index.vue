<template>
    <el-menu :default-active="defaultActive" mode="horizontal" class="el-menu-demo">
        <el-menu-item index="left">
            <slot></slot>
        </el-menu-item>
        <el-menu-item :index="item.id" v-for="(item, index) in data" :key="index">
            <el-link :href="item.href">
                <el-icon type="el-icon-menu"></el-icon>
                <span slot="title">{{ item.title }}</span>
            </el-link>
        </el-menu-item>
        <el-menu-item index="right">
            <slot></slot>
        </el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>
import { HeaderData } from '~/typings/data'
withDefaults(defineProps<{
    data: HeaderData[];
    defaultActive?: string | number;
}>(), {
    defaultActive: '1'
})
</script> 