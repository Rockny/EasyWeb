<template>
    <onlyCsr>
        <el-dropdown>
            <span class="el-dropdown-lang">
                {{ localeData.title }}
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="item in localeData.data" :disabled="currentLocale === item.value"
                        @click="changeLocale(item)">{{ item.title }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </onlyCsr>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { onlyCsr } from 'ssr-hoc-vue3'

import { useI18n } from "vue-i18n";

import { useStore } from 'vuex'

//语言数据
const localeData = reactive({
    title: '中文简体',
    data: [
        {
            title: '中文简体',
            value: 'zh-cn'
        },
        {
            title: 'English',
            value: 'en'
        }
    ]
})

const store = useStore();

//设置语言
const setLang = (item: any) => {
    store.dispatch('localeStore/setLang', {
        payload: {
            locale: item.value
        }
    })
}
const { locale } = useI18n();
// 当前语言
const currentLocale =ref(locale.value);
localeData.title = localeData.data.find(item => item.value === currentLocale.value).title

//切换语言
const changeLocale = (lang: any) => {
    localeData.title = lang.title;
    //locale.value = lang.value;
    currentLocale.value=lang.value;
    setLang(lang);
}
</script>
<style scoped>
.el-dropdown-lang {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
    outline: none;
}
</style>
