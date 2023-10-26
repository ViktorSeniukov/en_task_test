<script setup lang="ts">
    import { useEnTask } from '@pages/useEnTask';

    definePageMeta({
        layout: 'task-layout',
    });

    const { data } = useEnTask();
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
            v-tooltip="'Validate task!'"
            class="bg-cyan-900 hover:bg-cyan-800 text-cyan-100 px-4 py-1 rounded">Check</button>
    </div>
</template>

<style scoped>

</style>
