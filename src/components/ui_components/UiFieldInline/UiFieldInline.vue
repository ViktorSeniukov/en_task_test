<script setup lang="ts">
    const props = defineProps({
        modelValue: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        maxLength: {
            type: Number,
            default: NaN,
        },
    });
    defineEmits(['update:modelValue']);

    const length = computed(() => `${props.maxLength * 10}`);
</script>

<template>
    <div class="ui-field-inline inline-block">
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            :value="modelValue"
            :placeholder="placeholder"
            :type="type"
            :maxlength="maxLength"
            :style="`--length: ${length}px`"
            class="ui-field-inline__input shadow-sm px-1">
    </div>
</template>

<style scoped lang="scss">
  .ui-field-inline {
    &__input {
      width: #{var(--length)};
    }
  }
</style>
