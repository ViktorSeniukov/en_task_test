<script setup lang="ts">
    import { useEnTask } from '@pages/useEnTask';
    import TaskDo from '@/components/task/TaskDo.vue';

    definePageMeta({
        layout: 'task-layout',
    });

    const { data, validateTask, checkResultText, isShowCheckResult } = useEnTask();
</script>

<template>
    <div class="p-2 grid grid-cols-5 grid-rows-5 items-start gap-2 flex-1">
        <div
            v-if="data"
            class="task-container bg-orange-50 rounded col-span-3 row-span-full border border-orange-950"
        >
            <TaskDo :data="data" />
        </div>
        <div>
            <span v-if="isShowCheckResult">{{ checkResultText }}</span>
        </div>
        <TaskControls
            @check="validateTask"
            class="bg-amber-200 col-span-2"
        />
    </div>
</template>

<style scoped lang="scss">
  $height: -webkit-fill-available;

  .task-container {
    height: $height;
  }
</style>
