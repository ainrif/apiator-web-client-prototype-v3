<script>
    import Search from './components/Search/search.svelte';
</script>

<style>
    .aside {
        --aside-bg: #161a1d;

        background-color: var(--aside-bg);
    }
</style>

<aside class="aside">
    <Search />
    <div>Endpoints</div>
    <div>Model</div>
</aside>
