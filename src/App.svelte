<script>
    import Header from './components/Header/header.svelte';
    import Aside from './components/Aside/aside.svelte';

    const name = 'apiator web client v3';
</script>

<style>
    :global(body) {
        --main-bg-color: #22262a;

        background-color: var(--main-bg-color);
    }
</style>

<main>
    <div>
        <Header version="0.42" />
        <Aside />

    </div>
</main>
