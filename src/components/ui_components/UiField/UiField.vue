<script setup lang="ts">
    withDefaults(defineProps<{
        modelValue: string
        type?: string
        placeholder?: string
    }>(), {
        type: 'text',
        placeholder: 'Write there',
    });
    defineEmits(['update:modelValue']);
</script>

<template>
    <div class="ui-field">
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-full"
        >
    </div>
</template>

<style scoped lang="scss">

</style>
