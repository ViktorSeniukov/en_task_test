<script setup lang="ts">
    withDefaults(defineProps<{
        modelValue: string
        placeholder?: string
    }>(), {
        placeholder: 'Write here',
    });
    defineEmits(['update:modelValue']);
</script>

<template>
    <textarea
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :placeholder="placeholder"
        class="ui-field-textarea block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
</template>

<style scoped lang="scss">
  .ui-field-textarea {
    resize: none;
  }
</style>
