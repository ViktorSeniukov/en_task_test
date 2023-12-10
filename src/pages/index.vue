<script setup lang="ts">
    definePageMeta({
        layout: 'task-layout',
    });

    useSeoMeta({
        title: 'Study En - Learn English enjoy',
        description: 'Learn English enjoy!',
    });
</script>

<template>
    <div class="main-banner">
        <h2 class="text-3xl">You can
            <NuxtLink
                :href="'/train'"
                class="main-banner__link text-black font-bold text-5xl"
            >
                Train
            </NuxtLink>
        </h2>
    </div>
</template>

<style scoped lang="scss">
.main-banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: em(20 40, $fz);
    min-height: em(200, $fz);
    background-image: url("/img/banner.jpg");
    background-size: cover;

    &__link {
        transition: color 200ms;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: em(-3, $fz);
            width: 0;
            height: em(3, $fz);
            background-color: white;
            transition: width 200ms;
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            background-color: black;
            transition: width 200ms;
        }

        &:hover {
            color: white;
            z-index: 100;
            &::before {
                width: 100%;
            }

            &::after {
                z-index: -50;
                width: 100%;
            }
        }
    }
}
</style>
