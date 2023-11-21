<script setup lang="ts">
    import type { IEnTaskItem } from '@features/createEnTaskItem';

    withDefaults(defineProps<{
        data: IEnTaskItem[],
    }>(), {
        data: () => [] as IEnTaskItem[],
    });
</script>

<template>
    <div class="p-1 h-full">
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
</template>

<style scoped lang="scss">

</style>
