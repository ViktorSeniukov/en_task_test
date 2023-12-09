<script setup lang="ts">
    interface IOptions {
        id: number
        value: string | number
        caption: string
    }

    withDefaults(defineProps<{
        modelValue: string,
        name: string,
        options: IOptions[],
    }>(), {
        options: () => [] as IOptions[],
    });
    defineEmits(['update:modelValue']);
</script>

<template>
    <select
        @change="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :name="name"
        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
        <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
        >
            {{ option.caption }}
        </option>
    </select>
</template>

<style scoped lang="scss">

</style>
