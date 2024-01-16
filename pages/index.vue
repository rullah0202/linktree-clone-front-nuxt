<template>
<div class="mt-10">
    <h1 class="lg:text-5xl text-3xl font-extrabold text-center">Log in to your Linktree account</h1>

    <form 
        class="mt-12" 
        @submit.prevent="login()"
    >
        <div>
            <TextInput
                placeholder="Email: link@gmail.com"
                v-model:input="email"
                inputType="email"
                :error = "errors && errors.email ? errors.email[0]: ''"
            />
        </div>

        <div class="mt-4">
            <TextInput
                placeholder="Password"
                v-model:input="password"
                inputType="password"
                :error = "errors && errors.password ? errors.password[0]: ''"
            />
        </div>

        <div class="mt-10">
            <button
                type="submit"
                class="w-full rounded-full font-bold p-3"
                :disabled="(!email || !password)"
                :class="
                    (email && password) 
                    ? 'bg-[#8228D9] hover:bg-[#6c21B3] text-white' 
                    : 'bg-[#EFF0EB] text-[#A7AAA2]'"
            >
                Log in
            </button>
        </div>
    </form>
    <div class="text-[14px] text-center pt-12">
        Don't have an account?
        <NuxtLink to="/register" class="underline text-[#8228D9]">
            Sign up
        </NuxtLink>
    </div>
</div>
    

</template>

<script setup>
const email = ref(null)
const password = ref(null)
const errors = ref(null)
</script>

