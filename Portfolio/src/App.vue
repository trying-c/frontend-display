<script setup lang="ts">
import { themeOverrides, darkThemeOverrides } from './assets/styles/theme'
import { darkTheme, lightTheme } from 'naive-ui';
import { computed, ref, type Ref } from 'vue';

const title: Ref = ref('Trying Page')

function onMenuChange(value: string) {
    console.log(value)
}
const menuOptions = ref([
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'About',
        key: 'about',
    },
    {
        label: 'Contact',
        key: 'contact',
    }
])

const activeKey = ref('home')

const theme = ref(lightTheme);
const themeKey = ref('light');

const isDark = computed(() => {
    return themeKey.value === 'dark';
})

function toggleTheme() {

    if (themeKey.value === 'light') {
        themeKey.value = 'dark';
        theme.value = darkTheme;
    } else {
        themeKey.value = 'light';
        theme.value = lightTheme;
    }
}
</script>

<template>
    <n-config-provider class="base__app" :theme="theme" :theme-overrides="isDark ? darkThemeOverrides : themeOverrides">

        <div class="base__header">
            <div class="base__header__title">
                <n-gradient-text>
                    <span>{{ title }}</span>
                </n-gradient-text>
            </div>
            <div class="base__header__menu">
                <n-menu class="base__header__menu" v-model:value="activeKey" mode="horizontal" :options="menuOptions"
                    @update:value="onMenuChange" />
            </div>
            <div class="base__header__util">
                <n-button class="base__header__btn" text @click="">English</n-button>
                <n-button class="base__header__btn" text @click="toggleTheme">{{ isDark ? '浅色' : '深色' }}</n-button>
            </div>
        </div>



        <n-global-style />
    </n-config-provider>
</template>

<style lang="scss" scoped>
.base__app {
    height: 100vh;
}

.base__header {
    margin: 0 auto;
    padding: 8px 16px;
    height: 60px;

    @include flex();
    align-items: center;


    &__title {
        font-size: 1.2rem;
        font-weight: 600;
        margin-right: 24px;
    }

    &__menu {
        flex: 1;
        @include flex();
        justify-content: center;
    }

    &__btn {
        margin: 0 16px;
        font-weight: 500;
        transition: all 0.3s ease-in-out;


    }
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    &.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
}
</style>
