<script setup lang="ts">
    import { iconPath, iconSize } from '@constants/icon';

    const { icoName, icoPath, icoSize } = withDefaults(defineProps<{
        icoName: string
        icoPath?: string
        icoSize?: number
    }>(), {
        icoPath: iconPath.COMMON,
        icoSize: iconSize.M,
    });

    const icoSizePx = computed(() => `${icoSize}px`);

    const logoSvg = computed(() => `${icoPath}#${icoName}`);
</script>

<template>
    <span class="ui-ico">
        <svg
            :width="icoSize"
            :height="icoSize"
            class="icon"
        >
            <use :href="logoSvg"/>
        </svg>
    </span>
</template>

<style scoped lang="scss">
  .ui-ico {
    & > svg {
      width: auto;
      max-width: 100%;
      height: 1em;
      font-size: v-bind(icoSizePx);
      fill: currentColor;
    }
  }
</style>
