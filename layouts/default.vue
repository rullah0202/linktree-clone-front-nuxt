<template>
    <div class="h-screen w-full flex justify-between">
        <div class="lg:pt-7 pt-3 lg:px-12 px-6 lg:w-2/3 w-full lg:min-w-[800px]">
            <NuxtLink to="/" class="inline-block">
                <img 
                    src="@/assets/images/linktree-logo.png" 
                    alt="logo"
                    class="
                        lg:w-28
                        w-[78px]
                        select-none
                        "
                    >
            </NuxtLink>
            <main class="w-full">
                <div class="w-full md:max-w-[550px] max-w-[360px] mx-auto">
                    <slot/>
                </div>
            </main>
        </div>
        <div class="lg:block hidden w-1/3 pointer-events-none">
            <img    
                v-if="route.fullPath === '/'"
                class="object-cover w-full h-screen select-none"
                src="@/assets/images/side1.png"
            >
            <img    
                v-else
                class="object-cover w-full h-screen select-none"
                src="@/assets/images/side2.png"
            >
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { onUnmounted } from 'vue';
const userStore = useUserStore()
const { updatedLinkeId } = storeToRefs(userStore)

const route = useRoute()

onUnmounted(() => updatedLinkeId.value = 0)
</script>
