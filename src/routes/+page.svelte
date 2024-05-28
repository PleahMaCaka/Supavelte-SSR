<script>
    export let data
    $: ({countries} = data)
</script>
<div class="size-full flex flex-col justify-center items-center gap-4">
    <h1 class="text-center text-3xl font-bold underline">
        Supavelte!
    </h1>
    <div class="flex flex-col gap-4">
        <a class="btn btn-primary w-full" href="/auth">
            Authenticate
        </a>
        <a class="btn btn-outline w-full" href="/app">
            Go to App
        </a>
    </div>
    <ul>
        {#each countries as country}
            <li>{country.name}</li>
        {/each}
    </ul>
</div>
