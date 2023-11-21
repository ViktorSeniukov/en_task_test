<script setup lang="ts">
    const defaultOptions = [
        {
            id: 1,
            value: 'text',
            caption: 'Text',
        },
        {
            id: 2,
            value: 'field',
            caption: 'Field',
        },
    ];

    defineProps<{
        text: string,
        type: string,
    }>();
    defineEmits(['update:text', 'update:type']);
</script>

<template>
    <li class="create-field-item grid grid-cols-3 gap-2">
        <UiFieldSelect
            @input="$emit('update:type', $event.target.value)"
            :modelValue="type"
            :name="'create'"
            :options="defaultOptions"
        />

        <UiFieldTextarea
            @input="$emit('update:text', $event.target.value)"
            :modelValue="text"
        />
    </li>
</template>

<style scoped lang="scss">

</style>
