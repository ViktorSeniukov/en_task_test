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
    />
</template>

<style scoped lang="scss">

</style>
