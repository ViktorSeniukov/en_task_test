<script setup lang="ts">
    withDefaults(defineProps<{
        tag: string
    }>(), {
        tag: 'button',
    });
</script>

<template>
    <Component
        :is="tag"
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        <span
            v-if="$slots.default"
            class="text-sm font-semibold text-white"
        >
            <slot />
        </span>
    </Component>
</template>

<style scoped lang="scss">

</style>
