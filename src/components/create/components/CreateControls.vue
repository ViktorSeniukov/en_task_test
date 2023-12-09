<script setup lang="ts">
    import { useCreateInject } from '@features/create/useCreate';

    const { saveFields, resetFields } = useCreateInject();
</script>

<template>
    <div class="create-controls grid grid-cols-2 gap-2">
        <UiButton @click="saveFields">Save</UiButton>
        <UiButton @click="resetFields">Reset</UiButton>
    </div>
</template>

<style scoped lang="scss">

</style>
