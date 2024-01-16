<template>
<div class="mt-10">
    <h1 class="lg:text-5xl text-3xl font-extrabold text-center">Create your account</h1>

    <form 
        class="mt-12" 
        @submit.prevent="register()"
    >
        <div>
            <TextInput
                placeholder="User Name"
                v-model:input="name"
                inputType="text"
                :error = "errors && errors.name ? errors.name[0]: ''"
            />
        </div>

        <div class="mt-4">
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

        <div class="mt-4">
            <TextInput
                placeholder="Confirm Password"
                v-model:input="confirmPassword"
                inputType="password"
            />
        </div>

        <div class="mt-10">
            <button
                type="submit"
                class="w-full rounded-full font-bold p-3"
                :disabled="(!name || !email || !password || !confirmPassword)"
                :class="
                    (name && email && password && confirmPassword) 
                    ? 'bg-[#8228D9] hover:bg-[#6c21B3] text-white' 
                    : 'bg-[#EFF0EB] text-[#A7AAA2]'"
            >
                Create account
            </button>
        </div>
    </form>
    <div class="text-[14px] text-center pt-12">
        Already have an account?
        <NuxtLink to="/" class="underline text-[#8228D9]">
            Log in
        </NuxtLink>
    </div>
</div>
    

</template>

<script setup>
const name = ref(null)
const email = ref(null)
const password = ref(null)
const confirmPassword = ref(null)
const errors = ref(null)
</script>

