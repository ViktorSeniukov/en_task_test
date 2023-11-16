<script setup lang="ts">
    defineEmits(['submit']);
</script>

<template>
    <div class="task-controls">
        <button
            @click="$emit('submit')"
            class="bg-cyan-900 text-cyan-100 px-4 py-1 rounded"
        >
            Check
        </button>
    </div>
</template>

<style scoped lang="scss">

</style>
