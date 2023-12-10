<script setup lang="ts">
    interface INavigationItem {
        id: number
        href: string
        caption: string
        isActive: boolean
        activeClass: string
    }

    const navigationList: INavigationItem[] = [
        {
            id: 1,
            href: '/',
            caption: 'Home',
            isActive: true,
            activeClass: 'text-lime-600',
        },
        {
            id: 2,
            href: '/train',
            caption: 'Train',
            isActive: true,
            activeClass: 'text-rose-500',
        },
        {
            id: 3,
            href: '/create',
            caption: 'Create',
            isActive: true,
            activeClass: 'text-sky-500',
        },
    ];

    const getItemHref = ({ isActive, href }: INavigationItem): string => (isActive ? href : '');
</script>

<template>
    <header class="h-14 py-2 pl-4 pr-2 flex justify-between">
        <Logo />
        <nav>
            <ul class="flex gap-2 h-full">
                <li
                    v-for="item in navigationList"
                    :key="`${item.id}-${item.href}`"
                >
                    <NuxtLink
                        :to="getItemHref(item)"
                        :exactActiveClass="item.activeClass"
                        :class="[{'bg-zinc-200 text-zinc-300': !item.isActive}, {'bg-orange-50 hover:bg-orange-100': item.isActive}]"
                        class="navigation-link flex items-center justify-center h-full py-1 px-4 rounded"
                    >
                        {{ item.caption }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
