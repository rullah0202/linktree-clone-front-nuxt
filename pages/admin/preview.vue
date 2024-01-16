<template>
    <div 
        class="fixed overflow-auto w-full h-screen"
        :class="userStore.theme"
    />

        <div 
            id="PreviewAdminPage" 
            class="w-full mx-auto pt-32 relative z-10"
        >
            <div class="mx-auto w-full">
                <div class="h-full mx-auto w-full">
                    <img 
                        class="rounded-full min-w-[120px] w-[120px] mx-auto"
                        src="https://picsum.photos/id/8/320/300"
                    >

                    <div 
                        class="text-center text-2xl font-semibold mt-2"
                        :class="userStore.theme"
                    >
                        @rullah0202
                    </div>

                    <div 
                        class="text-center text-lg font-light mt-2 mb-10"
                        :class="userStore.theme"
                    >
                        <div class="px-8">
                            This is Bio
                        </div>
                    </div>

                    <div v-for="link in fakeLink">
                        <a
                            :href="link.url" 
                            target="_blank"
                            class="flex items-center relative border w-[calc(100%-10px)] mx-auto bg-white mt-4 p-1 rounded-lg"
                        >
                            <img 
                                class="rounded-lg h-[55px] aspect-square"
                                :src="link.image"
                            >

                            <div class="absolute text-[20px] text-center w-full">
                                {{ link.name }}
                            </div>
                        </a>
                    </div>

                    <div class="pb-32"/>
                </div>
            </div>
        </div>
</template>

<script setup>
import { useUserStore } from '~~/stores/user'
const userStore = useUserStore()

const fakeLink = [{
    id: 1,
    name: 'Youtube Channel',
    url: 'https://www.youtube.com/watch?v=g6BVCBkRelw',
    image: 'https://picsum.photos/id/8/320/300'
},
{
    id: 2,
    name: 'Youtube Channel',
    url: 'https://www.youtube.com/watch?v=g6BVCBkRelw',
    image: 'https://picsum.photos/id/8/321/301'
    },
    {
    id: 3,
    name: 'Youtube Channel',
    url: 'https://www.youtube.com/watch?v=g6BVCBkRelw',
    image: 'https://picsum.photos/id/8/322/302'
},
]
</script>

