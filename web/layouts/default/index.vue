<template>
    <div class="common-layout">
        <el-container>
            <el-header :height="headerHeight" v-if="isHeader">
                <slot name="header"></slot>
            </el-header>
            <el-container>
                <el-aside :width="leftAsideWidth" v-if="isLeftAside">
                    <slot name="left-aside"></slot>
                </el-aside>
                <el-main :height="mainHeight">
                    <slot name="main"></slot>
                </el-main>
                <el-aside :width="rightAsideWidth" v-if="isRightAside">
                    <slot name="right-aside"></slot>
                </el-aside>
            </el-container>
            <el-footer :height="footerHeight" v-if="isFooter">
                <slot name="footer"></slot>
            </el-footer>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
    isHeader?: boolean | string;
    headerHeight?: string,
    isLeftAside?: boolean | string,
    leftAsideWidth?: string,
    isRightAside?: boolean | string,
    rightAsideWidth?: string,
    mainHeight?: string,
    isFooter?: boolean | string,
    footerHeight?: string,
}>(), {
})
</script>
<style lang="less" scoped>
@import "./index.less";
</style>