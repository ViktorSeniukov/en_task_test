<script setup lang="ts">
    defineProps({
        text: {
            type: String,
            default: '',
        },
    });
</script>

<template>
    <span>
        <slot>
            {{ text }}
        </slot>
    </span>
</template>

<style scoped>

</style>
