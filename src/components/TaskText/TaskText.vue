<script setup lang="ts">
    defineProps({
        text: {
            type: String,
            default: '',
        },
    });
</script>

<template>
    <span class="text-green-400">
        <slot>
            {{ text }}
        </slot>
    </span>
</template>

<style scoped>

</style>
