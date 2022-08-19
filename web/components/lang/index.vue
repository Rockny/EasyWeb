<template>
    <onlyCsr>
        <el-dropdown>
            <span class="el-dropdown-lang">
                {{ langData.title }}
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="item in langData.data" :disabled="currentLang===item.value" @click="changeLang(item)">{{ item.title }}
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
const langData = reactive({
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
    store.dispatch('langStore/setLang', {
        payload: {
            lang: item.value
        }
    })
}
const { locale } = useI18n();

// 当前语言
const currentLang = ref<string>(locale.value);
langData.title = langData.data.find(item => item.value === currentLang.value).title;

//切换语言
const changeLang = (lang: any) => {
    langData.title = lang.title;
    locale.value = lang.value;
    currentLang.value=lang.value;
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
