<script setup lang="ts">
    import { useCreate } from '@features/create/useCreate';

    const { fields } = useCreate();
</script>

<template>
    <div class="create-container bg-orange-50 rounded border border-orange-950 p-2">
        <ul class="[&>*:not(:first-child)]:mt-2">
            <CreateFieldItem
                v-for="field in fields"
                :key="field.id"
                v-model:type="field.typeValue"
                v-model:text="field.textValue"
            />
        </ul>
    </div>
</template>

<style scoped lang="scss">
  $height: -webkit-fill-available;

  .create-container {
    height: $height;
  }
</style>
