<script setup lang="ts">
    import { useCreateProvide } from '@features/create/useCreate';
    import CreateControls from '@/components/create/components/CreateControls.vue';

    definePageMeta({
        layout: 'task-layout',
    });

    useSeoMeta({
        title: 'Create task',
        description: 'Create your task',
    });

    useCreateProvide();
</script>

<template>
    <div class="create p-2 grid grid-cols-5 grid-rows-5 items-start gap-2 flex-1">
        <CreateContainer class="col-span-3 row-span-full" />

        <div class="bg-amber-200 col-span-2 row-span-3">123</div>

        <CreateControls class="col-start-4 col-end-6 row-start-4 row-end-5" />
    </div>
</template>
