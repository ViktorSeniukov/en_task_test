<script setup lang="ts">
    import { useCreateInject } from '@features/create/useCreate';

    const { fields, addField } = useCreateInject();
</script>

<template>
    <div class="create-container bg-orange-50 rounded border border-orange-950 p-2">
        <ul class="[&>*:not(:first-child)]:mt-2">
            <CreateFieldItem
                v-for="(field, index) in fields"
                :key="`${index}-${field.id}`"
                v-model:type="field.typeValue"
                v-model:text="field.textValue"
                v-model:missed="field.missedValue"
                v-model:validator="field.validatorValue"
                v-model:placeholder="field.placeholderValue"
            />
        </ul>
        <UiButton
            @click="addField"
            class="mt-4"
        >
            Add item
        </UiButton>
    </div>
</template>

<style scoped lang="scss">
  $height: -webkit-fill-available;

  .create-container {
    height: $height;
  }
</style>
