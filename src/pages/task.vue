<script setup lang="ts">
    import { useEnTask } from '@pages/useEnTask';
    import { getTask } from '@/server/api/getEnTask';

    definePageMeta({
        layout: 'task-layout',
    });

    const { data, isValidTask } = useEnTask();

    getTask();
</script>

<template>
    <div class="w-4/5 shadow-lg p-2 flex flex-col items-start gap-y-2">
        <div v-if="data">
            <Component
                :is="item.component"
                v-for="item in data"
                :key="item.order"
                v-model="item.value!.value"
                :placeholder="item.placeholder"
                :text="item.text"
                :maxLength="item.length!.value"
            />
        </div>
        <button
            @click="isValidTask"
            class="bg-cyan-900 text-cyan-100 px-4 py-1 rounded"
        >
            Check
        </button>
    </div>
</template>
