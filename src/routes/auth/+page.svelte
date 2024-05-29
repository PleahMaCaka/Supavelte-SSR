<script lang="ts">
    let isLogin = true
</script>

<div class="size-full flex flex-col justify-center items-center gap-8">
    <form action="?/login" class="flex flex-col gap-2 bg-base-300 rounded-box px-10 py-8 shadow-2xl"
          method="POST"
    >
        <label class="input input-bordered flex items-center gap-2">
            <svg class="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
            </svg>
            <input class="grow"
                   name="email"
                   placeholder="example@gmail.com"
                   type="email"
            />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            <svg class="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      fill-rule="evenodd"/>
            </svg>
            <input class="grow"
                   name="password"
                   type="password"
            />
        </label>
        <div class="divider my-0"></div>
        <button class="btn btn-primary text-white" formaction={isLogin ? "?/login" : "?/signup"}>
            {isLogin ? "Login" : "Sign Up"}
        </button>
        <button on:click|preventDefault={() => isLogin = !isLogin}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            {isLogin ? "Sign Up" : "Login"}
        </button>
    </form>
</div>

