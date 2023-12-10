<script setup lang="ts">
    defineEmits(['check']);
</script>

<template>
    <div class="task-controls">
        <UiButton @click="$emit('check')">
            Check
        </UiButton>
    </div>
</template>

<style scoped lang="scss">

</style>
