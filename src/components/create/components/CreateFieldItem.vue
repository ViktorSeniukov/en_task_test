<script setup lang="ts">
    import { useCreateFieldItem } from '@/components/create/features/useCreateFieldItem';

    const { type } = defineProps<{
        text: string
        type: string
        missed: string
        validator: string
        placeholder: string
    }>();
    defineEmits(['update:text', 'update:type', 'update:missed', 'update:placeholder', 'update:validator']);

    const {
        defaultOptions,
        isSelectType,
        isTextType,
        isFieldType,
        onChangeType,
    } = useCreateFieldItem({ type });
</script>

<template>
    <li class="create-field-item grid grid-cols-4 gap-2">
        <UiFieldSelect
            @input="$emit('update:type', $event.target.value)"
            @change="onChangeType(type)"
            :modelValue="type"
            :name="'create'"
            :options="defaultOptions"
        />

        <UiFieldTextarea
            v-if="isTextType"
            @input="$emit('update:text', $event.target.value)"
            :modelValue="text"
            class="col-span-3"
        />

        <UiField
            v-if="isFieldType"
            @input="$emit('update:missed', $event.target.value)"
            :modelValue="missed"
            :placeholder="'Missed'"
        />

        <UiField
            v-if="isFieldType"
            @input="$emit('update:validator', $event.target.value)"
            :modelValue="validator"
            :placeholder="'Validator'"
        />

        <UiField
            v-if="isFieldType"
            @input="$emit('update:placeholder', $event.target.value)"
            :modelValue="placeholder"
            :placeholder="'Placeholder'"
        />

        <div
            v-if="!isSelectType"
            class="create-field-item-fields-preloader bg-gray-50 rounded-md border-2 border-stone-500 flex justify-center items-center p-2"
        >
            <p class="w-full text-stone-500 sm:text-sm sm:leading-6">Select type</p>
        </div>
    </li>
</template>

<style scoped lang="scss">
  .create-field-item {
    height: em(50, $fz);

      &__save {
          grid-column: -1/-1;
      }
  }

  .create-field-item-fields-preloader {
    grid-column: 2/-1;
    height: 100%;
  }
</style>
