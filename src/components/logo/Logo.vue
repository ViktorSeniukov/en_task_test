<script setup lang="ts">
    import { logoPath } from '@constants/publicPath/logo';

    const props = defineProps({
        logoName: {
            type: String,
            default: 'logo-study',
        },
        isSvg: {
            type: Boolean,
            default: true,
        },
    });

    const logoSvg = computed(() => `${logoPath.SVG_LOGO}#${props.logoName}`);
    const logoPng = computed(() => logoPath.PNG_LOGO);
</script>

<template>
    <span class="logo">
        <svg
            v-if="isSvg"
            width="128"
            height="42"
            class="text-rose-950"
        >
            <use :href="logoSvg"/>
        </svg>
        <img
            v-else
            :src="logoPng"
            alt="Logo"
        >
    </span>
</template>

<style scoped lang="scss">

</style>
